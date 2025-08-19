import { lazy } from "react";

const UniversityLandingPage = lazy(() => import("@/pages/home"));
const Contact = lazy(() => import("@/pages/contact"));
const ResearchPage = lazy(() => import("@/pages/research"));

// About
const AboutUs = lazy(() => import("@/pages/About/aboutUs"));
const UniversityLogo = lazy(() => import("@/pages/About/universityLogo"));
const Vision = lazy(() => import("@/pages/About/vision"));
const OurIdeals = lazy(() => import("@/pages/About/ourIdeals"));
const Inspiration = lazy(() => import("@/pages/About/inspiration"));
const Leadership = lazy(() => import("@/pages/About/leadership"));
const InspirationAbode = lazy(() => import("@/pages/About/inspirationAbode"));
const ProposedProjects = lazy(() => import("@/pages/About/proposedProject"));
const ProgressPath = lazy(() => import("@/pages/About/progressPath"));
const InstitutionsPage = lazy(
  () => import("@/pages/About/associateInstitutes")
);
const ShikshaParishadCharter = lazy(
  () => import("@/pages/About/shikshaParsihad")
);

// About > Ideology
const FivePledges = lazy(() => import("@/pages/About/ideology/fiveVows"));
const Principles = lazy(() => import("@/pages/About/ideology/principles"));
const Specialty = lazy(() => import("@/pages/About/ideology/speciality"));
const CultivationPath = lazy(
  () => import("@/pages/About/ideology/cultivationPath")
);

// Administration > Leadership
const Chancellor = lazy(
  () => import("@/pages/Administration/Leadership/chancellor")
);
const ViceChancellor = lazy(
  () => import("@/pages/Administration/Leadership/viceChancellor")
);
const ProChancellor = lazy(
  () => import("@/pages/Administration/Leadership/proChancellor")
);
const Registrar = lazy(
  () => import("@/pages/Administration/Leadership/registrar")
);
const FinanceOfficer = lazy(
  () => import("@/pages/Administration/Leadership/financeOfficer")
);
const ControllerOfExamination = lazy(
  () => import("@/pages/Administration/Leadership/controllerOfExamination")
);
const ChiefProctor = lazy(
  () => import("@/pages/Administration/Leadership/chiefProctor")
);
const ChiefVigilanceOfficer = lazy(
  () => import("@/pages/Administration/Leadership/chiefVigilance")
);
const OmbudsPerson = lazy(
  () => import("@/pages/Administration/Leadership/ombudsPerson")
);

// Administration > Officers
const DeanAcademics = lazy(
  () => import("@/pages/Administration/Officers/deanAcademics")
);
const DeanIQAC = lazy(() => import("@/pages/Administration/Officers/deanIQAC"));
const DeanIFTSP = lazy(
  () => import("@/pages/Administration/Officers/deanIFTSP")
);

// Administration > Statutory Bodies
const EmpoweredBody = lazy(
  () => import("@/pages/Administration/statuoryBody/empoweredBody")
);
const GoverningBody = lazy(
  () => import("@/pages/Administration/statuoryBody/governingBody")
);
const ExecutiveCouncil = lazy(
  () => import("@/pages/Administration/statuoryBody/executiveCouncil")
);
const AcademicCouncil = lazy(
  () => import("@/pages/Administration/statuoryBody/academicCouncil")
);
const BoardOfStudies = lazy(
  () => import("@/pages/Administration/statuoryBody/boardofStudies")
);

// Administration > Committees
const FinanceCommittee = lazy(
  () => import("@/pages/Administration/Committees/financeCommittees")
);
const ExaminationCommittee = lazy(
  () => import("@/pages/Administration/Committees/examinationCommittee")
);
const SGRCAndOmbudsperson = lazy(
  () => import("@/pages/Administration/Committees/sgrcAndOmbuds")
);
const AntiRagging = lazy(
  () => import("@/pages/Administration/Committees/antiRagging")
);
const ItTeam = lazy(() => import("@/pages/Administration/Committees/itTeam"));

// Admission
const CertificationDiploma = lazy(
  () => import("@/pages/Admission/certAndDiploma")
);
const FeeStructure = lazy(() => import("@/pages/Admission/feeStructure"));
const ListOfPrograms = lazy(() => import("@/pages/Admission/listOfProgram"));
const PhDPrograms = lazy(() => import("@/pages/Admission/phdProgram"));
const PostgraduatePrograms = lazy(
  () => import("@/pages/Admission/postGraduate")
);
const UnderGraduate = lazy(() => import("@/pages/Admission/underGraduate"));
const ProspectusPage = lazy(() => import("@/pages/Admission/prospectus"));

// Students > Academics
const AcademicCalendar = lazy(
  () => import("@/pages/Students/Academics/academicCalendar")
);
const ExaminationManual = lazy(
  () => import("@/pages/Students/Academics/examinationManual")
);

// Students > Examination
const ResultsPage = lazy(() => import("@/pages/Students/Examination/result"));
const SchedulePage = lazy(
  () => import("@/pages/Students/Examination/schedule")
);

// Students > Campus Life
const EventsPage = lazy(() => import("@/pages/Students/CampusLife/event"));
const AdmissionNoticePage = lazy(
  () => import("@/pages/Students/CampusLife/admissionNotice")
);
const AmbulancePage = lazy(
  () => import("@/pages/Students/CampusLife/ambulance")
);
const CafeteriaPage = lazy(
  () => import("@/pages/Students/CampusLife/cafetaria")
);
const DifferentlyAbledPage = lazy(
  () => import("@/pages/Students/CampusLife/differentlyAbled")
);
const StudentHelpPage = lazy(() => import("@/pages/studentPage"));
const GuestHousePage = lazy(
  () => import("@/pages/Students/CampusLife/guestHouse")
);
const HospitalPage = lazy(() => import("@/pages/Students/CampusLife/hospital"));
const HostelPage = lazy(() => import("@/pages/Students/CampusLife/hostel"));
const LaboratoriesPage = lazy(
  () => import("@/pages/Students/CampusLife/laborataries")
);
const LibraryPage = lazy(() => import("@/pages/Students/CampusLife/library"));
const SportsPage = lazy(() => import("@/pages/Students/CampusLife/sports"));

// More > Resources
const DownloadsPage = lazy(() => import("@/pages/More/Resources/downloads"));
const JobsSection = lazy(() => import("@/pages/More/Resources/jobs"));
const NewsSection = lazy(() => import("@/pages/More/Resources/news"));
const GalleryPage = lazy(() => import("@/pages/More/Resources/photoGallery"));
const VideoGalleryPage = lazy(
  () => import("@/pages/More/Resources/videoGallery")
);
const MediaCoveragePage = lazy(
  () => import("@/pages/More/Resources/mediaCoverage")
);

// More > Magazine
const ArogyaPathPage = lazy(() => import("@/pages/More/Magazine/arogyaPath"));
const ArogyaPrabhaPage = lazy(
  () => import("@/pages/More/Magazine/arogyaPrabha")
);
const SevaPathMagazinePage = lazy(
  () => import("@/pages/More/Magazine/sevaPath")
);

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
  { title: "Result", path: "/result", element: <ResultsPage /> },
  { title: "Schedule", path: "/schedule", element: <SchedulePage /> },
  { title: "Events", path: "/events", element: <EventsPage /> },
  {
    title: "Admission Notice",
    path: "/admission-notice",
    element: <AdmissionNoticePage />,
  },

  // About
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
  { title: "Progress Path", path: "/progress-path", element: <ProgressPath /> },
  {
    title: "Associate Institutes",
    path: "/associate-institutes",
    element: <InstitutionsPage />,
  },
  {
    title: "Shiksha Parishad",
    path: "/shiksha-parishad",
    element: <ShikshaParishadCharter />,
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
  {
    title: "Inspirational Leadership",
    path: "/leadership",
    element: <Leadership />,
  },

  // About > Ideology
  {
    title: "Cultivation Path",
    path: "/cultivation-path",
    element: <CultivationPath />,
  },
  { title: "Five Vows", path: "/five-vows", element: <FivePledges /> },
  { title: "Principles", path: "/principles", element: <Principles /> },
  { title: "Specialty", path: "/speciality", element: <Specialty /> },

  // Campus Life
  { title: "Ambulance", path: "/ambulance", element: <AmbulancePage /> },
  { title: "Canteen", path: "/canteen", element: <CafeteriaPage /> },
  {
    title: "Differently Abled",
    path: "/differently-abled",
    element: <DifferentlyAbledPage />,
  },
  {
    title: "Student Help",
    path: "/student-help",
    element: <StudentHelpPage />,
  },
  { title: "Guest House", path: "/guest-house", element: <GuestHousePage /> },
  { title: "Hospital", path: "/hospital", element: <HospitalPage /> },
  { title: "Hostel", path: "/hostel", element: <HostelPage /> },
  {
    title: "Laboratories",
    path: "/laboratories",
    element: <LaboratoriesPage />,
  },
  { title: "Library", path: "/library", element: <LibraryPage /> },
  { title: "Sports", path: "/sports", element: <SportsPage /> },

  // Magazines
  { title: "Arogya Path", path: "/arogya-path", element: <ArogyaPathPage /> },
  {
    title: "Arogya Prabha",
    path: "/arogya-prabha",
    element: <ArogyaPrabhaPage />,
  },
  { title: "Seva Path", path: "/seva-path", element: <SevaPathMagazinePage /> },

  // Resources
  { title: "Downloads", path: "/downloads", element: <DownloadsPage /> },
  { title: "Photo Gallery", path: "/photo-gallery", element: <GalleryPage /> },
  {
    title: "Video Gallery",
    path: "/video-gallery",
    element: <VideoGalleryPage />,
  },
  {
    title: "Media Coverage",
    path: "/media-coverage",
    element: <MediaCoveragePage />,
  },
  { title: "Jobs", path: "/jobs", element: <JobsSection /> },
  { title: "News", path: "/news", element: <NewsSection /> },

  // Administration > Leadership
  {
    title: "Chancellor",
    path: "/administration/chancellor",
    element: <Chancellor />,
  },
  {
    title: "Pro-Chancellor",
    path: "/administration/pro-chancellor",
    element: <ProChancellor />,
  },
  {
    title: "Vice-Chancellor",
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
    path: "/administration/controller-of-examination",
    element: <ControllerOfExamination />,
  },
  {
    title: "Chief Proctor",
    path: "/administration/chief-proctor",
    element: <ChiefProctor />,
  },
  {
    title: "Chief Vigilance Officer",
    path: "/administration/chief-vigilance-officer",
    element: <ChiefVigilanceOfficer />,
  },
  {
    title: "Ombuds Person",
    path: "/administration/ombuds-person",
    element: <OmbudsPerson />,
  },

  // Administration > Officers
  {
    title: "Dean Academics",
    path: "/administration/dean-academics",
    element: <DeanAcademics />,
  },
  {
    title: "Dean IQAC",
    path: "/administration/dean-iqac",
    element: <DeanIQAC />,
  },
  {
    title: "Dean IFTSP",
    path: "/administration/dean-iftsp",
    element: <DeanIFTSP />,
  },

  // Administration > Statutory Bodies
  {
    title: "Empowered Body",
    path: "/statutory-body/empowered-body",
    element: <EmpoweredBody />,
  },
  {
    title: "Governing Body",
    path: "/statutory-body/governing-body",
    element: <GoverningBody />,
  },
  {
    title: "Executive Council",
    path: "/statutory-body/executive-council",
    element: <ExecutiveCouncil />,
  },
  {
    title: "Academic Council",
    path: "/statutory-body/academic-council",
    element: <AcademicCouncil />,
  },
  {
    title: "Board of Studies",
    path: "/statutory-body/board-of-studies",
    element: <BoardOfStudies />,
  },

  // Administration > Committees
  {
    title: "Finance Committee",
    path: "/committee/finance-committee",
    element: <FinanceCommittee />,
  },
  {
    title: "Examination Committee",
    path: "/committee/examination-committee",
    element: <ExaminationCommittee />,
  },
  {
    title: "SGRC & Ombudsperson",
    path: "/committee/srgc",
    element: <SGRCAndOmbudsperson />,
  },
  {
    title: "Anti-Ragging Committee",
    path: "/committee/anti-ragging",
    element: <AntiRagging />,
  },
  { title: "IT Team", path: "/committee/it-team", element: <ItTeam /> },

  // Admission
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
    title: "Undergraduate Program",
    path: "/admission/under-graduate",
    element: <UnderGraduate />,
  },
  {
    title: "List of Programs",
    path: "/admission/list-of-program",
    element: <ListOfPrograms />,
  },
  {
    title: "Postgraduate Program",
    path: "/admission/post-graduate",
    element: <PostgraduatePrograms />,
  },
  {
    title: "PhD Program",
    path: "/admission/phd-program",
    element: <PhDPrograms />,
  },
  {
    title: "Prospectus",
    path: "/admission/prospectus",
    element: <ProspectusPage />,
  },

  // Research
  { title: "Research", path: "/research", element: <ResearchPage /> },
];
