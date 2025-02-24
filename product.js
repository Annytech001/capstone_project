document.getElementById('categoryFilter').addEventListener('change', function() {
  let selectedCategory = this.value;
  let products = document.querySelectorAll('.product-card');
  products.forEach(product => {
      if (selectedCategory === 'all' || product.dataset.category === selectedCategory) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
      alert('Product added to cart!');
  });
});