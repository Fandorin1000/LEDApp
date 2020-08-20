import React, { Component } from 'react'
import classes from './StripContainer.module.scss';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import StripImg from '../../components/Strip/StripHead/StripImg/StripImg';
import StripControls from '../../components/Strip/StripHead/StripControls/StripControls';
import StripDescription from '../../components/Strip/StripFooter/StripDescription/StripDescription';
import StripCharacteristics from '../../components/Strip/StripFooter/StripCharacteristics/StripCharacteristics';
import StripCommentsBox from '../../components/Strip/StripFooter/CommentsBox/StripCommentsBox';
import Auxiliary from '../../hoc/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';

class StripContainer extends Component {
  componentDidMount() {
    this.props.onGetStripRequest(this.props.match.params.stripId)
  }
  addToBagProductHandler = product => {
    const { bagArray } = this.props;
    if (bagArray.length === 0) {
      this.props.onAddToBagProduct(bagArray, product)
    } else if (bagArray.length > 0) {
      this.checkProductInBag(bagArray, product)
    }
  }
  checkProductInBag = (bagArray, product) => {
    let response = null;
    const idArray = []
    bagArray.map(element => idArray.push(element.id));
    response = idArray.includes(product.id)
    response ? alert('Товар уже в корзине!') : this.props.onAddToBagProduct(bagArray, product)
  }
  sendNewCommentHandler = (event) => {
    event.preventDefault()
    console.log('stripContainer sendNewCommentHandler')
  }
  render() {
    const { strip, isWaitGetStrip } = this.props;
    let imgSrc = null;
    let characteristics = null;
    let comments = null;
    let description = null;
    if (strip) {
      imgSrc = this.props.strip.imgSrc;
      characteristics = this.props.strip.characteristics;
      comments = this.props.strip.comments
      description = this.props.strip.description
    }

    return (
      <div className={classes.stripContainer}>
        {isWaitGetStrip ? <Spinner /> :
          <Auxiliary>
            <div className={classes.stripHeadBox}>
              <StripImg imgSrc={imgSrc} />
              <StripControls
                {...this.props}
                clickedBtn={this.addToBagProductHandler} />
            </div>
            <div className={classes.stripFooterBox}>
              <StripDescription description={description} />
              <StripCharacteristics characteristics={characteristics} />
              <StripCommentsBox
                comments={comments}
                sendNewComment={(event) => this.sendNewCommentHandler(event)} />
            </div>
          </Auxiliary>
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  strip: state.stripsPage.strip,
  isWaitGetStrip: state.UIPage.isWaitGetStrip,
  bagArray: state.bagPage.bagArray
})
const mapDispatchToProps = dispatch => ({
  onGetStripRequest: (id) => dispatch(actions.getStripRequest(id)),
  onAddToBagProduct: (bagArray, product) => dispatch(actions.addToBagProductStart(bagArray, product))
})
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(StripContainer)
