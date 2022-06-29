import { baseUrl } from "./settings/api.js";
import getProducts from "./components/products/getProducts.js";
import displayMessage from "./components/common/displayMessage.js";
import searchProducts from "./components/products/searchProducts.js";

const container = ".products-container";

async function fetchProducts() {
  try {
    const response = await fetch(baseUrl + "/products");
    const item = await response.json();

    getProducts(item);
    searchProducts(item);
  } catch (error) {
    console.log(error);
    displayMessage("danger", "Sorry, something is wrong!", container);
  }
}
fetchProducts();
