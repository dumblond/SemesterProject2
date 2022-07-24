import { baseUrl } from "./settings/api.js";
import getProducts from "./components/products/getProducts.js";
import displayMessage from "./components/common/displayMessage.js";
import searchProducts from "./components/products/searchProducts.js";
import createMenu from "./components/common/createMenu.js";
import createFooter from "./components/common/createFooter.js";

const container = ".products-container";

createMenu();
createFooter();

async function fetchProducts() {
  try {
    const response = await fetch(baseUrl + "/products");
    const item = await response.json();

    getProducts(item);
    searchProducts(item);
  } catch (error) {
    displayMessage("danger", "Sorry, something is wrong!", container);
  }
}
fetchProducts();
