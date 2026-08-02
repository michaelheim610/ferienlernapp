<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { ChoiceExercise } from '../../lib/types'
  import { splitTemplate } from '../../lib/check'
  import { playCorrect, playTry } from '../../lib/sound'

  export let exercise: ChoiceExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  let chosen: Record<string, string> = {}
  let correct: Record<string, boolean> = {}
  let wrongPick: Record<string, string> = {}

  function choose(qid: string, opt: string) {
    const q = exercise.questions.find((x) => x.id === qid)
    if (!q || correct[qid]) return
    chosen[qid] = opt
    chosen = chosen
    if (opt === q.answer) {
      correct[qid] = true
      correct = correct
      dispatch('correct')
      playCorrect()
      if (exercise.questions.every((x) => correct[x.id])) dispatch('solved')
    } else {
      wrongPick[qid] = opt
      wrongPick = wrongPick
      playTry()
      setTimeout(() => {
        wrongPick[qid] = ''
        wrongPick = wrongPick
      }, 500)
    }
  }
</script>

<div class="ch">
  {#each exercise.questions as q (q.id)}
    {@const parts = splitTemplate(q.text)}
    <div class="q" class:done={correct[q.id]}>
      <div class="sentence">
        {#each parts as part, i}
          <span>{part}</span>
          {#if i < parts.length - 1}
            <b class="slot">{correct[q.id] ? q.answer : '…'}</b>
          {/if}
        {/each}
      </div>
      <div class="opts">
        {#each q.options as opt}
          <button
            class="opt"
            class:correct={correct[q.id] && chosen[q.id] === opt}
            class:wrong={wrongPick[q.id] === opt}
            disabled={correct[q.id]}
            on:click={() => choose(q.id, opt)}
          >{opt}</button>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .ch { display: flex; flex-direction: column; gap: 14px; max-width: 640px; margin-inline: auto; width: 100%; }
  .q {
    background: var(--card);
    border-radius: 18px;
    padding: 14px 16px;
    box-shadow: var(--shadow-sm);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .q.done { background: #eafff2; }
  .sentence { font-size: 1.3rem; font-weight: 800; color: var(--ink); }
  .slot { color: var(--violet-dark); }
  .opts { display: flex; gap: 10px; flex-wrap: wrap; }
  .opt {
    min-width: 64px;
    min-height: 56px;
    padding: 0 18px;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--ink);
    background: var(--card-soft);
    border: 3px solid transparent;
    border-radius: 14px;
    box-shadow: var(--shadow-sm);
  }
  .opt:active { transform: scale(0.96); }
  .opt.correct { background: #d6ffe6; border-color: var(--green-dark); color: var(--green-dark); }
  .opt.wrong { background: #ffe1e1; border-color: var(--red); animation: shake 0.4s; }
</style>
