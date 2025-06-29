import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { MegaMenu } from "@/components/megaMenu";
import { MobileMenuSection } from "@/components/mobileMenuSection";
import openSiennaMenu from "@/utils/sienna";
import { FaUniversalAccess, FaChevronDown } from "react-icons/fa";
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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-blue-950 border-b border-gray-700/50"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a
              href="/"
              className="flex items-center space-x-3"
              aria-label="MGUG Home"
            >
              <img
                loading="lazy"
                src="/logo.png"
                alt="Mahayogi Gorakhnath University Gorakhpur Logo"
                className="w-10 h-10 rounded-xl"
              />
              <div className="text-2xl bg-orange-400 bg-clip-text text-transparent font-bold uppercase">
                MGUG
              </div>
            </a>
          </div>

          {/* Links - Desktop */}
          <div
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
          >
            {menuItems.map((item, index) => {
              const hasMegaMenu = item.english in megaMenus;
              const isMegaMenuOpen = activeMegaMenu === item.english;

              if (!hasMegaMenu) {
                return (
                  <a
                    key={index}
                    href={
                      item.english === "Home"
                        ? "/"
                        : item.english === "Research"
                        ? "https://mgug.ac.in/research/re_facility.php"
                        : item.english === "Contact"
                        ? "/contact"
                        : `#${item.english.toLowerCase()}`
                    }
                    className="font-medium text-white hover:text-orange-400 transition-all duration-200 hover:scale-105"
                    aria-label={`Navigate to ${item[language]} page`}
                  >
                    {item[language]}
                  </a>
                );
              }

              return (
                <div key={index} className="relative">
                  <button
                    onClick={() => handleMegaMenuToggle(item.english)}
                    className="flex items-center space-x-1 transition-colors font-medium text-white hover:text-orange-400"
                    aria-expanded={isMegaMenuOpen}
                    aria-controls={`mega-menu-${item.english.toLowerCase()}`}
                    aria-label={`Toggle ${item[language]} mega menu`}
                  >
                    <span>{item[language]}</span>
                    <FaChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isMegaMenuOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <MegaMenu
                    items={megaMenus[item.english as keyof MegaMenus]}
                    isOpen={isMegaMenuOpen}
                    onClose={closeMegaMenu}
                  />
                </div>
              );
            })}
          </div>

          {/* Right: Actions - Language Toggle, Accessibility, Login, Menu */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <LanguageToggle />
            <button
              onClick={openSiennaMenu}
              className="p-1 md:p-[6px] lg:p-[8px] xl:p-[10px] transition-all duration-200 hover:scale-105 hover:text-orange-500"
              aria-label="Open accessibility menu"
            >
              <FaUniversalAccess size={24} />
            </button>
            {/* Login (Mobile) */}
            <a href="https://erp.mgug.ac.in/login.php">
              <button
                className="px-2 py-1 text-sm bg-orange-500 hover:bg-orange-700 text-white font-medium rounded-md transition-colors lg:hidden transform duration-200 hover:scale-105]"
                aria-label="Login to MGUG ERP"
              >
                {language === "hindi" ? "लॉगिन" : "Login"}
              </button>
            </a>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden text-white hover:text-orange-400 transition-colors"
                  aria-label="Toggle mobile menu"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <IoMdMenu className="w-6 h-6" aria-hidden="true" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-64 sm:w-80 bg-blue-950 text-white p-6 border-0"
                id="mobile-menu"
                aria-label="Mobile navigation menu"
              >
                <div className="flex flex-col h-full justify-between pb-safe">
                  <nav
                    className="mt-6 space-y-4 text-base font-medium max-h-[calc(100vh-12rem)] overflow-y-auto"
                    aria-label="Mobile menu links"
                  >
                    {menuItems.map((item, index) => {
                      const hasMegaMenu = item.english in megaMenus;

                      if (!hasMegaMenu) {
                        return (
                          <a
                            key={index}
                            href={
                              item.english === "Home"
                                ? "/"
                                : item.english === "Research"
                                ? "https://mgug.ac.in/research/re_facility.php"
                                : item.english === "Contact"
                                ? "/contact"
                                : `#${item.english.toLowerCase()}`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-white hover:text-orange-400 transition-colors tracking-wide py-2"
                            aria-label={`Navigate to ${item[language]} page`}
                          >
                            {item[language]}
                          </a>
                        );
                      }

                      return (
                        <div
                          key={index}
                          className="border-t border-white/20 pt-4 first:border-0 first:pt-0"
                          role="group"
                          aria-label={`${item[language]} menu section`}
                        >
                          <h3 className="text-orange-400 font-semibold text-lg mb-3">
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
                  <div className="mt-16 border-t border-white/20 pt-6 text-sm text-gray-400 space-y-2">
                    <p className="font-medium text-white/80">
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
                            className="hover:text-orange-400 transition-colors"
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
            <a href="https://erp.mgug.ac.in/login.php">
              <button
                className="hidden lg:inline px-6 py-2 bg-orange-500 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors transform duration-300 hover:scale-105"
                aria-label="Login to MGUG ERP"
              >
                {language === "hindi" ? "लॉगिन" : "Login"}
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay to close mega menu when clicking outside */}
      {activeMegaMenu && (
        <div
          className="fixed inset-0 z-30 bg-black/10"
          onClick={closeMegaMenu}
          aria-hidden="true"
          tabIndex={-1}
        />
      )}
    </nav>
  );
}
