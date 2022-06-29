import displayMessage from "../common/displayMessage.js";
import { EMPTY_FILTER_RESULTS } from "../../settings/emptyFilter.js";
import { baseUrl } from "../../settings/api.js";

export default function (data) {
  const element = document.querySelector(".productDetail-container");
  element.innerHTML = ``;

  if (data.length === 0) {
    displayMessage("warning", EMPTY_FILTER_RESULTS, ".productDetail-container");
  }

  console.log(data);

  element.innerHTML += `
        <div class="col">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="products.html">Products</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            ${data.title}
          </li>
        </ol>
      </nav>
            <div class="card mb-3">
                <div class="card-body products">
                    <img class="card-img-top"  src="${
                      baseUrl + data.image.formats.large.url
                    }">
                    <h5 class="card-title mt-4">${data.title}</h5>
                    <h6 class="card-subtitle mt-4">Price: ${data.price}</h6>
                    <p class= "card-text mt-4">  Description: ${
                      data.description
                    }</p>
                        <form class="row g-3">
                        <label for="validationDefault" class="form-label"></label>
                        <select class="form-select" id="validationDefault" required>
                            <option selected disabled value="">Select size</option>
                            <option value="1">36</option>
                            <option value="2">37</option>
                            <option value="3">38</option>
                        </select>
                        <button class="btn btn-primary" type="submit">Put in cart</button>  
                        </form>
                </div> 
            </div>
        </div>`;
}
