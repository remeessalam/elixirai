import img1 from "../../assets/services-details/web-development1.jpg";
import img2 from "../../assets/services-details/web-development2.jpg";

const WebDevelopment = () => {
  const webDevelopmentServices = [
    {
      title: "Custom Web Development",
      description:
        "We specialize in building unique, tailor-made websites that reflect your brand identity and meet your business objectives.",
    },
    {
      title: "Mobile-Responsive Design",
      description:
        "We ensure your website adapts beautifully across all devices, ensuring users have a consistent and optimized experience whether they’re on mobile, tablet, or desktop.",
    },
    {
      title: "E-Commerce Development",
      description:
        "If you want to take your business online, we offer powerful e-commerce solutions designed to handle high traffic, provide secure payment options, and enhance the shopping experience.",
    },
    {
      title: "Content Management Systems (CMS)",
      description:
        "We empower you to take control of your content with an easy-to-use CMS, giving you the flexibility to update and manage your site independently.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Our websites are built with SEO in mind, improving your visibility on search engines and helping you reach more customers.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-black">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="web and app development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Web Development
        </h2>
        <h3 data-aos="fade-up" className="text-xl font-medium mt-2">
          [Your Company Name] - Crafting Digital Experiences
        </h3>

        <p data-aos="fade-up" className="description">
          Your website is often the first impression you make on potential
          customers. It needs to be engaging, functional, and user-friendly. At
          [Your Company Name], we build custom websites that are crafted to meet
          the unique needs of your business. Whether you need a dynamic
          corporate site, an eCommerce platform, or a simple landing page, we
          ensure your website provides a seamless user experience, no matter the
          device.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our Web Development Services
        </h2>
        <p data-aos="fade-up" className="description">
          We specialize in creating websites that not only look stunning but
          also deliver exceptional functionality and performance. Our services
          are designed to help your business stand out in the digital landscape.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="web development"
        />
        <p data-aos="fade-up" className="description">
          {webDevelopmentServices.map((service, index) => (
            <div key={index}>
              <strong>{service.title}:</strong> {service.description}
              {index !== webDevelopmentServices.length - 1 && (
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

export default WebDevelopment;
