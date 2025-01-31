import { faqItems } from "../contant";

const FAQ = () => {
  return (
    <div
      className={`flex flex-col items-center my-20 sm:mt-40 wrapper text-white w-full mx-auto transition-transform duration-500 ease-out `}
    >
      <div className="w-full flex flex-col items-center md:items-start">
        <h3 className="text-[#F5F5F5] w-fit heading   py-[10px] shadow-8xl shadow-white">
          {"FAQS".toUpperCase()}
        </h3>
        {/* <h2 className="text-[35px] text-center mt-18 md:mt-6 md:text-[54px] md:text-start  max-w-[90%] sm:max-w-[70%] md:leading-[65px]">
          Frequently asked
          <br /> questions
        </h2> */}
      </div>
      <div className="mt-10 grid gap-5">
        {/* Upper Section (Grid with 2 Columns for md and above) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqItems.map((faq) => (
            <div key={faq.id} className="bg-[#08081b] flex flex-col">
              <div className="bg-aboutas-gradient h-[.5px]" />
              <div className="py-5 px-3">
                <h4 className="font-medium">{faq.question}</h4>
                <p className="text-base text-[#BABCC6]">{faq.answer}</p>
              </div>
              <div className="bg-aboutas-gradient h-[.5px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
