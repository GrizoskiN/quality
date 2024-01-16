import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup
  .object({
    name: yup.string().required(),
    lastName: yup.string(),
    email: yup.string().email().required(),
    phone: yup.string(),
    company: yup.string(),
    project: yup.string(),
    notes: yup.string(),
  })
  .required();

const ContactForm = () => {
  const router = useRouter();
 

  const handleForm = (e) => {
    e.preventDefault();
    
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const submitHandler = async (data) => {
    const httpResponse = await fetch("/api/hello", {
      method: "post",
      body: JSON.stringify(data),
    });
    reset();
   
  
  };

  return (
    <form className="bg-black py-11 w-2/3 m-auto" onSubmit={handleSubmit(submitHandler)}>
   <div className="w-10/12 m-auto">

   <div className="flex flex-col lg:flex-row items-center mb-5 w-full justify-center gap-5 ">
        <input
          type="text"
          placeholder={errors.name ? "Please Enter your Name" : "Your Name"}
          {...register("name", { required: true })}
          className={`w-full   p-3 bg-white/20 ${
            errors.name
              ? "border-red-500 placeholder-red-500 outline-none"
              : "border-white outline-none text-white "
          }`}
        />

        <input
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: true })}
          className={`w-full   p-3 bg-white/20 ${
            errors.company
              ? "border-red-500 placeholder-red-500 outline-none"
              : "border-white outline-none text-white "
          }`}
        />
      </div>
      

     
      <input
                type='email'
                placeholder='Email*'
                {...register("email", {
                  required: true,
                  pattern: "/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/",
                })}
                className={`w-full mb-5 p-3 bg-white/20 ${
                  errors.email
                    ? "border-red-500 placeholder-red-500 outline-none"
                    : "border-white outline-none text-white "
                }`}
              />


      <input

                type='tel'
                placeholder='Phone number'
                {...register("phone")}
                className={`w-full mb-5 p-3 bg-white/20 ${
                  errors.email
                    ? "border-red-500 placeholder-red-500 outline-none"
                    : "border-white outline-none text-white "
                }`}
              />
    
    <input
          type="text"
          placeholder="Company Name"
          {...register("company")}
          className={`w-full mb-5  p-3 bg-white/20 ${
            errors.company
              ? "border-red-500 placeholder-red-500 outline-none"
              : "border-white outline-none text-white "
          }`}
        />
   

<select name="projects" {...register("project")} className="w-full mb-5  p-3  bg-white/20 text-white/60" >
  <option className="text-black my-5"   value="light">Select a project</option>
  <option className="text-black my-5" value="dark" >Light2</option>
  <option className="text-black my-5" value="system">Light3</option>
</select>

<textarea
                type='textarea'
                {...register("notes")}
                placeholder='Notes'
                rows="10" cols="30"
                className={`w-full mb-5 max-h-32 p-3 bg-white/20 ${
                  errors.company
                    ? "border-red-500 placeholder-red-500 outline-none"
                    : "border-white outline-none text-white "
                }`}
              ></textarea>


   <button className='w-full  mx-auto h-11 bg-white text-black '>
            Submit
          </button>
   </div>
    </form>
  );
};

export default ContactForm;
