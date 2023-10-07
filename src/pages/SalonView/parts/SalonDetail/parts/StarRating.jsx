import { Rating } from "react-simple-star-rating";

const StarRating = (props) => {
  return (
    <div className={classes.rating}>
      <Rating
        initialValue={Math.floor(props.rating)}
        onClick={props.onClick.bind(this)}
      />
    </div>
  );
};

export default StarRating;
