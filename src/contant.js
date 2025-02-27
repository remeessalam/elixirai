import HealthcareImg from "./assets/industries/Healthcare.webp";
import RetailImg from "./assets/industries/E-commerce & Retail.webp";
import FintechImg from "./assets/industries/Fintech.webp";
import InsuranceImg from "./assets/industries/Insurance.webp";
import HospitalityImg from "./assets/industries/Hospitality.webp";
import ManufacturingImg from "./assets/industries/Manufacturing.webp";
import OnDemandImg from "./assets/industries/On Demand.jpg";
import FoodRestaurantImg from "./assets/industries/Food & Restaurant.webp";
import LogisticsImg from "./assets/industries/Logistics & Supply Chain.webp";
import EducationImg from "./assets/industries/Education.webp";
import GameImg from "./assets/industries/Game.webp";
import RealEstateImg from "./assets/industries/RealEstateImg.jpg";
import webDevIcon from "./assets/images/slider-item-webdev-icon.png";
import appDevIcon from "./assets/images/slider-item-appdev-icon.png";
import aiIcon from "./assets/images/slider-item-ai-icon.png";
import webDevCardImg from "./assets/images/slider-item-webdev.png";
import appDevCardImg from "./assets/images/slider-item-appdev.png";
import aiCardImg from "./assets/images/slider-item-ai.png";
// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

import service1 from "./assets/service1.png";
import service3 from "./assets/service3.png";
import service6 from "./assets/service6.png";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
// landingpage service iamge
import ecommerceIcon from "./assets/images/icons/online-shopping.png";
import socialMediaIcon from "./assets/images/icons/socialmedia.png";
import landingPageIcon from "./assets/images/icons/landing-page.png";
import customWebsiteIcon from "./assets/images/icons/software-development.png";
import iosDevelopmentIcon from "./assets/images/icons/ios-development.png";
import androidDevelopmentIcon from "./assets/images/icons/android-development.png";
import flutterDevelopmentIcon from "./assets/images/icons/flutter-development.png";
import hybridAppDevelopmentIcon from "./assets/images/icons/hybrid-app-development.png";

export const clientDetails = {
  phone: "+91-8591331353",
  whatsappbox: "8591331353",
  email: "support@elixirai.co",
  address: "Malad West, Mumbai, Maharashtra – 400095, India",
  instagram: "https://www.instagram.com/elixir.a.i?igsh=dHNhZnBta2l2aDRw",
  facebook: "https://www.facebook.com/people/Elixirai/61573613548896/",
  linkedin: "https://www.linkedin.com/company/ai-elixir/",
};

export const navItems = [
  {
    label: "[ LET'S TALK AI ]",
    path: "/services/artificial-intelligence",
    extraClasses: "text-black hover:text-blue-400",
  },
  { label: "Home", path: "/", extraClasses: "hover:text-blue-400 " },
  { label: "About", path: "/about-us", extraClasses: "hover:text-blue-400" },
  { label: "Services", path: "/services", extraClasses: "hover:text-blue-400" },
  // Uncomment the below links if needed
  {
    label: "Industries",
    path: "/industries",
    extraClasses: "hover:text-blue-400",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
    extraClasses: "hover:text-blue-400",
  },
  {
    label: "Blogs",
    path: "/blogs",
    extraClasses: "hover:text-blue-400",
  },
  // { label: "PORTFOLIO", path: "/portfolio", extraClasses: "hover:text-blue-400" },
  // { label: "RESOURCES", path: "/resources", extraClasses: "hover:text-blue-400" },
  {
    label: "Contact Us",
    path: "/contact-us",
    extraClasses:
      "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
  },
];

export const allServices = [
  {
    id: 1,
    img: service1,
    title: "Web Development",
    link: "/services/web-development",
    description: [
      "Custom websites tailored to your business needs.",
      "Engaging, functional, and user-friendly design.",
      "Responsive across all devices for seamless user experience.",
      "E-commerce solutions with secure payment options.",
      "SEO-optimized to enhance online visibility.",
    ],
    services: [
      {
        heading: "Custom Web Development",
        description:
          "We specialize in building unique, tailor-made websites that reflect your brand identity and meet your business objectives.",
      },
      {
        heading: "Mobile-Responsive Design",
        description:
          "We ensure your website adapts beautifully across all devices, ensuring users have a consistent and optimized experience whether they’re on mobile, tablet, or desktop.",
      },
      {
        heading: "E-Commerce Development",
        description:
          "If you want to take your business online, we offer powerful e-commerce solutions designed to handle high traffic, provide secure payment options, and enhance the shopping experience.",
      },
      {
        heading: "Content Management Systems (CMS)",
        description:
          "We empower you to take control of your content with an easy-to-use CMS, giving you the flexibility to update and manage your site independently.",
      },
      {
        heading: "Search Engine Optimization (SEO)",
        description:
          "Our websites are built with SEO in mind, improving your visibility on search engines and helping you reach more customers.",
      },
    ],
  },
  {
    id: 2,
    img: service1,
    title: "App Development",
    link: "/services/app-development",
    description: [
      "Build high-quality, visually appealing mobile applications.",
      "Seamless user experience across iOS and Android.",
      "Cross-platform development for cost-effective solutions.",
      "Custom UI/UX design to enhance engagement.",
      "Ongoing app maintenance and updates.",
    ],
    services: [
      {
        heading: "iOS & Android Development",
        description:
          "Whether you’re building for iPhone, iPad, or Android devices, we create custom applications that deliver exceptional user experiences across platforms.",
      },
      {
        heading: "Cross-Platform Development",
        description:
          "We offer cross-platform solutions using frameworks like Flutter and React Native, providing high-quality apps for both iOS and Android while keeping development costs efficient.",
      },
      {
        heading: "UI/UX Design for Apps",
        description:
          "From the initial concept to the final design, our team creates intuitive interfaces that are easy to navigate and offer a smooth experience for your users.",
      },
      {
        heading: "App Maintenance & Updates",
        description:
          "We don’t just launch your app—we also offer ongoing maintenance and updates to keep your app running smoothly and up-to-date with the latest features.",
      },
      {
        heading: "Custom App Solutions",
        description:
          "If you have specific requirements, we’ll build a custom app that fits your unique business needs, integrating with other platforms and services as needed.",
      },
    ],
  },
  {
    id: 3,
    img: service6,
    title: "UI/UX Design",
    link: "/services/uiux-design",
    description: [
      "Create intuitive and user-friendly digital experiences.",
      "Focus on research-driven UI/UX strategies.",
      "Wireframing and prototyping for seamless design execution.",
      "Enhance brand identity through consistent design systems.",
      "Usability testing to ensure optimal user experience.",
    ],
    services: [
      {
        heading: "User Research & Insights",
        description:
          "We begin with in-depth research to understand your target audience, their needs, behaviors, and challenges, ensuring that the design aligns with their expectations.",
      },
      {
        heading: "Wireframing & Prototyping",
        description:
          "We create wireframes and interactive prototypes to help visualize your product’s structure and flow before development begins, giving you a clear picture of the user journey.",
      },
      {
        heading: "UI Design",
        description:
          "Our team focuses on designing user interfaces that are not only visually stunning but also intuitive, making it easy for your users to interact with your product.",
      },
      {
        heading: "UX Strategy & Testing",
        description:
          "We continuously test and refine our designs through usability testing, ensuring your product delivers an exceptional experience at every touchpoint.",
      },
      {
        heading: "Branding & Design Systems",
        description:
          "We create consistent design systems and user interface guidelines that align with your brand identity, ensuring a cohesive and recognizable experience across all platforms.",
      },
    ],
  },
  {
    id: 4,
    img: service3,
    title: "Artificial Intelligence",
    link: "/services/artificial-intelligence",
    description: [
      "Leverage AI to automate processes and improve efficiency.",
      "Machine learning solutions for data-driven decision-making.",
      "Natural Language Processing (NLP) for better human-computer interaction.",
      "Predictive analytics to anticipate trends and behaviors.",
      "AI-powered automation to enhance productivity.",
      "AI Calling Agency solutions for automated and intelligent customer interactions.",
    ],
    services: [
      {
        heading: "Machine Learning Solutions",
        description:
          "We create intelligent systems that learn from your data, improving decision-making, automating processes, and enhancing your operations over time.",
      },
      {
        heading: "Natural Language Processing (NLP)",
        description:
          "We develop AI solutions that enable your systems to understand, interpret, and respond to human language, from chatbots to automated customer service.",
      },
      {
        heading: "Predictive Analytics",
        description:
          "By analyzing historical data, we build predictive models that help you anticipate trends, identify patterns, and make data-driven decisions.",
      },
      {
        heading: "AI Automation",
        description:
          "We design AI solutions that automate repetitive tasks, freeing up your team to focus on more strategic initiatives and improving efficiency across the board.",
      },
      {
        heading: "AI Calling Agency",
        description:
          "Our AI-driven calling solutions automate customer interactions, provide intelligent responses, and streamline call center operations for improved efficiency.",
      },
      {
        heading: "Custom AI Integrations",
        description:
          "We help integrate AI into your existing systems to enhance performance, improve user experiences, and drive business growth.",
      },
    ],
  },
];

export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: HealthcareImg,
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "Retail",
    img: RetailImg,
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Fintech",
    img: FintechImg,
    desc: "Streamlining financial services with AI-driven fraud detection, automated customer support, and predictive analytics.",
  },
  {
    id: 4,
    title: "Insurance",
    img: InsuranceImg,
    desc: "Improving risk assessment, claims processing, and customer engagement through advanced analytics and AI solutions.",
  },
  {
    id: 5,
    title: "Hospitality",
    img: HospitalityImg,
    desc: "Enhancing guest experiences with smart booking systems, personalized services, and efficient resource management.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: ManufacturingImg,
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "Legal Services",
    img: OnDemandImg,
    desc: "Expert legal solutions in contract law, intellectual property, corporate governance, and dispute resolution, ensuring compliance and strategic advice for business growth.",
  },
  {
    id: 8,
    title: "Food & Restaurant",
    img: FoodRestaurantImg,
    desc: "Optimizing food services with smart inventory, personalized menus, and efficient order management solutions.",
  },
  {
    id: 9,
    title: "Logistics",
    img: LogisticsImg,
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: EducationImg,
    desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 11,
    title: "Game",
    img: GameImg,
    desc: "Elevating game development with AI-enhanced graphics, player behavior analytics, and immersive experiences.",
  },
  {
    id: 12,
    title: "Real Estate Services",
    img: RealEstateImg,
    desc: "Expert property management, investment guidance, and tailored solutions for buying, selling, and renting residential and commercial properties.",
  },
];

export const bestServices = [
  {
    id: 1,
    title: "Web & App Development",
    icon: appDevIcon,
    img: appDevCardImg,
    description:
      "AppGalaxy, a subsidiary of ELIXIRAI, specializes in premium website and app development services. We work across platforms to deliver seamless digital experiences that scale new customer acquisition and retention for commerce brands.",
    link: "/services/web-app-development",
  },

  {
    id: 2,
    title: "Artificial Intelligence",
    icon: aiIcon,
    img: aiCardImg,
    description:
      "Let AI elevate your business, streamline operations, and open doors to new possibilities.",
    link: "/services/artificial-intelligence",
  },

  {
    id: 3,
    title: "AR & VR",
    icon: webDevIcon,
    img: webDevCardImg,
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/ar-vr",
  },
  {
    id: 4,
    title: "Game Development",
    icon: aiIcon,
    img: aiCardImg,
    description:
      "Creating immersive and engaging experiences through innovative game development solutions.",
    link: "/services/game-development",
  },
];

export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Rohan Sharma",
    title: "CEO of ShopSmart Pvt Ltd",
    description:
      "ELIXIRAI helped us build a seamless e-commerce platform with top-notch web development. Their team delivered a responsive website, ensuring an excellent user experience across all devices. The integration of real-time inventory management and AI-powered recommendations has significantly improved our customer engagement and sales.",
  },
  {
    id: 2,
    img: "",
    name: "Priya Bansal",
    title: "Managing Director of SafeFunds Financial Group",
    description:
      "For our mobile application, we turned to ELIXIRAI for their expertise in app development. They created a user-friendly app for both Android and iOS that seamlessly integrates with our blockchain solutions. The app’s intuitive design and smooth functionality enhanced our client experience and improved service efficiency.",
  },
  {
    id: 3,
    img: "",
    name: "Vikram Rao",
    title: "Operations Manager at FreshMart Retail Solutions",
    description:
      "We sought AI-powered solutions to enhance our retail analytics, and ELIXIRAI provided a comprehensive platform that used artificial intelligence to analyze customer behavior, optimize inventory, and predict trends. Their platform helped us make data-driven decisions and personalize our marketing strategies for better customer engagement.",
  },
  {
    id: 4,
    img: "",
    name: "Dr. Meera Nair",
    title: "Co-Founder of HealthNet Solutions",
    description:
      "ELIXIRAI’s expertise in UI/UX design made a significant impact on our healthcare platform. They revamped our user interface, ensuring a clean and intuitive design that’s easy for our patients and clients to navigate. The new design has enhanced user engagement and significantly improved our platform's overall functionality.",
  },
  {
    id: 5,
    img: "",
    name: "Anjali Deshmukh",
    title: "Sales Director at Elite Properties Pvt Ltd",
    description:
      "To elevate our real estate business, ELIXIRAI developed an innovative mobile app that offers virtual property tours, enhancing the buyer's experience. The app’s design and functionality were crafted with user-centric principles in mind, giving our clients an immersive experience from the convenience of their homes.",
  },
  {
    id: 6,
    img: "",
    name: "Ajay Patil",
    title: "CTO of TechServe Solutions",
    description:
      "When we needed a complete redesign of our website, ELIXIRAI delivered a sleek, responsive platform that reflects our growing tech company. The new site not only showcases our products but also integrates advanced AI solutions, providing personalized user experiences and ensuring seamless navigation across devices.",
  },
  {
    id: 7,
    img: "",
    name: "Sunil Kapoor",
    title: "Operations Manager at SteelTech Manufacturing",
    description:
      "ELIXIRAI revolutionized our internal operations with their web and app development expertise, creating a solution that integrates seamlessly with our existing processes. The user-friendly interface and AI-powered automation have dramatically increased productivity, reducing errors and saving us valuable time and resources.",
  },
];

export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

export const faqItems = [
  {
    id: 1,
    question: "What services do you offer for Web Development?",
    answer: `We specialize in creating responsive, user-friendly, and high-performance websites. Our web development services include:
      - Custom Website Development
      - E-commerce Solutions
      - Content Management Systems (CMS)
      - Website Maintenance and Support
      - API Integration
    Whether you need a simple landing page or a complex web application, we’ve got you covered.`,
  },
  {
    id: 2,
    question: "Can you develop mobile apps for both iOS and Android?",
    answer: `Yes, we develop mobile apps for both iOS and Android platforms. Our mobile app development services include:
      - Native App Development
      - Cross-Platform App Development
      - App UI/UX Design
      - App Testing and Deployment
      - App Maintenance and Updates
    We ensure your app is scalable, secure, and delivers a seamless user experience.`,
  },
  {
    id: 3,
    question:
      "What are AI-Driven Solutions, and how can they benefit my business?",
    answer: `AI-Driven Solutions leverage artificial intelligence to automate processes, analyze data, and improve decision-making. Our AI services include:
      - Predictive Analytics
      - Natural Language Processing (NLP)
      - Machine Learning Models
      - AI-Powered Chatbots
      - Computer Vision
    These solutions can help you optimize operations, reduce costs, and enhance customer experiences.`,
  },
  {
    id: 4,
    question: "What does your UI/UX design process look like?",
    answer: `Our UI/UX design process focuses on creating intuitive and visually appealing interfaces. Here’s how we do it:
      - Research and Analysis
      - Wireframing and Prototyping
      - User Testing and Feedback
      - High-Fidelity Design
      - Iterative Improvements
    We ensure the final design aligns with your brand and provides an exceptional user experience.`,
  },
  {
    id: 5,
    question: "How long does it take to develop a website or mobile app?",
    answer: `The timeline depends on the complexity of the project. Typically:
      - Simple Website: 2–4 weeks
      - Complex Website: 6–12 weeks
      - Mobile App: 8–16 weeks
    We provide a detailed project timeline after understanding your requirements.`,
  },
  {
    id: 6,
    question: "Do you offer ongoing support for websites and apps?",
    answer: `Yes, we provide ongoing support for all our projects. This includes:
      - Regular Updates
      - Bug Fixes
      - Performance Optimization
      - Security Patches
    Our goal is to ensure your website or app remains functional and up-to-date.`,
  },
  {
    id: 7,
    question: "Can you redesign an existing website or app?",
    answer: `Absolutely! We specialize in redesigning websites and apps to improve functionality, aesthetics, and user experience. Whether it’s a minor update or a complete overhaul, we can help.`,
  },
  {
    id: 8,
    question: "What technologies do you use for Web Development?",
    answer: `We use a wide range of technologies, including:
      - Frontend: HTML, CSS, JavaScript, React, Angular, Vue.js
      - Backend: Node.js, Python, PHP, Ruby on Rails
      - Databases: MySQL, MongoDB, PostgreSQL
      - CMS: WordPress, Shopify, Drupal
    We choose the best tools based on your project requirements.`,
  },
  {
    id: 9,
    question: "How do you ensure the quality of your mobile apps?",
    answer: `We follow a rigorous quality assurance process, including:
      - Functional Testing
      - Performance Testing
      - Usability Testing
      - Security Testing
      - Beta Testing with Real Users
    This ensures your app is bug-free and delivers a smooth user experience.`,
  },
  {
    id: 10,
    question: "What industries do you serve for Web and Mobile Development?",
    answer: `We’ve worked with clients across various industries, including:
      - E-commerce
      - Healthcare
      - Education
      - Finance
      - Entertainment
    Our solutions are tailored to meet the unique needs of each industry.`,
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

// // web development services
// export const webDevelopmentServices = [
//   {
//     id: 1,
//     title: "E-commerce Websites",
//     icon: require("./assets/images/icons/online-shopping.png"),
//     // img: <CgWebsite />,
//     description:
//       "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
//   },
//   {
//     id: 2,
//     title: "Social Media Websites",
//     // img: <GoFileMedia />,
//     icon: require("./assets/images/icons/socialmedia.png"),
//     description:
//       "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
//   },
//   {
//     id: 3,
//     title: "Landing Websites",
//     // img: <TfiLayoutMediaRightAlt />,
//     icon: require("./assets/images/icons/landing-page.png"),
//     description:
//       "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
//   },
//   {
//     id: 4,
//     title: "Custom Websites",
//     // img: <MdOutlineDashboardCustomize />,
//     icon: require("./assets/images/icons/software-development.png"),
//     description:
//       "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
//   },
// ];

// // app development services
// export const appDevelopmentServices = [
//   {
//     id: 1,
//     title: "iOS App Development",
//     // img: <FaAppStoreIos />,
//     icon: require("./assets/images/icons/ios-development.png"),
//     description:
//       "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
//   },
//   {
//     id: 2,
//     title: "Android App Development",
//     // img: <IoLogoAndroid />,
//     icon: require("./assets/images/icons/android-development.png"),
//     description:
//       "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
//   },
//   {
//     id: 3,
//     title: "Flutter App Development",
//     // img: <SiFlutter />,
//     icon: require("./assets/images/icons/flutter-development.png"),
//     description:
//       "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
//   },
//   {
//     id: 4,
//     title: "Hybrid App Development",
//     // img: <TbDeviceMobileCode />,
//     icon: require("./assets/images/icons/hybrid-app-development.png"),
//     description:
//       "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
//   },
// ];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: ecommerceIcon,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialMediaIcon,
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingPageIcon,
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebsiteIcon,
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosDevelopmentIcon,
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidDevelopmentIcon,
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterDevelopmentIcon,
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppDevelopmentIcon,
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];
