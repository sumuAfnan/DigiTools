import React from "react";
import NavLink from "../Navbar/NavLink";
import FooterNavLink from "./FooterNavLink";
import { FaDiscord, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Footer_logo from "../../assets/products/DigiTools_log.png";

const Footer = () => {
  const menuData = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "Services", path: "/services" },
    { id: 4, label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={Footer_logo}
                alt="AI Hub Logo"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>

            <div className="mt-8 flex gap-6 text-2xl text-zinc-500">
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaDiscord />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              {menuData.map((nav) => (
                <FooterNavLink key={nav.id} nav={nav} />
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">
              Resources
            </h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>
            © {new Date().getFullYear()} Digitools. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
