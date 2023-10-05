import yellowStar from "src/assets/images/yellowStar.png";

const SalonItem = ({ onClick, salon }) => {
  function cardOnClickHandler(event) {
    onClick(salon.id);
  }
  let star = 0;
  if (salon.rating) {
    star = salon.rating;
  }
  return (
    <div
      className="bg-[#FFE7E2] p-3 flex flex-col gap-3 rounded-[28px] h-full hover:shadow transition-shadow"
      onClick={cardOnClickHandler}
    >
      {/* image */}
      <div className="flex justify-center">
        {salon.photo && (
          <img
            className="rounded-[22px] w-full h-[239px] object-cover"
            src={salon.photo.url}
            alt="Salon"
          />
        )}
      </div>
      {/* card body */}
      <div className="flex flex-col justify-between h-full gap-2">
        {/* title */}
        <div>
          <h4 className="font-medium text-xl text-center">
            {salon.name.replace(/['"]+/g, "")}
          </h4>
        </div>
        {/* footer */}
        <div className="flex items-end">
          <span className="w-5/6">{salon.address.replace(/['"]+/g, "")}</span>
          {/* ratings */}
          <div className="flex max-w-10 gap-1">
            <span className="">{star.toFixed(1)}</span>
            <span className="">
              <img
                src={yellowStar}
                className="object-contain"
                width="17px"
                height="17px"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonItem;
