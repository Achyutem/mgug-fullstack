import type { Title, MegaMenus } from "./types";

export const menuItems: Title[] = [
  { hindi: "होम", english: "Home" },
  { hindi: "छात्र", english: "Students" },
  { hindi: "प्रशासन", english: "Administration" },
  { hindi: "अनुसंधान", english: "Research" },
  { hindi: "अधिक", english: "More" },
  { hindi: "संपर्क", english: "Contact" },
];

export const megaMenus: MegaMenus = {
  Students: [
    {
      type: "header",
      label: {
        hindi: "शैक्षणिक",
        english: "Academics",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "पाठ्यक्रम और समय सारणी",
            english: "Syllabus and Timetable",
          },
          href: "https://mgug.ac.in/#",
        },
        {
          type: "link",
          label: {
            hindi: "शैक्षणिक कैलेंडर",
            english: "Academic Calendar",
          },
          href: "/academic-calendar",
        },
        {
          type: "link",
          label: {
            hindi: "ई-लर्निंग",
            english: "E-Learning",
          },
          href: "https://mgug.ac.in/#",
        },
        {
          type: "header",
          label: {
            hindi: "परीक्षा",
            english: "Examination",
          },
          subSections: [
            {
              type: "link",
              label: {
                hindi: "परीक्षा मैनुअल",
                english: "Examination Manual",
              },
              href: "/examination-manual",
            },
            {
              type: "link",
              label: {
                hindi: "परिणाम",
                english: "Result",
              },
              href: "https://mgug.ac.in/examination/result.php",
            },
            {
              type: "link",
              label: {
                hindi: "अनुसूचियां",
                english: "Schedules",
              },
              href: "https://mgug.ac.in/examination/schedule.php",
            },
          ],
        },
        {
          type: "header",
          label: {
            hindi: "संकाय",
            english: "Faculties",
          },
          subSections: [
            {
              type: "link",
              label: {
                hindi: "संबद्ध स्वास्थ्य विज्ञान संकाय",
                english: "Faculty of Allied Health Science",
              },
              href: "https://allied.mgug.ac.in/",
            },
            {
              type: "link",
              label: {
                hindi: "कृषि संकाय",
                english: "Faculty of Agriculture",
              },
              href: "https://agriculture.mgug.ac.in/",
            },
            {
              type: "link",
              label: {
                hindi: "फार्मास्युटिकल साइंसेज संकाय",
                english: "Faculty of Pharmaceutical Sciences",
              },
              href: "https://pharmacy.mgug.ac.in/",
            },
            {
              type: "link",
              label: {
                hindi: "वाणिज्य संकाय",
                english: "Faculty of Commerce",
              },
              href: "https://commerce.mgug.ac.in/",
            },
          ],
        },
      ],
    },
    {
      type: "header",
      label: {
        hindi: "प्रवेश",
        english: "Admissions",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "कार्यक्रमों की सूची",
            english: "List of Programs",
          },
          href: "https://mgug.ac.in/academics/programmes_list.php",
        },
        {
          type: "link",
          label: {
            hindi: "प्रमाणन और डिप्लोमा प्रमाणन",
            english: "Certification and Diploma Certification",
          },
          href: "https://mgug.ac.in/academics/diploma.php",
        },
        {
          type: "link",
          label: {
            hindi: "स्नातक कार्यक्रम",
            english: "Under Graduate Programs",
          },
          href: "https://mgug.ac.in/academics/ug.php",
        },
        {
          type: "link",
          label: {
            hindi: "स्नातकोत्तर कार्यक्रम",
            english: "Post Graduate Programs",
          },
          href: "https://mgug.ac.in/academics/pg.php",
        },
        {
          type: "link",
          label: {
            hindi: "पीएचडी कार्यक्रम",
            english: "Ph.D. Programs",
          },
          href: "https://mgug.ac.in/academics/phd.php",
        },
        {
          type: "link",
          label: {
            hindi: "शुल्क संरचना",
            english: "Fee Structure",
          },
          href: "https://mgug.ac.in/academics/fee_structure.php",
        },
        {
          type: "link",
          label: {
            hindi: "प्रवेश सूचना",
            english: "Admission Notice",
          },
          href: "https://admission.mgug.ac.in/",
        },
        {
          type: "header",
          label: {
            hindi: "महाविद्यालय",
            english: "Colleges",
          },
          subSections: [
            {
              type: "link",
              label: {
                hindi: "श्री गोरक्षनाथ मेडिकल कॉलेज अस्पताल और अनुसंधान केंद्र",
                english:
                  "Shri Gorakshnath Medical College Hospital and Research Centre",
              },
              href: "https://sgmchrc.in/",
            },
            {
              type: "link",
              label: {
                hindi: "गुरु गोरक्षनाथ आयुर्वेद चिकित्सा संस्थान",
                english:
                  "Guru Gorakshnath Institute of Medical Sciences(Ayurveda)",
              },
              href: "https://ayurveda.mgug.ac.in/",
            },
            {
              type: "link",
              label: {
                hindi: "गुरु श्री गोरक्षनाथ नर्सिंग कॉलेज",
                english: "Guru Shri Gorakshnath College of Nursing",
              },
              href: "https://nursing.mgug.ac.in/",
            },
            {
              type: "link",
              label: {
                hindi: "महंत अवैद्यनाथ पैरामेडिकल कॉलेज",
                english: "Mahant Avaidhyanath Paramedical College",
              },
              href: "https://paramedical.mgug.ac.in/",
            },
          ],
        },
      ],
    },
    {
      type: "header",
      label: {
        hindi: "परिसर जीवन",
        english: "Campus Life",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "पुस्तकालय",
            english: "Library",
          },
          href: "https://mgug.ac.in/campus_facilities/library.php",
        },
        {
          type: "link",
          label: {
            hindi: "छात्रावास",
            english: "Hostel",
          },
          href: "https://mgug.ac.in/campus_facilities/hostel.php",
        },
        {
          type: "link",
          label: {
            hindi: "खेल",
            english: "Sports",
          },
          href: "https://mgug.ac.in/campus_facilities/sport.php",
        },
        {
          type: "link",
          label: {
            hindi: "आयोजन",
            english: "Events",
          },
          href: "https://mgug.ac.in/announcement/event.php",
        },
        {
          type: "link",
          label: {
            hindi: "रैगिंग विरोधी",
            english: "Anti Ragging",
          },
          href: "/Committee/Anti-Ragging",
        },
        {
          type: "link",
          label: {
            hindi: "राष्ट्रीय सेवा योजना",
            english: "NSS",
          },
          href: "https://mgug.ac.in/nss/index.php",
        },
      ],
    },
  ],
  Administration: [
    {
      type: "header",
      label: {
        hindi: "नेतृत्व",
        english: "Leadership",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "कुलपति",
            english: "Chancellor",
          },
          href: "/administration/chancellor",
        },
        {
          type: "link",
          label: {
            hindi: "प्रो-कुलपति",
            english: "Pro-Chancellor",
          },
          href: "/administration/pro-chancellor",
        },
        {
          type: "link",
          label: {
            hindi: "उप-कुलपति",
            english: "Vice-Chancellor",
          },
          href: "/administration/Vice-Chancellor",
        },
        {
          type: "link",
          label: {
            hindi: "रजिस्ट्रार",
            english: "Registrar",
          },
          href: "/administration/registrar",
        },
        {
          type: "link",
          label: {
            hindi: "वित्त अधिकारी",
            english: "Finance Officer",
          },
          href: "/administration/Finance-officer",
        },
        {
          type: "link",
          label: {
            hindi: "परीक्षा नियंत्रक",
            english: "Controller of Examination",
          },
          href: "/administration/Controller-of-examination",
        },
        {
          type: "link",
          label: {
            hindi: "मुख्य प्रॉक्टर",
            english: "Chief Proctor",
          },
          href: "/administration/chief-proctor",
        },
        {
          type: "link",
          label: {
            hindi: "मुख्य सतर्कता अधिकारी",
            english: "Chief Vigilance Officer",
          },
          href: "/administration/Chief-vigilance-officer",
        },
        {
          type: "link",
          label: {
            hindi: "लोकपाल",
            english: "Ombuds Person",
          },
          href: "/administration/Ombuds-Person",
        },
      ],
    },
    {
      type: "header",
      label: {
        hindi: "वैधानिक निकाय",
        english: "Statutory Bodies",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "प्रशासनिक निकाय",
            english: "Governing Body",
          },
          href: "/Statutory-Body/governing-Body",
        },
        {
          type: "link",
          label: {
            hindi: "सशक्त निकाय",
            english: "Empowered Body",
          },
          href: "/Statutory-Body/Empowered-Body",
        },
        {
          type: "link",
          label: {
            hindi: "कार्यकारी परिषद",
            english: "Executive Council",
          },
          href: "/Statutory-Body/executive-council",
        },
        {
          type: "link",
          label: {
            hindi: "शैक्षणिक परिषद",
            english: "Academic Council",
          },
          href: "/Statutory-Body/academic-council",
        },
        {
          type: "link",
          label: {
            hindi: "अध्ययन बोर्ड",
            english: "Board of Studies",
          },
          href: "/Statutory-Body/Board-of-Studies",
        },
      ],
    },
    {
      type: "header",
      label: {
        hindi: "समितियां",
        english: "Committees",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "प्रबंधन समिति",
            english: "Managing Committee",
          },
          href: "https://mgug.ac.in/",
        },
        {
          type: "link",
          label: {
            hindi: "वित्त समिति",
            english: "Finance Committee",
          },
          href: "/Committee/Finance-Committee",
        },
        {
          type: "link",
          label: {
            hindi: "परीक्षा समिति",
            english: "Examination Committee",
          },
          href: "/Committee/Examination-Committee",
        },
        {
          type: "link",
          label: {
            hindi: "छात्र शिकायत निवारण समिति",
            english: "Students Grievance Redressal Committee",
          },
          href: "/Committee/srgc",
        },
        {
          type: "link",
          label: {
            hindi: "रैगिंग विरोधी समिति",
            english: "Anti-Ragging Committee",
          },
          href: "/Committee/Anti-Ragging",
        },
        {
          type: "link",
          label: {
            hindi: "आईटी टीम",
            english: "IT Team",
          },
          href: "/Committee/it-team",
        },
      ],
    },
  ],
  More: [
    {
      type: "header",
      label: {
        hindi: "हमारे बारे में",
        english: "About Us",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "हमारे बारे में",
            english: "About Us",
          },
          href: "/about",
        },
        {
          type: "link",
          label: {
            hindi: "दृष्टि और मिशन",
            english: "Vision & Mission",
          },
          href: "/vision",
        },
        {
          type: "link",
          label: {
            hindi: "स्थान और परिसर",
            english: "Location & Campus",
          },
          href: "https://mgug.ac.in/the_university/contact_us.php",
        },
        {
          type: "link",
          label: {
            hindi: "विश्वविद्यालय लोगो",
            english: "University Logo",
          },
          href: "/university-logo",
        },
        {
          type: "link",
          label: {
            hindi: "विश्वविद्यालय का विधान",
            english: "Statute Of University",
          },
          href: "https://mgug.ac.in/PDF/First_Statute_MGUG_Final_02-08-2021.pdf",
        },
        {
          type: "link",
          label: {
            hindi: "छात्र संघ संविधान",
            english: "Student's Union Constitution",
          },
          href: "https://mgug.ac.in/PDF/StudentUnionConstitution.pdf",
        },
        {
          type: "link",
          label: {
            hindi: "हमारे आदर्श",
            english: "Our Ideals",
          },
          href: "/our-ideals",
        },
        {
          type: "link",
          label: {
            hindi: "प्रेरणा का स्रोत",
            english: "Our Source of Inspiration",
          },
          href: "/our-source-of-inspiration",
        },
        {
          type: "link",
          label: {
            hindi: "प्रेरणादायक नेतृत्व",
            english: "Inspirational Leadership",
          },
          href: "/leadership",
        },
      ],
    },
    {
      type: "header",
      label: {
        hindi: "समुदाय",
        english: "Community",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "सामाजिक कार्य",
            english: "Social Work",
          },
          href: "https://mgug.ac.in/#",
        },
        {
          type: "link",
          label: {
            hindi: "स्वास्थ्य शिविर",
            english: "Health Camps",
          },
          href: "https://mgug.ac.in/#",
        },
        {
          type: "link",
          label: {
            hindi: "बाल कल्याण",
            english: "Child Welfare",
          },
          href: "https://mgug.ac.in/#",
        },
      ],
    },
    {
      type: "header",
      label: {
        hindi: "संसाधन",
        english: "Resources",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "फोटो गैलरी",
            english: "Photo Gallery",
          },
          href: "https://mgug.ac.in/gallery/photo_gallery.php",
        },
        {
          type: "link",
          label: {
            hindi: "वीडियो गैलरी",
            english: "Video Gallery",
          },
          href: "https://mgug.ac.in/gallery/video_gallery.php",
        },
        {
          type: "link",
          label: {
            hindi: "मीडिया कवरेज",
            english: "Media Coverage",
          },
          href: "https://mgug.ac.in/gallery/media_coverage.php",
        },
        {
          type: "link",
          label: {
            hindi: "समाचार",
            english: "News",
          },
          href: "https://mgug.ac.in/announcement/news.php",
        },
        {
          type: "link",
          label: {
            hindi: "डाउनलोड",
            english: "Downloads",
          },
          href: "https://mgug.ac.in/announcement/download.php",
        },
        {
          type: "link",
          label: {
            hindi: "स्वयं पोर्टल",
            english: "Swayam Portal",
          },
          href: "https://swayam.gov.in/",
        },
        {
          type: "link",
          label: {
            hindi: "ईआरपी",
            english: "ERP",
          },
          href: "https://erp.mgug.ac.in/login.php",
        },
        {
          type: "link",
          label: {
            hindi: "ई-समाधान",
            english: "E-Samadhaan",
          },
          href: "https://samadhaan.ugc.ac.in/",
        },
        {
          type: "link",
          label: {
            hindi: "नौकरियां",
            english: "Jobs",
          },
          href: "https://mgug.ac.in/job.php",
        },
      ],
    },
  ],
};

export const impLinks = [
  {
    label: {
      hindi: "राष्ट्रीय चिकित्सा आयोग",
      english: "National Medical Commission",
    },
    href: "https://www.nmc.org.in/",
  },
  {
    label: {
      hindi: "विश्वविद्यालय अनुदान आयोग",
      english: "University Grant Commission",
    },
    href: "https://ugc.ac.in/",
  },
  {
    label: {
      hindi: "भारतीय दंत चिकित्सा परिषद",
      english: "Dental Council of India",
    },
    href: "https://dciindia.gov.in/",
  },
  {
    label: {
      hindi: "सूचना का अधिकार अधिनियम",
      english: "Right to Information Act",
    },
    href: "https://rtionline.gov.in/",
  },
  {
    label: {
      hindi: "राष्ट्रीय शिक्षा नीति",
      english: "National Education Policy",
    },
    href: "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf",
  },
  {
    label: {
      hindi: "रैगिंग शिकायत फॉर्म",
      english: "Ragging Complaint Form",
    },
    href: "https://mgug.ac.in/academics/anti_rag.php",
  },
  {
    label: {
      hindi: "शिकायत निवारण",
      english: "Grievance Redressal",
    },
    href: "https://erp.mgug.ac.in/committees/",
  },
];

export const privacy = [
  {
    label: {
      hindi: "वार्षिक रिपोर्ट",
      english: "Annual Report",
    },
    href: "https://mgug.ac.in/index.php#",
  },
  {
    label: {
      hindi: "नियम और शर्तें",
      english: "Terms & Conditions",
    },
    href: "https://mgug.ac.in/the_university/terms.php",
  },
  {
    label: {
      hindi: "नीति",
      english: "Policy",
    },
    href: "https://mgug.ac.in/the_university/policy.php",
  },
];
