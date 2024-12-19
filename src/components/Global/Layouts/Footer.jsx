import { useState } from "react";
import brandlogo from "../../../assets/brandlogo.png";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#e8e8e8]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top section with logo and newsletter */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            {/* Logo and social links */}
            <div className="flex items-center space-x-2">
              <img src={brandlogo} />
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <FaXTwitter/>

              
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:ml-auto">
            <form className="sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full min-w-0 appearance-none rounded-md border-2 border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500  focus:outline-none "
                placeholder="Enter your email to join..."
              />
              <div className="mt-3 sm:ml-3 sm:mt-0">
                <button
                  type="submit"
                  className="flex w-full whitespace-nowrap items-center justify-center rounded-md bg-blue-600 p-[10px] text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
            <nav className="mt-12">
              <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
                {[
                  ["About Us", "#"],
                  ["Contact Us", "#"],
                  ["Privacy Policy", "#"],
                  ["Terms & Conditions", "#"],
                  ["Refund Policy", "#"],
                ].map(([title, url]) => (
                  <li key={title}>
                    <a
                      href={url}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 ">
          <div className="flex items-center space-x-3 text-gray-600 mb-[14px]">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Navi Mumbai, 400001</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:Contact@Bizchrome.com"
              className="hover:text-blue-600 transition-colors"
            >
              Contact@Bizchrome.com
            </a>
          </div>
        </div>

        {/* Navigation Links */}

        {/* Copyright */}
        <p className="mt-12 text-center text-sm text-gray-500">
          Copyrighted © 2024 | Bizchrome
        </p>
      </div>

      <style jsx>{`
        .clip-tie {
          clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
        }
      `}</style>
    </footer>
  );
}
export default Footer