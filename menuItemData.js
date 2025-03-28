const menuItemData = [
  {
    id: 1,
    img: "assets/best-seller-1.jpg",
    alt: "menu item",
    name: "Chicken Tikka Masala",
    description: "chicken cooked in spicy tomato gravy with cream.",
    price: "12",
  },
  {
    id: 2,
    img: "assets/best-seller-2.jpg",
    alt: "menu item",
    name: "Lamb Rogan Josh",
    description: "lamb cooked in a rich and flavorful sauce.",
    price: "15",
  },
  {
    id: 3,
    img: "assets/best-seller-3.jpg",
    alt: "menu item",
    name: "Butter Chicken",
    description: "chicken cooked in creamy tomato sauce.",
    price: "13",
  },
  {
    id: 4,
    img: "assets/best-seller-1.jpg",
    alt: "menu item",
    name: "Chole Bhature",
    description: "spicy chickpeas served with fried bread.",
    price: "8",
  },
  {
    id: 5,
    img: "assets/best-seller-2.jpg",
    alt: "menu item",
    name: "Biryani",
    description: "fragrant rice cooked with spices and meat.",
    price: "14",
  },
  {
    id: 6,
    img: "assets/best-seller-3.jpg",
    alt: "menu item",
    name: "Dosa",
    description: "crispy rice pancake served with chutney and sambar.",
    price: "7",
  },
  {
    id: 7,
    img: "assets/best-seller-1.jpg",
    alt: "menu item",
    name: "Samosa",
    description: "fried pastry filled with spiced potatoes and peas.",
    price: "5",
  },
  {
    id: 8,
    img: "assets/best-seller-2.jpg",
    alt: "menu item",
    name: "Gulab Jamun",
    description: "sweet milk dumplings soaked in syrup.",
    price: "6",
  },
  {
    id: 9,
    img: "assets/best-seller-3.jpg",
    alt: "menu item",
    name: "Rasgulla",
    description: "soft cheese balls soaked in syrup.",
    price: "6",
  },
];
const productToken = [];
const tokenizeProducts = () => {
  for (let i = 0; i < menuItemData.length; i++) {
    const title = menuItemData[i].name.replace(/[0-9]/, "");
    const description = menuItemData[i].description.replace(/[0-9]/, "");
    const token = title.split(" ").concat(description.split(" "));
    productToken.push({
      id: menuItemData[i].id,
      tokens: token,
    });
  }
};
tokenizeProducts();
