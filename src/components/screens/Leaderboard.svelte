<script lang="ts">
  import { onMount } from 'svelte'
  import { goHome } from '../../lib/nav'
  import { profiles } from '../../lib/profiles'
  import { fetchLeaderboard, type LeaderRow, type CloudError } from '../../lib/cloud'
  import { normalize } from '../../lib/check'

  $: active = $profiles.profiles.find((p) => p.id === $profiles.activeId)

  let rows: LeaderRow[] = []
  let loading = true
  let error: CloudError | null = null

  async function load() {
    if (!active?.classCode) return
    loading = true
    error = null
    try {
      rows = await fetchLeaderboard(active.classCode)
    } catch (e) {
      error = e as CloudError
    } finally {
      loading = false
    }
  }

  onMount(load)

  $: totalStars = rows.reduce((sum, r) => sum + (r.stars || 0), 0)
  $: isMe = (r: LeaderRow) => active && normalize(r.name) === normalize(active.name)
  const medal = (i: number) => (i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`)
</script>

<div class="screen">
  <div class="topbar">
    <button class="iconbtn" on:click={goHome} aria-label="Zurück">←</button>
    <h2 class="space-title">🏆 Klassen-Sterne</h2>
    <span class="spacer"></span>
    <button class="iconbtn" on:click={load} aria-label="Aktualisieren">↻</button>
  </div>

  <div class="class-card">
    <span class="code">Klasse: <b>{active?.classCode ?? ''}</b></span>
    <div class="total">
      <span class="big">⭐ {totalStars}</span>
      <span class="lbl">Sterne zusammen gesammelt!</span>
    </div>
    <p class="cheer">Gemeinsam sind wir startklar für die 3. Klasse! 🚀</p>
  </div>

  {#if loading}
    <p class="info">Lade Rangliste… 🛰️</p>
  {:else if error === 'OFFLINE'}
    <p class="info">Kein Internet – die Rangliste braucht kurz Netz. Offline lernt ihr trotzdem weiter! ✈️</p>
  {:else if error}
    <p class="info">Hm, das hat nicht geklappt. Probier's nochmal mit ↻.</p>
  {:else if rows.length === 0}
    <p class="info">Noch keine Sterne in der Klasse – sei die/der Erste! 🌟</p>
  {:else}
    <ul class="board">
      {#each rows as r, i (r.name)}
        <li class="row" class:me={isMe(r)}>
          <span class="rank">{medal(i)}</span>
          <span class="av">{r.avatar}</span>
          <span class="nm">{r.name}{#if isMe(r)} <span class="youtag">(du)</span>{/if}</span>
          <span class="st">⭐ {r.stars}</span>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .class-card {
    background: linear-gradient(180deg, var(--violet), var(--violet-dark));
    color: #fff;
    border-radius: var(--radius-lg);
    padding: 18px;
    box-shadow: var(--shadow);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }
  .class-card .code { font-weight: 800; opacity: 0.9; }
  .total { display: flex; flex-direction: column; gap: 2px; }
  .total .big { font-size: 2.4rem; font-weight: 800; }
  .total .lbl { font-weight: 700; opacity: 0.95; }
  .cheer { margin: 0; font-weight: 700; opacity: 0.95; }

  .info { color: #fff; font-weight: 700; text-align: center; background: rgba(255,255,255,0.14); padding: 14px; border-radius: 16px; }

  .board { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
  .row {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    border-radius: 16px;
    padding: 12px 16px;
    box-shadow: var(--shadow-sm);
  }
  .row.me { background: #eafff2; outline: 3px solid var(--green); }
  .rank { font-size: 1.3rem; font-weight: 800; min-width: 34px; text-align: center; }
  .av { font-size: 1.8rem; }
  .nm { flex: 1; font-size: 1.2rem; font-weight: 800; color: var(--ink); }
  .youtag { color: var(--green-dark); font-size: 0.9rem; }
  .st { font-weight: 800; color: var(--gold); background: #fff7db; padding: 4px 12px; border-radius: 999px; }
</style>
