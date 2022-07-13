import getProducts from "../products/getProducts.js";
import { showCart } from "../../cart.js";
import createMenu from "../common/createMenu.js";

export default function deleteButton(items) {
  const deleteAllBtn = document.querySelector("#deleteAll");

  if (items === 0) {
    deleteAllBtn.style.display = "none";
  }
  deleteAllBtn.addEventListener("click", deleteCart);

  function deleteCart() {
    if (confirm("Are you really sure?")) {
      localStorage.removeItem("cart");
      deleteAllBtn.style.display = "none";
      showCart();
      createMenu();
      getProducts([]);
    }
  }
}
