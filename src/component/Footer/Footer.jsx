import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer_logo from "../../assets/products/DigiTools_log.png";

const Footer = () => {
  return (
    // Background pura dark (zinc-950) ar upor-niche padding
    <footer className="bg-[#020617] text-white pt-20 pb-10 border-t border-white/5">
      
      {/* Container diye content-ke majkhane ana hoyeche */}
      <div className="container mx-auto px-4 md:px-10">
        
        {/* Main Grid: Mobile-e 1 column, boro screen-e 5 column layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          
          {/* Logo Section: Ekhane logo ar description thakbe */}
          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          {/* Resources & Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
            <div className="flex gap-4">
              {/* Social icons-gulo round white background-e thakbe pic-er moto */}
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-zinc-200 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-zinc-200 transition">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-zinc-200 transition">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright ar legal links */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Digitools. All rights reserved.</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
