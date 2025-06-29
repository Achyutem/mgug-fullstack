import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { administrationData } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

export default function ControllerOfExamination() {
  const { language } = UseLanguage();
  const { controllerOfExamination } = administrationData;
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <PersonCard
          image={controllerOfExamination.image}
          name={controllerOfExamination[language].name}
          designation={controllerOfExamination[language].designation}
          university={controllerOfExamination[language].university}
          email={controllerOfExamination.email}
          profilePdf={controllerOfExamination.profilePdf}
        />
      </section>
    </MainLayout>
  );
}
