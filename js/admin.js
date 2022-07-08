import { baseUrl } from "./settings/api.js";
import getProductsToEdit from "./components/products/getProductsToEdit.js";
import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";
import createFooter from "./components/common/createFooter.js";

createMenu();
createFooter();

async function fetchProductsToEdit() {
  try {
    const response = await fetch(baseUrl + "/products");
    const item = await response.json();

    getProductsToEdit(item);
  } catch (error) {
    console.log(error);
    displayMessage("danger", "Sorry, something is wrong!", container);
  }
}
fetchProductsToEdit();
