<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { SyllableExercise } from '../../lib/types'
  import { playCorrect, playTry, playTap } from '../../lib/sound'

  export let exercise: SyllableExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  let claps: Record<string, number> = Object.fromEntries(exercise.words.map((w) => [w.id, 0]))
  let done: Record<string, boolean> = {}
  let bad: Record<string, boolean> = {}

  function clap(id: string) {
    if (done[id]) return
    claps[id] = (claps[id] ?? 0) + 1
    claps = claps
    playTap()
  }

  function reset(id: string) {
    claps[id] = 0
    claps = claps
  }

  function checkWord(w: { id: string; syllables: string[] }) {
    if ((claps[w.id] ?? 0) === w.syllables.length) {
      done[w.id] = true
      done = done
      dispatch('correct')
      playCorrect()
      if (exercise.words.every((x) => done[x.id])) dispatch('solved')
    } else {
      bad[w.id] = true
      bad = bad
      playTry()
      setTimeout(() => {
        bad[w.id] = false
        claps[w.id] = 0
        bad = bad
        claps = claps
      }, 600)
    }
  }

  // Anzeige des Wortes: Umlaute lesbar zurueckformen fuer die Anzeige.
  function pretty(word: string): string {
    return word
      .replace(/ae/g, 'ä')
      .replace(/oe/g, 'ö')
      .replace(/ue/g, 'ü')
  }
</script>

<div class="syl">
  {#each exercise.words as w (w.id)}
    <div class="word-card" class:done={done[w.id]} class:bad={bad[w.id]}>
      {#if done[w.id]}
        <div class="split">
          {#each w.syllables as s, i}
            <span class="chunk">
              <span class="arc"></span>
              {s
                .replace(/ae/g, 'ä')
                .replace(/oe/g, 'ö')
                .replace(/ue/g, 'ü')}
            </span>
            {#if i < w.syllables.length - 1}<span class="sep">-</span>{/if}
          {/each}
        </div>
        <div class="king-line">👑 Silbenkönige: <b>{w.syllables.length}</b> Silben</div>
      {:else}
        <div class="word">{pretty(w.word)}</div>
        <div class="arcs">
          {#each Array(claps[w.id] ?? 0) as _}<span class="clap-arc"></span>{/each}
        </div>
        <div class="controls">
          <button class="clap" on:click={() => clap(w.id)}>👏 klatschen <b>{claps[w.id] ?? 0}</b></button>
          <button class="mini" on:click={() => reset(w.id)} aria-label="Zuruecksetzen">↺</button>
          <button class="check" on:click={() => checkWord(w)}>fertig ✓</button>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .syl { display: flex; flex-direction: column; gap: 14px; max-width: 560px; margin-inline: auto; width: 100%; }
  .word-card {
    background: var(--card);
    border-radius: 18px;
    padding: 16px;
    box-shadow: var(--shadow-sm);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .word-card.done { background: #eafff2; }
  .word-card.bad { animation: shake 0.4s; }
  .word { font-size: 2rem; font-weight: 800; color: var(--ink); letter-spacing: 2px; }
  .arcs { display: flex; gap: 8px; min-height: 16px; }
  .clap-arc {
    width: 34px; height: 16px;
    border: 3px solid var(--violet);
    border-bottom: none;
    border-radius: 40px 40px 0 0;
    animation: pop 0.2s ease;
  }
  .controls { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; justify-content: center; }
  .clap {
    min-height: 52px; padding: 0 18px;
    font-size: 1.2rem; font-weight: 800; color: #fff;
    background: linear-gradient(180deg, var(--violet), var(--violet-dark));
    border-radius: 999px; box-shadow: var(--shadow-sm);
  }
  .clap:active { transform: scale(0.96); }
  .mini {
    width: 48px; height: 48px; border-radius: 50%;
    background: var(--card-soft); color: var(--violet-dark);
    font-size: 1.3rem; font-weight: 800; box-shadow: var(--shadow-sm);
  }
  .check {
    min-height: 52px; padding: 0 18px;
    font-size: 1.1rem; font-weight: 800; color: #fff;
    background: linear-gradient(180deg, var(--green), var(--green-dark));
    border-radius: 999px; box-shadow: var(--shadow-sm);
  }
  .split { display: flex; align-items: flex-end; gap: 6px; font-size: 1.8rem; font-weight: 800; color: var(--ink); }
  .chunk { position: relative; padding-top: 12px; }
  .chunk .arc {
    position: absolute; top: 0; left: 0; right: 0;
    height: 12px;
    border: 3px solid var(--pink);
    border-bottom: none;
    border-radius: 40px 40px 0 0;
  }
  .sep { color: var(--ink-soft); }
  .king-line { font-weight: 800; color: var(--green-dark); }
</style>
