<script lang="ts">
  // Freundliches Astronauten-Maskottchen (bunt, runde Formen).
  export let size = 120
  export let cheer = false // jubelt (Arme hoch, huepft)
</script>

<div
  class="mascot"
  class:cheer
  style="width:{size}px; height:{size}px;"
  role="img"
  aria-label="Astronaut"
>
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <!-- Ruecken-Tank -->
    <rect x="30" y="40" width="40" height="34" rx="14" fill="#9aa4c8" />
    <!-- Arme -->
    <g class="arm-left">
      <rect x="16" y="44" width="16" height="12" rx="6" fill="#eef1ff" />
    </g>
    <g class="arm-right">
      <rect x="68" y="44" width="16" height="12" rx="6" fill="#eef1ff" />
    </g>
    <!-- Koerper -->
    <rect x="28" y="42" width="44" height="40" rx="18" fill="#ffffff" />
    <!-- Beine -->
    <rect x="34" y="76" width="12" height="16" rx="6" fill="#ffffff" />
    <rect x="54" y="76" width="12" height="16" rx="6" fill="#ffffff" />
    <!-- kleines Bedienfeld -->
    <circle cx="42" cy="60" r="3" fill="#ff5fa2" />
    <circle cx="50" cy="60" r="3" fill="#ffd23f" />
    <circle cx="58" cy="60" r="3" fill="#3ddc84" />
    <!-- Helm -->
    <circle cx="50" cy="34" r="22" fill="#ffffff" />
    <circle cx="50" cy="34" r="17" fill="#2b2f55" />
    <!-- Visier-Glanz -->
    <ellipse cx="44" cy="28" rx="6" ry="4" fill="#5b6bd6" opacity="0.8" />
    <!-- Augen + Laecheln -->
    <circle cx="44" cy="35" r="2.6" fill="#ffffff" />
    <circle cx="56" cy="35" r="2.6" fill="#ffffff" />
    <path d="M45 40 Q50 44 55 40" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" />
  </svg>
</div>

<style>
  .mascot { display: inline-block; animation: bob 3s ease-in-out infinite; }
  @keyframes bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  .cheer { animation: jump 0.6s ease-in-out infinite; }
  @keyframes jump {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-16px) scale(1.05); }
  }
  .cheer .arm-left { transform-origin: 24px 50px; transform: rotate(-40deg); transition: transform 0.3s; }
  .cheer .arm-right { transform-origin: 76px 50px; transform: rotate(40deg); transition: transform 0.3s; }
</style>
