(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'portfolio-theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  function getInitialTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  applyTheme(getInitialTheme());

  toggleBtn.addEventListener('click', function () {
    const current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Video modal ----
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-modal-iframe');

  function openVideo(youtubeId, title) {
    iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    iframe.title = title || 'Project video';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    modal.hidden = true;
    iframe.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.video-trigger').forEach(function (btn) {
    const videoId = btn.getAttribute('data-video-id');
    if (videoId) {
      btn.classList.add('has-video');
      btn.disabled = false;
      btn.addEventListener('click', function () {
        openVideo(videoId, btn.getAttribute('data-video-title'));
      });
    } else {
      btn.disabled = true;
      btn.title = 'Video coming soon';
    }
  });

  document.querySelectorAll('[data-close-modal]').forEach(function (el) {
    el.addEventListener('click', closeVideo);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) closeVideo();
  });

  // ---- Clickable project cards (open repo, unless clicking an inner link/button) ----
  document.querySelectorAll('.project-card[data-repo-url]').forEach(function (card) {
    const url = card.getAttribute('data-repo-url');

    card.addEventListener('click', function (e) {
      if (e.target.closest('a, button')) return;
      window.open(url, '_blank', 'noopener');
    });

    card.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('a, button')) {
        e.preventDefault();
        window.open(url, '_blank', 'noopener');
      }
    });
  });
})();
