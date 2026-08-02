<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { ClassifyExercise } from '../../lib/types'
  import { playCorrect, playTap } from '../../lib/sound'

  export let exercise: ClassifyExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  let assigned: Record<string, string> = {} // wordId -> categoryId ('' = keine)
  let locked: Record<string, boolean> = {}

  function color(catId: string): string {
    return exercise.categories.find((c) => c.id === catId)?.color ?? 'transparent'
  }

  function tap(wid: string) {
    if (locked[wid]) return
    const word = exercise.words.find((w) => w.id === wid)!
    const cats = exercise.categories.map((c) => c.id)
    const cur = assigned[wid] ?? ''
    const idx = cur === '' ? -1 : cats.indexOf(cur)
    const nextIdx = idx + 1
    const next = nextIdx >= cats.length ? '' : cats[nextIdx]
    assigned[wid] = next
    assigned = assigned
    playTap()

    if (next === word.category) {
      locked[wid] = true
      locked = locked
      dispatch('correct')
      playCorrect()
      if (exercise.words.every((w) => locked[w.id])) dispatch('solved')
    }
  }
</script>

<div class="classify">
  <div class="legend">
    {#each exercise.categories as c}
      <span class="chip" style="background:{c.color}">{c.label}</span>
    {/each}
  </div>

  <div class="cloud">
    {#each exercise.words as w (w.id)}
      {@const cat = assigned[w.id] ?? ''}
      <button
        class="word"
        class:locked={locked[w.id]}
        style={cat ? `background:${color(cat)};color:#fff;border-color:${color(cat)};` : ''}
        on:click={() => tap(w.id)}
      >
        {w.text}{#if locked[w.id]}<span class="tick"> ✓</span>{/if}
      </button>
    {/each}
  </div>
  <p class="hint">Tippe ein Wort mehrmals, bis die richtige Farbe kommt.</p>
</div>

<style>
  .classify { display: flex; flex-direction: column; gap: 16px; align-items: center; }
  .legend { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
  .chip { color: #fff; font-weight: 800; padding: 6px 16px; border-radius: 999px; box-shadow: var(--shadow-sm); }
  .cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    max-width: 700px;
  }
  .word {
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--ink);
    background: #fff;
    border: 3px solid #e3ddff;
    border-radius: 14px;
    padding: 10px 16px;
    box-shadow: var(--shadow-sm);
    transition: transform 0.08s ease;
  }
  .word:active { transform: scale(0.95); }
  .locked { cursor: default; }
  .tick { font-weight: 900; }
  .hint { color: rgba(255, 255, 255, 0.8); font-weight: 700; font-size: 0.95rem; text-align: center; }
</style>
