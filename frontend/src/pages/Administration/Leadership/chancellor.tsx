import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const Chancellor = () => {
  const { language } = UseLanguage();
  const { chancellor } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={chancellor.image}
          name={chancellor[language].name}
          designation={chancellor[language].designation}
          university={chancellor[language].university}
          email={chancellor.email}
          website={chancellor.website}
          socials={chancellor.socials}
        />
      </section>
    </MainLayout>
  );
};

export default Chancellor;
