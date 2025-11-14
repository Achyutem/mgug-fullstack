import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { DeansAndPrinciples } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const Nursing = () => {
    const { language } = UseLanguage();
    const { Nursing } = DeansAndPrinciples;
    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <PersonCard
                    image={Nursing.image}
                    name={Nursing[language].name}
                    designation={Nursing[language].designation}
                    university={Nursing[language].university}
                    email={Nursing.email}
                    profilePdf={Nursing.profilePdf}
                />
            </section>
        </MainLayout>
    );
};

export default Nursing;
