import React, { Component } from 'react'
import classes from './app.module.scss';
import { Switch, Route, withRouter } from 'react-router';
import StripsContainer from './containers/StripsContainer/StripsContainer';
import StripContainer from './containers/StripContainer/StripContainer';
import HeadContainer from './containers/HeadContainer/HeadContainer';
import FooterContainer from './containers/FooterContainer/FooterContainer';
import Backdrop from './components/UI/Backdrop/Backdrop';
import * as actions from './store/actions/index';
import { compose } from 'redux';
import { connect } from 'react-redux';
import BagContainer from './containers/BagContainer/BagContainer';
import OrderContainer from './containers/OrderContainer/OrderContainer';
import ErrorModal from './components/Modals/ErrorModal/ErrorModal';
class App extends Component {
  constructor(props) {
    super(props);
    this.closeAllModalsHandler = this.closeAllModalsHandler.bind(this)
  }
  async componentDidMount() {
    const { bagArray } = this.props
    if (bagArray.length === 0) {
      await this.props.onGetProductsFromLS()
    }
    if (document.documentElement.offsetWidth > 843) {
      await this.props.onToggleIsShowSortList()
      await this.props.onToggleIsShowFilterList()
    }
  }
  closeAllModalsHandler = () => {
    const { onCloseAllModals } = this.props;
    onCloseAllModals()
  }
  render() {
    const { isShowBackdrop, error } = this.props;
    return (
      <div className={classes.app}>
        <Backdrop
          isShowBackdrop={isShowBackdrop}
          clicked={this.closeAllModalsHandler}
        />
        <ErrorModal error={error} />

        <HeadContainer />
        <div className={classes.main}>
          <Switch>
            <Route
              path="/strip/:stripId?"
              component={StripContainer} />
            <Route
              path="/about"
              render={() => <div>About</div>} />
            <Route
              path="/contacts"
              render={() => <div>Contacts</div>} />
            <Route
              path="/delivery"
              render={() => <div>Delivery</div>} />
            <Route
              path="/bag"
              component={BagContainer} />
            <Route
              path="/order"
              component={OrderContainer} />
            <Route exact path="/" component={StripsContainer} />
          </Switch>
        </div>
        <FooterContainer />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isShowBackdrop: state.UIPage.isShowBackdrop,
  bagArray: state.bagPage.bagArray,
  error: state.UIPage.error
})
const mapDispatchToProps = dispatch => ({
  onCloseAllModals: () => dispatch(actions.closeAllModals()),
  onGetProductsFromLS: () => dispatch(actions.getProductsFromLS()),
  onToggleIsShowSortList: () => dispatch(actions.toggleIsShowSortList()),
  onToggleIsShowFilterList: () => dispatch(actions.toggleIsShowFilterList())
})
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(App)