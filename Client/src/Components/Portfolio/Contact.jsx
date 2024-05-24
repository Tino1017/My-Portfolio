import React from "react";
import email from "../Images/email.svg";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
export const Contact = () => {
  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const formData = {
    userAdress: userEmail,
    userSubject: subject,
    userMessage: message,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/", formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const inputStyles =
    "bg-transparent backdrop-blur-md bg-purple-400 bg-opacity-15 p-3 rounded-md placeholder:text-gray text-white outline-none md:p-3";
  return (
    <div id="contact">
      <motion.h1
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "backInOut", duration: 0.8, delay: 0.7 }}
        className="text-4xl font-semibold text-center mt-14"
      >
        Get In<span style={{ color: "#9482EB" }}>Touch</span>
      </motion.h1>
      <form
        onSubmit={handleSubmit}
        action="submit"
        className="text-md flex flex-col items pt-10 md:max-w-2xl md:flex md:flex-col md:mx-auto md:text-sm mb-10"
        style={{
          backgroundImage: `url(${email})`,
          backgroundSize: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col px-5 gap-y-3">
          <motion.input
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "backInOut", duration: 0.8, delay: 0.8 }}
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Email address"
            className={inputStyles}
          />
          <motion.input
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "backInOut", duration: 0.8, delay: 0.9 }}
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            name=""
            id=""
            placeholder="Subject"
            className={inputStyles}
          />
          <motion.textarea
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "backInOut", duration: 0.8, delay: 0.95 }}
            type="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name=""
            id=""
            placeholder="Message"
            className=" backdrop-blur-md bg-purple-400 bg-opacity-15 p-3 rounded-md placeholder:text-gray min-h-[200px] outline-none"
          />
          <motion.button
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "backInOut", duration: 0.8, delay: 0.98 }}
            type="submit"
            className=" flex items-center justify-center gap-3 p-3 bg-purple-700 bg-opacity-15 font-medium rounded-md hover:bg-opacity-5 duration-500 "
            style={{ backgroundColor: "" }}
          >
            Send Email <HiOutlineMail fontSize={22} />
          </motion.button>
        </div>
      </form>
    </div>
  );
};
