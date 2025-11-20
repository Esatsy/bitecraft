# 📸 Project Screenshots Guide

This guide will help you add professional screenshots to your portfolio projects.

## 🎯 Quick Start

### Option 1: Replace Placeholders with Real Images

1. **Take Screenshots** of your live projects:
   - Visit https://tarhanakazani.com
   - Visit https://remaxparafai.com
   - Take high-quality screenshots (at least 1920x1080px)

2. **Create a Screenshots Folder**:
```bash
mkdir screenshots
```

3. **Save Your Screenshots**:
```
screenshots/
├── tarhanakazani.jpg
├── remaxparafai.jpg
└── goit-projects.jpg
```

4. **Update HTML**: Replace the placeholder divs with actual images:

```html
<!-- Before -->
<div class="project-image-placeholder">
  <div class="project-image-icon">🍲</div>
  <div class="project-image-text">Tarhana Kazanı</div>
  <div class="project-live-badge">LIVE</div>
</div>

<!-- After -->
<img src="screenshots/tarhanakazani.jpg" alt="Tarhana Kazanı Website" class="project-screenshot">
<div class="project-live-badge">LIVE</div>
```

5. **Add CSS** for the image:
```css
.project-screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-screenshot {
  transform: scale(1.1);
}
```

---

## 🛠️ Option 2: Use Screenshot Services (Automated)

### A. Using ScreenshotAPI (Recommended)

```html
<!-- Replace placeholder with: -->
<img 
  src="https://shot.screenshotapi.net/screenshot?token=YOUR_TOKEN&url=https://tarhanakazani.com&width=1920&height=1080&output=image&file_type=png&wait_for_event=load"
  alt="Tarhana Kazanı"
  class="project-screenshot"
  loading="lazy"
>
```

### B. Using URL2PNG

```html
<img 
  src="https://api.url2png.com/v6/YOUR_TOKEN/SCREENSHOT_ID/png/?url=https://tarhanakazani.com"
  alt="Tarhana Kazanı"
  class="project-screenshot"
  loading="lazy"
>
```

---

## 📸 How to Take Great Screenshots

### Tools for Screenshots:

**For Desktop:**
- **Windows**: Snipping Tool, ShareX
- **Mac**: Command + Shift + 4
- **Chrome Extension**: [Awesome Screenshot](https://www.awesomescreenshot.com/)

**For Full Page Screenshots:**
- [Screely](https://www.screely.com/) - Add browser mockup
- [Screen.guru](https://screen.guru/) - Full page capture
- Chrome DevTools: F12 → Cmd/Ctrl + Shift + P → "Capture full size screenshot"

### Best Practices:

1. **Resolution**: At least 1920x1080px (Full HD)
2. **Format**: JPG for photos, PNG for graphics/text
3. **Optimize**: Compress images before uploading (use [TinyPNG](https://tinypng.com/))
4. **Aspect Ratio**: 16:9 works best for most layouts
5. **Content**: Show the most impressive part of your project
6. **Browser**: Use Chrome in Incognito mode (clean, no extensions)

---

## 🎨 Pro Tips

### Create Mockups:
- [Mockuphone](https://mockuphone.com/) - Device mockups
- [Smartmockups](https://smartmockups.com/) - Product mockups
- [Shots](https://shots.so/) - Beautiful device frames

### Add Multiple Screenshots per Project:

```html
<div class="project-gallery">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="screenshots/project-1.jpg" alt="Homepage">
      </div>
      <div class="swiper-slide">
        <img src="screenshots/project-2.jpg" alt="Dashboard">
      </div>
    </div>
  </div>
</div>
```

### Video Demos:
For interactive projects, consider adding video demos:

```html
<video autoplay loop muted playsinline class="project-video">
  <source src="videos/project-demo.mp4" type="video/mp4">
</video>
```

---

## 🚀 Quick Commands

### Optimize All Images:
```bash
# Install ImageMagick
# Then compress all images:
mogrify -strip -interlace Plane -quality 85% screenshots/*.jpg
```

### Convert PNG to JPG:
```bash
for i in screenshots/*.png; do
  convert "$i" "${i%.*}.jpg"
done
```

---

## 📝 Current Projects to Screenshot

1. **Tarhana Kazanı** (https://tarhanakazani.com)
   - Recommended: Homepage with products
   - Alternative: Product detail page

2. **Remax Para Fai** (https://remaxparafai.com)
   - Recommended: Homepage with property listings
   - Alternative: Property detail with map

3. **GOIT Projects**
   - Create a collage of multiple projects
   - Or screenshot the best project

---

## 🎯 Final Checklist

- [ ] Screenshots are high quality (at least 1920x1080px)
- [ ] Images are optimized (under 500KB each)
- [ ] Images are saved in `/screenshots` folder
- [ ] HTML is updated with `<img>` tags
- [ ] Alt text is descriptive
- [ ] Loading is set to "lazy"
- [ ] Images look good on mobile
- [ ] All projects have screenshots

---

## 💡 Need Help?

If you prefer to keep the current placeholder design (which looks professional too), you can:
1. Update the emoji icons to match your projects better
2. Change the background gradients
3. Add project logos instead of screenshots

The current placeholders are designed to look intentional and professional, so they work well as-is!

