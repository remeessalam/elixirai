import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { clientDetails, navItems } from "../contant";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo/logo.png";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

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

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex text-black justify-center gap-6 py-2">
          <h3 className="flex items-center gap-2">
            <CiMail className="w-5 h-5" /> {clientDetails.email}
          </h3>
          |
          <h3 className="flex items-center gap-2">
            <FaPhoneAlt className="w-4 h-4" />
            {clientDetails.phone}
          </h3>
        </div>
        <div className="flex justify-between items-center pt-5 md:pt-0 pb-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              <img src={logo} alt="logo" className="w-[10rem] sm:w-[13rem]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-black">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`${item.extraClasses} ${
                  pathname === item.path && item.path !== "/contact-us"
                    ? "active-link"
                    : item.path !== "/contact-us"
                    ? ""
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
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
          {navItems.map(({ label, path }) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={path}
              className="text-3xl text-black font-medium transition-colors duration-300 link"
              to={path}
            >
              {label}
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
