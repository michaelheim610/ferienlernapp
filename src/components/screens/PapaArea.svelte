<script lang="ts">
  import { goHome } from '../../lib/nav'
  import {
    defaultCoupons,
    getCouponOverrides,
    saveCouponOverrides,
    resetCoupons,
    type CouponOverrides
  } from '../../lib/coupons'
  import { getPapaPin, setPapaPin, hasPapaPin } from '../../lib/settings'
  import NumberPad from '../ui/NumberPad.svelte'
  import { playCorrect, playTry, playTap } from '../../lib/sound'

  // PIN-Gate
  let mode: 'locked' | 'setpin' | 'open' = hasPapaPin() ? 'locked' : 'setpin'
  let entered = ''
  let wrong = false

  function onKey(e: CustomEvent<string>) {
    if (e.detail === 'del') entered = entered.slice(0, -1)
    else if (entered.length < 4) entered += e.detail
    wrong = false
    if (entered.length === 4) {
      if (mode === 'setpin') {
        setPapaPin(entered)
        playCorrect()
        unlock()
      } else if (entered === getPapaPin()) {
        playCorrect()
        unlock()
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

  // Editor-Zeilen (Arbeitskopie)
  interface Row {
    id: string
    emoji: string
    stars: number
    title: string
    desc: string
  }
  let rows: Row[] = []
  let saved = false

  function unlock() {
    const ov = getCouponOverrides()
    rows = defaultCoupons.map((c) => {
      const o = ov[c.id]
      return {
        id: c.id,
        emoji: c.emoji,
        stars: o && typeof o.stars === 'number' && o.stars > 0 ? Math.round(o.stars) : c.stars,
        title: o && o.title && o.title.trim() ? o.title : c.title,
        desc: o && o.desc && o.desc.trim() ? o.desc : c.desc
      }
    })
    entered = ''
    mode = 'open'
  }

  function save() {
    const ov: CouponOverrides = {}
    for (const r of rows) {
      const def = defaultCoupons.find((c) => c.id === r.id)!
      const o: { stars?: number; title?: string; desc?: string } = {}
      const stars = Math.max(1, Math.round(Number(r.stars) || def.stars))
      if (stars !== def.stars) o.stars = stars
      if (r.title.trim() && r.title.trim() !== def.title) o.title = r.title.trim()
      if (r.desc.trim() && r.desc.trim() !== def.desc) o.desc = r.desc.trim()
      if (Object.keys(o).length > 0) ov[r.id] = o
    }
    saveCouponOverrides(ov)
    playCorrect()
    saved = true
    setTimeout(() => (saved = false), 2000)
  }

  function resetAll() {
    resetCoupons()
    const list = [...defaultCoupons]
    rows = list.map((c) => ({ id: c.id, emoji: c.emoji, stars: c.stars, title: c.title, desc: c.desc }))
    playTap()
    saved = true
    setTimeout(() => (saved = false), 2000)
  }

  function changePin() {
    mode = 'setpin'
    entered = ''
    wrong = false
  }
</script>

<div class="screen">
  <div class="topbar">
    <button class="iconbtn" on:click={goHome} aria-label="Zurück">←</button>
    <h2 class="space-title">🔧 Papa-Zugang</h2>
    <span class="spacer"></span>
  </div>

  {#if mode !== 'open'}
    <div class="gate card">
      <span class="lock">🔒</span>
      {#if mode === 'setpin'}
        <p class="g-text">Leg einen <b>4-stelligen Papa-PIN</b> fest.<br />Nur damit kommst du in den Papa-Zugang und stempelst Gutscheine ab.</p>
      {:else}
        <p class="g-text">Bitte gib deinen <b>Papa-PIN</b> ein.</p>
      {/if}
      <div class="pin-boxes" class:shake={wrong}>
        {#each Array(4) as _, i}
          <span class="pin-box" class:filled={i < entered.length} class:bad={wrong}>{i < entered.length ? '●' : ''}</span>
        {/each}
      </div>
      {#if wrong}<p class="g-err">Falscher PIN – nochmal 🙃</p>{/if}
      <NumberPad on:key={onKey} />
    </div>
  {:else}
    <div class="intro card">
      <p>Hier kannst du die <b>Gutscheine</b> anpassen: ab wie vielen Sternen ein Gutschein freigeschaltet wird, und wie er heißt. Lisa sieht die Sterne-Werte <b>nicht</b> – es bleibt eine Überraschung. 🎁</p>
    </div>

    <div class="rows">
      {#each rows as r (r.id)}
        <div class="row card">
          <span class="r-emoji">{r.emoji}</span>
          <div class="fields">
            <label class="field stars">
              <span class="lbl">Ab wie vielen ⭐</span>
              <input type="number" inputmode="numeric" min="1" step="1" bind:value={r.stars} />
            </label>
            <label class="field">
              <span class="lbl">Titel</span>
              <input type="text" bind:value={r.title} />
            </label>
            <label class="field">
              <span class="lbl">Beschreibung</span>
              <input type="text" bind:value={r.desc} />
            </label>
          </div>
        </div>
      {/each}
    </div>

    <div class="actions">
      <button class="btn big green" on:click={save}>💾 Speichern</button>
      <button class="btn ghost" on:click={resetAll}>Auf Standard zurücksetzen</button>
      <button class="btn ghost" on:click={changePin}>PIN ändern</button>
    </div>
    {#if saved}<p class="savedmsg">Gespeichert ✓</p>{/if}
  {/if}
</div>

<style>
  .gate {
    background: var(--card);
    border-radius: var(--radius-lg);
    padding: 20px;
    max-width: 380px;
    margin: 10px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    box-shadow: var(--shadow);
  }
  .gate .lock { font-size: 2.6rem; }
  .g-text { text-align: center; color: var(--ink); font-weight: 700; margin: 0; }
  .g-err { color: var(--red); font-weight: 800; margin: 0; }
  .pin-boxes { display: flex; gap: 10px; }
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

  .intro {
    background: var(--card);
    border-radius: 16px;
    padding: 12px 16px;
    margin-bottom: 14px;
    color: var(--ink);
    font-weight: 600;
    box-shadow: var(--shadow-sm);
  }
  .intro p { margin: 0; }

  .rows { display: flex; flex-direction: column; gap: 12px; max-width: 560px; margin-inline: auto; width: 100%; }
  .row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background: var(--card);
    border-radius: 16px;
    padding: 12px 14px;
    box-shadow: var(--shadow-sm);
  }
  .r-emoji { font-size: 2rem; flex: none; line-height: 1.4; }
  .fields { flex: 1; display: flex; flex-direction: column; gap: 8px; min-width: 0; }
  .field { display: flex; flex-direction: column; gap: 3px; }
  .field .lbl { font-size: 0.78rem; font-weight: 800; color: var(--ink-soft); }
  .field input {
    font-family: inherit;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--ink);
    padding: 8px 12px;
    border: 2px solid var(--violet);
    border-radius: 10px;
    background: #fff;
    outline: none;
    width: 100%;
  }
  .field input:focus { border-color: var(--gold); box-shadow: 0 0 0 4px rgba(255, 210, 63, 0.35); }
  .field.stars input { max-width: 120px; }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 18px auto 0;
    max-width: 380px;
  }
  .savedmsg { text-align: center; color: var(--green-dark); font-weight: 800; margin: 8px 0 0; }
</style>
