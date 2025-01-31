import { useKeenSlider } from "keen-slider/react";
import cardItemBg from "../../assets/images/service-slider-item-bg.png";

import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { bestServices } from "../../contant";

const BestServicesSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <section className="py-[5rem] relative">
      <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
      <div className="wrapper text-center ">
        <p className="gradient-text uppercase mb-3 text-white">
          our top services
        </p>
        <h1 className="heading capitalize mb-8 text-white">
          we provide best service
        </h1>
        <div className="flex items-center gap-3 md:gap-10">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="text-primary text-5xl hover:-translate-y-1 hover:text-primary/90 transition-all duration-300"
          >
            <FiArrowLeftCircle />
          </button>
          <div data-aos="fade-up" ref={sliderRef} className="keen-slider">
            {bestServices.map(({ description, title, link, icon, id, img }) => (
              <Link to={link} key={id} className="relative pb-[2rem]">
                <div
                  className="keen-slider__slide flex flex-col items-center p-8 rounded-lg bg-[#eaf6fd]"
                  style={{ backgroundImage: `url(${cardItemBg})` }}
                >
                  <div className="absolute flex justify-center items-center left-1/3 top-[1.3rem] rounded-full bg-white w-[3rem] h-[3rem]">
                    <img
                      loading="lazy"
                      src={icon}
                      className="w-[2rem] object-contain"
                      alt=""
                    />
                  </div>
                  <img
                    loading="lazy"
                    src={img}
                    className="w-[90%] object-contain"
                    alt=""
                  />
                  <h3 className="text-[1.5rem] font-semibold my-5 leading-tight">
                    {title}
                  </h3>
                  <p className="text-sm font-light text-gray-500">
                    {description}
                  </p>
                </div>
                <Link
                  to={link}
                  className="absolute left-1/2 -translate-x-1/2 bottom-[0.5rem] z-20 text-[2rem] bg-white text-primary h-[3rem] w-[3rem] rounded-full border-2 border-primary flex items-center justify-center"
                >
                  <FiArrowUpRight />
                </Link>
              </Link>
            ))}
          </div>
          <button
            onClick={() => instanceRef.current?.next()}
            className="text-primary text-5xl hover:-translate-y-1 hover:text-primary/90 transition-all duration-300"
          >
            <FiArrowRightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestServicesSlider;
