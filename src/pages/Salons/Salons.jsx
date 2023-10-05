import { useCallback, useEffect, useState } from "react";
import classes from "./Salons.module.css";
import { Link } from "react-router-dom";
import SalonItem from "./parts/SalonItem";

const Salons = () => {
  const [salonList, setSalonList] = useState([]);

  const fetchSalonsHandler = useCallback(async () => {
    try {
      const response = await fetch("http://seato1.ir/api/salons/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformed = data.map((salonData) => ({
        id: salonData.id,
        name: salonData.name,
        address: salonData.address,
        photo: salonData.photo_links[0],
        rating: salonData.rating,
      }));
      setSalonList(transformed);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchSalonsHandler();
  }, [fetchSalonsHandler]);

  return (
    <section className={classes["salons-section"]}>
      {/* List caption and filter button */}
      <div className={classes.caption}>
        <h1>لیست سالن های زیبایی</h1>
        <button>فیلتر</button>
      </div>
      {/* List of salons */}
      <div className={classes.container}>
        {salonList.map((salon) => (
          <Link to={`/salons/${salon.id}`} key={salon.id}>
            <SalonItem salon={salon} />
          </Link>
        ))}
      </div>
      {/* Paginator */}
    </section>
  );
};

export default Salons;
