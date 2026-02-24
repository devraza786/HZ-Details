import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-bold text-2xl text-green-500 mb-4">Greener Houston</h3>
          <p className="text-gray-300 text-sm font-body leading-relaxed">
            Premium landscape design and installation services in Houston, Texas. We transform outdoor spaces into stunning masterpieces.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-4 text-white">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300 font-body">
            <li><Link to="/services" className="hover:text-green-500 transition-colors">Landscape Design</Link></li>
            <li><Link to="/services" className="hover:text-green-500 transition-colors">Hardscape Installation</Link></li>
            <li><Link to="/services" className="hover:text-green-500 transition-colors">Irrigation & Drainage</Link></li>
            <li><Link to="/services" className="hover:text-green-500 transition-colors">Sprinkler Installation</Link></li>
            <li><Link to="/services" className="hover:text-green-500 transition-colors">Turf Installation</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300 font-body">
            <li><Link to="/" className="hover:text-green-500 transition-colors">Home</Link></li>
            <li><Link to="/gallery" className="hover:text-green-500 transition-colors">Gallery</Link></li>
            <li><Link to="/testimonials" className="hover:text-green-500 transition-colors">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-green-500 transition-colors">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-300 font-body">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-500" />
              <a href="tel:+18328017545" className="hover:text-green-500 transition-colors">(832) 801-7545</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-500" />
              <a href="mailto:ray.greengrass@gmail.com" className="hover:text-green-500 transition-colors">ray.greengrass@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-green-500 mt-0.5" />
              <span>1637 Oak Tree Dr<br />Houston, TX 77080</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 font-body">
        <p>&copy; {new Date().getFullYear()} Greener Houston. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-green-500 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-green-500 transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
