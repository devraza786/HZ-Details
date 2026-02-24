import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div>
          <h3 className="font-black text-2xl text-blue-500 mb-4">HZ Details</h3>
          <p className="text-gray-400 text-sm font-body leading-relaxed">
            Premium auto detailing services in Houston, Texas. We bring showroom shine to your vehicle with precision, premium products, and personalized care.
          </p>
          <div className="flex gap-2 mt-4">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-4 text-white">Our Services</h4>
          <ul className="space-y-2 text-sm text-gray-400 font-body">
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Full Detail</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Ceramic Coating</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Paint Correction</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Interior Deep Clean</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Exterior Protection</Link></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-4 text-white">Working Hours</h4>
          <ul className="space-y-2 text-sm text-gray-400 font-body">
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              Monday – Friday: 8:00 AM – 6:00 PM
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              Saturday: 9:00 AM – 5:00 PM
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              Sunday: Closed
            </li>
            <li className="mt-3 text-xs text-gray-500">
              *Emergency appointments available by request
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400 font-body">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <a href="tel:+18329843507" className="hover:text-blue-500 transition-colors">(832) 984-3507</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <a href="mailto:info@hzdetails.com" className="hover:text-blue-500 transition-colors">info@hzdetails.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
              <span>Houston, TX & Surrounding Areas</span>
            </li>
            <li className="mt-4 pt-4 border-t border-gray-700">
              <a href="#" className="text-blue-500 hover:text-blue-400 text-xs transition-colors">
                ⭐ Leave us a Google Review
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-3 text-sm text-gray-300">Quick Links</h5>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-500 transition-colors">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-blue-500 transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-semibold mb-3 text-sm text-gray-300">Legal</h5>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-500 transition-colors">Terms & Conditions</Link></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Booking Policy</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h5 className="font-semibold mb-3 text-sm text-gray-300">Service Areas</h5>
            <p className="text-xs text-gray-500">
              Houston • Energy Corridor • The Woodlands • Sugar Land • Katy • Cypress • Spring • Humble • Pearland • League City
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-body">
        <p>&copy; {new Date().getFullYear()} HZ Details | Premium Auto Detailing Houston TX. All rights reserved.</p>
        <div className="flex gap-4 text-xs">
          <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-blue-500 transition-colors">Terms</Link>
          <a href="tel:+18329843507" className="hover:text-blue-500 transition-colors">(832) 984-3507</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
