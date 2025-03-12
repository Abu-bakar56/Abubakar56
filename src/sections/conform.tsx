
"use client";

import React, { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from '@/assets/images/grain.jpg';

export const ContactPage2 = () => {
  const [submitted, setSubmitted] = useState(false); 

  return (
    <div className="container mt-20 mb-20">
      {/* Contact Section */}
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h1 className="text-5xl font-extrabold uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mb-4">Contact Me</h1>
        <SectionHeader eyebrow="" title="" description="Feel free to reach out to me. I'd love to connect!" />
      </div>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="text-center">
            <FaPhoneAlt className="mx-auto text-4xl mb-4 text-emerald-300" />
            <div className='absolute inset-0 -z-30 opacity-5' style={{
              backgroundImage: `url(${grainImage.src})`,
            }}></div>
            <h3 className="text-xl font-bold text-emerald-300">Phone</h3>
            <p className="text-gray-400 mt-2">03217650781</p>
          </div>
        </div>
        <div className="p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="text-center">
            <FaEnvelope className="mx-auto text-4xl mb-4 text-emerald-300" />
            <div className='absolute inset-0 -z-30 opacity-5' style={{
              backgroundImage: `url(${grainImage.src})`,
            }}></div>
            <h3 className="text-xl font-bold text-emerald-300">Email</h3>
            <p className="text-gray-400 mt-2">abubakarshahzad730@gmail.com</p>
          </div>
        </div>
        <div className="p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="text-center">
            <FaMapMarkerAlt className="mx-auto text-4xl mb-4 text-emerald-300" />
            <div className='absolute inset-0 -z-30 opacity-5' style={{
              backgroundImage: `url(${grainImage.src})`,
            }}></div>
            <h3 className="text-xl font-bold text-emerald-300">Location</h3>
            <p className="text-gray-400 mt-2">Faisalabad, Pakistan</p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <SectionHeader eyebrow="SEND A MESSAGE" title="Let's Connect" description="I'm always open to new opportunities or collaborations!" />
        {submitted && <p className="text-center text-lg text-emerald-300 mt-6">Thank you for reaching out! I'll get back to you soon.</p>}
      </div>

      {/* Contact Form */}
      <form
  className="mt-10 flex flex-col dark:text-black"
  onSubmit={async (e) => {
    e.preventDefault();

    // Cast event.target to the correct type
    const form = e.target as HTMLFormElement;
    const senderEmail = (form.senderEmail as HTMLInputElement).value;
    const message = (form.message as HTMLTextAreaElement).value;

    // Create FormData object
    const formData = new FormData();
    formData.append("senderEmail", senderEmail);
    formData.append("message", message);

    console.log("Form data submitted:", formData); // Debug log

    const { data, error } = await sendEmail(formData);

    if (data) {
      setSubmitted(true);
      form.reset();
    }
    if (error) {
      console.log("Error:", error); // Log any error
    }
  }}
>
  <input
    className="h-14 px-4 rounded-lg borderBlack dark:bg-white  dark:focus:bg-opacity-100 transition-all dark:outline-none"
    name="senderEmail"
    type="email"
    required
    maxLength={500}
    placeholder="Your email"
  />
  <textarea
    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white  dark:focus:bg-opacity-100 transition-all dark:outline-none"
    name="message"
    placeholder="Your message"
    required
    maxLength={5000}
  />
 <div className="relative z-20 ">
 <button
    type="submit"
    className="mt-4 py-3 px-6 rounded-lg bg-emerald-300 text-white font-semibold transition-all hover:bg-emerald-400"
  >
    Send Message
  </button>
  </div>
 
</form>

    </div>
  );
};

export default ContactPage2;
