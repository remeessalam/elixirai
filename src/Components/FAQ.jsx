import { faqItems } from "../contant";

const FAQ = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            {"FAQs".toUpperCase()}
          </h3>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqItems.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
