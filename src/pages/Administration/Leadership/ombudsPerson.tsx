import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData";

const OmbudsPerson = () => {
  const { language } = UseLanguage();
  const { ombudsPerson } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={ombudsPerson.image}
          name={ombudsPerson[language].name}
          designation={ombudsPerson[language].designation}
          university={ombudsPerson[language].university}
          email={ombudsPerson.email}
        />
      </section>
    </MainLayout>
  );
};

export default OmbudsPerson;
