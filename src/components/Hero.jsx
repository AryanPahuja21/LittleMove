import React from "react";

const Hero = () => {
  return (
    <>
      <main className="flex justify-center bg-neutral-200 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2">
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
        </div>
      </main>
      <section className="bg-primary p-10">
        <div>
          <h1 className="w-fit mx-auto pt-7 text-4xl md:text-6xl text-neutral-200 font-bold tracking-tighter drop-shadow-[0_5.1px_3.9px_rgba(1,1,1,1)]">
            What is LittleMove ?
          </h1>
          <p className="w-fit mx-auto md:mx-64 my-7 text-xl md:text-3xl text-center font-semibold leading-relaxed">
            LittleMove has introduced a dashboard system for real-time
            visibility of school buses, incorporating safety tracking, emergency
            alerts, and route optimization to improve safety and efficiency.
          </p>
        </div>
        <div>
          <h1 className="w-fit mx-auto pt-7 text-4xl md:text-6xl text-neutral-200 font-bold tracking-tighter drop-shadow-[0_5.1px_3.9px_rgba(1,1,1,1)]">
            What's Missing ?
          </h1>
          <p className="w-fit mx-auto md:mx-64 mt-7 text-xl md:text-3xl text-center font-semibold leading-relaxed">
            Clear communication channels between drivers, school staff and
            parents.
          </p>
          <p className="w-fit mx-auto md:mx-64 my-2 text-xl md:text-3xl text-center font-semibold leading-relaxed">
            Communication regarding bus schedules, delays, and any changes in
            transportation plans.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
