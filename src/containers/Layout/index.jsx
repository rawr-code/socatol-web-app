import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Components
import Appbar from '../../components/Appbar';
import SideNav from '../../components/SideNav';

// Actions
import {
  openSideNav,
  closeSideNav,
  selectItemMenu
} from '../../store/actions/Layout';

class LayoutContainer extends Component {
  render() {
    const { Layout } = this.props.state;
    const { sideNavOpen, menuSelectedItem } = Layout;
    const { openNav, closeNav, selectItem } = this.props.actions;
    return (
      <Fragment>
        <Appbar openSideNav={openNav} />
        <SideNav
          selectedItem={menuSelectedItem}
          handleClick={selectItem}
          mobileOpen={sideNavOpen}
          handleClose={closeNav}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ Layout }) => ({
  state: { Layout }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    openNav: () => dispatch(openSideNav()),
    closeNav: () => dispatch(closeSideNav()),
    selectItem: index => dispatch(selectItemMenu(index))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutContainer);
