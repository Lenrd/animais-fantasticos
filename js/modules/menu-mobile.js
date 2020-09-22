export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.toggle("ativo");
    menuButton.classList.toggle("ativo");
  }
  eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
}
