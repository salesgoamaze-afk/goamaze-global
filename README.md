# GoAmaze Global Exporters

**GoAmaze Global Exporters** is a high-performance, production-ready B2B international export website for Indian spices and commodities (initially focusing on Turmeric Finger and Turmeric Powder).

---

## 🌟 Tech Stack & Architecture

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Type Safety**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Design Tokens**: Warm Turmeric Gold (`#E59819`, `#D97706`), Deep B2B Slate (`#0F172A`, `#1E293B`), Surface Creams (`#FFFBEB`, `#FCFDFD`).

---

## 🧭 Page Structure & Routes

| Route | Description |
| :--- | :--- |
| `/` | **Homepage**: Hero, Trust Cards, About GoAmaze, Product Grid, 6-Step Process, Importer Banner |
| `/about-us` | **About Us**: Enterprise overview, mission, sourcing principles, and partnership philosophy |
| `/products` | **Products Catalog**: Overview of Indian Turmeric offerings |
| `/products/turmeric-finger` | **Turmeric Finger**: Whole dried root specifications, polishing grades, bulk packaging & RFQ |
| `/products/turmeric-powder` | **Turmeric Powder**: Fine ground milled powder specifications, mesh sizes, packaging & RFQ |
| `/quality-compliance` | **Quality & Compliance**: 5-pillar assurance framework (no unverified claims) |
| `/our-process` | **Our Process**: 6-step export timeline (Inquiry → Sourcing → QA → Delivery) |
| `/for-importers` | **For Importers**: Dedicated B2B buyer benefits and embedded RFQ form |
| `/get-a-quote` | **Get a Quote**: Full RFQ form with product selection, packaging, volumes, and destination port |
| `/contact` | **Contact Us**: Official sales desk (`sales@goamazeglobal.com`) & inquiry form |
| `/privacy-policy` | **Privacy Policy** |
| `/terms` | **Terms & Conditions** |
| `/disclaimer` | **Trade Disclaimer** |
| `/sitemap.xml` | **XML Sitemap** |
| `/robots.txt` | **Robots.txt** |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📈 Scalability & Adding New Products

To add new agricultural products or spices (e.g. Cumin, Coriander, Red Chilli, Sesame Seeds), add the new product definitions to [`data/products.ts`](./data/products.ts). All catalog listings, spec tables, dynamic sitemaps, and quote selectors will automatically update.
