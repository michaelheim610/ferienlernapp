<script lang="ts">
  import { goHome } from '../../lib/nav'
  import { progress } from '../../lib/store'
  import { profiles } from '../../lib/profiles'
  import { coupons, nextCoupon, type Coupon } from '../../lib/coupons'
  import { getPapaPin, setPapaPin, hasPapaPin } from '../../lib/settings'
  import NumberPad from '../ui/NumberPad.svelte'
  import Confetti from '../ui/Confetti.svelte'
  import { playFanfare, playTry, playTap } from '../../lib/sound'

  $: stars = $progress.stars
  $: redeemed = $progress.couponsRedeemed ?? {}
  $: next = nextCoupon(stars, $coupons)
  $: active = $profiles.profiles.find((p) => p.id === $profiles.activeId)
  $: name = active?.name ?? 'dich'

  function state(
    c: Coupon,
    st: number,
    red: Record<string, string>
  ): 'locked' | 'open' | 'redeemed' {
    if (red[c.id]) return 'redeemed'
    return st >= c.stars ? 'open' : 'locked'
  }

  // Einloesen-Dialog
  let target: Coupon | null = null
  let mode: 'confirm' | 'setpin' = 'confirm'
  let entered = ''
  let wrong = false
  let burst = 0

  function openRedeem(c: Coupon) {
    target = c
    entered = ''
    wrong = false
    mode = hasPapaPin() ? 'confirm' : 'setpin'
    playTap()
  }
  function closeDialog() {
    target = null
    entered = ''
    wrong = false
  }

  function doRedeem() {
    if (!target) return
    progress.redeemCoupon(target.id)
    playFanfare()
    burst += 1
    closeDialog()
  }

  function onKey(e: CustomEvent<string>) {
    if (!target) return
    if (e.detail === 'del') entered = entered.slice(0, -1)
    else if (entered.length < 4) entered += e.detail
    wrong = false
    if (entered.length === 4) {
      if (mode === 'setpin') {
        setPapaPin(entered)
        doRedeem()
      } else if (entered === getPapaPin()) {
        doRedeem()
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
</script>

<div class="screen">
  <div class="topbar">
    <button class="iconbtn" on:click={goHome} aria-label="Zurück">←</button>
    <h2 class="space-title">🎟️ Papa-Gutscheine</h2>
    <span class="spacer"></span>
    <span class="star-badge">⭐ {stars}</span>
  </div>

  <div class="lead card">
    <p>Sammle Sterne und schalte <b>echte Gutscheine</b> frei – zum Einlösen bei Papa! 🎉</p>
    {#if next}
      <p class="goal">🎁 Sammle weiter Sterne – der nächste Gutschein ist noch geheim! ✨</p>
    {:else}
      <p class="goal">Wahnsinn – du hast ALLE Gutscheine freigeschaltet! 🏆</p>
    {/if}
  </div>

  <div class="tickets">
    {#each $coupons as c (c.id)}
      {@const s = state(c, stars, redeemed)}
      <div class="ticket" class:locked={s === 'locked'} class:redeemed={s === 'redeemed'}>
        <div class="stub">
          <span class="emoji">{s === 'locked' ? '🔒' : c.emoji}</span>
        </div>
        <div class="perf"></div>
        <div class="body">
          <span class="kicker">PAPA-GUTSCHEIN</span>
          {#if s === 'locked'}
            <span class="title">? ? ?</span>
            <span class="desc">Noch geheim – sammle weiter Sterne!</span>
            <span class="lock-row">🔒 Überraschung</span>
          {:else}
            <span class="title">{c.emoji} {c.title}</span>
            <span class="desc">{c.desc}</span>
            <span class="forwho">für {name}</span>
            {#if s === 'redeemed'}
              <span class="stamp">EINGELÖST ✓ · {redeemed[c.id]}</span>
            {:else}
              <button class="redeem" on:click={() => openRedeem(c)}>Bei Papa einlösen</button>
            {/if}
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>

{#if target}
  <div class="overlay" on:click={closeDialog} role="presentation">
    <div class="dialog" on:click|stopPropagation role="dialog">
      <span class="d-emoji">{target.emoji}</span>
      <span class="d-title">{target.title}</span>
      {#if mode === 'setpin'}
        <p class="d-text">Papa, leg einen <b>Geheim-Code</b> fest (4 Zahlen). 🔒<br />Nur damit kannst du Gutscheine abstempeln – merk ihn dir gut!</p>
      {:else}
        <p class="d-text">Papa, bitte mit deinem Code bestätigen. 🔒</p>
      {/if}
      <div class="pin-boxes" class:shake={wrong}>
        {#each Array(4) as _, i}
          <span class="pin-box" class:filled={i < entered.length} class:bad={wrong}>{i < entered.length ? '●' : ''}</span>
        {/each}
      </div>
      {#if wrong}<p class="d-err">Falscher Code – nochmal 🙃</p>{/if}
      <NumberPad on:key={onKey} />
      <button class="btn ghost" on:click={closeDialog}>Abbrechen</button>
    </div>
  </div>
{/if}

<Confetti {burst} big />

<style>
  .lead {
    background: var(--card);
    border-radius: 18px;
    box-shadow: var(--shadow-sm);
    padding: 14px 16px;
    text-align: center;
    margin-bottom: 16px;
    color: var(--ink);
  }
  .lead p { margin: 2px 0; font-weight: 700; }
  .lead .goal { color: var(--violet-dark); font-weight: 800; }

  .tickets { display: flex; flex-direction: column; gap: 16px; max-width: 560px; margin-inline: auto; width: 100%; }

  .ticket {
    display: flex;
    align-items: stretch;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: var(--shadow);
    background: linear-gradient(135deg, #ffe58a 0%, #ffd23f 45%, #ffb300 100%);
    color: #3a2a00;
    min-height: 118px;
    position: relative;
  }
  .ticket::after {
    content: '✨';
    position: absolute;
    top: 6px; right: 10px;
    font-size: 1.1rem;
    opacity: 0.8;
  }
  .ticket .stub {
    width: 96px;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.35);
  }
  .ticket .stub .emoji { font-size: 3rem; filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2)); }
  .ticket .perf {
    width: 0;
    border-left: 3px dashed rgba(0, 0, 0, 0.3);
    margin: 10px 0;
  }
  .ticket .body {
    flex: 1;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
  }
  .kicker { font-size: 0.72rem; font-weight: 800; letter-spacing: 2px; opacity: 0.7; }
  .ticket .title { font-size: 1.3rem; font-weight: 800; }
  .ticket .desc { font-size: 0.95rem; font-weight: 700; opacity: 0.85; }
  .forwho { font-size: 0.85rem; font-weight: 800; font-style: italic; opacity: 0.7; }

  .redeem {
    margin-top: 6px;
    align-self: flex-start;
    background: #3a2a00;
    color: #ffd23f;
    font-weight: 800;
    font-size: 1rem;
    padding: 10px 18px;
    border-radius: 999px;
    box-shadow: var(--shadow-sm);
  }
  .redeem:active { transform: scale(0.97); }
  .lock-row { font-size: 0.9rem; font-weight: 800; }

  /* gesperrt */
  .ticket.locked {
    background: linear-gradient(135deg, #cfd4ea 0%, #b9bfdc 100%);
    color: #3a3a5a;
    box-shadow: var(--shadow-sm);
  }
  .ticket.locked::after { content: ''; }
  .ticket.locked .stub { background: rgba(255, 255, 255, 0.25); }

  /* eingeloest */
  .ticket.redeemed { filter: grayscale(0.35); opacity: 0.85; }
  .stamp {
    margin-top: 6px;
    align-self: flex-start;
    border: 3px solid var(--green-dark);
    color: var(--green-dark);
    font-weight: 800;
    font-size: 0.9rem;
    padding: 4px 12px;
    border-radius: 10px;
    transform: rotate(-6deg);
    background: rgba(255, 255, 255, 0.6);
  }

  /* Einloese-Dialog */
  .overlay {
    position: fixed;
    inset: 0;
    z-index: 70;
    background: rgba(20, 10, 60, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  .dialog {
    background: #fff;
    border-radius: var(--radius-lg);
    padding: 20px;
    width: 100%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: var(--shadow);
    animation: pop 0.3s ease;
  }
  .d-emoji { font-size: 3rem; }
  .d-title { font-size: 1.3rem; font-weight: 800; color: var(--ink); }
  .d-text { text-align: center; color: var(--ink-soft); font-weight: 700; margin: 0; font-size: 0.95rem; }
  .pin-boxes { display: flex; gap: 10px; margin: 4px 0; }
  .pin-boxes.shake { animation: shake 0.4s; }
  .pin-box {
    width: 44px; height: 52px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; color: var(--ink);
    border: 3px solid var(--violet);
    border-radius: 12px;
  }
  .pin-box.filled { border-color: var(--green-dark); background: #eafff2; }
  .pin-box.bad { border-color: var(--red); background: #fff0f0; }
  .d-err { color: var(--red); font-weight: 800; margin: 0; }
</style>
