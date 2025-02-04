import {
  FaSearch,
  FaChartLine,
  FaPaintBrush,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const OurApproach = () => {
  const approachSteps = [
    {
      id: 1,
      icon: <FaSearch className="w-6 h-6" />,
      title: "Discovery & Understanding",
      description:
        "We start by listening. We take the time to understand your business, goals, and challenges to ensure alignment with your vision.",
    },
    {
      id: 2,
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Planning & Strategy",
      description:
        "We develop a customized strategy with clear milestones, objectives, and the right tools to bring your project to life.",
    },
    {
      id: 3,
      icon: <FaPaintBrush className="w-6 h-6" />,
      title: "Design & Development",
      description:
        "Our team creates intuitive interfaces and builds robust, scalable solutions aligned with your business needs.",
    },
    {
      id: 4,
      icon: <FaRocket className="w-6 h-6" />,
      title: "Testing & Launch",
      description:
        "We rigorously test across all platforms and launch with full support for a smooth transition.",
    },
    {
      id: 5,
      icon: <FaHeadset className="w-6 h-6" />,
      title: "Ongoing Support",
      description:
        "We provide continuous support and maintenance to keep your digital products updated and secure.",
    },
  ];

  return (
    <section className="paddingtop paddingbottom bg-gray-50">
      <div className="wrapper paddingtop">
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="main-heading text-gray-900 mb-4">
            Our Approach
          </h2>
          <p
            data-aos="fade-up"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We believe the best digital solutions come from strategic thinking
            and collaborative execution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {approachSteps.map((step) => (
            <div
              data-aos="fade-up"
              key={step.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600">{step.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {/* <div className="mt-4 text-blue-600 font-medium">{`0${
                index + 1
              }`}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
