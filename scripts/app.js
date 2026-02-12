import { products, categories, translations } from './data.js';
import { createProductCard, createSidebarCategories, openProductModal } from './components.js';

let currentLang = 'ja';
let currentCategory = 'all';
let elementToFocusOnClose = null;

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
    let cartTimeout;

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
        document.documentElement.lang = currentLang;
        renderApp();
    });

    // Login Modal
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        elementToFocusOnClose = document.activeElement;
        loginModal.classList.add('active');
        loginModal.querySelector('.close-modal').focus();
    });

    // Login Form Feedback
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const t = translations[currentLang];
        const submitBtn = loginForm.querySelector('button');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = t.loggingIn;

        setTimeout(() => {
            submitBtn.textContent = t.loginSuccess;
            document.getElementById('live-region').textContent = t.loginSuccess;

            setTimeout(() => {
                closeActiveModal();
                // Reset form for next time
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                loginForm.reset();
                document.getElementById('live-region').textContent = '';
            }, 1000);
        }, 1000);
    });

    // Nav Actions
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        currentCategory = 'all';
        updateSidebarActiveState();
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    navCompany.addEventListener('click', (e) => {
        e.preventDefault();
        elementToFocusOnClose = document.activeElement;
        renderCompanyModal();
        companyModal.classList.add('active');
        companyModal.querySelector('.close-modal').focus();
    });

    navGuide.addEventListener('click', (e) => {
        e.preventDefault();
        elementToFocusOnClose = document.activeElement;
        renderGuideModal();
        guideModal.classList.add('active');
        guideModal.querySelector('.close-modal').focus();
    });

    navRegister.addEventListener('click', (e) => {
        e.preventDefault();
        elementToFocusOnClose = document.activeElement;
        loginModal.classList.add('active');
        loginModal.querySelector('.close-modal').focus();
    });

    navCart.addEventListener('click', (e) => {
        e.preventDefault();
        const t = translations[currentLang];
        clearTimeout(cartTimeout);

        navCart.textContent = t.cartEmpty;
        document.getElementById('live-region').textContent = t.cartEmptyMsg;

        cartTimeout = setTimeout(() => {
            navCart.textContent = t.nav[4];
            document.getElementById('live-region').textContent = '';
        }, 2000);
    });

    // Close Modals
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', closeActiveModal);
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeActiveModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeActiveModal();
        }
    });

    // Mobile Nav
    navToggle.addEventListener('click', () => {
        const isExpanded = mainNav.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Category Filter
    function closeActiveModal() {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            elementToFocusOnClose?.focus();
        }
    }

    function updateSidebarActiveState() {
        catList.querySelectorAll('a').forEach(a => {
            const isActive = a.dataset.category === currentCategory;
            a.classList.toggle('active', isActive);
            if (isActive) a.setAttribute('aria-current', 'page');
            else a.removeAttribute('aria-current');
        });
    }

    catList.addEventListener('click', (e) => {
        e.preventDefault();
        const link = e.target.closest('a');
        if (link) {
            currentCategory = link.dataset.category;
            updateSidebarActiveState();
            renderProducts();

            // Announce to screen readers
            const categoryName = e.target.textContent;
            const announcement = currentLang === 'ja' ? `${categoryName}を表示しています` : `Showing ${categoryName}`;
            document.getElementById('live-region').textContent = announcement;
        }
    });

    function renderApp() {
        const t = translations[currentLang];

        // Update Static Text
        document.title = t.siteTitle;
        document.getElementById('skip-link').textContent = t.skipToContent;
        document.getElementById('hero-title').textContent = t.heroTitle;
        document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
        document.getElementById('cat-title').textContent = t.categoriesTitle;
        loginBtn.textContent = t.login;
        langToggleBtn.setAttribute('aria-label', t.langToggleAria);
        navToggle.setAttribute('aria-label', t.navToggleAria);

        // Login Modal
        document.getElementById('login-title').textContent = t.loginTitle;
        document.getElementById('email-label').textContent = t.emailLabel;
        document.getElementById('password-label').textContent = t.passwordLabel;
        document.getElementById('login-submit-btn').textContent = t.loginSubmit;
        document.getElementById('no-account-text').textContent = t.noAccount;
        document.getElementById('register-link').textContent = t.registerLink;

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
        updateSidebarActiveState();

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

            const openModal = () => {
                elementToFocusOnClose = card;
                openProductModal(product.id, currentLang);
                document.querySelector('#product-modal .close-modal').focus();
            };

            card.addEventListener('click', openModal);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal();
                }
            });
        });
    }

    function renderCompanyModal() {
        const t = translations[currentLang];
        const container = document.getElementById('company-content');
        container.innerHTML = `
      <h2>${t.aboutUsTitle}</h2>
      <h3>${t.companyName}</h3>
      <p>${t.ceo}</p>
      <p>${t.established}</p>
      <hr style="margin: 1rem 0;">
      <p>${t.aboutUsText}</p>
    `;
    }

    function renderGuideModal() {
        const t = translations[currentLang];
        const container = document.getElementById('guide-content');
        container.innerHTML = currentLang === 'ja' ? `
      <h2>ご利用案内</h2>
      <h3>お支払い方法</h3>
      <p>クレジットカード、銀行振込、代金引換をご利用いただけます。</p>
      <h3>配送について</h3>
      <p>ご注文確認後、3〜5営業日以内に発送いたします。</p>
      <h3>返品・交換</h3>
      <p>商品到着後7日以内にご連絡ください。</p>
    ` : `
      <h2>Usage Guide</h2>
      <h3>Payment Methods</h3>
      <p>We accept credit cards, bank transfers, and cash on delivery.</p>
      <h3>Shipping</h3>
      <p>Orders ship within 3-5 business days after confirmation.</p>
      <h3>Returns & Exchanges</h3>
      <p>Please contact us within 7 days of receiving your order.</p>
    `;
    }
});
