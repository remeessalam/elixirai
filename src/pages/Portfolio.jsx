import PageBanner from "../Components/PageBanner";
import { appPortfolio, webPortfolio } from "../contant";

const Portfolio = () => {
  return (
    <div>
      <PageBanner title={"Portfolio"} />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Web Development Portfolio */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Web Development
          </h2>
          <p className="text-gray-600 mb-8">
            Our web development projects showcase innovative and user-friendly
            designs that deliver exceptional digital experiences. From
            responsive layouts to seamless functionality, each project is
            crafted to meet the unique needs of our clients and their audiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {webPortfolio.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* App Development Portfolio */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            App Development
          </h2>
          <p className="text-gray-600 mb-8">
            Our app development portfolio highlights cutting-edge mobile
            solutions that combine creativity and technology. From intuitive
            user interfaces to robust backend systems, each app is designed to
            provide a seamless and engaging experience for users.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {appPortfolio.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
