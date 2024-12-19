import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-[90%] mx-auto">
        <h1 className="text-3xl font-bold attractive-font text-center text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            Welcome to Bizchrome, a platform dedicated to connecting freelancers
            with clients for various services. Your privacy is of utmost
            importance to us, and we are committed to protecting your personal
            information. This Privacy Policy outlines how we collect, use,
            disclose, and safeguard your information when you visit our website.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl attractive-font font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Personal Data:</h3>
                <p className="text-gray-600">
                  When you register on our Site, create a profile, or place an
                  order, we may collect personal information such as your name,
                  email address, phone number, payment information, and any
                  other details necessary to provide our services.
                </p>
              </div>
              <div>
                <h3 className="font-medium attractive-font text-gray-900">
                  Non-Personal Data:
                </h3>
                <p className="text-gray-600">
                  We may collect non-personal information, such as your browser
                  type, operating system, IP address, and the pages you visit on
                  our Site. This data helps us understand how users interact
                  with our Site and improve our services.
                </p>
              </div>
              <div>
                <h3 className="font-medium attractive-font text-gray-900">Cookies:</h3>
                <p className="text-gray-600">
                  Our Site uses cookies to enhance your experience. Cookies are
                  small files placed on your device that help us analyze web
                  traffic and customize our services. You can choose to accept
                  or decline cookies through your browser settings.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 attractive-font className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Providing and managing your account</li>
              <li>Processing transactions and sending related information</li>
              <li>Improving our services and developing new features</li>
              <li>
                Communicating with you about updates, promotions, and news
              </li>
              <li>Personalizing your experience on our Site</li>
              <li>
                Responding to your inquiries and providing customer support
              </li>
              <li>
                Monitoring and analyzing usage and trends to improve our Site
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl attractive-font font-semibold text-gray-900 mb-4">
              3. How We Share Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We may share your information with third parties in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>With service providers who perform services on our behalf</li>
              <li>
                With other users of the Site, to facilitate the provision of
                freelance services
              </li>
              <li>
                In response to legal requests or to comply with applicable laws
              </li>
              <li>
                To protect the rights, property, or safety of Bizchrome, our
                users, or others
              </li>
              <li>
                In connection with a merger, sale, or acquisition of all or part
                of our business
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl attractive-font font-semibold text-gray-900 mb-4">
              4. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="text-gray-600">
              <p>Bizchrome</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:bizchrom@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  bzchrom@gmail.com
                </a>
              </p>
              <p>Address: Pune Maharashtra</p>
            </div>
          </section>

          <p className="text-gray-600 mt-8 text-center">
            Thank you for choosing Bizchrome. Your trust and privacy are our top
            priorities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
