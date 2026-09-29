<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { FillTextExercise } from '../../lib/types'
  import { splitTemplate, textMatches } from '../../lib/check'
  import { playCorrect } from '../../lib/sound'

  export let exercise: FillTextExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  let values: Record<string, string> = {}
  let correct: Record<string, boolean> = {}

  function onInput(id: string, ev: Event) {
    const p = exercise.problems.find((x) => x.id === id)
    if (!p || correct[id]) return
    const v = (ev.target as HTMLInputElement).value
    values[id] = v
    values = values
    if (textMatches(v, p.answer)) {
      correct[id] = true
      correct = correct
      dispatch('correct')
      playCorrect()
      if (exercise.problems.every((x) => correct[x.id])) dispatch('solved')
    }
  }
</script>

<div class="ft">
  {#each exercise.problems as p (p.id)}
    {@const parts = splitTemplate(p.text)}
    <div class="prob" class:done={correct[p.id]}>
      {#if p.swatch}<span class="swatch" style="background:{p.swatch}"></span>{/if}
      {#each parts as part, i}
        <span class="txt">{part}</span>
        {#if i < parts.length - 1}
          <span class="field">
            <input
              type="text"
              autocapitalize="off"
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
              class:ok={correct[p.id]}
              disabled={correct[p.id]}
              value={correct[p.id] ? (Array.isArray(p.answer) ? p.answer[0] : p.answer) : (values[p.id] ?? '')}
              on:input={(e) => onInput(p.id, e)}
            />
            {#if correct[p.id]}<span class="tick">✓</span>{/if}
          </span>
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  .ft { display: flex; flex-direction: column; gap: 12px; max-width: 560px; margin-inline: auto; width: 100%; }
  .prob {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    background: var(--card);
    border-radius: 16px;
    padding: 12px 16px;
    box-shadow: var(--shadow-sm);
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--ink);
  }
  .prob.done { background: #eafff2; }
  .txt { white-space: pre; }
  .field { position: relative; display: inline-flex; align-items: center; }
  input {
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--ink);
    min-width: 120px;
    width: 140px;
    max-width: 60vw;
    padding: 8px 34px 8px 12px;
    border: 3px solid var(--violet);
    border-radius: 12px;
    background: #fff;
    outline: none;
  }
  input:focus { border-color: var(--gold); box-shadow: 0 0 0 4px rgba(255, 210, 63, 0.35); }
  input.ok { border-color: var(--green-dark); background: #eafff2; }
  .tick { position: absolute; right: 10px; color: var(--green-dark); font-size: 1.3rem; font-weight: 900; }
</style>
