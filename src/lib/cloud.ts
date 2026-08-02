import { supabase } from './supabase'

export interface CloudState {
  id: string
  stars: number
  solved: Record<string, boolean>
  avatar: string
}

export interface LeaderRow {
  name: string
  avatar: string
  stars: number
}

// Freundliche Fehlercodes fuer die UI.
export type CloudError = 'WRONG_PIN' | 'MISSING' | 'OFFLINE' | 'ERROR'

function mapError(error: { message?: string } | null): CloudError {
  const msg = (error?.message || '').toLowerCase()
  if (msg.includes('wrong_pin')) return 'WRONG_PIN'
  if (msg.includes('missing_fields')) return 'MISSING'
  if (msg.includes('fetch') || msg.includes('network') || msg.includes('failed')) return 'OFFLINE'
  return 'ERROR'
}

/** Klasse beitreten oder Kind anlegen. Dient auch als "Pull" beim Anmelden. */
export async function joinOrCreate(
  classCode: string,
  name: string,
  avatar: string,
  pin: string
): Promise<CloudState> {
  const { data, error } = await supabase.rpc('join_or_create', {
    p_class: classCode,
    p_name: name,
    p_avatar: avatar,
    p_pin: pin
  })
  if (error) throw mapError(error)
  const row = Array.isArray(data) ? data[0] : data
  if (!row) throw 'ERROR' as CloudError
  return { id: row.id, stars: row.stars ?? 0, solved: row.solved ?? {}, avatar: row.avatar ?? avatar }
}

/** Fortschritt hochladen (Server fuehrt zusammen). Gibt neuen Gesamtstand zurueck. */
export async function pushProgress(
  id: string,
  pin: string,
  solved: Record<string, boolean>
): Promise<{ stars: number; solved: Record<string, boolean> }> {
  const { data, error } = await supabase.rpc('push_progress', {
    p_id: id,
    p_pin: pin,
    p_solved: solved
  })
  if (error) throw mapError(error)
  const row = Array.isArray(data) ? data[0] : data
  return { stars: row?.stars ?? 0, solved: row?.solved ?? solved }
}

/** Klassen-Rangliste (nur Spitzname, Avatar, Sterne). */
export async function fetchLeaderboard(classCode: string): Promise<LeaderRow[]> {
  const { data, error } = await supabase.rpc('leaderboard', { p_class: classCode })
  if (error) throw mapError(error)
  return (data ?? []) as LeaderRow[]
}
