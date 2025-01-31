import img1 from "../../assets/services-details/ai1.jpg";
import img2 from "../../assets/services-details/ai2.jpg";

const ArtificialIntelligence = () => {
  const aiDevelopmentServices = [
    {
      title: "Machine Learning Solutions",
      description:
        "We create intelligent systems that learn from your data, improving decision-making, automating processes, and enhancing your operations over time.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "We develop AI solutions that enable your systems to understand, interpret, and respond to human language, from chatbots to automated customer service.",
    },
    {
      title: "Predictive Analytics",
      description:
        "By analyzing historical data, we build predictive models that help you anticipate trends, identify patterns, and make data-driven decisions.",
    },
    {
      title: "AI Automation",
      description:
        "We design AI solutions that automate repetitive tasks, freeing up your team to focus on more strategic initiatives and improving efficiency across the board.",
    },
    {
      title: "Custom AI Integrations",
      description:
        "We help integrate AI into your existing systems to enhance performance, improve user experiences, and drive business growth.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-black">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="ai"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Artificial Intelligence
        </h2>
        <p data-aos="fade-up" className="description">
          Artificial Intelligence has the power to revolutionize the way
          businesses operate. We help organizations harness the power of AI to
          streamline processes, gain deeper insights, and improve
          decision-making. Our team leverages the latest AI technologies, from
          machine learning to natural language processing, to create intelligent
          solutions that deliver real business value.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our AI Development Services
        </h2>
        <p data-aos="fade-up" className="description">
          From developing machine learning models to creating AI-powered
          chatbots, we assist you in automating processes, enhancing customer
          experiences, and gaining deeper insights into your operations. Our
          solutions enable you to make smarter, data-driven decisions,
          positioning you ahead in the competitive landscape.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="ai development"
        />
        <p data-aos="fade-up" className="description">
          {aiDevelopmentServices.map((service, index) => (
            <div key={index}>
              <strong>{service.title}:</strong> {service.description}
              {index !== aiDevelopmentServices.length - 1 && (
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

export default ArtificialIntelligence;
