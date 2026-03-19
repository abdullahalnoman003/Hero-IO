import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router";
const Footer = () => {
  return (
    <><footer className="footer max-w-7xl mx-auto flex place-items-center justify-between text-white pt-10 px-6">
      <nav>
        <div className="place-items-center text-xl font-bold flex">
          <img src="/assets/logo.png" className="w-10" alt="logo" /> HERO.IO
        </div>
      </nav>
      <nav>
        <h6 className="text-xl">Social Links</h6>
        <div className="grid grid-flow-col gap-4">
          <Link to={"https://www.x.com/"} target="_blank" > <FaSquareXTwitter className="text-2xl rounded-full" /> </Link>
          <Link to={"https://www.linkedin.com/"} target="_blank"> <IoLogoLinkedin className="text-2xl rounded-full"/> </Link>
          <Link to={"https://www.facebook.com/"} target="_blank"> <FaFacebook className="text-2xl rounded-full"/> </Link>
        </div>
      </nav>
      
    </footer>
    <p className="text-center text-white font-bold text-md py-6">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p></>
    
  );
};

export default Footer;
