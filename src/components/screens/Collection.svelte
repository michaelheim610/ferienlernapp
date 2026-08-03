<script lang="ts">
  import { goHome } from '../../lib/nav'
  import { progress } from '../../lib/store'
  import { collectibles, nextCollectible, unlockedCount } from '../../lib/collectibles'

  $: stars = $progress.stars
  $: next = nextCollectible(stars)
  $: got = unlockedCount(stars)
</script>

<div class="screen">
  <div class="topbar">
    <button class="iconbtn" on:click={goHome} aria-label="Zurück">←</button>
    <h2 class="space-title">🌌 Meine Sammlung</h2>
    <span class="spacer"></span>
    <span class="star-badge">⭐ {stars}</span>
  </div>

  <div class="summary card2">
    <span class="count">{got} / {collectibles.length} gesammelt</span>
    {#if next}
      <span class="next">Noch <b>{next.stars - stars}</b> ⭐ bis zur nächsten geheimen Überraschung ❔</span>
    {:else}
      <span class="next">Wow, du hast ALLES gesammelt! 🎉</span>
    {/if}
  </div>

  <div class="grid">
    {#each collectibles as c}
      {@const unlocked = stars >= c.stars}
      <div class="item" class:unlocked>
        <span class="emoji">{unlocked ? c.emoji : '❔'}</span>
        <span class="name">{unlocked ? c.name : `ab ${c.stars} ⭐`}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .summary {
    text-align: center;
    padding: 16px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .card2 { background: var(--card); border-radius: 18px; box-shadow: var(--shadow-sm); }
  .summary .count { font-weight: 800; color: var(--ink); font-size: 1.2rem; }
  .summary .next { color: var(--violet-dark); font-weight: 800; }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
    gap: 12px;
  }
  .item {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    padding: 14px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    text-align: center;
  }
  .item.unlocked { background: #fff; box-shadow: var(--shadow-sm); animation: pop 0.3s ease; }
  .item .emoji { font-size: 2.4rem; filter: grayscale(0); }
  .item:not(.unlocked) .emoji { opacity: 0.6; }
  .item .name { font-weight: 800; font-size: 0.85rem; color: #fff; }
  .item.unlocked .name { color: var(--ink); }
</style>
