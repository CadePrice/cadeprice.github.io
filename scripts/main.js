// Main JavaScript for Cade Price Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Fallback for background image if GIF doesn't exist
  const bgImage = document.getElementById('bgImage');

  if (bgImage) {
    bgImage.onerror = function() {
      // If GIF doesn't load, use a gradient background
      const bgContainer = document.querySelector('.background-container');
      bgContainer.innerHTML = `
        <div class="background-overlay" style="background: linear-gradient(135deg, #0a0e1a 0%, rgba(168, 85, 247, 0.15) 50%, #0a0e1a 100%);"></div>
      `;
    };
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add animation classes when elements come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  document.querySelectorAll('.card, .project-card').forEach(el => {
    observer.observe(el);
  });

  // Navigation active state
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// Utility: Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { debounce };
}
