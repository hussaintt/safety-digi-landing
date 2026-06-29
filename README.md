# Safety Digi — Bilingual Landing Page

A complete, responsive, production-ready HTML/CSS/JS landing page for **Safety Digi**, an HSE (Health, Safety & Environment) mobile app for industrial & construction sites.

> Tagline: **Safer Today, Sustainable Tomorrow**

## ✨ Features

- 🇺🇸 / 🇸🇦 **Full bilingual support** — English & Arabic with **automatic RTL layout switching** and **Cairo** Arabic font.
- 📱 **Mobile-first responsive** — looks great on phone, tablet and desktop.
- 🎨 **Industrial HSE design language** — deep navy + safety green, with amber and red accents for incident/warning states.
- ⚡ **Zero dependencies** — pure HTML, CSS and vanilla JS. No build step required.
- 🧩 **All BRD modules visualized**:
  - 4 Pillars (Safety · Health · Environment · People)
  - 4 Core Modules (Observation · Inspection · Reports · Monthly Stats)
  - 6 Inspection types (Equipment · PPE · Scaffold · Environmental · SMS · Fire)
  - 3 Report types (Daily · Monthly · Incident)
  - 4 Incident types (Near miss · Accident · Environmental · LTI)
  - 3 Access Levels (User · Admin · Super Admin)
- 📱 **Phone mockups** built in pure CSS/SVG (no external images).
- 🧭 Interactive module tabs with animated panels.
- 🌊 Smooth scroll, sticky nav, intersection-observer reveal animations.
- 💾 Language preference saved to localStorage.
- 🔍 SEO-friendly meta tags, Open Graph, semantic HTML.

## 📂 Files

```
safety-digi-landing/
├── index.html       # Bilingual markup with data-i18n attributes
├── styles.css       # HSE-themed styles with full RTL support
├── app.js           # i18n engine, scroll, tabs, animations
└── README.md        # This file
```

## 🚀 Usage

### Open locally

Just open `index.html` in any modern browser. No build, no server.

### Or serve it

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Deploy

Drop the folder on any static host (Netlify, Vercel, GitHub Pages, S3, nginx, Apache, etc.).
No backend required.

## 🌍 Language Toggle

The top-right **EN / AR** button flips between English (LTR) and Arabic (RTL).
The choice is persisted in `localStorage` under the key `sd_lang`.

## 🎯 Brand Colors

| Token        | Hex       | Usage                       |
|--------------|-----------|-----------------------------|
| Navy 800     | `#0A1628` | Primary backgrounds         |
| Green 500    | `#00C896` | Brand accent / CTAs         |
| Green 600    | `#00A378` | Brand hover                 |
| Amber 500    | `#FFA726` | Caution / Warnings          |
| Red 500      | `#EF4444` | Incident alerts             |
| Blue 500     | `#3B82F6` | Environmental / Info        |

## 📐 Sections

1. **Navbar** — sticky, blur on scroll, language toggle.
2. **Hero** — bilingual headline, dual CTA (App Store / Google Play), animated phone mockup with live stats and floating cards.
3. **Trust strip** — 6 product metrics.
4. **Four pillars** — Safety, Health, Environment, People.
5. **Four modules** — interactive tabs: Observation, Inspection, Reports, Monthly Stats. Each tab swaps a phone mockup with the matching wireframe (form, checklist, report cards, bar chart).
6. **App screens showcase** — 4 phone mockups (Splash, Login, Main view, Incident types).
7. **Workflow** — 4-step pipeline (Capture → Submit → Track → Report).
8. **Roles** — User, Admin, Super Admin access levels.
9. **Industries** — Oil & Gas, Construction, Power, Manufacturing, Mining, Infrastructure.
10. **Download CTA** — App Store / Google Play + QR code.
11. **Footer** — Product, Company, Contact, Social.

## 🛠️ Customizing

- **Copy**: All translatable strings live in the `I18N` dictionary in `app.js`.
- **Colors**: Override CSS custom properties at the top of `styles.css`.
- **Phone mockups**: Edit the `.phone-screen` blocks inside `index.html`.
- **Add a language**: Add a new entry to `I18N` and update the `lang-toggle` markup.

## 📝 License

For Safety Digi project use.