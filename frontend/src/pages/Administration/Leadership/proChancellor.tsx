import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData";

export default function ProChancellor() {
  const { language } = UseLanguage();
  const { proChancellor } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={proChancellor.image}
          name={proChancellor[language].name}
          designation={proChancellor[language].designation}
          university={proChancellor[language].university}
          email={proChancellor.email}
          profilePdf={proChancellor.profilePdf}
        />
      </section>
    </MainLayout>
  );
}
