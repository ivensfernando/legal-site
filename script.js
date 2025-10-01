// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');
btn?.addEventListener('click', () => {
  if (!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.gap = '12px';
  nav.style.background = '#fff';
  nav.style.position = 'absolute';
  nav.style.top = '64px';
  nav.style.right = '20px';
  nav.style.padding = '12px';
  nav.style.border = '1px solid #e5e7eb';
  nav.style.borderRadius = '12px';
});