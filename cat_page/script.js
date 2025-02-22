/* JavaScript - script.js */
const products = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 50) + 10,
    image: `https://via.placeholder.com/200?text=Product+${i + 1}`,
}));

const productGrid = document.getElementById('productGrid');
const sortSelect = document.getElementById('sort');

function renderProducts(productList) {
    productGrid.innerHTML = '';
    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <div class="icons">
                <i class="fas fa-heart" style="color:red;"></i>
                <i class="fas fa-star" style="color:gold;"></i>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

function sortProducts() {
    const order = sortSelect.value;
    const sortedProducts = [...products].sort((a, b) => 
        order === 'low' ? a.price - b.price : b.price - a.price
    );
    renderProducts(sortedProducts);
}

sortSelect.addEventListener('change', sortProducts);
renderProducts(products);

/* JavaScript for Sorting */

    document.addEventListener("DOMContentLoaded", function () {
        const sortSelect = document.getElementById("sort");
        const productGrid = document.querySelector(".product-grid");
        let products = Array.from(productGrid.children);

        sortSelect.addEventListener("change", function () {
            let sortedProducts;
            if (sortSelect.value === "low-high") {
                sortedProducts = products.sort((a, b) => a.dataset.price - b.dataset.price);
            } else if (sortSelect.value === "high-low") {
                sortedProducts = products.sort((a, b) => b.dataset.price - a.dataset.price);
            }
            productGrid.innerHTML = "";
            sortedProducts.forEach(product => productGrid.appendChild(product));
        });
    });