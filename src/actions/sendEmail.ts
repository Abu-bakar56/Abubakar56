"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from '@/sections/conform';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    console.log("Invalid sender email:", senderEmail); // Debug log
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    console.log("Invalid message:", message); // Debug log
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "abubakarshahzad730@gmail.com",
      subject: "Message from contact form",
      
      // react: React.createElement(ContactFormEmail, { message, senderEmail }),
      react: `<p>i am ${senderEmail} .${message}</p>`, // For simplicity, just sending message text
    });
    console.log("Email sent successfully:", data); // Debug log
  } catch (error: unknown) {
    console.log("Error sending email:", error); // Debug log
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
