// ========== THEME SWITCHER FUNCTIONALITY ==========

// Apply theme immediately on page load before DOM is ready
document.addEventListener('readystatechange', function() {
  if (document.readyState === 'loading') {
    applyTheme(localStorage.getItem('website-theme') || 'dark');
  }
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  setupThemeToggle();
  
  // Watch for header being loaded dynamically
  const headerObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect && !themeSelect._listenerAttached) {
          // Get the currently saved theme
          const currentTheme = localStorage.getItem('website-theme') || 'dark';
          
          // Sync the select element value with the current theme
          themeSelect.value = currentTheme;
          
          // Reapply the theme to ensure body classes are set correctly
          applyThemeClasses(currentTheme);
          
          // Setup listener on the newly loaded select
          setupThemeToggle();
          themeSelect._listenerAttached = true;
        }
      }
    });
  });
  
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerObserver.observe(headerPlaceholder, { childList: true });
  }
});

// Initialize theme from localStorage or default to dark
function initializeTheme() {
  const savedTheme = localStorage.getItem('website-theme') || 'dark';
  applyTheme(savedTheme);
}

// Apply theme classes to body
function applyThemeClasses(theme) {
  const body = document.body;
  
  // Remove all theme classes
  body.classList.remove('light-theme', 'bw-theme');
  
  // Apply the selected theme class
  if (theme === 'light') {
    body.classList.add('light-theme');
  } else if (theme === 'bw') {
    body.classList.add('bw-theme');
  }
  // Dark theme has no class (default)
}

// Apply theme to the website
function applyTheme(theme) {
  const body = document.body;
  const themeSelect = document.getElementById('theme-select');
  
  // Apply theme classes
  applyThemeClasses(theme);
  
  // Update select dropdown
  if (themeSelect) {
    themeSelect.value = theme;
  }
  
  // Save preference to localStorage
  localStorage.setItem('website-theme', theme);
}

// Setup theme toggle listener
function setupThemeToggle() {
  const themeSelect = document.getElementById('theme-select');
  
  if (themeSelect && !themeSelect._listenerAttached) {
    themeSelect.addEventListener('change', function() {
      applyTheme(this.value);
    });
    themeSelect._listenerAttached = true;
  }
}

// Ensure theme persists when header is dynamically loaded
function initializeThemeAfterHeaderLoad() {
  setupThemeToggle();
  const savedTheme = localStorage.getItem('website-theme') || 'dark';
  applyTheme(savedTheme);
}
