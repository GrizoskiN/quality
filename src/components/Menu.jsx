import Image from "next/image";
import Logo from "../../public/img/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Menu = () => {
  const router = useRouter();

  const homePage = router.pathname === "/";
  const isContactPage = router.pathname === "/contact";

  const [scrolled, setScrolled] = useState(false);

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
      className={`w-full absolute lg:border-b-[1px] pt-5  z-50   ${homePage ? "bg-transparent text-white" : "text-royal"} ${scrolled ? " " : ""} border-gray-300 duration-300 ease-in-out`} >
      <div className="hidden lg:flex w-2/3 m-auto justify-evenly items-center grow text-sm font-thin mb-3  ">
        <div className="flex justify-evenly w-2/4">
          <Link href="/blog">NEWS</Link>
          <Link href="/contact">CONTACT</Link>
          {/* <Link href="#">LOCATIONS</Link>
        <Link href="#">CERTIFICATES</Link> */}
        </div>
        <div className="w-full flex justify-center">
          <Link href="/">
            <Image src={Logo} />
          </Link>
        </div>
        <div className="flex justify-evenly w-2/4 items-center">
          <Link href="/subcontractors">SUBCONTRACTORS</Link>
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
    </>
  );
};

export default Menu;
