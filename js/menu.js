const menuButton = document.querySelectorAll(".meanu-search-categories button");

// menu search button active for all beverage and others
menuButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    for (let i = 0; i < menuButton.length; i++) {
      if (i !== index) {
        menuButton[i].classList.remove("active");
      }
    }
    button.classList.toggle("active");
  });
});

// menu item list display function
const menuSectionItems = document.querySelector(".menu-section-items");

menuItemData.forEach((item) => {
  menuSectionItems.innerHTML += `
        <div id=${"product-" + item.id} class="menu-item">
          <img src=${item.img} alt=${item.alt} />
            <div class="menu-item-details">
              <h3 class="item-name">${item.name}</h3>
              <p class="description">
                ${item.description}
              </p>
              <p class="price">Price:${item.price}</p>
              <button id=${
                item.id
              } class="add-to-cart hidden">Add to Cart</button>
            </div>
        </div>
        `;
});

menuItemData.forEach((item) => {
  const productItem = document.getElementById("product-" + item.id);
  productItem.addEventListener("click", () => {
    window.open(`productDetails.html?id=${item.id}`, "_blank");
  });
});

// add to cart button while hover on menu itemmen
const menuItems = document.querySelectorAll(".menu-item");
const addToCartButton = document.querySelectorAll(".add-to-cart");

localStorage.setItem("cart", JSON.stringify([]));
let cart = JSON.parse(localStorage.getItem("cart"));

addToCartButton.forEach((button) => {
  button.addEventListener("click", () => {
    menuItemData.forEach((item) => {
      if (item.id == button.id) {
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(JSON.parse(localStorage.getItem("cart")));
      }
    });
  });
});
