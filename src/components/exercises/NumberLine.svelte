<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { NumberLineExercise } from '../../lib/types'
  import NumberPad from '../ui/NumberPad.svelte'
  import { playCorrect, playTry } from '../../lib/sound'

  export let exercise: NumberLineExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  let values: Record<string, string> = {}
  let correct: Record<string, boolean> = {}
  let wrong: Record<string, boolean> = {}
  let active = exercise.marks[0]?.id ?? ''

  const span = exercise.max - exercise.min
  const pos = (v: number) => ((v - exercise.min) / span) * 100

  $: majors = (() => {
    const arr: number[] = []
    for (let v = exercise.min; v <= exercise.max; v += exercise.majorStep) arr.push(v)
    return arr
  })()
  $: minors = (() => {
    const arr: number[] = []
    for (let v = exercise.min; v <= exercise.max; v += 5) arr.push(v)
    return arr
  })()

  function onKey(e: CustomEvent<string>) {
    if (!active || correct[active]) return
    const m = exercise.marks.find((x) => x.id === active)
    if (!m) return
    let v = values[active] ?? ''
    if (e.detail === 'del') v = v.slice(0, -1)
    else if (v.length < 3) v += e.detail
    values[active] = v
    wrong[active] = false
    values = values
    wrong = wrong

    const target = String(m.value)
    if (v === target) {
      correct[active] = true
      correct = correct
      dispatch('correct')
      playCorrect()
      const next = exercise.marks.find((x) => !correct[x.id])
      active = next ? next.id : ''
      if (exercise.marks.every((x) => correct[x.id])) dispatch('solved')
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

  $: allDone = exercise.marks.every((x) => correct[x.id])
</script>

<div class="nl">
  <div class="rail">
    <div class="line"></div>
    {#each minors as v}
      <span class="tick minor" style="left:{pos(v)}%"></span>
    {/each}
    {#each majors as v}
      <span class="tick major" style="left:{pos(v)}%"></span>
      <span class="major-label" style="left:{pos(v)}%">{v}</span>
    {/each}
    {#each exercise.marks as m (m.id)}
      <button
        class="flag"
        class:active={active === m.id && !correct[m.id]}
        style="left:{pos(m.value)}%"
        on:click={() => { if (!correct[m.id]) active = m.id }}
      >
        <span class="pin">🚩</span>
        <span class="box answer-box" class:filled={correct[m.id]} class:wrong={wrong[m.id]} class:active={active === m.id && !correct[m.id]}>
          {correct[m.id] ? m.value : (values[m.id] ?? '')}
        </span>
      </button>
    {/each}
  </div>

  {#if !allDone}
    <NumberPad on:key={onKey} />
  {/if}
</div>

<style>
  .nl { display: flex; flex-direction: column; gap: 40px; }
  .rail {
    position: relative;
    height: 120px;
    margin: 30px 24px 10px;
  }
  .line {
    position: absolute;
    top: 30px; left: 0; right: 0;
    height: 5px;
    background: #fff;
    border-radius: 999px;
  }
  .tick { position: absolute; background: #fff; transform: translateX(-50%); }
  .minor { top: 26px; width: 2px; height: 12px; opacity: 0.6; }
  .major { top: 20px; width: 3px; height: 24px; }
  .major-label {
    position: absolute; top: 0; transform: translateX(-50%);
    color: #fff; font-weight: 800; font-size: 0.9rem;
  }
  .flag {
    position: absolute;
    top: 40px;
    transform: translateX(-50%);
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }
  .pin { font-size: 1.2rem; }
  .box { min-width: 48px; min-height: 46px; font-size: 1.3rem; }
  .flag.active .pin { animation: float 1s ease-in-out infinite; }
</style>
