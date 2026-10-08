import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Check } from "lucide-react";

import { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import {
  parsePhoneNumberFromString,
  getExampleNumber,
} from "libphonenumber-js";

import examples from "libphonenumber-js/examples.mobile.json";

import digital from "../assets/DigitalMarketing.jpg";

import photography from "../assets/WorkExp.jpg";

import noise from "../assets/Noise.png";

import SectionHeader from "./SectionHeader.jsx";

import servicedesk from "../assets/ServiceDesk.jpg";

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

  /* --------------------------------
     Form State
  -------------------------------- */

  const [phone, setPhone] = useState("");

  const [countryCode, setCountryCode] = useState("+265");

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  /*
   * Controls the automatic six-second
   * progress animation inside the
   * successful submission modal.
   */
  const [modalProgress, setModalProgress] = useState(0);

  const form = useRef();

  /* --------------------------------
     Success Modal Auto-Close
  -------------------------------- */

  useEffect(() => {
    /*
     * Do nothing while the success modal
     * is not visible.
     */
    if (!submitted) {
      setModalProgress(0);
      return;
    }

    /*
     * Total time before the modal
     * automatically disappears.
     *
     * 6000ms = 6 seconds.
     */
    const duration = 6000;

    /*
     * Record exactly when the modal
     * became active.
     */
    const startTime = Date.now();

    /*
     * Update the progress approximately
     * every 30 milliseconds.
     *
     * This gives us a smooth progress bar
     * while keeping the implementation simple.
     */
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      /*
       * Convert elapsed time into
       * a percentage from 0 to 100.
       */
      const progress = Math.min(
        (elapsed / duration) * 100,
        100
      );

      setModalProgress(progress);

      /*
       * Once the progress reaches 100%,
       * automatically close the modal.
       */
      if (progress >= 100) {
        clearInterval(interval);

        setSubmitted(false);
      }
    }, 30);

    /*
     * Clean up the interval when:
     *
     * 1. The modal closes manually.
     * 2. The component unmounts.
     * 3. A new modal cycle starts.
     */
    return () => clearInterval(interval);
  }, [submitted]);

  /*
   * Automatically generate the phone placeholder
   * according to the selected country code.
   */
  const countryMap = {
    "+265": "MW",
    "+1": "US",
    "+258": "MZ",
  };

  const selectedCountry = countryMap[countryCode];

  const exampleNumber = selectedCountry
    ? getExampleNumber(selectedCountry, examples)
    : null;

  const phonePlaceholder = exampleNumber
    ? exampleNumber.formatNational()
    : "881234567";

  /* --------------------------------
     Form Submission
  -------------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentForm = e.currentTarget;

    const formData = new FormData(currentForm);

    const firstName = formData.get("first-name")?.trim();

    const lastName = formData.get("last-name")?.trim();

    const email = formData.get("user_email")?.trim();

    const phoneVal = phone.trim();

    const category = formData.get("category");

    const message = formData.get("message")?.trim();

    const newErrors = {};

    /* --------------------------------
       Validate First Name
    -------------------------------- */

    if (!firstName) {
      newErrors.firstName = "Please enter your first name.";
    }

    /* --------------------------------
       Validate Last Name
    -------------------------------- */

    if (!lastName) {
      newErrors.lastName = "Please enter your last name.";
    }

    /* --------------------------------
       Validate Email
    -------------------------------- */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(email)) {
      newErrors.email =
        "Your email is invalid. Please enter the correct email address.";
    }

    /* --------------------------------
       Validate Phone Number
       Using libphonenumber-js
    -------------------------------- */

    if (!phoneVal) {
      newErrors.phone = "Please enter your mobile number.";
    } else {
      const fullPhoneNumber = `${countryCode}${phoneVal}`;

      const parsedPhoneNumber =
        parsePhoneNumberFromString(fullPhoneNumber);

      if (!parsedPhoneNumber || !parsedPhoneNumber.isValid()) {
        newErrors.phone = "Please enter a valid phone number.";
      }
    }

    /* --------------------------------
       Validate Category
    -------------------------------- */

    if (!category) {
      newErrors.category = "Please select a category.";
    }

    /* --------------------------------
       Validate Message
    -------------------------------- */

    if (!message) {
      newErrors.message = "Please enter your message.";
    }

    /* --------------------------------
       Store Validation Errors
    -------------------------------- */

    setErrors(newErrors);

    /* --------------------------------
       Stop Submission If Invalid
    -------------------------------- */

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    /* --------------------------------
       Submit Through EmailJS
    -------------------------------- */

    setIsSubmitting(true);

    try {
      /*
       * Make sure the phone number sent to
       * EmailJS contains the selected country code.
       */
      const cleanPhone = phoneVal.replace(/^0+/, "");

      const fullPhoneNumber = `${countryCode}${cleanPhone}`;

      const parsedPhoneNumber =
        parsePhoneNumberFromString(fullPhoneNumber);

      /*
       * Create a fresh FormData so EmailJS
       * receives the complete form.
       */
      const submissionData = new FormData(currentForm);

      submissionData.set("country-code", countryCode);

      submissionData.set("phone", fullPhoneNumber);

      /*
       * EmailJS sendForm reads the form directly,
       * therefore temporarily update the phone
       * input value before sending.
       */
      const phoneInput = currentForm.querySelector("#phone");

      if (phoneInput) {
        phoneInput.value = fullPhoneNumber;
      }

      await emailjs.sendForm(
        "service_jyv0emn",
        "template_zwc8fh7",
        currentForm,
        {
          publicKey: "poNSNgMhKoJyGYoUc",
        }
      );

      /* --------------------------------
         Reset Form After Successful Send
      -------------------------------- */

      currentForm.reset();

      setPhone("");

      setCountryCode("+265");

      setErrors({});

      /* --------------------------------
         Show Success Modal
      -------------------------------- */

      setSubmitted(true);

      /*
       * The success modal now remains visible
       * for six seconds.
       *
       * The modalProgress useEffect above
       * automatically closes it when the
       * progress reaches 100%.
       *
       * The visitor can also close it manually
       * using the X or OK button.
       */
    } catch (error) {
      console.error("Form submission failed:", error);

      setErrors({
        submit:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#101011] min-h-screen w-full">
      <MoonBalls />

      {/* Main Products Layout */}
      <div className="Section_wrapper z-10">
        <div className="section_header mt-34 z-50">

          <motion.h1 className="page_title z-50">
            Start a conversation
          </motion.h1>

          <h3 className="Section_title">
            Let us build our next projects
            <span className="text-(--secondary-color)">
              {" "}
              together.
            </span>
          </h3>

          <div className="flex lg:flex-row flex-col items-center justify-between gap-20">

            <motion.p className="text_para text-[#fffced]">
              Share your vision by writing to me through the form and
              will update you shortly.
            </motion.p>

            <ContactPlane
              color="#978F66"
              size={36}
              className="hidden lg:flex"
            />

          </div>

        </div>
      </div>

      <div className="Section_wrapper">

        <div className="flex_container">

          <div className="lg:w-[50%] card_space">

            <div className="flex gap-2 lg:gap-4 flex-row">

              <div className="size-10 lg:size-12 shrink-0 flex items-center justify-center rounded-full bg-(--secondary-color) p-3 text-[#fffced] chivo">
                DM
              </div>

              <div className="flex bg-[#464640]/40 rounded-2xl backdrop-blur-[4px] p-4 gap-4 flex-row justify-end items-start">

                <motion.p className="text_para text-(--text-colour)">

                  <span className="text-[#fffced] mb-2">
                    Hi,
                  </span>

                  <br />

                  I came across your portfolio and I'm interested in
                  your skills.
                  What exactly do you specialize in?

                </motion.p>

              </div>

            </div>

            <div className="flex flex-end justify-end">

              <h3 className="flex items-end gap-4 text-(--text-colour) bg-(--primary-color)/40 p-2 rounded-sm">

                Write to me through the form and will update you shortly.

                <span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill=""
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check-check"
                  >
                    <path d="M18 6 7 17l-5-5" />
                    <path d="m22 10-7.5 7.5L13 16" />
                  </svg>

                </span>

              </h3>

            </div>

            <div className="flex gap-2 lg:gap-4 flex-row">

              <div className="size-10 lg:size-12 shrink-0 flex items-center justify-center rounded-full bg-(--secondary-color) p-3 text-[#fffced] chivo">
                DM
              </div>

              <div className="flex bg-[#464640]/40 rounded-2xl backdrop-blur-[4px] p-2 gap-4 flex-row justify-end items-start">

                <motion.p className="text_para text-(--text-colour)">
                  Ok sure.
                </motion.p>

              </div>

            </div>

          </div>

          {/* --------------------------------
              CONTACT FORM
          -------------------------------- */}

          <form
            ref={form}
            name="contact"
            method="POST"
            onSubmit={handleSubmit}
            className="mt-6 lg:mt-0 border-[1.4px] bg-[#201f1f] rounded-2xl backdrop-blur-[3px] z-50 border-(--text-colour)/45 p-4 lg:w-1/2 w-full"
          >

            {/* Required by Netlify for React-rendered forms */}
            <input
              type="hidden"
              name="form-name"
              value="contact"
            />

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
                    placeholder="Eg: Danford"
                    required
                    className="text_field"
                  />

                </div>

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
                    name="user_email"
                    autoComplete="email"
                    placeholder="Eg: danniemankhwazi@gmail.com"
                    required
                    className="text_field"
                  />

                </div>

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

                <div className="flex bg-transparent mt-2 focus-within:border-green transition-all">

                  {/* Country code */}

                  <select
                    name="country-code"
                    value={countryCode}
                    onChange={(e) => {
                      setCountryCode(e.target.value);

                      /*
                       * Clear an existing phone error when
                       * the visitor changes country.
                       */
                      setErrors((prev) => ({
                        ...prev,
                        phone: undefined,
                      }));
                    }}
                    className=" bg-(--secondary-color) w-fit"
                  >

                    <option value="+265">
                      MW +265
                    </option>

                    <option value="+1">
                      US +1
                    </option>

                    <option value="+258">
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
                    placeholder={phonePlaceholder}
                    value={phone}
                    onChange={(e) => {

                      /*
                       * Keep only numeric characters.
                       *
                       * We intentionally do NOT impose
                       * a fixed digit limit here.
                       *
                       * libphonenumber-js handles the
                       * actual country-specific validation.
                       */

                      const value =
                        e.target.value.replace(/\D/g, "");

                      setPhone(value);

                      /*
                       * Remove the phone error as the
                       * visitor starts correcting the number.
                       */

                      if (errors.phone) {
                        setErrors((prev) => ({
                          ...prev,
                          phone: undefined,
                        }));
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
                    placeholder="Type your message here."
                    required
                    className="text_field border border-(--text-color)/30"
                  />

                </div>

                {errors.message && (
                  <p className="mt-1 text-[13px] text-[#a4010f]">
                    {errors.message}
                  </p>
                )}

              </div>

            </div>

            {/* SUBMIT ERROR */}

            {errors.submit && (
              <p className="mt-4 text-center text-[13px] text-[#a4010f]">
                {errors.submit}
              </p>
            )}

            {/* SUBMIT BUTTON */}

            <div className="mt-6 bg-(--secondary-color) rounded-sm">

              <motion.button
                type="submit"
                value="Send"
                whileTap={{ scale: 0.94 }}
                disabled={isSubmitting}
                className="block btn cursor-pointer text-[16px] w-full rounded-[4px] px-3.5 py-2.5 text-center font-medium shadow-sm transition-all duration-500 tracking-wide bg-(--secondary-color) text-[#0b0b0d]"
              >

                <AnimatePresence mode="wait">

                  {isSubmitting ? (

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

      {/* ==================================================
          SUCCESS MODAL
      ================================================== */}

      <AnimatePresence>
        {submitted && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-[#000000]/70
              backdrop-blur-[3px]
              px-5
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 15,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                w-full
                max-w-[320px]
                overflow-hidden
                rounded-2xl
                border
                border-[#978F66]/20
                bg-[#101011]
                px-6
                py-6
                text-center
                shadow-[0_25px_80px_rgba(0,0,0,0.65)]
              "
            >

              {/* --------------------------------
                  AUTO-CLOSE PROGRESS BAR
              -------------------------------- */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-[2px]
                  bg-[#fffced]/10
                "
              >

                <motion.div
                  className="h-full bg-(--secondary-color)"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${modalProgress}%`,
                  }}
                  transition={{
                    duration: 0.03,
                    ease: "linear",
                  }}
                />

              </div>

              {/* --------------------------------
                  CLOSE BUTTON
              -------------------------------- */}

              <motion.button
                type="button"
                onClick={() => setSubmitted(false)}
                whileTap={{ scale: 0.85 }}
                aria-label="Close success message"
                className="
                  absolute
                  right-3
                  top-3
                  flex
                  size-9
                  items-center
                  justify-center
                  rounded-full
                  text-[#fffced]/80
                  transition-all
                  duration-300
                  hover:bg-[#fffced]/10
                  hover:text-[#fffced]
                  cursor-pointer
                "
              >

                <span className="text-[25px] leading-none font-light">
                  ×
                </span>

              </motion.button>

              {/* --------------------------------
                  SUCCESS ICON
              -------------------------------- */}

              <motion.div
                initial={{
                  scale: 0,
                  rotate: -45,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.15,
                  type: "spring",
                  stiffness: 450,
                  damping: 18,
                }}
                className="
                  mx-auto
                  flex
                  size-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#635BFF]
                  shadow-[0_0_30px_rgba(99,91,255,0.35)]
                "
              >

                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.35,
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                  }}
                >

                  <Check
                    size={25}
                    strokeWidth={2.5}
                    color="#ffffff"
                  />

                </motion.div>

              </motion.div>

              {/* --------------------------------
                  MODAL HEADING
              -------------------------------- */}

              <motion.h3
                id="success-modal-title"
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.35,
                }}
                className="
                  mt-5
                  text-[21px]
                  font-semibold
                  text-[#fffced]
                "
              >
                Thank you!
              </motion.h3>

              {/* --------------------------------
                  MODAL MESSAGE
              -------------------------------- */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.35,
                }}
                className="
                  mx-auto
                  mt-3
                  max-w-[250px]
                  text-[14px]
                  leading-[1.5]
                  text-[#fffced]/65
                "
              >
                Your message has been sent successfully.
                <br />
                I will get back to you as soon as possible.
              </motion.p>

              {/* --------------------------------
                  OK BUTTON
              -------------------------------- */}

              <motion.button
                type="button"
                onClick={() => setSubmitted(false)}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.35,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  mt-6
                  w-full
                  rounded-lg
                  border
                  border-[#978F66]/30
                  bg-[#101011]
                  py-2
                  text-[14px]
                  font-medium
                  text-[#fffced]
                  shadow-[0_0_15px_rgba(99,91,255,0.2)]
                  transition-all
                  duration-300
                  hover:border-[#978F66]/60
                  hover:bg-[#978F66]/10
                  cursor-pointer
                "
              >
                OK
              </motion.button>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

    </section>
  );
};

export default ContactMe;