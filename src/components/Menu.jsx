import Image from "next/image"
import Logo from "../../public/img/logo.png"
import Link from "next/link"


const Menu = () => {
  return (
   <div className="w-full lg:border-b-[1px] mt-5 border-gray-600 ">
     <div className="hidden lg:flex w-10/12 m-auto justify-evenly items-center grow text-sm font-thin mb-3  ">
      <div className="flex justify-between w-2/4">
        <Link href="#">NEWS</Link>
        <Link href="#">LOCATIONS</Link>
        <Link href="#">CERTIFICATES</Link>
      </div>
      <div className="w-full flex justify-center">
        <Image src={Logo}/>
      </div>
      <div className="flex justify-between w-2/4 items-center">
        <Link href="#">CONTACT</Link>
        <Link href="#">SUBCONTRACTORS</Link>
        <Link href="#" className="bg-primary px-5 py-2">CAREERS</Link>
      </div>
    </div>
    
   </div>
  )
}

export default Menu
