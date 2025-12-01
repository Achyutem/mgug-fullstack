import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { DeansAndPrinciples } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const MedicalDean = () => {
    const { language } = UseLanguage();
    const { MedicalDean } = DeansAndPrinciples;
    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <PersonCard
                    image={MedicalDean.image}
                    name={MedicalDean[language].name}
                    designation={MedicalDean[language].designation}
                    university={MedicalDean[language].university}
                    email={MedicalDean.email}
                    profilePdf={MedicalDean.profilePdf}
                />
            </section>
        </MainLayout>
    );
};

export default MedicalDean;
