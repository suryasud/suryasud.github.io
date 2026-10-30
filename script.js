// Mobile menu toggle
const btn = document.getElementById('menu');
const nav = document.querySelector('header nav');

if (btn && nav) {
  const set = open => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  };
  btn.addEventListener('click', () => set(!nav.classList.contains('open')));
  nav.addEventListener('click', e => { if (e.target.tagName === 'A') set(false); });
}
