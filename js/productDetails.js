import { baseUrl } from "./settings/api.js";
import getProductDetails from "./components/products/getProductDetails.js";
import displayMessage from "./components/common/displayMessage.js";

const container = ".productDetail-container";

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
