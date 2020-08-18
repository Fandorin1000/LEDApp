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
  render() {
    console.log('bag container', this.props.bagArray)
    return (
      <div className={classes.bagContainer}>
        <Bag {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bagArray: state.bagPage.bagArray,
  isLoading: state.UIPage.isLoading

})
const mapDispatchToProps = dispatch => ({
  onGetProductsFromLS: () => dispatch(actions.getProductsFromLS())
})
export default connect(mapStateToProps, mapDispatchToProps)(BagContainer);