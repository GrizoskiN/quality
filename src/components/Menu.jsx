import Image from "next/image";
import Logo from "../../public/img/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"
const Menu = (props) => {
  const router = useRouter();

  const homePage = router.pathname === "/";

  const {uri} = router.query;
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  const menuOpen = <svg className={`w-6 ${homePage || uri ? "fill-white" : "fill-black"}  `} width="240" height="146" viewBox="0 0 240 146" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="23" width="217" height="22" rx="11" />
  <rect y="62" width="217" height="22" rx="11" />
  <rect x="23" y="124" width="217" height="22" rx="11" />
  </svg>

  
  
  const menuClosed = <svg className="w-6" width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="16" y="1" width="217" height="22" rx="11" transform="rotate(45 16 1)" fill="white"/>
  <rect y="154" width="217" height="22" rx="11" transform="rotate(-45 0 154)" fill="white"/>
  </svg>
  
  
  
 const handleMenu = () => {
  props.handleMenus(setOpen(!open));
 }
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    
    <div
      className={`w-full absolute top-0 lg:border-b-[1px] pt-5  z-50   ${homePage  ? "bg-transparent text-white" : ""}  ${ uri ? "text-white" : ""} border-gray-300 duration-300 ease-in-out`} >
      <div className="hidden lg:flex lg:w-10/12 xl:w-2/3 m-auto justify-evenly items-center grow text-sm font-thin mb-3  ">
        <div className="flex justify-evenly w-2/4">
          <Link href="/">BLOG</Link>
          <Link href="/contact">CONTACT</Link>
          {/* <Link href="#">LOCATIONS</Link>
        <Link href="#">CERTIFICATES</Link> */}
        </div>
        <div className="xl:w-full flex justify-center">
          <Link href="/">
            <Image src={Logo} />
          </Link>
        </div>
        <div className="flex justify-evenly w-2/4 items-center">
          <Link href="/">SUBCONTRACTORS</Link>
          <Link href="/careers" className="bg-primary px-5 py-2 text-white">
            CAREERS
          </Link>
        </div>
      </div>
    <div className={`  border-t-[1px] hidden lg:flex w-full m-auto justify-center items-center grow text-sm font-thin py-3   border-gray-400 z-20 relative`}>
      <Link href="/expertise" className="mx-3">EXPERTISE</Link>
      <Link href="/projects" className="mx-3">PROJECTS</Link>
      <Link href="/experience" className="mx-3">OUR EXPERIENCE</Link>
      {/* <Link href="#" className="mx-3">OUR TEAM</Link> */}
      <Link href="/about" className="mx-3">ABOUT US</Link>
    </div>
    </div>
       <div className="MOBILE  lg:hidden " >
          <div className="w-10/12 m-auto   flex justify-between items-center h-16 border-b-[1px] relative z-50">
           <Link href="/"> <Image src={Logo} width={50} height={50} className="h-11 object-contain"/></Link>
          <div>
            <span onClick={handleMenu} className="cursor-pointer">{open ? menuClosed : menuOpen }</span>
          </div>
       </div>
       {open ?  
       <motion.div  initial={{ opacity: 0, y:"-100%" }}
       animate={{ opacity: 1, y:0 }}
       exit={{ opacity: 0, }}
       transition={{ duration: 0.25 }} className="bg-black w-full fixed h-screen inset-0 z-40 text-white text-2xl ">
       <div className="w-10/12 m-auto mt-16">
          <div  onClick={handleMenu} className="border-b-[1px] py-3 border-white/20 w-full"><Link href="/expertise">Expertise</Link></div>
          <div  onClick={handleMenu} className="border-b-[1px] py-3 border-white/20 w-full"><Link href="/projects">Projects</Link></div>
          <div  onClick={handleMenu} className="border-b-[1px] py-3 border-white/20 w-full"><Link href="/experience">Experience</Link></div>
          <div  onClick={handleMenu} className="border-b-[1px] py-3 border-white/20 w-full"><Link href="/about">About us</Link></div>
          <div  onClick={handleMenu} className="border-b-[1px] py-3 border-white/20 w-full"><Link href="/blog">Blog</Link></div>
          <div  onClick={handleMenu} className="border-b-[1px] py-3 border-white/20 w-full"><Link href="/contact">Contact</Link></div>
          <div  onClick={handleMenu} className="border-b-[1px] py-3 border-white/20 w-full"><Link href="/careers" className="bg-primary px-5 py-2 rounded-sm">Careers</Link>
          </div>

        </div>

        </motion.div> : ""}
       </div>
    </>
  );
};

export default Menu;
