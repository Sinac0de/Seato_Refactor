import { Rating } from "react-simple-star-rating";

const FixedRating = ({ rating }) => {
  return (
    <div>
      <div>
        <Rating readonly initialValue={Math.floor(rating)} rtl />
      </div>
    </div>
  );
};

export default FixedRating;
