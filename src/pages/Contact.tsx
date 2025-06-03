
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-martial-red to-martial-red-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-6 tracking-wider">
            CONTACT US
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Ready to start your martial arts journey? Get in touch with us today and take the first step toward transformation.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="font-bebas text-3xl text-martial-red mb-6 tracking-wider">
                GET STARTED TODAY
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-martial-red focus:border-martial-red"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-martial-red focus:border-martial-red"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-martial-red focus:border-martial-red"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                      Program of Interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-martial-red focus:border-martial-red"
                    >
                      <option value="">Select a program</option>
                      <option value="little-warriors">Little Warriors (Ages 4-7)</option>
                      <option value="youth-champions">Youth Champions (Ages 8-14)</option>
                      <option value="adult-mastery">Adult Mastery (Ages 15+)</option>
                      <option value="elite-competition">Elite Competition</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-martial-red focus:border-martial-red"
                    placeholder="Tell us about your goals and any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-martial-red text-white py-3 px-6 rounded-md font-medium hover:bg-martial-red-dark transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="font-bebas text-3xl text-martial-red mb-6 tracking-wider">
                VISIT OUR DOJO
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-martial-red mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Warrior Street<br />
                      Fitness City, FC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-martial-red mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-martial-red mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@elitemartialarts.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-martial-red mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                      <p>Saturday: 8:00 AM - 8:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-martial-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-3xl md:text-4xl text-white mb-4 tracking-wider">
            READY TO BEGIN YOUR JOURNEY?
          </h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their lives through martial arts. 
            Your first class is always free!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-martial-red px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
              Schedule Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-martial-red transition-colors">
              Call Now: (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
