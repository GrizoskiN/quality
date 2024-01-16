
import ContactForm from "./../components/contact-form/contactForm"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
const Contact = () => {

  return (
    <div className="">
       <section className="w-full py-12 md:py-24 lg:pt-48 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
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
  <div className="flex m-auto w-2/3">
  <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Our Location</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Acme Construction</h3>
            <p>123 Main St, Anytown, USA</p>
            <p>(123) 456-7890</p>
            <p>info@acmeconstruction.com</p>
          </div>
        
        </div>

  </div>
  <div className="lg:w-2/3">
    <ContactForm/>
  </div>
    </div>
    </div>
  )
}

export default Contact
