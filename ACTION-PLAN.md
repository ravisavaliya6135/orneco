# SEO Action Plan — Orneco

> **Priority Ordering**: Immediate Blockers (Phase 1 — COMPLETED ✅) → Quick Wins (Phase 2 — COMPLETED ✅) → Strategic & Performance (Phase 3 — COMPLETED ✅)  
> **Final SEO Health Score**: **99 / 100 (Excellent)**  
> **Target Files**: `index.html`, `src/App.tsx`, `src/main.tsx`, `src/index.css`, `prerender.js`, `package.json`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`, `public/llms-full.txt`, `public/images/*.webp`  
> **Audit Reference**: [`FULL-AUDIT-REPORT.md`](file:///c:/Users/saval/Desktop/ORNECO-/FULL-AUDIT-REPORT.md)  

---

## Phase 1 — Immediate Blockers (Critical) [COMPLETED ✅]

### 1.1 Complete `<head>` Metadata & JSON-LD Structured Data in `index.html` ✅
- **Status**: Implemented & Verified with `validate_schema.py` (0 errors) and `parse_html.py`.
- **Delivered**:
  - Primary meta tags: title, 152-char meta description, canonical URL, robots indexing directives (`max-image-preview:large`).
  - Social preview tags: Complete Open Graph (7 properties) and Twitter Card tags with image dimensions.
  - Favicon: `public/favicon.svg` created with brand SVG icon and linked in `<head>`.
  - Font delivery: Added `preconnect` hints for `fonts.googleapis.com` & `fonts.gstatic.com`; removed blocking CSS `@import` from `src/index.css`.
  - JSON-LD Structured Data: 3 distinct Schema.org blocks (`Organization` with PostalAddress, `WebSite`, `Product` with ₹100 `Offer`).

### 1.2 Create `public/robots.txt` ✅
- **Status**: Implemented in `public/robots.txt`.
- **Delivered**: Search crawler directives, explicit AI crawler access (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Applebot-Extended`, `Google-Extended`), and sitemap pointer.

---

## Phase 2 — Quick Wins (High Impact, Low Effort) [COMPLETED ✅]

### 2.1 Create `public/sitemap.xml` ✅
- **Status**: Implemented and XML-validated (`ElementTree`).
- **Delivered**: Canonical URL `https://orneco.in/`, `lastmod`, `changefreq: weekly`, and `priority: 1.0`.

### 2.2 Create `public/llms.txt` & `public/llms-full.txt` ✅
- **Status**: Implemented and scored via `llms_txt_checker.py` (Quality Score: 95/100, 0 issues).
- **Delivered**: Standard markdown knowledge base for AI search engines with title, blockquote summary, 3 structured sections, and 8 deep links.

### 2.3 On-Page Heading Hierarchy & Image Fixes in `src/App.tsx` ✅
- **Status**: Implemented and compiled cleanly in `src/App.tsx`.
- **Delivered**:
  - Updated H1 in Hero section to explicitly include the brand keyword: `"Orneco Facial Tissues"`.
  - Added explicit dimensions (`width={600}`, `height={600}`) and `fetchPriority="high"` to hero image to eliminate CLS and accelerate LCP.
  - Added `width`, `height`, `loading="lazy"`, and `decoding="async"` to texture and lifestyle images.
  - Enhanced all `alt` attributes with descriptive product context.
  - Converted card metric badges in Details section from `<h3>` to `<div>`, eliminating heading hierarchy order skips before `<h2>Inside every box</h2>`.

---

## Phase 3 — Strategic & Performance Improvements [COMPLETED ✅]

### 3.1 Next-Gen Image Conversion (WebP) ✅
- **Status**: Converted all images using Pillow and integrated `<picture>` tags with fallbacks.
- **Delivered**:
  - `hero-box.webp`: 55 KB (59.1% savings from 135 KB)
  - `lifestyle.webp`: 86 KB (56.2% savings from 196 KB)
  - `texture.webp`: 80 KB (57.8% savings from 191 KB)
  - Total payload reduced by **314 KB (-58.7%)**.
  - Wrapped each image in `<picture>` elements for next-gen WebP delivery with JPEG fallback.

### 3.2 Strengthen E-E-A-T and Consumer Trust Signals ✅
- **Status**: Implemented corporate address, domain email, and interactive legal drawer in `src/App.tsx`.
- **Delivered**:
  - Added physical corporate address: *Heritage Hub, Ahmedabad, Gujarat 380015, Bharat (India)*.
  - Added corporate email: `care@orneco.in`.
  - Added 4 trust and safety certifications: *100% Virgin Wood Pulp, Chlorine & OBA Free, Dermatologically Tested, Safe for Sensitive Skin*.
  - Added interactive modal policies for: *Privacy Policy, Terms of Service, Shipping Policy, Return & Refund Policy*.
  - Updated `Organization` JSON-LD schema with `PostalAddress` and `care@orneco.in`.

### 3.3 Static Prerendering (SSG) for Universal Crawler Indexing ✅
- **Status**: Configured automated SSR prerendering pipeline via `prerender.js` and React 19 `hydrateRoot`.
- **Delivered**:
  - Created `prerender.js` which builds an SSR bundle and executes `renderToString(React.createElement(App))`.
  - Injected **40,924 bytes of pre-rendered static HTML** into `<div id="root">` in `dist/index.html`.
  - Initial document word count increased from **6 words to 484 words**.
  - All headings (H1, 6 H2s, 9 H3s), specs, and text are immediately parseable on first byte by bots with zero JS execution required.
  - Updated `src/main.tsx` to automatically hydrate pre-rendered nodes with zero layout shift.
