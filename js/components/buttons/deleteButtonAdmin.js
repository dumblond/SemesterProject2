import { baseUrl } from "../../settings/api.js";
import displayMessage from "../common/displayMessage.js";
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
        await fetch(url, options);

        location.href = "admin.html";
      } catch (error) {
        return displayMessage(
          "danger",
          "Something went wrong.",
          ".message-container"
        );
      }
    }
  };
}
