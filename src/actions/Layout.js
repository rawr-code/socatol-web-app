export const OPEN_SIDENAV = 'OPEN_SIDENAV';
export const CLOSE_SIDENAV = 'CLOSE_SIDENAV';

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
