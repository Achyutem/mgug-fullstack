import { UseLanguage } from "@/context/languageContext";
import type { MegaMenuSection } from "@/utils/types";
import { FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface MobileMenuSectionProps {
  section: MegaMenuSection;
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenuSection = ({
  section,
  isOpen,
  onToggle,
}: MobileMenuSectionProps) => {
  const { language } = UseLanguage();
  const isExternal = (url: string) => url.startsWith("http");

  const linkBaseClasses =
    "group flex items-center justify-between transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";

  const MenuLink = ({ href, label }: { href: string; label: string }) => {
    const classes = `${linkBaseClasses} text-gray-600 hover:text-orange-500 active:text-orange-500 active:underline py-1.5 text-sm`;

    if (isExternal(href)) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{label}</span>
          <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      );
    }

    return (
      <Link to={href} className={classes}>
        <span>{label}</span>
      </Link>
    );
  };

  const NestedMenuLink = ({ href, label }: { href: string; label: string }) => {
    const classes = `${linkBaseClasses} text-gray-500 hover:text-orange-500 active:text-orange-500 active:underline py-1 text-xs`;

    if (isExternal(href)) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{label}</span>
          <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      );
    }

    return (
      <Link to={href} className={classes}>
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <div className="border-b border-white/10 last:border-0 py-2">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-2 text-left text-black hover:text-orange-500 transition-colors"
        aria-expanded={isOpen}
        aria-label={`Toggle ${section.label[language]} section`}
      >
        <span className="text-base font-medium">{section.label[language]}</span>
        <FaChevronRight
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      {isOpen && section.subSections && (
        <div className="pb-4 pl-4 space-y-2 animate-in slide-in-from-top-1 duration-200">
          {section.subSections.map((subSection, index) => (
            <div key={index}>
              {subSection.type === "link" ? (
                <MenuLink
                  href={subSection.href}
                  label={subSection.label[language]}
                />
              ) : (
                <div className="mt-3">
                  <h4 className="text-orange-500 font-medium text-sm mb-2">
                    {subSection.label[language]}
                  </h4>
                  {subSection.subSections && (
                    <div className="space-y-1 pl-3 border-l border-slate-300">
                      {subSection.subSections.map(
                        (nestedSection, nestedIndex) =>
                          nestedSection.type === "link" && (
                            <NestedMenuLink
                              key={nestedIndex}
                              href={nestedSection.href}
                              label={nestedSection.label[language]}
                            />
                          )
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
