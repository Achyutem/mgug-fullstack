import UniversityLandingPage from "@/pages/home";
import AboutUs from "@/pages/About/aboutUs";
import UniversityLogo from "@/pages/About/universityLogo";
import Chancellor from "@/pages/Administration/Leadership/chancellor";
import ViceChancellor from "@/pages/Administration/Leadership/viceChancellor";
import ProChancellor from "@/pages/Administration/Leadership/proChancellor";
import Registrar from "@/pages/Administration/Leadership/registrar";
import FinanceOfficer from "@/pages/Administration/Leadership/financeOfficer";
import ControllerOfExamination from "@/pages/Administration/Leadership/controllerOfExamination";
import ChiefProctor from "@/pages/Administration/Leadership/chiefProctor";
import ChiefVigilanceOfficer from "@/pages/Administration/Leadership/chiefVigilance";
import OmbudsPerson from "@/pages/Administration/Leadership/ombudsPerson";
import EmpoweredBody from "@/pages/Administration/statuoryBody/empoweredBody";
import GoverningBody from "@/pages/Administration/statuoryBody/governingBody";
import ExecutiveCouncil from "@/pages/Administration/statuoryBody/executiveCouncil";
import AcademicCouncil from "@/pages/Administration/statuoryBody/academicCouncil";
import BoardOfStudies from "@/pages/Administration/statuoryBody/boardofStudies";
import FinanceCommittee from "@/pages/Administration/Committees/financeCommittees";
import ExaminationCommittee from "@/pages/Administration/Committees/examinationCommittee";
import SGRCAndOmbudsperson from "@/pages/Administration/Committees/sgrcAndOmbuds";
import AntiRagging from "@/pages/Administration/Committees/antiRagging";
import Contact from "@/pages/contact";
import Vision from "@/pages/About/vision";
import AcademicCalendar from "@/pages/Students/Academics/academicCalendar";
import OurIdeals from "@/pages/About/ourIdeals";
import Inspiration from "@/pages/About/inspiration";
import Leadership from "@/pages/About/leadership";
import ItTeam from "@/pages/Administration/Committees/itTeam";
import JobsSection from "@/pages/More/Resources/jobs";
import NewsSection from "@/pages/More/Resources/news";
import CertificationDiploma from "@/pages/Admission/certAndDiploma";
import FeeStructure from "@/pages/Admission/feeStructure";
import ListOfPrograms from "@/pages/Admission/listOfProgram";
import PhDPrograms from "@/pages/Admission/phdProgram";
import PostgraduatePrograms from "@/pages/Admission/postGraduate";
import UnderGraduate from "@/pages/Admission/underGraduate";
import ResultsPage from "@/pages/Students/Examination/result";
import SchedulePage from "@/pages/Students/Examination/schedule";
import DownloadsPage from "@/pages/More/Resources/downloads";
import EventsPage from "@/pages/Students/CampusLife/event";
import ProspectusPage from "@/pages/Admission/prospectus";
import AdmissionNoticePage from "@/pages/Students/CampusLife/admissionNotice";
import ArogyaPathPage from "@/pages/More/Magazine/arogyaPath";
import ArogyaPrabhaPage from "@/pages/More/Magazine/arogyaPrabha";
import SevaPathMagazinePage from "@/pages/More/Magazine/sevaPath";
import InspirationAbode from "@/pages/About/inspirationAbode";

export const routeMeta = [
  { title: "Home", path: "/", element: <UniversityLandingPage /> },
  { title: "Contact", path: "/contact", element: <Contact /> },
  // Students
  {
    title: "Academic Calendar",
    path: "/academic-calendar",
    element: <AcademicCalendar />,
  },
  {
    title: "Result",
    path: "/result",
    element: <ResultsPage />,
  },
  {
    title: "Schedule",
    path: "/schedule",
    element: <SchedulePage />,
  },
  {
    title: "Events",
    path: "/events",
    element: <EventsPage />,
  },
  {
    title: "Admission notice",
    path: "/admission-notice",
    element: <AdmissionNoticePage />,
  },

  // More
  { title: "About Us", path: "/about", element: <AboutUs /> },
  { title: "Our Ideals", path: "/our-ideals", element: <OurIdeals /> },
  {
    title: "Our Source of Inspiration",
    path: "/our-source-of-inspiration",
    element: <Inspiration />,
  },
  {
    title: "Inspirational Leadership",
    path: "/Leadership",
    element: <Leadership />,
  },
  { title: "Vision and Mission", path: "/vision", element: <Vision /> },
  {
    title: "University Logo",
    path: "/university-logo",
    element: <UniversityLogo />,
  },
  {
    title: "Inspiration Abode",
    path: "/inspiration-abode",
    element: <InspirationAbode />,
  },

  // magazines
  {
    title: "Arogya Path",
    path: "/arogya-path",
    element: <ArogyaPathPage />,
  },
  {
    title: "Arogya Prabha",
    path: "/arogya-prabha",
    element: <ArogyaPrabhaPage />,
  },
  {
    title: "Seva Path",
    path: "/seva-path",
    element: <SevaPathMagazinePage />,
  },

  {
    title: "Downloads",
    path: "/downloads",
    element: <DownloadsPage />,
  },
  {
    title: "Jobs",
    path: "/jobs",
    element: <JobsSection />,
  },
  {
    title: "news",
    path: "/news",
    element: <NewsSection />,
  },

  // Leadership
  {
    title: "Chancellor",
    path: "/administration/chancellor",
    element: <Chancellor />,
  },
  {
    title: "Pro Chancellor",
    path: "/administration/pro-chancellor",
    element: <ProChancellor />,
  },
  {
    title: "Vice Chancellor",
    path: "/administration/vice-chancellor",
    element: <ViceChancellor />,
  },
  {
    title: "Registrar",
    path: "/administration/registrar",
    element: <Registrar />,
  },
  {
    title: "Finance Officer",
    path: "/administration/finance-officer",
    element: <FinanceOfficer />,
  },
  {
    title: "Controller of Examination",
    path: "/administration/Controller-of-Examination",
    element: <ControllerOfExamination />,
  },
  {
    title: "Chief Proctor",
    path: "/administration/chief-proctor",
    element: <ChiefProctor />,
  },
  {
    title: "Chief Vigilance Officer",
    path: "/administration/Chief-Vigilance-Officer",
    element: <ChiefVigilanceOfficer />,
  },
  {
    title: "Ombuds Person",
    path: "/administration/Ombuds-person",
    element: <OmbudsPerson />,
  },

  // Statutory Bodies
  {
    title: "Empowered Body",
    path: "/Statutory-Body/Empowered-Body",
    element: <EmpoweredBody />,
  },
  {
    title: "Governing Body",
    path: "/Statutory-Body/governing-Body",
    element: <GoverningBody />,
  },
  {
    title: "Executive Council",
    path: "/Statutory-Body/executive-council",
    element: <ExecutiveCouncil />,
  },
  {
    title: "Academic Council",
    path: "/Statutory-Body/academic-council",
    element: <AcademicCouncil />,
  },
  {
    title: "Board of Studies",
    path: "/Statutory-Body/Board-of-Studies",
    element: <BoardOfStudies />,
  },

  // Committees
  {
    title: "Finance Committee",
    path: "/Committee/Finance-Committee",
    element: <FinanceCommittee />,
  },
  {
    title: "Examination Committee",
    path: "/Committee/Examination-Committee",
    element: <ExaminationCommittee />,
  },
  {
    title: "SGRC & Ombudsperson",
    path: "/Committee/srgc",
    element: <SGRCAndOmbudsperson />,
  },
  {
    title: "Anti-Ragging Committee",
    path: "/Committee/Anti-ragging",
    element: <AntiRagging />,
  },
  {
    title: "IT Team",
    path: "/Committee/it-team",
    element: <ItTeam />,
  },

  // admission
  {
    title: "Fee Structure",
    path: "/admission/fee-structure",
    element: <FeeStructure />,
  },
  {
    title: "Certification and Diploma",
    path: "/admission/certification-and-diploma",
    element: <CertificationDiploma />,
  },
  {
    title: "UnderGraduate Program",
    path: "/admission/under-graduate",
    element: <UnderGraduate />,
  },
  {
    title: "List of Program",
    path: "/admission/list-of-program",
    element: <ListOfPrograms />,
  },
  {
    title: "PostGraduate Program",
    path: "/admission/post-graduate",
    element: <PostgraduatePrograms />,
  },
  {
    title: "List of Program",
    path: "/admission/phd-program",
    element: <PhDPrograms />,
  },
  {
    title: "Prospectus",
    path: "/admission/prospectus",
    element: <ProspectusPage />,
  },
];
