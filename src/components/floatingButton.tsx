import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SearchDialog from "./searchButton";
import { useState } from "react";

export default function FloatingButtonsCustom() {
  const [searchOpen, setSearchOpen] = useState(false);
  const whatsAppMessage =
    "Hello! I'm interested in learning more about Mahayogi Gorakhnath University.";
  const encodedWhatsAppMessage = encodeURIComponent(whatsAppMessage);

  const buttons = [
    {
      href: "https://www.facebook.com/mgugfacebookpage/",
      icon: FiFacebook,
      title: "Facebook",
    },
    {
      href: "https://x.com/MGUGOfficial",
      icon: FiTwitter,
      title: "Twitter (X)",
    },
    {
      href: "https://www.instagram.com/mgugofficial/",
      icon: FiInstagram,
      title: "Instagram",
    },
    {
      href: "tel:+919415266014",
      icon: FiPhone,
      title: "Call Us",
    },
    {
      href: `https://wa.me/+919415266014?text=${encodedWhatsAppMessage}`,
      icon: FaWhatsapp,
      title: "Chat on WhatsApp",
    },
    {
      href: "https://maps.google.com/?q=Mahayogi+Gorakhnath+University",
      icon: FiMapPin,
      title: "Find Us on Maps",
    },
  ];

  // Split buttons into two arrays for search in middle
  const firstHalfButtons = buttons.slice(0, Math.ceil(buttons.length / 2));
  const secondHalfButtons = buttons.slice(Math.ceil(buttons.length / 2));

  return (
    <>
      <SearchDialog open={searchOpen} setOpen={setSearchOpen} />
      <div className="fixed bottom-4 z-50 w-full flex justify-center md:bottom-6 md:right-4 md:w-auto lg:bottom-6 lg:right-6">
        <div className="flex md:flex-col items-center gap-2 bg-blue-950/30 backdrop-blur-md rounded-full px-2 py-2 lg:px-3 lg:py-3 border border-white/10 shadow-md shadow-black/20">
          {/* Mobile: All buttons in a row with search in middle */}
          <div className="flex md:hidden items-center gap-3">
            {firstHalfButtons.map(({ href, icon: Icon, title }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-orange-500 p-1.5 rounded-full shadow shadow-black/30 hover:bg-blue-950/90 hover:backdrop-blur-sm transition-all duration-200 hover:scale-105"
              >
                <Icon className="w-[22px] h-[22px]" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                  {title}
                </span>
              </a>
            ))}

            {/* Search Button for Mobile - In Middle */}
            <button
              onClick={() => setSearchOpen(true)}
              className="group relative bg-orange-500 text-white p-2 rounded-full shadow shadow-black/30 hover:bg-orange-500 transition-all duration-200 hover:scale-110 scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[22px] h-[22px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.9-5.15A7 7 0 1110 3a7 7 0 018.55 8.55z"
                />
              </svg>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                Search
              </span>
            </button>

            {secondHalfButtons.map(({ href, icon: Icon, title }, i) => (
              <a
                key={i + firstHalfButtons.length}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-orange-500 p-1.5 rounded-full shadow shadow-black/30 hover:bg-blue-950/90 hover:backdrop-blur-sm transition-all duration-200 hover:scale-105"
              >
                <Icon className="w-[22px] h-[22px]" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                  {title}
                </span>
              </a>
            ))}
          </div>

          {/* Desktop/Tablet: Vertical layout with search in middle */}
          <div className="hidden md:flex md:flex-col items-center gap-3">
            {/* First half of buttons */}
            {firstHalfButtons.map(({ href, icon: Icon, title }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-orange-500 p-3 lg:p-3.5 rounded-full shadow shadow-black/30 hover:bg-blue-950/90 hover:backdrop-blur-sm transition-all duration-200 hover:scale-105"
              >
                <Icon className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]" />
                <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-sm lg:text-base rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                  {title}
                </span>
              </a>
            ))}

            {/* Search Button in Middle */}
            <button
              onClick={() => setSearchOpen(true)}
              className="group relative bg-orange-500 text-white p-3.5 lg:p-4 rounded-full shadow shadow-black/30 hover:bg-orange-500 transition-all duration-200 hover:scale-110 scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.9-5.15A7 7 0 1110 3a7 7 0 018.55 8.55z"
                />
              </svg>
              <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-sm lg:text-base rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                Search
              </span>
            </button>

            {/* Second half of buttons */}
            {secondHalfButtons.map(({ href, icon: Icon, title }, i) => (
              <a
                key={i + firstHalfButtons.length}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-orange-500 p-3 lg:p-3.5 rounded-full shadow shadow-black/30 hover:bg-blue-950/90 hover:backdrop-blur-sm transition-all duration-200 hover:scale-105"
              >
                <Icon className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]" />
                <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-sm lg:text-base rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                  {title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
