const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 font-body text-lg">
              Last updated: September 29, 2025
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                Welcome to The Great Logic. These Terms and Conditions govern
                your use of our website, products, and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                2. Products and Services
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                The Great Logic provides smart automation solutions including
                Logic Labels, Logic Lights, and software development services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                3. Contact Information
              </h2>
              <p className="text-gray-700 font-body leading-relaxed">
                If you have any questions about these Terms and Conditions,
                please contact us at info@thegreatlogic.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
