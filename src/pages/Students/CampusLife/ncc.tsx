import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { nccData } from "@/utils/student";

const NccPage = () => {
  const { language } = UseLanguage();
  const content = nccData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-4 text-orange-500 text-center">
              {content.pageTitle[language]}
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              {content.mainHeading[language]}
            </p>

            {/* Introduction Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-orange-500">
                {content.introduction.heading[language]}
              </h2>
              <div className="text-lg leading-relaxed text-black space-y-4">
                {content.introduction.paragraphs.map((para, index) => (
                  <p key={index}>{para[language]}</p>
                ))}
              </div>
            </div>

            {/* NCC at MGUG Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-orange-500">
                {content.nccAtMgug.heading[language]}
              </h2>
              <p className="text-lg leading-relaxed text-black mb-6">
                {content.nccAtMgug.intro[language]}
              </p>
              <div className="space-y-4 text-lg">
                {content.nccAtMgug.details.map((detail, index) => (
                  <p key={index}>
                    <strong className="font-semibold text-slate-800">
                      {detail.heading[language]}
                    </strong>{" "}
                    {detail.description[language]}
                  </p>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-orange-500">
                {content.achievements.heading[language]}
              </h2>
              <div className="space-y-4 text-lg text-black">
                <p>
                  <strong className="font-semibold">
                    {content.achievements.camp2023.heading[language]}
                  </strong>{" "}
                  {content.achievements.camp2023.description[language]}
                </p>
                <div>
                  <strong className="font-semibold">
                    {content.achievements.rdcSelections.heading[language]}
                  </strong>
                  <ul className="list-disc list-inside mt-2 ml-4">
                    {content.achievements.rdcSelections.list.map(
                      (item, index) => (
                        <li key={index}>{item[language]}</li>
                      )
                    )}
                  </ul>
                </div>
                <p>
                  <strong className="font-semibold">
                    {content.achievements.specialHonors.heading[language]}
                  </strong>{" "}
                  {content.achievements.specialHonors.description[language]}
                </p>
              </div>
            </div>

            {/* Vision Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-orange-500">
                {content.vision.heading[language]}
              </h2>
              <div className="text-lg leading-relaxed text-black space-y-4">
                {content.vision.paragraphs.map((para, index) => (
                  <p key={index}>{para[language]}</p>
                ))}
                <ul className="list-disc list-inside mt-2 ml-4">
                  <li>Enhance cadet participation in national-level camps</li>
                  <li>
                    Encourage innovation and excellence in military training
                  </li>
                  <li>
                    Foster holistic development through academic, social, and
                    cultural engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default NccPage;
