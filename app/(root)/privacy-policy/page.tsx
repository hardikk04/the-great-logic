const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-16">
        <div className="bg-white rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 font-body text-lg">
              Last updated: September 29, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 font-body leading-relaxed">
                  We collect information you provide directly to us, such as
                  when you create an account, contact us, or use our services.
                  This may include your name, email address, phone number, and
                  other contact information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 font-body leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 font-body">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and customer support</li>
                  <li>
                    Communicate with you about products, services, and events
                  </li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-gray-700 font-body leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy. We may share your information with
                  trusted service providers who assist us in operating our
                  website and conducting our business.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-700 font-body leading-relaxed">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission
                  over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  5. Cookies and Tracking
                </h2>
                <p className="text-gray-700 font-body leading-relaxed">
                  We use cookies and similar tracking technologies to track
                  activity on our service and store certain information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  6. Your Rights
                </h2>
                <p className="text-gray-700 font-body leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 font-body">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Portability of your data</li>
                  <li>Objection to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  7. Changes to This Policy
                </h2>
                <p className="text-gray-700 font-body leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  8. Contact Us
                </h2>
                <p className="text-gray-700 font-body leading-relaxed">
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-body">
                    <strong>The Great Logic</strong>
                    <br />
                    Email: info@thegreatlogic.com
                    <br />
                    Phone: +91 82902 27562
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
