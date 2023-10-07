import { useEffect, useState, useCallback } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { Link } from "react-router-dom";
import { sliderOptions } from "src/utils/SliderConfigs/sliderConfigs";
import Card from "src/components/Card/Card";

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
      <div className="flex flex-col p-10">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">لیست سالن&zwnj;های زیبایی</h2>
          <Link
            to="/salons"
            className="bg-[#B6BCCB9C] px-5 p-2 rounded-full font-bold text-base"
          >
            همه سالن&zwnj;ها
          </Link>
        </div>
        <div className="flex justify-center p-8 px-0">
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
