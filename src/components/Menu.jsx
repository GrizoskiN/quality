import Image from "next/image"
import Logo from "../../public/img/logo.png"


const Menu = () => {
  return (
   <div className="w-full border-b-[1px] mt-5 border-gray-600">
     <div className="flex w-10/12 m-auto justify-evenly items-center grow text-sm font-thin mb-3  ">
      <div className="flex justify-between w-2/4">
        <h1>NEWS</h1>
        <h1>LOCATIONS</h1>
        <h1>CERTIFICATES</h1>
      </div>
      <div className="w-full flex justify-center">
        <Image src={Logo}/>
      </div>
      <div className="flex justify-between w-2/4 items-center">
        <h1>CONTACT</h1>
        <h1>SUBCONTRACTORS</h1>
        <h1 className="bg-primary px-5 py-2">CAREERS</h1>
      </div>
    </div>
    
   </div>
  )
}

export default Menu
