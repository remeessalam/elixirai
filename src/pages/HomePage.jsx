import CallToAction from "../Components/CallToAction";
import GetInTouch from "../Components/GetInTouch";
import LogoSlider from "../Components/LogoSlider";
import RequirementForm from "../Components/RequirementForm";
import ServicesList from "../Components/ServicesList";
import UnlockEfficiency from "../Components/UnlockEffciency";
import WhyChooseUs from "../Components/WhyChooseUs";
import WorkProcess from "../Components/WorkProcess";
// import BestServicesSlider from "./HomePageSection/BestServicesSlider";
import HomepageBanner from "./HomePageSection/HomepageBanner";
import IndustriesWeServe from "./HomePageSection/IndustriesWeServe";

const HomePage = () => {
  return (
    <div>
      <HomepageBanner />
      <div className=" md:hidden flex wrapper pt-[5rem]">
        <RequirementForm />
      </div>
      <LogoSlider />
      <ServicesList />
      <IndustriesWeServe />
      <WhyChooseUs />
      <UnlockEfficiency />
      <WorkProcess />
      {/* <BestServicesSlider /> */}
      <CallToAction />
      <GetInTouch />
    </div>
  );
};

export default HomePage;
