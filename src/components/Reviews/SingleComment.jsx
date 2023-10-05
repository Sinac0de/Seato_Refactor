import React, { useState } from "react";
import Comment from "./Comment";
import classes from "./CommentItem.module.css";

const CommentItem = ({ id, children, name, comment }) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (event) => {
    setShowModal(true);
  };

  const onCloseModalHandler = (event) => {
    setShowModal(false);
  };

  return (
    <div className={classes.reply}>
      <h1>{name}</h1>
      <p>{comment}</p>
      {children &&
        children.length > 0 &&
        children.map((comment) => {
          return (
            <CommentItem
              key={comment.id}
              name={comment.name}
              comment={comment.comment}
            >
              {children}
            </CommentItem>
          );
        })}
      <button onClick={showModalHandler}>پاسخ</button>
      {showModal && <Comment parent={id} onClose={onCloseModalHandler} />}
    </div>
  );
};

export default CommentItem;
