import type {
  AccreditationContent,
  AnnualReportsContent,
  AuditReportsContent,
  RecognitionContent,
} from "./types";

export const accreditationData: AccreditationContent = {
  pageTitle: {
    hindi: "प्रत्यायन / रैंकिंग",
    english: "Accreditation / Ranking",
  },
  statusHeading: {
    hindi: "प्रत्यायन/रैंकिंग स्थिति (नैक, एनबीए, एनआईआरएफ)",
    english: "Accreditation/Ranking status (NAAC, NBA, NIRF)",
  },
  mainParagraph: {
    hindi:
      "महायोगी गोरखनाथ विश्वविद्यालय (एमजीयूजी), २०२१ में स्थापित, एक विकासशील संस्थान है जो शैक्षणिक उत्कृष्टता और संस्थागत विकास के लिए प्रतिबद्ध है। हमारे छात्रों के पहले बैच के स्नातक होने का वर्तमान में इंतजार है। विश्वविद्यालय इन मान्यताओं के मानदंडों को पूरा करने के लिए अपनी शैक्षणिक, अनुसंधान और प्रशासनिक प्रणालियों को मजबूत करने के लिए सक्रिय रूप से काम कर रहा है। संबंधित वैधानिक निकायों द्वारा निर्धारित पात्रता समय-सीमा के अनुसार, प्रत्यायन और रैंकिंग के लिए आवेदन यथासमय शुरू किए जाएंगे।",
    english:
      "Mahayogi Gorakhnath University (MGUG) established in 2021 is a developing institution committed to academic excellence and institutional growth. The graduation of our first batch of students is currently awaited. The university is actively working to strengthen its academic, research, and administrative systems to meet the criteria for these recognitions. Accreditation and ranking applications will be initiated in due course, as per the eligibility timelines set by the respective statutory bodies.",
  },
};

export const recognitionData: RecognitionContent = {
  pageTitle: {
    hindi: "मान्यता / अनुमोदन",
    english: "Recognition / Approval",
  },
  tableHeadings: {
    body: {
      hindi: "मान्यता प्रदाता",
      english: "Recognizing Body",
    },
    link: {
      hindi: "लिंक",
      english: "Link",
    },
  },
  recognitions: [
    {
      name: {
        english: "UGC – University Grants Commission",
        hindi: "यूजीसी – विश्वविद्यालय अनुदान आयोग",
      },
      links: [{ url: "#", text: { english: "View", hindi: "देखें" } }],
    },
    {
      name: {
        english: "NMC – National Medical Commission",
        hindi: "एनएमसी – राष्ट्रीय आयुर्विज्ञान आयोग",
      },
      links: [{ url: "#", text: { english: "View", hindi: "देखें" } }],
    },
    {
      name: {
        english: "NCISM – National Commission for Indian System of Medicine",
        hindi: "एनसीआईएसएम – भारतीय चिकित्सा पद्धति राष्ट्रीय आयोग",
      },
      links: [{ url: "#", text: { english: "View", hindi: "देखें" } }],
    },
    {
      name: {
        english: "PCI – Pharmacy Council of India",
        hindi: "पीसीआई – फार्मेसी काउंसिल ऑफ इंडिया",
      },
      links: [{ url: "#", text: { english: "View", hindi: "देखें" } }],
    },
    {
      name: {
        english: "UPSMF – Uttar Pradesh State Medical Faculty",
        hindi: "यूपीएसएमएफ – उत्तर प्रदेश राज्य चिकित्सा संकाय",
      },
      links: [
        {
          url: "#",
          text: { english: "View (Nursing)", hindi: "देखें (नर्सिंग)" },
        },
        {
          url: "#",
          text: { english: "View (Paramedical)", hindi: "देखें (पैरामेडिकल)" },
        },
      ],
    },
  ],
};

export const annualReportsData: AnnualReportsContent = {
  pageTitle: {
    hindi: "वार्षिक रिपोर्ट",
    english: "Annual Reports",
  },
  linkText: {
    hindi: "डाउनलोड",
    english: "Download",
  },
  reports: [
    {
      title: "2022-23",
      url: "https://mgug.ac.in/PDF/AR_MGUG_2022-23.pdf",
    },
    {
      title: "2023-24",
      url: "https://mgug.ac.in/PDF/AR_MGUG_2023-24.pdf",
    },
    {
      title: "2024-25 (till April-25)",
      url: "https://mgug.ac.in/PDF/AR_MGUG_2024-25_till_april.pdf",
    },
  ],
};

export const auditReportsData: AuditReportsContent = {
  pageTitle: {
    hindi: "वित्त",
    english: "Finance",
  },
  sectionHeading: {
    hindi: "लेखा रिपोर्ट",
    english: "Audit Reports",
  },
  tableHeadings: {
    year: {
      hindi: "वित्तीय वर्ष",
      english: "Financial Year",
    },
    link: {
      hindi: "लिंक",
      english: "Link",
    },
  },
  reports: [
    {
      financialYear: "2021-22",
      url: "https://mgug.ac.in/PDF/Audit_Report_2021-22_MGUG.pdf",
    },
    {
      financialYear: "2022-23",
      url: "https://mgug.ac.in/PDF/Audit_Report_2022-23_MGUG.pdf",
    },
    {
      financialYear: "2023-24",
      url: "https://mgug.ac.in/PDF/Audit_Report_2023-24_MGUG.pdf",
    },
  ],
};
