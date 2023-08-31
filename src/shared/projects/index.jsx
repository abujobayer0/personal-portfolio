import { useState } from "react";
import "./projects.css";

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
        },
        {
          title: "Heaven Toy Store",
          para: "Discover a world of imagination at our toy store. From classic favorites to the latest trends, find endless joy and endless playtime possibilities.",
          img: "https://i.ibb.co/bNhk0n0/screencapture-heaven-9b467-web-app-2023-06-27-13-20-06.png",
        },
        {
          title: "React mini Youtube",
          para: "Discover a world of imagination at our toy store. From classic favorites to the latest trends, find endless joy and endless playtime possibilities.",
          img: "https://user-images.githubusercontent.com/108220804/219965218-d322a2da-f2fd-4835-b861-fd01773209e3.png",
        },
        {
          title: "Device Zone",
          para: "Revolutionize shopping with our E-commerce platform. Explore a vast range of products, enjoy seamless navigation, and secure transactions for a convenient and delightful online shopping experience.",
          img: "https://i.ibb.co/tM0RsXn/screencapture-device-zone-vercel-app-2023-08-31-16-38-08-1.png",
        },
        {
          title: "Turkish Chef Hunter Recipe",
          para: "Embark on a culinary adventure with Chef Hunter's recipe website. Explore a treasure trove of mouthwatering recipes, cooking tips, and culinary inspiration.",
          img: "https://i.ibb.co/TTgk3sx/screencapture-turkish-b4e55-web-app-2023-06-27-21-07-39.png",
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
        },
        {
          title: "Device Zone",
          para: "Revolutionize shopping with our E-commerce platform. Explore a vast range of products, enjoy seamless navigation, and secure transactions for a convenient and delightful online shopping experience.",
          img: "https://i.ibb.co/tM0RsXn/screencapture-device-zone-vercel-app-2023-08-31-16-38-08-1.png",
        },

        {
          title: "Heaven Toy Store",
          para: "Discover a world of imagination at our toy store. From classic favorites to the latest trends, find endless joy and endless playtime possibilities.",
          img: "https://i.ibb.co/bNhk0n0/screencapture-heaven-9b467-web-app-2023-06-27-13-20-06.png",
        },
        {
          title: "Turkish Chef Hunter Recipe",
          para: "Embark on a culinary adventure with Chef Hunter's recipe website. Explore a treasure trove of mouthwatering recipes, cooking tips, and culinary inspiration.",
          img: "https://i.ibb.co/TTgk3sx/screencapture-turkish-b4e55-web-app-2023-06-27-21-07-39.png",
        },
      ],
    },
    {
      title: "React Native Development",
      content: [
        {
          title: "Melodify Music Learning Platform",
          para: "Unlock your musical potential with our innovative platform. Learn instruments, music theory, and composition through interactive lessons and personalized guidance.",
          img: "https://i.ibb.co/d2pRmjq/screencapture-melodify-77a9c-firebaseapp-2023-06-28-12-34-33.png",
        },
        {
          title: "Heaven Toy Store",
          para: "Discover a world of imagination at our toy store. From classic favorites to the latest trends, find endless joy and endless playtime possibilities.",
          img: "https://i.ibb.co/bNhk0n0/screencapture-heaven-9b467-web-app-2023-06-27-13-20-06.png",
        },
      ],
    },
  ];
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
        <div className="bg-[#161f42b0] grid grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-black rounded-md shadow-md">
          {tabData[activeTab].content.map((item, index) => (
            <div
              key={index}
              className="border border-cyan-800  p-6 rounded-md shadow-md"
            >
              <div className="mb-4 w-96  h-60 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full hover:scale-105 duration-150 ease-in  rounded-md shadow-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-200 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-300 mb-4">{item.para}</p>
              <div className="flex space-x-4">
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 bg-cyan-400 text-white rounded-md hover:bg-cyan-600 transition duration-300 ease-in-out"
                >
                  Live Demo
                </a>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300 ease-in-out"
                >
                  GitHub
                </a>
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
