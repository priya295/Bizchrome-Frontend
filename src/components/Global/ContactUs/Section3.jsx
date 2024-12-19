import React from 'react'
import { MdEmail, MdLocationOn } from 'react-icons/md'


const Section3 = () => {
  return (
    <div className=" bg-gray-50">
    <div className="container mx-auto px-4 py-8">
      <div className='p-[40px] rounded-2xl shadow-cs '>
      <div className="grid md:grid-cols-[400px_1fr] gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className=" p-6 mt-[40px]">
            <h2 className="text-2xl attractive-font font-semibold mb-6">Contact Information</h2>
            
            {/* Write to us */}
            <div className="flex items-start border-b border-[#dbdbdb] pb-[18px] space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <MdEmail className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Write to us</h3>
                <a 
                  href="mailto:contact@bizchrome.com" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact@bizchrome.com
                </a>
              </div>
            </div>

            {/* Visit us */}
            <div className="flex items-start border-b border-[#dbdbdb] pb-[18px] space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MdLocationOn className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Visit us</h3>
                <p className="text-gray-600">
                  Navi Mumbai, 400001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="w-full h-[300px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995644679!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703007161657!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mumbai Map"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Use ctrl + scroll to zoom the map
          </p>
        </div>
      </div>
      </div>
    </div>
  </div>  )
}

export default Section3