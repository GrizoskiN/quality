import Image from "next/image";
import worker from "../../../public/img/construction-worker.png";
import house from "../../../public/img/house.png";
import house2 from "../../../public/img/house2.png";
import hvac from "../../../public/img/hvac.png";
import hvac2 from "../../../public/img/hvac2.png";
import cost from "../../../public/img/cost.png";
import cost2 from "../../../public/img/cost2.png";
import repair2 from "../../../public/img/repair2.png";
import repair from "../../../public/img/repair.png";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const ThirdSection = () => {
  const services = [
    {
      id: 0,
     
      text1: `Takeoff, Estimating & Cost Consulting Services for Contractors`,
      image: hvac,
      image2: hvac2,
    },
    {
      id: 1,
      
      text1: `Logistics and Cost Projection for Developers`,
      image: cost,
      image2: cost2,
    },
    {
      id: 2,
      
      text1: `Single & Multi-Family Estimating for Builders`,
      image: house,
      image2: house2,
    },
    {
      id: 3,
    
      text1: `Takeoff & Estimating for Mechanical, Electrical & Plumbing Contractors`,
      image: repair,
      image2: repair2,
    },
  ];
  const [width, setWidth] = useState(null);

  const menuRef = useRef();

  useEffect(() => {
    setWidth(menuRef.current.scrollWidth - menuRef.current.offsetWidth);
  }, []);
  return (
    <div className="bg-white relative text-white overflow-hidden">
      <div className="flex items-center justify-between w-3/4 m-auto ">
        <h1 className="text-royal text-4xl lg:text-6xl xl:text-9xl font-bold">Our Services</h1>
        <Image src={worker} width={700} className="z-10 lg:w-1/2" />
      </div>
      <div className="absolute top-32 w-full  overflow-hidden -z-0">
        <Marquee
          autoFill
          className="uppercase text-9xl overflow-hidden  text-royal/10 ">
          <h1 className="mx-11 ">ENGINEERING</h1>
          <h1 className="mx-11 ">BUSINESS</h1>
          <h1 className="mx-11 ">Approximation</h1>
        </Marquee>
      </div>
      <div>
        <div ref={menuRef} className="flex overflow-x-hidden ">
          <motion.ul
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-5 ">
            {services.map((service, id) => (
              <li
                key={id}
                className="cursor-pointer w-64 lg:w-[23rem] xl:w-[33rem] h-64 lg:h-[23rem] xl:h-[35rem] bg-royal/70 hover:bg-gradient-to-r from-[#071230]/70 to-[#50659C]/70 rounded-sm flex items-start p-5 lg:p-10 relative z-20  overflow-hidden group transition duration-700 ease-in-out">
                <div className="lg:mt-16 xl:mt-32  z-20 group-hover:bg-opacity-50 ">
                  <Image
                    src={service.image}
                    className="text-white text-4xl bg-black/10 font-semibold  transition-all duration-300"
                  />
                  <p className="text-white font-light lg:text-2xl opacity-50 mt-5 group-hover:opacity-100  transition-all duration-300 ease-in-out">
                    {service.text1}
                  </p>
                </div>
                <div className="group-hover:bg-gradient-to-r from-[#071230]/70 to-[#50659C]/70 absolute w-full h-full top-0 left-0 transition-all duration-300 object-cover z-10 "></div>
                <Image
                  src={service.image2}
                  width={1400}
                  className="absolute w-full h-full top-0 left-0 object-cover -z-0 "
                />
                <div className="absolute top-0 right-0 w-full "></div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
