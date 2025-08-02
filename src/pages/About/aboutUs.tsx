import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { aboutUsData } from "@/utils/aboutData";

const AboutUs = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-10">
          {/* Image Section */}
          <div className="w-full max-w-4xl h-64 sm:h-80 md:h-96 rounded-xl shadow-lg overflow-hidden">
            <img
              src="/university.webp"
              alt="Mahaguru Gorakhnath University"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-6 text-orange-500">
              {aboutUsData.heading[language]}
            </h1>
            <div className="text-lg leading-relaxed text-black">
              {aboutUsData.paragraphs.map((p, index) => (
                <p key={index} className="mb-4">
                  {p[language]}
                </p>
              ))}

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-orange-500">
                {aboutUsData.visionHeading[language]}
              </h2>

              <ul className="list-disc list-inside space-y-3 text-black">
                {aboutUsData.visionPoints.map((point, index) => (
                  <li key={index}>{point[language]}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
