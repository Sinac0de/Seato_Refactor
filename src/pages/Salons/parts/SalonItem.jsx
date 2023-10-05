import classes from "./SalonItem.module.css";
const SalonItem = ({ onClick, salon }) => {
  function cardOnClickHandler(event) {
    onClick(salon.id);
  }
  let star = 0;
  if (salon.rating) {
    star = salon.rating;
  }
  return (
    <div className={classes.item} onClick={cardOnClickHandler}>
      <div className={classes["image-holder"]}>
        {salon.photo && (
          <img className={classes["image"]} src={salon.photo.url} alt="Salon" />
        )}
      </div>
      <h4>{salon.name.replace(/['"]+/g, "")}</h4>
      <p>{salon.address.replace(/['"]+/g, "")}</p>
      <div className={classes.end}>
        <p className={classes.rating}>
          <span className="fa fa-star"></span> {star.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default SalonItem;
