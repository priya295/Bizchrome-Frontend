import React from 'react'

const TeamsAndConditions = () => {
  return (
    <div className=" bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl attractive-font font-bold text-center mb-8">Terms & Conditions</h1>
      
      <div className="prose max-w-none">
        <p className="mb-6">
          Welcome to Bizchrome. These Terms and Conditions govern your use of our website and services. By accessing or using the Site, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use the Site.
        </p>

        <section className="mb-8">
          <h2 className="text-xl attractive-font font-bold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Site, you agree to these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use our Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl attractive-font font-bold mb-4">2. Description of Services</h2>
          <p>
            Bizchrome is an online platform that connects freelancers with clients seeking various services. We facilitate the interaction and transaction between freelancers and clients, but we do not directly provide freelance services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl attractive-font font-bold mb-4">3. User Accounts</h2>
          <p className="mb-4">
            Registration: To use certain features of the Site, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>
          <p>
            Account Security: You are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl attractive-font font-bold mb-4">4. User Conduct</h2>
          <p>
            You agree to use the Site in accordance with all applicable laws and regulations. You are responsible for all activity that occurs under your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl attractive-font font-bold mb-4">5. Freelance Services</h2>
          <p className="mb-4">
            Responsibility: Freelancers are independent contractors and are not employees or agents of Bizchrome. Clients and freelancers are solely responsible for the terms and conditions of any transactions between them.
          </p>
          <p>
            Payments: All payments for freelance services are processed through the Site. Bizchrome is not responsible for any issues related to payment disputes or non-payment by clients.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl attractive-font font-bold mb-4">6. Intellectual Property</h2>
          <p className="mb-4">
            Ownership: The Site and its original content, features, and functionality are owned by Bizchrome and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl attractive-font font-bold mb-4">13. Contact Us</h2>
          <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
          <div className="ml-4">
            <p>Bizchrome</p>
            <p>Email: <a href="mailto:bizchrm@gmail.com" className="text-blue-600 hover:underline">bizchm@gmail.com</a></p>
            <p>Address: [Your Address]</p>
          </div>
        </section>

        <p className="mt-8 text-center text-gray-600">
          Thank you for using Bizchrome. We hope you have a great experience connecting with freelancers and clients on our platform.
        </p>
      </div>
    </div>
  </div>  )
}

export default TeamsAndConditions