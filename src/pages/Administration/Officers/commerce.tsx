import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { DeansAndPrinciples } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const Commerce = () => {
    const { language } = UseLanguage();
    const { Commerce } = DeansAndPrinciples;
    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <PersonCard
                    image={Commerce.image}
                    name={Commerce[language].name}
                    designation={Commerce[language].designation}
                    university={Commerce[language].university}
                    email={Commerce.email}
                    profilePdf={Commerce.profilePdf}
                />
            </section>
        </MainLayout>
    );
};

export default Commerce;
