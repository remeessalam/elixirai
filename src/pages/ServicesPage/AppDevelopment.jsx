import img1 from "../../assets/services-details/app-development1.jpg";
import img2 from "../../assets/services-details/app-development2.jpg";

const AppDevelopment = () => {
  const appDevelopmentServices = [
    {
      title: "iOS & Android Development",
      description:
        "Whether you’re building for iPhone, iPad, or Android devices, we create custom applications that deliver exceptional user experiences across platforms.",
    },
    {
      title: "Cross-Platform Development",
      description:
        "We offer cross-platform solutions using frameworks like Flutter and React Native, providing high-quality apps for both iOS and Android while keeping development costs efficient.",
    },
    {
      title: "UI/UX Design for Apps",
      description:
        "From the initial concept to the final design, our team creates intuitive interfaces that are easy to navigate and offer a smooth experience for your users.",
    },
    {
      title: "App Maintenance & Updates",
      description:
        "We don’t just launch your app—we also offer ongoing maintenance and updates to keep your app running smoothly and up-to-date with the latest features.",
    },
    {
      title: "Custom App Solutions",
      description:
        "If you have specific requirements, we’ll build a custom app that fits your unique business needs, integrating with other platforms and services as needed.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-black">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="ar and vr"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          App Development
        </h2>
        <p data-aos="fade-up" className="description">
          In today’s mobile-first world, a strong app can help you connect with
          your audience and enhance your business offerings. Our team
          specializes in building high-quality mobile applications that are both
          functional and visually appealing. We focus on developing apps that
          provide seamless user experiences, whether you need a native app for
          iOS or Android, or a cross-platform solution.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our App Development Services
        </h2>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="app development"
        />
        <p data-aos="fade-up" className="description">
          {appDevelopmentServices.map((service, index) => (
            <div key={index}>
              <strong>{service.title}:</strong> {service.description}
              {index !== appDevelopmentServices.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default AppDevelopment;
