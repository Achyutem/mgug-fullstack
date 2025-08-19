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
  FaBed,
  FaPlaceOfWorship,
  FaHospital,
  FaUtensils,
  FaMicrophone,
  FaPuzzlePiece,
  FaCalendarCheck,
  FaUserGraduate,
  FaCertificate,
  FaAward,
  FaNewspaper,
  FaDatabase,
  FaDownload,
  FaQuestionCircle,
  FaPhone,
  FaSitemap,
} from "react-icons/fa";
import {
  FaFileLines,
  FaIndianRupeeSign,
  FaPenToSquare,
  FaBookOpenReader,
} from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
import { MdPermMedia } from "react-icons/md";

// Define a type for a single link item
export type LinkItem = {
  title: string;
  icon: ReactElement;
  href: string;
};

// Define the main data structure type
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
      title: "Result",
      icon: <LuNotepadText />,
      href: "/result",
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
      href: "/examination-manual",
    },
  ],
  "Student Support": [
    { title: "Scholarships", icon: <FaIndianRupeeSign />, href: "#" },
    { title: "Student Council", icon: <FaUsers />, href: "#" },
    { title: "Placement Cell", icon: <FaBriefcase />, href: "#" },
    {
      title: "Grievance Redressal",
      icon: <FaHeadset />,
      href: "/Committee/srgc",
    },
    { title: "Internal Complaints", icon: <FaGavel />, href: "#" },
    {
      title: "Anti-Ragging",
      icon: <FaUserShield />,
      href: "/Committee/Anti-Ragging",
    },
    { title: "Counselling", icon: <FaBrain />, href: "#" },
  ],
  "Campus Life": [
    { title: "Hostel", icon: <FaBed />, href: "/hostel" },
    { title: "Temple", icon: <FaPlaceOfWorship />, href: "#" },
    { title: "Hospital", icon: <FaHospital />, href: "/hospital" },
    { title: "Cafeteria", icon: <FaUtensils />, href: "/canteen" },
    { title: "Library", icon: <IoLibrary />, href: "/library" },
    { title: "Auditorium", icon: <FaMicrophone />, href: "#" },
  ],
  "Student Engagement": [
    { title: "Clubs & Societies", icon: <FaPuzzlePiece />, href: "#" },
    { title: "Events", icon: <FaCalendarCheck />, href: "/events" },
    {
      title: "University Magazine",
      icon: <FaBookOpenReader />,
      href: "/arogya-path",
    },
    { title: "Alumni", icon: <FaUserGraduate />, href: "#" },
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
    { title: "Contact Us", icon: <FaPhone />, href: "/contact" },
    { title: "ERP", icon: <FaSitemap />, href: "erp.mgug.ac.in" },
  ],
};
