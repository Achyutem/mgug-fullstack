import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData"; // Adjust the import path as needed
import { UseLanguage } from "@/context/languageContext";

export default function Registrar() {
  const { language } = UseLanguage();
  const { registrar } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={registrar.image}
          name={registrar[language].name}
          designation={registrar[language].designation}
          university={registrar[language].university}
          email={registrar.email}
          profilePdf={registrar.profilePdf}
        />
      </section>
    </MainLayout>
  );
}
