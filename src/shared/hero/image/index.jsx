const Image = ({ img }) => {
  return (
    <div className="relative  w-full">
      <span className="md:max-w-[1300px] mx-auto md:h-60 w-full h-60 bg-gradient-to-r  hidden md:flex opacity-30 from-blue-800 to-blue-800 rounded absolute filter  mr-0 blur-3xl md:blur-[200px] -z-10 top-[500px] md:top-[150px] left-10"></span>

      <div className="BG relative md:left-0 top-0 md:top-0 w-72 my-10 mx-auto h-72 -z-10 md:mx-1 md:w-96 overflow-hidden md:h-96">
        <img
          src={img}
          alt=""
          className="w-[400px]   pl-10 filter brightness-100 md:w-[500px]"
        />
      </div>
    </div>
  );
};

export default Image;
