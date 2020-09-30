import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add("ativo");
    this.menuButton.classList.add("ativo");
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove("ativo");
      this.menuButton.classList.remove("ativo");
    });
  }

  addMenuEvent() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) this.addMenuEvent();
    return this;
  }
}
