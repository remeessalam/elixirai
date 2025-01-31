import FAQ from "../Components/FAQ";
import PageBanner from "../Components/PageBanner";
import IndustriesWeServe from "./HomePageSection/IndustriesWeServe";

const Industries = () => {
  return (
    <div className="sm:py-10 py-5">
      <PageBanner title="Industries We Serve" />
      <IndustriesWeServe />
      <FAQ />
    </div>
  );
};

export default Industries;
