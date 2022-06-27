import displayMessage from "../common/displayMessage.js";
import { getExistingFeatured } from "../utils/featuredFunctions.js";
import { EMPTY_FILTER_RESULTS } from "../../settings/emptyFilter.js";
import { baseUrl } from "../../settings/api.js";

export default function getProducts(data) {
  const element = document.querySelector(".products-container");
  const featured = getExistingFeatured();
  element.innerHTML = ``;

  if (data.length === 0) {
    displayMessage("warning", EMPTY_FILTER_RESULTS, ".products-container");
  }

  data.forEach((products) => {
    let cssClass = "far";

    const doesFeaturedExist = featured.find((star) => {
      return parseInt(star.id) === products.id;
    });

    if (doesFeaturedExist) {
      cssClass = "fas";
    }
    element.innerHTML += `
        <div class="col">
            <div class="card mb-3">
                <div class="card-body products">
                    <i class="${cssClass} fa-star mb-3" 
                    data-id="${products.id}" 
                    data-title="${products.title}"
                    data-image="${products.image.formats.small.url}"
                    data-price="${products.price}"></i>  
                    <img class="card-img-top"  src="${
                      baseUrl + products.image.formats.small.url
                    }">
                    <h5 class="card-title mb-3">${products.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Price: ${
                      products.price
                    }</h6>
                    </div>
            </div>
        </div>`;
  });

  const starButtons = document.querySelectorAll(".products i");

  starButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick() {
    this.classList.toggle("fas");
    this.classList.toggle("far");

    console.log(this.dataset);
    const id = this.dataset.id;
    const title = this.dataset.title;
    const image = this.dataset.image;
    const price = this.dataset.price;

    const currentStars = getExistingFeatured();

    const starExist = currentStars.find((star) => {
      return star.id === id;
    });

    if (!starExist) {
      const storage = {
        id: id,
        title: title,
        image: image,
        price: price,
      };
      currentStars.push(storage);
      saveStars(currentStars);
    } else {
      const nexStar = currentStars.filter((star) => star.id !== id);
      saveStars(nexStar);
    }
  }

  function saveStars(stars) {
    localStorage.setItem("featured", JSON.stringify(stars));
  }
}
