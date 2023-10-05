import { useState, useCallback, useEffect } from "react";
import classes from "./Salon.module.css";
import Comments from "./Comments";
import SalonDetail from "./SalonDetail";

function Salon() {
  const [detail, setDetail] = useState({
    id: 0,
    name: "",
    address: "",
    photo_links: [],
    photos: [],
    opens: "",
    phone_number: "",
    created: "",
  });
  let url = window.location.href.split("/");
  const salonid = url[url.length - 1];

  const fetchSalonHandler = useCallback(async () => {
    try {
      const response = await fetch("http://seato1.ir/api/salons/" + salonid);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const detailData = {
        id: data.id,
        name: data.name,
        address: data.address,
        photo_links: data.photo_links,
        photos: data.photos,
        opens: data.opens,
        phone_number: data.phone_number,
        created: data.created,
        rating: data.rating,
        comments: data.comments.filter((comment) => comment.is_parent === true),
      };

      setDetail(detailData);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchSalonHandler();
  }, []);

  return (
    <section>
      salon detail characteristics
      <SalonDetail salon={detail} />
      {/* recent comments */}
      <div className={classes.comments}>
        <div className={classes.caption}>
          <h2>آخرین بازخوردها</h2>
        </div>
        <Comments salonId={detail.id} />
      </div>
    </section>
  );
}

export default Salon;
