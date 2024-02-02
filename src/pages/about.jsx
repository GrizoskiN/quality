import Image from "next/image"
import About1 from "../../public/img/about1.webp"
import About2 from "../../public/img/about2.webp"
import Bo from "../../public/img/bo.png"


const downArrow = <svg className="w-11 h-11" width="60" height="60" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M79.3481 82.2595C78.6019 82.2595 77.8557 81.9774 77.287 81.4086L9.5875 13.7092C8.45 12.5717 8.45 10.7289 9.5875 9.59141C10.725 8.45391 12.5678 8.45391 13.7053 9.59141L81.4047 77.2909C82.5422 78.4284 82.5422 80.2711 81.4047 81.4086C80.8405 81.9774 80.0943 82.2595 79.3481 82.2595Z" fill="black"/>
<path d="M79.3525 82.2645H18.2323C16.6262 82.2645 15.3203 80.9586 15.3203 79.3525C15.3203 77.7463 16.6262 76.4405 18.2323 76.4405H76.4405V18.2323C76.4405 16.6262 77.7463 15.3203 79.3525 15.3203C80.9586 15.3203 82.2645 16.6262 82.2645 18.2323V79.3525C82.2645 80.9586 80.9586 82.2645 79.3525 82.2645Z" fill="black"/>
</svg>

const About = () => {
  return (
    <>
    <div className="pt-32 pb-16 lg:py-48  w-10/12 xl:w-2/3 m-auto">

      <div className="flex lg:flex-row flex-col justify-between lg:items-end">
        <div className="">
          <h4 className="text-[#777777]">WHO WE ARE</h4>
          <h1 className="text-5xl md:text-6xl xl:text-8xl font-bold">We set out to create a  <span className="text-primary">better way to collaborate</span></h1>
        </div>
        {/* <div className="lg:w-2/5 mt-7 lg:mt-0">
          <p className="text-md xl:text-xl">Together, the investors and partners are creating the best and most econimical solutions for your business!</p>
        </div> */}
        </div>
      </div>


    <div className="flex flex-col lg:flex-row md:w-10/12 m-auto justify-between gap-6">
       <Image src={About1} width={1000} height={1000} className="h-80 object-cover md:h-auto"/>
        <Image src={About2} width={1000} className="hidden lg:block"/>
    </div>

    <div className="w-10/12 lg:w-2/3 m-auto flex flex-col lg:flex-row  my-11 lg:my-32 items-start">

      <div className="lg:w-1/2 flex justify-between items-end mb-7">
        <h1 className="text-5xl lg:text-8xl font-bold mr-7">Our Story</h1>
        {downArrow}
      </div>

      <div className="lg:w-1/3 ml-auto text-lg">
        {/* <h3 className="font-semibold">Our Founder, started this company because he wanted to make it easier for companies to invest more in real estate.</h3> */}
        <p className="mt-11">We are a team of experienced estimators overseen by a General Contractor who specialize in providing accurate and reliable cost estimates for construction projects of all sizes and types. Our goal is to help contractors, developers, and owners plan and budget for their projects with confidence.</p>
        <p className="mt-6">
        We pride ourselves on our attention to detail and thoroughness. Our estimators use the latest software and techniques to ensure that our estimates are as           accurate as possible. While we have a deep understanding of construction materials and labor costs, we have significant insight into unforeseen and site specific           costs that other estimators do not.</p>

        {/* <div className="mt-11 flex items-center">
          <Image src={Bo}/>
          <div className="ml-7">
          <h1 className="font-semibold text-2xl">Bojan Petreski</h1>
          <h5 className="font-light text-[#777777] text-sm">Founder & CEO</h5>
          </div>
        </div> */}

      </div>
      
    </div>
    <div className="bg-[#F9F9F9] -mb-32">
       <div className="w-10/12 lg:w-2/3 m-auto py-32">
       <div className="flex flex-col lg:flex-row justify-between items-center mb-11">
          <h1 className="font-bold text-7xl mb-7 lg:mb-0 xl:text-9xl lg:w-2/3">$2.2b</h1>
          <p className="lg:w-1/3">Over $2 billion worth of estimates have been processed by our experienced estimating team. Volume speaks for itself, and we have you covered.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center py-11 border-y-[1px]">
          <h1 className="font-bold text-7xl mb-7 lg:mb-0 xl:text-9xl lg:w-2/3">12-20%</h1>
          <p className="lg:w-1/3">The conversion rate of our estimates beats the industry standard of 8-10% because of our expertise and experience.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-11">
          <h1 className="font-bold text-7xl mb-7 lg:mb-0 xl:text-9xl lg:w-2/3">$380m +</h1>
          <p className="lg:w-1/3">We are a team of experienced estimators overseen by a General Contractor who specialize in providing accurate and reliable cost estimates for construction projects of </p>
        </div>
       </div>

      </div>
  </>
  )
}

export default About
