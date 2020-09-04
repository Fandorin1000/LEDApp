import React, { Component } from 'react'
import classes from './SearchContainer.module.scss';
import { connect } from 'react-redux';
import Search from '../../components/Search/Search';

class SearchContainer extends Component {
  render() {
    const { foundStrips } = this.props;

    return (
      <div className={classes.searchContainer}>
        <Search foundStrips={foundStrips} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  foundStrips: state.stripsPage.foundStrips
})
export default connect(mapStateToProps)(SearchContainer);