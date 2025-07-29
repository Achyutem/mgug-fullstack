import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const DeanIFTSP = () => {
  const { language } = UseLanguage();
  const { deanIFTSP } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={deanIFTSP.image}
          name={deanIFTSP[language].name}
          designation={deanIFTSP[language].designation}
          university={deanIFTSP[language].university}
          email={deanIFTSP.email}
          website={deanIFTSP.website}
          socials={deanIFTSP.socials}
          profilePdf={deanIFTSP.profilePdf}
        />
      </section>
    </MainLayout>
  );
};

export default DeanIFTSP;
