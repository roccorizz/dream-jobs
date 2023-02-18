import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import SearchComponent from "./SearchComponent";

const Banner = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <section id="banner" className="bg-[#00425A] py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 container mx-auto px-5">
        {/*......Banner image start........*/}
        <figure className="col-span-2 md:col-span-1 w-full ">
          <img
            src="https://res.cloudinary.com/dtzwecnp5/image/upload/v1676717217/My_project_5_1_dusoih.png"
            alt="banner"
            className="shrink-0 h-[400px] w-[500px]"
          />
        </figure>
        {/*.......Banner image end........*/}
        {/*.......Banner info data start........*/}
        <div className="col-span-1 md:col-span-2">
          <div className="mb-7 md:mb-5">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-accent mb-3">
              Get Your Dream Job to
            </h1>
            {/* .....typing animation...... */}
            <TypeAnimation
              sequence={["have a Better Life.", 1000, "have a happier Life.", 1000, ""]}
              speed={75} // Must be in range between 1 and 99!
              wrapper="h2"
              repeat={Infinity}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-400 mb-3 md:mb-5 lg:mb-8"
            />
            <p className="font-bold text-accent text-base md:text-xl">
              Over 1000 Jobs are waiting for you Today!
            </p>
          </div>
          <div>
            <SearchComponent />
          </div>
          <div className="flex flex-wrap justify-start gap-2 mt-5">
            <p className="text-sm md:text-xl font-bold text-white">
              Trending Jobs Keywords:
            </p>
            <p className="bg-primary p-1 text-white cursor-pointer rounded-lg text-sm ">
              Marketing Executive
            </p>
            <p className="bg-primary p-1 text-white cursor-pointer rounded-lg text-sm ">
              Web Developer
            </p>
            <p className="bg-primary p-1 text-white cursor-pointer rounded-lg text-sm ">
              Digital Marketer
            </p>
            <p className="bg-primary p-1 text-white cursor-pointer rounded-lg text-sm ">
              HR Manager
            </p>
          </div>
        </div>
        {/*......Banner info data end.......*/}


      </div>
    </section>
  );
};

export default Banner;
