import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-gold/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-navy-dark font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold text-white">
                DAILY<span className="text-gold">DREAM</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Premium tech consulting and outsourcing solutions for the modern enterprise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-gold transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Tech Consulting</li>
              <li className="text-gray-400">Software Development</li>
              <li className="text-gray-400">IT Outsourcing</li>
              <li className="text-gray-400">UI/UX Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:hello@dailydream.com" className="hover:text-gold transition-colors">
                  hello@dailydream.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+1234567890" className="hover:text-gold transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/10">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} DAILYDREAM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
