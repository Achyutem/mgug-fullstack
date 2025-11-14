import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { DeansAndPrinciples } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const Ayurveda = () => {
    const { language } = UseLanguage();
    const { Ayurveda } = DeansAndPrinciples;
    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <PersonCard
                    image={Ayurveda.image}
                    name={Ayurveda[language].name}
                    designation={Ayurveda[language].designation}
                    university={Ayurveda[language].university}
                    email={Ayurveda.email}
                    profilePdf={Ayurveda.profilePdf}
                />
            </section>
        </MainLayout>
    );
};

export default Ayurveda;
