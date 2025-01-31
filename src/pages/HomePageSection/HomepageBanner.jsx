import ReactPlayer from "react-player";
import video from "../../assets/video/homeBanner.mp4";
const HomepageBanner = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      {/* Background overlay */}
      <div className="absolute top-0 h-screen w-full  bg-black">
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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-black/30" />

      {/* Hero content */}
      <div className="relative flex flex-col items-center  wrapper">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Elevate Your Business with [your-company-name]&apos;s AI Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
            Discover the power of AI to revolutionize your operations, enhance
            decision-making, and drive innovation. At [your-company-name], we
            deliver tailor- made AI services designed to propel your business
            forward. Experience the future of technology today.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Consult Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
