<script lang="ts">
  import { get } from 'svelte/store'
  import type { Subject } from '../../lib/types'
  import { topicById } from '../../data/topics'
  import { goSubject, goExercise, goReward } from '../../lib/nav'
  import { progress } from '../../lib/store'
  import { newlyUnlocked, type Collectible } from '../../lib/collectibles'
  import { playFanfare } from '../../lib/sound'

  import Confetti from '../ui/Confetti.svelte'

  import Connect from '../exercises/Connect.svelte'
  import FillNumber from '../exercises/FillNumber.svelte'
  import FillText from '../exercises/FillText.svelte'
  import Choice from '../exercises/Choice.svelte'
  import Classify from '../exercises/Classify.svelte'
  import Distribute from '../exercises/Distribute.svelte'
  import NumberLine from '../exercises/NumberLine.svelte'
  import HundredChart from '../exercises/HundredChart.svelte'
  import PlaceValue from '../exercises/PlaceValue.svelte'
  import Order from '../exercises/Order.svelte'
  import Syllable from '../exercises/Syllable.svelte'

  export let subject: Subject
  export let topicId: string
  export let exIndex: number

  const componentMap: Record<string, any> = {
    connect: Connect,
    fillNumber: FillNumber,
    fillText: FillText,
    choice: Choice,
    classify: Classify,
    distribute: Distribute,
    numberLine: NumberLine,
    hundredChart: HundredChart,
    placeValue: PlaceValue,
    order: Order,
    syllable: Syllable
  }

  $: topic = topicById(topicId)!
  $: exercise = topic.exercises[exIndex]
  $: isLast = exIndex >= topic.exercises.length - 1

  let solvedNow = false
  let burst = 0
  let correctPulse = 0
  let unlocked: Collectible | null = null

  // Bei Wechsel der Aufgabe Zustand zuruecksetzen.
  $: if (exercise) {
    solvedNow = false
  }

  $: canProceed = solvedNow || $progress.solved[exercise.id]

  function onSolved() {
    const before = get(progress).stars
    solvedNow = true
    progress.solve(exercise.id)
    const after = get(progress).stars
    burst += 1
    const u = newlyUnlocked(before, after)
    if (u) {
      unlocked = u
      playFanfare()
      burst += 1
      setTimeout(() => (unlocked = null), 3500)
    }
  }

  function onCorrect() {
    correctPulse += 1
  }

  function next() {
    if (isLast) goReward(subject, topicId)
    else goExercise(subject, topicId, exIndex + 1)
  }
</script>

<div class="screen">
  <div class="topbar">
    <button class="iconbtn" on:click={() => goSubject(subject)} aria-label="Zurück">←</button>
    <div class="dots">
      {#each topic.exercises as ex, i}
        <span class="dot" class:on={$progress.solved[ex.id]} class:cur={i === exIndex}></span>
      {/each}
    </div>
    <span class="spacer"></span>
    <span class="star-badge" class:pulse={correctPulse}>⭐ {$progress.stars}</span>
  </div>

  <div class="head">
    <h2 class="space-title">{topic.emoji} {topic.title}</h2>
    <p class="instruction">{exercise.instruction}</p>
  </div>

  <div class="body">
    {#key exercise.id}
      <svelte:component
        this={componentMap[exercise.type]}
        {exercise}
        on:solved={onSolved}
        on:correct={onCorrect}
      />
    {/key}
  </div>

  <div class="foot">
    {#if canProceed}
      <div class="yay">
        {#if solvedNow}<span class="yay-txt">Super gemacht! 🎉</span>{/if}
        <button class="btn big green" on:click={next}>
          {isLast ? 'Mission abschließen 🏆' : 'Weiter 🚀'}
        </button>
      </div>
    {/if}
  </div>
</div>

{#if unlocked}
  <div class="unlock-overlay">
    <div class="unlock-card">
      <span class="big-emoji">{unlocked.emoji}</span>
      <span class="unlock-title">Neu freigeschaltet!</span>
      <span class="unlock-name">{unlocked.name}</span>
    </div>
  </div>
{/if}

<Confetti {burst} big={!!unlocked} />

<style>
  .head { text-align: center; margin-bottom: 16px; }
  .head h2 { font-size: 1.4rem; }
  .instruction {
    color: #fff;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.14);
    display: inline-block;
    padding: 8px 16px;
    border-radius: 999px;
    margin-top: 8px;
    font-size: 1.05rem;
  }
  .body { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 6px 0 14px; }
  .dots { display: flex; gap: 6px; }
  .dot {
    width: 12px; height: 12px; border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
  }
  .dot.on { background: var(--green); }
  .dot.cur { outline: 2px solid #fff; outline-offset: 2px; }
  .foot { min-height: 84px; display: flex; align-items: center; justify-content: center; }
  .yay { display: flex; flex-direction: column; align-items: center; gap: 8px; animation: pop 0.3s ease; }
  .yay-txt { color: #fff; font-weight: 800; font-size: 1.2rem; }
  .unlock-overlay {
    position: fixed;
    inset: 0;
    z-index: 60;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(20, 10, 60, 0.4);
    pointer-events: none;
  }
  .unlock-card {
    background: #fff;
    border-radius: var(--radius-lg);
    padding: 26px 34px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    animation: pop 0.4s ease;
  }
  .unlock-card .big-emoji { font-size: 4.5rem; animation: float 2s ease-in-out infinite; }
  .unlock-card .unlock-title { font-weight: 800; color: var(--violet-dark); font-size: 1.2rem; }
  .unlock-card .unlock-name { font-weight: 800; color: var(--ink); font-size: 1.6rem; }

  .star-badge.pulse { animation: starpulse 0.4s ease; }
  @keyframes starpulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.25); }
  }
</style>
