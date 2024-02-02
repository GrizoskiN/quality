import Image from "next/image";
import bluebeam from "../../../public/img/bluebeam.webp";
import center from "../../../public/img/center.webp";
import planswift from "../../../public/img/planswift.webp";
import secondsection from "../../../public/img/secondsection.webp";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
const SecondSection = () => {
  const services = [
    {
      id: 0,
      name: "Step 1",
      text1: `Gather Project Information`,
      text2:
        "Upon reaching out to us, we gather the required information his includes the scope of work you need, the project location, any special considerations or challenges that are required for the successful execution of the project.",
    },
    {
      id: 1,
      name: "Step 2",
      text1: `Cost of Service`,
      text2:
        "Provide a cost breakdown for your estimate/service with clear deadlines and costs, no hidden fees.",
    },
    {
      id: 2,
      name: "Step 3",
      text1: `Confirmation and Start of Service`,
      text2:
        "Upon agreement and deposit receipt, you will receive a confirmation from our team that your estimate is being worked on. Any follow-up questions will take place after this phase.",
    },
    {
      id: 3,
      name: "Step 4",
      text1: `Labor/Material Cost`,
      text2:
        "Estimate the cost of each task by CSI/MasterFormat Division unless otherwise specified. Each task of the project will have labor and/or material assigned to it as a cost factor based on our cost database that is updated quarterly.",
    },
    {
      id: 4,
      name: "Step 5",
      text1: `General Conditions`,
      text2:
        "Add contingencies, equipment and other general conditions. Only having the labor and material costs of a project is a half-way done estimate, it is crucial to account for costs that every company carries. ",
    },
    {
      id: 5,
      name: "Step 6",
      text1: `Final Quality Control Check`,
      text2:
        "Before the estimate is delivered our executive team reviews everything, adjusts or checks in with the   estimating team for any follow up questions/clarifications.",
    },
    {
      id: 6,
      name: "Step 7",
      text1: `Delivery of Estimate`,
      text2:
        "Delivering the estimate on/before the deadline you need it by is our guarantee or you get a free estimate. Additionally, any questions, concerns or comments you have will be addressed immediately.",
    },
  ];
  const [width, setWidth] = useState(null);

  const menuRef = useRef();

  useEffect(() => {
    setWidth(menuRef.current.scrollWidth - menuRef.current.offsetWidth);
  }, []);
  return (
    <div className=" w-full m-auto overflow-hidden relative text-white ">
      <div className="w-[90%] xl:w-2/3 m-auto my-16 ">
        <h1 className="text-5xl">How do we work?</h1>
        <div className="flex flex-col lg:flex-row items-start mt-7">
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
          <p className="xl:w-1/3 xl:ml-5">
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
              className="cursor-pointer w-96 lg:w-[30rem] h-auto  bg-royal/70 lg:hover:bg-gradient-to-r from-[#071230]/70 to-[#50659C]/70 rounded-sm  px-5  relative overflow-hidden group transition duration-700 ease-in-out">
              <div className="w-[90%] m-auto py-10 "> 
                <h1 className="text-white text-2xl  xl:text-4xl absolute top-5 left-13 font-semibold lg:group-hover:text-opacity-10 lg:group-hover:text-[3rem] transition-all duration-300">
                  {service.name}
                </h1>
                <p className="text-gray-100 font-bold mt-9 text-2xl lg:text-[1.5rem]   group-hover:opacity-100  transition-all duration-300 ease-in-out">
                  {service.text1}
                </p>
                <p className="text-white mt-3 font-light text-lg leading-[2rem] lg:text-[1.2em] opacity-50  group-hover:opacity-100  transition-all duration-300 ease-in-out">
                  {service.text2}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-full "></div>
            </li>
          ))}
        </motion.ul>
      </div>

      <div>
        <Marquee autoFill className="my-16 lg:my-32">
          <Image className="mx-4" src={bluebeam} width={150} />
          <Image className="mx-4" src={center} width={150} />
          <Image className="mx-4" src={planswift} width={150} />
        </Marquee>
      </div>
      <Image
        src={secondsection}
        width={2000}
        className="absolute w-full h-full object-cover top-0 -z-10"
      />
    </div>
  );
};

export default SecondSection;
