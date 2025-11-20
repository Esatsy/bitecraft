# 🚀 BiteCraft - Professional Portfolio

A modern, stunning portfolio website for Esat Yıldırım - Full Stack Developer with advanced features, lazy loading, and sophisticated animations.

## ✨ Key Features

### Design & UI
- **Modern Glassmorphism**: Beautiful glass-effect cards with backdrop blur
- **Dark/Light Mode**: Seamless theme switching with localStorage persistence
- **Gradient Animations**: Dynamic color gradients throughout the site
- **3D Tilt Effects**: Interactive hover effects using Vanilla Tilt
- **Fully Responsive**: Mobile-first design, perfect on all devices

### Performance & Optimization
- **Lazy Loading Images**: Images load only when needed using Intersection Observer
- **Screenshot API Integration**: Automatic project screenshots with fallback system
- **Optimized Assets**: Minimal bundle size, CDN-based resources
- **Efficient Animations**: Hardware-accelerated GSAP animations

### Advanced Features
- **Real-time Form Validation**: Instant feedback on contact form
- **Social Media Integration**: Connected profiles in enhanced footer
- **Project Showcase**: Dynamic cards with live preview and GitHub links
- **Interactive Timeline**: Animated experience timeline
- **Particle Background**: Interactive particle.js effects

## 🛠️ Tech Stack

### Core
- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first styling (CDN)
- **Vanilla JavaScript**: Pure JS, no framework overhead

### Libraries
- **GSAP**: Professional animations with ScrollTrigger
- **Particles.js**: Interactive background effects
- **AOS**: Scroll-triggered animations
- **Vanilla Tilt**: 3D hover effects
- **Formspree**: Contact form backend

## 📁 Project Structure

```
bitecraft/
├── index.html                    # Main HTML with all sections
├── style.css                     # Glassmorphism & custom styles
├── script.js                     # Advanced JS functionality
├── icons/                        # SVG icons
│   ├── figma.svg
│   ├── github-dark.svg
│   └── github-white.svg
├── images/                       # Project images
│   └── projects/                 # Screenshots (fallback)
│       └── .gitkeep              # Instructions
├── README.md                     # This file
├── DEPLOYMENT_GUIDE.md          # Deployment instructions
├── FEATURES.md                   # Detailed features
├── SCREENSHOTS_API_SETUP.md     # Screenshot configuration
├── GET_STARTED.md               # Quick start
└── TESTING_CHECKLIST.md         # Testing guide
```

## 🚀 Quick Start

### Local Development

1. **Clone:**
```bash
git clone https://github.com/yourusername/bitecraft.git
cd bitecraft
```

2. **Run locally:**
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

3. **Open:** `http://localhost:8000`

### Adding Screenshots

Quick setup:
1. Add images to `images/projects/`
2. Name: `tarhana-kazani.jpg`, `remax-parafai.jpg`
3. Optimize to < 500KB

See [SCREENSHOTS_API_SETUP.md](SCREENSHOTS_API_SETUP.md) for API setup.

## 🌐 Deployment

### GitHub Pages

1. **Push:**
```bash
git add .
git commit -m "Deploy"
git push origin main
```

2. **Enable Pages:**
   - Settings → Pages → Select `main` branch

3. **Live at:** `https://yourusername.github.io/bitecraft`

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for custom domains.

## ✨ Customization

### 1. Personal Info
Edit `index.html` sections:
- Hero name/title
- About content
- Skills & tech
- Projects
- Social links

### 2. Colors
`style.css`:
```css
:root {
  --color-primary: #06b6d4;    /* Cyan */
  --color-secondary: #8b5cf6;  /* Purple */
  --color-accent: #f59e0b;     /* Amber */
}
```

### 3. Contact Form
1. Sign up: [formspree.io](https://formspree.io)
2. Get form ID
3. Update `index.html`:
```html
<form action="https://formspree.io/f/YOUR_ID">
```

### 4. Social Links
Update footer in `index.html`:
- GitHub: `https://github.com/esatyildirim`
- LinkedIn: `https://linkedin.com/in/esatyildirim`
- Twitter: `https://twitter.com/esatyildirim`
- Email: `esat@bitecraft.dev`

## 🎨 Design System

### Colors
- **Dark**: `#0f172a` bg, `#f1f5f9` text
- **Light**: `#f8fafc` bg, `#0f172a` text
- **Accents**: Cyan, Purple, Amber

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400-800

### Effects
- Glassmorphism: `backdrop-filter: blur(10px)`
- Transitions: 0.3s ease
- Shadows: Layered, colorful

## 🔧 Advanced Features

### Lazy Loading
- Intersection Observer API
- Loading spinners
- Fallback system
- Automatic optimization

### Form Validation
- Real-time checking
- Email format validation
- Minimum length requirements
- Animated error messages

### Screenshot System
1. **Primary**: Screenshot API
2. **Secondary**: Manual images
3. **Tertiary**: Animated placeholders

## 📱 Browser Support

✅ Chrome • Firefox • Safari • Edge • Mobile

## 📚 Documentation

- [GET_STARTED.md](GET_STARTED.md) - Quick guide
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Deploy instructions
- [FEATURES.md](FEATURES.md) - Feature details
- [SCREENSHOTS_API_SETUP.md](SCREENSHOTS_API_SETUP.md) - Screenshot config
- [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md) - Testing guide

## 🐛 Troubleshooting

### Images not loading
- Check `images/projects/` exists
- Verify filenames match HTML
- Check browser console

### Animations not working
- Verify CDN scripts load
- Check console for errors
- Disable browser extensions

### Form issues
- Verify Formspree ID
- Check network tab
- Enable JavaScript

## 📄 License

MIT License - Open source and free to use!

## 🤝 Contributing

1. Fork the project
2. Create feature branch
3. Commit changes
4. Push and create Pull Request

## 📧 Contact

- **Website**: [www.bitecraft.dev](https://www.bitecraft.dev)
- **Email**: esat@bitecraft.dev
- **GitHub**: [@esatyildirim](https://github.com/esatyildirim)
- **LinkedIn**: [esatyildirim](https://linkedin.com/in/esatyildirim)

---

**Made with 💙 by Esat Yıldırım**

*Building exceptional digital experiences, one pixel at a time.*
