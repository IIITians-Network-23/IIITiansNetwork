import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
import { FaRegQuestionCircle } from 'react-icons/fa';

/**
 * Footer component for the website.
 */
const Footer = () => {
  return (
    <footer className="bg-[#2E362B] text-[#D5D0B2] py-8">
      <div className="w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center h-full">

        {/* Column 1: Logo */}
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <Image src={Logo} alt="Logo" height={100} width={250} />
          </Link>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col gap-2 md:mx-4">
          <Link href="/" className="transform transition-transform hover:scale-110">
            Home
          </Link>
          <Link href="/alumni" className="transform transition-transform hover:scale-110">
            Alumni
          </Link>
          <Link href="/blogs" className="transform transition-transform hover:scale-110">
            Blogs
          </Link>
        </div>

        {/* Column 3: Additional Links */}
        <div className="flex flex-col gap-2 md:mx-4">
          <Link href="/iiits" className="transform transition-transform hover:scale-110">
            IIITs
          </Link>
          <Link href="/events" className="transform transition-transform hover:scale-110">
            Events
          </Link>
          <Link href="/about-us" className="transform transition-transform hover:scale-110">
            About Us
          </Link>
        </div>

        {/* Column 4: Connect with Us */}
        <div className="flex flex-col gap-2 md:mx-4 ml-auto">
          <div className="flex gap-2 text-2xl">
            <h1>Get Latest News</h1>
          </div>
          {/* Subscription Form */}
          <form className="flex gap-2 items-center flex-grow">
            <input
              type="email"
              placeholder="Your email here"
              className="border border-white rounded-md p-2 bg-transparent text-white placeholder-white flex-grow-1"
            />
            <button type="submit" className="bg-white text-black rounded-md p-2 shadow-md">
              Subscribe
            </button>
          </form>
          <div className="flex gap-2">
            <h2>Connect with us</h2>
          </div>
          <div className="flex gap-2">
            {/* Social Media Icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={40} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={40} />
            </a>
            <a href="https://threads.net" target="_blank" rel="noopener noreferrer">
              <FaRegQuestionCircle size={40} />
            </a>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="mx-auto border-t border-white my-4"></div>

      {/* Footer Navigation Links */}
      <div className="w-5/6 mx-auto flex items-center justify-center gap-4">
        <Link href="/website-terms" className="hover:underline transform transition-transform">
          Website Terms
        </Link>
        <Link href="/privacy-policy" className="hover:underline transform transition-transform">
          Privacy Policy
        </Link>
        <Link href="/network-policies" className="hover:underline transform transition-transform">
          Network Policies
        </Link>
        <Link href="/rights-and-terms" className="hover:underline transform transition-transform">
          Rights and Terms
        </Link>
      </div>

      {/* Footer Attribution */}
      <div className="w-full mx-auto text-center mt-4">
        Made by Tech Team IIITians Network @2023
      </div>
    </footer>
  );
};

export default Footer;
