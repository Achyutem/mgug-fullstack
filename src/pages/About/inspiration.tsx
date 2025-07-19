import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { inspirationPageData } from "@/utils/aboutData";

const Inspiration = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto text-gray-100">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center text-orange-400 mb-16">
          {inspirationPageData.pageTitle[language]}
        </h1>

        {inspirationPageData.inspirations.map((person, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10 mb-20`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={person.image}
                alt={person.name[language]}
                className="rounded-xl w-full h-auto object-cover shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-lg leading-relaxed">
              <h2 className="text-3xl font-bold mb-4 text-orange-400">
                {person.name[language]}
              </h2>
              {person.paragraphs.map((para, pIndex) => (
                <p key={pIndex} className="mb-4">
                  {para[language]}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </MainLayout>
  );
};

export default Inspiration;
