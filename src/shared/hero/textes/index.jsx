import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiOutlineDownload,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";
import resume from "../../../assets/resume/abu talha resume.pdf";
const Textes = () => {
  return (
    <div className="  bg-[#161f42b0] w-full rounded-lg ">
      <span className=" max-w-[1300px] h-60 bg-gradient-to-r  opacity-10 from-blue-800 to-blue-800 rounded absolute filter blur-3xl -z-10 top-[500px] flex lg:hidden left-10"></span>
      <span className=" max-w-[1300px]  h-60 bg-gradient-to-r  opacity-30 from-blue-800 to-blue-800 rounded absolute filter blur-3xl -z-10 top-[800px] md:top-[700px] flex lg:hidden left-10"></span>
      <div className="max-w-[1300px] h-10 relative  border-b border-gray-600">
        <span className="w-3 absolute  top-3 rounded-full left-4 h-3 bg-red-600"></span>
        <span className="w-3 absolute  top-3 rounded-full left-8 h-3 bg-yellow-600"></span>
        <span className="w-3 absolute  left-12 rounded-full h-3 top-3 bg-green-600"></span>
      </div>
      <div className="w-full px-4 py-4 flex flex-col items-center gap-4 justify-center">
        <h1 className="md:text-xl text-sm font-semibold flex flex-col  text-center  w-full md:text-start">
          <div className="text-xs text-start md:text-sm font-semibold">
            <span>{"<"}</span>
            <span className="text-red-400">{"h1"}</span>
            <span className="pl-2 text-green-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-yellow-400 ">{`'text-xl font-semibold flex    w-full md:text-start'`}</span>
            <span>{">"}</span>
          </div>
          <div className="flex">
            Hello:) I am
            <span className="text-cyan-400 px-2">
              <Typewriter
                options={{
                  strings: [
                    "Abu Talha ",
                    "MERN Stack developer",
                    "Front end developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="text-xs md:text-sm text-start font-semibold">
            <span>{"</"}</span>
            <span className="text-red-400">{"h1"}</span>

            <span>{">"}</span>
          </div>
        </h1>
        <p className="w-full text-start md:text-start text-xs  md:text-sm text-gray-300 font-semibold">
          <div className="text-xs md:text-sm font-semibold">
            <span>{"<"}</span>
            <span className="text-red-400">{"article"}</span>
            <span className="pl-2 text-green-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-yellow-400">{`'text-sm'`}</span>
            <span>{">"}</span>
          </div>
          Highly motivated and enthusiastic Full Stack Developer with experience
          in designing, developing and maintaining web applications using
          technologies such as JavaScript, React,Express.js, Node.js.{" "}
          <div className="text-xs md:text-sm font-semibold">
            <span>{"</"}</span>
            <span className="text-red-400">{"article"}</span>

            <span>{">"}</span>
          </div>
        </p>
        <div className="hidden md:flex justify-start w-full items-center gap-2">
          <div className="text-xs  md:text-sm font-semibold">
            <span>{"<"}</span>
            <span className="text-blue-400">{"SocialButtons"}</span>
            <span className="pl-2 text-green-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-yellow-400">{`'icons'`}</span>
            <span>{">"}</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-4 ">
            <a href="https://www.linkedin.com/in/atmjobayer/">
              <AiFillLinkedin className=" text-3xl md:text-2xl hover:text-cyan-400 cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/abutalhazubayermunna">
              <AiFillFacebook className="text-3xl md:text-2xl cursor-pointer hover:text-cyan-400" />
            </a>
            <a href="https://github.com/zubayermunna">
              <AiFillGithub className="text-3xl md:text-2xl hover:text-cyan-400 cursor-pointer" />{" "}
            </a>
          </div>
          <div className="text-xs md:text-sm font-semibold">
            <span>{"</"}</span>
            <span className="text-blue-400">{"SocialButtons"}</span>

            <span>{">"}</span>
          </div>
        </div>
      </div>
      <div className="flex pb-4 flex-col md:flex-row items-center">
        <div className="text-xs flex justify-start md:justify-normal md:w-fit w-full md:text-sm  ml-4 font-semibold">
          <span>{"<"}</span>
          <span className="text-red-400">{"a"}</span>

          <span className="pl-2 text-green-400">{"href"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-yellow-400">{`'../abu talha resume.pdf '`}</span>
          <span className="pl-2 text-green-400">{"downlaod"}</span>

          <span>{">"}</span>
        </div>
        <a
          href={resume}
          className="flex  justify-start md:justify-normal md:w-fit w-full ml-4 gap-6 md:gap-4 "
          download
        >
          <button className="text-xs md:text-sm font-semibold   w-fit flex animate-pulse items-center gap-2   py-2  cursor-pointer ">
            <AiOutlineDownload className="font-semibold md:text-2xl" />
            Download Resume
          </button>
        </a>
        <div className="text-xs flex justify-start md:justify-normal md:w-fit w-full md:text-sm ml-4  font-semibold">
          <span>{"</"}</span>
          <span className="text-red-400">{"a"}</span>

          <span>{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default Textes;
