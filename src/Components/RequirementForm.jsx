import { useForm } from "react-hook-form";

const RequirementForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };
  return (
    <div className="bg-white p-4 rounded-2xl shadow-xl w-full">
      <h1 className="text-2xl font-semibold text-center">
        Share your Requirements
      </h1>
      <p className="text-center py-2">
        To help our experts understand your business objectives and <br />
        create you customized plan.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-3"
      >
        {/* Name Field */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onBlur={() => trigger("email")} // Ensure validation triggers on blur
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]+$/, // Only digits allowed
                message: "Phone number must contain only numbers",
              },
              validate: (value) =>
                value.length === 10 ||
                value.length === 12 ||
                "Phone number must be 10 or 12 digits long",
            })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </span>
          )}
        </div>

        {/* Service Interested Field */}
        <div className="flex flex-col">
          <label
            htmlFor="service"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Service Interested
          </label>
          <select
            id="service"
            {...register("service", { required: "Service is required" })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-development">Mobile Development</option>
            <option value="ai-ml">AI & ML</option>
            <option value="consulting">Consulting</option>
          </select>
          {errors.service && (
            <span className="text-red-500 text-sm mt-1">
              {errors.service.message}
            </span>
          )}
        </div>

        {/* Budget Field */}
        <div className="flex flex-col">
          <label
            htmlFor="budget"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Budget
          </label>
          <select
            id="budget"
            {...register("budget", { required: "Budget is required" })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a budget</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000-5000">$1000 - $5000</option>
            <option value="5000+">$5000+</option>
            <option value="5000+">Still evaluating</option>
          </select>
          {errors.budget && (
            <span className="text-red-500 text-sm mt-1">
              {errors.budget.message}
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col col-span-1 md:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            GET STARTED
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequirementForm;
