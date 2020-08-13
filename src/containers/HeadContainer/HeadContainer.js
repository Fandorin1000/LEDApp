import React, { Component } from 'react';
import classes from './HeadContainer.module.scss';
import DrawerToggle from '../../components/Navigation/DrawerToggle/DrawerToggle';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import NavigationItem from '../../components/Navigation/NavigationItem/NavigationItem';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class HeadContainer extends Component {
  constructor(props) {
    super(props);
    this.toMainMoveHandler = this.toMainMoveHandler.bind(this);
    this.openSideDrawerHandler = this.openSideDrawerHandler.bind(this);
  }
  toMainMoveHandler = () => {
    const { history } = this.props;
    history.push("/")
  }
  openSideDrawerHandler = (param) => {
    const { onOpenSideDrawerHandler } = this.props
    onOpenSideDrawerHandler(param)
  }
  closeAllModalHandler = () => {
    this.props.onCloseAllModals()
  }
  render() {
    const { isShowSideDrawer } = this.props
    return (
      <div className={classes.headContainer}>
        <div
          title="На главную"
          className={classes.logoBox}>
          <img
            onClick={this.toMainMoveHandler}
            src='https://led-stil.com/image/catalog/led/logo1.png'
            alt="led-stil logo elephant" />
        </div>
        <DrawerToggle clicked={this.openSideDrawerHandler} />
        <NavigationItems isShowSideDrawer={isShowSideDrawer}>
          <NavigationItem link="/About">О компании</NavigationItem>
          <NavigationItem link="/Contacts">Контакты</NavigationItem>
          <NavigationItem link="/Delivery">Доставка</NavigationItem>
        </NavigationItems>
        <SideDrawer
          clicked={this.closeAllModalHandler}
          isShowSideDrawer={isShowSideDrawer}
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isShowSideDrawer: state.UIPage.isShowSideDrawer
})
const mapDispatchToProps = dispatch => ({
  onOpenSideDrawerHandler: () => dispatch(actions.openSideDrawer()),
  onCloseAllModals: () => dispatch(actions.closeAllModals())
})
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(HeadContainer)

