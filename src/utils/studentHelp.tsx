import { BookOpenCheck, CalendarDays, FileText } from "lucide-react";
import type { ReactElement } from "react";
import {
  FaBookOpen,
  FaCalendar,
  FaClipboardList,
  FaBell,
  FaUsers,
  FaBriefcase,
  FaHeadset,
  FaGavel,
  FaUserShield,
  FaBrain,
  FaPlaceOfWorship,
  FaHospital,
  FaUtensils,
  FaPuzzlePiece,
  FaCalendarCheck,
  FaUserGraduate,
  FaCertificate,
  FaAward,
  FaNewspaper,
  FaDatabase,
  FaDownload,
  FaQuestionCircle,
  FaPhoneAlt,
  FaSitemap,
  FaHandsHelping,
  FaRegBuilding,
  FaGlobe,
  FaAmbulance,
  FaRupeeSign,
} from "react-icons/fa";
import {
  FaFileLines,
  FaIndianRupeeSign,
  FaPenToSquare,
  FaBookOpenReader,
  FaGoogleScholar,
  FaBuildingColumns,
  FaPersonCircleCheck,
} from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { MdOutlineSportsBasketball, MdPermMedia } from "react-icons/md";
import type { MagazineLink } from "./moreData";

// Define a type for a single link item
export type LinkItem = {
  title: string;
  icon: ReactElement;
  href: string;
};

export type StudentLinksData = {
  [key: string]: LinkItem[];
};

export const studentLinksData: StudentLinksData = {
  "Academic Information": [
    {
      title: "Prospectus",
      icon: <FaBookOpen />,
      href: "/admission/prospectus",
    },
    {
      title: "Academic Calendar",
      icon: <FaCalendar />,
      href: "/academic-calendar",
    },
    {
      title: "Programmes List",
      icon: <FaClipboardList />,
      href: "/admission/list-of-program",
    },
    { title: "Syllabus", icon: <FaFileLines />, href: "#" },
    {
      title: "Fee Structure",
      icon: <FaIndianRupeeSign />,
      href: "/admission/fee-structure",
    },
    { title: "Circulars", icon: <FaBell />, href: "#" },
    {
      title: "Examination",
      icon: <FaPenToSquare />,
      href: "/examination",
    },
    {
      title: "Fee Refund Policy",
      icon: <FaRupeeSign />,
      href: "/academic/fee-refund-policy",
    },
  ],
  "Student Support": [
    {
      title: "Scholarships",
      icon: <FaIndianRupeeSign />,
      href: "/scholarship",
    },
    { title: "Student Council", icon: <FaUsers />, href: "#" },
    { title: "Placement Cell", icon: <FaBriefcase />, href: "#" },
    {
      title: "Grievance Redressal",
      icon: <FaHeadset />,
      href: "/Committee/srgc",
    },
    {
      title: "Internal Complaints",
      icon: <FaGavel />,
      href: "/Committee/icc",
    },
    {
      title: "Equal Opportunity Cell",
      icon: <FaPersonCircleCheck />,
      href: "/Committee/eoc",
    },
    {
      title: "Anti-Ragging",
      icon: <FaUserShield />,
      href: "/Committee/Anti-Ragging",
    },
    {
      title: "Counselling and Wellness",
      icon: <FaBrain />,
      href: "/wellness-and-counselling",
    },
  ],
  "Campus Life": [
    { title: "Hostel", icon: <FaRegBuilding />, href: "/hostel" },
    { title: "Temple", icon: <FaPlaceOfWorship />, href: "#" },
    { title: "Hospital", icon: <FaHospital />, href: "/hospital" },
    { title: "Canteen", icon: <FaUtensils />, href: "/canteen" },
    { title: "Library", icon: <IoLibrary />, href: "/library" },
    { title: "Auditorium", icon: <FaBuildingColumns />, href: "#" },
    {
      title: "Sports",
      icon: <MdOutlineSportsBasketball />,
      href: "/sports",
    },
    {
      title: "Differently Abled",
      icon: <FaHandsHelping />,
      href: "/differently-abled",
    },
    {
      title: "Ambulance",
      icon: <FaAmbulance />,
      href: "/ambulance",
    },
  ],
  "Student Engagement": [
    { title: "Clubs & Societies", icon: <FaPuzzlePiece />, href: "#" },
    { title: "Events", icon: <FaCalendarCheck />, href: "/events" },
    {
      title: "University Magazine",
      icon: <FaBookOpenReader />,
      href: "/magazine",
    },
    { title: "Alumni", icon: <FaUserGraduate />, href: "#" },
    {
      title: "NSS",
      icon: <FaHandsHelping />,
      href: "https://mgug.ac.in/nss/index.php",
    },
    {
      title: "NCC",
      icon: <FaHandsHelping />,
      href: "/ncc",
    },
    { title: "Opportunities", icon: <FaGlobe />, href: "#" },
  ],
  Compliance: [
    { title: "Mandatory Disclosures", icon: <FaClipboardList />, href: "#" },
    {
      title: "UGC Compliance",
      icon: <FaCertificate />,
      href: "https://www.ugc.gov.in/Guideline",
    },
    { title: "NAAC", icon: <FaAward />, href: "http://naac.gov.in/" },
  ],
  "Digital & Media": [
    { title: "News", icon: <FaNewspaper />, href: "/news" },
    { title: "Photo Gallery", icon: <MdPermMedia />, href: "/photo-gallery" },
    { title: "Video Gallery", icon: <MdPermMedia />, href: "/video-gallery" },
    { title: "E-Resources", icon: <FaDatabase />, href: "#" },
  ],
  "Quick Links": [
    { title: "Downloads", icon: <FaDownload />, href: "/downloads" },
    { title: "FAQs", icon: <FaQuestionCircle />, href: "#" },
    { title: "Contact Us", icon: <FaPhoneAlt />, href: "/contact" },
    { title: "ERP", icon: <FaSitemap />, href: "erp.mgug.ac.in" },
    {
      title: "E-Samadhaan",
      icon: <FaHandsHelping />,
      href: "https://samadhaan.ugc.ac.in/",
    },
    {
      title: "National Anti-Ragging Helpline",
      icon: <FaPhoneAlt />,
      href: "tel:1800-180-5522",
    },
    {
      title: "National Toll-Free drug de-addiction",
      icon: <FaPhoneAlt />,
      href: "tel:1800-110-031",
    },
    {
      title: "UGC Moocs",
      icon: <FaGoogleScholar />,
      href: "https://ugcmoocs.inflibnet.ac.in/",
    },
    {
      title: "APAAR",
      icon: <FaGoogleScholar />,
      href: "https://apaar.education.gov.in/",
    },
  ],
};

export const MagazineLinksData: MagazineLink[] = [
  {
    title: {
      english: "Arogya Path (Monthly)",
      hindi: "आरोग्य पथ (मासिक)",
    },
    href: "/arogya-path",
    icon: <CalendarDays size={40} />,
  },
  {
    title: {
      english: "Seva Path (Monthly)",
      hindi: "सेवा पथ (मासिक)",
    },
    href: "/seva-path",
    icon: <FileText size={40} />,
  },
  {
    title: {
      english: "Arogya Prabha (Quarterly)",
      hindi: "आरोग्य प्रभा (त्रैमासिक)",
    },
    href: "/arogya-prabha",
    icon: <BookOpenCheck size={40} />,
  },
  {
    title: {
      english: "Vijñānadīpaḥ",
      hindi: "विज्ञानदीपः",
    },
    href: "/magazine",
    icon: <BookOpenCheck size={40} />,
  },
];

export const ScholarshipLinksData = [
  {
    title: "VidyaLakshmi Scheme",
    icon: <FaGoogleScholar />,
    href: "https://pmvidyalaxmi.co.in/StudentLogin.aspx",
  },
  {
    title: "UP Scholarship",
    icon: <FaGoogleScholar />,
    href: "https://scholarship.up.gov.in/",
  },
  {
    title: "Digi Shakti",
    icon: <FaGoogleScholar />,
    href: "https://digishakti.up.gov.in/index.html",
  },
];
