import React, { Component } from 'react'
import classes from './StripsContainer.module.scss';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import StripsElement from '../../components/StripsElement/StripsElement';
import Spinner from '../../components/UI/Spinner/Spinner';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';

class StripsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentFilterArguments: []
    }
  }
  componentDidMount() {
    this.props.onGetStrips()
  }
  //sorted start
  sortedStripsStartLowPriceHandler = () => this.props.onSortedStripsStartLowPrice(this.props.strips)
  sortedStripsStartHighPriceHandler = () => this.props.onSortedStripsStartHighPrice(this.props.strips)
  sortedStripsStartHighPowerHandler = () => this.props.onSortedStripsStartHighPower(this.props.strips)
  sortedStripsStartLowPowerHandler = () => this.props.onSortedStripsStartLowPower(this.props.strips)
  //sorted end
  //filtered start 
  filteredTwelveVoltsHandler = (event) => {
    this.addToCurrentFilterArgumentsNewPartHandler(event)
    this.props.onFilteredTwelveVolts(this.props.strips)
  }
  filteredTwentyFourVoltsHandler = (event) => {
    this.addToCurrentFilterArgumentsNewPartHandler(event)
    this.props.onFilteredTwentyFourVolts(this.props.strips)
  }
  filteredWarmLightHandler = (event) => {
    this.addToCurrentFilterArgumentsNewPartHandler(event)
    this.props.onFilteredWarmLight(this.props.strips)
  }
  filteredNeutralLightHandler = (event) => {
    this.addToCurrentFilterArgumentsNewPartHandler(event)
    this.props.onFilteredNeutralLight(this.props.strips)
  }
  filteredColdLightHandler = (event) => {
    this.addToCurrentFilterArgumentsNewPartHandler(event)
    this.props.onFilteredColdLight(this.props.strips)
  }
  //filtered end 
  addToCurrentFilterArgumentsNewPartHandler = (event) => {
    const argument = event.currentTarget.childNodes[0].textContent;
    const parent = event.currentTarget.parentNode;
    this.setState(prevState => {
      return { currentFilterArguments: [...prevState.currentFilterArguments, argument] }
    })
    parent.remove()
  }
  refreshFilterArgumentsHandler = () => {
    window.location.reload(false)
  }

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
    const filterElementOfArguments = this.state.currentFilterArguments.map(element => (
      <div
        key={element}>
        <span>{element}</span>
      </div>
    ))

    return (
      <div className={classes.stripsContainerBox}>
        <div className={classes.sortedBox}>
          {filterElementOfArguments.length > 0 && <div
            className={classes.filterArgumentsBox}>
            <div><button onClick={this.refreshFilterArgumentsHandler}>Сбросить фильтр</button></div>
            <h2>Параметры фильтации:</h2>
            {filterElementOfArguments}
          </div>}
          <div className={classes.sortListBox}>
            <h2>Отсортируй:</h2>
            <ul>
              <li onClick={this.sortedStripsStartLowPriceHandler}><span>Сначала дешевле</span></li>
              <li onClick={this.sortedStripsStartHighPriceHandler}><span>Сначала дороже</span></li>
              <li onClick={this.sortedStripsStartHighPowerHandler}><span>Сначала мощные</span></li>
              <li onClick={this.sortedStripsStartLowPowerHandler}><span>Сначала маломощные</span></li>
            </ul>
          </div>
          <div className={classes.filterListBox}>
            <h2>Отфильтруй:</h2>
            <ul>
              <ul>
                <h5>По исходящему напряжению</h5>
                <li onClick={this.filteredTwelveVoltsHandler}><span>12V</span></li>
                <li onClick={this.filteredTwentyFourVoltsHandler}><span>24V</span></li>
              </ul>
              <ul>
                <h5>По температуре света</h5>
                <li onClick={this.filteredWarmLightHandler}><span>Теплый свет</span></li>
                <li onClick={this.filteredNeutralLightHandler}><span>Нейтральный свет</span></li>
                <li onClick={this.filteredColdLightHandler}><span>Холодный свет</span></li>
              </ul>
            </ul>
          </div>
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