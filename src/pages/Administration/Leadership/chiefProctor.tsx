import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData";

const ChiefProctor = () => {
  const { language } = UseLanguage();
  const { chiefProctor } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={chiefProctor.image}
          name={chiefProctor[language].name}
          designation={chiefProctor[language].designation}
          university={chiefProctor[language].university}
          email={chiefProctor.email}
        />
      </section>
    </MainLayout>
  );
};

export default ChiefProctor;
