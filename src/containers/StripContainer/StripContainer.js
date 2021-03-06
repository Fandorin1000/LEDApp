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
  constructor(props) {
    super(props);
    this.state = {
      currentStripId: null
    }
  }
  async componentDidMount() {
    await this.props.onGetStripRequest(this.props.match.params.stripId)
    await this.setState({ currentStripId: this.props.match.params.stripId })
  }
  async componentDidUpdate() {
    if (this.state.currentStripId !== this.props.match.params.stripId) {
      await this.setState({ currentStripId: this.props.match.params.stripId })
      await this.props.onGetStripRequest(this.props.match.params.stripId)
    }
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
  setNewCommentHandler = (stripId, newCommentObject) => {
    this.props.onSetNewCommentHandler(stripId, newCommentObject)
  }
  tabSelectHandler = (selectedTab) => {
    // The active tab must be set into the state so that
    // the Tabs component knows about the change and re-renders.
    this.setState({
      activeTab: selectedTab
    }, () => console.log(this.state.activeTab));
  }
  sendNewRatingNumberHandler = (id, number) => {
    console.log(number)
    this.props.onSendNewRatingNumber(id, number)
  }

  render() {
    const { strip, isWaitGetStrip, isWaitGetNewComment } = this.props;
    let imgSrc = null;
    let characteristics = null;
    let comments = null;
    let description = null;
    if (strip) {
      imgSrc = strip.imgSrc;
      characteristics = strip.characteristics;
      comments = strip.comments
      description = strip.description
    }

    return (
      <div className={classes.stripContainer}>
        {isWaitGetStrip ? <Spinner /> :
          <Auxiliary>
            <div className={classes.stripHeadBox}>
              <StripImg imgSrc={imgSrc} />
              <StripControls
                {...this.props}
                clickedBtn={this.addToBagProductHandler}
                sendNewRatingNumber={(number) => this.sendNewRatingNumberHandler(strip.id, number)} />
            </div>
            <div className={classes.stripFooterBox}>

              <StripDescription description={description} />
              <StripCharacteristics characteristics={characteristics} />
              <StripCommentsBox
                setNewComment={(newCommentObj) => this.setNewCommentHandler(strip.id - 1, newCommentObj)}
                comments={comments}
                isWaitGetNewComment={isWaitGetNewComment}
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
  isWaitGetNewComment: state.UIPage.isWaitGetNewComment,
  isWaitSendNewRatingNumber: state.UIPage.isWaitSendNewRatingNumber,
  bagArray: state.bagPage.bagArray
})
const mapDispatchToProps = dispatch => ({
  onGetStripRequest: (id) => dispatch(actions.getStripRequest(id)),
  onAddToBagProduct: (bagArray, product) => dispatch(actions.addToBagProductStart(bagArray, product)),
  onSetNewCommentHandler: (productIndexInMyBadBackend, setNewCommentHandler) =>
    dispatch(actions.setNewComment(productIndexInMyBadBackend, setNewCommentHandler)),
  onSendNewRatingNumber: (id, newRatingNumber) => dispatch(actions.sendNewRatingNumberAction(id, newRatingNumber))
})
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(StripContainer)
