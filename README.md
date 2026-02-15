# Save the Date - Wedding Website Template

A clean, elegant, single-page "Save the Date" wedding website built with Hugo and ready to deploy on GitHub Pages in minutes.

![Preview](static/images/primary.jpg)

## Features

- Single-page responsive design (mobile-first)
- Live countdown timer to your wedding date
- All customization in one file: `data/wedding.json`
- Elegant typography (Playfair Display + Lato)
- FAQ accordion (pure HTML, no JavaScript needed)
- Open Graph meta tags for social media sharing
- Automatic deployment via GitHub Actions
- Fast builds (~50ms) with Hugo

---

## Quick Start

### 1. Use This Template

Click **"Use this template"** on GitHub to create your own copy of this repository.

### 2. Edit `data/wedding.json`

Open `data/wedding.json` and update with your details:

#### Couple Names

```json
{
  "couple": {
    "name_1": "YourFirstName",
    "name_2": "PartnerFirstName",
    "connector": "&"
  }
}
```

#### Event Details

```json
{
  "event": {
    "date": "2026-09-15",
    "date_display": "September 15, 2026",
    "time": "4:00 PM",
    "time_24h": "16:00:00",
    "venue": "Your Venue Name",
    "city": "Your City",
    "state": "Your State"
  }
}
```

#### Hero Image

```json
{
  "hero": {
    "alt": "Save the Date - Your Names"
  }
}
```

#### FAQ

Add, edit, or remove questions and answers:

```json
{
  "faq": {
    "heading": "Frequently Asked Questions",
    "items": [
      {
        "question": "Your question?",
        "answer": "Your answer."
      }
    ]
  }
}
```

#### Footer Message

```json
{
  "footer": {
    "message": "We can't wait to celebrate with you!"
  }
}
```

### 3. Replace the Hero Image

Replace `static/images/primary.jpg` with your own photo (named `primary.jpg`, `primary.png`, or `primary.webp`). For best results, use a high-resolution image (1920x1080 pixels or larger). The image will be displayed as a full-screen background in the hero section. The template auto-detects the format, preferring webp > png > jpg.

### 4. Deploy

Push your changes to the `main` branch. GitHub Actions will automatically build and deploy your site. Visit your repository's **Settings > Pages** to find your live URL.

---

## Local Development

Install [Hugo extended](https://gohugo.io/installation/) (v0.147.0+), then:

```bash
hugo server
```

Visit `http://localhost:1313` in your browser. Changes to `data/wedding.json` or templates will live-reload automatically.

---

## File Structure

```
.
├── hugo.toml                      # Build settings (baseURL, disableKinds)
├── data/
│   └── wedding.json               # All customizable content (API writes this)
├── content/
│   └── _index.md                  # Minimal stub (Hugo requires it)
├── layouts/
│   ├── _default/
│   │   └── baseof.html            # HTML shell (head, fonts, Hugo Pipes SCSS)
│   ├── index.html                 # Home page (assembles partials)
│   └── partials/
│       ├── hero.html              # Hero section (photo, names, countdown)
│       ├── details.html           # Event details (venue, location, time, date)
│       ├── faq.html               # FAQ accordion
│       └── footer.html            # Footer with closing message
├── assets/
│   └── scss/
│       ├── main.scss              # SCSS entry point (imports all partials)
│       ├── _variables.scss        # Colors, fonts, spacing (design tokens)
│       ├── _base.scss             # CSS reset and global typography
│       ├── _hero.scss             # Hero section styles
│       ├── _details.scss          # Details section styles
│       ├── _faq.scss              # FAQ section styles
│       ├── _footer.scss           # Footer styles
│       └── _responsive.scss       # Mobile/tablet/desktop breakpoints
├── static/
│   ├── images/
│   │   └── primary.jpg             # Hero image (replace with .jpg, .png, or .webp)
│   └── js/
│       └── countdown.js           # Countdown timer script
├── .github/
│   └── workflows/
│       └── hugo-gh-pages.yml      # GitHub Actions deployment
├── LICENSE                        # GPL v3
└── README.md                      # This file
```

---

## Color Palette

The default color palette can be changed in `assets/scss/_variables.scss`:

| Token            | Hex       | Usage                      |
| ---------------- | --------- | -------------------------- |
| Ivory            | `#FFF9F0` | Page background            |
| White            | `#FFFFFF` | Details section background |
| Champagne        | `#C9B458` | Accents, dividers          |
| Champagne Light  | `#E8D9A0` | Subtle borders, labels     |
| Charcoal         | `#2C2C2C` | Primary text, footer bg    |
| Charcoal Light   | `#5A5A5A` | Secondary text             |

---

## Customizing Styles

For deeper customization beyond `data/wedding.json`:

- **Colors and fonts**: Edit `assets/scss/_variables.scss`
- **Section layouts**: Edit the corresponding file in `assets/scss/` (e.g., `_hero.scss`)
- **HTML structure**: Edit files in `layouts/partials/`
- **Page sections**: Edit `layouts/index.html` to reorder or remove partials

---

## License

This project is licensed under the GNU General Public License v3.0. See [LICENSE](LICENSE) for details.
