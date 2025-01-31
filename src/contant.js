import HealthcareImg from "./assets/industries/Healthcare.webp";
import RetailImg from "./assets/industries/E-commerce & Retail.webp";
import FintechImg from "./assets/industries/Fintech.webp";
import InsuranceImg from "./assets/industries/Insurance.webp";
import HospitalityImg from "./assets/industries/Hospitality.webp";
import ManufacturingImg from "./assets/industries/Manufacturing.webp";
import OnDemandImg from "./assets/industries/On Demand.webp";
import FoodRestaurantImg from "./assets/industries/Food & Restaurant.webp";
import LogisticsImg from "./assets/industries/Logistics & Supply Chain.webp";
import EducationImg from "./assets/industries/Education.webp";
import GameImg from "./assets/industries/Game.webp";
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

export const clientDetails = {
  phone: "+91-9000000",
  whatsappbox: "90000000",
  email: "example@gmail.com",
  address: "[your-address]",
};

export const navItems = [
  {
    label: "[ LET'S TALK AI ]",
    // path: "",
    extraClasses: "text-black hover:text-blue-400",
  },
  { label: "HOME", path: "/", extraClasses: "hover:text-blue-400" },
  { label: "ABOUT", path: "/about-us", extraClasses: "hover:text-blue-400" },
  { label: "SERVICES", path: "/services", extraClasses: "hover:text-blue-400" },
  // Uncomment the below links if needed
  {
    label: "INDUSTRIES",
    path: "/industries",
    extraClasses: "hover:text-blue-400",
  },
  {
    label: "PORTFOLIO",
    path: "/portfolio",
    extraClasses: "hover:text-blue-400",
  },
  {
    label: "BLOGS",
    // path: "/industries",
    extraClasses: "hover:text-blue-400",
  },
  // { label: "PORTFOLIO", path: "/portfolio", extraClasses: "hover:text-blue-400" },
  // { label: "RESOURCES", path: "/resources", extraClasses: "hover:text-blue-400" },
  {
    label: "CONTACT US",
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
    description:
      "Your website is often the first impression you make on potential customers. It needs to be engaging, functional, and user-friendly. At ELIXIR AI, we build custom websites that are crafted to meet the unique needs of your business. Whether you need a dynamic corporate site, an eCommerce platform, or a simple landing page, we ensure your website provides a seamless user experience, no matter the device.",
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
    description:
      "In today’s mobile-first world, a strong app can help you connect with your audience and enhance your business offerings. Our team specializes in building high-quality mobile applications that are both functional and visually appealing. We focus on developing apps that provide seamless user experiences, whether you need a native app for iOS or Android, or a cross-platform solution.",
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
    img: service3,
    title: "AI Development",
    link: "/services/artificial-intelligence",
    description:
      "Artificial Intelligence has the power to revolutionize the way businesses operate. We help organizations harness the power of AI to streamline processes, gain deeper insights, and improve decision-making. Our team leverages the latest AI technologies, from machine learning to natural language processing, to create intelligent solutions that deliver real business value.",
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
        heading: "Custom AI Integrations",
        description:
          "We help integrate AI into your existing systems to enhance performance, improve user experiences, and drive business growth.",
      },
    ],
  },
  {
    id: 4,
    img: service6,
    title: "UI/UX Design",
    link: "/services/uiux-design",

    description:
      "Creating a great digital experience goes beyond just having a functional website or app. It’s about designing interfaces that are easy to use, visually appealing, and intuitive. Our UI/UX design team specializes in crafting user-centric designs that not only look great but also provide seamless interactions. We ensure every touchpoint is carefully designed to enhance user satisfaction and engagement.",
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
    title: "On Demand",
    img: OnDemandImg,
    desc: "Empowering on-demand platforms with intelligent matchmaking, real-time tracking, and user-centric analytics.",
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
];

export const bestServices = [
  {
    id: 1,
    title: "Web & App Development",
    icon: appDevIcon,
    img: appDevCardImg,
    description:
      "AppGalaxy, a subsidiary of ELIXIR AI, specializes in premium website and app development services. We work across platforms to deliver seamless digital experiences that scale new customer acquisition and retention for commerce brands.",
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
      "Working with ELIXIR AI was a game-changer for our e-commerce business. We needed a mobile app that could handle a large inventory and ensure a seamless shopping experience for our customers. ELIXIR AI not only delivered a user-friendly app for both Android and iOS but also integrated real-time inventory management and personalized recommendations using AI algorithms. Their team was incredibly responsive and flexible, making adjustments based on our feedback at every stage of development.",
  },
  {
    id: 2,
    img: "",
    name: "Priya Bansal",
    title: "Managing Director of SafeFunds Financial Group",
    description:
      "As a financial services company, we required a blockchain solution to improve transparency and security for our clients. We approached ELIXIR AI with a complex set of requirements involving smart contracts, secure transaction tracking, and decentralized data storage. Their team impressed us with their in-depth knowledge of blockchain technology and ability to explain complex concepts in simple terms. From initial consultation to the final implementation, ELIXIR AI was professional, efficient, and very detail-oriented.",
  },
  {
    id: 3,
    img: "",
    name: "Vikram Rao",
    title: "Operations Manager at FreshMart Retail Solutions",
    description:
      "We wanted to leverage AI to enhance our retail analytics capabilities, but we had no idea where to start. ELIXIR AI provided a comprehensive solution that included everything from customer behavior analysis to predictive modeling. They created an AI-driven platform that analyzed real-time customer data and provided actionable insights on purchasing trends, inventory optimization, and personalized marketing strategies.",
  },
  {
    id: 4,
    img: "",
    name: "Dr. Meera Nair",
    title: "Co-Founder of HealthNet Solutions",
    description:
      "Since implementing their solution, we have seen a significant improvement in data security, with no incidents of breaches or unauthorized access. Our clients and patients feel more confident knowing that their data is protected with cutting-edge technology. ELIXIR AI's attention to detail and ongoing support has been invaluable, making them our go-to partner for all things cybersecurity.",
  },
  {
    id: 5,
    img: "",
    name: "Anjali Deshmukh",
    title: "Sales Director at Elite Properties Pvt Ltd",
    description:
      "We were looking for innovative ways to enhance our client experience in real estate sales. ELIXIR AI helped us develop an immersive VR platform that allows potential buyers to take virtual tours of our properties from anywhere in the world. The VR environment was meticulously designed, with detailed 3D renderings that gave buyers a realistic feel of our homes.",
  },
  {
    id: 6,
    img: "",
    name: "Ajay Patil",
    title: "CTO of TechServe Solutions",
    description:
      "We needed a completely revamped website that could better reflect our growing enterprise software business. ELIXIR AI came in and completely redesigned our website from the ground up, implementing a responsive, mobile-friendly design with integrated CRM tools and a content management system. The website's new user interface is sleek, modern, and easy to navigate, providing our clients with a better experience.",
  },
  {
    id: 7,
    img: "",
    name: "Sunil Kapoor",
    title: "Operations Manager at SteelTech Manufacturing",
    description:
      "Our manufacturing process was riddled with inefficiencies due to manual data entry and repetitive tasks. ELIXIR AI’s Robotic Process Automation (RPA) solution helped us automate critical processes, from order fulfillment to inventory management. The RPA bots they developed have been instrumental in cutting down human errors, reducing operational costs, and improving productivity.",
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
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
  },
];

// Portfolio images (App Development)
export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
  },
];
