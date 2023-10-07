import imgUrl from "src/assets/images/salon-beleza.png";
const CommentCard = ({ comment }) => {
  return (
    <div className="flex flex-col bg-[#FFE7E2] rounded-[28px] p-3">
      {/* pic and desc */}
      <div>
        <div className="flex gap-3 mb-1">
          {/* <img src="" alt="" /> */}
          <img
            src={imgUrl}
            className="w-1/3 h-[100px]  rounded-[20px] object-cover"
          />
          <p className="pt-3">{comment.comment}</p>
        </div>
      </div>
      {/* salon name and reviewer name */}
      <div className="flex justify-between">
        <span>{comment.salon || "سالن زیبایی"}</span>
        <span>{comment.name}</span>
      </div>
      {/* location & ratings */}
      <h2>تهران، اکباتان</h2>
    </div>
  );
};

export default CommentCard;
