import { products, categories } from './data.js';
import { createProductCard, createSidebarCategories, openProductModal } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const catList = document.getElementById('category-list');
    const modal = document.getElementById('product-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    // Render Sidebar
    catList.innerHTML = createSidebarCategories(categories);

    // Render Products
    products.forEach(product => {
        const card = createProductCard(product);
        productGrid.appendChild(card);

        // Add Click listener for modal
        card.addEventListener('click', () => {
            openProductModal(product.id);
        });
    });

    // Modal Logic
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Mobile Nav Toggle
    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Filter Logic (Simple implementation)
    catList.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const selectedCat = e.target.dataset.category;

            // Clear current grid
            productGrid.innerHTML = '';

            const filtered = products.filter(p => p.category === selectedCat);
            filtered.forEach(product => {
                const card = createProductCard(product);
                productGrid.appendChild(card);
                card.addEventListener('click', () => {
                    openProductModal(product.id);
                });
            });
        }
    });
});
