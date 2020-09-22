export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove("ativo");
    });
    console.log("click");
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((item, itemIndex) => {
      item.addEventListener("click", () => {
        activeTab(itemIndex);
      });
    });
  }
}
