import MainLayout from "@/layouts/homeLayout";
import { MdComputer } from "react-icons/md";
import { UseLanguage } from "@/context/languageContext";
import { ItCommitteeMembers, itCommitteeTitles } from "@/utils/committeeData";

const ItTeam = () => {
  const { language } = UseLanguage();
  const t = itCommitteeTitles;

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-400">
            {t.heading[language]}
          </h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ItCommitteeMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex items-center bg-blue-950 text-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-800 hover:border-orange-400"
            >
              <div className="min-w-[72px] min-h-[72px] w-18 h-18 mr-6 flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-orange-400 shadow-md transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-start mb-1 text-orange-400">
                  <MdComputer className="mr-2 mt-1" size={18} />
                  <h3 className="text-lg font-semibold">
                    {member.name[language]}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 mt-1">
                  {member.designation[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default ItTeam;
