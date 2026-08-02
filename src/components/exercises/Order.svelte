<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { OrderExercise } from '../../lib/types'
  import { playCorrect, playTry, playTap } from '../../lib/sound'

  export let exercise: OrderExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  let seq: Record<string, string[]> = Object.fromEntries(exercise.groups.map((g) => [g.id, []]))
  let done: Record<string, boolean> = {}
  let badGroup: string | null = null

  function sorted(words: string[]): string[] {
    return [...words].sort((a, b) => a.localeCompare(b, 'de'))
  }

  function orderOf(gid: string, word: string): number {
    const i = (seq[gid] ?? []).indexOf(word)
    return i < 0 ? 0 : i + 1
  }

  function tap(gid: string, word: string) {
    const g = exercise.groups.find((x) => x.id === gid)!
    if (done[gid] || (seq[gid] ?? []).includes(word)) return
    const target = sorted(g.words)
    const nextExpected = target[seq[gid].length]
    if (word === nextExpected) {
      seq[gid] = [...seq[gid], word]
      seq = seq
      playTap()
      if (seq[gid].length === g.words.length) {
        done[gid] = true
        done = done
        dispatch('correct')
        playCorrect()
        if (exercise.groups.every((x) => done[x.id])) dispatch('solved')
      }
    } else {
      badGroup = gid
      playTry()
      setTimeout(() => {
        seq[gid] = []
        seq = seq
        badGroup = null
      }, 550)
    }
  }
</script>

<div class="order">
  {#each exercise.groups as g (g.id)}
    <div class="group" class:done={done[g.id]} class:bad={badGroup === g.id}>
      {#each g.words as word}
        {@const num = orderOf(g.id, word)}
        <button class="word" class:picked={num > 0} on:click={() => tap(g.id, word)} disabled={done[g.id]}>
          {#if num > 0}<span class="badge">{num}</span>{/if}
          {word}
        </button>
      {/each}
    </div>
  {/each}
  <p class="hint">Tippe die Wörter von A bis Z der Reihe nach an.</p>
</div>

<style>
  .order { display: flex; flex-direction: column; gap: 16px; max-width: 620px; margin-inline: auto; width: 100%; align-items: center; }
  .group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    background: rgba(255, 255, 255, 0.12);
    padding: 14px;
    border-radius: 18px;
    width: 100%;
  }
  .group.done { background: rgba(61, 220, 132, 0.25); }
  .group.bad { animation: shake 0.4s; }
  .word {
    position: relative;
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--ink);
    background: #fff;
    border: 3px solid #e3ddff;
    border-radius: 14px;
    padding: 12px 18px;
    box-shadow: var(--shadow-sm);
  }
  .word:active { transform: scale(0.96); }
  .picked { border-color: var(--green-dark); background: #eafff2; }
  .badge {
    position: absolute;
    top: -10px; left: -10px;
    width: 26px; height: 26px;
    background: var(--violet);
    color: #fff;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.9rem;
  }
  .hint { color: rgba(255, 255, 255, 0.8); font-weight: 700; font-size: 0.95rem; }
</style>
