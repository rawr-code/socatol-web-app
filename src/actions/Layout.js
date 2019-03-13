export const OPEN_SIDENAV = 'OPEN_SIDENAV';
export const CLOSE_SIDENAV = 'CLOSE_SIDENAV';
export const SELECT_ITEM_MENU = 'SELECT_ITEM_MENU';

export function openSideNav() {
  return {
    type: OPEN_SIDENAV
  };
}

export function closeSideNav() {
  return {
    type: CLOSE_SIDENAV
  };
}

export function selectItemMenu(payload) {
  return {
    type: SELECT_ITEM_MENU,
    payload
  };
}
