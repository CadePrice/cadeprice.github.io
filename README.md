# Cade Price - Engineering Portfolio

A modern, responsive portfolio website showcasing engineering projects in RF, embedded systems, hardware design, and verification & validation.

## Structure

```
├── index.html              # Main landing page
├── projects.html           # Projects listing with filtering
├── resume.html            # Resume/CV page
├── contact.html           # Contact page
├── projects/              # Individual project detail pages
│   └── course-corrector-imus.html
├── styles/                # CSS stylesheets
│   ├── main.css          # Global styles and utilities
│   ├── landing.css       # Landing page specific
│   ├── projects.css      # Projects listing
│   ├── project-detail.css # Project detail pages
│   ├── resume.css        # Resume page
│   └── contact.css       # Contact page
├── scripts/              # JavaScript files
│   ├── main.js           # Global scripts
│   └── projects.js       # Projects filtering
├── assets/               # Images, GIFs, etc.
│   ├── images/
│   └── gifs/
├── games/                # Mini game feature
│   └── index.html
└── old/                  # Archived previous version

```

## Features

- **Modern Design**: Dark theme with purple/cyan accents inspired by space aesthetics
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Project Filtering**: Filter projects by category (Hardware, Embedded, V&V, RF)
- **Animated Elements**: Smooth transitions and hover effects
- **Accessible**: Semantic HTML and ARIA labels for screen readers
- **Fast Loading**: Optimized CSS and minimal JavaScript

## Customization Guide

### Adding a Background Image/GIF

1. Add your background image or GIF to `assets/images/` or `assets/gifs/`
2. The landing page (`index.html`) references `assets/images/background.gif`
3. You can replace this with any image file - the JavaScript will handle fallback if it doesn't load

### Adding New Projects

1. Create a new HTML file in the `projects/` folder (e.g., `projects/my-project.html`)
2. Use `projects/course-corrector-imus.html` as a template
3. Add the project card to `projects.html` in the projects grid
4. Update the `data-categories` attribute with relevant categories

### Updating Contact Information

Update the following files with your actual contact info:
- `index.html` - Update mailto link and social links
- `contact.html` - Update email, LinkedIn, GitHub URLs
- `index.html` - Update social links in the landing page

### Color Scheme

The color palette is defined in `styles/main.css` using CSS variables:

```css
:root {
  --purple-primary: #a855f7;
  --purple-light: #c084fc;
  --cyan-primary: #06b6d4;
  --cyan-light: #22d3ee;
  --magenta: #d946ef;
  /* ... more colors ... */
}
```

Modify these to change the entire site's color scheme.

### Adding Content

#### Resume Page
Edit `resume.html` to add:
- Your work experience
- Education details
- Technical skills
- Download PDF link

#### Contact Form
The contact form in `contact.html` currently has `action="#"`. To make it functional:
- Use a form service like Formspree, Netlify Forms, or getform.io
- Or implement your own backend endpoint

## Deployment

This is a static site hosted on GitHub Pages at `username.github.io`.

### To Deploy:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The site will automatically be published to `https://cadeprice.github.io`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add actual project images and diagrams
- [ ] Implement contact form backend
- [ ] Add blog functionality
- [ ] Create interactive game
- [ ] Add dark/light theme toggle
- [ ] Implement analytics
- [ ] Add project search functionality
- [ ] Create more project detail pages

## Credits

Built with:
- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript
- Google Fonts (Inter)

---

**Cade Price** | Engineering Portfolio
