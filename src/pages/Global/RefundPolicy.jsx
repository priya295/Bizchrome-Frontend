import React from 'react'

const RefundPolicy = () => {
  return (
    <div className=" bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl attractive-font font-bold text-center mb-8">Refund Policy</h1>
      
      <div className="space-y-8">
        <p className="text-gray-600">
          At Bizchrome, we strive to ensure the satisfaction of both our freelancers and clients. However, we understand that there may be instances where a refund is necessary. This Refund Policy outlines the conditions under which refunds are issued and the process for requesting a refund.
        </p>

        <section>
          <h2 className="text-2xl attractive-font font-semibold mb-4">1. Eligibility for Refunds</h2>
          <p className="mb-4">Refunds may be issued under the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Service Not Delivered: If the freelancer fails to deliver the agreed-upon service within the specified timeframe and no satisfactory resolution is reached.</li>
            <li>Service Not as Described: If the delivered service significantly deviates from the agreed-upon terms or description provided by the freelancer.</li>
            <li>Mutual Agreement: If both the client and the freelancer mutually agree to cancel the project and request a refund.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl attractive-font font-semibold mb-4">2. Refund Request Process</h2>
          <p className="mb-4">To request a refund, please follow these steps:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Contact the Freelancer: Initially, try to resolve the issue directly with the freelancer. Clear communication can often resolve misunderstandings or issues.</li>
            <li>Submit a Refund Request: If the issue cannot be resolved, contact Bizchrome customer support at <a href="mailto:support@bizchrome.com" className="text-blue-600 hover:underline">support@bizchrome.com</a>. Provide detailed information about the project, the issue, and any communication with the freelancer regarding the issue.</li>
            <li>Investigation: Our team will investigate the refund request. This may involve reviewing communication, project details, and any work submitted.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl attractive-font font-semibold mb-4">3. Refund Approval</h2>
          <p className="mb-4">Upon approval of your refund request, Bizchrome will process the refund to the original payment method used for the transaction. Please note:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Refunds will be credited within 5-8 business days from the date of approval.</li>
            <li>You will receive a notification email once the refund has been processed.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl attractive-font font-semibold mb-4">4. Non-Refundable Circumstances</h2>
          <p className="mb-4">Refunds will not be issued in the following cases:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Change of Mind: If you change your mind after the freelancer has started working on the project.</li>
            <li>Partial Satisfaction: If you are partially satisfied with the service but do not provide sufficient grounds for a full refund.</li>
            <li>Violation of Terms: If the refund request results from your violation of Bizchrome's Terms and Conditions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl attractive-font font-semibold mb-4">7. Contact Us</h2>
          <p className="mb-4">If you have any questions or concerns about this Refund Policy, please contact us at:</p>
          <div className="pl-6 text-gray-600">
            <p>Bizchrome</p>
            <p>Email: <a href="mailto:bizchm@gmail.com" className="text-blue-600 hover:underline">bzchm@gmail.com</a></p>
            <p>Address: [Your Address]</p>
          </div>
        </section>

        <p className="text-gray-600 text-center mt-12">
          Thank you for choosing Bizchrome. We are committed to providing a fair and transparent process for handling refunds and ensuring the satisfaction of our users.
        </p>
      </div>
    </div>
  </div>  )
}

export default RefundPolicy