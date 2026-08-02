<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { HundredChartExercise } from '../../lib/types'
  import NumberPad from '../ui/NumberPad.svelte'
  import { playCorrect, playTry } from '../../lib/sound'

  export let exercise: HundredChartExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  let values: Record<string, string> = {}
  let correct: Record<string, boolean> = {}
  let wrong: Record<string, boolean> = {}
  let active = exercise.targets[0]?.id ?? ''

  $: anchorSet = new Set(exercise.anchors)
  $: targetByValue = new Map(exercise.targets.map((t) => [t.value, t]))
  const cells = Array.from({ length: 100 }, (_, i) => i + 1)

  function onKey(e: CustomEvent<string>) {
    if (!active || correct[active]) return
    const t = exercise.targets.find((x) => x.id === active)
    if (!t) return
    let v = values[active] ?? ''
    if (e.detail === 'del') v = v.slice(0, -1)
    else if (v.length < 3) v += e.detail
    values[active] = v
    wrong[active] = false
    values = values
    wrong = wrong

    const target = String(t.value)
    if (v === target) {
      correct[active] = true
      correct = correct
      dispatch('correct')
      playCorrect()
      const next = exercise.targets.find((x) => !correct[x.id])
      active = next ? next.id : ''
      if (exercise.targets.every((x) => correct[x.id])) dispatch('solved')
    } else if (v.length >= target.length) {
      wrong[active] = true
      wrong = wrong
      playTry()
      const cur = active
      setTimeout(() => {
        values[cur] = ''
        wrong[cur] = false
        values = values
        wrong = wrong
      }, 500)
    }
  }

  $: allDone = exercise.targets.every((x) => correct[x.id])
</script>

<div class="hc">
  <div class="grid">
    {#each cells as n}
      {@const t = targetByValue.get(n)}
      {#if anchorSet.has(n)}
        <div class="cell anchor">{n}</div>
      {:else if t}
        <button
          class="cell target"
          class:active={active === t.id && !correct[t.id]}
          class:filled={correct[t.id]}
          class:wrong={wrong[t.id]}
          on:click={() => { if (!correct[t.id]) active = t.id }}
        >
          {#if correct[t.id]}
            <span class="tn">{n}</span>
          {:else}
            <span class="emoji">{t.emoji}</span>
            <span class="typed">{values[t.id] ?? ''}</span>
          {/if}
        </button>
      {:else}
        <div class="cell empty"></div>
      {/if}
    {/each}
  </div>

  {#if active}
    <div class="cur">
      Welche Zahl ist <span class="e">{exercise.targets.find((t) => t.id === active)?.emoji}</span>?
    </div>
  {/if}

  {#if !allDone}
    <NumberPad on:key={onKey} />
  {/if}
</div>

<style>
  .hc { display: flex; flex-direction: column; gap: 14px; align-items: center; }
  .grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 3px;
    width: 100%;
    max-width: 460px;
    background: rgba(255, 255, 255, 0.15);
    padding: 5px;
    border-radius: 12px;
  }
  .cell {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: clamp(0.6rem, 2.4vw, 0.95rem);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.55);
    color: var(--ink-soft);
    position: relative;
  }
  .anchor { background: #fff; color: var(--ink); }
  .empty { background: rgba(255, 255, 255, 0.35); }
  .target {
    background: #fff3c4;
    border: 2px solid var(--gold);
    font-size: clamp(0.8rem, 3vw, 1.1rem);
    padding: 0;
  }
  .target.active { border-color: var(--violet); box-shadow: 0 0 0 3px rgba(124, 92, 255, 0.4); }
  .target.filled { background: #d6ffe6; border-color: var(--green-dark); color: var(--green-dark); }
  .target.wrong { animation: shake 0.4s; border-color: var(--red); }
  .typed { position: absolute; bottom: 0; right: 2px; font-size: 0.7rem; color: var(--violet-dark); }
  .cur { color: #fff; font-weight: 800; font-size: 1.2rem; }
  .cur .e { font-size: 1.5rem; }
</style>
