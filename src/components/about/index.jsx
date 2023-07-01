import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/resume/abu talha resume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="bgWhite my-10 dark:bg-gray-900 max-w-7xl mx-auto"
    >
      <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden w-3/4 min-h-screen bg-[#161f42b0] rounded  dark:bg-gray-800 lg:block"></div>

        <div className=" flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
          <h1 className="text-3xl mb-10 md:mb-0 font-semibold text-white capitalize lg:text-5xl dark:textWhite">
            About <span className="text-cyan-500">Me</span> <br />
          </h1>

          <div className="  lg:mt-20 lg:flex lg:items-center">
            <img
              className="object-cover rounded object-center w-full lg:w-[32rem] roundedLg h-96"
              src="https://i.ibb.co/PzfPDGL/image-1-1.png"
              alt=""
            />

            <div className="mt-8 lg:px-10 lg:mt-0">
              <h1 className="text-3xl font-semibold text-gray-200 dark:textWhite lg:w-96">
                Abu Talha Md Jobayer
              </h1>
              <p className="text-gray-300">MERN Stack Web Developer</p>
              <p className="maxWLg mt-6 text-gray-400 dark:text-gray-400">
                “I am a passionate fresher MERN stack web developer, recently
                completed a MERN course from Programming Hero, and currently
                studying for a diploma in Computer Science. I am eager to
                kickstart my career in the industry and actively seeking
                opportunities to join an internship or secure a junior developer
                position in a company. I am ready to contribute, learn, and grow
                as part of a dynamic team”
              </p>
              <div className="mt-10 flex justify-between items-center">
                <a href={resume} download>
                  <button className="btn px-10 font-semibold text-gray-200 py-5 rounded ">
                    Download Resume
                  </button>
                </a>

                <div className="flex flex-wrap justify-center items-center gap-10">
                  <a
                    href="https://www.linkedin.com/in/atm-jobayer/"
                    className="hover:p-2 transition-all ease-in-out duration-150 hover:rounded-full hover:border border-cyan-500"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/abutalhazubayermunna"
                    className="hover:p-2 transition-all ease-in-out duration-150 hover:rounded-full hover:border border-cyan-500"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    href="https://github.com/zubayermunna"
                    className="hover:p-2 transition-all ease-in-out duration-150 hover:rounded-full hover:border border-cyan-500"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
