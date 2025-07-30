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
import FivePledges from "@/pages/About/ideology/fiveVows";
import Principles from "@/pages/About/ideology/principles";
import Specialty from "@/pages/About/ideology/speciality";
import CultivationPath from "@/pages/About/ideology/cultivationPath";
import ProposedProjects from "@/pages/About/proposedProject";
import ProgressPath from "@/pages/About/progressPath";
import InstitutionsPage from "@/pages/About/associateInstitutes";
import ShikshaParishadCharter from "@/pages/About/shikshaParsihad";
import ResearchPage from "@/pages/research";
import AmbulancePage from "@/pages/Students/CampusLife/ambulance";
import CafeteriaPage from "@/pages/Students/CampusLife/cafetaria";
import DifferentlyAbledPage from "@/pages/Students/CampusLife/differentlyAbled";
import GuestHousePage from "@/pages/Students/CampusLife/guestHouse";
import HospitalPage from "@/pages/Students/CampusLife/hospital";
import HostelPage from "@/pages/Students/CampusLife/hostel";
import LaboratoriesPage from "@/pages/Students/CampusLife/laborataries";
import LibraryPage from "@/pages/Students/CampusLife/library";
import SportsPage from "@/pages/Students/CampusLife/sports";
import DeanAcademics from "@/pages/Administration/Officers/deanAcademics";
import DeanIQAC from "@/pages/Administration/Officers/deanIQAC";
import DeanIFTSP from "@/pages/Administration/Officers/deanIFTSP";
import ExaminationManual from "@/pages/Students/Academics/examinationManual";

export const routeMeta = [
  { title: "Home", path: "/", element: <UniversityLandingPage /> },
  { title: "Contact", path: "/contact", element: <Contact /> },
  // Students
  {
    title: "Examination Manual",
    path: "/examination-manual",
    element: <ExaminationManual />,
  },
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

  // about
  { title: "About Us", path: "/about", element: <AboutUs /> },
  { title: "Our Ideals", path: "/our-ideals", element: <OurIdeals /> },
  {
    title: "Our Source of Inspiration",
    path: "/our-source-of-inspiration",
    element: <Inspiration />,
  },
  {
    title: "Proposed Projects",
    path: "/proposed-project",
    element: <ProposedProjects />,
  },
  {
    title: "Progress Path",
    path: "/progress-path",
    element: <ProgressPath />,
  },
  {
    title: "Associate Instituion",
    path: "/associate-instituion",
    element: <InstitutionsPage />,
  },
  {
    title: "Associate Instituion",
    path: "/associate-instituion",
    element: <InstitutionsPage />,
  },
  {
    title: "Shiksha Parishad",
    path: "/shiksha-parishad",
    element: <ShikshaParishadCharter />,
  },
  {
    title: "Ambulance",
    path: "/ambulance",
    element: <AmbulancePage />,
  },
  {
    title: "Canteen",
    path: "/canteen",
    element: <CafeteriaPage />,
  },
  {
    title: "Canteen",
    path: "/canteen",
    element: <CafeteriaPage />,
  },
  {
    title: "Differently Abled",
    path: "/differently-abled",
    element: <DifferentlyAbledPage />,
  },
  {
    title: "Guest House",
    path: "/guest-house",
    element: <GuestHousePage />,
  },
  {
    title: "Hospital",
    path: "/hospital",
    element: <HospitalPage />,
  },
  {
    title: "Hostel",
    path: "/hostel",
    element: <HostelPage />,
  },
  {
    title: "Laboratories",
    path: "/laboratories",
    element: <LaboratoriesPage />,
  },
  {
    title: "Library",
    path: "/library",
    element: <LibraryPage />,
  },
  {
    title: "Sports",
    path: "/sports",
    element: <SportsPage />,
  },
  //ideology
  {
    title: "Cultivation Path",
    path: "/cultivation-path",
    element: <CultivationPath />,
  },
  {
    title: "Five Vows",
    path: "/five-vows",
    element: <FivePledges />,
  },
  {
    title: "Principles",
    path: "/principles",
    element: <Principles />,
  },
  {
    title: "Specialty",
    path: "/speciality",
    element: <Specialty />,
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
  // officers
  {
    title: "Dean Academics",
    path: "/administration/Dean-Academics",
    element: <DeanAcademics />,
  },
  {
    title: "Dean IQAC",
    path: "/administration/Dean-IQAC",
    element: <DeanIQAC />,
  },
  {
    title: "Dean IFTSP",
    path: "/administration/Dean-IFTSP",
    element: <DeanIFTSP />,
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
  //Research
  {
    title: "Research",
    path: "/research",
    element: <ResearchPage />,
  },
];
