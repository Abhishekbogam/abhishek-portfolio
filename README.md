# Bogam Abhishek — Portfolio Website

A professional, multi-file portfolio website built with vanilla HTML, CSS, and JavaScript.

---

## 📁 File Structure

```
portfolio/
│
├── index.html                  ← Main entry point
│
├── css/
│   ├── global.css              ← Variables, reset, typography, buttons, cards, utilities
│   ├── nav.css                 ← Navigation bar styles
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
│   └── main.js                 ← App init, ripple effects, utilities
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
    └── images/
        └── abhishek.jpg        ← ⚠️ ADD YOUR PHOTO HERE
    └── certificates/
        └── azure-ai-fundamentals.pdf  ← ⚠️ ADD YOUR CERTIFICATES HERE
        └── cognizant.pdf
        └── github-copilot.pdf
        └── google-genai.pdf
        └── ltimindtree.pdf
        └── oracle-genai.pdf
        └── oracle-vector.pdf
    └── resume/
        └── abhishek-resume.pdf        ← ⚠️ ADD YOUR RESUME HERE

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

> ⚠️ The site uses `fetch()` to load section partials, so it **must be served over HTTP** (not opened directly as a file:// URL).

---

## 📸 Adding Your Photo

1. Place your photo at: `assets/images/abhishek.jpg`
2. The hero section will automatically display it in the circular frame
3. If no photo is found, it gracefully shows your initials "BA"

**Recommended photo specs:**
- Square format (e.g. 400×400px or 600×600px)
- Professional headshot or good quality photo
- JPEG or PNG format

---

## 🎨 Customization

- **Colors:** Edit CSS variables in `css/global.css` under `:root {}`
- **Content:** Edit the HTML files in `sections/`
- **Animations:** Adjust timing in `js/animations.js`
- **Fonts:** Change Google Fonts import in `index.html` + update `--font-*` variables

---

## ✨ Features

- ✅ Light blue professional color scheme with gradient buttons
- ✅ Circular photo frame with floating badges in hero
- ✅ "Hi, I am Bogam Abhishek" hero greeting
- ✅ Typed role animation (cycles through roles)
- ✅ Scroll-reveal animations on all sections
- ✅ Counter animations for stats
- ✅ Responsive / mobile-friendly
- ✅ Custom smooth scrollbar
- ✅ Ripple effect on buttons
- ✅ Working contact form (opens email client)
- ✅ Professional Playfair Display + Plus Jakarta Sans fonts
