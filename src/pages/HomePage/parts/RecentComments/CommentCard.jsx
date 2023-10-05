const CommentCard = ({ comment }) => {
  return (
    // <div className={classes.commentCard}>
    <div>
      <h2>{comment.name}</h2>
      <p>{comment.comment}</p>
    </div>
  );
};

export default CommentCard;
