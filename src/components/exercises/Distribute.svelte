<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { DistributeExercise } from '../../lib/types'
  import { playCorrect, playTry, playTap } from '../../lib/sound'

  export let exercise: DistributeExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  let placed: Record<string, number[]> = Object.fromEntries(
    exercise.problems.map((p) => [p.id, Array(p.plates).fill(0)])
  )
  let correct: Record<string, boolean> = {}
  let wrong: Record<string, boolean> = {}

  function remaining(p: { id: string; total: number }): number {
    return p.total - (placed[p.id]?.reduce((a, b) => a + b, 0) ?? 0)
  }

  function tapPlate(pid: string, pi: number) {
    const p = exercise.problems.find((x) => x.id === pid)!
    if (correct[pid] || remaining(p) <= 0) return
    placed[pid][pi]++
    placed = placed
    playTap()
    if (remaining(p) === 0) check(p)
  }

  function check(p: { id: string; total: number; plates: number }) {
    const arr = placed[p.id]
    const each = p.total / p.plates
    if (arr.every((n) => n === each)) {
      correct[p.id] = true
      correct = correct
      dispatch('correct')
      playCorrect()
      if (exercise.problems.every((x) => correct[x.id])) dispatch('solved')
    } else {
      wrong[p.id] = true
      wrong = wrong
      playTry()
      setTimeout(() => {
        placed[p.id] = Array(p.plates).fill(0)
        wrong[p.id] = false
        placed = placed
        wrong = wrong
      }, 600)
    }
  }
</script>

<div class="dist">
  {#each exercise.problems as p (p.id)}
    <div class="prob" class:done={correct[p.id]} class:bad={wrong[p.id]}>
      <div class="pile">
        <span class="count">{remaining(p)}×</span>
        <span class="big">{p.emoji}</span>
        <span class="lbl">noch zu verteilen</span>
      </div>
      <div class="plates">
        {#each placed[p.id] ?? [] as n, pi}
          <button class="plate" on:click={() => tapPlate(p.id, pi)} disabled={correct[p.id]}>
            <span class="cookies">
              {#each Array(n) as _}<span>{p.emoji}</span>{/each}
            </span>
          </button>
        {/each}
      </div>
      <div class="eq">
        {p.total} : {p.plates} =
        <b class="res" class:show={correct[p.id]}>{correct[p.id] ? p.total / p.plates : '?'}</b>
      </div>
    </div>
  {/each}
</div>

<style>
  .dist { display: flex; flex-direction: column; gap: 16px; max-width: 640px; margin-inline: auto; width: 100%; }
  .prob {
    background: var(--card);
    border-radius: 18px;
    padding: 14px;
    box-shadow: var(--shadow-sm);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .prob.done { background: #eafff2; }
  .prob.bad { animation: shake 0.4s; }
  .pile { display: flex; align-items: center; gap: 8px; font-weight: 800; color: var(--ink); }
  .pile .big { font-size: 1.8rem; }
  .pile .count { font-size: 1.4rem; color: var(--violet-dark); }
  .pile .lbl { color: var(--ink-soft); font-size: 0.95rem; }
  .plates { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
  .plate {
    min-width: 90px;
    min-height: 90px;
    flex: 1 1 90px;
    max-width: 160px;
    border-radius: 50% / 40%;
    background: radial-gradient(circle at 50% 40%, #fff 60%, #e7e0ff 100%);
    border: 4px solid var(--violet);
    box-shadow: var(--shadow-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }
  .plate:active { transform: scale(0.97); }
  .cookies { display: flex; flex-wrap: wrap; gap: 2px; justify-content: center; font-size: 1.3rem; }
  .eq { font-size: 1.5rem; font-weight: 800; color: var(--ink); text-align: center; }
  .res { color: var(--ink-soft); }
  .res.show { color: var(--green-dark); }
</style>
