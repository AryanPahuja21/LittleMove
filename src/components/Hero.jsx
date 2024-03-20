import React from "react";

const Hero = () => {
  return (
    <div className="">
        <div className="flex justify-center bg-neutral-200 pb-14">
      <main className="grid grid-cols-1 md:grid-cols-2">
        <img src="/heroimg.png" alt="LittleMove" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-fit mx-auto my-5 md:my-10 text-7xl md:text-8xl text-primary font-bold tracking-tighter drop-shadow-[0_3.2px_1.2px_rgba(0,0,0,0.8)]">
            LittleMove
          </h1>
          <div>
            <p className="w-fit mx-auto my-3 md:my-5 text-3xl md:text-5xl text-black font-medium">
              Revolutionizing
            </p>
            <p className="w-fit mx-auto my-2 md:my-5 text-4xl md:text-6xl text-black font-bold">
              School Transportation
            </p>
          </div>
        </div>
      </main>
        </div>
    </div>
  );
};

export default Hero;
