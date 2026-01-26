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

/**
 * Builds HTML list items for the sidebar category navigation in the specified language.
 * @param {string} lang - Language code used to localize category labels (e.g., 'ja').
 * @returns {string} A concatenated string of `<li>` elements for each category, including an active "All products" item.
 */
export function createSidebarCategories(lang = 'ja') {
  const t = translations[lang];
  let html = `<li><a href="#" data-category="all" class="active">${t.allProducts}</a></li>`;
  html += categories.map(cat => `
    <li><a href="#" data-category="${cat.id}">${cat[lang]}</a></li>
  `).join('');
  return html;
}

/**
 * Populate and open the product detail modal for the specified product and language.
 *
 * If the product ID does not match any product, the function exits without modifying the UI.
 * The function fills modal content (image, category, name, price, description, quantity selector)
 * and attaches a click handler to the add-to-cart button that shows a localized confirmation alert.
 *
 * @param {(number|string)} productId - The product identifier (number or numeric string).
 * @param {string} [lang='ja'] - Language code to select localized product content and translations.
 * @param {(overlay: HTMLElement) => void} openModal - Callback invoked with the modal overlay element to display the modal.
 */
export function openProductModal(productId, lang = 'ja', openModal) {
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
        <label>${t.quantity}</label>
        <input type="number" value="1" min="1" id="qty-input">
        <span class="stock-status">${t.inStock}</span>
      </div>

      <button class="btn-primary" id="add-to-cart-btn">${t.addToCart}</button>
    </div>
  `;

  document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    const qty = document.getElementById('qty-input').value;
    alert(lang === 'ja' ? `${qty}個をカートに追加しました！` : `Added ${qty} to cart!`);
  });

  openModal(overlay);
}