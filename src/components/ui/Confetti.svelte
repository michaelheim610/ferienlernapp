<script lang="ts">
  export let burst = 0 // erhoehe diese Zahl, um Konfetti auszuloesen
  export let big = false

  interface Piece { id: number; x: number; color: string; emoji: string; delay: number; rot: number; dur: number }
  let pieces: Piece[] = []
  let seq = 0

  const colors = ['#ffd23f', '#ff5fa2', '#3ddc84', '#38bdf8', '#ff7a59', '#7c5cff']
  const emojis = ['⭐', '🌟', '✨', '🎉', '💫']

  $: if (burst > 0) spawn(burst)

  function spawn(_b: number) {
    const count = big ? 40 : 16
    const batch: Piece[] = []
    for (let i = 0; i < count; i++) {
      seq++
      batch.push({
        id: seq,
        x: 5 + ((i * 61) % 90),
        color: colors[i % colors.length],
        emoji: emojis[i % emojis.length],
        delay: (i % 8) * 0.05,
        rot: (i * 47) % 360,
        dur: 1.1 + ((i % 5) * 0.2)
      })
    }
    pieces = batch
    setTimeout(() => (pieces = []), (big ? 2600 : 1800))
  }
</script>

<div class="confetti" aria-hidden="true">
  {#each pieces as p (p.id)}
    <span
      style="left:{p.x}%; color:{p.color}; animation-delay:{p.delay}s; animation-duration:{p.dur}s; --rot:{p.rot}deg;"
    >{p.emoji}</span>
  {/each}
</div>

<style>
  .confetti { position: fixed; inset: 0; pointer-events: none; z-index: 50; overflow: hidden; }
  .confetti span {
    position: absolute;
    top: -8%;
    font-size: 1.6rem;
    animation-name: fall;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }
  @keyframes fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(110vh) rotate(var(--rot)); opacity: 0.9; }
  }
</style>
