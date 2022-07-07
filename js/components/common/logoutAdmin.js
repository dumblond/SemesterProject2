import { logout } from "../utils/storage.js";

export default function logoutAdmin() {
  const logoutButton = document.querySelector("#logout");

  if (logoutButton) {
    logoutButton.onclick = function () {
      const doLogout = confirm("Are you sure?");

      if (doLogout) {
        logout();
        location.href = "/";
      }
    };
  }
}
