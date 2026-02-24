import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-green-700 text-white py-2 px-4 text-sm">
        <div className="container-main flex items-center justify-between">
          <a href="tel:+18328017545" className="flex items-center gap-2 font-body font-medium hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            (832) 801-7545
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-green-100">Houston, TX &amp; Surrounding Areas</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container-main flex items-center justify-between py-4 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="font-bold text-xl text-green-700">Greener Houston</div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 rounded-lg font-heading text-sm font-semibold transition-all duration-200 ${
                  location.pathname === l.to
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+18328017545" className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-sm font-semibold flex items-center gap-2 transition-all">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link to="/contact" className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-sm font-semibold transition-all">
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-green-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-green-700" /> : <Menu className="w-6 h-6 text-green-700" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[60] w-80 max-w-[85vw] bg-white text-gray-900 p-6 flex flex-col gap-4 shadow-2xl"
          >
            <button onClick={() => setMobileOpen(false)} className="self-end p-2" aria-label="Close menu">
              <X className="w-6 h-6 text-green-700" />
            </button>
            <div className="font-bold text-xl text-green-700 text-center mb-4">Greener Houston</div>
            {navLinks.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={l.to}
                  className={`block px-4 py-3 rounded-lg font-heading font-semibold transition-colors ${
                    location.pathname === l.to ? "bg-green-600 text-white" : "hover:bg-green-50 text-gray-700"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-auto flex flex-col gap-3">
              <a href="tel:+18328017545" className="bg-green-600 text-white text-center flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link to="/contact" className="bg-green-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {mobileOpen && (
        <div className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
