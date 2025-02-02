import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "ABOUT", href: "#about", position: "left" },
  { name: "SERVICES", href: "#services", position: "left" },
  { name: "PROJECTS", href: "#projects", position: "left" },
  { name: "TESTIMONIALS", href: "#testimonials", position: "right" },
  { name: "FAQ", href: "#testimonials", position: "right" },
  { name: "CONTACT", href: "#contact", position: "right" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const leftLinks = navLinks.filter((link) => link.position === "left");
  const rightLinks = navLinks.filter((link) => link.position === "right");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-md font-railway">
      <div className="container mx-auto px-4  lg:w-11/12">
        <div className="flex items-center justify-between h-20">
          <div className="hidden md:flex items-center space-x-8">
            {leftLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-black hover:text-black/70 transition-colors duration-200 text-sm tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 bg-red-400 w-48">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-full" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {rightLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-black hover:text-black/70 transition-colors duration-200 text-sm tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-black transition-colors duration-200 text-sm tracking-wider px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
