import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import AnimatedCard from "@/components/animatedCard";
import ModernCard from "@/components/modernCards";
import { UseLanguage } from "@/context/languageContext";
import { HomePage } from "@/utils/mainPageData";

export default function Contact() {
  const { language } = UseLanguage();
  const t = HomePage.contact[language];

  return (
    <div>
      <section id="contact" className="relative z-20 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-orange-400 bg-clip-text text-transparent">
                {t.heading}
              </span>
            </h2>
            <p className="text-xl text-gray-400">{t.description}</p>
          </AnimatedCard>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <a
                href="https://www.google.com/maps?q=Arogyadham,+Balapar+Road,+Sonbarsa,+Gorakhpur-273007,+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ModernCard className="text-center cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-orange-600/20 text-orange-400">
                      <FaMapMarkerAlt className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t.addressLabel}
                  </h3>
                  <p className="text-gray-400 text-sm">{t.address}</p>
                </ModernCard>
              </a>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <a href="tel:+919415266014">
                <ModernCard className="text-center cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-orange-600/20 text-orange-400">
                      <FaPhoneAlt className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t.phoneLabel}
                  </h3>
                  <p className="text-gray-400 text-sm whitespace-pre-line">
                    {t.phone}
                  </p>
                </ModernCard>
              </a>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <a href="mailto:info@mgug.ac.in">
                <ModernCard className="text-center cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-orange-600/20 text-orange-400">
                      <IoMailOpenOutline className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t.emailLabel}
                  </h3>
                  <p className="text-gray-400 text-sm">{t.email}</p>
                </ModernCard>
              </a>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
}
