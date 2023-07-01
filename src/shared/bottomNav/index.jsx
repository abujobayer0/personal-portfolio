import { useEffect, useState } from "react";
import { AiOutlineHome, AiFillInfoCircle } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineContactPhone } from "react-icons/md";

const BottomNav = () => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowDiv = window.scrollY > 0;
      setShowDiv(shouldShowDiv);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(showDiv);
  return (
    <>
      {showDiv && (
        <div className=" w-80 sm:w-96 flex  justify-around items-center px-5 sm:px-10 py-1 border-cyan-500 border rounded-full mx-auto fixed filter bg-[#161f42b0]  bottom-4 left-0 right-0">
          <a
            href="#home"
            className={`rounded-full text-2xl  p-2 ${
              activeSection === "home"
                ? "bg-cyan-400 text-black border-blue-700"
                : ""
            }`}
          >
            <AiOutlineHome />
          </a>
          <a
            href="#skills"
            className={`rounded-full text-2xl  p-2 ${
              activeSection === "skills"
                ? "bg-cyan-400 text-black border-blue-700"
                : ""
            }`}
          >
            <FaLaptopCode />
          </a>
          <a
            href="#about"
            className={`rounded-full text-2xl  p-2 ${
              activeSection === "about"
                ? "bg-cyan-400 text-black border-blue-700"
                : ""
            }`}
          >
            <AiFillInfoCircle />
          </a>
          <a
            href="#project"
            className={`rounded-full text-2xl  p-2 ${
              activeSection === "project"
                ? "bg-cyan-400 text-black border-blue-700"
                : ""
            }`}
          >
            <CgWebsite />
          </a>

          <a
            href="#contact"
            className={`rounded-full text-2xl  p-2 ${
              activeSection === "contact"
                ? "bg-cyan-400 text-black border-blue-700"
                : ""
            }`}
          >
            <MdOutlineContactPhone />
          </a>
        </div>
      )}
    </>
  );
};

export default BottomNav;
