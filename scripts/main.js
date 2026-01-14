document.addEventListener('DOMContentLoaded', () => {
    // Mock Data
    const categories = [
        { id: 1, name: 'チャコール製品', icon: '💎', color: '#e6f3ff' },
        { id: 2, name: 'アレルギー対応食品', icon: '🍞', color: '#fff0e6' },
        { id: 3, name: '無農薬・有機野菜', icon: '🥬', color: '#e6ffed' },
        { id: 4, name: '健康補助食品', icon: '💊', color: '#f5e6ff' },
        { id: 5, name: '油・調味料', icon: '🍶', color: '#fffbe6' },
        { id: 6, name: '飲み物', icon: '🥤', color: '#e6ffff' },
        { id: 7, name: '書籍・メディア', icon: '📚', color: '#f0f0f0' },
        { id: 8, name: '健康機器', icon: '⌚', color: '#e6e6ff' }
    ];

    const products = [
        {
            id: 101,
            name: 'スーパーチャコール（活性炭）微粉末 1kg',
            price: 6930,
            image: 'https://kempo-shop.com/super_charcoal_thumb.jpg', // Using real thumb if possible
            fallback: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400',
            badge: '人気'
        },
        {
            id: 102,
            name: '有機JAS認証 奇跡のリンゴ',
            price: 1200,
            image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb?w=400',
            badge: 'おすすめ'
        },
        {
            id: 103,
            name: '植物性たんぱく質 惣菜セット',
            price: 3500,
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
            badge: 'SALE'
        },
        {
            id: 104,
            name: '無農薬 玄米 5kg',
            price: 4800,
            image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
            badge: ''
        }
    ];

    // Render Categories
    const categoryGrid = document.getElementById('category-grid');
    if (categoryGrid) {
        categories.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="category-icon" style="background-color: ${cat.color}">
                    <span>${cat.icon}</span>
                </div>
                <h3>${cat.name}</h3>
            `;
            categoryGrid.appendChild(card);
        });
    }

    // Render Featured Products
    const productGrid = document.getElementById('featured-products');
    if (productGrid) {
        products.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-badge">${prod.badge}</div>
                <div class="product-img-wrapper">
                    <img src="${prod.image}" alt="${prod.name}" onerror="this.src='${prod.fallback}'">
                </div>
                <div class="product-info">
                    <h3>${prod.name}</h3>
                    <div class="product-price">¥${prod.price.toLocaleString()}<span>(税込)</span></div>
                    <button class="btn btn-outline btn-full add-to-cart">
                        <i data-lucide="shopping-cart"></i> カートに入れる
                    </button>
                </div>
            `;
            productGrid.appendChild(card);
        });
        // Re-initialize Lucide for dynamic elements
        if (window.lucide) lucide.createIcons();
    }

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navList = document.getElementById('nav-list');
    if (mobileToggle && navList) {
        mobileToggle.addEventListener('click', () => {
            navList.classList.toggle('show');
            const icon = mobileToggle.querySelector('i');
            if (navList.classList.contains('show')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
    }

    // CSS for JS-driven components
    const style = document.createElement('style');
    style.textContent = `
        .category-card {
            background: white;
            padding: 1.5rem;
            border-radius: var(--radius-lg);
            text-align: center;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            border: 1px solid var(--border-color);
        }
        .category-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
        }
        .category-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 2rem;
        }
        .category-card h3 {
            font-size: 0.9rem;
            color: var(--text-dark);
        }
        
        .product-card {
            background: white;
            border-radius: var(--radius-lg);
            overflow: hidden;
            border: 1px solid var(--border-color);
            position: relative;
            transition: transform 0.2s;
        }
        .product-card:hover {
            transform: translateY(-5px);
        }
        .product-badge {
            position: absolute;
            top: 1rem;
            left: 1rem;
            background: #ef4444;
            color: white;
            padding: 0.2rem 0.6rem;
            border-radius: var(--radius-sm);
            font-size: 0.75rem;
            font-weight: 700;
            z-index: 10;
        }
        .product-badge:empty { display: none; }
        .product-img-wrapper {
            height: 200px;
            overflow: hidden;
        }
        .product-img-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }
        .product-card:hover .product-img-wrapper img {
            transform: scale(1.1);
        }
        .product-info {
            padding: 1.5rem;
        }
        .product-info h3 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
            height: 3rem;
            overflow: hidden;
        }
        .product-price {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--primary-green);
            margin-bottom: 1rem;
        }
        .product-price span {
            font-size: 0.75rem;
            color: var(--text-muted);
            margin-left: 0.25rem;
        }
        
        /* Mobile Nav Show */
        @media (max-width: 768px) {
            .nav-list.show {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--primary-green);
                padding: 1rem;
                z-index: 99;
                border-top: 1px solid rgba(255,255,255,0.1);
            }
        }
    `;
    document.head.appendChild(style);
});
