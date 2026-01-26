import { products, categories, translations } from './data.js';

export function createProductCard(product, lang = 'ja') {
  const content = product[lang];
  const t = translations[lang];
  const div = document.createElement('div');
  div.className = 'product-card';
  div.dataset.id = product.id;
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

/**
 * Open and populate the product detail modal for the given product id.
 *
 * Populates the modal with localized product information, assigns ARIA attributes for the modal title and description, attaches the add-to-cart click handler (reads quantity from `#qty-input` and shows an alert), and activates the modal overlay. If no matching product is found, the function exits without side effects.
 * @param {number|string} productId - Product id (or string) identifying which product to display.
 * @param {string} [lang='ja'] - Language code used to select localized product fields and translations.
 */
export function openProductModal(productId, lang = 'ja') {
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return;

  const content = product[lang];
  const t = translations[lang];

  const overlay = document.getElementById('product-modal');
  const modalContent = overlay.querySelector('.modal-content');
  const detailsContainer = document.getElementById('modal-details');

  const titleId = `modal-title-${product.id}`;
  const descriptionId = `modal-desc-${product.id}`;

  detailsContainer.innerHTML = `
    <div class="modal-image">
      <img src="${product.image}" alt="${content.name}">
    </div>
    <div class="modal-info">
      <span class="product-category">${content.category}</span>
      <h2 id="${titleId}">${content.name}</h2>
      <p class="modal-price">¥${product.price.toLocaleString()} <small>${t.taxIncluded}</small></p>
      <p id="${descriptionId}" class="modal-description">${content.description}</p>
      
      <div class="quantity-selector">
        <label>${t.quantity}</label>
        <input type="number" value="1" min="1" id="qty-input">
        <span class="stock-status">${t.inStock}</span>
      </div>

      <button class="btn-primary" id="add-to-cart-btn">${t.addToCart}</button>
    </div>
  `;

  modalContent.setAttribute('aria-labelledby', titleId);
  modalContent.setAttribute('aria-describedby', descriptionId);

  document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    const qty = document.getElementById('qty-input').value;
    alert(lang === 'ja' ? `${qty}個をカートに追加しました！` : `Added ${qty} to cart!`);
  });

  overlay.classList.add('active');
}