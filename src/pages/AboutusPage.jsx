import PageBanner from "../Components/PageBanner";
import img1 from "../assets/images/aboutus-1.jpg";
// import img2 from "../assets/images/aboutus-2.png";
// import img3 from "../assets/images/aboutus-3.jpeg";
import sectionthreeimageone from "../assets/images/sectionthreeimageone.gif";
import sectionthreeimagetwo from "../assets/images/sectionthreeimagetwo.jpeg";
import sectionthreeimagethree from "../assets/images/sectionthreeimagethree.png";
import FAQ from "../Components/FAQ";
import Testimonials from "../Components/Testimonials";
import ClientsLogoSlider from "../Components/ClientLogoSlider";
// import CompanyAchievements from "../Components/CompanyAchievements";
import TrustWorthySection from "../Components/TrustWorthySection";
import OurApproach from "../Components/OurApproach";
const AboutusPage = () => {
  return (
    <div>
      <PageBanner title={"About Us"} />
      <section className="paddingtop paddingbottom wrapper grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col text-black">
          <h1 data-aos="fade-right" className="main-heading">
            Innovating the Future with Advanced AI and Digital Solutions
          </h1>
          <p data-aos="fade-right" className="description mt-4">
            At ELIXIRAI, we are a team of passionate professionals dedicated to
            delivering innovative digital solutions that help businesses grow
            and succeed in an increasingly digital world. Founded with the goal
            of bridging the gap between great ideas and effective technology, we
            specialize in creating custom web development, mobile apps,
            AI-driven solutions, and thoughtful UI/UX design. We believe in the
            power of technology to shape the future of business, and we’re here
            to help you make the most of it.
            <br />
            <br /> We understand that every project is unique, and that’s why we
            approach each one with care, creativity, and technical expertise.
            Our goal is simple: to build digital products that not only solve
            problems but also leave a lasting, positive impact on your business.
          </p>
        </div>
        <img
          data-aos="fade-left"
          loading="lazy"
          src={img1}
          alt="about us"
          className="w-full rounded-lg max-h-[55vh]  lg:h-full object-cover"
        />
      </section>
      {/* <CompanyAchievements /> */}
      <TrustWorthySection />

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
      <OurApproach />
      <FAQ />
      <Testimonials />
      <ClientsLogoSlider />
    </div>
  );
};

export default AboutusPage;
