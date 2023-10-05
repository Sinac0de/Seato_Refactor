import { useEffect, useState, useCallback } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Card from "../../../components/Card/Card";
import { Link } from "react-router-dom";
import { sliderOptions } from "../../../utils/SliderConfigs/sliderConfigs";

const SalonSlider = () => {
  const [salons, setSalons] = useState([]);

  const fetchSalonsHandler = useCallback(async () => {
    try {
      const response = await fetch("http://seato1.ir/api/salons/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const salons = data.slice(0, 10);

      const transformed = salons.map((salonData) => {
        return {
          id: salonData.id,
          name: salonData.name,
          address: salonData.address,
          photo: salonData.photo_links[0],
          rating: salonData.rating ? salonData.rating : 0,
        };
      });
      setSalons(transformed);
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    fetchSalonsHandler();
  }, [fetchSalonsHandler]);

  return (
    salons && (
      <div>
        {/* <div className={classes.caption}> */}
        <div>
          <h1>لیست سالن های زیبایی</h1>
          <Link to="/salons">همه سالن ها</Link>
        </div>

        {/* <div className={classes["list-wrapper"]}> */}
        <div>
          <Splide options={sliderOptions}>
            {salons.length > 0 &&
              salons.map((salon) => {
                return (
                  <SplideSlide key={salon.id}>
                    <Card salon={salon} />
                  </SplideSlide>
                );
              })}
          </Splide>
        </div>
      </div>
    )
  );
};

export default SalonSlider;
