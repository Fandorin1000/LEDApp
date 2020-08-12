import React, { Component } from 'react'
import classes from './app.module.scss';
import { Switch, Route, withRouter } from 'react-router';
import StripsContainer from './containers/StripsContainer/StripsContainer';
import StripContainer from './containers/StripContainer/StripContainer';
import HeadContainer from './containers/HeadContainer/HeadContainer';
import FooterContainer from './containers/FooterContainer/FooterContainer';

class App extends Component {
  render() {
    return (
      <div className={classes.app}>
        <HeadContainer />
        <div className={classes.main}>
          <Switch>
            <Route
              path={`/strip/:stripId?`}
              component={StripContainer} />
            <Route exact path="/" component={StripsContainer} />
          </Switch>
        </div>
        <FooterContainer />
      </div>
    )
  }
}

export default withRouter(App);