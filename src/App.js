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
class App extends Component {
  constructor(props) {
    super(props);
    this.closeAllModalsHandler = this.closeAllModalsHandler.bind(this)
  }
  closeAllModalsHandler = () => {
    const { onCloseAllModals } = this.props;
    onCloseAllModals()
  }
  render() {
    const { isShowBackdrop } = this.props;
    return (
      <div className={classes.app}>
        <Backdrop
          isShowBackdrop={isShowBackdrop}
          clicked={this.closeAllModalsHandler}
        />
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
  isShowBackdrop: state.UIPage.isShowBackdrop
})
const mapDispatchToProps = dispatch => ({
  onCloseAllModals: () => dispatch(actions.closeAllModals())
})
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(App)