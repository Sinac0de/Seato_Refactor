import yellowStarImgUrl from "src/assets/images/yellowStar.png";
const Card = ({ salon }) => {
  //! todo:  replace this code with salonItem code
  return (
    <div className="flex flex-col bg-red-400">
      {/* header */}
      <div className="">
        <img src={salon.photo.url} alt="Salon" />
        <h2>{salon.name}</h2>
      </div>
      {/* footer */}
      <div className="flex">
        <p className="">{salon.address}</p>
        <div className="">
          <img src={yellowStarImgUrl} alt="Yellow rating star" />
          <p>{salon.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
