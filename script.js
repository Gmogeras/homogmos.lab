document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const path = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('nav a').forEach(a => {
    try {
      const href = new URL(a.href, window.location.href).pathname.replace(/\/$/, '');
      if (href && path && (path === href || (href !== '' && path.startsWith(href + '/')))) a.classList.add('active');
    } catch (_) {}
  });
  const cursor = document.querySelector('.cursor');
  if (cursor) setInterval(() => cursor.classList.toggle('off'), 600);
});
