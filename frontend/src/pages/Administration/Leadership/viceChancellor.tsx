import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData"; // Adjust the import path as needed

const ViceChancellor = () => {
  const { language } = UseLanguage();
  const { viceChancellor } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={viceChancellor.image}
          name={viceChancellor[language].name}
          designation={viceChancellor[language].designation}
          university={viceChancellor[language].university}
          email={viceChancellor.email}
          profilePdf={viceChancellor.profilePdf}
        />
      </section>
    </MainLayout>
  );
};

export default ViceChancellor;
