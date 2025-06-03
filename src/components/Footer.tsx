
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-martial-red" />
              <span className="font-bebas text-xl text-martial-red tracking-wider">
                ELITE MARTIAL ARTS
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your life through the discipline and power of martial arts. 
              Join our community of warriors and discover your true potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-martial-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-martial-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-martial-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bebas text-lg text-white mb-4 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-martial-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-martial-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-martial-red transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-martial-red transition-colors">
                  Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bebas text-lg text-white mb-4 tracking-wide">CONTACT INFO</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-martial-red mr-2" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-martial-red mr-2" />
                <span className="text-gray-300">info@elitemartialarts.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-martial-red mr-2 mt-1" />
                <span className="text-gray-300">
                  123 Warrior Street<br />
                  Fitness City, FC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Elite Martial Arts Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
