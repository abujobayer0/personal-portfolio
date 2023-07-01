import "./projects.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import reactImage from "../../assets/frontend/react.256x228.png";
import "react-vertical-timeline-component/style.min.css";
import { AiFillGithub } from "react-icons/ai";
const Projects = () => {
  return (
    <section
      id="project"
      className="flex mt-10 md:mt-44 max-w-7xl mx-auto relative flex-col gap-12"
    >
      <span className=" md:h-[100vh] max-w-[1300px] h-60 bg-gradient-to-r  opacity-30 from-blue-800 to-blue-800 rounded absolute filter blur-[200px] -z-10 top-[300px] md:top-[150px] left-10"></span>
      <h1 className="mx-auto w-full text-3xl md:text-5xl font-semibold text-cyan-400 my-10 text-center">
        Projects
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#161f42b0", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #161f42b0" }}
          iconStyle={{ background: "#161f42b0", color: "#161f42b0" }}
          icon={<img alt="" className="p-2" src={reactImage} />}
        >
          <div className="flex flex-col justify-center ">
            <div className="relative flex flex-col md:flexRow  space-y-3 md:space-y-0 rounded-xl  p-3 w-full mx-auto border border-transparent ">
              <div className="flex-none w-full md:w-96 h-96 image-wrapper -translate-y-4   hover:translate-y-150  mx-auto overflow-hidden  ">
                <img
                  src="https://i.ibb.co/d2pRmjq/screencapture-melodify-77a9c-firebaseapp-2023-06-28-12-34-33.png"
                  alt="pic"
                  className="rounded-md hover:-translate-y-[70%]  transform w-full  image transition-all  duration-[5s] ease-in-out   "
                />
              </div>
              <div className="w-full bg-transparent flex flex-col justify-start items-start space-y-2 py-3">
                <h3 className="font-black text-gray-200 md:text-3xl w-full text-xl">
                  Melodify Music Learning Platform
                </h3>
                <p className="md:text-lg w-full text-gray-500 text-base ">
                  Unlock your musical potential with our innovative platform.
                  Learn instruments, music theory, and composition through
                  interactive lessons and personalized guidance.
                </p>
                <div className="flex items-center gap-6">
                  <a
                    target="blank"
                    href="https://melodify-77a9c.firebaseapp.com/"
                    className="text-xl font-black  px-5 btn text-center py-2"
                  >
                    Live Demo
                  </a>
                  <a
                    href="
                  "
                  >
                    {/* <AiFillGithub className="text-4xl" /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#161f42b0", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #161f42b0" }}
          iconStyle={{ background: "#161f42b0", color: "#161f42b0" }}
          icon={<img alt="" className="p-2" src={reactImage} />}
        >
          <div className="flex flex-col justify-center ">
            <div className="relative flex flex-col md:flexRow  space-y-3 md:space-y-0 rounded-xl  p-3 w-full mx-auto border border-transparent ">
              <div className="flex-none w-full md:w-96 h-96 image-wrapper -translate-y-4   hover:translate-y-150  mx-auto overflow-hidden  ">
                <img
                  src="https://i.ibb.co/bNhk0n0/screencapture-heaven-9b467-web-app-2023-06-27-13-20-06.png"
                  alt="pic"
                  className="rounded-md hover:-translate-y-[70%]  transform w-full  image transition-all  duration-[5s] ease-in-out   "
                />
              </div>
              <div className="w-full bg-transparent flex flex-col justify-start items-start space-y-2 py-3">
                <h3 className="font-black text-gray-200 md:text-3xl w-full text-xl">
                  Heaven Toy Store
                </h3>
                <p className="md:text-lg w-full text-gray-500 text-base ">
                  Discover a world of imagination at our toy store. From classic
                  favorites to the latest trends, find endless joy and endless
                  playtime possibilities.
                </p>
                <div className="flex items-center gap-6">
                  <a
                    target="blank"
                    href="https://heaven-9b467.web.app/"
                    className="text-xl font-black  px-5 btn text-center py-2"
                  >
                    Live Demo
                  </a>
                  <a
                    href="
                  "
                  >
                    {/* <AiFillGithub className="text-4xl" /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#161f42b0", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #161f42b0" }}
          iconStyle={{ background: "#161f42b0", color: "#161f42b0" }}
          icon={<img alt="" className="p-2" src={reactImage} />}
        >
          <div className="flex flex-col justify-center ">
            <div className="relative flex flex-col md:flexRow  space-y-3 md:space-y-0 rounded-xl  p-3 w-full mx-auto border border-transparent ">
              <div className="flex-none w-full md:w-96 h-96 image-wrapper -translate-y-4   hover:translate-y-150  mx-auto overflow-hidden  ">
                <img
                  src="https://i.ibb.co/TTgk3sx/screencapture-turkish-b4e55-web-app-2023-06-27-21-07-39.png"
                  alt="pic"
                  className="rounded-md hover:-translate-y-[53%]  transform w-full  image transition-all  duration-[5s] ease-in-out   "
                />
              </div>
              <div className="w-full bg-transparent flex flex-col justify-start items-start space-y-2 py-3">
                <h3 className="font-black text-gray-200 md:text-3xl w-full text-xl">
                  Turkish Chef Hunter Recipe
                </h3>
                <p className="md:text-lg w-full text-gray-500 text-base ">
                  Embark on a culinary adventure with Chef Hunter's recipe
                  website. Explore a treasure trove of mouthwatering recipes,
                  cooking tips, and culinary inspiration.
                </p>
                <div className="flex items-center gap-6">
                  <a
                    target="blank"
                    href="https://turkish-b4e55.web.app/"
                    className="text-xl font-black  px-5 btn text-center py-2"
                  >
                    Live Demo
                  </a>
                  <a
                    href="
                  "
                  >
                    {/* <AiFillGithub className="text-4xl" /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <span className="max-w-[1300px] md:h-[100vh]  h-60 bg-gradient-to-r  opacity-30 from-blue-800 to-blue-800 rounded absolute filter blur-[200px] -z-10 top-[900px] md:top-[1100px] left-10"></span>
    </section>
  );
};

export default Projects;
