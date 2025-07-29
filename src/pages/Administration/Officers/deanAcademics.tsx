import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const DeanAcademics = () => {
  const { language } = UseLanguage();
  const { deanAcademics } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={deanAcademics.image}
          name={deanAcademics[language].name}
          designation={deanAcademics[language].designation}
          university={deanAcademics[language].university}
          email={deanAcademics.email}
          website={deanAcademics.website}
          socials={deanAcademics.socials}
          profilePdf={deanAcademics.profilePdf}
        />
      </section>
    </MainLayout>
  );
};

export default DeanAcademics;
