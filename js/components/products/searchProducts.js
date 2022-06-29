import getProducts from "./getProducts.js";

export default function searchProducts(data) {
  const searchProducts = document.querySelector("input#title");
  searchProducts.addEventListener("keyup", filterProducts);

  function filterProducts() {
    const searchValue = searchProducts.value.trim();

    const filteredData = data.filter((item) => {
      if (searchValue === "") {
        return data;
      }

      if (
        item.title.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });

    getProducts(filteredData);
  }
}
