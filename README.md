# ✦ Wishology — Shopify Storefront

> **Curated everyday essentials for the life you love.**
> A clean, warm, and conversion-focused Shopify theme designed for middle-income shoppers.

---

## 🏪 About

Wishology is a dropshipping store built on Shopify, targeting middle-income consumers who want quality products at approachable prices. The store design prioritises warmth, trust, and ease of browsing.

---

## 📁 Repository Structure

```
wishology/
├── index.html                  ← Main homepage (standalone preview)
├── assets/
│   ├── css/
│   │   └── main.css            ← Full stylesheet (custom properties, responsive)
│   └── js/
│       └── main.js             ← Interactions, cart, scroll animations
├── sections/                   ← Shopify theme sections (Liquid)
│   ├── announcement-bar.liquid
│   ├── hero-banner.liquid
│   ├── featured-products.liquid
│   ├── trust-badges.liquid
│   ├── lifestyle-split.liquid
│   ├── testimonials.liquid
│   └── newsletter.liquid
├── snippets/                   ← Reusable Liquid snippets
│   ├── product-card.liquid
│   ├── badge.liquid
│   └── icon-sprite.liquid
├── templates/
│   ├── index.json              ← Homepage template
│   ├── product.json
│   ├── collection.json
│   └── cart.json
├── config/
│   └── settings_schema.json    ← Theme customiser settings
├── locales/
│   └── en.default.json         ← Translations
└── README.md
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Primary font** | Playfair Display (headings) |
| **Body font** | DM Sans |
| **Background** | `#FAF8F3` (warm cream) |
| **Dark** | `#1E1A14` |
| **Accent** | `#C4783A` (burnt orange) |
| **Secondary accent** | `#8FA67A` (sage green) |
| **Radius** | 6px / 12px / 20px / 50px (pill) |

**Aesthetic direction:** Warm editorial — approachable luxury. Every element communicates quality without intimidation. Designed for shoppers who want premium aesthetics without premium prices.

---

## 🚀 Getting Started

### Preview (static)

Open `index.html` in any browser to preview the homepage design.

```bash
# Quick local server
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080`

### Shopify Deployment

1. **Create a Shopify store** at [shopify.com](https://shopify.com)
2. Install the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)

```bash
npm install -g @shopify/cli @shopify/theme
```

3. Authenticate and push the theme:

```bash
shopify theme push --store YOUR_STORE.myshopify.com
```

4. Set up your theme in the Shopify admin under **Online Store → Themes → Customise**

---

## ⚙️ Shopify Theme Setup Checklist

- [ ] Upload logo (SVG recommended, max 200px wide)
- [ ] Configure announcement bar text & link
- [ ] Add products with high-quality images (min 800×800px)
- [ ] Set up collections: `new-arrivals`, `bestsellers`, `sale`, `home-living`, `fashion`, `beauty`, `gadgets`, `fitness`, `pets`
- [ ] Configure shipping rates (free shipping threshold: $49)
- [ ] Set up Shopify Email for newsletters
- [ ] Connect payment providers (Stripe, PayPal, Afterpay)
- [ ] Enable Shop Pay
- [ ] Add Google Analytics / Meta Pixel
- [ ] Set up product reviews app (e.g. Judge.me or Loox)

---

## 📱 Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 1024px` | Full desktop layout, 4-column product grid |
| `641px – 1024px` | 2-column grid, collapsed nav, 2-column trust badges |
| `≤ 640px` | 2-column product grid, single-column footer, stacked hero CTA |

---

## 🔌 Recommended Shopify Apps

| App | Purpose |
|-----|---------|
| **DSers** or **AutoDS** | Product sourcing & order fulfilment |
| **Judge.me** | Product reviews |
| **Klaviyo** | Email marketing & SMS |
| **Loox** | Photo reviews |
| **Tidio** | Live chat |
| **PageFly** | Landing page builder |
| **Vitals** | 40+ conversion tools in one |

---

## 💡 Conversion Tips

- Keep hero messaging focused on **value + quality** (speaks to middle-income shoppers)
- Use **social proof** (ratings, review count) on every product card
- Highlight **free shipping threshold** prominently in announcement bar
- Offer **Afterpay / Buy Now Pay Later** — critical for this demographic
- Send **abandoned cart emails** within 1–3 hours via Klaviyo

---

## 📄 License

MIT — free to use and adapt for your Shopify store.

---

*Made with ✦ for Wishology*
