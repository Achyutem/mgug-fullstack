import MainLayout from "@/layouts/homeLayout";
import PersonCard from "@/layouts/personLayout";
import { DeansAndPrinciples } from "@/utils/leadershipData";
import { UseLanguage } from "@/context/languageContext";

const Pharmacy = () => {
    const { language } = UseLanguage();
    const { Pharmacy } = DeansAndPrinciples;
    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
                <PersonCard
                    image={Pharmacy.image}
                    name={Pharmacy[language].name}
                    designation={Pharmacy[language].designation}
                    university={Pharmacy[language].university}
                    email={Pharmacy.email}
                    profilePdf={Pharmacy.profilePdf}
                />
            </section>
        </MainLayout>
    );
};

export default Pharmacy;
