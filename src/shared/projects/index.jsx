import { useState } from "react";
import "./projects.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      title: "Frontend Development",
      content: [
        {
          title: "Melodify Music Learning Platform",
          para: "Unlock your musical potential with our innovative platform. Learn instruments, music theory, and composition through interactive lessons and personalized guidance.",
          img: "https://i.ibb.co/d2pRmjq/screencapture-melodify-77a9c-firebaseapp-2023-06-28-12-34-33.png",
          live_link: "https://melodify-77a9c.firebaseapp.com/",
          github_cli: "https://github.com/zubayermunna/melodify-client",
          github_svr: "https://github.com/zubayermunna/melodify-server",
        },
        {
          title: "NFT Website User Interface",
          para: "Discover a world of digital samurai art and culture on our NFT website. Explore unique, collectible samurai-themed NFTs created by talented artists.",
          img: "https://i.ibb.co/vznXc2p/screencapture-samurai-nft-six-vercel-app-2023-09-01-15-28-52.png",
          live_link: "https://samurai-nft-six.vercel.app/",
          github_cli: "https://github.com/zubayermunna/samurai-nft",
        },
        {
          title: "Heaven Toy Store",
          para: "Discover a world of imagination at our toy store. From classic favorites to the latest trends, find endless joy and endless playtime possibilities.",
          img: "https://i.ibb.co/bNhk0n0/screencapture-heaven-9b467-web-app-2023-06-27-13-20-06.png",
          live_link: "https://heaven-9b467.web.app/",
          github_cli: "https://github.com/zubayermunna/heaven-client-side",
          github_svr: "https://github.com/zubayermunna/heaven-server",
        },
        {
          title: "React mini Youtube",
          para: "Introducing my mini YouTube, a compact hub for bite-sized entertainment and knowledge. Dive into a world of concise videos covering various topics, from quick tutorials to entertaining snippets. Join the mini YouTube community today!",
          img: "https://user-images.githubusercontent.com/108220804/219965218-d322a2da-f2fd-4835-b861-fd01773209e3.png",
          github_cli: "https://github.com/zubayermunna/React-mini-YouTube",
        },
        {
          title: "Device Zone",
          para: "Revolutionize shopping with our E-commerce platform. Explore a vast range of products, enjoy seamless navigation, and secure transactions for a convenient and delightful online shopping experience.",
          img: "https://i.ibb.co/tM0RsXn/screencapture-device-zone-vercel-app-2023-08-31-16-38-08-1.png",
          live_link: "https://gadget-zone-606a4.web.app/",
          github_cli: "https://github.com/zubayermunna/device-zone",
          github_svr: "https://github.com/zubayermunna/device-zone-server",
        },
        {
          title: "Turkish Chef Hunter Recipe",
          para: "Embark on a culinary adventure with Chef Hunter's recipe website. Explore a treasure trove of mouthwatering recipes, cooking tips, and culinary inspiration.",
          img: "https://i.ibb.co/TTgk3sx/screencapture-turkish-b4e55-web-app-2023-06-27-21-07-39.png",
          live_link: "https://turkish-b4e55.web.app/",
        },
      ],
    },
    {
      title: "MERN Stack Development",
      content: [
        {
          title: "Melodify Music Learning Platform",
          para: "Unlock your musical potential with our innovative platform. Learn instruments, music theory, and composition through interactive lessons and personalized guidance.",
          img: "https://i.ibb.co/d2pRmjq/screencapture-melodify-77a9c-firebaseapp-2023-06-28-12-34-33.png",
          live_link: "https://melodify-77a9c.firebaseapp.com/",
          github_cli: "https://github.com/zubayermunna/melodify-client",
          github_svr: "https://github.com/zubayermunna/melodify-server",
        },
        {
          title: "Device Zone",
          para: "Revolutionize shopping with our E-commerce platform. Explore a vast range of products, enjoy seamless navigation, and secure transactions for a convenient and delightful online shopping experience.",
          img: "https://i.ibb.co/tM0RsXn/screencapture-device-zone-vercel-app-2023-08-31-16-38-08-1.png",
          live_link: "https://gadget-zone-606a4.web.app/",
          github_cli: "https://github.com/zubayermunna/device-zone",
          github_svr: "https://github.com/zubayermunna/device-zone-server",
        },

        {
          title: "Employe Management",
          para: "Discover a world of imagination at our toy store. From classic favorites to the latest trends, find endless joy and endless playtime possibilities.",
          img: "https://i.ibb.co/d2dMSW8/screencapture-task-alpha-five-vercel-app-search-2023-08-31-16-59-47-1.png",
          live_link: "https://task-82976.web.app/",
          github_cli: "https://github.com/zubayermunna/task",
          github_svr: "https://github.com/zubayermunna/task-crud-server",
        },
        {
          title: "Heaven Toy Store",
          para: "Discover a world of imagination at our toy store. From classic favorites to the latest trends, find endless joy and endless playtime possibilities.",
          img: "https://i.ibb.co/bNhk0n0/screencapture-heaven-9b467-web-app-2023-06-27-13-20-06.png",
          live_link: "https://heaven-9b467.web.app/",
          github_cli: "https://github.com/zubayermunna/heaven-client-side",
          github_svr: "https://github.com/zubayermunna/heaven-server",
        },
        {
          title: "Turkish Chef Hunter Recipe",
          para: "Embark on a culinary adventure with Chef Hunter's recipe website. Explore a treasure trove of mouthwatering recipes, cooking tips, and culinary inspiration.",
          img: "https://i.ibb.co/TTgk3sx/screencapture-turkish-b4e55-web-app-2023-06-27-21-07-39.png",
          live_link: "https://turkish-b4e55.web.app/",
        },
      ],
    },
    {
      title: "React Native Development",
      content: [
        {
          title: "Citizenship",
          para: "Discover a world of imagination at our toy store. From classic favorites to the latest trends, find endless joy and endless playtime possibilities.",
          img: "https://i.ibb.co/kD7kcbS/Screenshot-2023-08-25-23-29-06-667-host-exp-exponent-iphone12black-portrait.png",
        },
      ],
    },
  ];
  const contentStyle = { background: "#00051a", borderColor: "#000" };

  return (
    <section
      id="project"
      className="flex mt-10 md:mt-44  max-w-7xl mx-auto relative flex-col gap-12"
    >
      <span className=" md:h-[100vh] max-w-[1300px] h-60 bg-gradient-to-r  opacity-30 from-blue-800 to-blue-800 rounded absolute filter blur-[200px] -z-10 top-[300px] md:top-[150px] left-10"></span>
      <h1 className="mx-auto w-full text-3xl md:text-5xl font-semibold text-cyan-400 my-10 text-center">
        Projects
      </h1>
      <div className="flex flex-col px-5 md:px-0 w-full">
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-md mb-2 sm:mb-0 ${
                index === activeTab
                  ? "bg-cyan-400 text-white"
                  : "bg-[#161f42b0] text-cyan-400"
              } transition duration-300 ease-in-out`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-black rounded-md shadow-md">
          {tabData[activeTab].content.map((item, index) => (
            <div
              key={index}
              className="bg-[#161f42b0]  p-6 rounded-md shadow-md"
            >
              <div
                className={`mb-4 w-96  relative ${
                  activeTab === 2 ? "h-fit" : "h-60"
                } overflow-hidden`}
              >
                {activeTab === 2 && (
                  <div className="flex justify-between cursor-not-allowed z-10 w-full bottom-0 absolute items-end h-full ">
                    <span className="w-20 h-20 cursor-not-allowed text-4xl flex justify-center items-center text-[#fff]  rounded-full bg-[#161f42b0]">
                      {"<"}
                    </span>
                    <span className="w-20 h-20 cursor-not-allowed text-4xl flex justify-center items-center text-[#fff] rounded-full bg-[#161f42b0]">
                      {">"}
                    </span>
                  </div>
                )}
                {activeTab === 2 && (
                  <span className="absolute text-gray-300 bg-[#161f42b0] px-5 py-2 justify-center items-center flex mx-auto top-60 left-10 z-50 ">
                    Currently Working
                  </span>
                )}
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full hover:scale-105 duration-150 ease-in opacity-50 hover:opacity-100 rounded-md shadow-md`}
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-200 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-300 mb-4">{item.para}</p>
              <div className="flex space-x-4">
                {activeTab !== 2 && (
                  <a
                    href={item.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4  btn text-white rounded-md  transition duration-300 ease-in-out"
                  >
                    Live Demo
                  </a>
                )}
                {activeTab === 0 && (
                  <a
                    href={item.github_cli}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300 ease-in-out"
                  >
                    GitHub
                  </a>
                )}
                {activeTab === 1 && (
                  <Popup
                    trigger={
                      <button className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300 ease-in-out">
                        GitHub
                      </button>
                    }
                    {...{ contentStyle }}
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="p-10 bg-transparent gap-2 flex-col md:flex-row flex border-none">
                        <a
                          href={item.github_cli}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-cyan-400 transition duration-300 ease-in-out"
                        >
                          Client Side Code
                        </a>
                        <a
                          href={item.github_svr}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-cyan-400 transition duration-300 ease-in-out"
                        >
                          Server Side Code
                        </a>
                      </div>
                    )}
                  </Popup>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="max-w-[1300px] md:h-[100vh]  h-60 bg-gradient-to-r  opacity-30 from-blue-800 to-blue-800 rounded absolute filter blur-[200px] -z-10 top-[900px] md:top-[1100px] left-10"></span>
    </section>
  );
};

export default Projects;
