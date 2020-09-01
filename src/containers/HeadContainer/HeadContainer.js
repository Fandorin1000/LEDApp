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
import cartIcon from '../../assets/cartIcon.jpg';
import cartIconGreen from '../../assets/cartIconGreen.jpg';
class HeadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    }
    this.toMainMoveHandler = this.toMainMoveHandler.bind(this);
    this.openSideDrawerHandler = this.openSideDrawerHandler.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollObserver)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollObserver)
  }
  //scroll header fixed
  scrollObserver = () => {
    console.log(window.scrollY)
    if (window.scrollY > 140) {
      this.setState({ fixed: true })
    } else {
      this.setState({ fixed: false })
    }
  }
  toMainMoveHandler = () => {
    const { history } = this.props;
    history.push("/")
  }
  toBagMoveHandler = () => {
    this.props.history.push('/bag')
  }
  openSideDrawerHandler = (param) => {
    const { onOpenSideDrawerHandler } = this.props
    onOpenSideDrawerHandler(param)
  }
  closeAllModalHandler = () => {
    this.props.onCloseAllModals()
  }
  render() {
    const { isShowSideDrawer, bagArray } = this.props;
    const cssClassesCartIconBox = [classes.onlyMobile, classes.cartIconBox].join(' ');
    return (
      <div
        className={this.state.fixed ? [classes.headContainer, classes.fixed].join(' ') : [classes.headContainer].join(' ')}>
        <div className={cssClassesCartIconBox}
          onClick={this.toBagMoveHandler}
          title="корзина">
          {bagArray.length > 0 ?
            <img src={cartIconGreen} alt="cart icon" /> :
            <img src={cartIcon} alt="cart icon" />}
        </div>
        <div
          title="На главную"
          className={classes.logoBox}
          onClick={this.toMainMoveHandler}>
          <img
            src='https://led-stil.com/image/catalog/led/logo1.png'
            alt="led-stil logo elephant" />
        </div>
        <DrawerToggle clicked={this.openSideDrawerHandler} />
        <NavigationItems isShowSideDrawer={isShowSideDrawer}>
          <NavigationItem link="/About">О компании</NavigationItem>
          <NavigationItem link="/Contacts">Контакты</NavigationItem>
          <NavigationItem link="/Delivery">Доставка</NavigationItem>
          <NavigationItem link="/Bag">
            Корзина {bagArray.length > 0 &&
              <span>({bagArray.length} товаров)</span>}</NavigationItem>
        </NavigationItems>
        <SideDrawer
          bagArray={bagArray}
          clicked={this.closeAllModalHandler}
          isShowSideDrawer={isShowSideDrawer}
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isShowSideDrawer: state.UIPage.isShowSideDrawer,
  bagArray: state.bagPage.bagArray
})
const mapDispatchToProps = dispatch => ({
  onOpenSideDrawerHandler: () => dispatch(actions.openSideDrawer()),
  onCloseAllModals: () => dispatch(actions.closeAllModals())
})
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(HeadContainer)

