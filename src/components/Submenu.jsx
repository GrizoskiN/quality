import Link from "next/link"


const Submenu = () => {
  return (
    <div className="hidden lg:flex w-full m-auto justify-center items-center grow text-sm font-thin py-3 border-b-[1px]  border-gray-400">
      <Link href="#" className="mx-3">EXPERTISE</Link>
      <Link href="#" className="mx-3">PROJECTS</Link>
      <Link href="#" className="mx-3">OUR EXPERIENCE</Link>
      <Link href="#" className="mx-3">OUR TEAM</Link>
      <Link href="#" className="mx-3">ABOUT US</Link>
    </div>
  )
}

export default Submenu
