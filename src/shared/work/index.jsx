import { BackEndWorks, FrontEndWorks } from "../../constants/work";

const Work = () => {
  return (
    <section
      id="skills"
      className="max-w-7xl relative flex px-5 justify-center flex-col my-10 mx-auto items-center"
    >
      {" "}
      <span className="max-w-[1300px]  md:h-60  h-60 bg-gradient-to-r  opacity-30 from-blue-800 to-blue-800 rounded absolute filter blur-[200px] -z-10 top-[500px] md:top-[150px] left-10"></span>
      <h1 className="text-3xl md:text-5xl font-semibold ">What I Do</h1>
      <h1 className="text-3xl my-10 text-cyan-400 md:text-5xl font-semibold  ">
        Frontend Development
      </h1>
      <div className="grid grid-cols-2  my-5 justify-center items-center  justify-items-center  w-full md:grid-cols-3 gap-6 lg:grid-cols-4">
        {FrontEndWorks.map((item, indx) => (
          <div
            key={indx}
            className="bg-[#161f42b0] hover:bg-blue-900 textWhite w-full  flex flex-col rounded-xl shadowLg p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-col justify-center sm:flex-row md:space-x-4 gap-4 md:gap-0">
                <div className="rounded-full w-20 h-20 p-4 flex justify-center items-center border border-cyan-400">
                  <img src={item.image} alt="" />
                </div>
                <div className="text-md font-bold">{item.name}</div>
              </div>
            </div>
            <div className="mt-4 text-gray-500 font-bold text-sm">
              #Web Development
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-3xl my-10 text-cyan-400 md:text-5xl font-semibold">
        Backend Development
      </h1>
      <span className="max-w-[1300px]  md:h-60  h-60 bg-gradient-to-r  opacity-30 from-indigo-800 to-blue-800 rounded absolute filter blur-[200px] -z-10 top-[900px] md:top-[500px] left-10"></span>
      <span className=" md:h-96 max-w-[1300px] h-60 bg-gradient-to-r  opacity-60 md:opacity-20 from-blue-800 to-blue-800 rounded absolute filter blur-[200px] -z-10 top-[1500px] md:top-[900px] left-10"></span>
      <div className="grid grid-cols-2  my-5 justify-center items-center  justify-items-center  w-full md:grid-cols-3 gap-6 lg:grid-cols-4">
        {BackEndWorks.map((item, indx) => (
          <div
            key={indx}
            className="bg-[#161f42b0] hover:bg-blue-900 textWhite w-full  flex flex-col rounded-xl shadowLg p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-col justify-center sm:flex-row md:space-x-4 gap-4 md:gap-0">
                <div className="rounded-full w-20 h-20 p-4 flex justify-center items-center border border-cyan-400">
                  <img src={item.image} alt="" />
                </div>
                <div className="text-md font-bold">{item.name}</div>
              </div>
            </div>
            <div className="mt-4 text-gray-500 font-bold text-sm">
              #Web Development
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
