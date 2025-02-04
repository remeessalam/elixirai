import { Link } from "react-router-dom";
// import { ReactComponent as WhatsApp } from "../assets/svgs/WhatsappIcon.svg";
import whatsappIcon from "../assets/svgs/WhatsappIcon.svg";
import { BsWhatsapp } from "react-icons/bs";
const WhatsAppIcon = () => {
  return (
    <Link
      className="fixed group bottom-[2.5rem] p-1 hover:-translate-y-1 z-30 border bg-green-500 border-white-500  rounded-full right-[1.5rem] transition-all duration-200"
      // to={`https://wa.me/${clientDetails.whatsappbox}`}
      to={`https://api.whatsapp.com/send/?phone=%2B918591331353&text&type=phone_number&app_absent=0`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <BsWhatsapp className="w-[3rem] scale-95 h-[3rem] sm:w-[4rem] sm:h-[4rem] fill-white group-hover:fill-white group-hover:scale-110 rounded-full shadow-transparent shadow-large group-hover:shadow-primary/50 transition-all duration-300" />
      {/* <img
        src={whatsappIcon}
        alt="WhatsApp Icon"
        className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] bg-green-500 fill-green-500 group-hover:fill-primary group-hover:scale-110 rounded-full shadow-transparent shadow-large group-hover:shadow-primary/50 transition-all duration-300"
      /> */}
    </Link>
  );
};

export default WhatsAppIcon;
