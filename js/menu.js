const menuButton = document.querySelectorAll(".meanu-search-categories button");

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

const menuSectionItems = document.querySelector(".menu-section-items");

function displayMenuItems(item) {
  const card = `
        <div class="menu-item">
          <img src=${item.img} alt=${item.alt} />
            <div class="menu-item-details">
              <h3 class="item-name">${item.name}</h3>
              <p class="description">
                ${item.description}
              </p>
              <p class="price">Price:${item.price}</p>
              <button class="add-to-cart hidden">Add to Cart</button>
            </div>
        </div>
        `;
  return card;
}
function fetchData() {
  fetch("menu.json")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((item) => {
        const cardItem = displayMenuItems(item);
        menuSectionItems.innerHTML += cardItem;
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
fetchData();
