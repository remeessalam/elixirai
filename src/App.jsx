import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Loader from "./Components/Loader";
import WebDevelopment from "./pages/ServicesPage/WebDevelopment";
import AppDevelopment from "./pages/ServicesPage/AppDevelopment";
import ArtificialIntelligence from "./pages/ServicesPage/ArtificialIntelligence";
import UiUxDesign from "./pages/ServicesPage/UiUxDesign";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutusPage = lazy(() => import("./pages/AboutusPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Industries = lazy(() => import("./pages/Industries"));
const ServicePageLayout = lazy(() => import("./Layout/ServicePageLayout"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Thankyou = lazy(() => import("./Components/ThankYou"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));

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
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/portfolio",
        element: <Portfolio isBannerShow={true} />,
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
        path: "web-development",
        element: <WebDevelopment />,
      },
      {
        path: "app-development",
        element: <AppDevelopment />,
      },
      {
        path: "artificial-intelligence",
        element: <ArtificialIntelligence />,
      },
      {
        path: "uiux-design",
        element: <UiUxDesign />,
      },
    ],
  },
]);

export default AppRouter;
