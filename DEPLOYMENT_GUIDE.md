# 🚀 Deployment Guide for BiteCraft Portfolio

Your portfolio is ready to deploy! Here's how to get it live on **www.bitecraft.dev**.

## ✅ Pre-Deployment Checklist

- [x] CNAME file configured with `www.bitecraft.dev`
- [x] All assets optimized
- [x] No console errors
- [x] Mobile responsive
- [x] Forms tested and working

## 📦 GitHub Pages Deployment

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "feat: Launch new professional portfolio with modern design"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/bitecraft.git

# Push to main branch
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### Step 3: Configure Custom Domain

1. In the same **Pages** settings
2. Under "Custom domain", enter: `www.bitecraft.dev`
3. Click **Save**
4. Check "Enforce HTTPS" (wait a few minutes for certificate)

### Step 4: DNS Configuration

Add these records to your domain provider (where you bought bitecraft.dev):

#### Option A: Using CNAME (Recommended)
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600
```

#### Option B: Using A Records (Apex domain)
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**Note**: DNS changes can take up to 48 hours to propagate (usually much faster).

---

## 🌐 Alternative Deployment Options

### Netlify (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure:
   - Build command: (leave empty)
   - Publish directory: `.`
5. Click "Deploy site"
6. Add custom domain in Settings → Domain management

### Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Add custom domain in Settings → Domains

### Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Create new project
3. Connect GitHub repository
4. Deploy
5. Custom domain is automatic if you use Cloudflare DNS

---

## 🔧 Post-Deployment Tasks

### 1. Test Your Site

- [ ] Visit www.bitecraft.dev
- [ ] Test all navigation links
- [ ] Submit contact form
- [ ] Test dark/light mode toggle
- [ ] Check on mobile devices
- [ ] Test in different browsers

### 2. SEO Setup

Add to `index.html` in `<head>`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.bitecraft.dev/">
<meta property="og:title" content="BiteCraft - Esat Yıldırım | Full Stack Developer">
<meta property="og:description" content="Full Stack Developer with 4+ years of experience specializing in React, Node.js, and ASP.NET">
<meta property="og:image" content="https://www.bitecraft.dev/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.bitecraft.dev/">
<meta property="twitter:title" content="BiteCraft - Esat Yıldırım | Full Stack Developer">
<meta property="twitter:description" content="Full Stack Developer with 4+ years of experience specializing in React, Node.js, and ASP.NET">
<meta property="twitter:image" content="https://www.bitecraft.dev/og-image.jpg">
```

### 3. Analytics (Optional)

Add Google Analytics to track visitors:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 4. Performance Optimization

Check your site's performance:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🐛 Troubleshooting

### Site Not Loading?

1. **Check DNS**: Use [DNS Checker](https://dnschecker.org/) to verify propagation
2. **Clear Cache**: Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
3. **Check CNAME File**: Ensure it contains only `www.bitecraft.dev`
4. **GitHub Pages Status**: Check repository Settings → Pages for errors

### HTTPS Not Working?

1. Wait 10-15 minutes after enabling
2. Ensure "Enforce HTTPS" is checked
3. DNS must be fully propagated first
4. Try disabling and re-enabling HTTPS

### 404 Errors?

1. Ensure files are in root directory, not a subfolder
2. Check that `index.html` is in the main branch
3. Verify GitHub Pages source is set to `/ (root)`

### Custom Domain Not Working?

1. Verify CNAME file exists and contains correct domain
2. Check DNS records are pointing correctly
3. Wait for DNS propagation (up to 48 hours)
4. Try both www and non-www versions

---

## 📊 Monitoring

### Free Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com/)
- [StatusCake](https://www.statuscake.com/)
- [Pingdom](https://www.pingdom.com/)

### Performance Monitoring
- Google Analytics
- [Vercel Analytics](https://vercel.com/analytics) (if using Vercel)
- [Cloudflare Analytics](https://www.cloudflare.com/analytics/) (if using Cloudflare)

---

## 🔄 Making Updates

### Quick Updates

```bash
# Make your changes
git add .
git commit -m "update: Your changes description"
git push
```

GitHub Pages automatically rebuilds on push (usually takes 1-2 minutes).

### Rollback

```bash
# View commit history
git log --oneline

# Rollback to previous commit
git reset --hard COMMIT_HASH
git push --force
```

---

## 📱 Share Your Portfolio

Once deployed, share your portfolio:

- Add to LinkedIn profile
- Tweet about your new portfolio
- Add to GitHub profile README
- Share in developer communities
- Add to your email signature

---

## 🎉 Launch Checklist

- [ ] Site deployed and live
- [ ] Custom domain working
- [ ] HTTPS enabled
- [ ] All links working
- [ ] Contact form tested
- [ ] Mobile responsive verified
- [ ] Analytics installed (optional)
- [ ] SEO meta tags added
- [ ] Favicon displaying correctly
- [ ] Shared on social media

---

## 💡 Tips

1. **Regular Updates**: Keep your projects section updated with new work
2. **Blog Posts**: Consider adding a blog section later
3. **Testimonials**: Ask clients/colleagues for recommendations
4. **Case Studies**: Add detailed case studies for major projects
5. **Analytics**: Review analytics monthly to understand your visitors

---

## 📞 Need Help?

If you encounter any issues during deployment:
1. Check GitHub Pages documentation
2. Search GitHub Issues for similar problems
3. Check your hosting provider's status page
4. Review DNS provider documentation

---

**Your portfolio is ready to impress! 🚀**

Good luck with your deployment!

