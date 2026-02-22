import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
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
      <div className="gradient-navy text-primary-foreground py-2 px-4 text-sm">
        <div className="container-main flex items-center justify-between">
          <a href="tel:+18329843507" className="flex items-center gap-2 font-body font-medium hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            (832) 984-3507
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-silver-light">Houston, TX &amp; Surrounding Areas</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-panel shadow-lg" : "bg-card/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-main flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="HZ Details Houston Texas" className="h-14 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 rounded-xl font-heading text-sm font-semibold transition-all duration-200 ${
                  location.pathname === l.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+18329843507" className="btn-primary text-sm flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link to="/contact" className="btn-accent text-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden clay-button bg-secondary p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="fixed inset-y-0 right-0 z-[60] w-80 max-w-[85vw] gradient-navy text-primary-foreground p-6 flex flex-col gap-4 shadow-2xl"
          >
            <button onClick={() => setMobileOpen(false)} className="self-end p-2" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
            <img src={logo} alt="HZ Details" className="h-16 w-auto mx-auto mb-4" />
            {navLinks.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={l.to}
                  className={`block px-4 py-3 rounded-xl font-heading font-semibold transition-colors ${
                    location.pathname === l.to ? "bg-accent" : "hover:bg-navy-light"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-auto flex flex-col gap-3">
              <a href="tel:+18329843507" className="btn-accent text-center flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link to="/contact" className="btn-primary text-center border border-primary-foreground/20">
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {mobileOpen && (
        <div className="fixed inset-0 z-[55] bg-foreground/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
