import Image from "next/image";
import { useState } from "react";
import comm from "../../../public/img/commercial.png";
import comm2 from "../../../public/img/cost2.png";
const FifthSection = () => {
  const clients = [
    { id: 0, name: "Commercial Builders", image: comm },
    { id: 1, name: "Engineers", image: comm2 },
    { id: 2, name: "Developers", image: comm },
    { id: 3, name: "Lawyers", image: comm },
    { id: 4, name: "Sub-Contractors", image: comm },
    { id: 5, name: "Architects", image: comm },
  ];

  const [select, setSelect] = useState("");

  const handleClick = (id) => {
    setSelect(id);
  };
  return (
    <div className=" w-2/3 m-auto  my-32">
      <h1 className="text-9xl font-bold">Our clients</h1>

      <div className="flex  m-auto justify-between items-center">
        <div className="w-full">
          {clients.map(({ id, name }) => (
            <ul key={id} className="flex items-center transition-all duration-300 hover:duration-500">
              {select ===id && <span className="mr-5 ">
                <svg className={`${select === id ? "opacity-100" : "opacity-0"} transition-all duration-300`}
                  width="68"
                  height="68"
                  viewBox="0 0 98 98"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="49" cy="49" r="49" fill="#E1E427" />
                  <path
                    d="M64.9145 51.0667C63.3121 49.1551 61.6395 46.3862 59.8965 42.7598H62.9326C66.5028 46.9765 70.2978 50.0969 74.3178 52.1209V53.6389C70.2978 55.663 66.5028 58.7834 62.9326 63.0001H59.8965C61.6395 59.3737 63.3121 56.6047 64.9145 54.6931H23.2109V51.0667H64.9145Z"
                    fill="#1F2A46"
                  />
                </svg>
              </span>}
              <li
                onMouseOver={() => handleClick(id)}
                className="text-5xl my-5 cursor-pointer transition-all duration-300">
                {name}
              </li>
            </ul>
          ))}
        </div>
        <div className=" h-[45rem] relative flex justify-center items-center w-full ">
          {clients.map(({ id, image }) => (
            
             
                <Image
                  key={id}
                  src={image}
                  width={500}
                  className={`${select == id ? 'opacity-100' : 'opacity-0'} absolute max-w-full max-h-full left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2 transition-all duration-300`}
                />
           
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
