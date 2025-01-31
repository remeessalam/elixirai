import img1 from "../../assets/services-details/security1.jpg";
import img2 from "../../assets/services-details/security2.jpg";
const CyberSecurity = () => {
  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="cybersecurity"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Cybersecurity
        </h2>
        <p data-aos="fade-up" className="description">
          Cybersecurity is the practice of protecting systems, networks, and
          programs from digital attacks, unauthorized access, or damage. As
          businesses increasingly rely on digital technologies, cybersecurity
          has become a critical component of IT strategy to safeguard sensitive
          data and ensure the integrity of systems. Implementing robust
          cybersecurity measures is essential to protect against cyber threats
          such as hacking, phishing, malware, and data breaches.
          <br />
          <br />
          One of the key benefits of cybersecurity is its ability to prevent
          unauthorized access to data and systems, ensuring that confidential
          information remains secure. Effective cybersecurity can also minimize
          downtime and operational disruptions caused by cyber incidents,
          maintaining the continuity of business operations.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>

        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="cybersecurity"
        />
        <p data-aos="fade-up" className="description">
          Threat Assessment and Vulnerability Analysis: We assess your systems
          and networks for potential vulnerabilities and identify threats that
          may compromise your security.
          <br />
          <br />
          Security Solution Design: Our experts design and implement customized
          cybersecurity solutions that address your unique business needs and
          ensure protection against potential threats.
          <br />
          <br />
          Incident Response and Recovery: In the event of a cyber attack, we
          provide immediate response services and recovery strategies to
          minimize damage and restore operations.
          <br />
          <br />
          Ongoing Monitoring and Support: We offer continuous monitoring of your
          systems and networks, providing proactive security measures to detect
          and respond to potential threats in real time.
          <br />
          <br />
          Security Awareness Training: We provide training programs to educate
          your team on best practices for maintaining cybersecurity and
          recognizing common threats such as phishing and social engineering.
        </p>
      </div>
    </div>
  );
};

export default CyberSecurity;
