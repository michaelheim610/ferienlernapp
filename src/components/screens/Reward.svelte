<script lang="ts">
  import { onMount } from 'svelte'
  import type { Subject } from '../../lib/types'
  import { topicById, topicsOf } from '../../data/topics'
  import { goSubject, startTopic } from '../../lib/nav'
  import { progress } from '../../lib/store'
  import { playFanfare } from '../../lib/sound'
  import Astronaut from '../ui/Astronaut.svelte'
  import Confetti from '../ui/Confetti.svelte'

  export let subject: Subject
  export let topicId: string

  $: topic = topicById(topicId)!
  $: earned = topic.exercises.filter((e) => $progress.solved[e.id]).length

  // naechste Mission (falls vorhanden)
  $: siblings = topicsOf(subject)
  $: idx = siblings.findIndex((t) => t.id === topicId)
  $: nextTopic = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null

  let burst = 0
  onMount(() => {
    playFanfare()
    burst = 1
  })
</script>

<div class="screen reward">
  <div class="center">
    <Astronaut size={150} cheer />
    <div class="trophy">🏆</div>
    <h1 class="space-title">Geschafft!</h1>
    <p class="space-sub">Du hast <b>{topic.title} – {topic.subtitle}</b> gemeistert!</p>
    <div class="stars-earned">
      {#each Array(earned) as _, i}<span style="animation-delay:{i * 0.1}s">⭐</span>{/each}
    </div>
    <p class="total">Insgesamt: <b>⭐ {$progress.stars} Sterne</b></p>

    <div class="actions">
      {#if nextTopic}
        <button class="btn big green" on:click={() => startTopic(subject, nextTopic.id)}>
          Nächste Mission {nextTopic.emoji} →
        </button>
      {/if}
      <button class="btn ghost" on:click={() => startTopic(subject, topicId)}>Nochmal üben ↺</button>
      <button class="btn ghost" on:click={() => goSubject(subject)}>Zu den Missionen</button>
    </div>
  </div>
</div>

<Confetti {burst} big />

<style>
  .reward { justify-content: center; }
  .center {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
  }
  .trophy { font-size: 4rem; animation: float 2s ease-in-out infinite; }
  .center h1 { font-size: 2.6rem; }
  .stars-earned { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; font-size: 1.8rem; margin: 6px 0; max-width: 320px; }
  .stars-earned span { animation: pop 0.4s ease backwards; }
  .total { color: #fff; font-weight: 700; }
  .actions { display: flex; flex-direction: column; gap: 12px; margin-top: 18px; width: 100%; max-width: 320px; }
</style>
