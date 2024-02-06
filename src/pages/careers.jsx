import Head from "next/head";
import Image from "next/image";
import career from "../../public/img/career.webp";
import career1 from "../../public/img/career1.webp";

const Careers = () => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="ic_oPp7RembUI_tek6mxOkhrlaG-Qg5ZLQ_o0_xO_is"
        />
        <title>Quality Estimation | Careers</title>
        <meta
          content="Quality Estimation is a estimation and development company from San Diego,
          California that specializes in creating the fastest project estimations. Contact us today for a free consultation!"
          name="description"
          key="desc"
        />
        <meta
          property="og:title"
          content="Quality Estimation company, San Diego, USA"
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta
          name="keywords"
          content="Quality Estimation company, San Diego, USA, estimation, estimations, building projects"
        />
      </Head>
      <div className="relative ">
        <div className="flex justify-center items-center w-full z-20 h-[70dvh] ">
          <h1 className="text-7xl z-40 text-white uppercase ">Careers</h1>
          <div className="absolute inset-0 w-full h-full">
            <span className="absolute inset-0 bg-royal/70"></span>
            <Image
              src={career}
              width={1500}
              height={600}
              alt="Careers at Quality Estimation, San Diego, California, US"
              className="w-full h-full  object-top object-cover "
            />
          </div>
        </div>
      </div>
      <div className="text-royal w-10/12 lg:w-2/3 mt-16 m-auto">
        <h1 className="text-3xl lg:text-5xl mb-5 font-bold">
          Careers at Quality Estimation
        </h1>
        <p className="text-xl">
          Thank you for your interest in joining the Quality Estimation team.
          While there are no open positions available at this time, we
          appreciate your enthusiasm and encourage you to check back
          periodically for future opportunities.
        </p>
        <Image
          src={career1}
          className="mt-11 lg:mt-32 w-full"
          width={1200}
          height={600}
          alt="Careers at Quality Estimation, San Diego, California, US"
        />
      </div>
      <div className="grid xl:grid-cols-3  gap-11 w-10/12 lg:w-2/3 my-11 lg:my-32 m-auto justify-evenly">
        <div>
          <h1 className="text-3xl  mb-5 font-bold">
            Join Our Talent Network
          </h1>
          <p className="text-xl">
            Even though we may not have current openings, we are always on the
            lookout for exceptional talent to join our team. By joining our
            talent network, you'll be the first to know about future career
            opportunities and be considered for roles that align with your
            skills and expertise.
          </p>
        </div>
        <div>
          <h1 className="text-3xl  mb-5 font-bold">
            Why Quality Estimation?
          </h1>
          <p className="text-xl">
            <span className="font-bold">Expertise</span>: Benefit from working alongside experienced estimators and
            a seasoned General Contractor who bring a wealth of knowledge to
            every project. 
          </p>
            <p className="text-xl my-4"><span className="font-bold">Professional Development</span>: We believe in investing in
            our team members' growth and development, providing opportunities
            for learning and advancement within the company.</p>
            <p className="text-xl"> <span className="font-bold">Collaborative Culture</span>: Join a team that values collaboration, innovation, and a
            shared commitment to delivering exceptional results for our clients.</p>
        </div>
        <div>
          <h1 className="text-3xl  mb-5 font-bold">
            Our Commitment to Excellence
          </h1>
          <p className="text-xl">
            At Quality Estimation, we are dedicated to maintaining a culture of
            excellence and fostering a collaborative environment where talented
            individuals can thrive. Our commitment to delivering accurate and
            reliable cost estimates for construction projects is at the heart of
            everything we do.
          </p>
        </div>
      </div>
    </>
  );
};

export default Careers;
