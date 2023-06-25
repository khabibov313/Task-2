// function getCartItems() {
//     return JSON.parse(localStorage.getItem('cartItems')) || [];
//   }
  
  
//   function setCartItems(items) {
//     localStorage.setItem('cartItems', JSON.stringify(items));
//   }
  
  
//   function addToCart(product) {
//     const cartItems = getCartItems();
//     cartItems.push(product);
//     setCartItems(cartItems);
//     updateCartDisplay();
//   }
  
  
//   function removeFromCart(index) {
//     const cartItems = getCartItems();
//     if (index >= 0 && index < cartItems.length) {
//       cartItems.splice(index, 1);
//       setCartItems(cartItems);
//       updateCartDisplay();
//     }
//   }
  
  
//   function updateCartDisplay() {
//     const cartItems = getCartItems();
//     const cartItemsList = document.getElementById('cart-items');
//     cartItemsList.innerHTML = '';
  
//     cartItems.forEach((item, index) => {
//       const li = document.createElement('li');
//       li.textContent = item;
//       const removeButton = document.createElement('button');
//       removeButton.textContent = 'Remove from Cart';
//       removeButton.onclick = () => removeFromCart(index);
//       li.appendChild(removeButton);
//       cartItemsList.appendChild(li);
//     });
//   }
  
  
//   window.onload = updateCartDisplay;



const storedBorderRadius = localStorage.getItem('borderRadius');
const storedOpacity = localStorage.getItem('opacity');


const borderRadiusRange = document.getElementById('border-radius-range');
borderRadiusRange.value = storedBorderRadius || 0;

const opacityRange = document.getElementById('opacity-range');
opacityRange.value = storedOpacity || 1;


updateImages(borderRadiusRange.value, opacityRange.value);


borderRadiusRange.addEventListener('input', handleRangeChange);
opacityRange.addEventListener('input', handleRangeChange);


function handleRangeChange(event) {
  const target = event.target;
  const value = target.value;

  
  updateImages(borderRadiusRange.value, opacityRange.value);

  
  localStorage.setItem('borderRadius', borderRadiusRange.value);
  localStorage.setItem('opacity', opacityRange.value);
}


function updateImages(borderRadius, opacity) {
  const images = document.querySelectorAll('.image-container img');

  images.forEach((image) => {
    image.style.borderRadius = `${borderRadius}px`;
    image.style.opacity = opacity;
  });
}