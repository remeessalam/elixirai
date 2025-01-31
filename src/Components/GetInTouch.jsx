import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { clientDetails } from "../contant";

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaQuestion, setCaptchaQuestion] = useState({
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
  });
  const [send, setSending] = useState(false);
  const correctAnswer = captchaQuestion.num1 + captchaQuestion.num2;

  const handleCaptchaChange = (e) => {
    setCaptchaAnswer(e.target.value);
  };

  const onSubmit = async (data) => {
    setSending(true);
    // No need to validate email manually here
    if (parseInt(captchaAnswer) !== correctAnswer) {
      toast.error("Incorrect CAPTCHA answer");
      setSending(false);

      return;
    }

    var emailBody = "Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Subject: " + data.subject + "\n\n";
    emailBody += "Message:\n" + data.message;
    emailBody += "Phone:\n" + data.contactNumber;

    const payload = {
      to: clientDetails.email,
      // to: "remeesreme4u@gmail.com",
      subject: "You have a new message from [your-company-name]",
      body: emailBody,
    };

    try {
      const response = await fetch(
        "https://smtp-api-tawny.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        toast.success("Email sent successfully");
        reset();
        setCaptchaAnswer("");
        setCaptchaQuestion({
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to send email");
        setSending(false);
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="contact" className="py-[5rem] relative">
      <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[2rem] right-3 -z-10"></div>
      <div className="blue-bg-shape bottom-[-2rem] left-[-2rem] -z-10 rotate-[-45deg]"></div>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch items-center gap-7">
        <div data-aos="fade-right" className="flex flex-col gap-5 text-white">
          <h1 className="heading text-center lg:text-start">
            Ready to Lead with Innovation? <br /> Let’s Start Your Project
          </h1>
          <p className="description text-center lg:text-start">
            Reach out to discover how our tech solutions can propel your
            business forward.
          </p>
        </div>
        <div data-aos="fade-left" className="flex flex-col items-start gap-3">
          <p className="gradient-text uppercase">Let&apos;s connect</p>
          <div className="bg-gradient-to-r text-white from-primary/80 to-primary rounded-2xl w-fit p-7">
            <h2 className="text-3xl font-medium">
              Connect With Our Team to Get Started!
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-3 mt-3"
            >
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="">
                  <label htmlFor="">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    {...register("fullName", {
                      required: "Full name is required.",
                    })}
                    placeholder="Enter your Full Name"
                    className="w-full outline-none p-3 rounded-lg text-black"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label htmlFor="">Email*</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email format.",
                      },
                    })}
                    placeholder="Enter your mail"
                    className="w-full outline-none p-3 rounded-lg text-black"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="">
                  <label htmlFor="">Subject*</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    {...register("subject", {
                      required: "Subject is required.",
                    })}
                    placeholder="Enter subject"
                    className="w-full outline-none p-3 rounded-lg text-black"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label htmlFor="">Phone Number*</label>
                  <input
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    {...register("contactNumber", {
                      required: "Contact number is required.",
                      pattern: {
                        value: /^\d+$/,
                        message: "Contact number must be numeric.",
                      },
                    })}
                    placeholder="Enter number"
                    className="w-full outline-none p-3 rounded-lg text-black"
                  />
                  {errors.contactNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.contactNumber.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="">
                <label htmlFor="">Message*</label>
                <textarea
                  name="message"
                  id="message"
                  {...register("message", { required: "Message is required." })}
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full outline-none p-3 rounded-lg text-black"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="mt-4">
                {/* CAPTCHA question */}
                <label>
                  What is {captchaQuestion.num1} + {captchaQuestion.num2}?
                </label>
                <input
                  type="text"
                  value={captchaAnswer}
                  onChange={handleCaptchaChange}
                  placeholder="Enter the answer"
                  className="w-full outline-none p-3 rounded-lg text-black"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-white text-[#433d99] px-5 py-3 rounded-full hover:bg-[#5B3E9A] hover:text-white hover:-translate-y-1 duration-300 transition-all"
              >
                {send ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
