import React, { Component } from 'react'
import classes from './StripsContainer.module.scss';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import StripsElement from '../../components/StripsElement/StripsElement';
import Spinner from '../../components/UI/Spinner';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';


class StripsContainer extends Component {
  componentDidMount() {
    this.props.onGetStrips()
  }
  render() {
    const { isLoading, strips } = this.props;
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
        {stripsElement}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  strips: state.stripsPage.strips,
  isLoading: state.UIPage.isLoading
});
const mapDispatchToProps = dispatch => ({
  onGetStrips: () => dispatch(actions.getStripsRequest())
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(StripsContainer)