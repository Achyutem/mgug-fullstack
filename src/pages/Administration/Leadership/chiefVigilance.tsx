import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData";

const ChiefVigilanceOfficer = () => {
  const { language } = UseLanguage();
  const { chiefVigilanceOfficer } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={chiefVigilanceOfficer.image}
          name={chiefVigilanceOfficer[language].name}
          designation={chiefVigilanceOfficer[language].designation}
          university={chiefVigilanceOfficer[language].university}
          email={chiefVigilanceOfficer.email}
        />
      </section>
    </MainLayout>
  );
};

export default ChiefVigilanceOfficer;
