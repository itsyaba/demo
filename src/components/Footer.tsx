import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    "Home",
    "About",
    "Services",
    "Contact",
    "Services",
    "Projects",
    "FAQ",
    "Testimonials",
  ];

  return (
    <footer className="bg-blueC text-white pt-16 pb-8 font-poppins">
      <div className="container mx-auto px-4 w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col">
            <div className=" space-y-4 text-center md:text-left">
              <Link to="/">
                <img src={Logo} alt="The Mojo Effect Logo" className="h-16 w-auto" />
              </Link>
              <p className="text-sm tracking-wider font-light">
                We work diligently to ensure home and businesses are well organized in order to
                create a stress free environment.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6">
                <span className="line"> </span>
                Work Days
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Mon - sat</span>
                  <span className="text-sm ">09am - 05pm</span>
                </div>
                <hr className="my-4 bg-gray-600" />
                <div className="flex justify-between">
                  <span className="text-sm">Sunday</span>
                  <span className="text-sm text-yellowC">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
              <span className="line"></span>
              Useful Links
            </h3>
            <ul className=" grid grid-cols-2 place-content-center gap-4">
              {footerLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={`#${link.toLowerCase()}`}
                    className="text-sm hover:text-yellowC transition-colors flex items-center gap-2 "
                  >
                    <span className="text-yellowC">››</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
              <span className="line"></span>
              Get Free Estimate
            </h3>
            <div className="space-y-4">
              <p className="text-2xl font-bold text-yellowC">667-770-7076</p>
              <p className="text-sm">Our online scheduling and payment system is safe.</p>
              <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 transition-all">
                REQUEST WITH AN ONLINE FORM
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
              <span className="line"></span>
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellowC flex-shrink-0" />
                <p className="text-sm">Address : Street</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellowC" />
                <p className="text-sm">Phone : 667-770-7076</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellowC" />
                <p className="text-sm">Email: services@themojoeffect.com</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Social links</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-yellowC transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-yellowC transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-yellowC transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-blue-800 text-center text-sm">
          <p>Designed by conquer agency © The Mojo Effect. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
