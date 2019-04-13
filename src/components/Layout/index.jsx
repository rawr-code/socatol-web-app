import React, { Component, Fragment } from 'react';

// Components
import HeaderBar from './HeaderBar';

class LayoutContainer extends Component {
  render() {
    return (
      <Fragment>
        <HeaderBar openSideNav={false} />
        {/* <SideNav
          selectedItem={menuSelectedItem}
          handleClick={selectItem}
          mobileOpen={sideNavOpen}
          handleClose={closeNav}
        /> */}
      </Fragment>
    );
  }
}

export default LayoutContainer;
