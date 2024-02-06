
import Head from "next/head"
import ContactForm from "./../components/contact-form/contactForm"
import * as z from "zod"



const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
const Contact = () => {

  return (
    <>
    <Head>
    <meta name="google-site-verification" content="ic_oPp7RembUI_tek6mxOkhrlaG-Qg5ZLQ_o0_xO_is" />
     <title>Quality Estimation | Contact</title>
     <meta
           content='Quality Estimation is a estimation and development company from San Diego,
           California that specializes in creating the fastest project estimations. Contact us today for a free consultation!'
           name='description'
           key='desc'
         />
         <meta
           property='og:title'
           content='Quality Estimation company, San Diego, USA'
         />
         <meta property='og:image' content='/img/logo.png' />
         <meta
           name='keywords'
           content='Quality Estimation company, San Diego, USA, estimation, estimations, building projects'
         />
    </Head>
    <div className="max-w-[2000px] m-auto">
       <section className="w-10/12 m-auto  py-12 md:py-24 lg:pt-48  ">
          <div className="">
            <div className="flex flex-col items-center text-left md:text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
              </div>
            </div>
          </div>
        </section>
  <div className="flex flex-col lg:flex-row m-auto w-10/12 lg:w-2/3">
  <div className="lg:w-1/2 lg:ml-auto flex flex-col lg:items-start text-left md:text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        
          <div className="flex flex-col items-start">
            <h3 className=" lg:text-xl font-semibold">Quality Estimation LLC</h3>
           <div className="md:flex items-start justify-between mt-3 lg:flex-col">
            <p>‪(619) 289-7059‬</p>
            <p>info@qualityestimation.us</p>
           </div>
          </div>
        
       

  </div>
  <div className="w-full lg:w-2/3">
    <ContactForm/>
  </div>
    </div>
    </div>
    </>
  )
}

export default Contact
