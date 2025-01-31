import ReactPlayer from "react-player";
import video from "../../assets/video/homeBanner.mp4";
import RequirementForm from "../../Components/RequirementForm";
const HomepageBanner = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
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
                },
              },
            },
          }}
        />
      </div>
      {/* <div className="absolute inset-0 bg-black/10" /> */}

      {/* Hero content */}
      <div className="relative grid md:grid-cols-2 gap-5 items-center wrapper">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            YOUR VISION + OUR CODE - Let’s Create Magic
          </h1>
          <p className="text-lg sm:text-xl text-black mb-8 max-w-3xl">
            ELIXIRAI is full service Software Development Company
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300">
            BOOK A FREE CONSULTATION
          </button>
        </div>
        <div className="md:flex hidden">
          <RequirementForm />
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
