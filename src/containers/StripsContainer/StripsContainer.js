import React, { Component } from 'react'
import classes from './StripsContainer.module.scss';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import StripsElement from '../../components/StripsElement/StripsElement';
import Spinner from '../../components/UI/Spinner/Spinner';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import SortBox from '../../components/SortBox/SortBox';
import FilterBox from '../../components/FilterBox/FilterBox';
import FilterArguments from '../../components/FilterBox/FilterArguments/FilterArguments';
import SearchForm from '../../components/Forms/SearchForm/SearchForm';

class StripsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentFilterArguments: []
    }
  }
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
  toggleIsShowSortListHandler = () => {
    this.props.onToggleIsShowSortList()
  }
  toggleIsShowFilterListHandler = () => {
    this.props.onToggleIsShowFilterList()
  }
  toggleIsShowSearchBoxHandler = () => {
    this.props.onToggleIsShowSearchBox()
  }
  render() {
    const { isLoading,
      strips,
      isWaitSort,
      isShowSortList,
      isShowFilterList,
      isShowSearchBox } = this.props;
    let stripsElement = null;
    if (isLoading) {
      stripsElement = <Spinner />
    }
    if (strips) {
      stripsElement = strips.map(element => <NavLink key={element.id} to={`strips/strip/${element.id - 1}`}>
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
      <div>
        <h1 className={classes.stripsTitle}>
          Светодиодная лента - современное решение ежедневных потребностей!
        </h1>
        <div className={classes.stripsContainerBox}>
          <div className={classes.sortedBox}>
            <div className={[classes.mobileOnly, classes.searchBox].join(' ')}>
              <h2 onClick={this.toggleIsShowSearchBoxHandler}>{isShowSearchBox ? "Скрыть" : "Показать"} поиск</h2>
              {isShowSearchBox && <SearchForm />}
            </div>
            <FilterArguments
              filterElementOfArguments={this.state.currentFilterArguments}
              refreshFilterArguments={this.refreshFilterArgumentsHandler}
            />
            <SortBox
              isShowSortList={isShowSortList}
              toggleIsShowSortList={this.toggleIsShowSortListHandler}
              sortedStripsStartLowPrice={this.sortedStripsStartLowPriceHandler}
              sortedStripsStartHighPrice={this.sortedStripsStartHighPriceHandler}
              sortedStripsStartHighPower={this.sortedStripsStartHighPowerHandler}
              sortedStripsStartLowPower={this.sortedStripsStartLowPowerHandler}
            />
            {this.state.currentFilterArguments.length < 2 ?
              <FilterBox
                isShowFilterList={isShowFilterList}
                toggleIsShowFilterList={this.toggleIsShowFilterListHandler}
                filteredTwelveVolts={this.filteredTwelveVoltsHandler}
                filteredTwentyFourVolts={this.filteredTwentyFourVoltsHandler}
                filteredWarmLight={this.filteredWarmLightHandler}
                filteredNeutralLight={this.filteredNeutralLightHandler}
                filteredColdLight={this.filteredColdLightHandler}
              /> : null
            }

          </div>
          <div className={classes.stripsElementsBox}>
            {isWaitSort ? <Spinner /> : stripsElement}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  strips: state.stripsPage.strips,
  isLoading: state.UIPage.isLoading,
  isWaitSort: state.UIPage.isWaitSort,
  isShowSortList: state.UIPage.isShowSortList,
  isShowFilterList: state.UIPage.isShowFilterList,
  isShowSearchBox: state.UIPage.isShowSearchBox,
});

const mapDispatchToProps = dispatch => ({
  onSortedStripsStartLowPrice: (strips) => dispatch(actions.sortedStripsStartLowPrice(strips)),
  onSortedStripsStartHighPrice: (strips) => dispatch(actions.sortedStripsStartHighPrice(strips)),
  onSortedStripsStartHighPower: (strips) => dispatch(actions.sortedStripsStartHighPower(strips)),
  onSortedStripsStartLowPower: (strips) => dispatch(actions.sortedStripsStartLowPower(strips)),
  onFilteredTwelveVolts: (strips) => dispatch(actions.filteredTwelveVolts(strips)),
  onFilteredTwentyFourVolts: (strips) => dispatch(actions.filteredTwentyFourVolts(strips)),
  onFilteredWarmLight: (strips) => dispatch(actions.filteredWarmLight(strips)),
  onFilteredNeutralLight: (strips) => dispatch(actions.filteredNeutralLight(strips)),
  onFilteredColdLight: (strips) => dispatch(actions.filteredColdLight(strips)),
  onToggleIsShowSortList: () => dispatch(actions.toggleIsShowSortList()),
  onToggleIsShowFilterList: () => dispatch(actions.toggleIsShowFilterList()),
  onToggleIsShowSearchBox: () => dispatch(actions.toggleIsShowSearchBox())
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(StripsContainer)