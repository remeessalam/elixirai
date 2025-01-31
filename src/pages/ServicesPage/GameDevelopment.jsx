import img1 from "../../assets/services-details/game1.jpg";
import img2 from "../../assets/services-details/game2.jpg";

const GameDevelopment = () => {
  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="ar and vr"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Game Development
        </h2>
        <p data-aos="fade-up" className="description">
          Game development is a dynamic process that involves designing,
          creating, and building interactive entertainment experiences. From
          stunning visuals to immersive gameplay, game development blends art,
          technology, and storytelling to captivate audiences across the globe.
          Whether it&apos;s a mobile game, console experience, or a PC title,
          the process requires creativity, innovation, and technical expertise.
          <br />
          <br />
          Modern game development leverages advanced tools and technologies to
          bring ideas to life. From designing rich environments and lifelike
          characters to implementing physics-based gameplay and realistic
          animations, every aspect of game creation is meticulously crafted to
          deliver an engaging experience. The collaborative effort between
          developers, designers, and storytellers is what turns concepts into
          captivating games.
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
          alt="ar and vr"
        />
        <p data-aos="fade-up" className="description">
          Game Concept Design: We help you conceptualize your game idea,
          defining the theme, mechanics, and user engagement strategies.
          <br />
          <br />
          Art and Animation: Our talented artists and animators bring your game
          to life with visually stunning designs and smooth, dynamic animations.
          <br />
          <br />
          Game Development: Using cutting-edge game engines like Unity and
          Unreal Engine, we build interactive and engaging games tailored to
          your vision.
          <br />
          <br />
          Platform Optimization: We ensure your game performs seamlessly across
          platforms, from mobile devices to PCs and consoles.
          <br />
          <br />
          Quality Assurance: Rigorous testing ensures your game is free of bugs,
          delivering a smooth and enjoyable experience for players.
          <br />
          <br />
          Post-Launch Support: From updates to new features and bug fixes, we
          provide ongoing support to keep your game fresh and engaging.
        </p>
      </div>
    </div>
  );
};

export default GameDevelopment;
