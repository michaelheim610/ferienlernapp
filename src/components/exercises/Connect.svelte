<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { ConnectExercise, ConnectItem } from '../../lib/types'
  import { playCorrect, playTry, playTap } from '../../lib/sound'
  import PlaceBlocks from './parts/PlaceBlocks.svelte'

  export let exercise: ConnectExercise
  const dispatch = createEventDispatcher<{ solved: void; correct: void }>()

  const pairColors = ['#7c5cff', '#ff5fa2', '#3ddc84', '#38bdf8', '#ff7a59', '#ffb300']

  // Beide Spalten zufaellig mischen, damit die Paare nicht Zeile fuer Zeile
  // untereinander stehen - so muss man immer neu ueberlegen.
  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }
  const leftItems = shuffle(exercise.left)
  const rightItems = shuffle(exercise.right)

  let selected: string | null = null // linke id
  let matchColor: Record<string, string> = {} // group -> color
  let matched: Record<string, boolean> = {} // item id -> true
  let wrong: string | null = null
  let colorIdx = 0

  function tapLeft(it: ConnectItem) {
    if (matched[it.id]) return
    selected = selected === it.id ? null : it.id
    playTap()
  }

  function tapRight(it: ConnectItem) {
    if (matched[it.id] || !selected) return
    const left = exercise.left.find((l) => l.id === selected)!
    if (left.group === it.group) {
      const color = pairColors[colorIdx % pairColors.length]
      colorIdx++
      matchColor[left.group] = color
      matched[left.id] = true
      matched[it.id] = true
      matched = matched
      matchColor = matchColor
      selected = null
      dispatch('correct')
      playCorrect()
      if (exercise.left.every((l) => matched[l.id])) dispatch('solved')
    } else {
      wrong = it.id
      playTry()
      setTimeout(() => (wrong = null), 450)
    }
  }
</script>

<div class="connect">
  <div class="col">
    {#each leftItems as it (it.id)}
      <button
        class="item left"
        class:selected={selected === it.id}
        class:matched={matched[it.id]}
        class:swatch-cell={!!it.color}
        style={matched[it.id] ? `border-color:${matchColor[it.group]};background:${matchColor[it.group]}22;` : ''}
        on:click={() => tapLeft(it)}
      >
        {#if exercise.leftKind === 'blocks' && it.z !== undefined}
          <PlaceBlocks z={it.z} e={it.e ?? 0} small />
        {:else if it.color}
          <span class="swatch" style="background:{it.color}"></span>
          {#if it.label}<span class="clbl">{it.label}</span>{/if}
        {:else}
          {it.label}
        {/if}
        {#if matched[it.id]}<span class="dot" style="background:{matchColor[it.group]}"></span>{/if}
      </button>
    {/each}
  </div>

  <div class="col">
    {#each rightItems as it (it.id)}
      <button
        class="item right"
        class:matched={matched[it.id]}
        class:wrong={wrong === it.id}
        style={matched[it.id] ? `border-color:${matchColor[it.group]};background:${matchColor[it.group]}22;` : ''}
        on:click={() => tapRight(it)}
      >
        {#if matched[it.id]}<span class="dot" style="background:{matchColor[it.group]}"></span>{/if}
        {#if it.color}<span class="swatch" style="background:{it.color}"></span>{/if}
        {it.label ?? ''}
      </button>
    {/each}
  </div>
</div>

<style>
  .connect {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px 22px;
    max-width: 640px;
    margin-inline: auto;
    width: 100%;
    align-items: start;
  }
  .col { display: flex; flex-direction: column; gap: 12px; }
  .item {
    position: relative;
    min-height: 60px;
    padding: 12px 16px;
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--ink);
    background: #fff;
    border: 3px solid #e3ddff;
    border-radius: 16px;
    box-shadow: var(--shadow-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: transform 0.08s ease, border-color 0.2s;
  }
  .item:active { transform: scale(0.97); }
  .left { justify-content: flex-start; }
  .right { justify-content: flex-end; }
  .swatch-cell { justify-content: center; gap: 12px; }
  .clbl { font-size: 1.15rem; }
  .selected { border-color: var(--gold); box-shadow: 0 0 0 4px rgba(255, 210, 63, 0.4); }
  .matched { cursor: default; }
  .wrong { border-color: var(--red); animation: shake 0.4s; }
  .dot {
    width: 14px; height: 14px; border-radius: 50%;
    position: absolute; top: 50%; transform: translateY(-50%);
  }
  .left .dot { right: -18px; }
  .right .dot { left: -18px; }
</style>
