import React, { Component } from 'react';
import classes from './BagContainer.module.scss';
import Bag from '../../components/Bag/Bag';
import { connect } from 'react-redux';

class BagContainer extends Component {
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
  bagArray: state.bagPage.bagArray
})
// const mapDispatchToProps = dispatch => ({

// })
export default connect(mapStateToProps)(BagContainer);