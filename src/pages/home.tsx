import MainLayout from "@/layouts/homeLayout";
import Navbar from "@/sections/navbar";
import AboutMain from "@/sections/about";
import WhyMGUG from "@/sections/whyMGUG";
import Contact from "@/sections/contact";
import Main from "@/sections/main";
import Academic from "@/sections/academic";
import Admission from "@/sections/admission";
import { InfoPopup } from "@/components/popup";

const UniversityLandingPage: React.FC = () => {
  return (
    <div className=" min-h-screen bg-black text-white overflow-hidden">
      <MainLayout>
        <InfoPopup />
        <Navbar />
        <Main />
        <AboutMain />
        <WhyMGUG />
        <Academic />
        <Admission />
        <Contact />
      </MainLayout>
    </div>
  );
};

export default UniversityLandingPage;
