export const sliderOptions = {
  type: "loop",
  direction: "rtl",
  perMove: 1,
  autoplay: true,
  gap: "2em",
  interval: 5000,
  width: "95%",
  pagination: false,
  breakpoints: {
    1600: {
      perPage: 4,
    },
    1400: {
      perPage: 3,
    },
    850: {
      perPage: 2,
    },
    0: {
      perPage: 1,
    },
  },
};
