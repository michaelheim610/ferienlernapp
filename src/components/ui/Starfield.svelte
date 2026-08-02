<script lang="ts">
  // Ruhiges, buntes Sternenfeld im Hintergrund.
  const stars = Array.from({ length: 42 }, (_, i) => {
    // deterministisch, damit kein Flackern beim Re-Render
    const x = (i * 97) % 100
    const y = (i * 53) % 100
    const size = 2 + ((i * 7) % 4)
    const delay = (i % 10) * 0.3
    const dur = 2.5 + (i % 5)
    return { x, y, size, delay, dur }
  })
</script>

<div class="starfield" aria-hidden="true">
  {#each stars as s}
    <span
      class="star"
      style="left:{s.x}%; top:{s.y}%; width:{s.size}px; height:{s.size}px; animation-delay:{s.delay}s; animation-duration:{s.dur}s;"
    ></span>
  {/each}
  <div class="planet p1">🪐</div>
  <div class="planet p2">🌙</div>
  <div class="planet p3">⭐</div>
</div>

<style>
  .star {
    position: absolute;
    background: #fff;
    border-radius: 50%;
    opacity: 0.7;
    animation-name: twinkle;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0.25; transform: scale(0.8); }
    50% { opacity: 0.9; transform: scale(1.2); }
  }
  .planet {
    position: absolute;
    font-size: 2.4rem;
    opacity: 0.9;
    animation: drift 9s ease-in-out infinite;
  }
  .p1 { right: 6%; top: 12%; font-size: 3rem; }
  .p2 { left: 8%; bottom: 16%; animation-delay: 1.5s; }
  .p3 { right: 14%; bottom: 26%; font-size: 1.6rem; animation-delay: 3s; }
  @keyframes drift {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-14px) rotate(8deg); }
  }
</style>
