<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher<{ key: string }>()
  export let disabled = false

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del']

  function press(k: string) {
    if (disabled || k === '') return
    dispatch('key', k)
  }
</script>

<div class="pad" class:disabled>
  {#each keys as k}
    {#if k === ''}
      <span></span>
    {:else}
      <button class="key" class:del={k === 'del'} on:click={() => press(k)} aria-label={k === 'del' ? 'Loeschen' : k}>
        {k === 'del' ? '⌫' : k}
      </button>
    {/if}
  {/each}
</div>

<style>
  .pad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    max-width: 340px;
    margin: 0 auto;
    width: 100%;
  }
  .key {
    min-height: 58px;
    font-size: 1.7rem;
    font-weight: 800;
    color: var(--ink);
    background: #fff;
    border-radius: 16px;
    box-shadow: var(--shadow-sm);
    transition: transform 0.06s ease;
  }
  .key:active { transform: translateY(2px) scale(0.96); }
  .key.del { background: #ffe1e1; color: var(--red); }
  .disabled .key { opacity: 0.5; }
</style>
