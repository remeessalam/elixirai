import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
const animation = { duration: 20000, easing: (t) => t };

const LogoSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,

    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 5,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 7,
          spacing: 30,
        },
      },
    },
  });
  return (
    <div>
      {" "}
      <div
        ref={sliderRef}
        className="relative flex  h-fit  my-[5rem]  keen-slider bg-white"
      >
        <div className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-[#080719] to-transparent pointer-events-none z-10"></div>

        {[...Array(10)].map((_, idx) => (
          <div
            key={idx}
            className="keen-slider__slide "
            // style={{ maxWidth: "100px !important" }}
          >
            <Link to="#" className="text-white text-2xl font-bold">
              <img src={logo} alt="logo" className="h-[4rem]  sm:h-[4rem]" />
            </Link>
          </div>
        ))}
        <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-[#080719] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default LogoSlider;
