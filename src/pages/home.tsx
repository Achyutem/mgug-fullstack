import MainLayout from "@/layouts/homeLayout";
import AboutMain from "@/sections/about";
import WhyMGUG from "@/sections/whyMGUG";
import Contact from "@/sections/contact";
import Main from "@/sections/main";
import Academic from "@/sections/academic";
import Admission from "@/sections/admission";
import { InfoPopup } from "@/components/popup";
import Notifications from "@/sections/notification";
// import Marquee from "@/sections/marquee";

const UniversityLandingPage: React.FC = () => {
  return (
    <div className=" min-h-screen bg-black text-white overflow-hidden">
      <MainLayout>
        <InfoPopup />
        {/* <Marquee /> */}
        <Main />
        <AboutMain />
        <WhyMGUG />
        <Academic />
        <Admission />
        <Notifications />
        <Contact />
      </MainLayout>
    </div>
  );
};

export default UniversityLandingPage;
