const CommentSlide = ({ comment }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2>{comment.name}</h2>
      <p>{comment.comment}</p>
    </div>
  );
};

export default CommentSlide;
