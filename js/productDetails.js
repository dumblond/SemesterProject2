import { baseUrl } from "./settings/api.js";
import getProductDetails from "./components/products/getProductDetails.js";
import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";
import createFooter from "./components/common/createFooter.js";

const container = ".productDetail-container";

createMenu();
createFooter();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

async function fetchProductsDetails() {
  try {
    const response = await fetch(baseUrl + "/products/" + params.get("id"));
    const item = await response.json();

    document.title = item.title;

    getProductDetails(item);
  } catch (error) {
    console.log(error);
    displayMessage("danger", "Sorry, something is wrong!", container);
  }
}
fetchProductsDetails();
