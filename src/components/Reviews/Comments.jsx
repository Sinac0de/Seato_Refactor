import { useState } from "react";
import classes from "./Comment.module.css";

export function ListComments({ indent, comments }) {
  const childIndent = indent + 2;
  const marginRightAmount = `${childIndent}rem`;

  if (comments) {
    return comments.map((comment) => (
      <div
        key={comment.id}
        style={{ marginRight: marginRightAmount }}
        className={classes.comment}
      >
        <div className={classes.sidebar} />
        <h1 className={classes["comment-name"]}>{comment.name}</h1>
        <p className={classes["comment-comment"]}>{comment.comment}</p>
        <div id="reply">
          {comments &&
            comments.length > 0 &&
            comments.map((comment) => (
              <ListComments
                key={comment.id}
                indent={childIndent}
                name={comment.name}
                comment={comment.comment}
                comments={comment.children}
              />
            ))}
        </div>
      </div>
    ));
  }

  return null;
}

const Comment = ({ commentId }) => {
  const [commentText, setComment] = useState("");
  const [userName, setName] = useState("");

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const submitReviewHandler = (event) => {
    event.preventDefault();

    let id = commentId;
    if (!commentId) {
      const tmp = window.location.href.split("/");
      id = tmp[tmp.length - 1];
    }

    const comment_parent = props.parent || null;

    fetch("http://127.0.0.1:8000/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        salon: id,
        comment: commentText,
        name: userName,
        parent: comment_parent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          window.location.reload(false); // Refresh comments
        } else {
          throw new Error("Something went wrong!\nTry with correct form.");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form onSubmit={submitReviewHandler}>
      <div>
        <input
          id="name"
          maxLength="250"
          type="text"
          onChange={handleName}
          placeholder="نام"
        />
        <textarea
          id="comment"
          maxLength="1000"
          type="text"
          onChange={handleComment}
          placeholder="نظر"
        />
      </div>
      <button type="submit">ارسال نظر</button>
    </form>
  );
};

export default Comment;
