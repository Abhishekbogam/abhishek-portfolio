# Bogam Abhishek — Portfolio Website

A professional, multi-file portfolio website built with vanilla HTML, CSS, and JavaScript.

---

## 📁 File Structure

```
portfolio/
│
├── index.html                  ← Main entry point
│
├── data/
│   └── certificates.json       ← ✅ Add new certificates HERE (no HTML editing needed)
│
├── css/
│   ├── global.css              ← Variables, reset, typography, buttons, cards, utilities
│   ├── nav.css                 ← Navigation bar + Resume modal styles
│   ├── hero.css                ← Hero / landing section styles
│   ├── about.css               ← About section styles
│   ├── experience.css          ← Experience / timeline styles
│   ├── skills.css              ← Skills grid styles
│   ├── projects.css            ← Projects cards styles
│   ├── achievements.css        ← Achievements/awards styles
│   ├── certifications.css      ← Certifications grid styles
│   ├── education.css           ← Education cards styles
│   ├── contact.css             ← Contact form & info styles
│   └── footer.css              ← Footer styles
│
├── js/
│   ├── loader.js               ← Loads HTML section partials into placeholders
│   ├── nav.js                  ← Navbar scroll behavior, active links, mobile menu
│   ├── hero.js                 ← Typed role animation
│   ├── animations.js           ← Scroll-reveal observer + counter animations
│   ├── contact.js              ← Contact form handler (opens mailto)
│   ├── certificates.js         ← Auto-renders cert cards from data/certificates.json
│   └── main.js                 ← App init, modals (cert + resume), ripple effects
│
├── sections/
│   ├── nav.html                ← Navigation HTML partial
│   ├── hero.html               ← Hero section HTML partial
│   ├── about.html              ← About section HTML partial
│   ├── experience.html         ← Experience section HTML partial
│   ├── skills.html             ← Skills section HTML partial
│   ├── projects.html           ← Projects section HTML partial
│   ├── achievements.html       ← Achievements section HTML partial
│   ├── certifications.html     ← Certifications section HTML partial
│   ├── education.html          ← Education section HTML partial
│   ├── contact.html            ← Contact section HTML partial
│   └── footer.html             ← Footer HTML partial
│
└── assets/
    ├── images/
    │   └── abhishek.jpg        ← ⚠️ YOUR PHOTO HERE
    ├── certificates/
    │   ├── azure-ai-fundamentals.pdf
    │   ├── cognizant.pdf
    │   ├── github-copilot.pdf
    │   ├── google-genai.pdf
    │   ├── ltimindtree.pdf
    │   ├── oracle-genai.pdf
    │   └── oracle-vector.pdf   ← ⚠️ DROP NEW CERTIFICATE PDFs HERE
    └── resume/
        └── abhishek-resume.pdf ← ⚠️ YOUR RESUME HERE
```

---

## 🚀 How to Run

**Option 1 — VS Code Live Server (Recommended)**
1. Open the `portfolio/` folder in VS Code
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

**Option 2 — Python HTTP Server**
```bash
cd portfolio
python -m http.server 8080
# Open http://localhost:8080
```

**Option 3 — Node.js**
```bash
cd portfolio
npx serve .
```

> ⚠️ The site uses `fetch()` to load section partials and `data/certificates.json`, so it **must be served over HTTP** (not opened directly as a `file://` URL).

---

## 🏅 Adding a New Certificate

No HTML editing required. Just 3 steps:

**Step 1** — Drop the PDF into `assets/certificates/`

**Step 2** — Open `data/certificates.json` and add one entry:

```json
{
  "title": "Your Certificate Name",
  "issuer": "Issuer Company",
  "icon": "🏆",
  "file": "assets/certificates/your-cert-file.pdf"
}
```

**Step 3** — Push to GitHub:
```bash
git add .
git commit -m "add: new certificate"
git push
```

The card will automatically appear on the site. ✅

---

## 📸 Adding Your Photo

1. Place your photo at: `assets/images/abhishek.jpg`
2. The hero section will automatically display it in the circular frame
3. If no photo is found, it gracefully shows your initials "BA"

**Recommended photo specs:**
- Square format (e.g. 400×400px or 600×600px)
- Professional headshot
- JPEG or PNG format

---

## 📄 Resume

- Place your resume PDF at: `assets/resume/abhishek-resume.pdf`
- The **Resume** button in the navbar opens a modal viewer
- The **Download** button in the modal downloads it directly without leaving the page

---

## 🚢 Deploying to GitHub Pages

```bash
git init
git remote add origin https://github.com/Abhishekbogam/abhishek-portfolio.git
git pull origin main --allow-unrelated-histories
git add .
git commit -m "update portfolio"
git push -u origin main
```

Live at: **https://abhishekbogam.github.io/abhishek-portfolio/**

> GitHub Pages takes 1–2 minutes to reflect changes after each push.

---

## 🎨 Customization

- **Colors:** Edit CSS variables in `css/global.css` under `:root {}`
- **Certificates:** Edit `data/certificates.json` — no HTML needed
- **Content:** Edit the HTML files in `sections/`
- **Animations:** Adjust timing in `js/animations.js`
- **Fonts:** Change Google Fonts import in `index.html` + update `--font-*` variables

---

## ✨ Features

- ✅ Light blue professional color scheme with gradient buttons
- ✅ Circular photo frame with floating badges in hero
- ✅ Typed role animation (cycles through roles)
- ✅ Scroll-reveal animations on all sections
- ✅ Counter animations for stats
- ✅ Responsive / mobile-friendly
- ✅ Resume modal with in-page viewer + direct download
- ✅ Certificate modal viewer (no download — view only)
- ✅ JSON-driven certificate cards (add certs without touching HTML)
- ✅ Custom smooth scrollbar
- ✅ Ripple effect on buttons
- ✅ Working contact form (opens email client)
- ✅ Professional Playfair Display + Plus Jakarta Sans fonts
