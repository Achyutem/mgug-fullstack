import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { ourIdealsData } from "@/utils/aboutData";

const OurIdeals = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto text-black">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center text-orange-500 mb-16">
          {ourIdealsData.pageTitle[language]}
        </h1>

        {ourIdealsData.ideals.map((ideal, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10 mb-20`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={ideal.image}
                alt={ideal.name[language]}
                className="rounded-xl w-full h-auto object-cover shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-lg leading-relaxed">
              <h2 className="text-3xl font-bold mb-4 text-orange-500">
                {ideal.name[language]}
              </h2>

              {ideal.paragraphs.map((para, pIndex) => (
                <div key={pIndex}>
                  {/* Render the quote after the first paragraph */}
                  {pIndex === 1 && ideal.quote && (
                    <p className="mb-4 italic text-orange-500 text-xl">
                      {ideal.quote[language]}
                    </p>
                  )}
                  <p className="mb-4">{para[language]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </MainLayout>
  );
};

export default OurIdeals;
