import GetInTouch from "../Components/GetInTouch";
import LogoSlider from "../Components/LogoSlider";
import ServicesList from "../Components/ServicesList";
import BestServicesSlider from "./HomePageSection/BestServicesSlider";
import HomepageBanner from "./HomePageSection/HomepageBanner";
import IndustriesWeServe from "./HomePageSection/IndustriesWeServe";

const HomePage = () => {
  return (
    <div>
      <HomepageBanner />
      <LogoSlider />
      <ServicesList />
      <IndustriesWeServe />
      <BestServicesSlider />
      <GetInTouch />
    </div>
  );
};

export default HomePage;
