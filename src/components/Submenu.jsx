import Link from "next/link"
import { useRouter } from "next/router"

const Submenu = () => {

  const router = useRouter()
  const isBlogPage = router.pathname === '/blog';
  return (
    <div className={` ${isBlogPage ? "text-royal bg-gray-100" : "text-white border-b-[1px]"} pt-24 hidden lg:flex w-full m-auto justify-center items-center grow text-sm font-thin py-3   border-gray-400 z-20 relative`}>
      <Link href="/expertise" className="mx-3">EXPERTISE</Link>
      <Link href="/projects" className="mx-3">PROJECTS</Link>
      <Link href="/experience" className="mx-3">OUR EXPERIENCE</Link>
      {/* <Link href="#" className="mx-3">OUR TEAM</Link> */}
      <Link href="/about" className="mx-3">ABOUT US</Link>
    </div>
  )
}

export default Submenu
