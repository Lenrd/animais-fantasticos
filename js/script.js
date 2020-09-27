import ScrollSuave from "./modules/scroll-suave.js";
import AccordionList from "./modules/accordion-list.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import ScrollAnimation from "./modules/scroll-animation.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import initMobileMenu from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
// import fetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="@"]');
scrollSuave.init();

const accordionList = new AccordionList('[data-anime="accordion"] dt');
accordionList.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const scrollAnimation = new ScrollAnimation('[data-anime="scroll"]');
scrollAnimation.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const dropdown = new DropdownMenu("[data-dropdown]");
dropdown.init();

initMobileMenu();
initFuncionamento();
fetchAnimais("./animaisApi.json", ".numeros-grid");
// fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
