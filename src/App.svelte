<script lang="ts">
  import { onMount } from 'svelte'
  import { nav } from './lib/nav'
  import { progress } from './lib/store'
  import { setSoundEnabled } from './lib/sound'
  import Starfield from './components/ui/Starfield.svelte'
  import Home from './components/screens/Home.svelte'
  import SubjectScreen from './components/screens/SubjectScreen.svelte'
  import ExerciseScreen from './components/screens/ExerciseScreen.svelte'
  import Reward from './components/screens/Reward.svelte'

  // Ton-Einstellung beim Start uebernehmen.
  onMount(() => {
    const unsub = progress.subscribe((p) => setSoundEnabled(p.soundOn))
    return unsub
  })
</script>

<Starfield />

{#if $nav.view === 'home'}
  <Home />
{:else if $nav.view === 'subject' && $nav.subject}
  <SubjectScreen subject={$nav.subject} />
{:else if $nav.view === 'exercise' && $nav.subject && $nav.topicId !== undefined && $nav.exIndex !== undefined}
  <ExerciseScreen subject={$nav.subject} topicId={$nav.topicId} exIndex={$nav.exIndex} />
{:else if $nav.view === 'reward' && $nav.subject && $nav.topicId}
  <Reward subject={$nav.subject} topicId={$nav.topicId} />
{:else}
  <Home />
{/if}
