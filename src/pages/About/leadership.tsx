import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { leadershipData } from "@/utils/aboutData";

const Leadership = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto text-black">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center text-orange-500 mb-16">
          {leadershipData.pageTitle[language]}
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-10 mb-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={leadershipData.image}
              alt={leadershipData.leaderName[language]}
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4 text-orange-500">
              {leadershipData.leaderName[language]}
            </h2>
            {/* First two paragraphs go here */}
            {leadershipData.paragraphs.slice(0, 2).map((para, pIndex) => (
              <p key={pIndex} className="mb-4">
                {para[language]}
              </p>
            ))}
          </div>
        </div>

        {/* Remaining paragraphs */}
        <div className="text-lg leading-relaxed">
          {leadershipData.paragraphs.slice(2).map((para, pIndex) => (
            <p key={pIndex} className="mb-4">
              {para[language]}
            </p>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Leadership;
