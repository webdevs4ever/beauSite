# Zimny Mccoy LLC — React App

## Tech Stack
- **React 18** + Vite
- **Tailwind CSS v3**
- **React Router v6**
- **Sanity.io** (CMS for admin-editable content)

## Getting Started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`

---

## Sanity CMS Setup (Step 2)

1. Install Sanity CLI: `npm install -g sanity`
2. Create a new project: `sanity init`
3. Copy your **Project ID** from Sanity dashboard
4. Paste it into `src/lib/sanity.js` replacing `YOUR_PROJECT_ID`
5. Define schemas (see Step 2 instructions)

---

## Routes
| Path | Page |
|------|------|
| `/` | Home / Landing page |
| `/special-needs` | Home ownership form |
| `/portal` | Credit Portal form |
| `/studio` | Sanity Studio (after setup) |

---

## JotForm Embeds
Each form page has a placeholder comment `[ Embed JotForm iframe here ]`.
Replace it with your JotForm iframe embed code, e.g.:

```jsx
<iframe
  id="JotFormIFrame-XXXXXXXXXX"
  title="Your Form"
  src="https://form.jotform.com/XXXXXXXXXX"
  style={{ width: '100%', height: '600px', border: 'none' }}
/>
```
