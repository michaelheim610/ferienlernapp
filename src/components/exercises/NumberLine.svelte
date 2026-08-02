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

  // Pro Zahl ein kleines, gut lesbares 10er-Fenster (Ausschnitt) mit Pfeil.
  function windowFor(v: number) {
    const lo = Math.floor(v / 10) * 10
    const hi = lo + 10
    return { lo, hi, pos: (v - lo) / 10 } // pos 0..1 im Fenster
  }

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
  <div class="cards">
    {#each exercise.marks as m (m.id)}
      {@const w = windowFor(m.value)}
      <div class="excerpt" class:done={correct[m.id]}>
        <div class="rail">
          <span class="arrow" class:active={active === m.id && !correct[m.id]} style="left:{w.pos * 100}%">🔻</span>
          <div class="line"></div>
          {#each Array(11) as _, t}
            <span class="tick" class:major={t === 0 || t === 10} style="left:{t * 10}%"></span>
          {/each}
          <span class="end" style="left:0%">{w.lo}</span>
          <span class="end" style="left:100%">{w.hi}</span>
        </div>
        <div class="ask">
          <span class="q">Welche Zahl zeigt der Pfeil?</span>
          <button
            class="answer-box"
            class:filled={correct[m.id]}
            class:wrong={wrong[m.id]}
            class:active={active === m.id && !correct[m.id]}
            on:click={() => { if (!correct[m.id]) active = m.id }}
          >{correct[m.id] ? m.value : (values[m.id] ?? '')}</button>
        </div>
      </div>
    {/each}
  </div>

  {#if !allDone}
    <NumberPad on:key={onKey} />
  {/if}
</div>

<style>
  .nl { display: flex; flex-direction: column; gap: 18px; }
  .cards { display: flex; flex-direction: column; gap: 16px; max-width: 560px; margin-inline: auto; width: 100%; }
  .excerpt {
    background: var(--card);
    border-radius: 18px;
    padding: 22px 22px 14px;
    box-shadow: var(--shadow-sm);
  }
  .excerpt.done { background: #eafff2; }

  .rail { position: relative; height: 62px; margin: 6px 6px 0; }
  .line {
    position: absolute;
    left: 0; right: 0; top: 34px;
    height: 5px;
    background: var(--violet);
    border-radius: 999px;
  }
  .tick {
    position: absolute;
    top: 28px;
    width: 3px; height: 16px;
    background: var(--violet);
    transform: translateX(-50%);
    border-radius: 2px;
    opacity: 0.7;
  }
  .tick.major { top: 22px; height: 28px; width: 4px; opacity: 1; }
  .end {
    position: absolute;
    top: 52px;
    transform: translateX(-50%);
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--ink);
  }
  .arrow {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    font-size: 1.5rem;
    filter: drop-shadow(0 2px 2px rgba(0,0,0,0.2));
  }
  .arrow.active { animation: bounce 0.9s ease-in-out infinite; }
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(5px); }
  }

  .ask {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 10px;
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--ink);
  }
  .ask .answer-box { min-width: 64px; min-height: 54px; font-size: 1.5rem; }
</style>
