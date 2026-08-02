<script lang="ts">
  import { subjects, topicsOf } from '../../data/topics'
  import { goSubject } from '../../lib/nav'
  import { progress } from '../../lib/store'
  import { setSoundEnabled } from '../../lib/sound'
  import Astronaut from '../ui/Astronaut.svelte'
  import ProgressBar from '../ui/ProgressBar.svelte'

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
    <span class="star-badge">⭐ {$progress.stars}</span>
    <span class="spacer"></span>
    <button class="iconbtn" on:click={toggleSound} aria-label="Ton an/aus">
      {$progress.soundOn ? '🔊' : '🔇'}
    </button>
  </div>

  <header class="hero">
    <Astronaut size={110} />
    <h1 class="space-title">Startklar für die<br />3. Klasse?</h1>
    <p class="space-sub">Hallo Lisa! Wähle dein Fach 🚀</p>
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
</div>

<style>
  .home { align-items: stretch; }
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
</style>
