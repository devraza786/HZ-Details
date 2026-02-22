import { ReactNode } from "react";
import { Phone } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    {/* Floating mobile call button */}
    <a
      href="tel:+18329843507"
      className="fixed bottom-6 right-6 z-50 lg:hidden btn-accent rounded-full p-4 shadow-xl"
      aria-label="Call HZ Details"
    >
      <Phone className="w-6 h-6" />
    </a>
  </div>
);

export default Layout;
