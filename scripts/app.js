import { products, translations } from './data.js';
import { createProductCard, createSidebarCategories, openProductModal } from './components.js';

let currentLang = 'ja'; // Default language

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const catList = document.getElementById('category-list');
    const modal = document.getElementById('product-modal');
    const loginModal = document.getElementById('login-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    const langToggleBtn = document.getElementById('lang-toggle');
    const loginBtn = document.getElementById('login-btn');

    // Initialization
    renderApp();

    // Language Toggle
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ja' ? 'en' : 'ja';
        langToggleBtn.textContent = currentLang === 'ja' ? 'English' : '日本語';
        renderApp();
    });

    // Login Modal
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('active');
    });

    // Close Modals (Generic)
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('active');
        }
    });

    // Mobile Nav
    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    function renderApp() {
        const t = translations[currentLang];

        // Update Static Text
        document.title = t.siteTitle;
        document.getElementById('hero-title').textContent = t.heroTitle;
        document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
        document.getElementById('cat-title').textContent = t.categoriesTitle;
        loginBtn.textContent = t.login;

        // Header Nav
        const navLinks = mainNav.querySelectorAll('li a');
        t.nav.forEach((text, i) => {
            if (navLinks[i]) navLinks[i].textContent = text;
        });

        // Footer Text (Simplified update)
        document.querySelector('.footer-section:nth-child(1) h4').textContent = t.aboutUsTitle;
        document.querySelector('.footer-section:nth-child(1) p').textContent = t.aboutUsText;
        document.querySelector('.footer-section:nth-child(2) h4').textContent = t.contactTitle;
        document.querySelector('.footer-section:nth-child(3) h4').textContent = t.policiesTitle;

        // Render Sidebar
        catList.innerHTML = createSidebarCategories(products, currentLang);

        // Render Products
        renderProducts(products);
    }

    function renderProducts(productList) {
        productGrid.innerHTML = '';
        productList.forEach(product => {
            const card = createProductCard(product, currentLang);
            productGrid.appendChild(card);

            card.addEventListener('click', () => {
                openProductModal(product.id, currentLang);
            });
        });
    }

    // Filter Logic
    catList.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const selectedCat = e.target.dataset.category;
            const filtered = products.filter(p => p[currentLang].category === selectedCat);
            renderProducts(filtered);
        }
    });
});
