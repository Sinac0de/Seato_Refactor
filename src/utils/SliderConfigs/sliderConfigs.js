export const sliderOptions = {
  type: "loop",
  perPage: 4,
  perMove: 1,
  autoplay: true,
  gap: "1rem",
  interval: 5000,
  width: "95%",
  pagination: false,
  breakpoints: {
    1600: {
      perPage: 3,
    },
    1400: {
      perPage: 2,
    },
    850: {
      perPage: 1,
    },
  },
};
