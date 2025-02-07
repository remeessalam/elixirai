import AOS from "aos";
import "aos/dist/aos.css";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import video from "../../assets/video/homeBanner.mp4";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { clientDetails } from "../../contant";
// import toast from "react-hot-toast";
import ReactPlayer from "react-player";
import { Link as ScrollLink } from "react-scroll";
import GetInTouch from "../../Components/GetInTouch";
import LandingServices from "../../Components/landingPages/LandingServices";
import WhyChooseUs from "../../Components/WhyChooseUs";
import UnlockEfficiency from "../../Components/UnlockEffciency";
import Testimonials from "../../Components/Testimonials";
import ClientsLogoSlider from "../../Components/ClientLogoSlider";
import CallToAction from "../../Components/CallToAction";
import webLandingAbout from "../../assets/images/web-landing-about1.jpg";
import appLandingAbout from "../../assets/images/app-landing-about.jpg";
// import aicallingcontact from "../../assets/images/aicallingcontact.jpg";
import RequirementForm from "../../Components/RequirementForm";
import SinglePortfolio from "../../Components/SinglePortfolio";
import { appPortfolio, webPortfolio } from "../../contant";
import LandingHeader from "../../Components/landingPages/LandingHeader";
import Footer from "../../Layout/Footer";
//eslint-disable-next-line
export const LandingPage = ({ page }) => {
  AOS.init({
    once: true,
    duration: 1000,
  });
  const isWebDevelopment = Boolean(page === "web-development");
  // eslint-disable-next-line
  const [spinner, setSpinner] = useState(false);

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //     reset,
  //   } = useForm();
  //   const navigate = useNavigate();

  //   const onSubmit = async (data) => {
  //     console.log(data);
  //     setSpinner(true);

  //     var emailBody = "Name: " + data.fullName + "\n\n";
  //     emailBody += "Email: " + data.email + "\n\n";
  //     emailBody += "Phone: " + data.mobileNumber + "\n\n";
  //     // emailBody += "Subject: " + data.subject + "\n\n";
  //     emailBody += "Message:\n" + data.message;

  //     // Construct the request payload
  //     var payload = {
  //       to: clientDetails.email,
  //       // to: "remeesreme4u@gmail.com",
  //       subject: "You have a new message from SOFTINTURN",
  //       body: emailBody,
  //     };

  //     await fetch("https://smtp-api-tawny.vercel.app/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     })
  //       .then((response) => response.json())
  //       .then(() => {
  //         toast.success("Email sent successfully");
  //         reset();
  //         navigate("/thank-you");
  //       })
  //       .catch((error) => {
  //         toast.error(error.message);
  //       })
  //       .finally(() => setSpinner(false));
  //   };
  return (
    <>
      <LandingHeader />
      <>
        <div
          id="banner"
          className="h-screen !max-w-screen overflow-hidden relative"
        >
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
                      transform: "scaleX(-1)",
                    },
                  },
                },
              }}
            />
          </div>
          {/* <img
          src={isWebDevelopment ? webDevBanner : appDevBanner}
          className="w-full h-full object-cover object-right absolute"
          alt=""
        /> */}
          {/* <div className="bg-black/50 absolute w-full h-full"></div> */}
          <div
            data-aos="fade-up"
            offset
            className="pt-[3rem] wrapper flex items-center h-full"
          >
            <div className="relative z-40 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
              <div className="rounded-text-box border-white/70 font-medium text-black">
                {isWebDevelopment ? "Web Development" : "App Development"}
              </div>
              {/* <h1 className="heading-1 text-white">
              {isWebDevelopment
                ? `Building Websites That Leverage ${(
                    <span className="text-primary">AI</span>
                  )} to Define Your Brand's Digital Presence`
                : ""}
            </h1> */}
              {isWebDevelopment ? (
                <h1 className="main-heading text-black leading-tight">
                  Building Websites That Leverage
                  <span className="text-primary"> AI </span>
                  to Define Your Brand&apos;s Digital Presence
                </h1>
              ) : (
                <h1 className="heading text-black leading-tight">
                  Harnessing <span className="text-primary"> AI </span> to
                  Transform Your Ideas into Engaging Mobile Experiences
                </h1>
              )}
              <p className="text-black desc font-medium">
                We specialize in crafting innovative IT solutions designed to
                meet the unique demands of today’s dynamic businesses.
              </p>
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn mt-2"
              >
                Get Started
              </ScrollLink>
            </div>
          </div>
        </div>
        {/* <Contact /> */}
        <div data-aos="fade-up" className=" max-w-3xl mx-auto px-4 pt-[5rem]">
          <RequirementForm />
        </div>
        <section
          id="about"
          className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper"
        >
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto lg:mx-0"
          >
            {isWebDevelopment ? "Web Development" : "App Development"}
          </div>
          <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-right"
              className="flex h-full flex-col gap-7 text-center lg:text-start"
            >
              <div className="flex flex-col gap-7">
                <h2 className="main-heading">
                  {isWebDevelopment
                    ? "Empowering Modern Brands with Innovative Web Development"
                    : "Crafting Apps that Transform Ideas into Business Success"}
                </h2>
                <p className="desc">
                  {isWebDevelopment
                    ? "We blend creativity with technical expertise to craft websites that reflect your brand’s identity while offering a seamless, responsive experience on all devices. Let us help you connect with your audience and accelerate your growth."
                    : "From startups with bold ideas to enterprises aiming for innovation, we offer end-to-end app development services tailored to your goals. Our apps enhance engagement, optimize functionality, and scale with your growth, giving you a winning edge."}
                </p>
              </div>
              <div className="flex justify-center lg:justify-start gap-5 mt-4">
                <ScrollLink
                  to="contact"
                  smooth
                  offset={-90}
                  className="primary-btn"
                >
                  Contact Us
                </ScrollLink>
                <ScrollLink
                  to="services"
                  smooth
                  offset={-80}
                  className="secondary-btn"
                >
                  Our Services
                </ScrollLink>
              </div>
            </div>
            <div data-aos="fade-left" className="h-full">
              <img
                src={isWebDevelopment ? webLandingAbout : appLandingAbout}
                className="object-contain max-h-[30rem] w-full rounded-lg"
                alt=""
              />
            </div>
          </div>
        </section>

        <LandingServices page={page} />
        <WhyChooseUs />

        {/* <Faqs /> */}

        <UnlockEfficiency />
        <div className=" bg-white paddingtop paddingbottom px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1
              data-aos="fade-up"
              className="main-heading max-w-[60rem] mx-auto text-start sm:text-center"
            >
              Portfolio
            </h1>
            <SinglePortfolio
              porfolio={
                page === "web-development" ? webPortfolio : appPortfolio
              }
              portfoliofor={
                page === "web-development"
                  ? "Web Development"
                  : "App Development"
              }
            />
          </div>
        </div>
        <CallToAction />
        <Testimonials />
        <ClientsLogoSlider />
        {/* <EndlessOpportunitiesSection /> */}
        {/* <div
        data-aos="fade-up"
        id="contacts"
        className=" py-[2rem] sm:py-[5rem] text-primarytextcolor bg-primary/20"
      >
        <div className="wrapper">
          <div className="h-full grid md:grid-cols-2 gap-10 py-5">
            <div className="flex flex-col gap-4">
              <h2 className="heading-2">Get In Touch With Us!</h2>
              <p className="desc">
                Get in touch with{" "}
                <span className="font-semibold">SOFTINTURN </span>
                and let us be the catalyst for your digital transformation.
                Together, we can create solutions that align with your vision,
                helping your business reach new heights.
              </p>
              <img
                src={aicallingcontact}
                alt=""
                className="max-h-[21rem] object-cover rounded-xl"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:px-[1rem] text-black"
            >
              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full bg-[#faf3ef] placeholder-slate-800  outline-none border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(104,77,244,0.5816701680672269) 0%, rgba(98,98,98,0.5956757703081232) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Mobile Number"
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(104,77,244,0.5816701680672269) 0%, rgba(98,98,98,0.5956757703081232) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.mobileNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.mobileNumber.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(104,77,244,0.5816701680672269) 0%, rgba(98,98,98,0.5956757703081232) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Message"
                  {...register("message", { required: "Message is required" })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(104,77,244,0.5816701680672269) 0%, rgba(98,98,98,0.5956757703081232) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button className="primary-btn" type="submit">
                {spinner ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div> */}
        <div id="contacts" className="max-w-screen overflow-hidden">
          <GetInTouch />
        </div>
      </>
      <Footer />
    </>
  );
};
