import { useKeenSlider } from "keen-slider/react";
// import { clients } from "../contant";
import img1 from "../assets/client-logos/1.png";
import img2 from "../assets/client-logos/2.png";
import img3 from "../assets/client-logos/3.png";
import img4 from "../assets/client-logos/4.png";
import img5 from "../assets/client-logos/5.png";
import img6 from "../assets/client-logos/6.png";
import img7 from "../assets/client-logos/7.png";
import img8 from "../assets/client-logos/8.png";
import img9 from "../assets/client-logos/9.png";
import img10 from "../assets/client-logos/10.png";
const animation = { duration: 10000, easing: (t) => t };
// eslint-disable-next-line
const ClientsLogoSlider = ({ hide }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 2,
      spacing: 30,
    },
    breakpoints: {
      "(min-width: 450px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="flex flex-col gap-2 paddingtop paddingbottom  bg-white">
      {hide ? (
        <h1 data-aos="fade-up" className="main-heading text-center">
          Trusted by Clients
        </h1>
      ) : (
        <h1 data-aos="fade-up" className="main-heading text-center">
          Join Our <span className="text-blue-800">50+</span> Happy Customers
        </h1>
      )}
      <div data-aos="fade-left" ref={sliderRef} className="keen-slider mt-4">
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map(
          (img, index) => (
            <div key={index} className="keen-slider__slide flex justify-center">
              <img
                loading="lazy"
                src={img}
                alt="featured in"
                className="h-auto w-full object-contain"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ClientsLogoSlider;
