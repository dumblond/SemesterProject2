export default function displayMessage(messageType, message, targetElement) {
  const element = document.querySelector(targetElement);

  element.innerHTML = `<div class="alert alert-${messageType}">${message}</div>`;
}
