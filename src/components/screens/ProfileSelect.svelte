<script lang="ts">
  import { profiles, type Profile } from '../../lib/profiles'
  import { progress } from '../../lib/store'
  import { goHome } from '../../lib/nav'
  import Astronaut from '../ui/Astronaut.svelte'
  import NumberPad from '../ui/NumberPad.svelte'
  import { playTap, playCorrect, playTry } from '../../lib/sound'

  let mode: 'list' | 'create' | 'unlock' = 'list'
  let newName = ''
  let chosenAvatar = '🦄'
  let newCode = ''

  let unlockTarget: Profile | null = null
  let entered = ''
  let wrong = false

  const avatars = ['🦄', '🦖', '🐱', '🐶', '🦊', '🐼', '🐧', '🦁', '🐯', '🐸', '🐵', '🦉']

  // Beim ersten Start ohne Profile direkt in den Anlegen-Modus.
  $: if ($profiles.profiles.length === 0 && mode === 'list') mode = 'create'

  function activate(id: string) {
    profiles.select(id)
    progress.useProfile(id)
    goHome()
  }

  function tapProfile(p: Profile) {
    playTap()
    if (p.code) {
      unlockTarget = p
      entered = ''
      wrong = false
      mode = 'unlock'
    } else {
      activate(p.id)
    }
  }

  function onUnlockKey(e: CustomEvent<string>) {
    const k = e.detail
    if (k === 'del') {
      entered = entered.slice(0, -1)
    } else if (entered.length < 4) {
      entered += k
    }
    wrong = false
    if (entered.length === 4 && unlockTarget) {
      if (entered === unlockTarget.code) {
        playCorrect()
        activate(unlockTarget.id)
      } else {
        wrong = true
        playTry()
        setTimeout(() => {
          entered = ''
          wrong = false
        }, 600)
      }
    }
  }

  function onCreateKey(e: CustomEvent<string>) {
    const k = e.detail
    if (k === 'del') newCode = newCode.slice(0, -1)
    else if (newCode.length < 4) newCode += k
  }

  function create() {
    if (!newName.trim() || newCode.length !== 4) return
    const id = profiles.add(newName, chosenAvatar, newCode)
    progress.useProfile(id)
    playCorrect()
    newName = ''
    newCode = ''
    goHome()
  }

  function backToList() {
    mode = 'list'
    entered = ''
    wrong = false
    unlockTarget = null
  }
</script>

<div class="screen ps">
  {#if mode === 'unlock' && unlockTarget}
    <header class="hero">
      <div class="big-av">{unlockTarget.avatar}</div>
      <h1 class="space-title">Code für {unlockTarget.name}</h1>
      <p class="space-sub">Tippe deinen Geheimcode ein 🔒</p>
    </header>
    <div class="code-area">
      <div class="code-boxes" class:shake={wrong}>
        {#each Array(4) as _, i}
          <span class="code-box" class:filled={i < entered.length} class:bad={wrong}>
            {i < entered.length ? '●' : ''}
          </span>
        {/each}
      </div>
      {#if wrong}<p class="err">Ups, falscher Code – nochmal! 🙃</p>{/if}
      <NumberPad on:key={onUnlockKey} />
      <button class="btn ghost" on:click={backToList}>Zurück</button>
    </div>

  {:else if mode === 'list'}
    <header class="hero">
      <Astronaut size={96} />
      <h1 class="space-title">Wer lernt gerade?</h1>
    </header>
    <div class="tiles">
      {#each $profiles.profiles as p (p.id)}
        <button class="ptile" on:click={() => tapProfile(p)}>
          <span class="av">{p.avatar}</span>
          <span class="nm">{p.name}</span>
          {#if p.code}<span class="lock">🔒</span>{/if}
        </button>
      {/each}
      <button class="ptile add" on:click={() => (mode = 'create')}>
        <span class="av">➕</span>
        <span class="nm">Neues Kind</span>
      </button>
    </div>

  {:else}
    <header class="hero small">
      <h1 class="space-title">Neues Kind</h1>
    </header>
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
      />

      <p class="lbl">Denk dir einen Geheimcode aus (4 Zahlen) 🔒</p>
      <div class="code-boxes small">
        {#each Array(4) as _, i}
          <span class="code-box" class:filled={i < newCode.length}>
            {i < newCode.length ? newCode[i] : ''}
          </span>
        {/each}
      </div>
      <NumberPad on:key={onCreateKey} />

      <div class="actions">
        {#if $profiles.profiles.length > 0}
          <button class="btn ghost" on:click={() => (mode = 'list')}>Zurück</button>
        {/if}
        <button class="btn big green" disabled={!newName.trim() || newCode.length !== 4} on:click={create}>
          Los geht's {chosenAvatar} 🚀
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  .ps { align-items: stretch; justify-content: flex-start; }
  .hero { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px; margin: 12px 0 20px; }
  .hero.small { margin: 8px 0 14px; }
  .hero h1 { font-size: clamp(1.7rem, 6.5vw, 2.4rem); }
  .big-av { font-size: 4rem; animation: float 2.5s ease-in-out infinite; }

  .tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 14px;
  }
  .ptile {
    position: relative;
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
  .ptile .lock { position: absolute; top: 10px; right: 12px; font-size: 1.1rem; opacity: 0.9; }

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

  .code-area { display: flex; flex-direction: column; align-items: center; gap: 16px; }
  .code-boxes { display: flex; gap: 12px; justify-content: center; }
  .code-boxes.small { margin-bottom: 4px; }
  .code-boxes.shake { animation: shake 0.4s; }
  .code-box {
    width: 56px; height: 62px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.8rem; font-weight: 800; color: var(--ink);
    background: #fff;
    border: 3px solid var(--violet);
    border-radius: 14px;
  }
  .code-box.filled { border-color: var(--green-dark); background: #eafff2; }
  .code-box.bad { border-color: var(--red); background: #fff0f0; }
  .create .code-box { width: 48px; height: 54px; }
  .err { color: #ffd7d7; font-weight: 800; margin: 0; }
</style>
