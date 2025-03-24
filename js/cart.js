const cartItem = JSON.parse(localStorage.getItem("cart"));
const cartSize = document.getElementById("cartSize");
cartSize.textContent = cartItem.length;

const cartSectionItems = document.querySelector(".menu-section-items");
cartItem.forEach((item) => {
  cartSectionItems.innerHTML += `
          <div id=${"product-" + item.id} class="menu-item">
            <img src=${item.img} alt=${item.alt} />
              <div class="menu-item-details">
                <h3 class="item-name">${item.name}</h3>
                <p class="description">
                  ${item.description.split(" ").splice(0, 5).join(" ")}
                </p>
                <p class="price">Price:${item.price}</p>
                <button id=${
                  "button-" + item.id
                } class="remove-from-cart hidden">Remove</button>
              </div>
          </div>
          `;
});

if (cartItem.length === 0) {
  cartSectionItems.innerHTML = "<h1>No items in cart</h1>";
}
