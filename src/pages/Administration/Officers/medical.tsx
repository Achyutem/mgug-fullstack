import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { DeansAndPrinciples } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const Medical = () => {
    const { language } = UseLanguage();
    const { Medical } = DeansAndPrinciples;
    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <PersonCard
                    image={Medical.image}
                    name={Medical[language].name}
                    designation={Medical[language].designation}
                    university={Medical[language].university}
                    email={Medical.email}
                    profilePdf={Medical.profilePdf}
                />
            </section>
        </MainLayout>
    );
};

export default Medical;
