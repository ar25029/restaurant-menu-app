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
                ${item.description.split(" ").splice(0, 5).join(" ")}
              </p>
              <p class="price">Price:${item.price}</p>
              <button id=${
                "button-" + item.id
              } class="add-to-cart hidden">Add to Cart</button>
            </div>
        </div>
        `;
});

// menuItemData.forEach((item) => {
//   const productItem = document.getElementById("product-" + item.id);
//   productItem.addEventListener("click", () => {
//     window.open(`productDetails.html?id=${item.id}`, "_blank");
//   });
// });

// add to cart item here
for (let i = 0; i < menuItemData.length; i++) {
  let buttoneEle = document.getElementById("button-" + menuItemData[i].id);
  buttoneEle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", JSON.stringify([menuItemData[i]]));
    } else {
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart.push(menuItemData[i]);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("item added successfully");
    }
  });
}

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

const searchInput = document.querySelector(".menu-search input");
searchInput.addEventListener("input", (e) => {
  if (e.target.value == "") {
    const searchItemContainer = document.querySelector(".search-sections");
    searchItemContainer.innerHTML = "";
  } else {
    const searchItemContainer = document.querySelector(".search-sections");
    searchItemContainer.innerHTML = "";
    searchItemContainer.innerHTML += `
      <h1>Search Reasults</h1>
      <div class="search-section-items">
        <!-- dynamic search item list -->
      </div>
    `;
  }
  const products = searchFood(e.target.value);
  console.log(products);

  const searchItemsContainer = document.querySelector(".search-section-items");
  searchItemsContainer.innerHTML = "";
  if (products.length == 0) {
    searchItemsContainer.innerHTML = `<h1>No items found</h1>`;
  } else {
    products.forEach((item) => {
      searchItemsContainer.innerHTML += `
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
  }
});

const searchFood = (searchQuery) => {
  const searchToken = searchQuery.toLowerCase().split(" ");
  let productMatchingScore = [];
  for (let i = 0; i < productToken.length; i++) {
    let count = 0;
    for (let j = 0; j < productToken.length; j++) {
      if (searchToken.includes(productToken[i].tokens[j])) {
        count++;
      }
    }
    productMatchingScore.push({
      id: productToken[i].id,
      score: count,
    });
  }
  productMatchingScore = productMatchingScore.filter(
    (product) => product.score > 0
  );
  productMatchingScore.sort((a, b) => b.score - a.score);
  productMatchingScore = productMatchingScore.splice(0, 5);
  const products = [];
  for (let i = 0; i < productMatchingScore.length; i++) {
    menuItemData.forEach((menuItem) => {
      if (menuItem.id == productMatchingScore[i].id) {
        products.push(menuItem);
      }
    });
  }
  return products;
};
