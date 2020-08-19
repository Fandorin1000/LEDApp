import React, { Component } from 'react'
import classes from './StripsContainer.module.scss';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import StripsElement from '../../components/StripsElement/StripsElement';
import Spinner from '../../components/UI/Spinner/Spinner';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';


class StripsContainer extends Component {
  componentDidMount() {
    this.props.onGetStrips()
  }
  sortedStripsStartLowPriceHandler = () => this.props.onSortedStripsStartLowPrice()
  sortedStripsStartHighPriceHandler = () => this.props.onSortedStripsStartHighPrice()
  sortedStripsStartHighPowerHandler = () => this.props.onSortedStripsStartHighPower()
  sortedStripsStartLowPowerHandler = () => this.props.onSortedStripsStartLowPower()
  render() {
    const { isLoading, strips, isWaitSort } = this.props;
    let stripsElement = null;
    if (isLoading) {
      stripsElement = <Spinner />
    }
    if (strips) {
      stripsElement = strips.map(element => <NavLink key={element.id} to={`strip/${element.id - 1}`}>
        <StripsElement {...element} />
      </NavLink>)
    }
    return (
      <div className={classes.stripsContainerBox}>
        <div className={classes.sortedBox}>
          <ul>
            <li onClick={this.sortedStripsStartLowPriceHandler}><span>Сначала дешевле</span></li>
            <li onClick={this.sortedStripsStartHighPriceHandler}><span>Сначала дороже</span></li>
            <li onClick={this.sortedStripsStartHighPowerHandler}><span>Сначала мощные</span></li>
            <li onClick={this.sortedStripsStartLowPowerHandler}><span>Сначала маломощные</span></li>
          </ul>
        </div>
        <div className={classes.stripsElementsBox}>
          {isWaitSort ? <Spinner /> : stripsElement}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  strips: state.stripsPage.strips,
  isLoading: state.UIPage.isLoading,
  isWaitSort: state.UIPage.isWaitSort
});

const mapDispatchToProps = dispatch => ({
  onGetStrips: () => dispatch(actions.getStripsRequest()),
  onSortedStripsStartLowPrice: () => dispatch(actions.sortedStripsStartLowPrice()),
  onSortedStripsStartHighPrice: () => dispatch(actions.sortedStripsStartHighPrice()),
  onSortedStripsStartHighPower: () => dispatch(actions.sortedStripsStartHighPower()),
  onSortedStripsStartLowPower: () => dispatch(actions.sortedStripsStartLowPower()),

})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(StripsContainer)