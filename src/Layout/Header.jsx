import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { navItems } from "../contant";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo/logo.png";
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
        isScrolled ? "bg-black bg-opacity-50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              <img src={logo} alt="logo" className="h-[3rem] sm:h-[4rem]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-white">
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
            <button className="text-white p-2" onClick={toggleDrawer}>
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
