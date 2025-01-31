import img1 from "../../assets/services-details/uiux1.jpg";
import img2 from "../../assets/services-details/uiux2.jpg";

const UiUxDesign = () => {
  const uiUxServices = [
    {
      title: "User Research & Insights",
      description:
        "We begin with in-depth research to understand your target audience, their needs, behaviors, and challenges, ensuring that the design aligns with their expectations.",
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "We create wireframes and interactive prototypes to help visualize your product’s structure and flow before development begins, giving you a clear picture of the user journey.",
    },
    {
      title: "UI Design",
      description:
        "Our team focuses on designing user interfaces that are not only visually stunning but also intuitive, making it easy for your users to interact with your product.",
    },
    {
      title: "UX Strategy & Testing",
      description:
        "We continuously test and refine our designs through usability testing, ensuring your product delivers an exceptional experience at every touchpoint.",
    },
    {
      title: "Branding & Design Systems",
      description:
        "We create consistent design systems and user interface guidelines that align with your brand identity, ensuring a cohesive and recognizable experience across all platforms.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-black">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="blockchain"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          UI/UX Design
        </h2>
        <p data-aos="fade-up" className="description">
          Creating a great digital experience goes beyond just having a
          functional website or app. It’s about designing interfaces that are
          easy to use, visually appealing, and intuitive. Our UI/UX design team
          specializes in crafting user-centric designs that not only look great
          but also provide seamless interactions. We ensure every touchpoint is
          carefully designed to enhance user satisfaction and engagement.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our UI/UX Design Services
        </h2>
        <p data-aos="fade-up" className="description">
          We combine creativity with user psychology to deliver designs that
          resonate with your audience and drive measurable results. Our process
          ensures your product is both beautiful and functional.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="ui ux design"
        />
        <p data-aos="fade-up" className="description">
          {uiUxServices.map((service, index) => (
            <div key={index}>
              <strong>{service.title}:</strong> {service.description}
              {index !== uiUxServices.length - 1 && (
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

export default UiUxDesign;
