-- ============================================================================
-- Ferienlern-App - Supabase Schema
-- Einmalig im Supabase SQL-Editor ausfuehren (Dashboard -> SQL Editor -> New query).
--
-- Sicherheitsidee: Die Tabelle ist per RLS komplett gesperrt (kein direkter
-- Lese-/Schreibzugriff mit dem oeffentlichen Key). Zugriff NUR ueber die drei
-- Funktionen unten. Der 4-stellige Code (PIN) schuetzt das Schreiben.
-- Gespeichert wird nur: Spitzname, Avatar, Sterne, geloeste Aufgaben-IDs.
-- Die Rangliste gibt NUR Spitzname + Avatar + Sterne heraus (keine PIN, kein Detail).
-- ============================================================================

create table if not exists public.players (
  id uuid primary key default gen_random_uuid(),
  class_code text not null,
  name text not null,
  name_key text generated always as (lower(btrim(name))) stored,
  avatar text not null default '🦄',
  pin text not null,
  stars int not null default 0,
  solved jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (class_code, name_key)
);

-- Tabelle komplett sperren (Zugriff nur ueber die Funktionen unten).
alter table public.players enable row level security;
revoke all on public.players from anon, authenticated;

-- ----------------------------------------------------------------------------
-- Beitreten oder neu anlegen. Bei bestehendem Kind wird die PIN geprueft.
-- Gibt id + aktueller Stand zurueck (dient zugleich als "Pull" beim Login).
-- ----------------------------------------------------------------------------
create or replace function public.join_or_create(
  p_class text, p_name text, p_avatar text, p_pin text
) returns table (id uuid, stars int, solved jsonb, avatar text)
language plpgsql security definer set search_path = public as $$
declare v public.players;
begin
  if btrim(coalesce(p_class,'')) = '' or btrim(coalesce(p_name,'')) = ''
     or coalesce(p_pin,'') = '' then
    raise exception 'missing_fields' using errcode = '22023';
  end if;

  select * into v from public.players
    where class_code = lower(btrim(p_class)) and name_key = lower(btrim(p_name));

  if found then
    if v.pin <> p_pin then
      raise exception 'wrong_pin' using errcode = '28000';
    end if;
  else
    insert into public.players (class_code, name, avatar, pin)
      values (lower(btrim(p_class)), btrim(p_name), coalesce(nullif(p_avatar,''), '🦄'), p_pin)
      returning * into v;
  end if;

  return query select v.id, v.stars, v.solved, v.avatar;
end; $$;

-- ----------------------------------------------------------------------------
-- Fortschritt hochladen. Server fuehrt die geloesten Aufgaben zusammen (Union),
-- daher konfliktfrei ueber mehrere Geraete. Sterne = Anzahl geloester Aufgaben.
-- ----------------------------------------------------------------------------
create or replace function public.push_progress(
  p_id uuid, p_pin text, p_solved jsonb
) returns table (stars int, solved jsonb)
language plpgsql security definer set search_path = public as $$
declare v public.players;
begin
  update public.players p
    set solved = p.solved || coalesce(p_solved, '{}'::jsonb),
        updated_at = now()
    where p.id = p_id and p.pin = p_pin
    returning * into v;

  if not found then
    raise exception 'wrong_pin' using errcode = '28000';
  end if;

  update public.players p
    set stars = (select count(*) from jsonb_object_keys(p.solved))
    where p.id = p_id
    returning * into v;

  return query select v.stars, v.solved;
end; $$;

-- ----------------------------------------------------------------------------
-- Klassen-Rangliste: nur Spitzname, Avatar, Sterne (keine PIN, kein Detail).
-- ----------------------------------------------------------------------------
create or replace function public.leaderboard(p_class text)
returns table (name text, avatar text, stars int)
language sql security definer set search_path = public as $$
  select name, avatar, stars
  from public.players
  where class_code = lower(btrim(p_class))
  order by stars desc, updated_at asc
  limit 100;
$$;

-- Nur die Funktionen sind ausfuehrbar (mit dem oeffentlichen Key = Rolle anon).
grant execute on function public.join_or_create(text,text,text,text) to anon, authenticated;
grant execute on function public.push_progress(uuid,text,jsonb) to anon, authenticated;
grant execute on function public.leaderboard(text) to anon, authenticated;
