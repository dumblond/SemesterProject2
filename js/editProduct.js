import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";
import createFooter from "./components/common/createFooter.js";
import { getToken } from "./components/utils/storage.js";
import deleteButtonAdmin from "./components/buttons/deleteButtonAdmin.js";

if (getToken() === null) {
  location.href = "login.html";
}

createMenu();
createFooter();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const productUrl = baseUrl + "/products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const featured = document.querySelector("#featured");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();
    console.log(details);

    const imageText = details.image
      ? baseUrl + details.image.formats.small.url
      : details.image_url;

    title.value = details.title;
    price.value = details.price;
    description.value = details.description;
    image.value = imageText;
    featured.checked = details.featured;
    idInput.value = details.id;

    deleteButtonAdmin(details.id);
  } catch (error) {
    console.log(error);
  } finally {
    form.style.display = "block";
  }
})();

form.addEventListener("submit", submitFormEdit);

function submitFormEdit(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const imageValue = image.value.trim();
  const featuredValue = featured.checked;
  const idValue = idInput.value;

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0 ||
    imageValue.length === 0
  ) {
    return displayMessage(
      "warning",
      "Please provide proper values",
      ".message-container"
    );
  }
  updateProduct(
    titleValue,
    priceValue,
    descriptionValue,
    imageValue,
    featuredValue,
    idValue
  );
}

async function updateProduct(title, price, description, image, featured, id) {
  const url = baseUrl + "/products/" + id;
  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image_url: image,
    featured: featured,
  });

  const token = getToken();

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage("success", "Product is updated", ".message-container");
    }

    if (json.error) {
      displayMessage("danger", json.message, ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
