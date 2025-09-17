import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            LET'S CONNECT
          </h2>
          <p className="text-2xl font-serif italic text-rose-800">
            Ready to work together?
          </p>
          <div className="w-24 h-1 bg-rose-800 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Let's bring your vision to life!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-rose-800" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-black">Phone</p>
                  <p className="text-gray-600">+91 9555151199</p>
                </div>
              </div>

<div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <div className="flex-shrink-0">
    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
      <Mail size={20} className="text-rose-800" />
    </div>
  </div>
  <div>
    <p className="font-medium text-black">Email</p>
    <a
      href="mailto:sirfarman.at@gmail.com"
      className="text-gray-600 hover:text-rose-800 transition-colors"
    >
      sirfarman.at@gmail.com
    </a>
  </div>
</div>


<div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <div className="flex-shrink-0">
    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
      <Instagram size={20} className="text-rose-800" />
    </div>
  </div>
  <div>
    <p className="font-medium text-black">Instagram</p>
    <a
      href="https://instagram.com/offooweirdo"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-rose-800 transition-colors"
    >
      @offooweirdo
    </a>
  </div>
</div>

<div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <div className="flex-shrink-0">
    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
      {/* LinkedIn icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="w-5 h-5 text-rose-800"
      >
        <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 
        1.146H.725A.723.723 0 010 14.854V1.146zM4.943 13.5V6.169H2.542V13.5h2.401zm-1.2-8.233c.837 
        0 1.356-.554 1.356-1.248-.015-.709-.52-1.248-1.342-1.248-.822 
        0-1.356.54-1.356 1.248 0 .694.52 1.248 1.327 1.248h.015zM13.458 
        13.5V9.359c0-2.19-1.167-3.208-2.724-3.208-1.258 
        0-1.835.694-2.153 1.180h.03V6.169H6.21c.03.694 0 7.331 0 7.331h2.401v-4.094c0-.219.015-.433.08-.588.175-.433.574-.883 
        1.248-.883.881 0 1.233.667 1.233 1.646V13.5h2.286z"/>
      </svg>
    </div>
  </div>
  <div>
    <p className="font-medium text-black">LinkedIn</p>
    <a
      href="https://www.linkedin.com/in/arman-ahmed-a14744382"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-rose-800 transition-colors"
    >
      arman-ahmed-a14744382
    </a>
  </div>
</div>



              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-rose-800" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-black">Location</p>
                  <p className="text-gray-600">Lucknow, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-rose-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-rose-900 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;