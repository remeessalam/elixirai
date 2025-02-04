import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="flex flex-col wrapper  gap-4 items-center paddingtop paddingbottom mb-[2rem]">
      <h1 className="main-heading text-center max-w-6xl mx-auto">
        “Unlock the Full Potential of Your Business with Our Services”
      </h1>
      <p className="description text-center max-w-6xl mx-auto">
        We provide cutting-edge solutions tailored to your business needs,
        empowering you to drive growth, streamline operations, and maximize
        efficiency. From software development to AI-driven innovations, our
        services help you stay ahead in today’s competitive landscape.
      </p>
      <Link to="/contact-us" className="primary-btn rounded-full w-fit mt-4">
        Get Your Free Consultation Today
      </Link>
    </div>
  );
};

export default CallToAction;
