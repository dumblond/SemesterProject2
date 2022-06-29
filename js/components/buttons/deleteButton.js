import getProducts from "../products/getProducts.js";

export default function deleteButton(items) {
  const deleteAllBtn = document.querySelector("#deleteAll");

  if (items === 0) {
    deleteAllBtn.style.display = "none";
  }
  deleteAllBtn.addEventListener("click", deleteCart);

  function deleteCart() {
    if (confirm("Are you really sure?")) {
      localStorage.clear();
      deleteAllBtn.style.display = "none";
      getProducts([]);
    }
  }
}
