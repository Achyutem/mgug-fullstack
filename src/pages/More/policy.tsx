import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { policyData } from "@/utils/moreData";

const PolicyPage = () => {
    const { language } = UseLanguage();
    const content = policyData;

    return (
        <MainLayout>
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-4xl text-left">
                        <h1 className="text-4xl font-bold mb-4 text-orange-500 text-center">
                            {content.pageTitle[language]}
                        </h1>

                        <p className="text-lg text-center text-gray-600 mb-12">
                            {content.introNote[language]}
                        </p>

                        {/* Information Collection Section */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-orange-500">
                                {content.informationCollection.heading[language]}
                            </h2>
                            <div className="text-lg leading-relaxed text-black space-y-4">
                                {content.informationCollection.paragraphs.map((para, index) => (
                                    <p key={index}>{para[language]}</p>
                                ))}
                            </div>
                        </div>

                        {/* Automatically Collected Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-orange-500">
                                {content.technicalInfo.heading[language]}
                            </h2>
                            <div className="text-lg leading-relaxed text-black space-y-4">
                                {content.technicalInfo.paragraphs.map((para, index) => (
                                    <p key={index}>{para[language]}</p>
                                ))}
                                <ul className="list-disc list-inside space-y-2 mt-4">
                                    {content.technicalInfo.list.map((item, index) => (
                                        <li key={index}>{item[language]}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Cookies Section */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-orange-500">
                                {content.cookies.heading[language]}
                            </h2>
                            <div className="text-lg leading-relaxed text-black space-y-4">
                                {content.cookies.paragraphs.map((para, index) => (
                                    <p key={index}>{para[language]}</p>
                                ))}
                            </div>
                        </div>

                        {/* Personal Info Section */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-orange-500">
                                {content.personalInfo.heading[language]}
                            </h2>
                            <div className="text-lg leading-relaxed text-black space-y-4">
                                {content.personalInfo.paragraphs.map((para, index) => (
                                    <p key={index}>{para[language]}</p>
                                ))}
                            </div>
                        </div>

                        {/* Site Security Section */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-orange-500">
                                {content.security.heading[language]}
                            </h2>
                            <div className="text-lg leading-relaxed text-black space-y-4">
                                {content.security.paragraphs.map((para, index) => (
                                    <p key={index}>{para[language]}</p>
                                ))}
                            </div>
                        </div>

                        {/* Copyright Section */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-orange-500">
                                {content.copyright.heading[language]}
                            </h2>
                            <div className="text-lg leading-relaxed text-black space-y-4">
                                {content.copyright.paragraphs.map((para, index) => (
                                    <p key={index}>{para[language]}</p>
                                ))}
                            </div>
                        </div>

                        {/* Refund Policy */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-orange-500">
                                {content.refund.heading[language]}
                            </h2>
                            <ul className="list-disc list-inside text-lg text-black space-y-3">
                                {content.refund.points.map((point, index) => (
                                    <li key={index}>{point[language]}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Hyperlink Section */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-orange-500">
                                {content.hyperlink.heading[language]}
                            </h2>
                            <div className="text-lg leading-relaxed text-black space-y-4">
                                {content.hyperlink.paragraphs.map((para, index) => (
                                    <p key={index}>{para[language]}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default PolicyPage;
