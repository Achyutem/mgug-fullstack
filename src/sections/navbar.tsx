import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { IoMdMenu } from "react-icons/io";
import { MobileMenuSection } from "@/components/mobileMenuSection";
import openSiennaMenu from "@/utils/sienna";
import {
  FaUniversalAccess,
  FaChevronDown,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/languageSwitcher";
import { UseLanguage } from "@/context/languageContext";
import { menuItems, megaMenus, privacy } from "@/utils/menuData";
import type { MegaMenus } from "@/utils/types";

export default function Navbar() {
  const { language } = UseLanguage();
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSections, setMobileExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const handleMegaMenuToggle = (menu: string) => {
    setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  const toggleMobileSection = (sectionLabel: string) => {
    setMobileExpandedSections((prev) => ({
      ...prev,
      [sectionLabel]: !prev[sectionLabel],
    }));
  };

  const isExternal = (url: string) => url.startsWith("http");

  const MenuLink = ({ href, label }: { href: string; label: string }) => {
    const commonClasses =
      "group flex items-center justify-between text-gray-700 hover:text-orange-500 transition-colors py-1.5 px-2 rounded-md hover:bg-orange-100 text-sm";
    const content = (
      <>
        <span>{label}</span>
        <FaExternalLinkAlt className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 group-hover:text-orange-500" />
      </>
    );
    return isExternal(href) ? (
      <a
        href={href}
        onClick={closeMegaMenu}
        className={commonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    ) : (
      <Link to={href} onClick={closeMegaMenu} className={commonClasses}>
        {content}
      </Link>
    );
  };

  const NestedMenuLink = ({ href, label }: { href: string; label: string }) => {
    const commonClasses =
      "group flex items-center justify-between text-gray-600 hover:text-orange-500 transition-colors py-1 px-2 rounded-md hover:bg-orange-100 text-sm";
    const content = (
      <>
        <span>{label}</span>
        <FaExternalLinkAlt className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 group-hover:text-orange-500" />
      </>
    );
    return isExternal(href) ? (
      <a
        href={href}
        onClick={closeMegaMenu}
        className={commonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    ) : (
      <Link to={href} onClick={closeMegaMenu} className={commonClasses}>
        {content}
      </Link>
    );
  };
  // --- End of Helper Components ---

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-lg border-b border-gray-200/80"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="flex items-center space-x-3"
              aria-label="MGUG Home"
            >
              <img
                loading="lazy"
                src="/logo.png"
                alt="Mahayogi Gorakhnath University Gorakhpur Logo"
                className="w-10 h-10 rounded-xl"
              />
              <div className="text-2xl bg-orange-500 bg-clip-text text-transparent font-bold uppercase">
                MGUG
              </div>
            </Link>
          </div>

          {/* Links - Desktop */}
          <div
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
          >
            {menuItems.map((item) => {
              const hasMegaMenu = item.english in megaMenus;
              const isMegaMenuOpen = activeMegaMenu === item.english;

              if (!hasMegaMenu) {
                const href =
                  item.english === "Research"
                    ? "/research"
                    : item.english === "Contact"
                    ? "/contact"
                    : `/${item.english.toLowerCase()}`;
                const commonLinkClasses =
                  "font-medium text-slate-700 hover:text-orange-500 transition-all duration-200 hover:scale-105";

                const linkContent = isExternal(href) ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={commonLinkClasses}
                  >
                    {item[language]}
                  </a>
                ) : (
                  <Link to={href} className={commonLinkClasses}>
                    {item[language]}
                  </Link>
                );

                return <div key={item.english}>{linkContent}</div>;
              }

              return (
                <Popover
                  key={item.english}
                  open={isMegaMenuOpen}
                  onOpenChange={(open) => {
                    if (open) {
                      handleMegaMenuToggle(item.english);
                    } else {
                      closeMegaMenu();
                    }
                  }}
                >
                  <PopoverTrigger asChild>
                    <button
                      onClick={() => handleMegaMenuToggle(item.english)}
                      className="flex items-center space-x-1 transition-colors font-medium text-slate-700 hover:text-orange-500"
                      aria-expanded={isMegaMenuOpen}
                    >
                      <span>{item[language]}</span>
                      <FaChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isMegaMenuOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="center"
                    sideOffset={16}
                    className="w-auto p-0 border border-gray-200/80 bg-white/80 backdrop-blur-xl shadow-2xl shadow-black/10 z-50"
                    onMouseLeave={closeMegaMenu}
                  >
                    <div className="px-4 sm:px-6 lg:px-8 py-8 max-h-[80vh] overflow-y-auto scrollbar-none">
                      <div className="flex flex-nowrap gap-6">
                        {megaMenus[item.english as keyof MegaMenus]?.map(
                          (section, index) => (
                            <div
                              key={index}
                              className="w-64 space-y-4 flex-shrink-0"
                            >
                              <h3 className="text-orange-500 font-semibold text-lg border-b border-orange-400/50 pb-2">
                                {section.label[language]}
                              </h3>
                              {section.subSections && (
                                <div className="space-y-2">
                                  {section.subSections.map(
                                    (subSection, subIndex) => (
                                      <div key={subIndex}>
                                        {subSection.type === "link" ? (
                                          <MenuLink
                                            href={subSection.href}
                                            label={subSection.label[language]}
                                          />
                                        ) : (
                                          <div className="mt-4">
                                            <h4 className="text-orange-500 font-medium text-sm mb-2 pl-2">
                                              {subSection.label[language]}
                                            </h4>
                                            {subSection.subSections && (
                                              <div className="space-y-1 pl-4 border-l border-gray-300">
                                                {subSection.subSections.map(
                                                  (
                                                    nestedSection,
                                                    nestedIndex
                                                  ) =>
                                                    nestedSection.type ===
                                                      "link" && (
                                                      <NestedMenuLink
                                                        key={nestedIndex}
                                                        href={
                                                          nestedSection.href
                                                        }
                                                        label={
                                                          nestedSection.label[
                                                            language
                                                          ]
                                                        }
                                                      />
                                                    )
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              );
            })}
          </div>

          {/* Right: Actions - Language Toggle, Accessibility, Login, Menu */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <LanguageToggle />
            <button
              onClick={openSiennaMenu}
              className="p-1 md:p-[6px] lg:p-[8px] xl:p-[10px] text-gray-700 transition-all duration-200 hover:scale-105 hover:text-orange-500"
              aria-label="Open accessibility menu"
            >
              <FaUniversalAccess size={24} />
            </button>
            {/* Login (Mobile) */}
            <a href="https://erp.mgug.ac.in/login.php">
              <button
                className="px-2 py-1 text-sm bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors lg:hidden transform duration-200 hover:scale-105"
                aria-label="Login to MGUG ERP"
              >
                {language === "hindi" ? "लॉगिन" : "Login"}
              </button>
            </a>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors"
                  aria-label="Toggle mobile menu"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <IoMdMenu className="w-6 h-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-64 sm:w-80 bg-white text-slate-800 p-6 border-l border-gray-200"
                id="mobile-menu"
                aria-label="Mobile navigation menu"
              >
                <div className="flex flex-col h-full justify-between pb-safe">
                  <nav
                    className="mt-6 space-y-4 text-base font-medium max-h-[calc(100vh-12rem)] overflow-y-auto"
                    aria-label="Mobile menu links"
                  >
                    {menuItems.map((item) => {
                      const hasMegaMenu = item.english in megaMenus;

                      if (!hasMegaMenu) {
                        const href =
                          item.english === "Research"
                            ? "https://mgug.ac.in/research/re_facility.php"
                            : item.english === "Contact"
                            ? "/contact"
                            : `/${item.english.toLowerCase()}`;

                        return (
                          <Link
                            key={item.english}
                            to={href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-slate-700 hover:text-orange-500 transition-colors tracking-wide py-2"
                            aria-label={`Maps to ${item[language]} page`}
                          >
                            {item[language]}
                          </Link>
                        );
                      }

                      return (
                        <div
                          key={item.english}
                          className="border-t border-gray-200 pt-4 first:border-0 first:pt-0"
                          role="group"
                          aria-label={`${item[language]} menu section`}
                        >
                          <h3 className="text-orange-500 font-semibold text-lg mb-3">
                            {item[language]}
                          </h3>
                          <div className="space-y-1">
                            {megaMenus[item.english as keyof MegaMenus].map(
                              (section, sectionIndex) => (
                                <MobileMenuSection
                                  key={sectionIndex}
                                  section={section}
                                  isOpen={
                                    mobileExpandedSections[
                                      `${item[language]}-${section.label[language]}`
                                    ] || false
                                  }
                                  onToggle={() =>
                                    toggleMobileSection(
                                      `${item[language]}-${section.label[language]}`
                                    )
                                  }
                                />
                              )
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </nav>

                  {/* Footer */}
                  <div className="mt-16 border-t border-gray-200 pt-6 text-sm text-gray-600 space-y-2">
                    <p className="font-medium text-slate-800">
                      {language === "hindi"
                        ? "MGUG को गहराई से जानें"
                        : "Explore MGUG deeply"}
                    </p>
                    <div className="flex space-x-4">
                      {privacy
                        .filter((item) =>
                          ["Terms & Conditions", "Policy"].includes(
                            item.label.english
                          )
                        )
                        .map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className="hover:text-orange-500 transition-colors"
                            aria-label={`View ${item.label[language]}`}
                          >
                            {item.label[language]}
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Login (Desktop) */}
            <a
              href="https://erp.mgug.ac.in/login.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="hidden lg:inline px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors transform duration-300 hover:scale-105"
                aria-label="Login to MGUG ERP"
              >
                {language === "hindi" ? "लॉगिन" : "Login"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
