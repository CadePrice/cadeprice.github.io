// Projects Page Filtering

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-chip');
  const projectCards = document.querySelectorAll('.project-card');

  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter projects
      projectCards.forEach(card => {
        const categories = card.dataset.categories;

        if (filter === 'all') {
          card.hidden = false;
          card.style.animation = 'fadeIn 0.5s ease-out forwards';
        } else {
          const matches = categories.includes(filter);
          card.hidden = !matches;

          if (matches) {
            card.style.animation = 'fadeIn 0.5s ease-out forwards';
          }
        }
      });

      // Hide/show category sections based on visible projects
      const categorySections = document.querySelectorAll('.project-category');
      categorySections.forEach(section => {
        const cardsInSection = section.querySelectorAll('.project-card');
        const hasVisibleCards = Array.from(cardsInSection).some(card => !card.hidden);
        section.hidden = !hasVisibleCards;
      });

      // Announce filter change for accessibility
      announceFilterChange(button.textContent, getVisibleProjectCount());
    });
  });

  // Count visible projects
  function getVisibleProjectCount() {
    return Array.from(projectCards).filter(card => !card.hidden).length;
  }

  // Accessibility announcement
  function announceFilterChange(filterName, count) {
    const announcement = document.getElementById('filter-announcement');
    if (announcement) {
      announcement.textContent = `Showing ${count} project${count !== 1 ? 's' : ''} for ${filterName}`;
    }
  }

  // Add accessibility announcement element if it doesn't exist
  if (!document.getElementById('filter-announcement')) {
    const announcement = document.createElement('div');
    announcement.id = 'filter-announcement';
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    document.body.appendChild(announcement);
  }

  // Initialize count
  const initialCount = getVisibleProjectCount();
  console.log(`Loaded ${initialCount} projects`);
});
