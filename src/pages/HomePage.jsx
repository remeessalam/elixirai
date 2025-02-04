import CallToAction from "../Components/CallToAction";
import ClientsLogoSlider from "../Components/ClientLogoSlider";
import GetInTouch from "../Components/GetInTouch";
// import LogoSlider from "../Components/LogoSlider";
import RequirementForm from "../Components/RequirementForm";
import ServicesList from "../Components/ServicesList";
import Testimonials from "../Components/Testimonials";
import UnlockEfficiency from "../Components/UnlockEffciency";
import WhyChooseUs from "../Components/WhyChooseUs";
import WorkProcess from "../Components/WorkProcess";
// import BestServicesSlider from "./HomePageSection/BestServicesSlider";
import HomepageBanner from "./HomePageSection/HomepageBanner";
import IndustriesWeServe from "./HomePageSection/IndustriesWeServe";
import Portfolio from "./Portfolio";

const HomePage = () => {
  return (
    <div>
      <HomepageBanner />
      <div className=" md:hidden flex wrapper pt-[5rem]">
        <RequirementForm />
      </div>
      <div className="paddingtop">
        <ClientsLogoSlider hide={true} />
      </div>
      {/* <LogoSlider /> */}
      <ServicesList />
      <WhyChooseUs />
      <UnlockEfficiency />
      <WorkProcess />
      <IndustriesWeServe />
      <Portfolio isBannerShow={false} />
      <CallToAction />
      {/* <BestServicesSlider /> */}
      <Testimonials />
      <ClientsLogoSlider />
      <GetInTouch />
    </div>
  );
};

export default HomePage;
