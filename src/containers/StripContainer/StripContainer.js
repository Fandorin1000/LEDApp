import React, { Component } from 'react'
import classes from './StripContainer.module.scss';
import Strip from '../../components/Strip/Strip';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class StripContainer extends Component {
  componentDidMount() {
    this.props.onGetStripRequest(this.props.match.params.stripId)
  }
  render() {
    console.log('render')
    return (
      <div className={classes.StripContainer}>
        <Strip {...this.props} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  strip: state.stripsPage.strip,
  isWaitGetStrip: state.UIPage.isWaitGetStrip
})
const mapDispatchToProps = dispatch => ({
  onGetStripRequest: (id) => dispatch(actions.getStripRequest(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(StripContainer);
