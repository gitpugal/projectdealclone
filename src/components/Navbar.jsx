import React from "react";

const Navbar = () => {
  const topics = [
    "Home",
    "Dissertation",
    "Coursework Help",
    "Research Paper Help",
    "Dissertation Topics",
    "Dissertation Examples",
    "Dissertation Structure",
    "Essay Help",
    "PhD Proposal",
    "PhD Thesis",
    "Assignment Help",
    "Blog",
  ];

  
  return (
    <div className="w-full  z-10 fixed top-0 left-0">
      <div className="w-full bg-[#092d50]  text-white flex flex-row lg:px-32 md:px-10 px-5 py-4 justify-between items-center">
        <img src="/logo.png" alt="logo" className="h-7 lg:h-10 object-contain" />
        <div className="flex  flex-col lg:flex-row items-center gap-3">
          <p className="text-sm lg:text-lg font-semibold">
            No. 1 Dissertation Writing Services in UK,{" "}
            <span className="text-yellow-400"> Since 2001!</span>
          </p>
          <a
            className="bg-blue-500 px-4 py-2 rounded-md"
            href="tel:+442032900046"
          >
            Call +44 20 32900046
          </a>
        </div>
      </div>
      <div className="w-full flex flex-row lg:flex-nowrap flex-wrap justify-evenly ">
        {topics.map((topic, index) => (
          <button
            className={`bg-[#d69f0f] text-xs lg:text-sm hover:bg-[#f4c242] ${
              index == 0 && "bg-[#f4c242]"
            } flex-grow py-4 px-2 text-black`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
