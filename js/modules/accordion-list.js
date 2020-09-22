export default function initAccordionList() {
  const faqList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = "ativo";
  faqList[0].classList.add(activeClass);
  faqList[0].nextElementSibling.classList.add(activeClass);

  function accordionList(listItem) {
    listItem.classList.toggle(activeClass);
    listItem.nextElementSibling.classList.toggle(activeClass);
  }
  faqList.forEach((item) => {
    item.addEventListener("click", () => {
      accordionList(item);
    });
  });
}
