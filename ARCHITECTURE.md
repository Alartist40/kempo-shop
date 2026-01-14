# Architecture Guide

This document explains the codebase structure for developers new to the project.

## Overview
Kempo Shop is a static website built with Vanilla JS that mimics a dynamic e-commerce experience. It requires no build step and runs directly in modern browsers.

## Directory Structure
```
kempo-shop/
├── index.html          # Main entry point
├── styles/
│   └── style.css       # All styles (variables, components, responsive)
├── scripts/
│   ├── app.js          # Main controller (event handling, state)
│   ├── components.js   # UI generators (cards, modals, categories)
│   └── data.js         # Product catalog and translations
└── assets/             # Images (placeholder for now)
```

## Key Files

### `scripts/data.js`
Contains all static data:
- `products[]` - Array of product objects with bilingual content
- `categories[]` - Category definitions with IDs
- `translations{}` - UI strings for Japanese and English

### `scripts/components.js`
Pure functions that generate HTML:
- `createProductCard(product, lang)` - Returns DOM element
- `createSidebarCategories(lang)` - Returns HTML string
- `openProductModal(id, lang)` - Populates and shows modal

### `scripts/app.js`
Application state and event handling:
- `currentLang` - Tracks selected language
- `currentCategory` - Tracks selected filter
- `renderApp()` - Re-renders all dynamic content
- Event listeners for nav, filters, modals

### `styles/style.css`
CSS structure:
1. **Variables**: Colors, spacing, typography
2. **Base Reset**: Box-sizing, font defaults
3. **Layout**: Header, Hero, Grid system
4. **Components**: Cards, Modals, Sidebar
5. **Responsive**: Media queries at 900px, 768px, 480px

## State Management
Simple module-level variables track state:
```js
let currentLang = 'ja';     // 'ja' or 'en'
let currentCategory = 'all'; // 'all' or category ID
```

When state changes, `renderApp()` or `renderProducts()` is called to update the DOM.

## Adding New Products
1. Open `scripts/data.js`
2. Add a new object to the `products[]` array
3. Include `id`, `categoryId`, `price`, `image`, and `ja`/`en` content

## Deployment
Static files only - deploy to any host:
- GitHub Pages (current)
- Netlify
- Vercel
- Any web server
