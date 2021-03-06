import React, { Component } from 'react';
import classes from './SearchForm.module.scss';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import * as actions from '../../../store/actions/index';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: '',
      touched: false,
      invalidMessage: '',
      invalid: false,
      foundStrips: null
    }
  }
  componentDidMount() {
    window.addEventListener('click', this.observeFoundElementClickHandler)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.observeFoundElementClickHandler)
  }
  observeFoundElementClickHandler = e => {
    if (e.target.tagName === "A") {
      setTimeout(() => {
        this.setState({
          searchInputValue: '',
          foundStrips: null
        })
      }, 1)
    }
  }
  sendForm = async e => {
    await e.preventDefault();
    await this.props.onSetFoundStrips(this.state.foundStrips);
    await setTimeout(() => {
      this.setState({
        foundStrips: null
      })
    }, 100)
    await this.props.history.push('/search')
  }
  inputChangeValueHandler = e => {

    const value = e.target.value;
    if (this.state.touched === false) {
      this.setState({ touched: true })
    }
    this.setState({ searchInputValue: value }, () => {
      if (this.state.searchInputValue.trim().length > 2 && this.state.searchInputValue.trim().length <= 50) {
        this.setState({ invalidMessage: '', invalid: false });
        this.foundStripsHandler(this.props.strips, value);
      } else {
        this.setState({ foundStrips: null });
      }
    })
  }

  validateEnteredValueHandler = value => {
    if (this.state.touched && value.trim().length === 0) {
      this.setState({
        invalidMessage: '',
        invalid: false,
        foundStrips: null
      })
    } else if (this.state.touched && value.trim().length <= 2) {
      this.setState({
        invalidMessage: 'Должно быть не меньше 3 символов',
        invalid: true,
        foundStrips: null
      })
    } else if (this.state.touched && value.trim().length > 50) {
      this.setState({
        invalidMessage: 'Должно быть не больше 50 символов',
        invalid: true,
        foundStrips: null
      })
    } else if (this.state.invalidMessage === 'Ничего не найдено!') {
      return
    }
  }

  foundStripsHandler = (strips, value) => {
    const foundStrips = strips.filter(item =>
      item.name.includes(value.toUpperCase()) ||
      item.artikul.includes(value.toUpperCase()) ||
      item.description.includes(value));
    if (foundStrips.length === 0) {
      this.setState({
        invalidMessage: 'Ничего не найдено!',
        invalid: true,
        foundStrips: null
      })
    } else {
      this.setState({ foundStrips: foundStrips })
    }
    console.log(foundStrips)
  }
  render() {
    return (
      <div className={classes.searchFormBox}>
        <form
          className={classes.searchForm}
          onSubmit={this.sendForm}
          autoComplete="off">
          <div className={classes.searchFormInner}>
            <input
              id="searchInput"
              type="text"
              name="searchInput"
              placeholder="Что ищем?"
              onBlur={() => this.validateEnteredValueHandler(this.state.searchInputValue)}
              onChange={this.inputChangeValueHandler}
              onFocus={this.inputChangeValueHandler}
              value={this.state.searchInputValue}
            />
            <button
              disabled={
                this.state.searchInputValue.length === 0 ||
                this.state.invalidMessage.length > 0 ||
                !this.state.foundStrips
              }
              type="submit">искать</button>
          </div>
          {this.state.invalid && <div className={classes.errorMessageBox}>
            <span>{this.state.invalidMessage}</span>
          </div>}
          {this.state.foundStrips && this.state.foundStrips.length > 0 && <div className={classes.foundItems}>
            {this.state.foundStrips.map(item => (
              <div
                className={classes.foundItem} title={item.name} key={item.id}>
                <div className={classes.imgBox}>
                  <img src={item.imgSrc} alt={item.name} />
                </div>
                <div className={classes.nameBox}>
                  <NavLink
                    className={classes.nameBoxLinkElement}
                    to={`/strips/strip/${item.id - 1}`}>{item.name}</NavLink>
                </div>
              </div>
            ))}
          </div>}
        </form>

        {/* {foundStrips ? foundStrips.map(item => (
        <div className={classes.foundItem} title={item.name}>
          <div className={classes.imgBox}>
            <img src={item.imgSrc} alt={item.name} />
          </div>
          <div className={classes.nameBox}>
            <NavLink to={`/strips/strip/${item.id - 1}`}>{item.name}</NavLink>
          </div>
        </div>
      )) : null} */}
      </div>
    )
  }
}


// let filteredStrips = null;
// const renderFoundStripsHandler = (strips, values) => {
//   return filteredStrips = strips.filter(item => item.name.includes(values.searchInput));
//   // const renderStrips = 
// }
const mapStateToProps = state => ({
  strips: state.stripsPage.strips,
})
const mapDispatchToProps = dispatch => ({
  onSetFoundStrips: (foundStrips) => dispatch(actions.setFoundStripsAC(foundStrips))
})
//const mapDispatchToProps = dispatch => ({})
export default
  compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)
    (SearchForm);