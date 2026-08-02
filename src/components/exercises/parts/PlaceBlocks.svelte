<script lang="ts">
  // Bunte Zehner-Stangen und Einer-Punkte (Stellenwert-Darstellung).
  export let z = 0
  export let e = 0
  export let small = false
  $: tens = Array.from({ length: z })
  $: ones = Array.from({ length: e })
</script>

<div class="blocks" class:small>
  {#each tens as _}
    <div class="ten" aria-label="Zehner">
      {#each Array(10) as _}<span class="unit"></span>{/each}
    </div>
  {/each}
  {#if e > 0}
    <div class="ones">
      {#each ones as _}<span class="dot"></span>{/each}
    </div>
  {/if}
</div>

<style>
  .blocks { display: flex; align-items: flex-end; gap: 6px; flex-wrap: wrap; }
  .ten {
    display: flex;
    flex-direction: column-reverse;
    gap: 2px;
    padding: 3px;
    background: #eaf6ff;
    border: 2px solid var(--blue);
    border-radius: 6px;
  }
  .unit { width: 12px; height: 8px; background: var(--blue); border-radius: 2px; }
  .ones {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
    align-content: end;
    padding: 3px;
    background: #fff0f6;
    border: 2px solid var(--pink);
    border-radius: 6px;
  }
  .dot { width: 12px; height: 12px; background: var(--pink); border-radius: 50%; }
  .small .unit { width: 8px; height: 6px; }
  .small .dot { width: 9px; height: 9px; }
</style>
