import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import digital from "../assets/DigitalMarketing.jpg";
import photography from "../assets/WorkExp.jpg";
import noise from "../assets/Noise.png";
import SectionHeader from "./SectionHeader.jsx";
import servicedesk from "../assets/ServiceDesk.jpg"
import ContactPlane from "../SVGS/ContactPlane.jsx";
import MoonBalls from "./MoonBalls.jsx";




const ContactMe = () => {

  /* --------------------------------
     Animation Variants
  -------------------------------- */

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };


  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.4,
        ease: "easeOut",
      },
    },
  };


  // Stores validation errors for each field
const [phone, setPhone] = useState("");
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);
// Handles form submission and validates the fields
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get("first-name")?.trim();
    const lastName = formData.get("last-name")?.trim();
    const email = formData.get("email")?.trim();
    const phoneVal = phone.trim(); // Use state value directly to avoid React lag
    const category = formData.get("category");
    const message = formData.get("message")?.trim();

    const newErrors = {};

    // Validate first name
    if (!firstName) {
      newErrors.firstName = "Please enter your first name.";
    }

    // Validate last name
    if (!lastName) {
      newErrors.lastName = "Please enter your last name.";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Your email is invalid please enter the correct email address";
    }

    // Validate phone number
    if (!phoneVal) {
      newErrors.phone = "Please enter your mobile number.";
    }
    
    // Validate category
    if (!category) {
      newErrors.category = "Please select a category.";
    }

    // Validate message
    if (!message) {
      newErrors.message = "Please enter your message.";
    }

    // Store validation errors
    setErrors(newErrors);

    // Do not submit if there are validation errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // ------------------------------------------------
    // ACTUAL SUBMISSION TO NETLIFY
    // ------------------------------------------------
    setIsSubmitting(true);

    try {
      // Re-bundle data to guarantee controlled inputs and hidden fields are included
      const submissionData = new FormData(form);
      submissionData.set("form-name", "contact");
      submissionData.set("phone", phoneVal);

      // Send the form data to Netlify
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(submissionData).toString(),
      });

      // Clear the form elements and state
      form.reset();
      setPhone("");
      setErrors({});

      // Show the green "Message Sent!" state
      setSubmitted(true);

      // Return the button to normal after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      // Stop the loading state
      setIsSubmitting(false);
    }
  };




  return (


    
    <section className="bg-[#101011] min:h-screen flex flex-col lg:items-start lg:justify-center relative  w-full">

      <MoonBalls />



      
            
      {/* --------------------------------
          Section Heading
      -------------------------------- */}



{/* --------------------------------
    Main Products Layout
-------------------------------- */}
<div className="Section_wrapper z-10">

              <div className="section_header mt-34">
          
                     <motion.h1  className="page_title"  > Start a conversation </motion.h1>
                    <h3   className="Section_title "> I would be glad to hear from you.</h3>
          
          
                    <div className="flex lg:flex-row flex-col items-center justify-between gap-20">
          
                      <motion.p className="text_para text-[#fffced] " > Write to me through the form and will update you shortly. </motion.p>
                      <ContactPlane color="#ca852b" size={36} className="hidden lg:flex" />
          
                    </div>
          
                  </div>


  

    <div className="flex_container ">
      
<div className="lg:w-[45%] flex flex-col gap-4">

  <div className="flex  gap-2 lg:gap-4 flex-row">
   <div className="size-10 lg:size-12 shrink-0 flex items-center justify-center rounded-full bg-(--secondary-color) p-3 text-[#fffced] chivo">
  DM
</div>
   <div className="flex bg-[#464640]/40 rounded-2xl backdrop-blur-[4px] p-4 gap-4 flex-row justify-end items-start ">
<motion.p className="text_para text-(--text-colour)">
    <span className="text-[#fffced] mb-2">Good day,</span><br />
    I came across your portfolio and I'm interested in your skills.
    What exactly do you specialize in?
  </motion.p>
   
   </div>
  </div>

   <div className="flex  flex-end  justify-end "><h3 className="flex items-end gap-4 text-(--text-colour) bg-(--primary-color)/40 p-1 rounded-sm"> Write to me through the form and will update you shortly. <span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check"><path  d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg></span></h3></div>

  <div className="flex  gap-2 lg:gap-4 flex-row">
   <div className="size-10 lg:size-12 shrink-0 flex items-center justify-center rounded-full bg-(--secondary-color) p-3 text-[#fffced] chivo">
  DM
</div>
   <div className="flex bg-[#464640]/40 rounded-2xl backdrop-blur-[4px] p-4 gap-4 flex-row justify-end items-start ">
<motion.p className="text_para text-(--text-colour)">
  Ok sure.
  </motion.p>
   
   </div>
  </div>

</div>
         
  

     

       

           <form
      name="contact"
      method="POST"
      netlify="true"
      data-netlify="true"
      onSubmit={handleSubmit}
  className="mt-6 lg:mt-0 border-[1.4px] bg-[#201f1f] rounded-2xl backdrop-blur-[3px] z-50 border-(--text-colour)/45 p-4"
>
  {/* Required by Netlify for React-rendered forms */}
    <input type="hidden" name="form-name" value="contact" />

  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

    {/* FIRST NAME */}
    <div>
      <label
        htmlFor="first-name"
        className="text_label"
      >
        First name:
      </label>

      <div className="mt-2">
        <input
          id="first-name"
          type="text"
          name="first-name"
          autoComplete="given-name"
          placeholder="Eg: Dannie"
          required
          className="text_field"
        />
      </div>

      {/* First name validation message */}
      {errors.firstName && (
        <p className="mt-1 text-[13px] text-[#a4010f]">
          {errors.firstName}
        </p>
      )}
    </div>


    {/* LAST NAME */}
    <div>
      <label
        htmlFor="last-name"
        className="text_label"
      >
        Last name:
      </label>

      <div className="mt-2">
        <input
          id="last-name"
          type="text"
          name="last-name"
          autoComplete="family-name"
          placeholder="Eg: Mankhwazi"
          required
          className="text_field"
        />
      </div>

      {/* Last name validation message */}
      {errors.lastName && (
        <p className="mt-1 text-[13px] text-[#a4010f]">
          {errors.lastName}
        </p>
      )}
    </div>


    {/* EMAIL */}
    <div className="sm:col-span-2">
      <label
        htmlFor="email"
        className="text_label"
      >
        Email:
      </label>

      <div className="mt-2">
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Eg: danniemankhwazi@gmail.com"
          required
          className="text_field"
        />
      </div>

      {/* Email validation message */}
      {errors.email && (
        <p className="mt-1 text-[13px] text-[#a4010f]">
          {errors.email}
        </p>
      )}
    </div>


    {/* PHONE NUMBER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <label
        htmlFor="phone"
        className="text_label"
      >
        Enter Phone Number:
      </label>

      <div className="flex bg-transparent mt-2 border-b border-b-green/20 focus-within:border-green transition-all">

        {/* Country code */}
        <select
          name="country-code"
          className="text_field bg-(--text-color)/40 w-fit"
          defaultValue="MW"
        >
          <option value="MW" className="text-[12px]">
            MW +265
          </option>

          <option value="US">
            US +1
          </option>

          <option value="MZ">
            MZ +258
          </option>
        </select>

        {/* Phone number */}
        <input
    type="tel"
    name="phone"
    id="phone"
    inputMode="numeric"
    autoComplete="tel"
    placeholder="881234567"
    value={phone}
    onChange={(e) => {
      // Numbers only
      const value = e.target.value.replace(/\D/g, "");

      // Maximum 10 digits
      if (value.length <= 10) {
        setPhone(value);
      }
    }}
    className="text_field"
  />
      </div>

      {/* Phone validation message */}
      {errors.phone && (
        <p className="mt-1 text-[13px] text-[#a4010f]">
          {errors.phone}
        </p>
      )}
    </motion.div>


    {/* CATEGORY */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <label
        htmlFor="category"
        className="text_label"
      >
        Select Category
      </label>

      <div className="flex bg-transparent mt-2 focus-within:border-green transition-all">

        <select
          id="category"
          name="category"
          required
          defaultValue=""
          className="text_field"
        >
          <option
            value=""
            disabled
            className="text-[12px] text-[#201f1f] bg-(--background-color)"
          >
            Select a category
          </option>

          <option
            value="Web Development"
            className="text-[12px] text-[#201f1f] bg-(--background-color)"
          >
            Web Development
          </option>

          <option
            value="Networking"
            className="text-[12px] text-[#201f1f] bg-(--background-color)"
          >
            Networking
          </option>

          <option
            value="Content"
            className="text-[12px] text-[#201f1f] bg-(--background-color)"
          >
            Be Content
          </option>
        </select>

      </div>

      {/* Category validation message */}
      {errors.category && (
        <p className="mt-1 text-[13px] text-[#a4010f]">
          {errors.category}
        </p>
      )}
    </motion.div>


    {/* MESSAGE */}
    <div className="sm:col-span-2">
      <label
        htmlFor="message"
        className="text_label"
      >
        Message:
      </label>

      <div className="mt-2">
        <textarea
          rows={4}
          id="message"
          name="message"
          placeholder="Tell me a little about your project..."
          required
          className="text_field border border-(--text-color)/30"
        />
      </div>

      {/* Message validation message */}
      {errors.message && (
        <p className="mt-1 text-[13px] text-[#a4010f]">
          {errors.message}
        </p>
      )}
    </div>

  </div>


  {/* SUBMIT BUTTON */}
  <div className="mt-6 bg-(--secondary-color) rounded-sm">

  <motion.button
  type="submit"
  whileTap={{ scale: 0.94 }}
  animate={{
    scale: submitted ? 1 : 1,
  }}
  transition={{
    duration: 0.2,
    ease: "easeOut",
  }}
  disabled={isSubmitting || submitted}
  className={`block btn cursor-pointer text-[16px] w-full rounded-[4px] px-3.5 py-2.5 text-center font-medium shadow-sm transition-all duration-500 tracking-wide ${
    submitted
      ? "bg-green-600 text-white"
      : "bg-(--secondary-color) text-[#0b0b0d]"
  }`}
>
  <AnimatePresence mode="wait">
    {submitted ? (
      <motion.span
        key="success"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        className="flex items-center justify-center gap-2"
      >
        <motion.span
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
          }}
          className="flex items-center justify-center"
        >
          ✓
        </motion.span>

        Message Sent!
      </motion.span>
    ) : isSubmitting ? (
      <motion.span
        key="sending"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Sending...
      </motion.span>
    ) : (
      <motion.span
        key="send"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Send a Message
      </motion.span>
    )}
  </AnimatePresence>
</motion.button> 
  </div>

</form>

    </div>

    

    
 


</div>




    </section>
  );
};

export default ContactMe;