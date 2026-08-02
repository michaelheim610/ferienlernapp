<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { PlaceValueExercise } from '../../lib/types'
  import PlaceBlocks from './parts/PlaceBlocks.svelte'
  import NumberPad from '../ui/NumberPad.svelte'
  import { playCorrect, playTry } from '../../lib/sound'

  export let exercise: PlaceValueExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  let values: Record<string, string> = {}
  let correct: Record<string, boolean> = {}
  let wrong: Record<string, boolean> = {}
  let active = exercise.problems[0]?.id ?? ''

  const ans = (p: { z: number; e: number }) => p.z * 10 + p.e

  function onKey(e: CustomEvent<string>) {
    if (!active || correct[active]) return
    const p = exercise.problems.find((x) => x.id === active)
    if (!p) return
    let v = values[active] ?? ''
    if (e.detail === 'del') v = v.slice(0, -1)
    else if (v.length < 3) v += e.detail
    values[active] = v
    wrong[active] = false
    values = values
    wrong = wrong

    const target = String(ans(p))
    if (v === target) {
      correct[active] = true
      correct = correct
      dispatch('correct')
      playCorrect()
      const next = exercise.problems.find((x) => !correct[x.id])
      active = next ? next.id : ''
      if (exercise.problems.every((x) => correct[x.id])) dispatch('solved')
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

  $: allDone = exercise.problems.every((x) => correct[x.id])
</script>

<div class="pv">
  <div class="grid">
    {#each exercise.problems as p (p.id)}
      <div class="card2" class:done={correct[p.id]}>
        <PlaceBlocks z={p.z} e={p.e} />
        <button
          class="answer-box"
          class:filled={correct[p.id]}
          class:wrong={wrong[p.id]}
          class:active={active === p.id && !correct[p.id]}
          on:click={() => { if (!correct[p.id]) active = p.id }}
        >{correct[p.id] ? ans(p) : (values[p.id] ?? '')}</button>
      </div>
    {/each}
  </div>
  {#if !allDone}
    <NumberPad on:key={onKey} />
  {/if}
</div>

<style>
  .pv { display: flex; flex-direction: column; gap: 18px; align-items: center; }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px;
    width: 100%;
    max-width: 640px;
  }
  .card2 {
    background: var(--card);
    border-radius: 18px;
    padding: 14px;
    box-shadow: var(--shadow-sm);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    min-height: 120px;
    justify-content: space-between;
  }
  .card2.done { background: #eafff2; }
</style>
