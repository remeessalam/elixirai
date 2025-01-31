import img1 from "../../assets/services-details/cloud1.jpg";
import img2 from "../../assets/services-details/cloud2.jpg";
const CloudSolutions = () => {
  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="cloud-solutions"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Cloud Solutions
        </h2>
        <p data-aos="fade-up" className="description">
          Cloud Solutions involve the use of cloud computing technologies to
          deliver scalable and flexible computing resources, such as storage,
          processing power, and applications, over the internet. Cloud solutions
          enable businesses to reduce IT infrastructure costs, improve
          accessibility, and scale operations efficiently by leveraging cloud
          providers like AWS, Microsoft Azure, and Google Cloud.
          <br />
          <br />
          One of the key benefits of cloud solutions is their ability to provide
          on-demand resources, eliminating the need for businesses to maintain
          physical infrastructure. This flexibility allows companies to rapidly
          scale their operations while ensuring high availability, security, and
          performance.
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
          alt="cloud-solutions"
        />
        <p data-aos="fade-up" className="description">
          Cloud Assessment and Strategy: We assess your current IT
          infrastructure and design a cloud adoption strategy that aligns with
          your business goals and requirements.
          <br />
          <br />
          Cloud Solution Design: Our experts design and implement tailored cloud
          solutions that provide scalability, security, and cost efficiency
          based on your specific business needs.
          <br />
          <br />
          Cloud Migration: We assist in migrating your existing applications,
          data, and infrastructure to the cloud, ensuring a seamless transition
          with minimal disruption.
          <br />
          <br />
          Ongoing Management and Support: We provide continuous monitoring,
          optimization, and support for your cloud infrastructure, ensuring
          optimal performance and addressing any issues that may arise.
          <br />
          <br />
          Training and Knowledge Transfer: We offer training programs to equip
          your team with the skills and knowledge needed to effectively manage
          and utilize cloud technologies.
        </p>
      </div>
    </div>
  );
};

export default CloudSolutions;
