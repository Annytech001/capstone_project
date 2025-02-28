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

// document.querySelectorAll('.fa-shopping-cart').forEach(button => {
//   button.addEventListener('click', function() {
//       alert('Product added to cart!');
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".fa-shopping-cart");

  cartButtons.forEach(button => {
      button.addEventListener("click", function () {
          window.location.href = "/payment.html"; // Change to your actual payment page path
      });
  });
});

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
