export default function initScrollView() {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    // tras o elemento a vista
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Forma alternativa
    // const topo = section.offsetTop;
    // scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
