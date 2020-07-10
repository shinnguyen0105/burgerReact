import React, { useState } from 'react';
import { connect } from 'react-redux';
import Aux from '../Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
  // state = {
  //   showSideDrawer: false,
  // };
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Aux>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        isAuth={props.isAuthenticated}
      />
      <SideDrawer
        open={showSideDrawer}
        isAuth={props.isAuthenticated}
        closed={sideDrawerClosedHandler}
      />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(Layout);
