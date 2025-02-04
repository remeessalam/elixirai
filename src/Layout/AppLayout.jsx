import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "keen-slider/keen-slider.min.css";
import Footer from "./Footer";
import ScrollToTop from "../Components/ScrollToTop";
import WhatsAppIcon from "../Components/WhatAppIcon";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const AppLayout = () => {
  AOS.init({
    once: true,
    duration: 1000,
  });
  return (
    <div className="overflow-hidden">
      <Header />
      <WhatsAppIcon />
      {/* <TawkMessengerReact
        propertyId="675b13e8af5bfec1dbdb1186"
        widgetId="1ietsbhpe"
      /> */}
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
