<script lang="ts">
  import { subjects, topicsOf } from '../../data/topics'
  import { goSubject, goLeaderboard } from '../../lib/nav'
  import { progress } from '../../lib/store'
  import { profiles } from '../../lib/profiles'
  import { setSoundEnabled } from '../../lib/sound'
  import Astronaut from '../ui/Astronaut.svelte'
  import ProgressBar from '../ui/ProgressBar.svelte'
  import SyncBadge from '../ui/SyncBadge.svelte'

  $: active = $profiles.profiles.find((p) => p.id === $profiles.activeId)
  $: isCloud = !!active?.classCode

  function switchProfile() {
    profiles.clearActive()
  }

  function subjectProgress(subjectId: 'mathe' | 'deutsch'): number {
    const topics = topicsOf(subjectId)
    const all = topics.flatMap((t) => t.exercises)
    if (all.length === 0) return 0
    const done = all.filter((e) => $progress.solved[e.id]).length
    return done / all.length
  }

  function toggleSound() {
    progress.toggleSound()
    setSoundEnabled(!$progress.soundOn)
  }
</script>

<div class="screen home">
  <div class="topbar">
    <button class="profile-chip" on:click={switchProfile} aria-label="Profil wechseln">
      <span class="pa">{active?.avatar ?? '🙂'}</span>
      <span class="pn">{active?.name ?? ''}</span>
      <span class="sw">⇄</span>
    </button>
    <SyncBadge />
    <span class="spacer"></span>
    <span class="star-badge">⭐ {$progress.stars}</span>
    <button class="iconbtn" on:click={toggleSound} aria-label="Ton an/aus">
      {$progress.soundOn ? '🔊' : '🔇'}
    </button>
  </div>

  <header class="hero">
    <Astronaut size={110} />
    <h1 class="space-title">Startklar für die<br />3. Klasse?</h1>
    <p class="space-sub">Hallo {active?.name ?? ''}! Wähle dein Fach 🚀</p>
  </header>

  <div class="tiles">
    {#each subjects as s}
      {@const p = subjectProgress(s.id)}
      <button class="tile" style="--tile:{s.color}" on:click={() => goSubject(s.id)}>
        <span class="emoji">{s.emoji}</span>
        <span class="name">{s.title}</span>
        <span class="bar"><ProgressBar value={p} showRocket={false} /></span>
        <span class="frac">{Math.round(p * 100)}%</span>
      </button>
    {/each}
  </div>

  {#if isCloud}
    <button class="class-btn" on:click={goLeaderboard}>
      🏆 Klassen-Sterne ansehen
    </button>
  {/if}
</div>

<style>
  .home { align-items: stretch; }
  .profile-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.16);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: #fff;
    padding: 6px 14px 6px 8px;
    border-radius: 999px;
    font-weight: 800;
    box-shadow: var(--shadow-sm);
  }
  .profile-chip:active { transform: scale(0.96); }
  .profile-chip .pa { font-size: 1.5rem; }
  .profile-chip .pn { font-size: 1.05rem; max-width: 40vw; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .profile-chip .sw { opacity: 0.8; font-size: 1rem; }
  .hero { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; margin: 6px 0 22px; }
  .hero h1 { font-size: clamp(1.8rem, 7vw, 2.6rem); line-height: 1.1; }
  .tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
    align-content: start;
  }
  .tile {
    background: linear-gradient(180deg, color-mix(in srgb, var(--tile) 88%, white), var(--tile));
    border-radius: var(--radius-lg);
    padding: 24px 18px;
    box-shadow: var(--shadow);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    min-height: 190px;
    justify-content: center;
    transition: transform 0.1s ease;
  }
  .tile:active { transform: scale(0.97); }
  .tile .emoji { font-size: 3.4rem; }
  .tile .name { font-size: 1.7rem; font-weight: 800; }
  .tile .bar { width: 100%; }
  .tile .frac { font-weight: 800; opacity: 0.95; }
  .class-btn {
    margin: 18px auto 0;
    display: block;
    background: linear-gradient(180deg, var(--gold), #e69500);
    color: #3a2a00;
    font-weight: 800;
    font-size: 1.15rem;
    padding: 14px 24px;
    border-radius: 999px;
    box-shadow: var(--shadow-sm);
  }
  .class-btn:active { transform: scale(0.97); }
</style>
