import { products } from './data.js';

export function createProductCard(product) {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.dataset.id = product.id;
    div.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <h3 class="product-title">${product.name}</h3>
      <div class="product-price">¥${product.price.toLocaleString()}</div>
    </div>
  `;
    return div;
}

export function createSidebarCategories(categories) {
    return categories.map(cat => `
    <li><a href="#" data-category="${cat}">${cat}</a></li>
  `).join('');
}

export function openProductModal(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return;

    const overlay = document.getElementById('product-modal');
    const detailsContainer = document.getElementById('modal-details');

    detailsContainer.innerHTML = `
    <div class="modal-left">
      <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:8px;">
    </div>
    <div class="modal-right">
      <small style="color:var(--color-primary); font-weight:bold;">${product.category}</small>
      <h2 style="margin: 0.5rem 0;">${product.name}</h2>
      <h3 style="color:var(--color-accent); font-size:1.5rem; margin-bottom:1rem;">¥${product.price.toLocaleString()}</h3>
      <p>${product.description}</p>
      
      <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
        <label style="display:block; margin-bottom:0.5rem;">Quantity</label>
        <input type="number" value="1" min="1" style="padding:0.5rem; width:60px; margin-right:1rem;">
        <span style="font-size:0.8rem; color:#666;">In Stock</span>
      </div>

      <button class="btn-primary" onclick="alert('Added to mock cart!')">Add to Cart</button>
    </div>
  `;

    overlay.classList.add('active');
}
