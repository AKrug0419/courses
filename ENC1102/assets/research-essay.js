/* ═══════════════════════════════════════════════════════════════════
   DYSTOPIAN RESEARCH ESSAY MODULE — Shared JavaScript
   ENC 1102 — Advanced Regular

   Lightweight interactivity layer. Loaded by all module pages.
   No framework dependencies.
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────────
     § 01  REVEAL / TOGGLE BLOCKS
     Show/hide content (quiz answers, expandable sections, etc.)
     Usage:
       <button class="reveal-btn" data-target="answer-1">Show Answer</button>
       <div id="answer-1" class="reveal-content" hidden>…</div>
     ───────────────────────────────────────────── */

  document.querySelectorAll('.reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const isHidden = target.hidden;
      target.hidden = !isHidden;
      btn.textContent = isHidden
        ? (btn.dataset.hideText || 'Hide')
        : (btn.dataset.showText || 'Show Answer');
      btn.setAttribute('aria-expanded', isHidden);
    });
  });


  /* ─────────────────────────────────────────────
     § 02  SMOOTH SCROLL FOR ANCHOR LINKS
     ───────────────────────────────────────────── */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ─────────────────────────────────────────────
     § 03  CHECKLIST INTERACTION
     Toggle check state on click.
     Usage:
       <ul class="checklist interactive"> <li>Item</li> … </ul>
     ───────────────────────────────────────────── */

  document.querySelectorAll('.checklist.interactive li').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
    });
  });


  /* ─────────────────────────────────────────────
     § 04  ACTIVE PAGE HIGHLIGHT
     Marks the current page in a .page-list nav.
     Each page sets: <body data-page-id="overview">
     Each link sets:  <a class="page-link" data-page="overview">
     ───────────────────────────────────────────── */

  const currentPage = document.body.dataset.pageId;
  if (currentPage) {
    document.querySelectorAll('.page-link').forEach(link => {
      if (link.dataset.page === currentPage) {
        link.classList.add('active');
        link.style.borderColor = 'var(--accent-mid)';
        link.style.background  = 'var(--bg-elevated)';
      }
    });
  }

});
