import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-12 px-6 md:px-12 lg:px-24 font-mono text-sm">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#02AB60]/20 pt-10">

        {/* Logo + Description */}
        <div>
          <h4 className="text-2xl font-bold tracking-wider text-[#02AB60] mb-2">CSA Portal</h4>
          <p className="text-white/70 leading-relaxed">
            The Kapitbahayan Partnership and Development Unit is the sole unit coordinating the
over 30 kapitbahayan partner barangays. This website is wished to be the landing page for all
the community partners inquiring about programs in CSA.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <span className="text-[#02AB60] uppercase tracking-wider text-xs mb-2">Quick Links</span>
          <a href="#" className="hover:underline hover:text-[#02AB60] transition">Home</a>
          <a href="#" className="hover:underline hover:text-[#02AB60] transition">Announcements</a>
          <a href="#" className="hover:underline hover:text-[#02AB60] transition">Venues</a>
          <a href="#" className="hover:underline hover:text-[#02AB60] transition">Activities</a>
          <a href="#" className="hover:underline hover:text-[#02AB60] transition">Sign In</a>
        </div>

        {/* Facebook */}
        <div className="flex flex-col gap-4">
          <span className="text-[#02AB60] uppercase tracking-wider text-xs mb-2">Connect</span>
          <a href="#" className="text-lg hover:text-[#02AB60] transition inline-block">
            <FaFacebookF />
          </a>
          <p className="text-white/60 mt-2">Email: info@csaportal.org</p>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="mt-12 pt-6 border-t border-[#02AB60]/10 text-center text-white/40 tracking-wide text-xs">
        © {new Date().getFullYear()} CSA Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
