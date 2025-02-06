import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link as CustomLink } from "react-router-dom";
import { Link } from "react-scroll";
import logoImg from "../../assets/logo/logo.png";
import { clientDetails } from "../../contant";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const options = [
  {
    name: "Home",
    path: "banner",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  // {
  //   name: "FAQs",
  //   path: "faqs",
  // },
  {
    name: "Contact Us",
    path: "contacts",
  },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  //eslint-disable-next-line
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-screen overflow-hidden">
      <header
        className={`fixed !max-w-screen overflow-hidden top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-white/70 bg-opacity-50  backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="wrapper ">
          <div className="hidden md:flex text-black justify-end gap-6 py-2">
            <Link
              to={`mailto:${clientDetails.email}`}
              className="flex items-center gap-2"
            >
              <CiMail className="w-5 h-5" /> {clientDetails.email}
            </Link>
            |
            <Link
              to={`tel:${clientDetails.phone}`}
              className="flex items-center gap-2"
            >
              <FaPhoneAlt className="w-4 h-4" />
              {clientDetails.phone}
            </Link>
          </div>
          <div className="flex justify-between items-center pt-5 md:pt-0 pb-8">
            <div className="flex-shrink-0">
              <Link smooth={true} to="banner" className="cursor-pointer">
                <img
                  src={logoImg}
                  className="w-[10rem] sm:w-[13rem]"
                  alt="logo"
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8 text-black">
              {options.map((option) =>
                option.name === "Home" ? (
                  <CustomLink
                    key={option.path}
                    to={`/`}
                    className="text-black text-sm"
                  >
                    Home
                  </CustomLink>
                ) : (
                  <Link
                    to={option.path}
                    className="text-black text-sm"
                    key={option.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    activeClass="active-link"
                  >
                    {option.name}
                  </Link>
                )
              )}
              {/* <Link className={`link text-sm `}>Blogs</Link> */}
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-black p-2" onClick={toggleDrawer}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-black text-[2.2rem]"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {options.map((option) =>
              option.name === "Home" ? (
                <CustomLink key={option.path} to={`/`} className="link text-sm">
                  Home
                </CustomLink>
              ) : (
                <Link
                  to={option.path}
                  className="link text-sm"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  activeClass="active-link"
                  onClick={() => setIsOpen(false)}
                >
                  {option.name}
                </Link>
              )
            )}
            {/* <Link className={`link text-sm `}>Blogs</Link> */}
          </div>
        </Drawer>
        {/* <div className="block lg:hidden justify-self-end" onClick={toggleDrawer}>
        <Hamburger
          color="white"
          size="23"
          toggled={isOpen}
          rounded
          toggle={setIsOpen}
        />
      </div> */}
      </header>
    </div>
  );
};

export default LandingHeader;
