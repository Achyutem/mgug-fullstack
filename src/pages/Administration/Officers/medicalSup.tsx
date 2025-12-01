import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { DeansAndPrinciples } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const MedicalSup = () => {
    const { language } = UseLanguage();
    const { MedicalSup } = DeansAndPrinciples;
    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <PersonCard
                    image={MedicalSup.image}
                    name={MedicalSup[language].name}
                    designation={MedicalSup[language].designation}
                    university={MedicalSup[language].university}
                    email={MedicalSup.email}
                    profilePdf={MedicalSup.profilePdf}
                />
            </section>
        </MainLayout>
    );
};

export default MedicalSup;
