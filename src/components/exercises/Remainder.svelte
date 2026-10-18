<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { RemainderExercise, RemainderProblem } from '../../lib/types'
  import NumberPad from '../ui/NumberPad.svelte'
  import { playCorrect, playTry } from '../../lib/sound'

  export let exercise: RemainderExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  // Werte pro Feld. Schluessel: "<problemId>-q" | "-r" | "-prod"
  let values: Record<string, string> = {}
  let correct: Record<string, boolean> = {}
  let wrong: Record<string, boolean> = {}

  const q = (p: RemainderProblem) => Math.floor(p.a / p.b)
  const rest = (p: RemainderProblem) => p.a % p.b
  const prod = (p: RemainderProblem) => q(p) * p.b // = a - rest

  const REV = !!exercise.reverse

  // Vorwaerts: fuelle q, r, dann Kontrolle prod.  Rueckwaerts: fuelle a, q, r.
  const fieldKeys = exercise.problems.flatMap((p) =>
    REV ? [`${p.id}-a`, `${p.id}-q`, `${p.id}-r`] : [`${p.id}-q`, `${p.id}-r`, `${p.id}-prod`]
  )
  let active = fieldKeys[0] ?? ''

  function targetOf(key: string): string {
    const [pid, field] = key.split('-')
    const p = exercise.problems.find((x) => x.id === pid)!
    if (field === 'a') return String(p.a)
    if (field === 'q') return String(q(p))
    if (field === 'r') return String(rest(p))
    return String(prod(p))
  }

  // Kontroll-Feld (prod) erst freigeben, wenn die Division (q & r) stimmt.
  function fillable(key: string): boolean {
    if (REV) return true
    const [pid, field] = key.split('-')
    if (field === 'prod') return !!correct[`${pid}-q`] && !!correct[`${pid}-r`]
    return true
  }

  function pick(key: string) {
    if (correct[key] || !fillable(key)) return
    active = key
  }

  function nextOpen(): string {
    return fieldKeys.find((k) => !correct[k] && fillable(k)) ?? ''
  }

  function onKey(e: CustomEvent<string>) {
    if (!active || correct[active]) return
    let v = values[active] ?? ''
    if (e.detail === 'del') v = v.slice(0, -1)
    else if (v.length < 3) v += e.detail
    values[active] = v
    wrong[active] = false
    values = values
    wrong = wrong

    const target = targetOf(active)
    if (v === target) {
      correct[active] = true
      correct = correct
      dispatch('correct')
      playCorrect()
      active = nextOpen()
      if (fieldKeys.every((k) => correct[k])) dispatch('solved')
    } else if (v.length >= target.length && v.length > 0) {
      wrong[active] = true
      wrong = wrong
      const cur = active
      playTry()
      setTimeout(() => {
        values[cur] = ''
        wrong[cur] = false
        values = values
        wrong = wrong
      }, 500)
    }
  }

  $: allDone = fieldKeys.every((k) => correct[k])
</script>

<div class="rem">
  {#if exercise.intro}
    <div class="intro card">
      <p>{@html exercise.intro}</p>
    </div>
  {/if}

  <div class="cards">
    {#each exercise.problems as p (p.id)}
      {@const aKey = `${p.id}-a`}
      {@const qKey = `${p.id}-q`}
      {@const rKey = `${p.id}-r`}
      {@const pKey = `${p.id}-prod`}
      {#if REV}
        {@const allC = correct[aKey] && correct[qKey] && correct[rKey]}
        <div class="prob" class:done={allC}>
          <!-- Oben: Kontrolle vorgegeben -->
          <div class="line hint-line">
            <span class="klabel">Kontrolle:</span>
            <span class="big">{q(p)} · {p.b} = {prod(p)}</span>
            <span class="rest-lbl">Rest {rest(p)}</span>
          </div>
          <!-- Unten: gesuchte Geteiltaufgabe -->
          <div class="line">
            <button class="box" class:filled={correct[aKey]} class:wrong={wrong[aKey]} class:active={active === aKey} on:click={() => pick(aKey)}>
              {correct[aKey] ? p.a : (values[aKey] ?? '')}
            </button>
            <span class="big">: {p.b} =</span>
            <button class="box" class:filled={correct[qKey]} class:wrong={wrong[qKey]} class:active={active === qKey} on:click={() => pick(qKey)}>
              {correct[qKey] ? q(p) : (values[qKey] ?? '')}
            </button>
            <span class="rest-lbl">Rest</span>
            <button class="box" class:filled={correct[rKey]} class:wrong={wrong[rKey]} class:active={active === rKey} on:click={() => pick(rKey)}>
              {correct[rKey] ? rest(p) : (values[rKey] ?? '')}
            </button>
          </div>
        </div>
      {:else}
        {@const divDone = correct[qKey] && correct[rKey]}
        <div class="prob" class:done={correct[pKey]}>
          <!-- Links: Division mit Rest -->
          <div class="line">
            <span class="big">{p.a} : {p.b} =</span>
            <button class="box" class:filled={correct[qKey]} class:wrong={wrong[qKey]} class:active={active === qKey} on:click={() => pick(qKey)}>
              {correct[qKey] ? q(p) : (values[qKey] ?? '')}
            </button>
            <span class="rest-lbl">Rest</span>
            <button class="box" class:filled={correct[rKey]} class:wrong={wrong[rKey]} class:active={active === rKey} on:click={() => pick(rKey)}>
              {correct[rKey] ? rest(p) : (values[rKey] ?? '')}
            </button>
          </div>

          <!-- Rechts/unten: Kontrolle = Umkehraufgabe -->
          <div class="line kontrolle" class:ready={divDone}>
            <span class="klabel">Kontrolle:</span>
            <span class="qmirror">{divDone ? q(p) : '?'}</span>
            <span class="big">· {p.b} =</span>
            <button class="box" class:filled={correct[pKey]} class:wrong={wrong[pKey]} class:active={active === pKey} disabled={!divDone} on:click={() => pick(pKey)}>
              {correct[pKey] ? prod(p) : (values[pKey] ?? '')}
            </button>
            {#if correct[pKey]}<span class="check-note">+ {rest(p)} = {p.a} ✓</span>{/if}
          </div>
        </div>
      {/if}
    {/each}
  </div>

  {#if !allDone}
    <NumberPad on:key={onKey} />
  {/if}
</div>

<style>
  .rem { display: flex; flex-direction: column; gap: 16px; align-items: center; }
  .card { background: var(--card); border-radius: 18px; box-shadow: var(--shadow-sm); }
  .intro {
    padding: 16px 18px;
    max-width: 560px;
    width: 100%;
    color: var(--ink);
    font-weight: 700;
    font-size: 1.02rem;
    line-height: 1.5;
  }
  .intro p { margin: 0; }

  .cards { display: flex; flex-direction: column; gap: 14px; max-width: 560px; width: 100%; }
  .prob {
    background: var(--card);
    border-radius: 18px;
    padding: 14px 16px;
    box-shadow: var(--shadow-sm);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .prob.done { background: #eafff2; }

  .line {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    font-weight: 800;
    color: var(--ink);
  }
  .big { font-size: 1.4rem; white-space: nowrap; }
  .rest-lbl { font-size: 1.1rem; color: var(--ink-soft); }
  .box {
    min-width: 50px;
    min-height: 48px;
    padding: 2px 8px;
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--ink);
    background: #fff;
    border: 3px solid var(--violet);
    border-radius: 12px;
  }
  .box.filled { border-color: var(--green-dark); background: #eafff2; }
  .box.wrong { border-color: var(--red); background: #fff0f0; animation: shake 0.4s; }
  .box.active { border-color: var(--gold); box-shadow: 0 0 0 4px rgba(255, 210, 63, 0.4); }
  .box:disabled { opacity: 0.45; border-color: #d8d0ff; }

  .kontrolle {
    border-top: 2px dashed #e3ddff;
    padding-top: 10px;
    font-size: 1.1rem;
  }
  .kontrolle:not(.ready) { opacity: 0.55; }
  .hint-line {
    background: var(--card-soft);
    border-radius: 12px;
    padding: 8px 12px;
    font-size: 1.1rem;
  }
  .klabel { color: var(--violet-dark); font-weight: 800; }
  .qmirror {
    min-width: 34px;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--violet-dark);
  }
  .check-note { color: var(--green-dark); font-weight: 800; }
</style>
