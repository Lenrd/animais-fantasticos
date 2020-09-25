export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.active = "ativo";
  }

  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.active);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.active, direcao);
  }

  addNavEvent() {
    this.tabContent[0].classList.add(this.active);
    this.tabMenu.forEach((item, itemIndex) => {
      item.addEventListener("click", () => {
        this.activeTab(itemIndex);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addNavEvent();
    }
    return this;
  }
}
