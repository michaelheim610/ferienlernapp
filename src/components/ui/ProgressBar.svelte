<script lang="ts">
  export let value = 0 // 0..1
  export let showRocket = true
  $: pct = Math.max(0, Math.min(1, value)) * 100
</script>

<div class="wrap">
  <div class="progress">
    <i style="width:{pct}%"></i>
  </div>
  {#if showRocket}
    <span class="rocket" style="left:calc({pct}% - 12px)">🚀</span>
  {/if}
</div>

<style>
  .wrap { position: relative; padding-top: 6px; }
  .rocket {
    position: absolute;
    top: -10px;
    font-size: 1.4rem;
    transition: left 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
  }
</style>
