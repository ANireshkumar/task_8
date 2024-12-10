const apiUrl = "https://fakestoreapi.com/products";
const searchInput = document.getElementById("search-input");
const productGrid = document.getElementById("product-grid");
let products = [];

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    products = data;
    renderProducts(products);
  });

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  });
  renderProducts(filteredProducts);
});

function renderProducts(products) {
  productGrid.innerHTML = "";
  products.forEach((product) => {
    const productCard = `
      <div class="bg-white rounded-lg shadow-md p-4">
        <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover rounded-t-lg">
        <h2 class="text-lg font-bold mb-2">${product.title}</h2>
        <p class="text-gray-700">${product.description}</p>
        <p class="text-lg font-bold">$${product.price}</p>
      </div>
    `;
    productGrid.innerHTML += productCard;
  });
}
