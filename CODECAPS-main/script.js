
function toggleDropdown(event) {
  const dropdown = event.target.closest('.dropdown');
  if (dropdown) {
    dropdown.classList.toggle('active');
  }
}

document.querySelector('.search-icon-button').addEventListener('click', function() {
    var searchInput = document.querySelector('.search-input');
    var logoSmall = document.querySelector('.logo-small');
    if (searchInput.classList.contains('active')) {
      searchInput.classList.remove('active');
      logoSmall.classList.remove('shrink');
    } else {
      searchInput.classList.add('active');
      logoSmall.classList.add('shrink');
    }
  });

function toggleHamburgerNav() {
    var hamburgerButton = document.querySelector('.hamburger-button');
    var hamburgerNav = document.querySelector('.hamburger-nav');
  
    hamburgerNav.classList.toggle('active');
  
    if (hamburgerNav.classList.contains('active')) {
      hamburgerButton.setAttribute('aria-expanded', 'true');
      console.log('Hamburger navigation opened.');
    } else {
      hamburgerButton.setAttribute('aria-expanded', 'false');
      console.log('Hamburger navigation closed.');
    }
  }

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true
    counter++;
    if(counter > 4){
        counter = 1;

    }
},5000)

var cart = [];

const button = document.querySelectorAll('.product-box .add-to-cart');
button.forEach(function(button) {
  button.addEventListener('click', function() {
    var productBox = button.closest('.product-box');
    var productImg = productBox.querySelector('.product-img').src;
    var productTitle = productBox.querySelector('.product-title').textContent;
    var price = parseFloat(productBox.querySelector('.price').textContent.replace(',', '.').replace(/[^0-9\.]/g, ''));

    // Check if this product is already in the cart
    var existingProduct = cart.find(function(product) {
      return product.title === productTitle;
    });

    if (existingProduct) {
      // If the product is already in the cart, increment its quantity
      existingProduct.quantity++;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      var product = {
        img: productImg,
        title: productTitle,
        price: price,
        quantity: 1
      };

      cart.push(product);
    }

    var cartIcons = document.querySelectorAll('.icon-cart');
    cartIcons.forEach(function(cartIcon) {
      cartIcon.setAttribute('data-count', cart.length);
    });

    updateCartList();
  });
});

function updateCartList() {
  var cartList = document.querySelector('.cart-list');

  cartList.innerHTML = '';

  if (cart.length === 0) {
    var emptyCart = document.createElement('p');
    emptyCart.textContent = 'Your cart is empty.';
    cartList.appendChild(emptyCart);
  } else {
    var totalCost = 0;
    var cartItems = cart.map(function(item, index) {
      var total = item.price * item.quantity;
      totalCost += total;
      return `
        <div class="cart-item" data-index="${index}">
          <img src="${item.img}" alt="${item.title}">
          <div class="cart-item-details">
            <h3>${item.title}</h3>
            <p>${item.price.toFixed(2)}</p>
            <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
            <p>Total: $${total.toFixed(2)}</p>
            <button class="remove" onclick="removeItem(${index})">Remove</button>
          </div>
        </div>
      `;
    });

    var cartItemsHtml = cartItems.join('');
    cartList.innerHTML = cartItemsHtml;

    var totalSection = document.createElement('div');
    totalSection.className = 'total';
    totalSection.textContent = 'Total Cost: $' + totalCost.toFixed(2);
    cartList.appendChild(totalSection);
  }
}

window.removeItem = function(index) {
  cart.splice(index, 1);
  updateCartList();
}

window.toggleCart = function() {
  var cartContainer = document.querySelector('.cart-container');
  cartContainer.classList.toggle('visible');
}