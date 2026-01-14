# Kempo Shop Rebuild - Architecture Guide

## Overview
This project is a modern, responsive rebuild of the Kempo Shop website. It is designed to run natively in any modern web browser without the need for a build step (No-Build methodology), utilizing ES Modules and standard CSS variables.

## Technical Goals
- **Responsiveness**: Support Mobile (<768px), Tablet, and Desktop layouts.
- **Performance**: Minimal dependencies, pure Vanilla JS.
- **Maintainability**: Modular code structure separating Data, UI, and Logic.

## Directory Structure
```
kempo-shop/
├── index.html          # Single Entry Point. Contains the HTML skeleton.
├── styles/
│   └── style.css       # The centralized stylesheet.
├── scripts/
│   ├── app.js          # Main controller. Handles event listeners and initialization.
│   ├── components.js   # UI Library. Functions that return HTML template strings or DOM elements.
│   ├── data.js         # Mock Database. Exports JSON-like objects for products/categories.
└── assets/             # Images and static files.
```

## Key Components

### 1. Global Styles (`styles/style.css`)
- **CSS Variables**: We use root variables (e.g., `--color-primary`, `--spacing-md`) to ensure consistency with the original brand colors.
- **Grid Layout**: The main layout uses `display: grid` to manage the Sidebar and Product Grid relationship.
- **Media Queries**:
    - `@media (max-width: 768px)`: Switches navigation to a hamburger menu and stacks the grid to a single column.

### 2. Data Layer (`scripts/data.js`)
- A simple JavaScript file exporting arrays (`products`, `categories`). This mimics a database response and allows for instant loading without a backend.

### 3. Component Layer (`scripts/components.js`)
- **Pure Functions**: Components like `createProductCard(product)` take data and return a DOM element. This makes them easy to test and reuse.
- **Modal System**: `openProductModal(id)` dynamically populates the modal container with data found by ID, handling the "View Details" interaction.

### 4. Application Logic (`scripts/app.js`)
- **Event Delegation**: We attach listeners to the parent containers (like the grid or nav) rather than every single element where possible, improving performance.
- **Dynamic Rendering**: On load, it fetches data and appends the generated components to the DOM.

## Deployment
This architecture requires **no build process**.
1. To deploy, simply upload the root directory to any static host (GitHub Pages, Netlify, Vercel).
2. The site works immediately.
