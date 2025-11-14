import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { DeansAndPrinciples } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const Agriculture = () => {
    const { language } = UseLanguage();
    const { Agriculture } = DeansAndPrinciples;
    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <PersonCard
                    image={Agriculture.image}
                    name={Agriculture[language].name}
                    designation={Agriculture[language].designation}
                    university={Agriculture[language].university}
                    email={Agriculture.email}
                    profilePdf={Agriculture.profilePdf}
                />
            </section>
        </MainLayout>
    );
};

export default Agriculture;
