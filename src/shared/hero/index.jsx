import Image from "./image";
import BannerImage from "../../assets/man.png";
import Textes from "./textes";
const Hero = () => {
  return (
    <section id="home" className="relative mx-auto mb-10 md:my-10 max-w-7xl">
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto px-5   w-full">
        <Image img={BannerImage} />
        <Textes />
      </div>
    </section>
  );
};

export default Hero;
