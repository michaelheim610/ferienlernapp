<script lang="ts">
  import { syncStatus } from '../../lib/sync'
</script>

{#if $syncStatus !== 'off'}
  <span class="sync" class:online={$syncStatus === 'online'} class:offline={$syncStatus === 'offline'} class:syncing={$syncStatus === 'syncing'}>
    {#if $syncStatus === 'online'}
      ✓ gesichert
    {:else if $syncStatus === 'syncing'}
      ⏳ sichern…
    {:else}
      ☁️ offline
    {/if}
  </span>
{/if}

<style>
  .sync {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-weight: 800;
    font-size: 0.85rem;
    padding: 5px 12px;
    border-radius: 999px;
    white-space: nowrap;
  }
  .online { background: rgba(61, 220, 132, 0.25); color: #d6ffe6; }
  .syncing { background: rgba(255, 210, 63, 0.25); color: #fff2c2; }
  .offline { background: rgba(255, 255, 255, 0.16); color: rgba(255, 255, 255, 0.9); }
</style>
