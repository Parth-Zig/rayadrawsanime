"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message Sent Successfully!");
  };

  // Function to generate a custom error message
  const getErrorMessage = () => {
    let requiredFields = [];
    let invalidFields = [];
  
    if (errors.description?.type === "required") requiredFields.push("Description");
    if (errors.email?.type === "required") requiredFields.push("Email");
    if (errors.contact?.type === "required") requiredFields.push("Contact Number");
  
    if (errors.email?.type === "pattern") invalidFields.push("Email");
    if (errors.contact?.type === "pattern") invalidFields.push("Contact Number");
  
    return (
      <>
        {requiredFields.length > 0 && (
          <p className="text-gray-500">{"Required: " + requiredFields.join(", ")}</p>
        )}
        {invalidFields.length > 0 && (
          <p className="text-gray-500">{"Invalid: " + invalidFields.join(", ")}</p>
        )}
      </>
    );
  };
  

  {
    getErrorMessage();
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      {/* Fixed Height Container */}
      <div
        className="rounded-2xl shadow-lg w-full max-w-3xl flex flex-col md:flex-row overflow-hidden"
        style={{ height: "400px" }}
      >
        {/* Left Side - Large Textarea */}
        <div className="w-full h-full md:w-1/2 p-6 flex flex-col justify-center">
          <textarea
            {...register("description", {
              required: true,
            })}
            className="w-full h-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
            placeholder="Brief your requirements - illustration/animation, type of art, budget, deadline & references (if any)."
          ></textarea>
        </div>

        {/* Right Side - Inputs & Button */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between space-y-4">
          <div className="flex flex-col gap-6">
            <input
              type="email"
              {...register("email", {
                pattern: /^\S+@\S+$/i,
                required: true,
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Email ID"
            />

            <input
              type="text"
              {...register("contact", {
                pattern: /^[0-9]{10}$/,
                required: true,
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Telegram/WhatsApp"
            />
          </div>

          <div className="justify-evenly items-center md:flex hidden">
            <Image
              src="/email.gif"
              alt="Animation"
              width={50}
              height={50}
              className="icon"
              unoptimized
            />
            <Image
              src="/seal.gif"
              alt="Animation"
              width={50}
              height={50}
              className="icon"
              unoptimized
            />
            <Image
              src="/email (1).gif"
              alt="Animation"
              width={50}
              height={50}
              className="icon"
              unoptimized
            />
          </div>

          {getErrorMessage() && (
            <div className="text-sm">{getErrorMessage()}</div>
          )}

          <button
            type="submit"
            className="blackBtn w-full py-3 rounded-lg text-lg font-semibold transition"
            onClick={handleSubmit(onSubmit)}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
