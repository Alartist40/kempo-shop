import { products, categories, translations } from './data.js';
import { createProductCard, createSidebarCategories, openProductModal } from './components.js';

let currentLang = 'ja';
let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const productGrid = document.getElementById('product-grid');
    const catList = document.getElementById('category-list');
    const productModal = document.getElementById('product-modal');
    const loginModal = document.getElementById('login-modal');
    const companyModal = document.getElementById('company-modal');
    const guideModal = document.getElementById('guide-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    const langToggleBtn = document.getElementById('lang-toggle');
    const loginBtn = document.getElementById('login-btn');

    // Nav Links
    const navHome = document.getElementById('nav-home');
    const navCompany = document.getElementById('nav-company');
    const navGuide = document.getElementById('nav-guide');
    const navRegister = document.getElementById('nav-register');
    const navCart = document.getElementById('nav-cart');

    // Initialize
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

    // Nav Actions
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        currentCategory = 'all';
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    navCompany.addEventListener('click', (e) => {
        e.preventDefault();
        renderCompanyModal();
        companyModal.classList.add('active');
    });

    navGuide.addEventListener('click', (e) => {
        e.preventDefault();
        renderGuideModal();
        guideModal.classList.add('active');
    });

    navRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('active');
    });

    navCart.addEventListener('click', (e) => {
        e.preventDefault();
        alert(currentLang === 'ja' ? 'カートは空です' : 'Your cart is empty');
    });

    // Close Modals
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

    // Category Filter
    catList.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            // Update active state
            catList.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            e.target.classList.add('active');

            currentCategory = e.target.dataset.category;
            renderProducts();
        }
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
        navHome.textContent = t.nav[0];
        navCompany.textContent = t.nav[1];
        navGuide.textContent = t.nav[2];
        navRegister.textContent = t.nav[3];
        navCart.textContent = t.nav[4];

        // Footer
        document.getElementById('footer-about-title').textContent = t.aboutUsTitle;
        document.getElementById('footer-about-text').textContent = t.aboutUsText;
        document.getElementById('footer-contact-title').textContent = t.contactTitle;
        document.getElementById('footer-policies-title').textContent = t.policiesTitle;
        document.getElementById('footer-shipping').textContent = t.shipping;
        document.getElementById('footer-returns').textContent = t.returns;
        document.getElementById('footer-privacy').textContent = t.privacy;

        // Sidebar
        catList.innerHTML = createSidebarCategories(currentLang);

        // Set active category
        const activeLink = catList.querySelector(`[data-category="${currentCategory}"]`);
        if (activeLink) activeLink.classList.add('active');

        // Products
        renderProducts();
    }

    function renderProducts() {
        productGrid.innerHTML = '';

        let filteredProducts = products;
        if (currentCategory !== 'all') {
            filteredProducts = products.filter(p => p.categoryId === parseInt(currentCategory));
        }

        filteredProducts.forEach(product => {
            const card = createProductCard(product, currentLang);
            productGrid.appendChild(card);

            card.addEventListener('click', () => {
                openProductModal(product.id, currentLang);
            });
        });
    }

    /**
     * Populate the company modal with localized content and update ARIA attributes for accessibility.
     *
     * Inserts the localized title, subtitle, and company details into the #company-content container
     * and sets `aria-labelledby` and `aria-describedby` on the modal content element to point to those headings.
     */
    function renderCompanyModal() {
        const t = translations[currentLang];
        const modalContent = companyModal.querySelector('.modal-content');
        const container = document.getElementById('company-content');
        const titleId = 'company-modal-title';
        const descId = 'company-modal-desc';

        container.innerHTML = `
      <h2 id="${titleId}">${t.aboutUsTitle}</h2>
      <h3 id="${descId}">${t.companyName}</h3>
      <p>${t.ceo}</p>
      <p>${t.established}</p>
      <hr style="margin: 1rem 0;">
      <p>${t.aboutUsText}</p>
    `;
        modalContent.setAttribute('aria-labelledby', titleId);
        modalContent.setAttribute('aria-describedby', descId);
    }

    /**
     * Populate the guide modal with localized content and update its accessibility attributes.
     *
     * Inserts localized headings and paragraphs into the #guide-content container based on the currentLang state,
     * and sets `aria-labelledby` and `aria-describedby` on the modal content to reference the inserted heading IDs.
     */
    function renderGuideModal() {
        const t = translations[currentLang];
        const modalContent = guideModal.querySelector('.modal-content');
        const container = document.getElementById('guide-content');
        const titleId = 'guide-modal-title';
        const descId = 'guide-modal-desc';

        container.innerHTML = currentLang === 'ja' ? `
      <h2 id="${titleId}">ご利用案内</h2>
      <h3 id="${descId}">お支払い方法</h3>
      <p>クレジットカード、銀行振込、代金引換をご利用いただけます。</p>
      <h3>配送について</h3>
      <p>ご注文確認後、3〜5営業日以内に発送いたします。</p>
      <h3>返品・交換</h3>
      <p>商品到着後7日以内にご連絡ください。</p>
    ` : `
      <h2 id="${titleId}">Usage Guide</h2>
      <h3 id="${descId}">Payment Methods</h3>
      <p>We accept credit cards, bank transfers, and cash on delivery.</p>
      <h3>Shipping</h3>
      <p>Orders ship within 3-5 business days after confirmation.</p>
      <h3>Returns & Exchanges</h3>
      <p>Please contact us within 7 days of receiving your order.</p>
    `;
        modalContent.setAttribute('aria-labelledby', titleId);
        modalContent.setAttribute('aria-describedby', descId);
    }
});