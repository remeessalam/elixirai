import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import video from "../../assets/video/homeBanner.mp4";
import RequirementForm from "../../Components/RequirementForm";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";

const HomepageBanner = () => {
  const [videoReady, setVideoReady] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to handle when video is ready to play
  const handleReady = () => {
    setVideoReady(true);
    setLoading(false);
  };

  // Preload the video
  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = video;
    videoElement.preload = "auto";

    videoElement.onloadeddata = () => {
      setVideoReady(true);
      setLoading(false);
    };

    videoElement.onerror = () => {
      // Handle video loading error
      console.error("Error loading video");
      setLoading(false);
    };

    // Set a timeout to handle cases where video loading takes too long
    const timeout = setTimeout(() => {
      if (!videoReady) {
        setLoading(false);
      }
    }, 10000);

    return () => {
      clearTimeout(timeout);
      videoElement.onloadeddata = null;
      videoElement.onerror = null;
    };
  }, [videoReady]);

  return (
    <>
      {loading && <Loader />}

      <div
        className={`relative min-h-screen flex justify-center items-center pt-[8rem] ${
          !videoReady
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        {/* Background video container */}
        <div className="absolute top-0 min-h-screen w-full bg-black">
          {videoReady && (
            <ReactPlayer
              url={video}
              loop={true}
              playsinline
              playing={true}
              width="100%"
              height="100vh"
              muted
              onReady={handleReady}
              className="object-cover"
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
          )}
        </div>

        {/* Hero content */}
        <div className="relative grid md:grid-cols-2 gap-5 items-center wrapper w-full">
          <div className="text-center flex flex-col items-center sm:text-left">
            <div className="text-center mb-8">
              <h1 className="bannertext"> YOUR VISION + OUR CODE </h1>
              <br />
              <h1
                data-aos="fade-right"
                data-aos-offset="-700"
                className="text-lg sm:text-xl text-black"
              >
                - Let&apos;s Create Magic
              </h1>
            </div>

            <p
              data-aos="fade-right"
              data-aos-offset="-700"
              className="text-lg sm:text-xl text-black mb-8 max-w-3xl"
            >
              ELIXIRAI is full service
              <br /> Software Development Company
            </p>
            <Link
              data-aos="fade-right"
              data-aos-offset="-700"
              to={"https://calendly.com/gauravssingh18/30min"}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              BOOK A FREE CONSULTATION
            </Link>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="-700"
            className="md:flex hidden "
          >
            <RequirementForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageBanner;
