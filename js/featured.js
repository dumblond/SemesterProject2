import { baseUrl } from "./settings/api.js";
import getFeatured from "./components/products/getFeatured.js";
import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";
import createFooter from "./components/common/createFooter.js";

const container = ".products-container";

createMenu();
createFooter();

async function fetchProducts() {
  try {
    const response = await fetch(baseUrl + "/products");
    const item = await response.json();

    getFeatured(item);
  } catch (error) {
    console.log(error);
    displayMessage("danger", "Sorry, something is wrong!", container);
  }
}
fetchProducts();
