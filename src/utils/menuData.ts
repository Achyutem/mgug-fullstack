import type { Title, MegaMenus } from "./types";

export const menuItems: Title[] = [
  { hindi: "हमारे बारे में", english: "About" },
  { hindi: "प्रशासन", english: "Administration" },
  { hindi: "प्रवेश", english: "Admissions" },
  { hindi: "छात्र", english: "Students" },
  { hindi: "अनुसंधान", english: "Research" },
  { hindi: "अधिक", english: "More" },
  { hindi: "संपर्क", english: "Contact" },
];

export const megaMenus: MegaMenus = {
  About: [
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
          href: "/contact",
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
            hindi: "विश्वविद्यालय लोगो",
            english: "Inspiration Abode",
          },
          href: "/inspiration-abode",
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
        hindi: "विचारधारा",
        english: "Ideology",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "मील के पत्थर",
            english: "Cultivation Path",
          },
          href: "/cultivation-path",
        },
        {
          type: "link",
          label: {
            hindi: "पाँच प्रतिज्ञाएँ",
            english: "Five vows",
          },
          href: "/five-vows",
        },
        {
          type: "link",
          label: {
            hindi: "सिद्धांत",
            english: "Principles",
          },
          href: "/principles",
        },
        {
          type: "link",
          label: {
            hindi: "विशेषताएं",
            english: "Speciality",
          },
          href: "/speciality",
        },
        {
          type: "link",
          label: {
            hindi: "प्रेरणा निवास",
            english: "Inspiration Abode",
          },
          href: "/inspiration-abode",
        },
        {
          type: "link",
          label: {
            hindi: "प्रस्तावित परियोजना",
            english: "Proposed Project",
          },
          href: "/proposed-project",
        },
        {
          type: "link",
          label: {
            hindi: "प्रगति पथ",
            english: "Progress Path",
          },
          href: "/progress-path",
        },
        {
          type: "link",
          label: {
            hindi: "सहयोगी संस्थान",
            english: "Associate Institutes",
          },
          href: "/associate-institutes",
        },
        {
          type: "link",
          label: {
            hindi: "शिक्षा परिषद",
            english: "Shiksha Parishad",
          },
          href: "/shiksha-parishad",
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
      ],
    },
    // executive officers
    {
      type: "header",
      label: {
        hindi: "कार्यकारी अधिकारी",
        english: "Executive Officers",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "डीन एकेडमिक्स",
            english: "Dean Academics",
          },
          href: "/administration/Dean-Academics",
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
            hindi: "डीन आईक्यूएसी",
            english: "Dean IQAC",
          },
          href: "/administration/Dean-IQAC",
        },
        {
          type: "link",
          label: {
            hindi: "डीन आईएफटीएसपी",
            english: "Dean IFTSP",
          },
          href: "/administration/Dean-IFTSP",
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
    //
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
            hindi: "आंतरिक शिकायत समिति",
            english: "Internal Complaint Comittee",
          },
          href: "/Committees/icc",
        },
        {
          type: "link",
          label: {
            hindi: "अनुसंधान समिति",
            english: "Research Committee",
          },
          href: "/Committees/research-committee",
        },

        {
          type: "link",
          label: {
            hindi: "समान अवसर प्रकोष्ठ",
            english: "Equal Opportunity Cell",
          },
          href: "/Committees/eoc",
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
  Admissions: [
    {
      type: "header",
      label: {
        hindi: "प्रवेश जानकारी",
        english: "Admission Information",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "प्रवेश सूचना",
            english: "Admission Notice",
          },
          href: "https://admission.mgug.ac.in/",
        },
        {
          type: "link",
          label: {
            hindi: "विवरणिका",
            english: "Prospectus",
          },
          href: "/admission/prospectus",
        },
        {
          type: "link",
          label: {
            hindi: "शुल्क संरचना",
            english: "Fee Structure",
          },
          href: "/admission/fee-structure",
        },
      ],
    },
    {
      type: "header",
      label: {
        hindi: "कार्यक्रम",
        english: "Programs",
      },
      subSections: [
        {
          type: "link",
          label: {
            hindi: "कार्यक्रमों की सूची",
            english: "List of Programs",
          },
          href: "/admission/list-of-program",
        },
        {
          type: "link",
          label: {
            hindi: "प्रमाणन और डिप्लोमा",
            english: "Certification and Diploma",
          },
          href: "/admission/certification-and-diploma",
        },
        {
          type: "link",
          label: {
            hindi: "स्नातक कार्यक्रम",
            english: "Under Graduate Programs",
          },
          href: "/admission/under-graduate",
        },
        {
          type: "link",
          label: {
            hindi: "स्नातकोत्तर कार्यक्रम",
            english: "Post Graduate Programs",
          },
          href: "/admission/post-graduate",
        },
        {
          type: "link",
          label: {
            hindi: "पीएचडी कार्यक्रम",
            english: "Ph.D. Programs",
          },
          href: "/admission/phd-program",
        },
      ],
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
            english: "Guru Gorakshnath Institute of Medical Sciences(Ayurveda)",
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
  More: [
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
          href: "/photo-gallery",
        },
        {
          type: "link",
          label: {
            hindi: "वीडियो गैलरी",
            english: "Video Gallery",
          },
          href: "/video-gallery",
        },
        {
          type: "link",
          label: {
            hindi: "मीडिया कवरेज",
            english: "Media Coverage",
          },
          href: "/media-coverage",
        },
        {
          type: "link",
          label: {
            hindi: "समाचार",
            english: "News",
          },
          href: "/news",
        },
        {
          type: "link",
          label: {
            hindi: "डाउनलोड",
            english: "Downloads",
          },
          href: "/downloads",
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
          href: "/jobs",
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
