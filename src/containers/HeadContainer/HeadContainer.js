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
import SearchForm from '../../components/Forms/SearchForm/SearchForm';
class HeadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    }
  }
  componentDidMount() {
    console.log()
    window.addEventListener('scroll', this.scrollObserver)
  }
  //scroll header fixed observer
  scrollObserver = () => {
    if (window.scrollY > 140 && window.innerWidth > 1024) {
      this.setState({ fixed: true })
    } else {
      this.setState({ fixed: false })
    }
  }
  //push to main page
  toMainMoveHandler = () => {
    const { history } = this.props;
    history.push("/")
    this.props.onGetStrips()
  }
  //push to bag
  toBagMoveHandler = () => {
    this.props.history.push('/bag')
  }
  openSideDrawerHandler = () => {
    const { onOpenSideDrawerHandler } = this.props
    onOpenSideDrawerHandler()
  }
  closeAllModalHandler = () => {
    this.props.onCloseAllModals()
  }
  render() {
    const { isShowSideDrawer, bagArray, strips, isShowSearchBox } = this.props;
    const cssClassesCartIconBox = [classes.onlyMobile, classes.cartIconBox].join(' ');
    return (
      <div
        className={this.state.fixed ?
          [classes.headContainer, classes.fixed].join(' ') :
          [classes.headContainer].join(' ')}>
        <div className={cssClassesCartIconBox}
          onClick={this.toBagMoveHandler}>
          {bagArray.length > 0 ?
            <img
              src={cartIconGreen}
              alt="cart icon"
              title="корзина" /> :
            <img
              src={cartIcon}
              alt="cart icon"
              title="корзина (пустая)" />}
        </div>
        <div
          title="На главную"
          className={classes.logoBox}
          onClick={this.toMainMoveHandler}>
          <img
            src='https://led-stil.com/image/catalog/led/logo1.png'
            alt="led-stil logo elephant" />
        </div>
        <div className={classes.onlyDesktop}>
          <SearchForm strips={strips} />
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
  bagArray: state.bagPage.bagArray,
  strips: state.stripsPage.strips
})
const mapDispatchToProps = dispatch => ({
  onOpenSideDrawerHandler: () => dispatch(actions.openSideDrawer()),
  onCloseAllModals: () => dispatch(actions.closeAllModals()),
  onGetStrips: () => dispatch(actions.getStripsRequest()),
})
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(HeadContainer)

