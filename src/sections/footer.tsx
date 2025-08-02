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

export default function Footer() {
  const { language } = UseLanguage();

  return (
    <div>
      {/* CHANGED: Footer background, border, and text colors */}
      <footer className="relative z-20 py-16 px-4 border-t border-gray-200 bg-stone-100/80 backdrop-blur-sm text-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row lg:gap-16 gap-12">
            {/* Left Section */}
            <div className="flex-1 min-w-[300px] max-w-[400px]">
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
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-orange-500 mb-2">
                  {footerTranslations[language].followUs}
                </h3>
                {/* CHANGED: Added text-gray-700 for default icon color */}
                <div className="flex items-center gap-4 text-2xl text-gray-700">
                  <a
                    href="..."
                    aria-label="..."
                    className="hover:text-orange-500 transition-transform transform hover:scale-110"
                  >
                    <FiTwitter />
                  </a>
                  <a
                    href="..."
                    aria-label="..."
                    className="hover:text-orange-500 transition-transform transform hover:scale-110"
                  >
                    <FiFacebook />
                  </a>
                  <a
                    href="..."
                    aria-label="..."
                    className="hover:text-orange-500 transition-transform transform hover:scale-110"
                  >
                    <FiInstagram />
                  </a>
                  <a
                    href="..."
                    aria-label="..."
                    className="hover:text-orange-500 transition-transform transform hover:scale-110"
                  >
                    <FiYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col md:flex-row lg:gap-16 gap-12 flex-1">
              {/* Contact */}
              <div className="min-w-[250px] max-w-[300px]">
                <h3 className="text-lg font-semibold text-orange-500 mb-2">
                  {footerTranslations[language].contact}
                </h3>
                {/* CHANGED: Text and hover colors */}
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <FiPhone className="w-4 h-4" />
                    <a
                      href="tel:..."
                      className="hover:text-orange-500 hover:underline"
                    >
                      +91-9415266014
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiPhone className="w-4 h-4" />
                    <a
                      href="tel:..."
                      className="hover:text-orange-500 hover:underline"
                    >
                      +91-9935904499
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaWhatsapp className="w-4 h-4" />
                    <a
                      href="https://wa.me/..."
                      className="hover:text-orange-500 hover:underline"
                    >
                      +91-9794299451
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiGlobe className="w-4 h-4" />
                    <a
                      href="mailto:..."
                      className="hover:text-orange-500 hover:underline"
                    >
                      info@mgug.ac.in
                    </a>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  {footerTranslations[language].address}
                </p>
              </div>

              {/* Important Links */}
              <div className="min-w-[200px] max-w-[300px]">
                <h3 className="text-lg font-semibold text-orange-500 mb-2">
                  {footerTranslations[language].importantLinks}
                </h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {impLinks.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="hover:text-orange-500 hover:underline"
                      >
                        {item.label[language]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policy & Reports */}
              <div className="min-w-[100px] max-w-[250px]">
                <h3 className="text-lg font-semibold text-orange-500 mb-2">
                  {footerTranslations[language].policyAndReports}
                </h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {privacy.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="hover:text-orange-500 hover:underline"
                      >
                        {item.label[language]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">
              {footerTranslations[language].copyright}
            </p>
            <p className="text-orange-500 text-sm">स्वस्ति पन्थामनुचरेम</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
