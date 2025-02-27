import ReactPlayer from "react-player";
import video from "../../assets/video/homeBanner.mp4";
import RequirementForm from "../../Components/RequirementForm";
import { Link } from "react-router-dom";
import { lazy } from "react";
// const video = lazy(() => import("../../assets/video/homeBanner.mp4"));

const HomepageBanner = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center pt-[8rem]">
      {/* Background overlay */}
      <div className="absolute top-0 min-h-screen w-full  bg-black">
        <ReactPlayer
          url={video}
          loop={true}
          playsinline
          playing={true}
          width="100%"
          height="100vh"
          muted
          className=" object-cover"
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                  width: "100vw",
                  height: "100vh",
                  transform: "scaleX(-1)",
                },
              },
            },
          }}
        />
      </div>
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      {/* Hero content */}
      <div className="relative grid md:grid-cols-2 gap-5 items-center wrapper w-full">
        <div className="text-center flex flex-col items-center sm:text-left">
          <div className="text-center mb-8">
            <h1 className="bannertext"> YOUR VISION + OUR CODE </h1>
            {/* <h1 data-aos="fade-right" className="bannertext">
              YOUR VISION
            </h1>
            <h1 data-aos="fade-right" className="bannertext">
              +
            </h1>
            <h1 data-aos="fade-right" className="bannertext">
              OUR CODE
            </h1> */}
            <br />
            <h1 data-aos="fade-right" className="text-lg sm:text-xl text-black">
              - Let’s Create Magic
            </h1>
          </div>

          <p
            data-aos="fade-right"
            className="text-lg sm:text-xl text-black mb-8 max-w-3xl"
          >
            ELIXIRAI is full service
            <br /> Software Development Company
          </p>
          <Link
            data-aos="fade-right"
            to={"https://calendly.com/gauravssingh18/30min"}
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            BOOK A FREE CONSULTATION
          </Link>
        </div>
        <div data-aos="fade-left" className="md:flex hidden ">
          <RequirementForm />
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
