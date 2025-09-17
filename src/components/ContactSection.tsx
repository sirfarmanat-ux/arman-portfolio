import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(
      SERVICE_ID!,
      TEMPLATE_ID!,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus("❌ Failed to send message. Please try again.");
    });
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
          {/* Left side info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I'm always excited to work on new projects and collaborate with creative minds. 
              Let's bring your vision to life!
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-rose-800" />
                </div>
                <div>
                  <p className="font-medium text-black">Phone</p>
                  <p className="text-gray-600">+91 9555151199</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-rose-800" />
                </div>
                <div>
                  <p className="font-medium text-black">Email</p>
                  <a href="mailto:sirfarman.at@gmail.com" className="text-gray-600 hover:text-rose-800">
                    sirfarman.at@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                  <Instagram size={20} className="text-rose-800" />
                </div>
                <div>
                  <p className="font-medium text-black">Instagram</p>
                  <a href="https://instagram.com/offooweirdo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-800">
                    @offooweirdo
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-rose-800" />
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
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-rose-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-rose-900 transition-colors duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>

            {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
