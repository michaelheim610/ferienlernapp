<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { FillNumberExercise } from '../../lib/types'
  import { splitTemplate } from '../../lib/check'
  import NumberPad from '../ui/NumberPad.svelte'
  import { playCorrect, playTry } from '../../lib/sound'

  export let exercise: FillNumberExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  let values: Record<string, string> = {}
  let correct: Record<string, boolean> = {}
  let wrong: Record<string, boolean> = {}
  let active: string = exercise.problems[0]?.id ?? ''

  function pick(id: string) {
    if (correct[id]) return
    active = id
  }

  function onKey(e: CustomEvent<string>) {
    const k = e.detail
    if (!active || correct[active]) return
    const p = exercise.problems.find((x) => x.id === active)
    if (!p) return

    let v = values[active] ?? ''
    if (k === 'del') v = v.slice(0, -1)
    else if (v.length < 4) v += k
    values[active] = v
    wrong[active] = false
    values = values
    wrong = wrong

    check(active)
  }

  function check(id: string) {
    const p = exercise.problems.find((x) => x.id === id)
    if (!p) return
    const v = values[id] ?? ''
    const target = String(p.answer)
    if (v === target) {
      correct[id] = true
      correct = correct
      dispatch('correct')
      playCorrect()
      // naechstes offenes Feld aktivieren
      const next = exercise.problems.find((x) => !correct[x.id])
      active = next ? next.id : ''
      if (exercise.problems.every((x) => correct[x.id])) dispatch('solved')
    } else if (v.length >= target.length && v.length > 0) {
      wrong[id] = true
      wrong = wrong
      playTry()
      setTimeout(() => {
        values[id] = ''
        wrong[id] = false
        values = values
        wrong = wrong
      }, 500)
    }
  }

  $: allDone = exercise.problems.every((x) => correct[x.id])
</script>

<div class="fn">
  <div class="grid" style={exercise.columns === 1 ? 'grid-template-columns:1fr;max-width:420px;margin-inline:auto;' : ''}>
    {#each exercise.problems as p (p.id)}
      {@const parts = splitTemplate(p.text)}
      <div class="prob">
        {#each parts as part, i}
          <span class="txt">{part}</span>
          {#if i < parts.length - 1}
            <button
              class="answer-box"
              class:filled={correct[p.id]}
              class:wrong={wrong[p.id]}
              class:active={active === p.id && !correct[p.id]}
              on:click={() => pick(p.id)}
            >{correct[p.id] ? p.answer : (values[p.id] ?? '')}</button>
          {/if}
        {/each}
      </div>
    {/each}
  </div>

  {#if !allDone}
    <div class="pad-wrap">
      <NumberPad on:key={onKey} />
    </div>
  {/if}
</div>

<style>
  .fn { display: flex; flex-direction: column; gap: 18px; }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }
  .prob {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    flex-wrap: wrap;
    background: var(--card);
    border-radius: 16px;
    padding: 12px 10px;
    box-shadow: var(--shadow-sm);
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--ink);
  }
  .txt { white-space: pre; }
  .answer-box { min-width: 56px; min-height: 52px; font-size: 1.4rem; }
  .pad-wrap { margin-top: 4px; }
</style>
