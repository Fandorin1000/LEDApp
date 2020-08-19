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
  sortedStripsStartLowPriceHandler = () => this.props.onSortedStripsStartLowPrice(this.props.strips)
  sortedStripsStartHighPriceHandler = () => this.props.onSortedStripsStartHighPrice(this.props.strips)
  sortedStripsStartHighPowerHandler = () => this.props.onSortedStripsStartHighPower(this.props.strips)
  sortedStripsStartLowPowerHandler = () => this.props.onSortedStripsStartLowPower(this.props.strips)
  filteredTwelveVoltsHandler = () => this.props.onFilteredTwelveVolts(this.props.strips)
  filteredTwentyFourVoltsHandler = () => this.props.onFilteredTwentyFourVolts(this.props.strips)
  filteredWarmLightHandler = () => this.props.onFilteredWarmLight(this.props.strips)
  filteredNeutralLightHandler = () => this.props.onFilteredNeutralLight(this.props.strips)
  filteredColdLightHandler = () => this.props.onFilteredColdLight(this.props.strips)
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
    if (strips && strips.length === 0) {
      stripsElement = (
        <div
          className={classes.showAllStripsBtnBox}
          onClick={() => this.props.onGetStrips()}>
          <div>
            <p>Ленты с указаным набором фильтров нет у нас в каталоге, попробуйте ещё раз!</p>
            <p>Нажми сюда, чтоб посмотреть всю ленту!</p>
          </div>
        </div>
      )
    }



    return (
      <div className={classes.stripsContainerBox}>
        <div className={classes.sortedBox}>
          <h2>Отсортируй</h2>
          <ul>
            <li onClick={() => this.props.onGetStrips()}><span>Показать все</span></li>
            <li onClick={this.sortedStripsStartLowPriceHandler}><span>Сначала дешевле</span></li>
            <li onClick={this.sortedStripsStartHighPriceHandler}><span>Сначала дороже</span></li>
            <li onClick={this.sortedStripsStartHighPowerHandler}><span>Сначала мощные</span></li>
            <li onClick={this.sortedStripsStartLowPowerHandler}><span>Сначала маломощные</span></li>
          </ul>
          <h2>Отфильтруй</h2>
          <ul>
            <li onClick={this.filteredTwelveVoltsHandler}><span>12V</span></li>
            <li onClick={this.filteredTwentyFourVoltsHandler}><span>24V</span></li>
            <li onClick={this.filteredWarmLightHandler}> <span>Теплый свет</span></li>
            <li onClick={this.filteredNeutralLightHandler}><span>Нейтральный свет</span></li>
            <li onClick={this.filteredColdLightHandler}><span>Холодный свет</span></li>
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
  onSortedStripsStartLowPrice: (strips) => dispatch(actions.sortedStripsStartLowPrice(strips)),
  onSortedStripsStartHighPrice: (strips) => dispatch(actions.sortedStripsStartHighPrice(strips)),
  onSortedStripsStartHighPower: (strips) => dispatch(actions.sortedStripsStartHighPower(strips)),
  onSortedStripsStartLowPower: (strips) => dispatch(actions.sortedStripsStartLowPower(strips)),
  onFilteredTwelveVolts: (strips) => dispatch(actions.filteredTwelveVolts(strips)),
  onFilteredTwentyFourVolts: (strips) => dispatch(actions.filteredTwentyFourVolts(strips)),
  onFilteredWarmLight: (strips) => dispatch(actions.filteredWarmLight(strips)),
  onFilteredNeutralLight: (strips) => dispatch(actions.filteredNeutralLight(strips)),
  onFilteredColdLight: (strips) => dispatch(actions.filteredColdLight(strips))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(StripsContainer)