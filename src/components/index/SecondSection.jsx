import Image from "next/image";
import bluebeam from "../../../public/img/bluebeam.jpg";
import center from "../../../public/img/center.jpg";
import planswift from "../../../public/img/planswift.jpg";
import secondsection from "../../../public/img/secondsection.jpg";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
const SecondSection = () => {
  const services = [
    {
      id: 0,
      name: "Step 1",
      text1: `At Quality Estimation, we understand that every project begins with a solid foundation – a foundation built on accurate estimates. Our mission is to empower project managers and contractors with the financial insights they need to make informed decisions. With our expertise, your projects gain a competitive edge from the very start.`,
      text2:
        "Estimates serve as the compass guiding your journey through a project's financial landscape. They're not just numbers; they're the keys to unlocking success. Quality Estimation is your compass, revealing the true potential of your projects. Our professional team meticulously analyzes every detail, translating complexity into clarity.",
    },
    {
      id: 1,
      name: "Step 2",
      text1: `At Quality Estimation, we understand that every project begins with a solid foundation – a foundation built on accurate estimates. Our mission is to empower project managers and contractors with the financial insights they need to make informed decisions. With our expertise, your projects gain a competitive edge from the very start.`,
      text2:
        "Estimates serve as the compass guiding your journey through a project's financial landscape. They're not just numbers; they're the keys to unlocking success. Quality Estimation is your compass, revealing the true potential of your projects. Our professional team meticulously analyzes every detail, translating complexity into clarity.",
    },
    {
      id: 2,
      name: "Step 3",
      text1: `At Quality Estimation, we understand that every project begins with a solid foundation – a foundation built on accurate estimates. Our mission is to empower project managers and contractors with the financial insights they need to make informed decisions. With our expertise, your projects gain a competitive edge from the very start.`,
      text2:
        "Estimates serve as the compass guiding your journey through a project's financial landscape. They're not just numbers; they're the keys to unlocking success. Quality Estimation is your compass, revealing the true potential of your projects. Our professional team meticulously analyzes every detail, translating complexity into clarity.",
    },
    {
      id: 3,
      name: "Step 4",
      text1: `At Quality Estimation, we understand that every project begins with a solid foundation – a foundation built on accurate estimates. Our mission is to empower project managers and contractors with the financial insights they need to make informed decisions. With our expertise, your projects gain a competitive edge from the very start.`,
      text2:
        "Estimates serve as the compass guiding your journey through a project's financial landscape. They're not just numbers; they're the keys to unlocking success. Quality Estimation is your compass, revealing the true potential of your projects. Our professional team meticulously analyzes every detail, translating complexity into clarity.",
    },
  ];
  const [width, setWidth] = useState(null);

  const menuRef = useRef();

  useEffect(() => {
    setWidth(menuRef.current.scrollWidth - menuRef.current.offsetWidth);
  }, []);
  return (
    <div className=" w-full m-auto overflow-hidden relative text-white ">
      <div className="w-2/3 m-auto my-16 ">
        <h1 className="text-5xl">How do we work?</h1>
        <div className="flex items-start mt-7">
          <span className="mt-2">
            <svg
              width="116"
              height="5"
              viewBox="0 0 116 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="116" height="5" fill="#D4EC42" />
            </svg>
          </span>
          <p className="w-1/3 ml-5">
            Are you interested in learning more about bid estimation? When you
            choose us as your electrical estimate, we will follow the steps
            outlined in this quick and simple guide.
          </p>
        </div>
      </div>
      <div ref={menuRef} className="flex w-2/3 m-auto ">
        <motion.ul
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-5 ">
          {services.map((service, id) => (
            <li
              key={id}
              className="cursor-pointer w-[60rem] h-[30rem] bg-royal/70 hover:bg-gradient-to-r from-[#071230]/70 to-[#50659C]/70 rounded-sm flex items-center p-10 relative overflow-hidden group transition duration-700 ease-in-out">
              <div>
                <h1 className="text-white text-4xl absolute top-3 left-5 font-semibold group-hover:text-opacity-10 group-hover:text-[9rem] transition-all duration-300">
                  {service.name}
                </h1>
                <p className="text-white font-light text-[1.2em] opacity-50  group-hover:opacity-100  transition-all duration-300 ease-in-out">
                  {service.text1}
                </p>
                <p className="text-white mt-3 font-light text-[1.2em] opacity-50  group-hover:opacity-100  transition-all duration-300 ease-in-out">
                  {service.text2}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-full "></div>
            </li>
          ))}
        </motion.ul>
      </div>

      <div>
        <Marquee autoFill className="my-32">
            <Image className="mx-4" src={bluebeam}  width={150}/>
            <Image className="mx-4" src={center} width={150} />
            <Image className="mx-4" src={planswift} width={150} />

        </Marquee>
      </div>
      <Image
        src={secondsection}
        width={2000}
        className="absolute w-full top-0 -z-10"
      />
    </div>
  );
};

export default SecondSection;
