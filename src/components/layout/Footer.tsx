import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="gradient-navy text-primary-foreground">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="HZ Details" className="h-20 w-auto mb-4" />
          <p className="text-silver-light text-sm font-body leading-relaxed">
            Premium auto detailing services in Houston, Texas. We bring showroom shine to your vehicle.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-silver-light font-body">
            <li><Link to="/services/full-detail" className="hover:text-accent transition-colors">Full Detail</Link></li>
            <li><Link to="/services/interior-exterior" className="hover:text-accent transition-colors">Interior & Exterior</Link></li>
            <li><Link to="/services/ceramic-coating" className="hover:text-accent transition-colors">Ceramic Coating</Link></li>
            <li><Link to="/services/paint-correction" className="hover:text-accent transition-colors">Paint Correction</Link></li>
            <li><Link to="/services/waxing" className="hover:text-accent transition-colors">Waxing</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-silver-light font-body">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link to="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
            <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-silver-light font-body">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:+18329843507" className="hover:text-accent transition-colors">(832) 984-3507</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <span>info@hzdetails.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-accent mt-0.5" />
              <span>Houston, TX & Surrounding Areas</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-silver-light font-body">
        <p>&copy; {new Date().getFullYear()} HZ Details. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-accent transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
