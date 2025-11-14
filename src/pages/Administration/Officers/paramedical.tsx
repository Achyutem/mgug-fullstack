import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { DeansAndPrinciples } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const Paramedical = () => {
    const { language } = UseLanguage();
    const { Paramedical } = DeansAndPrinciples;
    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <PersonCard
                    image={Paramedical.image}
                    name={Paramedical[language].name}
                    designation={Paramedical[language].designation}
                    university={Paramedical[language].university}
                    email={Paramedical.email}
                    profilePdf={Paramedical.profilePdf}
                />
            </section>
        </MainLayout>
    );
};

export default Paramedical;
