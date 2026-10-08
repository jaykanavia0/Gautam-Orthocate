/**
 * ScrollExpand.js — Vanilla JS port of the React Bits ScrollExpand component
 * Original: https://reactbits.dev
 *
 * Usage:
 *   new ScrollExpand('#myContainer', { useWindowScroll: true, title: 'Hello' });
 *
 * Or via data attributes on the container element:
 *   <div id="se" data-se-title="Gautam Orthocare" data-se-use-window-scroll="true">
 *     ...inner HTML structure...
 *   </div>
 *   new ScrollExpand('#se');
 */

(function (global) {
  'use strict';

  /* ─── Helpers ─────────────────────────────────────────────────────────── */
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

  const smoothstep = (edge0, edge1, x) => {
    const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
    return t * t * (3 - 2 * t);
  };

  const parseBoolean = (v) => v === true || v === 'true' || v === '1';
  const parseNumber  = (v, def) => { const n = parseFloat(v); return isNaN(n) ? def : n; };

  /* ─── ScrollExpand class ──────────────────────────────────────────────── */
  function ScrollExpand(containerOrSelector, options) {
    const root = typeof containerOrSelector === 'string'
      ? document.querySelector(containerOrSelector)
      : containerOrSelector;

    if (!root) {
      console.warn('[ScrollExpand] Container not found:', containerOrSelector);
      return;
    }

    /* Read data-se-* attributes as fallback defaults */
    const d = root.dataset;
    const o = Object.assign({
      src:             d.seSrc            || '',
      mediaType:       d.seMediaType      || 'image',
      poster:          d.sePoster         || '',
      alt:             d.seAlt            || '',
      title:           d.seTitle          || '',
      scrollHint:      d.seScrollHint     || '',
      startWidth:      parseNumber(d.seStartWidth,    42),
      startHeight:     parseNumber(d.seStartHeight,   58),
      startRadius:     parseNumber(d.seStartRadius,   24),
      endRadius:       parseNumber(d.seEndRadius,      0),
      mediaZoom:       parseNumber(d.seMediaZoom,    1.35),
      scrollDistance:  parseNumber(d.seScrollDistance, 1.2),
      holdDistance:    parseNumber(d.seHoldDistance,  0.35),
      smoothing:       parseNumber(d.seSmoothing,      0.1),
      overlayScrim:    parseNumber(d.seOverlayScrim,  0.45),
      useWindowScroll: parseBoolean(d.seUseWindowScroll || false),
      enabled:         parseBoolean(d.seEnabled !== undefined ? d.seEnabled : true),
    }, options || {});

    /* State */
    let current = 0, target = 0, stageH = 0;
    let running = false, raf = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Build DOM if not already present ─────────────────────────────── */
    if (!root.querySelector('.scroll-expand__track')) {
      _buildDOM(root, o);
    }

    /* ── Grab refs ─────────────────────────────────────────────────────── */
    const track    = root.querySelector('.scroll-expand__track');
    const stage    = root.querySelector('.scroll-expand__stage');
    const frame    = root.querySelector('.scroll-expand__frame');
    const media    = root.querySelector('.scroll-expand__media');
    const scrim    = root.querySelector('.scroll-expand__scrim');
    const overlay  = root.querySelector('.scroll-expand__overlay');
    const titleEl  = root.querySelector('.scroll-expand__title');
    const hintEl   = root.querySelector('.scroll-expand__hint');

    /* Apply classes */
    root.classList.add('scroll-expand');
    if (!o.useWindowScroll) root.classList.add('scroll-expand--scroller');

    /* ── Core functions ────────────────────────────────────────────────── */
    function measure() {
      stageH = o.useWindowScroll ? window.innerHeight : root.clientHeight;
      if (stageH <= 0) return;
      stage.style.height = stageH + 'px';
      track.style.height = stageH * (1 + Math.max(0, o.scrollDistance) + Math.max(0, o.holdDistance)) + 'px';
      const w = root.clientWidth || stageH;
      stage.style.setProperty('--se-title-size', clamp(w * 0.075, 20, 84) + 'px');
    }

    function readProgress() {
      if (!o.enabled) return 1;
      const span = stageH * Math.max(0.01, o.scrollDistance);
      if (o.useWindowScroll) {
        const top = track.getBoundingClientRect().top;
        return clamp(-top / span, 0, 1);
      }
      return clamp(root.scrollTop / span, 0, 1);
    }

    function applyProgress(p) {
      if (!frame || !media) return;
      const e  = smoothstep(0, 1, p);

      const w  = o.startWidth  + (100 - o.startWidth)  * e;
      const h  = o.startHeight + (100 - o.startHeight) * e;
      const ix = Math.max(0, (100 - w) / 2);
      const iy = Math.max(0, (100 - h) / 2);
      const r  = o.startRadius + (o.endRadius - o.startRadius) * e;
      frame.style.clipPath = 'inset(' + iy + '% ' + ix + '% ' + iy + '% ' + ix + '% round ' + r + 'px)';

      media.style.transform = 'scale(' + (o.mediaZoom + (1 - o.mediaZoom) * e) + ')';

      if (scrim)   scrim.style.opacity   = '' + (o.overlayScrim * e);

      if (titleEl) {
        const out = smoothstep(0.4, 0.88, p);
        titleEl.style.opacity   = '' + (1 - out);
        titleEl.style.transform = 'translate3d(0,' + (-28 * out) + 'px,0) scale(' + (1 + 0.06 * out) + ')';
      }

      if (hintEl) {
        const gone = smoothstep(0, 0.12, p);
        hintEl.style.opacity   = '' + (1 - gone);
        hintEl.style.transform = 'translate3d(0,' + (8 * gone) + 'px,0)';
      }

      if (overlay) {
        const inn = smoothstep(0.68, 1, p);
        overlay.style.opacity   = '' + inn;
        overlay.style.transform = 'translate3d(0,' + (18 * (1 - inn)) + 'px,0)';
      }
    }

    function tick() {
      const k = o.smoothing <= 0 ? 1 : 1 - Math.exp(-1 / (60 * o.smoothing));
      current += (target - current) * k;
      if (Math.abs(target - current) < 0.0004) {
        current = target;
        running = false;
      }
      applyProgress(current);
      raf = running ? requestAnimationFrame(tick) : 0;
    }

    function kick() {
      if (running) return;
      running = true;
      if (!raf) raf = requestAnimationFrame(tick);
    }

    /* ── Event handlers ────────────────────────────────────────────────── */
    function onScroll() {
      target = readProgress();
      if (o.smoothing <= 0 || reduceMotion) {
        current = target;
        applyProgress(current);
        return;
      }
      kick();
    }

    function onResize() {
      measure();
      target  = readProgress();
      current = target;
      applyProgress(current);
    }

    /* ── Init ──────────────────────────────────────────────────────────── */
    measure();
    target  = readProgress();
    current = target;
    applyProgress(current);

    const scroller = o.useWindowScroll ? window : root;
    scroller.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    let ro = null;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(onResize);
      ro.observe(root);
    }

    /* ── Public API ────────────────────────────────────────────────────── */
    return {
      destroy: function () {
        if (raf) cancelAnimationFrame(raf);
        scroller.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
        if (ro) ro.disconnect();
      },
      setEnabled: function (val) {
        o.enabled = val;
        target  = readProgress();
        current = target;
        applyProgress(current);
      }
    };
  }

  /* ── DOM Builder (creates inner HTML if not pre-rendered) ──────────────── */
  function _buildDOM(root, o) {
    /* Preserve any user-authored overlay children */
    const existingChildren = root.innerHTML.trim();

    const mediaTag = o.mediaType === 'video'
      ? '<video class="scroll-expand__media" src="' + o.src + '"' +
          (o.poster ? ' poster="' + o.poster + '"' : '') +
          ' autoplay muted loop playsinline></video>'
      : '<img class="scroll-expand__media" src="' + o.src + '" alt="' + o.alt + '" draggable="false">';

    const overlayHTML = existingChildren
      ? '<div class="scroll-expand__overlay">' + existingChildren + '</div>'
      : '';

    const titleHTML = o.title
      ? '<div class="scroll-expand__title">' + o.title + '</div>'
      : '';

    const hintHTML = o.scrollHint
      ? '<div class="scroll-expand__hint">' + o.scrollHint + '</div>'
      : '';

    root.innerHTML =
      '<div class="scroll-expand__track">' +
        '<div class="scroll-expand__stage">' +
          '<div class="scroll-expand__frame">' +
            mediaTag +
            '<div class="scroll-expand__scrim"></div>' +
            overlayHTML +
          '</div>' +
          titleHTML +
          hintHTML +
        '</div>' +
      '</div>';
  }

  /* ── Export ─────────────────────────────────────────────────────────────── */
  global.ScrollExpand = ScrollExpand;

}(typeof window !== 'undefined' ? window : this));
