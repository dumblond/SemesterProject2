import { baseUrl } from "../../settings/api.js";
import { getToken } from "../utils/storage.js";

export default function deleteButtonAdmin(id) {
  const button = document.querySelector("#deleteItemAdmin");

  button.onclick = async function () {
    const doDelete = confirm("Are you sure you want to delete this item?");

    if (doDelete) {
      const url = baseUrl + "/products/" + id;

      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(url, options);
        const json = await response.json();

        location.href = "admin.html";

        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
  };
}
