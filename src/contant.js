import healthcareImg from "./assets/industries/Healthcare.jpg";
import ecommerceImg from "./assets/industries/E-commerce & Retail.jpg";
import financeImg from "./assets/industries/Finance & Banking.jpg";
import energyImg from "./assets/industries/Energy.jpg";
import realEstateImg from "./assets/industries/Real Estate.jpg";
import manufacturingImg from "./assets/industries/Manufacturing.jpg";
import dataAnalyticsImg from "./assets/industries/Data Analytics & Business Intelligence.jpg";
import iotDevelopmentImg from "./assets/industries/IoT Development.jpg";
import logisticsImg from "./assets/industries/Logistics & Supply Chain.jpg";
import educationImg from "./assets/industries/Education.jpg";
import telecomImg from "./assets/industries/Telecom.jpg";
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
// import service2 from "./assets/service2.png";
import service3 from "./assets/service3.png";
import service4 from "./assets/service4.png";
import service5 from "./assets/service5.png";
import service6 from "./assets/service6.png";
import service7 from "./assets/service7.png";
import service8 from "./assets/service8.png";
import service9 from "./assets/service9.png";
import service10 from "./assets/service10.png";
import service11 from "./assets/service11.png";
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
    extraClasses: "text-white hover:text-blue-400",
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
    title: "Web & App Development",
    description:
      "In order to scale new customer acquisition and retention for commerce brands, we work across platforms to deliver seamless digital experiences.",
    link: "/services/web-app-development",
    smallPara:
      "In today's interconnected world, web and mobile applications have become an integral part of our daily lives, transforming the way we communicate, consume information, and conduct business. From e-commerce platforms to mobile apps, these digital tools are essential for driving user engagement and meeting business goals.\n\n" +
      "Web application development involves crafting responsive and visually appealing interfaces (front-end) while ensuring robust and scalable server-side functionalities (back-end). Similarly, mobile app development requires platform-specific expertise, creating unique experiences for iOS and Android users while adhering to the technical demands of each platform. Together, web and app development form the backbone of modern digital ecosystems, offering tailored solutions to meet user needs and deliver impactful results.\n\n" +
      "AppGalaxy, a subsidiary of [your-company-name], focuses on delivering premium website and app development services. With a commitment to excellence, AppGalaxy ensures that every digital solution is designed to provide seamless user experiences and drive business growth.",
  },

  {
    id: 2,
    img: service3,
    title: "Artificial Intelligence",
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/artificial-intelligence",
    smallPara:
      "Artificial Intelligence (AI) has rapidly evolved from a concept in science fiction to a transformative force reshaping industries and societies. AI development, the process of creating intelligent systems capable of learning, reasoning, and problem-solving, is driving innovation and revolutionizing the way we live and work.\n\nAt the heart of AI development is the creation of algorithms and models that enable machines to learn from data and improve their performance over time. Machine learning, a subset of AI, involves training algorithms on large datasets to recognize patterns, make predictions, and automate tasks. Deep learning, a more advanced form of machine learning, utilizes artificial neural networks to process complex data and learn from it.",
  },
  {
    id: 3,
    img: service4,
    title: "Blockchain",
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/blockchain",
    smallPara:
      "Blockchain technology, a decentralized and distributed ledger system, has emerged as a disruptive force with the potential to transform industries across the globe. Blockchain development involves creating and implementing applications that leverage the unique features of blockchain technology to enhance security, efficiency, and transparency.\n\n At the core of blockchain is a distributed network of nodes that maintain a shared ledger of transactions. Each transaction is recorded as a block and added to the chain, creating an immutable and tamper-proof record. This decentralized nature eliminates the need for intermediaries, such as banks or clearinghouses, fostering trust and reducing the risk of fraud.",
  },
  {
    id: 4,
    img: service5,
    title: "Robotic Process Automation (RPA)",
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/rpa",
    smallPara:
      "Robotic Process Automation (RPA) is a technology that uses software robots to automate repetitive, rule-based tasks. These software robots can mimic human actions, interacting with applications and systems to perform tasks that were previously done manually. RPA has emerged as a powerful tool for businesses looking to improve efficiency, reduce costs, and enhance accuracy.\n\n One of the key benefits of RPA is its ability to automate repetitive tasks that are prone to human error. By eliminating manual intervention, RPA can significantly reduce the risk of mistakes and ensure consistency in processes. This can lead to improved quality and compliance, as well as reduced operational costs.",
  },
  {
    id: 5,
    img: service6,
    title: "AR & VR",
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/ar-vr",
    smallPara:
      "Augmented Reality (AR) and Virtual Reality (VR) are immersive technologies that are rapidly transforming the way we interact with the digital world. AR overlays digital information onto the real world, enhancing our perception of reality, while VR creates entirely simulated environments that transport us to different places and experiences.\n\n AR and VR have a wide range of applications across various industries. In gaming, they offer immersive experiences that blur the lines between the real and virtual worlds. In education, they can provide interactive and engaging learning experiences. In healthcare, they are used for training, surgery simulations, and rehabilitation. In architecture and design, they allow for virtual walkthroughs of buildings and spaces before construction.",
  },
  {
    id: 6,
    img: service7,
    title: "Game Development",
    description:
      "Creating immersive and engaging experiences through innovative game development solutions.",
    link: "/services/game-development",
    smallPara:
      "Game Development is an exciting and dynamic field that combines creativity, storytelling, and cutting-edge technology to create interactive experiences. From casual mobile games to expansive multiplayer universes, game development encompasses a wide range of platforms and genres, catering to diverse audiences worldwide.\n\n" +
      "The process of game development involves multiple stages, including concept design, programming, asset creation, and testing. Developers use powerful game engines like Unity and Unreal Engine to build visually stunning and performance-optimized games. With the integration of AI, augmented reality (AR), and virtual reality (VR), modern games are becoming more immersive and adaptive, providing players with unique and personalized experiences. Game development continues to push the boundaries of entertainment, merging technology and artistry to captivate players globally.",
  },
  {
    id: 7,
    img: service8,
    title: "IoT Development",
    description:
      "Empowering businesses with connected solutions to revolutionize operations and user experiences.",
    link: "/services/iot-development",
    smallPara:
      "Internet of Things (IoT) development is at the forefront of digital transformation, enabling businesses to connect devices, systems, and people seamlessly. IoT applications range from smart home devices to industrial automation, providing real-time data insights and control over physical and digital systems.\n\n IoT development involves the integration of sensors, connectivity, and analytics platforms to build systems that enhance efficiency, improve decision-making, and create new revenue opportunities. By leveraging IoT technology, businesses can innovate and thrive in a connected world.",
  },
  {
    id: 8,
    img: service9,
    title: "Data Analytics",
    description:
      "Transforming data into actionable insights to drive strategic decisions.",
    link: "/services/data-analytics",
    smallPara:
      "Data Analytics is a powerful tool for extracting meaningful insights from raw data. Through techniques like descriptive, predictive, and prescriptive analytics, businesses can understand trends, anticipate outcomes, and optimize strategies.\n\n Data analytics development involves leveraging tools like machine learning, data visualization, and big data processing to uncover hidden patterns and opportunities. By making data-driven decisions, organizations can improve efficiency, enhance customer experiences, and achieve their goals with greater precision.",
  },
  {
    id: 9,
    img: service10,
    title: "Cloud Solutions",
    description:
      "Providing scalable, secure, and cost-effective cloud solutions for modern businesses.",
    link: "/services/cloud-solutions",
    smallPara:
      "Cloud solutions enable businesses to store, manage, and process data on scalable, on-demand infrastructures. By adopting cloud computing, organizations can reduce IT costs, enhance flexibility, and improve collaboration.\n\n Cloud solutions development focuses on designing and deploying services such as Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS). These solutions ensure reliability, security, and accessibility, empowering businesses to innovate without limitations.",
  },
  {
    id: 10,
    img: service11,
    title: "Cybersecurity",
    description:
      "Safeguarding digital assets and ensuring data integrity against evolving cyber threats.",
    link: "/services/cybersecurity",
    smallPara:
      "Cybersecurity is an essential practice to protect sensitive information, systems, and networks from cyberattacks. With the increasing complexity of threats, cybersecurity development involves creating robust defense mechanisms, intrusion detection systems, and encryption protocols.\n\n By implementing comprehensive security measures, businesses can ensure data privacy, comply with regulations, and maintain trust with customers and stakeholders. Cybersecurity solutions are vital for safeguarding against financial losses and reputational damage in an ever-evolving digital landscape.",
  },
];

export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: healthcareImg,
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "E-commerce & Retail",
    img: ecommerceImg,
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Finance & Banking",
    img: financeImg,
    desc: "Streamlining processes with AI, blockchain, and machine learning for fraud detection, risk assessment, and smarter investment strategies.",
  },
  {
    id: 4,
    title: "Energy",
    img: energyImg,
    desc: "Optimizing energy management, forecasting, and sustainability with IoT and data-driven AI solutions.",
  },
  {
    id: 5,
    title: "Real Estate",
    img: realEstateImg,
    desc: "Revolutionizing property management, investment decisions, and customer engagement with AI and predictive analytics.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: manufacturingImg,
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "Data Analytics & Business Intelligence",
    img: dataAnalyticsImg,
    desc: "Actionable insights from big data to drive informed decision-making and growth strategies.",
  },
  {
    id: 8,
    title: "IoT Development",
    img: iotDevelopmentImg,
    desc: "Connecting devices and systems to enhance automation and operational efficiency.",
  },
  {
    id: 9,
    title: "Logistics & Supply Chain",
    img: logisticsImg,
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: educationImg,
    desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 11, // Adjusted the duplicate ID
    title: "Telecom",
    img: telecomImg,
    desc: "Boosting network efficiency, customer service, and fraud prevention through AI-driven solutions.",
  },
];

export const bestServices = [
  {
    id: 1,
    title: "Web & App Development",
    icon: appDevIcon,
    img: appDevCardImg,
    description:
      "AppGalaxy, a subsidiary of [your-company-name], specializes in premium website and app development services. We work across platforms to deliver seamless digital experiences that scale new customer acquisition and retention for commerce brands.",
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
      "Working with [Your Company Name] was a game-changer for our e-commerce business. We needed a mobile app that could handle a large inventory and ensure a seamless shopping experience for our customers. [Your Company Name] not only delivered a user-friendly app for both Android and iOS but also integrated real-time inventory management and personalized recommendations using AI algorithms. Their team was incredibly responsive and flexible, making adjustments based on our feedback at every stage of development.",
  },
  {
    id: 2,
    img: "",
    name: "Priya Bansal",
    title: "Managing Director of SafeFunds Financial Group",
    description:
      "As a financial services company, we required a blockchain solution to improve transparency and security for our clients. We approached [Your Company Name] with a complex set of requirements involving smart contracts, secure transaction tracking, and decentralized data storage. Their team impressed us with their in-depth knowledge of blockchain technology and ability to explain complex concepts in simple terms. From initial consultation to the final implementation, [Your Company Name] was professional, efficient, and very detail-oriented.",
  },
  {
    id: 3,
    img: "",
    name: "Vikram Rao",
    title: "Operations Manager at FreshMart Retail Solutions",
    description:
      "We wanted to leverage AI to enhance our retail analytics capabilities, but we had no idea where to start. [Your Company Name] provided a comprehensive solution that included everything from customer behavior analysis to predictive modeling. They created an AI-driven platform that analyzed real-time customer data and provided actionable insights on purchasing trends, inventory optimization, and personalized marketing strategies.",
  },
  {
    id: 4,
    img: "",
    name: "Dr. Meera Nair",
    title: "Co-Founder of HealthNet Solutions",
    description:
      "Since implementing their solution, we have seen a significant improvement in data security, with no incidents of breaches or unauthorized access. Our clients and patients feel more confident knowing that their data is protected with cutting-edge technology. [Your Company Name]'s attention to detail and ongoing support has been invaluable, making them our go-to partner for all things cybersecurity.",
  },
  {
    id: 5,
    img: "",
    name: "Anjali Deshmukh",
    title: "Sales Director at Elite Properties Pvt Ltd",
    description:
      "We were looking for innovative ways to enhance our client experience in real estate sales. [Your Company Name] helped us develop an immersive VR platform that allows potential buyers to take virtual tours of our properties from anywhere in the world. The VR environment was meticulously designed, with detailed 3D renderings that gave buyers a realistic feel of our homes.",
  },
  {
    id: 6,
    img: "",
    name: "Ajay Patil",
    title: "CTO of TechServe Solutions",
    description:
      "We needed a completely revamped website that could better reflect our growing enterprise software business. [Your Company Name] came in and completely redesigned our website from the ground up, implementing a responsive, mobile-friendly design with integrated CRM tools and a content management system. The website's new user interface is sleek, modern, and easy to navigate, providing our clients with a better experience.",
  },
  {
    id: 7,
    img: "",
    name: "Sunil Kapoor",
    title: "Operations Manager at SteelTech Manufacturing",
    description:
      "Our manufacturing process was riddled with inefficiencies due to manual data entry and repetitive tasks. [Your Company Name]’s Robotic Process Automation (RPA) solution helped us automate critical processes, from order fulfillment to inventory management. The RPA bots they developed have been instrumental in cutting down human errors, reducing operational costs, and improving productivity.",
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
    question: "How can I get in touch with [your-company-name].?",
    answer: `You can reach out to us through the contact form on this page, or by emailing us directly at info@example.com. Alternatively, you can also call us at +91-8547203254 for immediate assistance.`,
  },
  {
    id: 2,
    question: "How long will it take for someone to respond to my inquiry?",
    answer: `We aim to respond to all inquiries within 24–48 hours on business days. If you need urgent assistance, please indicate so in your message, and we’ll prioritize your request.`,
  },
  {
    id: 3,
    question: "What types of services does [your-company-name]. offer?",
    answer: `[your-company-name]. offers a wide range of services including:
      - Artificial Intelligence (AI)
      - Mobile App Development
      - Website Development
      - UI/UX Design
      - Custom Software Development
      - Data Analytics
      - Internet of Things (IoT)
      - Robotic Process Automation (RPA)
      - Augmented Reality (AR) & Virtual Reality (VR)
      - Game Development
      - Blockchain Solutions
      - Cloud Services
      - Cybersecurity
    For more detailed information, please visit our Services page.`,
  },
  {
    id: 4,
    question:
      "How do I schedule a consultation or meeting with [your-company-name].?",
    answer: `You can schedule a meeting by filling out the contact form on this page or by sending us an email at <strong>info@example.com</strong>. We’ll get back to you with available time slots.`,
  },
  {
    id: 5,
    question: "Do you offer support for ongoing projects?",
    answer: `Yes, we provide support for all ongoing projects. Whether you need help with updates, maintenance, or troubleshooting, our team is ready to assist you.`,
  },
  {
    id: 6,
    question: "Can I request a quote for a specific service?",
    answer: `Yes, we provide custom quotes based on your requirements. Please fill out the contact form with details about the service you need, and we’ll send you an estimate as soon as possible.`,
  },
  {
    id: 7,
    question: "Do you offer free consultations?",
    answer: `Yes, we offer a free initial consultation to better understand your needs and discuss potential solutions. Reach out to schedule your consultation!`,
  },
  {
    id: 8,
    question: "Where is [your-company-name]. located?",
    answer: `[your-company-name]. operates remotely, and our team works from various locations around the world. We’re fully capable of supporting clients globally.`,
  },
  {
    id: 9,
    question: "What industries do you specialize in?",
    answer: `[your-company-name]. has worked with clients across multiple industries, including:
      - Tech
      - Healthcare
      - Finance
      - Retail
      - Entertainment
    We tailor our solutions to fit the unique needs of each industry.`,
  },
  {
    id: 10,
    question: "Can I work with [your-company-name]. from any country?",
    answer: `Absolutely! [your-company-name]. works with clients globally. Thanks to our remote setup, we are able to serve businesses in different time zones and regions efficiently.`,
  },
  {
    id: 11,
    question:
      "How do I track the progress of my project with [your-company-name].?",
    answer: `We provide regular project updates through email, meetings, or our project management platform. You will have access to track the status and milestones of your project.`,
  },
  {
    id: 12,
    question: "What makes [your-company-name]. different from other companies?",
    answer: `At [your-company-name]., we focus on delivering cutting-edge, custom solutions tailored to your business needs. Our approach combines deep industry expertise with a focus on innovation and customer satisfaction, ensuring we always exceed expectations.`,
  },
];
