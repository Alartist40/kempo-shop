import { products, categories, translations } from './data.js';

export function createProductCard(product, lang = 'ja') {
  const content = product[lang];
  const t = translations[lang];
  const div = document.createElement('div');
  div.className = 'product-card';
  div.dataset.id = product.id;
  div.tabIndex = 0;
  div.role = 'button';
  div.ariaLabel = `${content.name} - ${t.viewDetails}`;
  div.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${content.name}" loading="lazy">
    </div>
    <div class="product-info">
      <span class="product-category">${content.category}</span>
      <h3 class="product-title">${content.name}</h3>
      <div class="product-price">¥${product.price.toLocaleString()} <small>${t.taxIncluded}</small></div>
    </div>
  `;
  return div;
}

export function createSidebarCategories(lang = 'ja') {
  const t = translations[lang];
  let html = `<li><a href="#" data-category="all" class="active">${t.allProducts}</a></li>`;
  html += categories.map(cat => `
    <li><a href="#" data-category="${cat.id}">${cat[lang]}</a></li>
  `).join('');
  return html;
}

export function openProductModal(productId, lang = 'ja') {
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return;

  const content = product[lang];
  const t = translations[lang];

  const overlay = document.getElementById('product-modal');
  const detailsContainer = document.getElementById('modal-details');

  detailsContainer.innerHTML = `
    <div class="modal-image">
      <img src="${product.image}" alt="${content.name}">
    </div>
    <div class="modal-info">
      <span class="product-category">${content.category}</span>
      <h2>${content.name}</h2>
      <p class="modal-price">¥${product.price.toLocaleString()} <small>${t.taxIncluded}</small></p>
      <p class="modal-description">${content.description}</p>
      
      <div class="quantity-selector">
        <label for="qty-input">${t.quantity}</label>
        <input type="number" value="1" min="1" id="qty-input">
        <span class="stock-status">${t.inStock}</span>
      </div>

      <button class="btn-primary" id="add-to-cart-btn">${t.addToCart}</button>
    </div>
  `;

  document.getElementById('add-to-cart-btn').addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const qty = document.getElementById('qty-input').value;
    const originalText = btn.textContent;
    const announcement = lang === 'ja' ? `${qty}個をカートに追加しました！` : `Added ${qty} to cart!`;

    // UI Feedback
    btn.textContent = t.addedToCart;
    btn.classList.add('btn-success');
    btn.disabled = true;

    // Accessibility Announcement
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) liveRegion.textContent = announcement;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('btn-success');
      btn.disabled = false;
    }, 2000);
  });

  overlay.classList.add('active');
}
