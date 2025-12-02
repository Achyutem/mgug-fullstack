import { UseLanguage } from "@/context/languageContext";
import { footerTranslations } from "@/utils/mainPageData";
import { impLinks, privacy } from "@/utils/menuData";
import { FaWhatsapp } from "react-icons/fa6";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiPhone,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const socialLinks = [
  { href: "https://x.com/MGUGOfficial", label: "Twitter", icon: FiTwitter },
  { href: "https://www.facebook.com/mgugfacebookpage/", label: "Facebook", icon: FiFacebook },
  { href: "https://www.instagram.com/mgugofficial/", label: "Instagram", icon: FiInstagram },
  { href: "https://www.youtube.com/channel/UC_RiXHng3aH9Qr20ob-lkDQ", label: "YouTube", icon: FiYoutube },
];

export default function Footer() {
  const { language } = UseLanguage();

  return (
    <footer
      className="relative z-20 border-t border-gray-200 bg-orange-100 text-gray-700
                py-12 px-6 md:py-16 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Section 1: University Info (Spans 2 columns on small screens) */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="MGUG Logo"
                className="w-12 h-12 rounded-xl"
              />
              <div>
                <div className="text-lg font-bold text-orange-500">
                  {footerTranslations[language].universityName}
                </div>
                <div className="text-sm text-slate-800">
                  {footerTranslations[language].tagline}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-orange-500 mb-2">
                {footerTranslations[language].followUs}
              </h3>
              <div className="flex items-center gap-4 text-2xl text-gray-700">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={`Follow us on ${social.label}`}
                    className="hover:text-orange-500 transition-transform transform hover:scale-110"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Contact */}
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-4">
              {footerTranslations[language].contact}
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <FiPhone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  <a href="tel:+91-9415266014" className="hover:text-orange-500 hover:underline">+91-9415266014</a>, <a href="tel:+91-9935904499" className="hover:text-orange-500 hover:underline">+91-9935904499</a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4 flex-shrink-0" />
                <a href="https://wa.me/+91-9794299451" className="hover:text-orange-500 hover:underline">+91-9794299451</a>
              </li>
              <li className="flex items-center gap-2">
                <FiGlobe className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@mgug.ac.in" className="hover:text-orange-500 hover:underline">info@mgug.ac.in</a>
              </li>
            </ul>
            <p className="text-sm text-gray-700 mt-4">
              {footerTranslations[language].address}
            </p>
          </div>

          {/* Section 3: Important Links */}
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-4">
              {footerTranslations[language].importantLinks}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {impLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-orange-500 underline">
                    {item.label[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Policy & Reports */}
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-4">
              {footerTranslations[language].policyAndReports}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {privacy.map((item, index) => {
                const isExternal = item.href.startsWith("http");

                return (
                  <li key={index}>
                    {isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 underline"
                      >
                        {item.label[language]}
                      </a>
                    ) : (
                      <Link to={item.href} className="hover:text-orange-500 underline">
                        {item.label[language]}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-left md:text-center"> {/* <-- CHANGED: Left-aligned on mobile */}
          <p className="text-gray-700 mb-2">
            {footerTranslations[language].copyright}
          </p>
          <p className="text-orange-500 text-sm">स्वस्ति पन्थामनुचरेम</p>
        </div>
      </div>
    </footer>
  );
}

