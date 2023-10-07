import Image from "next/image";
import call from "../../../public/img/call.jpg"
const FourthSection = () => {
  return (
    <div className="relative text-white flex flex-col items-center justify-center text-center py-32 my-32">
      <div className="">
        <h1 className="font-bold text-5xl ">CALL US NOW AND STAY HASSLE-FREE!</h1>
        <p className="font-light text-xl my-4">
          We provide Turnkey Solutions to All Construction estimation needs!
        </p>
        <h3 className="text-2xl text-yellow">Hire Us to Get Full Service!</h3>
      </div>
      <div className="mt-11">
        <h1 className="font-bold text-3xl">Call Us Now:</h1>
        <button className="bg-gradient-to-r from-[#071230] to-[#50659C] text-xl px-11 py-2 mt-3">+1(469) 638 3584</button>
      </div>
      <Image src={call} width={2000} className="absolute w-full h-full top-0  object-cover -z-10"/>
    </div>
  );
};

export default FourthSection;
