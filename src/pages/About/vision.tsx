import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { visionMissionData } from "@/utils/aboutData";

const Vision = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Logo Image (Sticky on large screens) */}
          <div className="w-full lg:w-1/3 max-w-sm mx-auto lg:mx-0">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white p-4 lg:sticky lg:top-28">
              <img
                src={visionMissionData.logoImage}
                alt="University Logo - Mahayogi Guru Gorakhnath"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/3 text-left text-lg leading-relaxed text-black">
            <h1 className="text-4xl font-bold mb-6 text-orange-500">
              {visionMissionData.pageTitle[language]}
            </h1>

            {visionMissionData.sections.map((section, index) => (
              <div key={index} className={index > 0 ? "mt-10" : ""}>
                <h2 className="text-2xl font-semibold text-white mb-3">
                  {section.heading[language]}
                </h2>
                {section.paragraphs.map((para, pIndex) => (
                  <p key={pIndex} className="mb-6 text-black">
                    {para[language]}
                  </p>
                ))}
                {section.quote && (
                  <div>
                    <p className="mb-6 text-black">
                      <span className="block mt-4 italic text-orange-500 text-lg whitespace-pre-line">
                        {section.quote.sanskrit}
                      </span>
                    </p>
                    <p className="text-black">
                      <strong>
                        {language === "hindi" ? "अनुवाद:" : "Translation:"}
                      </strong>{" "}
                      {section.quote.translation[language]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Vision;
