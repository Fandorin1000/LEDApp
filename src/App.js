import React, { Component, Suspense } from 'react'
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
import ErrorModal from './components/Modals/ErrorModal/ErrorModal';
import Spinner from './components/UI/Spinner/Spinner';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
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

    //lazy load start
    const lazyLoadingBox = (
      <div className={classes.centeredLoading}>
        <Spinner />
      </div>
    )
    const BagContainer = React.lazy(() => import('./containers/BagContainer/BagContainer'))
    const OrderContainer = React.lazy(() => import('./containers/OrderContainer/OrderContainer'))
    //lazy load end 
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
              path="/strips/strip/:stripId?"
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
              render={() => (
                <Suspense fallback={lazyLoadingBox}><BagContainer /></Suspense>)} />
            <Route
              path="/order"
              render={() => (
                <Suspense fallback={lazyLoadingBox}><OrderContainer /></Suspense>)} />
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
  withRouter)(App)