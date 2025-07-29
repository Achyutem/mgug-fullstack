import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const DeanIQAC = () => {
  const { language } = UseLanguage();
  const { deanIQAC } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={deanIQAC.image}
          name={deanIQAC[language].name}
          designation={deanIQAC[language].designation}
          university={deanIQAC[language].university}
          email={deanIQAC.email}
          website={deanIQAC.website}
          socials={deanIQAC.socials}
          profilePdf={deanIQAC.profilePdf}
        />
      </section>
    </MainLayout>
  );
};

export default DeanIQAC;
