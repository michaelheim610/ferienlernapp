<script lang="ts">
  import { onMount } from 'svelte'
  import { nav } from './lib/nav'
  import { progress } from './lib/store'
  import { profiles } from './lib/profiles'
  import { setSoundEnabled } from './lib/sound'
  import Starfield from './components/ui/Starfield.svelte'
  import ProfileSelect from './components/screens/ProfileSelect.svelte'
  import Home from './components/screens/Home.svelte'
  import SubjectScreen from './components/screens/SubjectScreen.svelte'
  import ExerciseScreen from './components/screens/ExerciseScreen.svelte'
  import Reward from './components/screens/Reward.svelte'

  // Einmalige Migration: alter Einzel-Fortschritt -> als Profil "Lisa" uebernehmen.
  onMount(() => {
    try {
      const OLD = 'ferienlernapp.progress.v1'
      const old = localStorage.getItem(OLD)
      let state: any = {}
      try { state = JSON.parse(localStorage.getItem('ferienlernapp.profiles.v1') || '{}') } catch (e) {}
      const hasProfiles = state && Array.isArray(state.profiles) && state.profiles.length > 0
      if (old && !hasProfiles) {
        const id = profiles.add('Lisa', '🦄')
        localStorage.setItem(`ferienlernapp.progress.v1.${id}`, old)
        localStorage.removeItem(OLD)
        progress.useProfile(id)
      }
    } catch (e) {
      // Migration ist optional - Fehler ignorieren
    }

    const unsub = progress.subscribe((p) => setSoundEnabled(p.soundOn))
    return unsub
  })

  // Fortschritt des aktiven Profils laden, sobald es wechselt.
  let loadedProfile: string | null = null
  $: if ($profiles.activeId && $profiles.activeId !== loadedProfile) {
    loadedProfile = $profiles.activeId
    progress.useProfile($profiles.activeId)
  }

  $: noProfile = !$profiles.activeId
</script>

<Starfield />

{#if noProfile}
  <ProfileSelect />
{:else if $nav.view === 'home'}
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
