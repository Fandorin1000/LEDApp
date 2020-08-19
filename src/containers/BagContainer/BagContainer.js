import React, { Component } from 'react';
import classes from './BagContainer.module.scss';
import Bag from '../../components/Bag/Bag';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class BagContainer extends Component {
  componentDidMount() {
    const { bagArray } = this.props
    if (bagArray.length === 0) {
      this.props.onGetProductsFromLS()
    }
  }
  increasedMetersAndPriceHandler = (id, price) => {
    this.props.onIncreasedMetersAndPrice(id, price)
  }
  decreasedMetersAndPriceHandler = (id, price, currentPrice) => {
    if (currentPrice - price - 1 <= 0) {
      this.deleteElementFromBagHandler(id)
    } else {
      this.props.onDecreasedMetersAndPrice(id, price)
    }

  }
  deleteElementFromBagHandler = (id) => {
    this.props.onDeleteElementFromBag(id)
  }
  render() {
    const { bagArray } = this.props;
    let title;
    title = <div className={classes.bagContainerTitle}><h2>Корзина</h2></div>
    return (
      <div className={classes.bagContainer}>
        {bagArray.length > 0 && title}
        <Bag {...this.props}
          deleteFromBag={(id) => this.deleteElementFromBagHandler(id)}
          increased={(id, price) => this.increasedMetersAndPriceHandler(id, price)}
          decreased={(id, price, currentPrice) => this.decreasedMetersAndPriceHandler(id, price, currentPrice)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bagArray: state.bagPage.bagArray,
  isLoading: state.UIPage.isLoading

})
const mapDispatchToProps = dispatch => ({
  onGetProductsFromLS: () => dispatch(actions.getProductsFromLS()),
  onIncreasedMetersAndPrice: (id, price) => dispatch(actions.increasedMetersAndPrice(id, price)),
  onDecreasedMetersAndPrice: (id, price) => dispatch(actions.decreasedMetersAndPrice(id, price)),
  onDeleteElementFromBag: (id) => dispatch(actions.deleteElementFromBagStart(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(BagContainer);