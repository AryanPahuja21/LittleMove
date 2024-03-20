import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedItem = ({ direction, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, x: direction === "right" ? -50 : 0, y: direction === "up" ? 50 : 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <>
      <main className="flex justify-center bg-neutral-200 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <AnimatedItem direction="up">
            <img src="/heroimg.png" alt="LittleMove" />
          </AnimatedItem>
          <div className="flex flex-col items-center justify-center">
            <AnimatedItem direction="up">
              <h1 className="w-fit mx-auto my-5 md:my-10 text-7xl md:text-8xl text-primary font-bold tracking-tighter drop-shadow-[0_3.2px_1.2px_rgba(0,0,0,0.8)]">
                LittleMove
              </h1>
            </AnimatedItem>
            <div>
              <AnimatedItem direction="up">
                <p className="w-fit mx-auto my-3 md:my-5 text-3xl md:text-5xl text-black font-medium">
                  Revolutionizing
                </p>
              </AnimatedItem>
              <AnimatedItem direction="up">
                <p className="w-fit mx-auto my-2 md:my-5 text-4xl md:text-6xl text-black font-bold">
                  School Transportation
                </p>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-primary p-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <AnimatedItem direction="right">
              <h1 className="w-fit mx-auto pt-7 text-4xl md:text-6xl text-neutral-200 font-bold tracking-tighter drop-shadow-[0_5.1px_3.9px_rgba(1,1,1,1)]">
                What is LittleMove ?
              </h1>
            </AnimatedItem>
            <AnimatedItem direction="right">
              <p className="w-fit mx-auto md:mx-64 my-7 text-xl md:text-3xl text-center font-semibold leading-relaxed">
                LittleMove has introduced a dashboard system for real-time
                visibility of school buses, incorporating safety tracking,
                emergency alerts, and route optimization to improve safety and
                efficiency.
              </p>
            </AnimatedItem>
          </div>
          <div className="flex flex-col items-center">
            <AnimatedItem direction="right">
              <h1 className="w-fit mx-auto pt-7 text-4xl md:text-6xl text-neutral-200 font-bold tracking-tighter drop-shadow-[0_5.1px_3.9px_rgba(1,1,1,1)]">
                What's Missing ?
              </h1>
            </AnimatedItem>
            <AnimatedItem direction="right">
              <p className="w-fit mx-auto md:mx-64 mt-7 text-xl md:text-3xl text-center font-semibold leading-relaxed">
                Clear communication channels between drivers, school staff and
                parents.
              </p>
              <AnimatedItem direction="right">
                <p className="w-fit mx-auto md:mx-64 my-2 text-xl md:text-3xl text-center font-semibold leading-relaxed">
                  Communication regarding bus schedules, delays, and any changes
                  in transportation plans.
                </p>
              </AnimatedItem>
            </AnimatedItem>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
