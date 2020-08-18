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
    let response = null;
    if (bagArray.length === 0) {
      this.props.onAddToBagProduct(bagArray, product)
    } else if (bagArray.length > 0) {
      const idArray = []
      bagArray.map(element => idArray.push(element.id));
      response = idArray.includes(product.id)
      response ? alert('Товар уже в корзине!') : this.props.onAddToBagProduct(bagArray, product)
    }
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
  onAddToBagProduct: (bagArray, product) => dispatch(actions.addToBagProductStart(bagArray, product))
})
export default connect(mapStateToProps, mapDispatchToProps)(StripContainer);
