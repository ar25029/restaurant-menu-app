const urlPrams = new URLSearchParams(window.location.search);
const productId = urlPrams.get("id");

const productData = menuItemData.find((item) => item.id == productId);

const productImage = document.querySelector(".product-img");
productImage.src = `${productData.img}`;
productImage.alt = `${productData.alt}`;

const productName = document.querySelector(".product-title");
productName.innerHTML = `${productData.name}`;

const productDescription = document.querySelector(".product-discription");
productDescription.innerHTML = `${productData.description}`;

const productPrice = document.querySelector(".product-price");
productPrice.innerHTML = `Price: &#x20B9;${productData.price}`;

const productOrderBtn = document.querySelector(".product-order-button");
productOrderBtn.addEventListener("click", () => {
  alert("Order placed successfully!");
  //   as for now it is just redirect to index after completing order
  window.close();
  //   will be changed to order page to add to cart
});
