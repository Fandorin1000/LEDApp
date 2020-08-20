import React from 'react'
import classes from './StripCommentsBox.module.scss';
import Auxiliary from '../../../../hoc/Auxiliary';

const StripCommentsBox = props => {
  const { comments } = props;
  let commentsBox = null;
  if (comments) {
    commentsBox = <div className={classes.commentsBox}>
      <h2>Отзывы про ленту:</h2>
      {comments.map(commentElement => <div key={commentElement.id}>
        <fieldset>
          <legend>Дата отзыва: {commentElement.date}</legend>
          <h5>Представим что это имя пользователя: {commentElement.id}</h5>
          <p>{commentElement.body}</p>
        </fieldset>
      </div>)}
      <div className={classes.sendNewCommentBox}>
        <form
          className={classes.formSendNewComment}
          onSubmit={(event) => props.sendNewComment(event)}>
          <h4>Оставь свой отзыв:</h4>
          <input />
          <button>отправить</button>
        </form>
      </div>
    </div>
  }
  return (
    <Auxiliary>
      {commentsBox}
    </Auxiliary>
  )
}
export default StripCommentsBox;
