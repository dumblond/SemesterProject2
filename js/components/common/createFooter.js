export default function createFooter() {
  const container = document.querySelector("footer");

  container.innerHTML = ` 
  <div class="footer container">
    <div class="mb-4">
      <a href="#" class="footer__link">shoeshop@email.com</a>
    </div>
    <div class="mb-4">
      <a href="#"><i class="fa-brands fa-facebook-square"></i></a>
      <a href="#"><i class="fa-brands fa-instagram-square"></i></a>
    </div>
    <div class="newsletter column mb-4">
      <form action="">
        <div class="col mb-3 text-center">
          <label for="e-mail">Get our newsletter</label>
        </div>
        <div class="col">
          <input
            type="email"
            name="e-mail"
            id="e-mail"
            placeholder="example@email.com"
          />
        </div>
      </form>
    </div>
  </div>
    `;
}
