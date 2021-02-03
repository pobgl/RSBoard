import signOut from '@js/firebase/auth/signOut.js';
import createDomElement from '@js/utils/createDomElement.js';
import darkModeToggleRender from '@js/components/darkModeToggle/darkModeToggleRender.js';
import { ListNavBoard } from '@js/components/listBoard/ListNavBoard.js';
import { textBoardButton} from '@js/constants/constants.js';

export default function renderMain() {
  const aSide = createDomElement('aside', '', '', document.body);

  const title = createDomElement('div', 'menu-title', '', aSide);
  const burger = createDomElement('div', 'burger', '', title);
  createDomElement('span', '', '', burger);

  const container = createDomElement('div', 'avatar__container', '', title);
  createDomElement('div', 'avatar', '', container);
  createDomElement('div', 'question', '?', container);

  const nav = createDomElement('nav', 'nav', '', aSide);
  const navTittle = createDomElement('div', 'nav_title', '', nav);
  createDomElement('span', 'nav_title__logo', 'D', navTittle);
  createDomElement('span', 'nav_title__content', 'desks', navTittle);

  const navBoards = createDomElement('div', 'nav_boards', '', nav);
  const newListNavBoard = new ListNavBoard(textBoardButton, navBoards);
    newListNavBoard.render();
  const info = createDomElement('div', 'nav_info', '', nav);
  createDomElement('p', 'info__mail', 'mail', info);
  createDomElement('button', 'info__btn', 'sign out', info, 'id', 'signOutBtn');
  
  const mainWrapper = createDomElement('section', 'main-wrapper', '', document.body);

  const header = createDomElement('section', 'header', '', mainWrapper);
  createDomElement('div', 'header_title', 'RSboard', header);
  // darkModeToggleRender();
  
  const clock = createDomElement('div', 'header_clock', '', header);
  createDomElement('time', 'header_clock__time', '', clock, 'id', 'time');
  createDomElement('time', 'header_clock__date', '', clock, 'id', 'date');

  const boardWrapper = createDomElement('div', 'board-wrapper', '', mainWrapper);
  signOut();
}
