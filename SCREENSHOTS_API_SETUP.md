# Screenshot API Setup Guide

This guide will help you set up automatic screenshot generation for your projects.

## Current Implementation

The website currently uses a fallback system:
1. **First**: Tries to load from Screenshot API (if configured)
2. **Second**: Falls back to manual screenshots in `images/projects/`
3. **Third**: Shows animated placeholder with emoji

## Option 1: Free Screenshot Services

### 1. Screenshotone.com (Recommended - Free Tier Available)

1. Visit https://screenshotone.com/
2. Sign up for a free account
3. Get your API key from the dashboard
4. Replace `YOUR_KEY` in `index.html` with your actual API key

**Free Tier**: 100 screenshots/month

### 2. ApiFlash (Alternative)

1. Visit https://apiflash.com/
2. Sign up for free
3. Get your access key
4. Update the URL format in `index.html`:
   ```javascript
   https://api.apiflash.com/v1/urltoimage?access_key=YOUR_KEY&url=https://yoursite.com&width=1024&height=768
   ```

**Free Tier**: 100 screenshots/month

### 3. ScreenshotAPI.net (Alternative)

1. Visit https://screenshotapi.net/
2. Sign up for free
3. Get your API token
4. Update URL format in `index.html`

**Free Tier**: 100 screenshots/month

## Option 2: Manual Screenshots (Recommended for Production)

For better performance and reliability, use manual screenshots:

1. Visit your live projects (tarhanakazani.com, remaxparafai.com)
2. Take high-quality screenshots (1920x1080 or 1024x768)
3. Optimize images using:
   - https://tinypng.com/
   - https://squoosh.app/
   - https://imageoptim.com/
4. Save as:
   - `images/projects/tarhana-kazani.jpg`
   - `images/projects/remax-parafai.jpg`
5. Commit and push to GitHub

## Option 3: GitHub Actions (Advanced - Automated)

Set up a GitHub Action to automatically take screenshots on schedule:

```yaml
# .github/workflows/screenshots.yml
name: Update Screenshots
on:
  schedule:
    - cron: '0 0 * * 0' # Weekly
  workflow_dispatch: # Manual trigger

jobs:
  screenshots:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install puppeteer
      - run: node scripts/take-screenshots.js
      - uses: stefanzweifel/git-auto-commit-action@v4
```

Then create `scripts/take-screenshots.js` to automate the process.

## Current Configuration

Your `index.html` currently has:
```html
<img 
  data-src="https://api.screenshotmachine.com/?key=YOUR_KEY&url=https://tarhanakazani.com..."
  data-fallback="images/projects/tarhana-kazani.jpg"
  alt="Project Screenshot"
  class="project-image lazy-image"
  loading="lazy"
/>
```

## Recommendation

For the best user experience:
1. **Add manual screenshots** to `images/projects/` (works immediately)
2. **Optional**: Set up a screenshot API for automatic updates
3. The website will automatically use the best available source

## Testing

After setup, test by:
1. Opening DevTools → Network tab
2. Refreshing the page
3. Checking which image source loads successfully
4. Verifying fallback works if primary source fails

