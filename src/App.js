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
class App extends Component {
  constructor(props) {
    super(props);
    this.toggleIsShowBackdropHandler = this.toggleIsShowBackdropHandler.bind(this)
  }
  toggleIsShowBackdropHandler = status => {
    const { onToggleIsShowBackdrop } = this.props;
    onToggleIsShowBackdrop(status)
  }
  render() {
    const { isShowBackdrop } = this.props;
    return (
      <div className={classes.app}>
        <Backdrop
          isShowBackdrop={isShowBackdrop}
          clicked={() => this.toggleIsShowBackdropHandler(false)}
        />
        <HeadContainer />
        <div className={classes.main}>
          <Switch>
            <Route
              path={`/strip/:stripId?`}
              component={StripContainer} />
            <Route
              path={`/about`}
              render={() => <div>About</div>} />
            <Route
              path={`/contacts`}
              render={() => <div>Contacts</div>} />
            <Route
              path={`/delivery`}
              render={() => <div>Delivery</div>} />
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
  onToggleIsShowBackdrop: (status) => dispatch(actions.toggleIsShowBackdrop(status))
})
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(App)