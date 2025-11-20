# 🚀 BiteCraft - Professional Portfolio

A modern, stunning portfolio website for Esat Yıldırım - Full Stack Developer.

## ✨ Features

- **Modern Design**: Glassmorphism effects with vibrant gradient accents
- **Smooth Animations**: GSAP-powered animations with scroll triggers
- **Interactive Elements**: 3D tilt effects, particle background, and smooth transitions
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Performance Optimized**: Fast loading times and smooth interactions
- **Accessibility**: Semantic HTML with proper ARIA labels

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, glassmorphism, gradients
- **Tailwind CSS**: Utility-first styling
- **JavaScript (Vanilla)**: No framework dependencies
- **GSAP**: Professional animations and scroll triggers
- **Particles.js**: Interactive background effects
- **AOS**: Scroll animations
- **Vanilla Tilt**: 3D hover effects

## 📁 Project Structure

```
bitecraft/
├── index.html          # Main HTML file
├── style.css           # Custom styles and glassmorphism
├── script.js           # JavaScript functionality
├── icons/              # SVG icons
│   ├── figma.svg
│   ├── github-dark.svg
│   └── github-white.svg
├── CNAME               # Custom domain configuration
└── README.md           # This file
```

## 🎨 Sections

1. **Hero Section**: Full viewport introduction with animated text and particle background
2. **About Me**: Personal introduction with statistics and profile
3. **Skills & Technologies**: Organized skill showcase by category
4. **Experience Timeline**: Career journey with animated reveals
5. **Projects**: Featured projects with live links and descriptions
6. **Contact**: Functional contact form with Formspree integration
7. **Footer**: Simple, elegant footer with navigation

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bitecraft.git
cd bitecraft
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

### Deployment

This site is designed to work seamlessly with:
- **GitHub Pages** (recommended)
- **Netlify**
- **Vercel**
- Any static hosting service

#### GitHub Pages Deployment

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch (usually `main`) and root directory
4. Your site will be live at `https://yourusername.github.io/bitecraft/`

## 🎯 Customization

### Colors

Edit CSS variables in `style.css`:
```css
:root {
  --color-primary: #06b6d4;    /* Cyan */
  --color-secondary: #8b5cf6;  /* Purple */
  --color-accent: #f59e0b;     /* Orange */
}
```

### Content

- **Personal Info**: Update text in `index.html`
- **Projects**: Add or modify project cards in the Projects section
- **Skills**: Add/remove skills in the Skills section
- **Contact Form**: Already integrated with Formspree

### Adding Your Projects

Replace placeholder content in the Projects section:
```html
<div class="project-card">
  <!-- Add your project image -->
  <!-- Update title, description, tags, and links -->
</div>
```

## 🔧 Configuration

### Contact Form

The form uses Formspree. To use your own:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form action URL in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Analytics (Optional)

To add Google Analytics, insert this before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Design Philosophy

This portfolio is designed to be:
- **Professional**: Clean, modern design that showcases skills
- **Engaging**: Purposeful animations that enhance UX
- **Fast**: Optimized for performance
- **Accessible**: Works for everyone
- **Memorable**: Unique design that stands out

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

None at the moment! If you find any, please report them.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Esat Yıldırım**
- Website: [www.bitecraft.dev](https://www.bitecraft.dev)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons and assets from various open-source projects
- Animation libraries: GSAP, AOS, Particles.js, Vanilla Tilt

---

Made with ❤️ by Esat Yıldırım

