import ScrollSuave from "./modules/scroll-suave.js";
import AccordionList from "./modules/accordion-list.js";
import TabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initScrollAnimation from "./modules/scroll-animation.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMobileMenu from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="@"]');
scrollSuave.init();
const accordionList = new AccordionList('[data-anime="accordion"] dt');
accordionList.init();
const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

initScrollAnimation();
initModal();
initTooltip();
initDropdownMenu();
initMobileMenu();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
