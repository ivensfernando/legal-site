document.getElementById('year').textContent = new Date().getFullYear();

// Simple mobile menu toggle (show/hide nav)
const btn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');
btn?.addEventListener('click', () => {
  if (!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.gap = '12px';
  nav.style.background = 'rgba(11,18,32,.98)';
  nav.style.position = 'absolute';
  nav.style.top = '64px';
  nav.style.right = '20px';
  nav.style.padding = '12px';
  nav.style.border = '1px solid var(--border)';
  nav.style.borderRadius = '12px';
});