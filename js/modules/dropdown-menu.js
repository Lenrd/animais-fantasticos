import clickOutside from "./outsideclick.js";

export default class DropdownMenu {
  constructor(target, events) {
    this.dropdownMenus = document.querySelectorAll(target);
    this.activeClass = "ativo";
    // define touchstart e click como padrões de event
    if (this.events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa dropdown menu e outsideClick
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    clickOutside(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdown menu
  addDropdownEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownEvent();
    }
    return this;
  }
}
