import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { DeansAndPrinciples } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const PharamcyDean = () => {
    const { language } = UseLanguage();
    const { PharamcyDean } = DeansAndPrinciples;
    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <PersonCard
                    image={PharamcyDean.image}
                    name={PharamcyDean[language].name}
                    designation={PharamcyDean[language].designation}
                    university={PharamcyDean[language].university}
                    email={PharamcyDean.email}
                    profilePdf={PharamcyDean.profilePdf}
                />
            </section>
        </MainLayout>
    );
};

export default PharamcyDean;
