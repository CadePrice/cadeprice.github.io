// Main JavaScript for Cade Price Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Scroll snap functionality for landing page
  const snapSections = document.querySelectorAll('.snap-section');

  if (snapSections.length > 0) {
    let isScrolling = false;
    let currentSection = 0;
    let touchStartY = 0;

    // Function to scroll to a specific section
    function scrollToSection(index) {
      if (index >= 0 && index < snapSections.length) {
        isScrolling = true;
        currentSection = index;

        snapSections[index].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    }

    // Mouse wheel event
    let wheelTimeout;
    window.addEventListener('wheel', (e) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0 && currentSection < snapSections.length - 1) {
          // Scrolling down
          scrollToSection(currentSection + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
          // Scrolling up
          scrollToSection(currentSection - 1);
        }
      }, 50);
    }, { passive: false });

    // Touch events for mobile
    window.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (isScrolling) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 50) { // Minimum swipe distance
        if (deltaY > 0 && currentSection < snapSections.length - 1) {
          // Swiping up (scrolling down)
          scrollToSection(currentSection + 1);
        } else if (deltaY < 0 && currentSection > 0) {
          // Swiping down (scrolling up)
          scrollToSection(currentSection - 1);
        }
      }
    }, { passive: true });

    // Update current section based on scroll position
    const updateCurrentSection = debounce(() => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      snapSections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = index;
        }
      });
    }, 100);

    window.addEventListener('scroll', updateCurrentSection);

    // Initialize - scroll to first section
    scrollToSection(0);
  }

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
