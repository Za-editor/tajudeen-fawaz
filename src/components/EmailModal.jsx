import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const EmailModal = ({ isOpen, toggleModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  const newErrors = {};

  if (!formData.name.trim()) newErrors.name = "Full name is required.";
  if (!formData.email.trim()) newErrors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    newErrors.email = "Invalid email format.";

  if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
  if (!formData.message.trim()) newErrors.message = "Message is required.";
  else if (formData.message.length < 10)
    newErrors.message = "Message must be at least 10 characters.";

  setErrors(newErrors);


  if (Object.keys(newErrors).length > 0) {
    setStatus("⚠️ Please fix the errors below.");
    return;
  }




    setStatus("Sending...");
    emailjs
      .send(
        "service_p3rwkbe",
        "template_iux7btr",
        formData,
        "Se3XaehTvIJ9YS3KB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const handleCancel = () => {
    toggleModal();
    setFormData({ name: "", email: "", subject: "", message: "" });
    setStatus("");
    setErrors({});
  };

    
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => (document.body.style.overflow = "auto");
    }, [isOpen]);
  return (
    <div
      className={`right-0 absolute bottom-0 w-full md:w-3/4 lg:w-2/4 transition-all duration-700 ease-in-out  ${
        isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-gradient text-white flex justify-between items-center px-4 py-3">
        <h2 className="text-white text-sm md:text-lg lg:text-xl  ">
          Work with us
        </h2>
        <span onClick={handleCancel} className="cur hover:scale-110">
          <FaTimes />
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="   p-4 flex flex-col gap-4  shadow-2xl backdrop-blur-[5px] "
      >
        <div className="flex items-center w-full">
          <label
            className="mr-4 whitespace-nowrap text-gradient"
            htmlFor="name"
          >
            Full Name:
          </label>
          <input
            className={`flex-1 border-b border-gray-400 focus:outline-none p-2 ${
              errors.name ? "border-red-500" : ""
            }`}
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </div>

        <div className="flex items-center w-full">
          <label
            className="mr-4 whitespace-nowrap text-gradient"
            htmlFor="Email"
          >
            Email:
          </label>
          <input
            className={`flex-1 border-b border-gray-400 focus:outline-none p-2 ${
              errors.email ? "border-red-500" : ""
            }`}
            value={formData.email}
            onChange={handleChange}
            type="text"
            id="email"
            placeholder="Email Address"
          />
        </div>

        <div className="flex items-center w-full">
          <label
            className="mr-4 whitespace-nowrap text-gradient"
            htmlFor="subject"
          >
            Subject:
          </label>
          <input
            className={`flex-1 border-b border-gray-400 focus:outline-none p-2 ${
              errors.subject ? "border-red-500" : ""
            }`}
            value={formData.subject}
            onChange={handleChange}
            type="text"
            id="subject"
            placeholder="Subject"
          />
        </div>

        <div className="flex flex-col w-full h-[150px] ">
          <textarea
            className={`flex-1 border-b border-gray-400 focus:outline-none p-2 ${
              errors.message ? "border-red-500" : ""
            }`}
            value={formData.message}
            onChange={handleChange}
            id="message"
            placeholder="Your message"
          />
        </div>

        <div className="flex gap-4 justify-end">
          <div onClick={handleCancel} className="">
            <Button
              text={"Cancel"}
              className="inline-block mt-2 px-6 shadow-2xl py-3 rounded-2xl text-sm font-medium transition hover:text-gradient  text-gradient  cursor-pointer"
            />
          </div>

          <Button
            type="submit"
            text={"Send"}
            className="inline-block mt-2 px-6 py-3 rounded-2xl text-sm font-medium transition bg-gradient text-white hover:bg-gray-600 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default EmailModal;
