export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.activeClass = "ativo";

    this.animaScroll = this.animaScroll.bind(this);
  }

  verificaSection(section) {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - this.windowMetade < 0;
    if (isSectionVisible) {
      section.classList.add(this.activeClass);
    } else if (section.classList.contains(this.activeClass)) {
      section.classList.remove(this.activeClass);
    }
  }

  animaScroll() {
    this.sections.forEach((section) => {
      this.verificaSection(section);
    });
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
      window.addEventListener("scroll", this.animaScroll);
    }
  }
}
