"use client"

import { useForm } from "react-hook-form";

export default function ExampleForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 max-w-lg mx-auto">
      {/* Description Field */}
      <div>
        <label className="block">Description</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          className="border p-2 w-full"
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label className="block">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* Contact Number Field */}
      <div>
        <label className="block">Contact Number</label>
        <input
          type="tel"
          {...register("contact", { required: "Contact number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid contact number" } })}
          className="border p-2 w-full"
        />
        {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
}
