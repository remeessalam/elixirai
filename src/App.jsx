import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Loader from "./Components/Loader";
import WebAppDevelopment from "./pages/ServicesPage/WebAppDevelopment";
import GameDevelopment from "./pages/ServicesPage/GameDevelopment";
import ArtificialIntelligence from "./pages/ServicesPage/ArtificialIntelligence";
import BlockChain from "./pages/ServicesPage/BlockChain";
import RPA from "./pages/ServicesPage/RPA";
import ARAndVR from "./pages/ServicesPage/ARAndVR";
import IOTDevelopment from "./pages/ServicesPage/IOTDevelopment";
import DataAnalytics from "./pages/ServicesPage/DataAnalytics";
import CloudSolutions from "./pages/ServicesPage/CloudSolutions";
import CyberSecurity from "./pages/ServicesPage/CyberSecurity";
import { Toaster } from "react-hot-toast";
// import ServicePageLayout from "./Layout/ServicePageLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutusPage = lazy(() => import("./pages/AboutusPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Industries = lazy(() => import("./pages/Industries"));
const ServicePageLayout = lazy(() => import("./Layout/ServicePageLayout"));
const Thankyou = lazy(() => import("./Components/ThankYou"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#000000",
              color: "#ffffff",
            },
          }}
        />
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutusPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />, // Main /services page with AppLayout
      },
      {
        path: "/industries",
        element: <Industries />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/thank-you",
        element: <Thankyou />,
      },
    ],
  },
  {
    path: "/services",
    element: <ServicePageLayout />, // Separate layout for /services child routes
    children: [
      {
        path: "web-app-development",
        element: <WebAppDevelopment />,
      },
      {
        path: "game-development",
        element: <GameDevelopment />,
      },
      {
        path: "artificial-intelligence",
        element: <ArtificialIntelligence />,
      },
      {
        path: "blockchain",
        element: <BlockChain />,
      },
      {
        path: "rpa",
        element: <RPA />,
      },
      {
        path: "ar-vr",
        element: <ARAndVR />,
      },
      {
        path: "iot-development",
        element: <IOTDevelopment />,
      },
      {
        path: "data-analytics",
        element: <DataAnalytics />,
      },
      {
        path: "cloud-solutions",
        element: <CloudSolutions />,
      },
      {
        path: "cybersecurity",
        element: <CyberSecurity />,
      },
    ],
  },
]);

export default AppRouter;
