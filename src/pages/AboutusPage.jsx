import PageBanner from "../Components/PageBanner";
import img1 from "../assets/images/aboutus-1.jpg";
import img2 from "../assets/images/aboutus-2.png";
import img3 from "../assets/images/aboutus-3.jpeg";
import sectionthreeimageone from "../assets/images/sectionthreeimageone.gif";
import sectionthreeimagetwo from "../assets/images/sectionthreeimagetwo.jpeg";
import sectionthreeimagethree from "../assets/images/sectionthreeimagethree.png";
import FAQ from "../Components/FAQ";
import Testimonials from "../Components/Testimonials";
import ClientsLogoSlider from "../Components/ClientLogoSlider";
import CompanyAchievements from "../Components/CompanyAchievements";
const AboutusPage = () => {
  return (
    <div>
      <PageBanner title={"About Us"} /> AboutusPage
      <section className="py-[5rem] wrapper grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col text-white">
          <h1 data-aos="fade-right" className="heading">
            Innovating the Future with Advanced AI and Digital Solutions
          </h1>
          <p data-aos="fade-right" className="description mt-4">
            At [your-company-name], we are dedicated to pushing the limits of
            technological innovation with our advanced AI and digital solutions.
            As leaders in artificial intelligence, blockchain, AR/VR, game
            development, and IoT, we leverage our expertise to transform your
            visionary ideas into groundbreaking realities.
            <br />
            <br /> We understand that every business is unique, which is why our
            approach is tailored to your specific needs and challenges,
            delivering customized solutions that drive impactful, measurable
            results. Our subsidiary, Appgalaxy, specializes in delivering
            cutting-edge website and app development services. Together, as a
            cohesive unit, [your-company-name] and Appgalaxy provide a
            comprehensive suite of services designed to propel your business to
            new heights. Trust in our commitment to quality, excellence, and
            innovation—experience the future with [your-company-name]
          </p>
        </div>
        <img
          data-aos="fade-left"
          loading="lazy"
          src={img1}
          alt="about us"
          className="w-full rounded-lg h-[40vh] lg:h-full object-cover"
        />
      </section>
      <CompanyAchievements />
      <div className="flex justify-center w-full">
        <div className="relative flex justify-center z-10 mt-[51px] px-4">
          <img
            src={sectionthreeimageone}
            alt="AI image"
            // className="rounded-2xl w-[70%] h-[50vh] object-top object-cover"
            className="rounded-2xl h-[20rem] sm:h-[50vh] w-full object-top object-cover"
          />
          <img
            src={sectionthreeimagetwo}
            alt="AI image"
            className="absolute -bottom-2 sm:-bottom-[3rem] left-2 md:-left-[1rem] lg:-left-[6.5rem] opacity-75 rounded-2xl w-[6rem] sm:w-[12rem] object-contain aspect-square"
          />
          <img
            src={sectionthreeimagethree}
            alt="AI image"
            className="absolute right-6 md:-right-[1rem] lg:-right-[6rem] top-2 sm:top-12 opacity-95 rounded-2xl w-[8rem] sm:w-[12rem] object-contain"
          />
        </div>
      </div>
      <FAQ />
      <Testimonials />
      <ClientsLogoSlider />
    </div>
  );
};

export default AboutusPage;
