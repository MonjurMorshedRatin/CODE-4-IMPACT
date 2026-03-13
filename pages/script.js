// Load header and footer once
async function loadHeaderFooter() {
  const header = await fetch('header.html').then(r => r.text());
  document.getElementById('header-placeholder').innerHTML = header;

  const footer = await fetch('footer.html').then(r => r.text());
  document.getElementById('footer-placeholder').innerHTML = footer;
}

// Load page content with fade
async function loadPage(url) {
  const main = document.getElementById('page-content');

  // fade out current content
  main.style.opacity = 0;
  await new Promise(r => setTimeout(r, 200));

  // fetch new page content
  const html = await fetch(url).then(r => r.text());
  main.innerHTML = html;

  // fade in
  main.style.transition = 'opacity 0.3s';
  main.style.opacity = 1;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Intercept clicks on internal links
document.addEventListener('click', e => {
  const link = e.target.closest('a');
  if(link && link.getAttribute('href')?.endsWith('.html')) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // ignore header/footer
    if(!['header.html','footer.html'].includes(href)) {
      loadPage('pages/' + href);
      history.pushState(null, '', href);
    }
  }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
  const page = location.pathname.split('/').pop();
  loadPage('pages/' + page);
});

// Initialize
loadHeaderFooter().then(() => loadPage('pages/home.html'));



//
//
//
//
//
//
///
//
//
<script>
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = 1;
    
    // Fade out
    const fadeOut = setInterval(() => {
      if(preloader.style.opacity > 0){
        preloader.style.opacity -= 0.05;
      } else {
        clearInterval(fadeOut);
        preloader.style.display = 'none';
      }
    }, 20); // smooth fade
  });
</script>