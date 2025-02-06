import { useState } from "react";
import { Link } from "react-router-dom";
import { allServices } from "../contant";

const ServicesList = () => {
  const [selectedService, setSelectedService] = useState(allServices[0]);
  // const { pathname } = useLocation();

  // set active service
  const handleServiceSelect = (item) => {
    setSelectedService(item);
  };
  return (
    <section className="wrapper  paddingbottom">
      <h1
        data-aos="fade-up"
        className="main-heading text-center mb-8 text-black"
      >
        Explore Our Offering
      </h1>
      <div className="grid md:grid-cols-[38%_58%] gap-10 p-5 bg-gradient-to-b from-primary to-primary/70  rounded-lg">
        <div className="w-full flex flex-col gap-10">
          <div
            data-aos="fade-up"
            className="bg-white shadow-inner shadow-primary p-4 lg:p-6 rounded-lg"
          >
            <h4 className="text-2xl font-medium">Our Services</h4>
            <div className="mt-5 flex flex-col flex-wrap md:flex-col gap-3">
              {allServices.map((item) => (
                <button
                  key={item.title}
                  className={`${
                    item.id === selectedService.id
                      ? "primary-btn text-white"
                      : "bg-white text-[#17012C]"
                  } flex items-center gap-2 justify-center rounded-full text-start px-5 py-3 transition-all duration-300 hover:-translate-y-1`}
                  onClick={() => handleServiceSelect(item)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="py-[2rem] text-white">
            <h4 data-aos="fade-up" className="text-3xl font-medium">
              {selectedService.title}
            </h4>
            <ul className="list-disc">
              {selectedService?.description.map((obj) => {
                return (
                  <li
                    key={obj}
                    data-aos="fade-up"
                    className="mt-4 description whitespace-pre-line"
                  >
                    {obj}
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 w-full flex md:justify-start justify-center">
              <Link
                data-aos="fade-up"
                to={selectedService.link}
                className="px-5 py-3 rounded-full !bg-blue-800 border w-fit mt-6 md:ml-[1.5rem]"
              >
                Click For More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
