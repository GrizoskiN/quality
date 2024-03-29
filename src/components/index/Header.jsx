import Image from "next/image";
import HeaderImage from "/public/img/header.webp";
import Link from "next/link";


const Header = () => {
  return (
    <>
    <div className="w-full bg-[#0A0B0F] text-white">
      <div className="flex md:items-center justify-center h-[90vh]   flex-col w-[90%] lg:w-3/4 xl:w-2/4 2xl:w-2/4 md:text-center m-auto z-20 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Building trust through every {"\n"}{" "}
          <span className="border-b-8 border-yellow ">precise</span> estimate
        </h1>
        <Link href="/contact" className="bg-white w-3/4 md:w-auto px-11 py-3 text-royal mt-16 md:text-2xl font-light relative">
          WORK WITH US
          <span className="hidden md:block absolute -bottom-4 -right-4">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line
                x1="32"
                y1="-1.31134e-07"
                x2="32"
                y2="33"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="-1.74846e-07"
                y1="32"
                x2="33"
                y2="32"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </span>
          <span className="hidden md:block absolute -top-4 -left-4">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/  2000/svg">
              <line
                x1="1"
                y1="33"
                x2="0.999999"
                y2="4.37113e-08"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="33"
                y1="1"
                x2="8.74228e-08"
                y2="1"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </span>
        </Link>
      </div>
      <Image
        src={HeaderImage}
        width={2000}
        className="absolute w-full h-full top-0 xl:h-full object-cover   -z-0"
      />
    </div>
    
    </>
  );
};

export default Header;
