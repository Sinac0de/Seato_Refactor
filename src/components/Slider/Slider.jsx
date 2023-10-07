import { Children } from "react";
import { sliderOptions } from "src/utils/SliderConfigs/sliderConfigs";

const Slider = ({ data }) => {
  return (
    <Splide options={sliderOptions}>
      {data.length > 0 &&
        data.map((item) => <SplideSlide key={item.id}>{Children}</SplideSlide>)}
    </Splide>
  );
};
