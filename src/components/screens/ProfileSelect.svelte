<script lang="ts">
  import { profiles } from '../../lib/profiles'
  import { progress } from '../../lib/store'
  import { goHome } from '../../lib/nav'
  import Astronaut from '../ui/Astronaut.svelte'
  import { playTap, playCorrect } from '../../lib/sound'

  let mode: 'list' | 'create' = 'list'
  let newName = ''
  let chosenAvatar = '🦄'

  const avatars = ['🦄', '🦖', '🐱', '🐶', '🦊', '🐼', '🐧', '🦁', '🐯', '🐸', '🐵', '🦉']

  // Beim ersten Start ohne Profile direkt in den Anlegen-Modus.
  $: if ($profiles.profiles.length === 0 && mode === 'list') mode = 'create'

  function pick(id: string) {
    playTap()
    profiles.select(id)
    progress.useProfile(id)
    goHome()
  }

  function create() {
    if (!newName.trim()) return
    const id = profiles.add(newName, chosenAvatar)
    progress.useProfile(id)
    playCorrect()
    newName = ''
    goHome()
  }
</script>

<div class="screen ps">
  <header class="hero">
    <Astronaut size={96} />
    <h1 class="space-title">Wer lernt gerade?</h1>
  </header>

  {#if mode === 'list'}
    <div class="tiles">
      {#each $profiles.profiles as p (p.id)}
        <button class="ptile" on:click={() => pick(p.id)}>
          <span class="av">{p.avatar}</span>
          <span class="nm">{p.name}</span>
        </button>
      {/each}
      <button class="ptile add" on:click={() => (mode = 'create')}>
        <span class="av">➕</span>
        <span class="nm">Neues Kind</span>
      </button>
    </div>
  {:else}
    <div class="create card">
      <p class="lbl">Suche dir ein Tier aus:</p>
      <div class="avatars">
        {#each avatars as a}
          <button class="avatar" class:sel={chosenAvatar === a} on:click={() => { chosenAvatar = a }}>{a}</button>
        {/each}
      </div>
      <p class="lbl">Wie heisst du?</p>
      <input
        class="name-in"
        type="text"
        placeholder="Dein Name"
        maxlength="14"
        autocapitalize="words"
        autocomplete="off"
        bind:value={newName}
        on:keydown={(e) => { if (e.key === 'Enter') create() }}
      />
      <div class="actions">
        {#if $profiles.profiles.length > 0}
          <button class="btn ghost" on:click={() => (mode = 'list')}>Zurück</button>
        {/if}
        <button class="btn big green" disabled={!newName.trim()} on:click={create}>
          Los geht's {chosenAvatar} 🚀
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  .ps { align-items: stretch; justify-content: flex-start; }
  .hero { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px; margin: 12px 0 20px; }
  .hero h1 { font-size: clamp(1.8rem, 7vw, 2.4rem); }

  .tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 14px;
  }
  .ptile {
    background: linear-gradient(180deg, var(--violet), var(--violet-dark));
    color: #fff;
    border-radius: var(--radius-lg);
    padding: 20px 12px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-height: 150px;
    justify-content: center;
  }
  .ptile:active { transform: scale(0.97); }
  .ptile.add { background: rgba(255, 255, 255, 0.16); border: 3px dashed rgba(255, 255, 255, 0.5); }
  .ptile .av { font-size: 3.4rem; }
  .ptile .nm { font-size: 1.3rem; font-weight: 800; }

  .create { padding: 20px; display: flex; flex-direction: column; gap: 12px; max-width: 520px; margin-inline: auto; width: 100%; }
  .lbl { font-weight: 800; color: var(--ink); margin: 4px 0 0; }
  .avatars { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
  .avatar {
    font-size: 1.9rem;
    aspect-ratio: 1;
    border-radius: 14px;
    background: var(--card-soft);
    box-shadow: var(--shadow-sm);
    border: 3px solid transparent;
    display: flex; align-items: center; justify-content: center;
  }
  .avatar.sel { border-color: var(--gold); box-shadow: 0 0 0 4px rgba(255, 210, 63, 0.35); }
  .name-in {
    font-family: inherit;
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--ink);
    padding: 12px 16px;
    border: 3px solid var(--violet);
    border-radius: 14px;
    outline: none;
  }
  .name-in:focus { border-color: var(--gold); box-shadow: 0 0 0 4px rgba(255, 210, 63, 0.35); }
  .actions { display: flex; gap: 10px; justify-content: flex-end; flex-wrap: wrap; margin-top: 6px; }
</style>
