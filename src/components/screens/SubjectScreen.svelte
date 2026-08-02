<script lang="ts">
  import type { Subject } from '../../lib/types'
  import { topicsOf, subjects } from '../../data/topics'
  import { goHome, startTopic } from '../../lib/nav'
  import { progress } from '../../lib/store'

  export let subject: Subject
  $: info = subjects.find((s) => s.id === subject)!
  $: topics = topicsOf(subject)

  function topicDone(exercises: { id: string }[]): { done: number; total: number } {
    const total = exercises.length
    const done = exercises.filter((e) => $progress.solved[e.id]).length
    return { done, total }
  }
</script>

<div class="screen">
  <div class="topbar">
    <button class="iconbtn" on:click={goHome} aria-label="Zurück">←</button>
    <h2 class="space-title">{info.emoji} {info.title}</h2>
    <span class="spacer"></span>
    <span class="star-badge">⭐ {$progress.stars}</span>
  </div>

  <p class="space-sub intro">Wähle eine Mission:</p>

  <div class="missions">
    {#each topics as t (t.id)}
      {@const st = topicDone(t.exercises)}
      {@const complete = st.done === st.total}
      <button class="mission" class:complete on:click={() => startTopic(subject, t.id)}>
        <span class="num">{t.index}</span>
        <span class="body">
          <span class="title">{t.emoji} {t.title}</span>
          <span class="sub">{t.subtitle}</span>
        </span>
        <span class="status">
          {#if complete}
            <span class="check">✓</span>
          {:else}
            <span class="frac">{st.done}/{st.total}</span>
          {/if}
        </span>
      </button>
    {/each}
  </div>
</div>

<style>
  .intro { margin: 2px 4px 14px; }
  .missions { display: flex; flex-direction: column; gap: 12px; }
  .mission {
    display: flex;
    align-items: center;
    gap: 14px;
    background: #fff;
    border-radius: 20px;
    padding: 14px 16px;
    box-shadow: var(--shadow-sm);
    text-align: left;
    transition: transform 0.08s ease;
  }
  .mission:active { transform: scale(0.98); }
  .mission.complete { background: #eafff2; }
  .num {
    flex: none;
    width: 46px; height: 46px;
    border-radius: 50%;
    background: linear-gradient(180deg, var(--violet), var(--violet-dark));
    color: #fff;
    font-size: 1.4rem; font-weight: 800;
    display: flex; align-items: center; justify-content: center;
  }
  .mission.complete .num { background: linear-gradient(180deg, var(--green), var(--green-dark)); }
  .body { flex: 1; display: flex; flex-direction: column; }
  .body .title { font-size: 1.2rem; font-weight: 800; color: var(--ink); }
  .body .sub { color: var(--ink-soft); font-weight: 700; font-size: 0.95rem; }
  .status { flex: none; }
  .status .check {
    width: 40px; height: 40px; border-radius: 50%;
    background: var(--green); color: #fff; font-size: 1.4rem; font-weight: 900;
    display: flex; align-items: center; justify-content: center;
  }
  .status .frac { font-weight: 800; color: var(--ink-soft); font-size: 1.1rem; }
</style>
