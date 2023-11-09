// loader Js Start Here
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);


gsap.fromTo(
  ".loaderDiv",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.7,
    delay: 3.5,
  }
);


gsap.fromTo(
  ".loaderDiv",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);
// Loader Js end Here

