<script lang="ts">
  import { onMount } from 'svelte'
  import { nav } from './lib/nav'
  import { progress } from './lib/store'
  import { profiles } from './lib/profiles'
  import { startCloudSync, stopCloudSync, initConnectivity } from './lib/sync'
  import { initUpdates, needRefresh, applyUpdate } from './lib/updates'
  import { setSoundEnabled } from './lib/sound'
  import Starfield from './components/ui/Starfield.svelte'
  import ProfileSelect from './components/screens/ProfileSelect.svelte'
  import Home from './components/screens/Home.svelte'
  import SubjectScreen from './components/screens/SubjectScreen.svelte'
  import ExerciseScreen from './components/screens/ExerciseScreen.svelte'
  import Reward from './components/screens/Reward.svelte'
  import Leaderboard from './components/screens/Leaderboard.svelte'
  import Collection from './components/screens/Collection.svelte'

  // Einmalige Migration: alter Einzel-Fortschritt -> als Profil "Lisa" uebernehmen.
  onMount(() => {
    try {
      const OLD = 'ferienlernapp.progress.v1'
      const old = localStorage.getItem(OLD)
      let state: any = {}
      try { state = JSON.parse(localStorage.getItem('ferienlernapp.profiles.v1') || '{}') } catch (e) {}
      const hasProfiles = state && Array.isArray(state.profiles) && state.profiles.length > 0
      if (old && !hasProfiles) {
        const id = profiles.add({ name: 'Lisa', avatar: '🦄' })
        localStorage.setItem(`ferienlernapp.progress.v1.${id}`, old)
        localStorage.removeItem(OLD)
        progress.useProfile(id)
      }
    } catch (e) {
      // Migration ist optional - Fehler ignorieren
    }

    initConnectivity()
    initUpdates()

    const unsub = progress.subscribe((p) => setSoundEnabled(p.soundOn))
    return unsub
  })

  // Fortschritt des aktiven Profils laden, sobald es wechselt (+ Cloud-Sync).
  let loadedProfile: string | null = null
  $: if ($profiles.activeId && $profiles.activeId !== loadedProfile) {
    loadedProfile = $profiles.activeId
    progress.useProfile($profiles.activeId)
    const p = $profiles.profiles.find((x) => x.id === $profiles.activeId)
    if (p && p.cloudId) startCloudSync(p)
    else stopCloudSync()
  }
  $: if (!$profiles.activeId && loadedProfile) {
    loadedProfile = null
    stopCloudSync()
  }

  $: noProfile = !$profiles.activeId
</script>

<Starfield />

{#if $needRefresh}
  <button class="update-banner" on:click={applyUpdate}>
    🚀 Neue Version verfügbar – tippen zum Aktualisieren
  </button>
{/if}

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
{:else if $nav.view === 'leaderboard'}
  <Leaderboard />
{:else if $nav.view === 'collection'}
  <Collection />
{:else}
  <Home />
{/if}

<style>
  .update-banner {
    position: fixed;
    left: 12px;
    right: 12px;
    top: max(10px, env(safe-area-inset-top));
    z-index: 100;
    margin: 0 auto;
    max-width: 520px;
    background: linear-gradient(180deg, var(--gold), #e69500);
    color: #3a2a00;
    font-weight: 800;
    font-size: 1rem;
    padding: 12px 16px;
    border-radius: 14px;
    box-shadow: var(--shadow);
    animation: pop 0.3s ease;
  }
  .update-banner:active { transform: scale(0.98); }
</style>

