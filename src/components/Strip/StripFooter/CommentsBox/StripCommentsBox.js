import React from 'react'
import classes from './StripCommentsBox.module.scss';
import Auxiliary from '../../../../hoc/Auxiliary';
import Spinner from '../../../UI/Spinner/Spinner';
import FormNewComment from '../../../Forms/FormNewComment/FormNewComment';
import CommentElement from './CommentElement/CommentElement';

const StripCommentsBox = props => {
  const { comments, isWaitGetNewComment } = props;
  let commentsBox = null;
  if (comments) {
    const commentsArray = [];
    for (const comment in comments) {
      commentsArray.push(comments[comment])
    }
    commentsBox = (
      <div className={classes.commentsBox}>
        <h2>Отзывы про ленту:</h2>
        {commentsArray.map(item => <CommentElement {...item} />)}
        {isWaitGetNewComment ?
          <Spinner /> :
          <div className={classes.sendNewCommentBox}>
            <FormNewComment setNewComment={(newCommObj) => props.setNewComment(newCommObj)} />
          </div>
        }
      </div>
    )
  }
  return (
    <Auxiliary>
      {commentsBox}
    </Auxiliary>
  )
}
export default StripCommentsBox;
