import { getUsername } from "../utils/storage.js";
import logoutAdmin from "./logoutAdmin.js";
import { getCartCount } from "../utils/cartFunctions.js";

export default function createMenu() {
  const { pathname } = document.location;

  const container = document.querySelector(".menu-container");

  const username = getUsername();

  let authLink = `
  <li class="nav-item">
  <a href="login.html" class="nav-link ${
    pathname === "/login.html" ? "active" : ""
  } ">Login</a>
  </li>`;

  if (username) {
    authLink = `
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>Hi ${username}</span>
      </a>
      <ul
        class="dropdown-menu"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="admin.html">Admin</a>
        </li>
        <li><a class="dropdown-item" id="logout" href="/">Logout</a></li>
      </ul>
    </li>`;
  }

  container.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand nav__logo" href="index.html">ShoeShop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="/" class="${
              pathname === "/" ? "active" : ""
            } nav-link" aria-current="page">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="products.html" class="${
              pathname === "/products.html" ? "active" : ""
            } nav-link" >Products</a>
          </li>
          <li class="nav-item">
            <a href="cart.html" class="${
              pathname === "/cart.html" ? "active" : ""
            } nav-link">
              <span>Cart</span>
              <span class="badge text-bg-secondary">${getCartCount()}</span>
            </a>
          </li>
           ${authLink}
          </li>
        </ul>
      </div>
    </div>
  </nav>`;

  logoutAdmin();
}
