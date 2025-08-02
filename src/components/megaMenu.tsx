import {
  Popover,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UseLanguage } from "@/context/languageContext";
import type { MegaMenuProps } from "@/utils/types";

export const MegaMenu = ({ items, isOpen, onClose }: MegaMenuProps) => {
  const { language } = UseLanguage();
  const isExternal = (url: string) => url.startsWith("http");

  const MenuLink = ({ href, label }: { href: string; label: string }) => {
    const commonClasses =
      "group flex items-center justify-between text-black hover:text-orange-500 transition-colors py-1.5 px-2 rounded-md hover:bg-white/5 text-sm";

    const content = (
      <>
        <span>{label}</span>
        <FaExternalLinkAlt className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 group-hover:text-orange-500" />
      </>
    );

    return isExternal(href) ? (
      <a
        href={href}
        onClick={onClose}
        className={commonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    ) : (
      <Link to={href} onClick={onClose} className={commonClasses}>
        {content}
      </Link>
    );
  };

  const NestedMenuLink = ({ href, label }: { href: string; label: string }) => {
    const commonClasses =
      "group flex items-center justify-between text-gray-400 hover:text-orange-500 transition-colors py-1 px-2 rounded-md hover:bg-white/5 text-sm";

    const content = (
      <>
        <span>{label}</span>
        <FaExternalLinkAlt className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 group-hover:text-orange-500" />
      </>
    );

    return isExternal(href) ? (
      <a
        href={href}
        onClick={onClose}
        className={commonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    ) : (
      <Link to={href} onClick={onClose} className={commonClasses}>
        {content}
      </Link>
    );
  };

  return (
    <Popover open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <PopoverAnchor asChild>
        <div id="megamenu-anchor" />
      </PopoverAnchor>

      <PopoverContent
        align="center"
        sideOffset={8}
        className="w-full max-w-7xl p-0 border-none bg-blue-950 backdrop-blur-xl shadow-2xl z-50"
      >
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-h-[80vh] overflow-y-auto scrollbar-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-orange-500 font-semibold text-lg border-b border-orange-500/30 pb-2">
                  {section.label[language]}
                </h3>
                {section.subSections && (
                  <div className="space-y-2">
                    {section.subSections.map((subSection, subIndex) => (
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
                              <div className="space-y-1 pl-4 border-l border-gray-700">
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
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
