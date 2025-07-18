import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

export default function FinanceOfficer() {
  const { language } = UseLanguage();
  const { financeOfficer } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={financeOfficer.image}
          name={financeOfficer[language].name}
          designation={financeOfficer[language].designation}
          university={financeOfficer[language].university}
          email={financeOfficer.email}
          profilePdf={financeOfficer.profilePdf}
        />
      </section>
    </MainLayout>
  );
}
