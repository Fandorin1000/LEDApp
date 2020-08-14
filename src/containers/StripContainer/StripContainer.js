import React, { Component } from 'react'
import classes from './StripContainer.module.scss';
import Strip from '../../components/Strip/Strip';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class StripContainer extends Component {
  componentDidMount() {
    this.props.onGetStripRequest(this.props.match.params.stripId)
  }
  addToBagProductHandler = product => {
    const { bagArray } = this.props;
    const result = bagArray.map(element => element.id === product.id);
    console.log('result', result)
    this.props.onAddToBagProduct(product)
  }
  render() {
    return (
      <div className={classes.stripContainer}>
        <Strip {...this.props} clickedBtn={(product) => this.addToBagProductHandler(product)} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  strip: state.stripsPage.strip,
  isWaitGetStrip: state.UIPage.isWaitGetStrip,
  bagArray: state.bagPage.bagArray
})
const mapDispatchToProps = dispatch => ({
  onGetStripRequest: (id) => dispatch(actions.getStripRequest(id)),
  onAddToBagProduct: (product) => dispatch(actions.addToBagProductStart(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(StripContainer);
