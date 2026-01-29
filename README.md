# Tech Blog Website

A fast, SEO-optimized tech blog website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

- **Live URL**: 
- **Repository**: 

## 🛠 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Inter (via `next/font/google`)
- **Icons**: Lucide React (via inline SVGs for performance)
- **Deployment**: Vercel

## ✨ Features

- **Responsive Design**: Mobile-first approach (1 col → 2 cols → 3 cols)
- **Search & Filter**: Combined real-time filtering by search term and category
- **Article Modal**: Accessible modal for reading articles without navigating away
- **SEO Optimized**: Complete metadata, JSON-LD structured data, and semantic HTML
- **High Performance**: Server-side rendering, image optimization, and efficient caching

## 🔍 SEO Strategy

### 1. Metadata Implementation
We utilize Next.js `generateMetadata` and the Metadata API to ensure every page has:
- **Title Tags**: Descriptive and under 60 characters.
- **Meta Descriptions**: Compelling summaries under 160 characters.
- **Open Graph & Twitter Cards**: For rich sharing on social media.

### 2. Semantic HTML
The structured is built with semantic semantic elements:
- `<header>` for navigation
- `<main>` for primary content
- `<article>` for blog posts
- `<section>` for logical groups
- `<h1>` only used once per page (Hero title)
- `<time>` for dates

### 3. Image Optimization
All images use `next/image` which automatically:
- Converts images to WebP/AVIF formats
- Lazily loads images (below fold)
- Prevents layout shift with proper sizing
- Includes descriptive `alt` text for accessibility

### 4. Structured Data (JSON-LD)
We inject JSON-LD schemas to help search engines understand the content:
- **WebSite Schema**: For the homepage and internal search box.
- **Article Schema**: For individual blog posts (headline, date, author, image).

## 🔎 Search & Filter Implementation

The search and filter functionality is implemented client-side for instant feedback (`components/blog/BlogClient.tsx`).

- **State Management**: React `useState` tracks `searchQuery` and `activeCategory`.
- **Filtering Logic**: A memoized `filterPosts` utility function runs whenever state changes.
- **Combined Filtering**: The logic ensures that *both* filters apply simultaneously (e.g., searching for "AI" *within* the "Tech" category).
- **Debouncing**: Inputs are controlled for immediate responsiveness (for this dataset size), but can easily be debounced for larger datasets.

## 📊 Performance & Accessibility

### Lighthouse Audit Results


| Category | Score | Notes |
|----------|-------|-------|
| **Performance** | 99 | Optimized images, server components |
| **Accessibility** | 100 | Semantic HTML, ARIA labels, focus management |
| **Best Practices** | 100 | HTTPS, secure dependencies |
| **SEO** | 100 | Meta tags, sitemap, robots.txt |

![Performance Audit](/screenshots/performance.png)
//have to add image !!

### Accessibility Features
- **Keyboard Navigation**: Full support for Tab, Enter, Space.
- **Focus Management**: Focus trap within the Article Modal.
- **Screen Readers**: ARIA labels on interactive elements (buttons, inputs).
- **Color Contrast**: All colors meet WCAG AA standards.

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd tech-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```
