import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { hospitalData } from "@/utils/student";

const HospitalPage = () => {
  const { language } = UseLanguage();
  const content = hospitalData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
              {content.pageTitle[language]}
            </h1>

            {/* Image Section */}
            <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="/hospital.jpg"
                alt={content.pageTitle[language]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-lg leading-relaxed text-black">
              {content.introParagraphs.map((para, index) => (
                <p key={index} className="mb-4">
                  {para[language]}
                </p>
              ))}
            </div>

            {/* Facilities Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-orange-500">
                {content.facilitiesHeading[language]}
              </h2>
              <div className="space-y-6 text-lg text-black">
                {content.facilitiesList.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-orange-500">
                      {item.heading[language]}
                    </h3>
                    <p className="text-black mt-1">
                      {item.description[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timings Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-orange-500">
                {content.timingsHeading[language]}
              </h2>
              <div className="space-y-6 text-lg text-black">
                {content.timingsList.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-orange-500">
                      {item.heading[language]}
                    </h3>
                    <p className="text-black mt-1">
                      {item.description[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HospitalPage;
