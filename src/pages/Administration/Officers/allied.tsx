import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { DeansAndPrinciples } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const Allied = () => {
    const { language } = UseLanguage();
    const { Allied } = DeansAndPrinciples;
    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <PersonCard
                    image={Allied.image}
                    name={Allied[language].name}
                    designation={Allied[language].designation}
                    university={Allied[language].university}
                    email={Allied.email}
                    profilePdf={Allied.profilePdf}
                />
            </section>
        </MainLayout>
    );
};

export default Allied;
