import type {
  CertificationDiplomaContent,
  FeeStructureTitles,
  FeeStructureMember,
  UnderGraduateContent,
  ProgramsContent,
  ListProgramsStaticText,
  AdmissionGuidelinesContent,
  IQACTitles,
  IQACMember,
} from "./types";

export const feeStructureTitles: FeeStructureTitles = {
  heading: {
    hindi: "शुल्क संरचना",
    english: "Fee Structure",
  },
  tableHeaders: {
    srNo: {
      hindi: "क्र.सं.",
      english: "S.No.",
    },
    program: {
      hindi: "प्रस्तावित कार्यक्रम",
      english: "Programmes Offered",
    },
    seats: {
      hindi: "सीटों की संख्या",
      english: "No. of Seats",
    },
    fees: {
      hindi: "शुल्क (₹)",
      english: "Fees (₹)",
    },
  },
  note: {
    hindi:
      "*शुल्क में पीएच.डी. कार्यक्रमों को छोड़कर परीक्षा शुल्क शामिल नहीं है।",
    english: "*Fees exclude examination fees except for Ph.D. programs.",
  },
};

export const feeStructureData: FeeStructureMember[] = [
  {
    srNo: 1,
    name: {
      hindi: "एमबीबीएस",
      english: "MBBS",
    },
    seats: 100,
    fees: {
      hindi: "14,14,159 प्रति वर्ष",
      english: "14,14,159 per year",
    },
  },
  {
    srNo: 2,
    name: {
      hindi: "बीएएमएस",
      english: "BAMS",
    },
    seats: 100,
    fees: {
      hindi: "2,65,800 प्रति वर्ष",
      english: "2,65,800 per year",
    },
  },
  {
    srNo: 3,
    name: {
      hindi: "पीएच.डी. आयुर्वेद",
      english: "Ph.D. Ayurveda",
    },
    seats: 32,
    fees: {
      hindi:
        "1,25,000 (प्रथम वर्ष), 1,00,000 (द्वितीय वर्ष), 1,50,000 (अंतिम वर्ष)",
      english: "1,25,000 (1st Yr), 1,00,000 (2nd Yr), 1,50,000 (Last Yr)",
    },
  },
  {
    srNo: 4,
    name: {
      hindi: "एएनएम",
      english: "ANM",
    },
    seats: 100,
    fees: {
      hindi: "65,000 प्रति वर्ष",
      english: "65,000 per year",
    },
  },
  {
    srNo: 5,
    name: {
      hindi: "जीएनएम",
      english: "GNM",
    },
    seats: 100,
    fees: {
      hindi: "90,000 प्रति वर्ष",
      english: "90,000 per year",
    },
  },
  {
    srNo: 6,
    name: {
      hindi: "बेसिक बी.एससी. नर्सिंग",
      english: "Basic B.Sc. Nursing",
    },
    seats: 100,
    fees: {
      hindi: "60,000 प्रति सेमेस्टर",
      english: "60,000 per semester",
    },
  },
  {
    srNo: 7,
    name: {
      hindi: "पोस्ट बेसिक बी.एससी. नर्सिंग",
      english: "Post Basic B.Sc. Nursing",
    },
    seats: 20,
    fees: {
      hindi: "1,05,000 प्रति वर्ष",
      english: "1,05,000 per year",
    },
  },
  {
    srNo: 8,
    name: {
      hindi: "एम.एससी. नर्सिंग",
      english: "M.Sc. Nursing",
    },
    seats: 40,
    fees: {
      hindi: "1,30,000 प्रति वर्ष",
      english: "1,30,000 per year",
    },
  },
  {
    srNo: 9,
    name: {
      hindi: "डिप्लोमा इन लैब टेक्नीशियन",
      english: "Diploma in Lab Technician",
    },
    seats: 60,
    fees: {
      hindi: "55,000 प्रति वर्ष",
      english: "55,000 per year",
    },
  },
  {
    srNo: 10,
    name: {
      hindi: "डिप्लोमा इन ऑप्टोमेट्री",
      english: "Diploma in Optometry",
    },
    seats: 30,
    fees: {
      hindi: "55,000 प्रति वर्ष",
      english: "55,000 per year",
    },
  },
  {
    srNo: 11,
    name: {
      hindi: "डिप्लोमा इन एनेस्थीसिया एंड क्रिटिकल केयर टेक्नीशियन",
      english: "Diploma in Anaesthesia and Critical Care Technician",
    },
    seats: 30,
    fees: {
      hindi: "55,000 प्रति वर्ष",
      english: "55,000 per year",
    },
  },
  {
    srNo: 12,
    name: {
      hindi: "डिप्लोमा इन ऑर्थोपेडिक एंड प्लास्टर टेक्नीशियन",
      english: "Diploma in Orthopedic and Plaster Technician",
    },
    seats: 30,
    fees: {
      hindi: "55,000 प्रति वर्ष",
      english: "55,000 per year",
    },
  },
  {
    srNo: 13,
    name: {
      hindi: "डिप्लोमा इन इमरजेंसी एंड ट्रॉमा केयर टेक्नीशियन",
      english: "Diploma in Emergency and Trauma Care Technician",
    },
    seats: 30,
    fees: {
      hindi: "55,000 प्रति वर्ष",
      english: "55,000 per year",
    },
  },
  {
    srNo: 14,
    name: {
      hindi: "डिप्लोमा इन डायलिसिस टेक्नीशियन",
      english: "Diploma in Dialysis Technician",
    },
    seats: 30,
    fees: {
      hindi: "55,000 प्रति वर्ष",
      english: "55,000 per year",
    },
  },
  {
    srNo: 15,
    name: {
      hindi: "बी.एससी. (ऑनर्स/रिसर्च) बायोटेक्नोलॉजी एनईपी-2020 के अनुसार",
      english: "B.Sc. (Hons/Research) Biotechnology As per NEP-2020",
    },
    seats: 60,
    fees: {
      hindi: "25,000 प्रति सेमेस्टर",
      english: "25,000 per semester",
    },
  },
  {
    srNo: 16,
    name: {
      hindi: "बी.एससी. (ऑनर्स/रिसर्च) बायोकेमिस्ट्री एनईपी-2020 के अनुसार",
      english: "B.Sc. (Hons/Research) Biochemistry As per NEP-2020",
    },
    seats: 30,
    fees: {
      hindi: "25,000 प्रति सेमेस्टर",
      english: "25,000 per semester",
    },
  },
  {
    srNo: 17,
    name: {
      hindi: "बी.एससी. (ऑनर्स/रिसर्च) माइक्रोबायोलॉजी एनईपी-2020 के अनुसार",
      english: "B.Sc. (Hons/Research) Microbiology As per NEP-2020",
    },
    seats: 30,
    fees: {
      hindi: "25,000 प्रति सेमेस्टर",
      english: "25,000 per semester",
    },
  },
  {
    srNo: 18,
    name: {
      hindi:
        "बी.एससी. (ऑनर्स/रिसर्च) मेडिकल बायोकेमिस्ट्री एनईपी-2020 के अनुसार",
      english: "B.Sc. (Hons/Research) Medical Biochemistry As per NEP-2020",
    },
    seats: 30,
    fees: {
      hindi: "25,000 प्रति सेमेस्टर",
      english: "25,000 per semester",
    },
  },
  {
    srNo: 19,
    name: {
      hindi:
        "बी.एससी. (ऑनर्स/रिसर्च) मेडिकल माइक्रोबायोलॉजी एनईपी-2020 के अनुसार",
      english: "B.Sc. (Hons/Research) Medical Microbiology As per NEP-2020",
    },
    seats: 30,
    fees: {
      hindi: "25,000 प्रति सेमेस्टर",
      english: "25,000 per semester",
    },
  },
  {
    srNo: 20,
    name: {
      hindi: "एम.एससी. बायोटेक्नोलॉजी एनईपी-2020 के अनुसार",
      english: "M.Sc. Biotechnology As per NEP-2020",
    },
    seats: 30,
    fees: {
      hindi: "35,000 प्रति सेमेस्टर",
      english: "35,000 per semester",
    },
  },
  {
    srNo: 21,
    name: {
      hindi: "एम.एससी. मेडिकल बायोकेमिस्ट्री एनईपी-2020 के अनुसार",
      english: "M.Sc. Medical Biochemistry As per NEP-2020",
    },
    seats: 30,
    fees: {
      hindi: "35,000 प्रति सेमेस्टर",
      english: "35,000 per semester",
    },
  },
  {
    srNo: 22,
    name: {
      hindi: "एम.एससी. मेडिकल माइक्रोबायोलॉजी एनईपी-2020 के अनुसार",
      english: "M.Sc. Medical Microbiology As per NEP-2020",
    },
    seats: 30,
    fees: {
      hindi: "35,000 प्रति सेमेस्टर",
      english: "35,000 per semester",
    },
  },
  {
    srNo: 23,
    name: {
      hindi: "एम.एससी. बायोकेमिस्ट्री एनईपी-2020 के अनुसार",
      english: "M.Sc. Biochemistry As per NEP-2020",
    },
    seats: 30,
    fees: {
      hindi: "35,000 प्रति सेमेस्टर",
      english: "35,000 per semester",
    },
  },
  {
    srNo: 24,
    name: {
      hindi: "एम.एससी. माइक्रोबायोलॉजी एनईपी-2020 के अनुसार",
      english: "M.Sc. Microbiology As per NEP-2020",
    },
    seats: 30,
    fees: {
      hindi: "35,000 प्रति सेमेस्टर",
      english: "35,000 per semester",
    },
  },
  {
    srNo: 25,
    name: {
      hindi: "पीएच.डी. बायोटेक्नोलॉजी",
      english: "Ph.D. Biotechnology",
    },
    seats: 22,
    fees: {
      hindi:
        "1,25,000 (प्रथम वर्ष), 1,00,000 (द्वितीय वर्ष), 1,50,000 (अंतिम वर्ष)",
      english: "1,25,000 (1st Yr), 1,00,000 (2nd Yr), 1,50,000 (Last Yr)",
    },
  },
  {
    srNo: 26,
    name: {
      hindi: "पीएच.डी. बायोकेमिस्ट्री",
      english: "Ph.D. Biochemistry",
    },
    seats: 10,
    fees: {
      hindi:
        "1,25,000 (प्रथम वर्ष), 1,00,000 (द्वितीय वर्ष), 1,50,000 (अंतिम वर्ष)",
      english: "1,25,000 (1st Yr), 1,00,000 (2nd Yr), 1,50,000 (Last Yr)",
    },
  },
  {
    srNo: 27,
    name: {
      hindi: "पीएच.डी. माइक्रोबायोलॉजी",
      english: "Ph.D. Microbiology",
    },
    seats: 2,
    fees: {
      hindi:
        "1,25,000 (प्रथम वर्ष), 1,00,000 (द्वितीय वर्ष), 1,50,000 (अंतिम वर्ष)",
      english: "1,25,000 (1st Yr), 1,00,000 (2nd Yr), 1,50,000 (Last Yr)",
    },
  },
  {
    srNo: 28,
    name: {
      hindi: "पीएच.डी. मेडिकल बायोकेमिस्ट्री",
      english: "Ph.D. Medical Biochemistry",
    },
    seats: 8,
    fees: {
      hindi:
        "1,25,000 (प्रथम वर्ष), 1,00,000 (द्वितीय वर्ष), 1,50,000 (अंतिम वर्ष)",
      english: "1,25,000 (1st Yr), 1,00,000 (2nd Yr), 1,50,000 (Last Yr)",
    },
  },
  {
    srNo: 29,
    name: {
      hindi: "पीएच.डी. मेडिकल माइक्रोबायोलॉजी",
      english: "Ph.D. Medical Microbiology",
    },
    seats: 2,
    fees: {
      hindi:
        "1,25,000 (प्रथम वर्ष), 1,00,000 (द्वितीय वर्ष), 1,50,000 (अंतिम वर्ष)",
      english: "1,25,000 (1st Yr), 1,00,000 (2nd Yr), 1,50,000 (Last Yr)",
    },
  },
  {
    srNo: 30,
    name: {
      hindi: "डी.फार्म.",
      english: "D.Pharm.",
    },
    seats: 60,
    fees: {
      hindi: "90,000 प्रति वर्ष",
      english: "90,000 per year",
    },
  },
  {
    srNo: 31,
    name: {
      hindi: "बी.फार्म.",
      english: "B.Pharm.",
    },
    seats: 60,
    fees: {
      hindi: "55,000 प्रति सेमेस्टर",
      english: "55,000 per semester",
    },
  },
  {
    srNo: 32,
    name: {
      hindi: "बी.फार्म. लेटरल एंट्री (द्वितीय वर्ष)",
      english: "B.Pharm. Lateral Entry (2nd Year)",
    },
    seats: 6,
    fees: {
      hindi: "55,000 प्रति सेमेस्टर",
      english: "55,000 per semester",
    },
  },
  {
    srNo: 33,
    name: {
      hindi: "पीएच.डी. फार्मेसी",
      english: "Ph.D. Pharmacy",
    },
    seats: 1,
    fees: {
      hindi:
        "1,25,000 (प्रथम वर्ष), 1,00,000 (द्वितीय वर्ष), 1,50,000 (अंतिम वर्ष)",
      english: "1,25,000 (1st Yr), 1,00,000 (2nd Yr), 1,50,000 (Last Yr)",
    },
  },
  {
    srNo: 34,
    name: {
      hindi: "बी.एससी. (ऑनर्स) कृषि",
      english: "B.Sc. (Hons) Agriculture",
    },
    seats: 60,
    fees: {
      hindi: "25,000 प्रति सेमेस्टर",
      english: "25,000 per semester",
    },
  },
  {
    srNo: 35,
    name: {
      hindi: "पीएच.डी. कृषि",
      english: "Ph.D. Agriculture",
    },
    seats: 26,
    fees: {
      hindi:
        "1,25,000 (प्रथम वर्ष), 1,00,000 (द्वितीय वर्ष), 1,50,000 (अंतिम वर्ष)",
      english: "1,25,000 (1st Yr), 1,00,000 (2nd Yr), 1,50,000 (Last Yr)",
    },
  },
  {
    srNo: 36,
    name: {
      hindi: "बीबीए (ऑनर्स) लॉजिस्टिक्स एनईपी-2020 के अनुसार",
      english: "BBA (Hons) Logistics As per NEP-2020",
    },
    seats: 60,
    fees: {
      hindi: "30,000 प्रति सेमेस्टर",
      english: "30,000 per semester",
    },
  },
  {
    srNo: 37,
    name: {
      hindi: "बी.एससी. फोरेंसिक साइंस",
      english: "B.Sc. Forensic Science",
    },
    seats: 30,
    fees: {
      hindi: "35,000 प्रति सेमेस्टर",
      english: "35,000 per semester",
    },
  },
];

export const certificationDiplomaContent: CertificationDiplomaContent = {
  heading: {
    hindi: "प्रमाणन और डिप्लोमा कार्यक्रम",
    english: "Certification & Diploma Programs",
  },
  programs: {
    anm: {
      name: {
        hindi: "एएनएम",
        english: "ANM",
      },
      description: {
        hindi:
          "सहायक नर्स और मिडवाइफ (एएनएम) एक डिप्लोमा कोर्स है जो स्वास्थ्य देखभाल और मातृ-शिशु स्वास्थ्य सेवाओं में बुनियादी प्रशिक्षण प्रदान करता है।",
        english:
          "Auxiliary Nursing and Midwifery (ANM) is a diploma course that provides basic training in healthcare and maternal-child health services.",
      },
    },
    gnm: {
      name: {
        hindi: "जीएनएम",
        english: "GNM",
      },
      description: {
        hindi:
          "जनरल नर्सिंग और मिडवाइफरी (जीएनएम) एक डिप्लोमा कार्यक्रम है जो नर्सिंग और मिडवाइफरी में व्यापक प्रशिक्षण प्रदान करता है।",
        english:
          "General Nursing and Midwifery (GNM) is a diploma program that offers comprehensive training in nursing and midwifery.",
      },
    },
    labTechnician: {
      name: {
        hindi: "डिप्लोमा इन लैब टेक्नीशियन",
        english: "Diploma in Lab Technician",
      },
      description: {
        hindi:
          "यह डिप्लोमा चिकित्सा प्रयोगशालाओं में नैदानिक परीक्षण और प्रक्रियाओं के लिए प्रशिक्षण प्रदान करता है।",
        english:
          "This diploma provides training for diagnostic testing and procedures in medical laboratories.",
      },
    },
    dialysisTechnician: {
      name: {
        hindi: "डिप्लोमा इन डायलिसिस टेक्नीशियन",
        english: "Diploma in Dialysis Technician",
      },
      description: {
        hindi:
          "यह डिप्लोमा डायलिसिस मशीनों के संचालन और गुर्दे के रोगियों की देखभाल में विशेष प्रशिक्षण प्रदान करता है।",
        english:
          "This diploma offers specialized training in operating dialysis machines and caring for kidney patients.",
      },
    },
    optometry: {
      name: {
        hindi: "डिप्लोमा इन ऑप्टोमेट्री",
        english: "Diploma in Optometry",
      },
      description: {
        hindi:
          "यह डिप्लोमा नेत्र देखभाल, दृष्टि परीक्षण और ऑप्टिकल उपकरणों के उपयोग में प्रशिक्षण प्रदान करता है।",
        english:
          "This diploma provides training in eye care, vision testing, and the use of optical instruments.",
      },
    },
    emergencyTrauma: {
      name: {
        hindi: "डिप्लोमा इन इमरजेंसी एंड ट्रॉमा केयर टेक्नीशियन",
        english: "Diploma in Emergency & Trauma Care Technician",
      },
      description: {
        hindi:
          "यह डिप्लोमा आपातकालीन चिकित्सा और आघात देखभाल में त्वरित प्रतिक्रिया के लिए प्रशिक्षण प्रदान करता है।",
        english:
          "This diploma trains students in rapid response for emergency medical and trauma care.",
      },
    },
    anaesthesiaCriticalCare: {
      name: {
        hindi: "डिप्लोमा इन एनेस्थीसिया एंड क्रिटिकल केयर टेक्नीशियन",
        english: "Diploma in Anaesthesia & Critical Care Technician",
      },
      description: {
        hindi:
          "यह डिप्लोमा संज्ञाहरण प्रशासन और गंभीर देखभाल रोगियों के प्रबंधन में प्रशिक्षण प्रदान करता है।",
        english:
          "This diploma provides training in anaesthesia administration and critical care patient management.",
      },
    },
    orthopaedicPlaster: {
      name: {
        hindi: "डिप्लोमा इन ऑर्थोपेडिक एंड प्लास्टर टेक्नीशियन",
        english: "Diploma in Orthopaedic & Plaster Technician",
      },
      description: {
        hindi:
          "यह डिप्लोमा हड्डी रोग और प्लास्टर तकनीकों में प्रशिक्षण प्रदान करता है, जो हड्डी की चोटों के उपचार में सहायता करता है।",
        english:
          "This diploma provides training in orthopaedics and plaster techniques, aiding in the treatment of bone injuries.",
      },
    },
    dPharm: {
      name: {
        hindi: "डी. फार्म.",
        english: "D. Pharm",
      },
      description: {
        hindi:
          "फार्मेसी डिप्लोमा दवा वितरण और फार्मास्युटिकल देखभाल में प्रशिक्षण प्रदान करता है।",
        english:
          "The Diploma in Pharmacy provides training in drug dispensing and pharmaceutical care.",
      },
    },
  },
};

export const underGraduateContent: UnderGraduateContent = {
  heading: {
    hindi: "स्नातक कार्यक्रम",
    english: "Under Graduate Programs",
  },
  programs: {
    mbbs: {
      name: {
        hindi: "बैचलर ऑफ मेडिसिन, बैचलर ऑफ सर्जरी (एमबीबीएस)",
        english: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
      },
      description: {
        hindi:
          "एमबीबीएस एक पेशेवर चिकित्सा डिग्री है जो चिकित्सा और सर्जरी में व्यापक प्रशिक्षण प्रदान करती है।",
        english:
          "MBBS is a professional medical degree providing comprehensive training in medicine and surgery.",
      },
    },
    bams: {
      name: {
        hindi: "बैचलर ऑफ आयुर्वेद, मेडिसिन एंड सर्जरी (बीएएमएस)",
        english: "Bachelor of Ayurveda, Medicine and Surgery (BAMS)",
      },
      description: {
        hindi:
          "बीएएमएस आयुर्वेदिक चिकित्सा और सर्जरी में प्रशिक्षण प्रदान करता है, जो पारंपरिक भारतीय चिकित्सा पर केंद्रित है।",
        english:
          "BAMS provides training in Ayurvedic medicine and surgery, focusing on traditional Indian medicine.",
      },
    },
    basicBscNursing: {
      name: {
        hindi: "बेसिक बी.एससी. (नर्सिंग)",
        english: "Basic B.Sc. (Nursing)",
      },
      description: {
        hindi:
          "यह डिग्री नर्सिंग में बुनियादी प्रशिक्षण प्रदान करती है, जो रोगी देखभाल और स्वास्थ्य प्रबंधन पर केंद्रित है।",
        english:
          "This degree provides foundational training in nursing, focusing on patient care and health management.",
      },
    },
    postBasicBscNursing: {
      name: {
        hindi: "पोस्ट बेसिक बी.एससी. (नर्सिंग)",
        english: "Post Basic B.Sc. (Nursing)",
      },
      description: {
        hindi:
          "यह डिग्री नर्सिंग में उन्नत प्रशिक्षण प्रदान करती है, जो पहले से प्रशिक्षित नर्सों के लिए डिज़ाइन की गई है।",
        english:
          "This degree offers advanced training in nursing, designed for previously trained nurses.",
      },
    },
    bscAgriculture: {
      name: {
        hindi: "बी.एससी. (ऑनर्स) कृषि",
        english: "B.Sc. (H) Agriculture",
      },
      description: {
        hindi:
          "यह डिग्री कृषि विज्ञान और प्रौद्योगिकी में प्रशिक्षण प्रदान करती है, जो खेती और संबंधित क्षेत्रों पर केंद्रित है।",
        english:
          "This degree provides training in agricultural science and technology, focusing on farming and related fields.",
      },
    },
    bscBiotechnology: {
      name: {
        hindi: "बी.एससी. (ऑनर्स/रिसर्च) बायोटेक्नोलॉजी",
        english: "B.Sc. (Hons/Research) Biotechnology",
      },
      description: {
        hindi:
          "यह डिग्री जैव प्रौद्योगिकी में प्रशिक्षण प्रदान करती है, जो जैविक प्रक्रियाओं के तकनीकी अनुप्रयोग पर केंद्रित है।",
        english:
          "This degree provides training in biotechnology, focusing on the technical application of biological processes.",
      },
    },
    bscBiochemistry: {
      name: {
        hindi: "बी.एससी. (ऑनर्स/रिसर्च) बायोकेमिस्ट्री",
        english: "B.Sc. (Hons/Research) Biochemistry",
      },
      description: {
        hindi:
          "यह डिग्री जैव रसायन में प्रशिक्षण प्रदान करती है, जो जीवित जीवों में रासायनिक प्रक्रियाओं पर केंद्रित है।",
        english:
          "This degree provides training in biochemistry, focusing on chemical processes in living organisms.",
      },
    },
    bscMicrobiology: {
      name: {
        hindi: "बी.एससी. (ऑनर्स/रिसर्च) माइक्रोबायोलॉजी",
        english: "B.Sc. (Hons/Research) Microbiology",
      },
      description: {
        hindi:
          "यह डिग्री सूक्ष्मजीव विज्ञान में प्रशिक्षण प्रदान करती है, जो सूक्ष्मजीवों और उनके प्रभावों पर केंद्रित है।",
        english:
          "This degree provides training in microbiology, focusing on microorganisms and their effects.",
      },
    },
    bscMedicalBiochemistry: {
      name: {
        hindi: "बी.एससी. (ऑनर्स/रिसर्च) मेडिकल बायोकेमिस्ट्री",
        english: "B.Sc. (Hons/Research) Medical Biochemistry",
      },
      description: {
        hindi:
          "यह डिग्री चिकित्सा जैव रसायन में प्रशिक्षण प्रदान करती है, जो चिकित्सा निदान और अनुसंधान पर केंद्रित है।",
        english:
          "This degree provides training in medical biochemistry, focusing on medical diagnostics and research.",
      },
    },
    bscMedicalMicrobiology: {
      name: {
        hindi: "बी.एससी. (ऑनर्स/रिसर्च) मेडिकल माइक्रोबायोलॉजी",
        english: "B.Sc. (Hons/Research) Medical Microbiology",
      },
      description: {
        hindi:
          "यह डिग्री चिकित्सा सूक्ष्मजीव विज्ञान में प्रशिक्षण प्रदान करती है, जो रोग निदान और उपचार पर केंद्रित है।",
        english:
          "This degree provides training in medical microbiology, focusing on disease diagnosis and treatment.",
      },
    },
    bPharm: {
      name: {
        hindi: "बी. फार्म",
        english: "B. Pharm",
      },
      description: {
        hindi:
          "यह डिग्री फार्मेसी में प्रशिक्षण प्रदान करती है, जो दवा विकास और वितरण पर केंद्रित है।",
        english:
          "This degree provides training in pharmacy, focusing on drug development and dispensing.",
      },
    },
    bPharmLateral: {
      name: {
        hindi: "बी. फार्म लेटरल एंट्री (द्वितीय वर्ष)",
        english: "B. Pharm Lateral Entry (2nd Year)",
      },
      description: {
        hindi:
          "यह डिग्री डिप्लोमा धारकों के लिए फार्मेसी में उन्नत प्रशिक्षण प्रदान करती है, जो दूसरे वर्ष से शुरू होती है।",
        english:
          "This degree offers advanced pharmacy training for diploma holders, starting from the second year.",
      },
    },
    bbaLogistics: {
      name: {
        hindi: "बीबीए (ऑनर्स) लॉजिस्टिक्स",
        english: "BBA (Hons) Logistics",
      },
      description: {
        hindi:
          "यह डिग्री लॉजिस्टिक्स और आपूर्ति श्रृंखला प्रबंधन में प्रशिक्षण प्रदान करती है।",
        english:
          "This degree provides training in logistics and supply chain management.",
      },
    },
    bscForensicScience: {
      name: {
        hindi: "बी.एससी. फोरेंसिक साइंस",
        english: "B.Sc. Forensic Science",
      },
      description: {
        hindi:
          "यह डिग्री फोरेंसिक विज्ञान में प्रशिक्षण प्रदान करती है, जो अपराध जांच और साक्ष्य विश्लेषण पर केंद्रित है।",
        english:
          "This degree provides training in forensic science, focusing on crime investigation and evidence analysis.",
      },
    },
  },
};

export const listProgramsContent: ProgramsContent = {
  heading: {
    hindi: "हम विभिन्न विषयों में विविध प्रकार के कार्यक्रम प्रदान करते हैं।",
    english:
      "We offers a diverse range of programs across various disciplines.",
  },
  faculties: [
    {
      name: {
        hindi: "श्री गोरक्षनाथ मेडिकल कॉलेज हॉस्पिटल और रिसर्च सेंटर",
        english:
          "Shri Gorakshnath Medical College Hospital and Research Centre",
      },
      programs: [
        {
          name: { hindi: "एमबीबीएस", english: "MBBS" },
          duration: { hindi: "5.5 वर्ष", english: "5.5 years" },
          fees: { hindi: "₹14,14,159", english: "₹14,14,159" },
          examinationFee: { hindi: "-", english: "-" },
          seats: { hindi: "कुल: 100", english: "Total: 100" },
          qualification: [
            { hindi: "10+2 में जीव विज्ञान।", english: "10+2 in Biology." },
            { hindi: "नीट यूजी।", english: "NEET UG." },
          ],
          note: {
            hindi:
              "एमबीबीएस पाठ्यक्रम में प्रवेश केवल नीट काउंसलिंग के माध्यम से होता है।",
            english:
              "Admission to MBBS course is conducted through NEET counselling only.",
          },
        },
      ],
    },
    {
      name: {
        hindi: "गुरु गोरक्षनाथ आयुर्वेद चिकित्सा विज्ञान संस्थान",
        english:
          "Guru Gorakshnath Institute of Medical Sciences (Ayurveda College)",
      },
      programs: [
        {
          name: { hindi: "पीएचडी आयुर्वेद", english: "PhD Ayurveda" },
          duration: { hindi: "-", english: "-" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 32", english: "Total: 32" },
          qualification: [
            {
              hindi:
                "राष्ट्रीय भारतीय चिकित्सा आयोग (पहले केंद्रीय भारतीय चिकित्सा परिषद (सीसीआईएम)) द्वारा मान्यता प्राप्त संबंधित या संबद्ध विषयों में एम.डी.(आयु.)/एम.एस.(आयु.) या किसी भी संबद्ध विषयों में मास्टर डिग्री जैसे एम.डी./एम.एस., एम.फार्मा (आयुर्वेद), एम.फार्मा, एम.एससी., एम.वी.एससी, एम.ई., या एम.टेक डिग्री, सरकार द्वारा मान्यता प्राप्त संस्थान से न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "M.D.(Ay.)/M.S.(Ay.) in the concerned or allied subjects recognized by National Commission for Indian System of Medicine (earlier Central Council of Indian Medicine (CCIM)) OR Master's degree in any one of the allied subjects viz. M.D./M.S., M.Pharma (Ayurveda), M.Pharma, M.Sc., M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
        {
          name: { hindi: "बीएएमएस", english: "BAMS" },
          duration: { hindi: "5.5 वर्ष", english: "5.5 years" },
          fees: {
            hindi: "₹265800/- प्रति प्रोफेशनल वर्ष",
            english: "₹265800/- per professional year",
          },
          examinationFee: {
            hindi: "₹15000/- प्रति प्रोफेशनल वर्ष",
            english: "₹15000/- per professional year",
          },
          seats: { hindi: "कुल: 100", english: "Total: 100" },
          qualification: [
            { hindi: "10+2 में जीव विज्ञान।", english: "10+2 in Biology." },
            { hindi: "नीट यूजी।", english: "NEET UG." },
          ],
          note: {
            hindi:
              "बीएएमएस पाठ्यक्रम में प्रवेश केवल नीट काउंसलिंग के माध्यम से होता है।",
            english:
              "Admission to BAMS course is conducted through NEET counselling only.",
          },
        },
      ],
    },
    {
      name: {
        hindi: "नर्सिंग और पैरामेडिकल संकाय",
        english: "Faculty of Nursing and Paramedical",
      },
      programs: [
        {
          name: {
            hindi:
              "नर्स प्रैक्टिशनर इन क्रिटिकल केयर (पोस्ट ग्रेजुएट रेजिडेंसी) प्रोग्राम (एनपीसीसी)",
            english:
              "Nurse Practitioner in Critical Care (Post Graduate Residency) Programme (NPCC)",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: {
            hindi: "₹130000/- प्रति वर्ष",
            english: "₹130000/- per year",
          },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: { hindi: "कुल: 10", english: "Total: 10" },
          qualification: [
            {
              hindi:
                "पंजीकृत बी.एससी./पी.बी.बी.एससी. नर्स होना चाहिए, जिसमें नामांकन से पहले किसी भी क्रिटिकल केयर सेटिंग में कम से कम एक वर्ष का नैदानिक अनुभव हो।",
              english:
                "Applicants must be a registered B.Sc./P.B.B.Sc. Nurse with a minimum of one-year clinical experience, preferably in any critical care setting prior to enrollment.",
            },
            {
              hindi:
                "भारतीय नर्सिंग परिषद द्वारा मान्यता प्राप्त संस्थान में बी.एससी./पी.बी.बी.एससी. नर्सिंग प्रोग्राम पूरा किया हो।",
              english:
                "Must have undergone the B.Sc./P.B.B.Sc. Nursing Program in an institution recognized by the Indian Nursing Council.",
            },
            {
              hindi:
                "बी.एससी./पी.बी.बी.एससी. नर्सिंग प्रोग्राम में कम से कम 55% कुल अंक प्राप्त किए हों।",
              english:
                "Must have scored not less than 55% aggregate marks in B.Sc./P.B.B.Sc. Nursing Program.",
            },
          ],
        },
        {
          name: { hindi: "एएनएम", english: "ANM" },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹65000/- प्रति वर्ष", english: "₹65000/- per year" },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: {
            hindi: "कुल: 100 (ईडब्ल्यूएस: 10, टीएफडब्ल्यू: 5 सहित)",
            english: "Total: 100 (including EWS: 10, TFW: 5)",
          },
          qualification: [
            {
              hindi: "किसी भी विषय में 10+2।",
              english: "10+2 in any discipline.",
            },
            {
              hindi: "31 दिसंबर 2025 तक न्यूनतम आयु 17 वर्ष।",
              english: "Minimum age 17 till 31st December 2025.",
            },
            {
              hindi: "31 दिसंबर 2025 तक अधिकतम आयु 30 वर्ष।",
              english: "Maximum age 30 years till 31st December 2025.",
            },
            { hindi: "केवल महिलाएँ।", english: "Female only." },
          ],
        },
        {
          name: { hindi: "जीएनएम", english: "GNM" },
          duration: { hindi: "3 वर्ष", english: "3 years" },
          fees: { hindi: "-", english: "-" },
          examinationFee: { hindi: "-", english: "-" },
          seats: { hindi: "कुल: 100", english: "Total: 100" },
          qualification: [
            {
              hindi:
                "40% अंकों के साथ पंजीकृत एएनएम राज्य नर्स पंजीकरण परिषद प्रमाणपत्र / अनिवार्य अंग्रेजी के साथ 40% अंकों के साथ 10+2 साइंस।",
              english:
                "Registered ANM state nurse's registration council certificate with 40% marks / 10+2 Science with compulsory English with 40% marks.",
            },
            {
              hindi: "31 दिसंबर 2025 तक न्यूनतम आयु 17 वर्ष।",
              english: "Minimum age 17 years till 31st December 2025.",
            },
            {
              hindi: "31 दिसंबर 2025 तक अधिकतम आयु 35 वर्ष।",
              english: "Maximum age 35 years till 31st December 2025.",
            },
            { hindi: "केवल महिलाएँ।", english: "Female only." },
          ],
          note: {
            hindi:
              "जीएनएम पाठ्यक्रम में प्रवेश केवल यूपीएसएमएफ काउंसलिंग के माध्यम से होता है।",
            english:
              "Admission to GNM course is conducted through UPSMF counselling only.",
          },
        },
        {
          name: {
            hindi: "बेसिक बी.एससी. नर्सिंग",
            english: "Basic B.Sc. Nursing",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi: "₹60000/- प्रति सेमेस्टर",
            english: "₹60000/- per semester",
          },
          examinationFee: {
            hindi: "₹5000/- प्रति सेमेस्टर",
            english: "₹5000/- per semester",
          },
          seats: {
            hindi: "कुल: 100 (ईडब्ल्यूएस: 10, टीएफडब्ल्यू: 5 सहित)",
            english: "Total: 100 (including EWS: 10, TFW: 5)",
          },
          qualification: [
            {
              hindi:
                "45% अंकों के साथ अनिवार्य अंग्रेजी के साथ 10+2 साइंस (पीसीबी)।",
              english:
                "10+2 Science (PCB) with compulsory English with 45% marks.",
            },
            {
              hindi: "31 दिसंबर 2025 तक न्यूनतम आयु 17 वर्ष।",
              english: "Minimum age 17 years till 31st December 2025.",
            },
            {
              hindi: "महिला और पुरुष दोनों आवेदन कर सकते हैं।",
              english: "Female and Male can apply.",
            },
          ],
        },
        {
          name: {
            hindi: "पोस्ट बेसिक बी.एससी. नर्सिंग",
            english: "Post Basic B.Sc. Nursing",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: {
            hindi: "₹105000/- प्रति वर्ष",
            english: "₹105000/- per year",
          },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: {
            hindi: "कुल: 20 (ईडब्ल्यूएस: 2, टीएफडब्ल्यू: 1 सहित)",
            english: "Total: 20 (including EWS: 2, TFW: 1)",
          },
          qualification: [
            {
              hindi: "राज्य नर्सिंग पंजीकरण परिषद के साथ पंजीकृत जीएनएम।",
              english:
                "Registered GNM with state nursing registration council certificate.",
            },
            {
              hindi: "महिला और पुरुष दोनों आवेदन कर सकते हैं।",
              english: "Female and Male can apply.",
            },
          ],
        },
        {
          name: { hindi: "एम.एससी. नर्सिंग", english: "M.Sc. Nursing" },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: {
            hindi: "₹130000/- प्रति वर्ष",
            english: "₹130000/- per year",
          },
          examinationFee: {
            hindi: "₹6000/- प्रति वर्ष",
            english: "₹6000/- per year",
          },
          seats: {
            hindi: "कुल: 40 (ईडब्ल्यूएस: 4, टीएफडब्ल्यू: 2 सहित)",
            english: "Total: 40 (including EWS: 4, TFW: 2)",
          },
          qualification: [
            {
              hindi:
                "55% कुल अंकों के साथ बी.एससी. नर्सिंग/बी.एससी. ऑनर्स नर्सिंग/पोस्ट बेसिक बी.एससी. नर्सिंग।",
              english:
                "B.Sc. Nursing/B.Sc. Hons. Nursing/Post Basic B.Sc. Nursing with minimum of 55% aggregate marks.",
            },
            {
              hindi:
                "पंजीकृत नर्स और पंजीकृत मिडवाइफ। बेसिक बी.एससी. नर्सिंग के बाद न्यूनतम एक वर्ष का कार्य अनुभव।",
              english:
                "Registered Nurse and Registered Midwife. Minimum one year of work experience after Basic B.Sc. Nursing.",
            },
            {
              hindi:
                "पोस्ट बेसिक बी.एससी. नर्सिंग से पहले या बाद में एक वर्ष का कार्य अनुभव।",
              english:
                "One year of work experience prior or after Post Basic B.Sc. Nursing.",
            },
            {
              hindi: "महिला और पुरुष दोनों आवेदन कर सकते हैं।",
              english: "Female and Male can apply.",
            },
          ],
        },
        {
          name: {
            hindi: "डिप्लोमा इन लैब टेक्नीशियन",
            english: "Diploma in Lab Technician",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹55000/- प्रति वर्ष", english: "₹55000/- per year" },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: {
            hindi: "कुल: 60 (ईडब्ल्यूएस: 6, टीएफडब्ल्यू: 3 सहित)",
            english: "Total: 60 (including EWS: 6, TFW: 3)",
          },
          qualification: [
            {
              hindi: "35% अंकों के साथ 10+2 साइंस (पीसीबी/पीसीएम)।",
              english: "10+2 Science (PCB/PCM) with 35% marks.",
            },
            {
              hindi: "31 दिसंबर 2025 तक न्यूनतम आयु 17 वर्ष।",
              english: "Minimum age 17 years till 31st December 2025.",
            },
          ],
        },
        {
          name: {
            hindi: "डिप्लोमा इन ऑप्टोमेट्री",
            english: "Diploma in Optometry",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹55000/- प्रति वर्ष", english: "₹55000/- per year" },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: {
            hindi: "कुल: 30 (ईडब्ल्यूएस: 3, टीएफडब्ल्यू: 2 सहित)",
            english: "Total: 30 (including EWS: 3, TFW: 2)",
          },
          qualification: [
            {
              hindi: "35% अंकों के साथ 10+2 साइंस (पीसीबी/पीसीएम)।",
              english: "10+2 Science (PCB/PCM) with 35% marks.",
            },
            {
              hindi: "31 दिसंबर 2025 तक न्यूनतम आयु 17 वर्ष।",
              english: "Minimum age 17 years till 31st December 2025.",
            },
          ],
        },
        {
          name: {
            hindi: "डिप्लोमा इन एनेस्थीसिया एंड क्रिटिकल केयर टेक्नीशियन",
            english: "Diploma in Anaesthesia and Critical Care Technician",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹55000/- प्रति वर्ष", english: "₹55000/- per year" },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: {
            hindi: "कुल: 30 (ईडब्ल्यूएस: 3, टीएफडब्ल्यू: 2 सहित)",
            english: "Total: 30 (including EWS: 3, TFW: 2)",
          },
          qualification: [
            {
              hindi: "35% अंकों के साथ 10+2 साइंस (पीसीबी/पीसीएम)।",
              english: "10+2 Science (PCB/PCM) with 35% marks.",
            },
            {
              hindi: "31 दिसंबर 2025 तक न्यूनतम आयु 17 वर्ष।",
              english: "Minimum age 17 years till 31st December 2025.",
            },
          ],
        },
        {
          name: {
            hindi: "डिप्लोमा इन ऑर्थोपेडिक एंड प्लास्टर टेक्नीशियन",
            english: "Diploma in Orthopedic and Plaster Technician",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹55000/- प्रति वर्ष", english: "₹55000/- per year" },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: {
            hindi: "कुल: 30 (ईडब्ल्यूएस: 3, टीएफडब्ल्यू: 2 सहित)",
            english: "Total: 30 (including EWS: 3, TFW: 2)",
          },
          qualification: [
            {
              hindi: "35% अंकों के साथ 10+2 साइंस (पीसीबी/पीसीएम)।",
              english: "10+2 Science (PCB/PCM) with 35% marks.",
            },
            {
              hindi: "31 दिसंबर 2025 तक न्यूनतम आयु 17 वर्ष।",
              english: "Minimum age 17 years till 31st December 2025.",
            },
          ],
        },
        {
          name: {
            hindi: "डिप्लोमा इन इमरजेंसी एंड ट्रॉमा केयर टेक्नीशियन",
            english: "Diploma in Emergency and Trauma Care Technician",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹55000/- प्रति वर्ष", english: "₹55000/- per year" },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: {
            hindi: "कुल: 30 (ईडब्ल्यूएस: 3, टीएफडब्ल्यू: 2 सहित)",
            english: "Total: 30 (including EWS: 3, TFW: 2)",
          },
          qualification: [
            {
              hindi: "35% अंकों के साथ 10+2 साइंस (पीसीबी/पीसीएम)।",
              english: "10+2 Science (PCB/PCM) with 35% marks.",
            },
            {
              hindi: "31 दिसंबर 2025 तक न्यूनतम आयु 17 वर्ष।",
              english: "Minimum age 17 years till 31st December 2025.",
            },
          ],
        },
        {
          name: {
            hindi: "डिप्लोमा इन डायलिसिस टेक्नीशियन",
            english: "Diploma in Dialysis Technician",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹55000/- प्रति वर्ष", english: "₹55000/- per year" },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: {
            hindi: "कुल: 30 (ईडब्ल्यूएस: 3, टीएफडब्ल्यू: 2 सहित)",
            english: "Total: 30 (including EWS: 3, TFW: 2)",
          },
          qualification: [
            {
              hindi: "35% अंकों के साथ 10+2 साइंस (पीसीबी/पीसीएम)।",
              english: "10+2 Science (PCB/PCM) with 35% marks.",
            },
            {
              hindi: "31 दिसंबर 2025 तक न्यूनतम आयु 17 वर्ष।",
              english: "Minimum age 17 years till 31st December 2025.",
            },
          ],
        },
      ],
    },
    {
      name: {
        hindi: "सहायक स्वास्थ्य विज्ञान संकाय",
        english: "Faculty of Allied Health Sciences",
      },
      programs: [
        {
          name: {
            hindi: "बी.एससी. फोरेंसिक साइंस",
            english: "B.Sc. in Forensic Science",
          },
          duration: { hindi: "3 वर्ष", english: "3 years" },
          fees: {
            hindi: "₹35000/- प्रति सेमेस्टर",
            english: "₹35000/- per semester",
          },
          examinationFee: { hindi: "-", english: "-" },
          seats: { hindi: "कुल: 30", english: "Total: 30" },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त केंद्रीय/राज्य बोर्ड से 10+2 या समकक्ष प्रणाली में पीसीएम/पीसीबी के साथ न्यूनतम 45% कुल अंक या समकक्ष ग्रेड (एससी/एसटी श्रेणी के लिए 40% अंक या समकक्ष ग्रेड)।",
              english:
                "10+2 or equivalent system from any recognized Central/State Board in PCM/PCB with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.",
            },
          ],
        },
        {
          name: {
            hindi: "बी.एससी. (ऑनर्स/रिसर्च) बायोटेक्नोलॉजी",
            english: "B.Sc. (Hons/Research) Biotechnology",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi: "₹25000/- प्रति सेमेस्टर",
            english: "₹25000/- per semester",
          },
          examinationFee: {
            hindi: "₹2500/- प्रति सेमेस्टर",
            english: "₹2500/- per semester",
          },
          seats: { hindi: "कुल: 60", english: "Total: 60" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 6, टीएफडब्ल्यू: 3",
            english: "EWS: 6, TFW: 3",
          },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त केंद्रीय/राज्य बोर्ड से 10+2 या समकक्ष प्रणाली में भौतिकी और जीव विज्ञान अनिवार्य विषय के साथ रसायन विज्ञान/बायोटेक्नोलॉजी/कंप्यूटर विज्ञान के साथ न्यूनतम 45% कुल अंक या समकक्ष ग्रेड (एससी/एसटी श्रेणी के लिए 40% अंक या समकक्ष ग्रेड)।",
              english:
                "10+2 or equivalent system from any recognized Central/State Board with Physics and Biology as compulsory subject along with Chemistry/Biotechnology/Computer Science with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.",
            },
          ],
        },
        {
          name: {
            hindi: "बी.एससी. (ऑनर्स/रिसर्च) बायोकेमिस्ट्री",
            english: "B.Sc. (Hons/Research) Biochemistry",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi: "₹25000/- प्रति सेमेस्टर",
            english: "₹25000/- per semester",
          },
          examinationFee: {
            hindi: "₹2500/- प्रति सेमेस्टर",
            english: "₹2500/- per semester",
          },
          seats: { hindi: "कुल: 30", english: "Total: 30" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 3, टीएफडब्ल्यू: 2",
            english: "EWS: 3, TFW: 2",
          },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त केंद्रीय/राज्य बोर्ड से 10+2 या समकक्ष प्रणाली में भौतिकी और जीव विज्ञान अनिवार्य विषय के साथ रसायन विज्ञान/बायोटेक्नोलॉजी/कंप्यूटर विज्ञान के साथ न्यूनतम 45% कुल अंक या समकक्ष ग्रेड (एससी/एसटी श्रेणी के लिए 40% अंक या समकक्ष ग्रेड)।",
              english:
                "10+2 or equivalent system from any recognized Central/State Board with Physics and Biology as compulsory subject along with Chemistry/Biotechnology/Computer Science with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.",
            },
          ],
        },
        {
          name: {
            hindi: "बी.एससी. (ऑनर्स/रिसर्च) माइक्रोबायोलॉजी",
            english: "B.Sc. (Hons/Research) Microbiology",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi: "₹25000/- प्रति सेमेस्टर",
            english: "₹25000/- per semester",
          },
          examinationFee: {
            hindi: "₹2500/- प्रति सेमेस्टर",
            english: "₹2500/- per semester",
          },
          seats: { hindi: "कुल: 60", english: "Total: 60" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 6, टीएफडब्ल्यू: 3",
            english: "EWS: 6, TFW: 3",
          },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त केंद्रीय/राज्य बोर्ड से 10+2 या समकक्ष प्रणाली में भौतिकी और जीव विज्ञान अनिवार्य विषय के साथ रसायन विज्ञान/बायोटेक्नोलॉजी/कंप्यूटर विज्ञान के साथ न्यूनतम 45% कुल अंक या समकक्ष ग्रेड (एससी/एसटी श्रेणी के लिए 40% अंक या समकक्ष ग्रेड)।",
              english:
                "10+2 or equivalent system from any recognized Central/State Board with Physics and Biology as compulsory subject along with Chemistry/Biotechnology/Computer Science with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.",
            },
          ],
        },
        {
          name: {
            hindi: "बी.एससी. (ऑनर्स/रिसर्च) मेडिकल बायोकेमिस्ट्री",
            english: "B.Sc. (Hons/Research) Medical Biochemistry",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi: "₹25000/- प्रति सेमेस्टर",
            english: "₹25000/- per semester",
          },
          examinationFee: {
            hindi: "₹2500/- प्रति सेमेस्टर",
            english: "₹2500/- per semester",
          },
          seats: { hindi: "कुल: 60", english: "Total: 60" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 6, टीएफडब्ल्यू: 3",
            english: "EWS: 6, TFW: 3",
          },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त केंद्रीय/राज्य बोर्ड से 10+2 या समकक्ष प्रणाली में भौतिकी और जीव विज्ञान अनिवार्य विषय के साथ रसायन विज्ञान/बायोटेक्नोलॉजी/कंप्यूटर विज्ञान के साथ न्यूनतम 45% कुल अंक या समकक्ष ग्रेड (एससी/एसटी श्रेणी के लिए 40% अंक या समकक्ष ग्रेड)।",
              english:
                "10+2 or equivalent system from any recognized Central/State Board with Physics and Biology as compulsory subject along with Chemistry/Biotechnology/Computer Science with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.",
            },
          ],
        },
        {
          name: {
            hindi: "बी.एससी. (ऑनर्स/रिसर्च) मेडिकल माइक्रोबायोलॉजी",
            english: "B.Sc. (Hons/Research) Medical Microbiology",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi: "₹25000/- प्रति सेमेस्टर",
            english: "₹25000/- per semester",
          },
          examinationFee: {
            hindi: "₹2500/- प्रति सेमेस्टर",
            english: "₹2500/- per semester",
          },
          seats: { hindi: "कुल: 60", english: "Total: 60" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 6, टीएफडब्ल्यू: 3",
            english: "EWS: 6, TFW: 3",
          },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त केंद्रीय/राज्य बोर्ड से 10+2 या समकक्ष प्रणाली में भौतिकी और जीव विज्ञान अनिवार्य विषय के साथ रसायन विज्ञान/बायोटेक्नोलॉजी/कंप्यूटर विज्ञान के साथ न्यूनतम 45% कुल अंक या समकक्ष ग्रेड (एससी/एसटी श्रेणी के लिए 40% अंक या समकक्ष ग्रेड)।",
              english:
                "10+2 or equivalent system from any recognized Central/State Board with Physics and Biology as compulsory subject along with Chemistry/Biotechnology/Computer Science with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.",
            },
          ],
        },
        {
          name: {
            hindi: "एम.एससी. बायोटेक्नोलॉजी",
            english: "M.Sc. Biotechnology",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: {
            hindi: "₹35000/- प्रति सेमेस्टर",
            english: "₹35000/- per semester",
          },
          examinationFee: {
            hindi: "₹3000/- प्रति सेमेस्टर",
            english: "₹3000/- per semester",
          },
          seats: { hindi: "कुल: 30", english: "Total: 30" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 3, टीएफडब्ल्यू: 2",
            english: "EWS: 3, TFW: 2",
          },
          qualification: [
            {
              hindi:
                "जीवन विज्ञान (जूलॉजी, बॉटनी, पर्यावरण विज्ञान, बायोकेमिस्ट्री, मेडिकल साइंस) में स्नातक या किसी मान्यता प्राप्त विश्वविद्यालय या AICTE मान्यता प्राप्त संस्थान/कॉलेज से समकक्ष, न्यूनतम 45% कुल अंक या 5.0 का CGPA (एससी/एसटी श्रेणी के लिए 40% अंक या 4.5 का CGPA)।",
              english:
                "Graduation in Life Science (Zoology, Botany, Environmental Science, Biochemistry, Medical Science) or equivalent from any recognized University or AICTE recognized Institute/College with minimum aggregate marks of 45% or CGPA of 5.0 for GEN/OBC and 40% marks or CGPA of 4.5 for SC/ST Category.",
            },
          ],
        },
        {
          name: {
            hindi: "एम.एससी. मेडिकल बायोकेमिस्ट्री",
            english: "M.Sc. Medical Biochemistry",
          },
          duration: { hindi: "3 वर्ष", english: "3 years" },
          fees: {
            hindi: "₹35000/- प्रति सेमेस्टर",
            english: "₹35000/- per semester",
          },
          examinationFee: {
            hindi: "₹3000/- प्रति सेमेस्टर",
            english: "₹3000/- per semester",
          },
          seats: { hindi: "कुल: 30", english: "Total: 30" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 3, टीएफडब्ल्यू: 2",
            english: "EWS: 3, TFW: 2",
          },
          qualification: [
            {
              hindi:
                "जीवन विज्ञान (जूलॉजी, बॉटनी, पर्यावरण विज्ञान, बायोकेमिस्ट्री, मेडिकल साइंस) में स्नातक या किसी मान्यता प्राप्त विश्वविद्यालय या AICTE मान्यता प्राप्त संस्थान/कॉलेज से समकक्ष, न्यूनतम 45% कुल अंक या 5.0 का CGPA (एससी/एसटी श्रेणी के लिए 40% अंक या 4.5 का CGPA)।",
              english:
                "Graduation in Life Science (Zoology, Botany, Environmental Science, Biochemistry, Medical Science) or equivalent from any recognized University or AICTE recognized Institute/College with minimum aggregate marks of 45% or CGPA of 5.0 for GEN/OBC and 40% marks or CGPA of 4.5 for SC/ST Category.",
            },
          ],
        },
        {
          name: {
            hindi: "एम.एससी. मेडिकल माइक्रोबायोलॉजी",
            english: "M.Sc. Medical Microbiology",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: {
            hindi: "₹35000/- प्रति सेमेस्टर",
            english: "₹35000/- per semester",
          },
          examinationFee: {
            hindi: "₹3000/- प्रति सेमेस्टर",
            english: "₹3000/- per semester",
          },
          seats: { hindi: "कुल: 30", english: "Total: 30" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 3, टीएफडब्ल्यू: 2",
            english: "EWS: 3, TFW: 2",
          },
          qualification: [
            {
              hindi:
                "जीवन विज्ञान (जूलॉजी, बॉटनी, पर्यावरण विज्ञान, बायोकेमिस्ट्री, मेडिकल साइंस) में स्नातक या किसी मान्यता प्राप्त विश्वविद्यालय या AICTE मान्यता प्राप्त संस्थान/कॉलेज से समकक्ष, न्यूनतम 45% कुल अंक या 5.0 का CGPA (एससी/एसटी श्रेणी के लिए 40% अंक या 4.5 का CGPA)।",
              english:
                "Graduation in Life Science (Zoology, Botany, Environmental Science, Biochemistry, Medical Science) or equivalent from any recognized University or AICTE recognized Institute/College with minimum aggregate marks of 45% or CGPA of 5.0 for GEN/OBC and 40% marks or CGPA of 4.5 for SC/ST Category.",
            },
          ],
        },
        {
          name: {
            hindi: "एम.एससी. बायोकेमिस्ट्री",
            english: "M.Sc. Biochemistry",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: {
            hindi: "₹35000/- प्रति सेमेस्टर",
            english: "₹35000/- per semester",
          },
          examinationFee: {
            hindi: "₹3000/- प्रति सेमेस्टर",
            english: "₹3000/- per semester",
          },
          seats: { hindi: "कुल: 30", english: "Total: 30" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 3, टीएफडब्ल्यू: 2",
            english: "EWS: 3, TFW: 2",
          },
          qualification: [
            {
              hindi:
                "जीवन विज्ञान (जूलॉजी, बॉटनी, पर्यावरण विज्ञान, बायोकेमिस्ट्री, मेडिकल साइंस) में स्नातक या किसी मान्यता प्राप्त विश्वविद्यालय या AICTE मान्यता प्राप्त संस्थान/कॉलेज से समकक्ष, न्यूनतम 45% कुल अंक या 5.0 का CGPA (एससी/एसटी श्रेणी के लिए 40% अंक या 4.5 का CGPA)।",
              english:
                "Graduation in Life Science (Zoology, Botany, Environmental Science, Biochemistry, Medical Science) or equivalent from any recognized University or AICTE recognized Institute/College with minimum aggregate marks of 45% or CGPA of 5.0 for GEN/OBC and 40% marks or CGPA of 4.5 for SC/ST Category.",
            },
          ],
        },
        {
          name: {
            hindi: "एम.एससी. माइक्रोबायोलॉजी",
            english: "M.Sc. Microbiology",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: {
            hindi: "₹35000/- प्रति सेमेस्टर",
            english: "₹35000/- per semester",
          },
          examinationFee: {
            hindi: "₹3000/- प्रति सेमेस्टर",
            english: "₹3000/- per semester",
          },
          seats: { hindi: "कुल: 30", english: "Total: 30" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 3, टीएफडब्ल्यू: 2",
            english: "EWS: 3, TFW: 2",
          },
          qualification: [
            {
              hindi:
                "जीवन विज्ञान (जूलॉजी, बॉटनी, पर्यावरण विज्ञान, बायोकेमिस्ट्री, मेडिकल साइंस) में स्नातक या किसी मान्यता प्राप्त विश्वविद्यालय या AICTE मान्यता प्राप्त संस्थान/कॉलेज से समकक्ष, न्यूनतम 45% कुल अंक या 5.0 का CGPA (एससी/एसटी श्रेणी के लिए 40% अंक या 4.5 का CGPA)।",
              english:
                "Graduation in Life Science (Zoology, Botany, Environmental Science, Biochemistry, Medical Science) or equivalent from any recognized University or AICTE recognized Institute/College with minimum aggregate marks of 45% or CGPA of 5.0 for GEN/OBC and 40% marks or CGPA of 4.5 for SC/ST Category.",
            },
          ],
        },
        {
          name: {
            hindi: "पीएचडी बायोटेक्नोलॉजी",
            english: "PhD Biotechnology",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 18", english: "Total: 18" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
        {
          name: { hindi: "पीएचडी बायोकेमिस्ट्री", english: "PhD Biochemistry" },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 18", english: "Total: 18" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
        {
          name: {
            hindi: "पीएचडी माइक्रोबायोलॉजी",
            english: "PhD Microbiology",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 18", english: "Total: 18" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
        {
          name: {
            hindi: "पीएचडी मेडिकल बायोकेमिस्ट्री",
            english: "PhD Medical Biochemistry",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 18", english: "Total: 18" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
        {
          name: {
            hindi: "पीएचडी मेडिकल माइक्रोबायोलॉजी",
            english: "PhD Medical Microbiology",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 18", english: "Total: 18" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
      ],
    },
    {
      name: {
        hindi: "फार्मास्युटिकल साइंसेज संकाय",
        english: "Faculty of Pharmaceutical Sciences",
      },
      programs: [
        {
          name: { hindi: "डी. फार्म.", english: "D. Pharm." },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹90000/- प्रति वर्ष", english: "₹90000/- per year" },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: { hindi: "कुल: 60", english: "Total: 60" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 6, टीएफडब्ल्यू: 3",
            english: "EWS: 6, TFW: 3",
          },
          qualification: [{ hindi: "10+2 साइंस।", english: "10+2 Science." }],
        },
        {
          name: { hindi: "बी. फार्म.", english: "B. Pharm." },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi: "₹55000/- प्रति सेमेस्टर",
            english: "₹55000/- per semester",
          },
          examinationFee: {
            hindi: "₹5000/- प्रति सेमेस्टर",
            english: "₹5000/- per semester",
          },
          seats: { hindi: "कुल: 60", english: "Total: 60" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 6, टीएफडब्ल्यू: 3",
            english: "EWS: 6, TFW: 3",
          },
          qualification: [
            {
              hindi: "अनिवार्य अंग्रेजी के साथ 10+2 साइंस।",
              english: "10+2 Science with compulsory English.",
            },
          ],
        },
        {
          name: {
            hindi: "बी. फार्म. लेटरल एंट्री (द्वितीय वर्ष)",
            english: "B. Pharm. Lateral Entry (2nd Year)",
          },
          duration: { hindi: "3 वर्ष", english: "3 years" },
          fees: {
            hindi: "₹55000/- प्रति सेमेस्टर",
            english: "₹55000/- per semester",
          },
          examinationFee: {
            hindi: "₹5000/- प्रति सेमेस्टर",
            english: "₹5000/- per semester",
          },
          seats: { hindi: "कुल: 6", english: "Total: 6" },
          qualification: [
            {
              hindi: "पीसीआई द्वारा अनुमोदित कॉलेज से डी. फार्म. उत्तीर्ण।",
              english: "Passed D. Pharm. from PCI approved college.",
            },
          ],
        },
        {
          name: {
            hindi: "पीएचडी फार्मेसी (सभी उप-विषय)",
            english: "PhD Pharmacy (All Subdisciplines)",
          },
          duration: { hindi: "-", english: "-" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 8", english: "Total: 8" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
      ],
    },
    {
      name: {
        hindi: "कृषि संकाय",
        english: "Faculty of Agriculture",
      },
      programs: [
        {
          name: {
            hindi: "बी.एससी. (ऑनर्स) कृषि",
            english: "B.Sc. (Hons) Agriculture",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi: "₹25000/- प्रति सेमेस्टर",
            english: "₹25000/- per semester",
          },
          examinationFee: {
            hindi: "₹2500/- प्रति सेमेस्टर",
            english: "₹2500/- per semester",
          },
          seats: { hindi: "कुल: 60", english: "Total: 60" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 6, टीएफडब्ल्यू: 3",
            english: "EWS: 6, TFW: 3",
          },
          qualification: [
            {
              hindi: "न्यूनतम आयु सीमा 16 वर्ष।",
              english: "Minimum age limit is 16 years.",
            },
            {
              hindi:
                "कृषि के साथ 10+2 या भौतिकी, रसायन विज्ञान, गणित, और जीव विज्ञान में से कम से कम तीन विषयों के साथ 10+2।",
              english:
                "10+2 with Agriculture or 10+2 with at least three subjects out of Physics, Chemistry, Mathematics, and Biology.",
            },
            {
              hindi:
                "सामान्य, ओबीसी (एनसीएल), यूपीएस, ईडब्ल्यूएस श्रेणियों के लिए 50% अंक।",
              english: "50% marks for General, OBC (NCL), UPS, EWS categories.",
            },
            {
              hindi:
                "एससी, एसटी, ट्रांसजेंडर, पीडब्ल्यूडी श्रेणियों के लिए 40% कुल अंक।",
              english:
                "40% marks in aggregate for SC, ST, Transgender, PwD categories.",
            },
            {
              hindi:
                "उम्मीदवारों को 12वीं कक्षा में पढ़े और उत्तीर्ण किए गए विषय संयोजन से भिन्न विषय संयोजन में उपस्थित होने की अनुमति नहीं है। ऐसे मामलों को काउंसलिंग/प्रवेश के लिए नहीं माना जाएगा और अस्वीकार कर दिया जाएगा।",
              english:
                "Candidate(s) are not allowed to appear in subject combination different than the one which s(he) studied and passed in 12th standard. Such cases will not be considered for counselling/admission and will be rejected.",
            },
          ],
        },
        {
          name: {
            hindi: "पीएचडी कृषि (सभी उप-विशेषज्ञता)",
            english: "PhD Agriculture (All Sub Specialization)",
          },
          duration: { hindi: "-", english: "-" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 26", english: "Total: 26" },
          qualification: [
            {
              hindi:
                "एग्रोनॉमी/सीड साइंस एंड टेक्नोलॉजी में विशेषज्ञता के साथ कृषि में मास्टर डिग्री।",
              english:
                "Master's Degree in Agriculture with a specialization in Agronomy/Seed Science and Technology.",
            },
            {
              hindi:
                "कम से कम 6.5 ओजीपीए (एससी/एसटी, पीडब्ल्यूडी/थर्ड जेंडर के लिए 5.5 ओजीपीए)।",
              english:
                "At least 6.5 OGPA (5.5 OGPA for SC/ST, PWD/Third Gender).",
            },
            {
              hindi:
                "31/08/2023 को न्यूनतम 20 वर्ष की आयु (आईसीएआर मानदंडों के अनुसार)।",
              english:
                "Minimum 20 years of age as on 31/08/2023 (as per ICAR norms).",
            },
          ],
        },
      ],
    },
    {
      name: {
        hindi: "वाणिज्य संकाय",
        english: "Faculty of Commerce",
      },
      programs: [
        {
          name: {
            hindi: "बीबीए लॉजिस्टिक्स (ऑनर्स)/बीबीए",
            english: "BBA Logistics (Hons)/BBA",
          },
          duration: {
            hindi: "4 वर्ष (बीबीए लॉजिस्टिक्स) / 3 वर्ष (बीबीए)",
            english: "4 years (BBA Logistics) / 3 years (BBA)",
          },
          fees: {
            hindi: "₹30000/- प्रति सेमेस्टर",
            english: "₹30000/- per semester",
          },
          examinationFee: {
            hindi: "₹2500/- प्रति सेमेस्टर",
            english: "₹2500/- per semester",
          },
          seats: { hindi: "कुल: 60", english: "Total: 60" },
          supernumerarySeats: {
            hindi: "ईडब्ल्यूएस: 6, टीएफडब्ल्यू: 3",
            english: "EWS: 6, TFW: 3",
          },
          qualification: [
            {
              hindi: "किसी भी विषय में 10+2।",
              english: "10+2 in any discipline.",
            },
          ],
        },
      ],
    },
  ],
};

export const listProgramsStaticText: ListProgramsStaticText = {
  subheading: {
    hindi:
      "हमारे सभी संकायों में उपलब्ध विविध शैक्षणिक कार्यक्रमों का अन्वेषण करें।",
    english:
      "Explore our diverse range of academic offerings across all faculties.",
  },
  tableHeaders: {
    programme: { hindi: "कार्यक्रम", english: "Programme" },
    duration: { hindi: "अवधि", english: "Duration" },
    fees: { hindi: "शुल्क", english: "Fees" },
    examFee: { hindi: "परीक्षा शुल्क", english: "Exam Fee" },
    seats: { hindi: "सीटें", english: "Seats" },
    supernumerary: { hindi: "अधिसंख्य", english: "Supernumerary" },
    qualification: { hindi: "योग्यता", english: "Qualification" },
  },
  mobileLabels: {
    programme: { hindi: "कार्यक्रम:", english: "Programme:" },
    duration: { hindi: "अवधि:", english: "Duration:" },
    fees: { hindi: "शुल्क:", english: "Fees:" },
    examFee: { hindi: "परीक्षा शुल्क:", english: "Exam Fee:" },
    seats: { hindi: "सीटें:", english: "Seats:" },
    supernumerary: { hindi: "अधिसंख्य:", english: "Supernumerary:" },
    qualification: { hindi: "योग्यता:", english: "Qualification:" },
  },
};

export const phdprogramsContent: ProgramsContent = {
  heading: {
    hindi: "पीएच.डी. कार्यक्रम",
    english: "Ph.D. Programs",
  },
  faculties: [
    {
      name: {
        hindi: "गुरु गोरक्षनाथ आयुर्वेद चिकित्सा विज्ञान संस्थान",
        english:
          "Guru Gorakshnath Institute of Medical Sciences (Ayurveda College)",
      },
      programs: [
        {
          name: { hindi: "पीएचडी आयुर्वेद", english: "Ph.D. Ayurveda" },
          duration: { hindi: "-", english: "-" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 32", english: "Total: 32" },
          qualification: [
            {
              hindi:
                "राष्ट्रीय भारतीय चिकित्सा आयोग (पहले केंद्रीय भारतीय चिकित्सा परिषद (सीसीआईएम)) द्वारा मान्यता प्राप्त संबंधित या संबद्ध विषयों में एम.डी.(आयु.)/एम.एस.(आयु.) या किसी भी संबद्ध विषयों में मास्टर डिग्री जैसे एम.डी./एम.एस., एम.फार्मा (आयुर्वेद), एम.फार्मा, एम.एससी., एम.वी.एससी, एम.ई., या एम.टेक डिग्री, सरकार द्वारा मान्यता प्राप्त संस्थान से न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "M.D.(Ay.)/M.S.(Ay.) in the concerned or allied subjects recognized by National Commission for Indian System of Medicine (earlier Central Council of Indian Medicine (CCIM)) OR Master's degree in any one of the allied subjects viz. M.D./M.S., M.Pharma (Ayurveda), M.Pharma, M.Sc., M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
      ],
    },
    {
      name: {
        hindi: "फार्मास्युटिकल साइंसेज संकाय",
        english: "Faculty of Pharmaceutical Sciences",
      },
      programs: [
        {
          name: {
            hindi: "पीएचडी फार्मेसी (सभी उप-विषय)",
            english: "Ph.D. Pharmacy (All Subdisciplines)",
          },
          duration: { hindi: "-", english: "-" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 8", english: "Total: 8" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
      ],
    },
    {
      name: {
        hindi: "कृषि संकाय",
        english: "Faculty of Agriculture",
      },
      programs: [
        {
          name: {
            hindi: "पीएचडी कृषि (सभी उप-विशेषज्ञता)",
            english: "Ph.D. Agriculture (All Sub Specialization)",
          },
          duration: { hindi: "-", english: "-" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 26", english: "Total: 26" },
          qualification: [
            {
              hindi:
                "एग्रोनॉमी/सीड साइंस एंड टेक्नोलॉजी में विशेषज्ञता के साथ कृषि में मास्टर डिग्री।",
              english:
                "Master's Degree in Agriculture with a specialization in Agronomy/Seed Science and Technology.",
            },
            {
              hindi:
                "कम से कम 6.5 ओजीपीए (एससी/एसटी, पीडब्ल्यूडी/थर्ड जेंडर के लिए 5.5 ओजीपीए)।",
              english:
                "At least 6.5 OGPA (5.5 OGPA for SC/ST, PWD/Third Gender).",
            },
            {
              hindi:
                "31/08/2023 को न्यूनतम 20 वर्ष की आयु (आईसीएआर मानदंडों के अनुसार)।",
              english:
                "Minimum 20 years of age as on 31/08/2023 (as per ICAR norms).",
            },
          ],
        },
      ],
    },
    {
      name: {
        hindi: "सहायक स्वास्थ्य विज्ञान संकाय",
        english: "Faculty of Allied Health Sciences",
      },
      programs: [
        {
          name: {
            hindi: "पीएचडी बायोटेक्नोलॉजी",
            english: "Ph.D. Biotechnology",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 18", english: "Total: 18" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
        {
          name: {
            hindi: "पीएचडी बायोकेमिस्ट्री",
            english: "Ph.D. Biochemistry",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 18", english: "Total: 18" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
        {
          name: {
            hindi: "पीएचडी माइक्रोबायोलॉजी",
            english: "Ph.D. Microbiology",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 18", english: "Total: 18" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
        {
          name: {
            hindi: "पीएचडी मेडिकल बायोकेमिस्ट्री",
            english: "Ph.D. Medical Biochemistry",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 18", english: "Total: 18" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
        {
          name: {
            hindi: "पीएचडी मेडिकल माइक्रोबायोलॉजी",
            english: "Ph.D. Medical Microbiology",
          },
          duration: { hindi: "4 वर्ष", english: "4 years" },
          fees: {
            hindi:
              "₹125000/- प्रथम वर्ष, ₹100000/- द्वितीय वर्ष, ₹150000/- अंतिम वर्ष",
            english:
              "₹125000/- First year, ₹100000/- Second year, ₹150000/- Last year",
          },
          examinationFee: { hindi: "शामिल", english: "Included" },
          seats: { hindi: "कुल: 18", english: "Total: 18" },
          qualification: [
            {
              hindi:
                "जैविक विज्ञान की किसी भी शाखा में स्नातकोत्तर एम.एससी., एम.फार्म, एम.वी.एससी, एम.ई., या एम.टेक डिग्री या सरकार द्वारा मान्यता प्राप्त संस्थान से एमडी/एमएस/एमएससी के साथ न्यूनतम 55% अंक या समकक्ष ग्रेड (एससी/एसटी और पीएच श्रेणी के उम्मीदवार के लिए 50%)।",
              english:
                "Post-graduate M.Sc., M.Pharm, M.V.Sc, M.E., or M.Tech degree in any branch of the Biological Sciences or an MD/MS/MSc from an institution recognized by the government with a minimum of 55% marks or an equivalent grade (50% SC/ST and PH category candidate).",
            },
          ],
        },
      ],
    },
  ],
};

export const postgraduateProgramsContent: ProgramsContent = {
  heading: {
    hindi: "स्नातकोत्तर कार्यक्रम",
    english: "Post Graduate Programs",
  },
  faculties: [
    {
      name: {
        hindi: "नर्सिंग संकाय",
        english: "Faculty of Nursing",
      },
      programs: [
        {
          name: { hindi: "एम.एससी. नर्सिंग", english: "M.Sc. (Nursing)" },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: {
            hindi: "₹100000/- प्रति वर्ष",
            english: "₹100000/- per year",
          },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: { hindi: "कुल: 20", english: "Total: 20" },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त विश्वविद्यालय से बी.एससी. नर्सिंग/बी.एससी. (ऑनर्स) नर्सिंग/पोस्ट बेसिक बी.एससी. नर्सिंग में न्यूनतम 55% अंक (एससी/एसटी के लिए 50%)।",
              english:
                "B.Sc. Nursing/B.Sc. (Hons) Nursing/Post Basic B.Sc. Nursing with a minimum of 55% marks (50% for SC/ST) from a recognized university.",
            },
            {
              hindi:
                "नर्सिंग काउंसिल के साथ पंजीकृत नर्स और मिडवाइफ होना चाहिए।",
              english:
                "Must be a registered nurse and midwife with the Nursing Council.",
            },
            {
              hindi: "न्यूनतम एक वर्ष का कार्य अनुभव।",
              english: "Minimum one year of work experience.",
            },
          ],
        },
        {
          name: {
            hindi:
              "नर्स प्रैक्टिशनर इन क्रिटिकल केयर (पीजी रेजिडेंसी) कार्यक्रम",
            english:
              "Nurse Practitioner in Critical Care (PG Residency) Programme",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: {
            hindi: "₹120000/- प्रति वर्ष",
            english: "₹120000/- per year",
          },
          examinationFee: {
            hindi: "₹5000/- प्रति वर्ष",
            english: "₹5000/- per year",
          },
          seats: { hindi: "कुल: 10", english: "Total: 10" },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त विश्वविद्यालय से बी.एससी. नर्सिंग/पोस्ट बेसिक बी.एससी. नर्सिंग में न्यूनतम 55% अंक (एससी/एसटी के लिए 50%)।",
              english:
                "B.Sc. Nursing/Post Basic B.Sc. Nursing with a minimum of 55% marks (50% for SC/ST) from a recognized university.",
            },
            {
              hindi:
                "नर्सिंग काउंसिल के साथ पंजीकृत नर्स और मिडवाइफ होना चाहिए।",
              english:
                "Must be a registered nurse and midwife with the Nursing Council.",
            },
            {
              hindi: "न्यूनतम एक वर्ष का क्रिटिकल केयर में कार्य अनुभव।",
              english: "Minimum one year of work experience in critical care.",
            },
          ],
        },
      ],
    },
    {
      name: {
        hindi: "सहायक स्वास्थ्य विज्ञान संकाय",
        english: "Faculty of Allied Health Sciences",
      },
      programs: [
        {
          name: {
            hindi: "एम.एससी. बायोटेक्नोलॉजी",
            english: "M.Sc. Biotechnology",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹80000/- प्रति वर्ष", english: "₹80000/- per year" },
          examinationFee: {
            hindi: "₹4000/- प्रति वर्ष",
            english: "₹4000/- per year",
          },
          seats: { hindi: "कुल: 30", english: "Total: 30" },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त विश्वविद्यालय से बायोटेक्नोलॉजी/लाइफ साइंसेज/संबंधित विषय में स्नातक डिग्री (बी.एससी./बी.टेक.) में न्यूनतम 55% अंक (एससी/एसटी के लिए 50%)।",
              english:
                "Bachelor’s degree (B.Sc./B.Tech.) in Biotechnology/Life Sciences/related discipline with a minimum of 55% marks (50% for SC/ST) from a recognized university.",
            },
          ],
        },
        {
          name: {
            hindi: "एम.एससी. मेडिकल बायोकेमिस्ट्री",
            english: "M.Sc. Medical Biochemistry",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹80000/- प्रति वर्ष", english: "₹80000/- per year" },
          examinationFee: {
            hindi: "₹4000/- प्रति वर्ष",
            english: "₹4000/- per year",
          },
          seats: { hindi: "कुल: 20", english: "Total: 20" },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त विश्वविद्यालय से बायोकेमिस्ट्री/लाइफ साइंसेज/संबंधित विषय में स्नातक डिग्री (बी.एससी./बी.टेक.) में न्यूनतम 55% अंक (एससी/एसटी के लिए 50%)।",
              english:
                "Bachelor’s degree (B.Sc./B.Tech.) in Biochemistry/Life Sciences/related discipline with a minimum of 55% marks (50% for SC/ST) from a recognized university.",
            },
          ],
        },
        {
          name: {
            hindi: "एम.एससी. मेडिकल माइक्रोबायोलॉजी",
            english: "M.Sc. Medical Microbiology",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹80000/- प्रति वर्ष", english: "₹80000/- per year" },
          examinationFee: {
            hindi: "₹4000/- प्रति वर्ष",
            english: "₹4000/- per year",
          },
          seats: { hindi: "कुल: 20", english: "Total: 20" },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त विश्वविद्यालय से माइक्रोबायोलॉजी/लाइफ साइंसेज/संबंधित विषय में स्नातक डिग्री (बी.एससी./बी.टेक.) में न्यूनतम 55% अंक (एससी/एसटी के लिए 50%)।",
              english:
                "Bachelor’s degree (B.Sc./B.Tech.) in Microbiology/Life Sciences/related discipline with a minimum of 55% marks (50% for SC/ST) from a recognized university.",
            },
          ],
        },
        {
          name: {
            hindi: "एम.एससी. बायोकेमिस्ट्री (एनईपी-2020 के अनुसार)",
            english: "M.Sc. Biochemistry As per NEP-2020",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹80000/- प्रति वर्ष", english: "₹80000/- per year" },
          examinationFee: {
            hindi: "₹4000/- प्रति वर्ष",
            english: "₹4000/- per year",
          },
          seats: { hindi: "कुल: 25", english: "Total: 25" },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त विश्वविद्यालय से बायोकेमिस्ट्री/लाइफ साइंसेज/संबंधित विषय में स्नातक डिग्री (बी.एससी./बी.टेक.) में न्यूनतम 55% अंक (एससी/एसटी के लिए 50%)।",
              english:
                "Bachelor’s degree (B.Sc./B.Tech.) in Biochemistry/Life Sciences/related discipline with a minimum of 55% marks (50% for SC/ST) from a recognized university.",
            },
            {
              hindi: "एनईपी-2020 दिशानिर्देशों के अनुसार पाठ्यक्रम संरचना।",
              english: "Curriculum structure as per NEP-2020 guidelines.",
            },
          ],
        },
        {
          name: {
            hindi: "एम.एससी. माइक्रोबायोलॉजी (एनईपी-2020 के अनुसार)",
            english: "M.Sc. Microbiology As per NEP-2020",
          },
          duration: { hindi: "2 वर्ष", english: "2 years" },
          fees: { hindi: "₹80000/- प्रति वर्ष", english: "₹80000/- per year" },
          examinationFee: {
            hindi: "₹4000/- प्रति वर्ष",
            english: "₹4000/- per year",
          },
          seats: { hindi: "कुल: 25", english: "Total: 25" },
          qualification: [
            {
              hindi:
                "किसी मान्यता प्राप्त विश्वविद्यालय से माइक्रोबायोलॉजी/लाइफ साइंसेज/संबंधित विषय में स्नातक डिग्री (बी.एससी./बी.टेक.) में न्यूनतम 55% अंक (एससी/एसटी के लिए 50%)।",
              english:
                "Bachelor’s degree (B.Sc./B.Tech.) in Microbiology/Life Sciences/related discipline with a minimum of 55% marks (50% for SC/ST) from a recognized university.",
            },
            {
              hindi: "एनईपी-2020 दिशानिर्देशों के अनुसार पाठ्यक्रम संरचना।",
              english: "Curriculum structure as per NEP-2020 guidelines.",
            },
          ],
        },
      ],
    },
  ],
};

export const admissionGuidelinesData: AdmissionGuidelinesContent = {
  pageTitle: {
    hindi: "प्रवेश दिशानिर्देश",
    english: "Admission Guidelines",
  },
  sections: [
    {
      title: {
        hindi:
          "ऑनलाइन आवेदन पत्र भरने के लिए निर्देश/दिशानिर्देश (सीईटी 2025-26)",
        english:
          "Instructions/Guidelines for Filling out the Online Application Form (CET 2025–26)",
      },
      blocks: [
        {
          type: "important",
          content: {
            hindi:
              "महत्वपूर्ण: प्रवेश फॉर्म भरने से पहले विश्वविद्यालय की वेबसाइट से प्रॉस्पेक्टस 2025-26 डाउनलोड करें और सभी निर्देशों को ध्यान से पढ़ें।\nदेखें: http://www.mgug.ac.in > Admissions > Prospectus",
            english:
              "Important: Download the Prospectus 2025–26 from the university website and read all instructions carefully before filling out the admission form.\nVisit: http://www.mgug.ac.in > Admissions > Prospectus",
          },
        },
        {
          type: "heading",
          content: {
            hindi: "ऑनलाइन आवेदन पत्र भरने के लिए पूर्वापेक्षाएँ:",
            english: "Pre-requisites for Filling the Online Application Form:",
          },
        },
        {
          type: "list",
          content: [
            {
              hindi:
                "आधार कार्ड: पहचान सत्यापन के लिए एक वैध आधार कार्ड अनिवार्य है।",
              english:
                "Aadhaar Card: A valid Aadhaar card is mandatory for identity verification.",
            },
            {
              hindi:
                "अभ्यर्थी की ईमेल आईडी: एक सक्रिय ईमेल पता (उदा., abcde@gmail.com)।",
              english:
                "Email ID of the Candidate: An active email address (e.g., abcde@gmail.com).",
            },
            {
              hindi:
                "अभ्यर्थी का मोबाइल नंबर: ओटीपी और अपडेट प्राप्त करने के लिए।",
              english:
                "Mobile Number of the Candidate: To receive OTPs and updates.",
            },
            {
              hindi:
                "फोटोग्राफ और हस्ताक्षर की स्कैन की हुई प्रति:\n- प्रारूप: JPEG या PDF\n- फोटोग्राफ का आकार: 50 KB से कम\n- हस्ताक्षर का आकार: 30 KB से कम",
              english:
                "Scanned Copy of Photograph and Signature:\n- Format: JPEG or PDF\n- Photograph size: less than 50 KB\n- Signature size: less than 30 KB",
            },
            {
              hindi: "पते का विवरण: पिन कोड सहित स्थायी और पत्राचार का पता।",
              english:
                "Address Details: Permanent and Correspondence address including the PIN Code.",
            },
          ],
        },
        {
          type: "note",
          content: {
            hindi:
              "नोट: आवेदन पत्र के भुगतान की पुष्टि हो जाने के बाद, निम्नलिखित विवरणों में कोई और परिवर्तन की अनुमति नहीं दी जाएगी: कार्यक्रम, आवेदक का नाम, पिता का नाम, जन्म तिथि, ई-मेल आईडी, मोबाइल नंबर, श्रेणी, फोटो और हस्ताक्षर।",
            english:
              "Note: Once the payment of application form is confirmed, no further changes will be permitted in the following details: Programme, Applicant Name, Father’s Name, Date of Birth, E-mail ID, Mobile Number, Category, Photo, and Signature.",
          },
        },
        {
          type: "paragraph",
          content: {
            hindi:
              "प्रवेश पत्र/काउंसलिंग स्लिप: अभ्यर्थी विश्वविद्यालय की वेबसाइट (https://www.mgug.ac.in) से प्रवेश पत्र डाउनलोड कर सकेंगे।",
            english:
              "Admit Card/Counselling Slip: The Admit Card shall be downloaded by the candidate(s) from the university website (https://www.mgug.ac.in).",
          },
        },
      ],
    },
    {
      title: {
        hindi: "प्रवेश के लिए सामान्य दिशा-निर्देश एवं जानकारी (2025–26)",
        english: "General Guidelines and Information for Admission (2025–26)",
      },
      blocks: [
        {
          type: "list",
          content: [
            {
              hindi:
                "1. पात्रता एवं सीटों की संख्या की जानकारी प्रॉस्पेक्टस 2025–26 के अनुसार होगी। कृपया अधिक जानकारी हेतु विश्वविद्यालय की वेबसाइट देखें।",
              english:
                "1. Eligibility and seat details will be as per Prospectus 2025–26. Please visit university website for updates.",
            },
            {
              hindi:
                "2. ऑनलाइन आवेदन पत्र भरने से पहले प्रॉस्पेक्टस को ध्यानपूर्वक पढ़ें। भरे गए फॉर्म व शुल्क रसीद को सुरक्षित रखें।",
              english:
                "2. Read the prospectus carefully before filling the online application form. Save the submitted form and fee receipt.",
            },
            {
              hindi:
                "3. किसी भी प्रकार की विसंगति मिलने पर फॉर्म निरस्त किया जा सकता है या ईमेल के माध्यम से पुनः प्रस्तुत करने हेतु कहा जा सकता है।",
              english:
                "3. Any discrepancy may lead to rejection or request for resubmission via email within a given time.",
            },
            {
              hindi:
                "4. मेरिट लिस्ट विश्वविद्यालय की वेबसाइट पर उपलब्ध कराई जाएगी।",
              english:
                "4. Merit lists will be available on the university website.",
            },
            {
              hindi:
                "5. मेरिट सूची प्रवेश परीक्षा में प्रदर्शन के आधार पर बनेगी। अभ्यर्थी स्वयं पात्रता सुनिश्चित करें।",
              english:
                "5. Merit will be based on entrance test performance. Candidates must ensure eligibility.",
            },
            {
              hindi:
                "6. चयनित अभ्यर्थियों को काउंसलिंग में आवश्यक दस्तावेजों के साथ उपस्थित होना होगा और उसी समय ऑनलाइन शुल्क जमा करना होगा, अन्यथा प्रवेश रद्द कर दिया जाएगा।",
              english:
                "6. Shortlisted candidates must appear for counselling with required documents and deposit the fee online during counselling, else admission will be cancelled.",
            },
            {
              hindi:
                "7. प्रवेश प्रकोष्ठ अभ्यर्थी की योग्यता/चरित्र संतोषजनक न होने पर प्रवेश अस्वीकार कर सकता है।",
              english:
                "7. The admission cell may deny admission if credentials or character are not satisfactory.",
            },
            {
              hindi:
                "8. अगर कोई जानकारी फर्जी पाई गई तो प्रवेश रद्द कर दिया जाएगा और कोई शुल्क वापस नहीं किया जाएगा।",
              english:
                "8. If any information is found forged, admission will be cancelled without refund.",
            },
            {
              hindi:
                "9. सभी प्रवेश अस्थायी हैं और सक्षम प्राधिकारी द्वारा दस्तावेज़ सत्यापन पर निर्भर हैं।",
              english:
                "9. All admissions are provisional and subject to document verification by competent authority.",
            },
            {
              hindi:
                "10. नियमों की अज्ञानता किसी भी स्थिति में स्वीकार्य नहीं होगी।",
              english:
                "10. Ignorance of rules will not be accepted as an excuse.",
            },
            {
              hindi:
                "11. विश्वविद्यालय द्वारा निर्धारित एंटी-रैगिंग एवं अनुशासन नियम सभी छात्रों पर उनके पाठ्यक्रम की अवधि तक लागू होंगे।",
              english:
                "11. University rules on anti-ragging and conduct are binding on all students till completion of the programme.",
            },
          ],
        },
      ],
    },
    {
      title: {
        hindi: "संयुक्त प्रवेश परीक्षा (एमजीयूजी 2025-26)",
        english: "Combined Entrance Test (MGUG 2025–26)",
      },
      blocks: [
        {
          type: "paragraph",
          content: {
            hindi:
              "प्रवेश परीक्षा में 2 घंटे की अवधि के 100 प्रश्न (प्रत्येक 01 अंक) शामिल होंगे, जब तक कि अन्यथा उल्लेख न किया गया हो, और इसमें बहुविकल्पीय प्रश्न (एक सही उत्तर वाले प्रश्न) होंगे। कोई नकारात्मक अंकन नहीं होगा। प्रश्न पत्र को हल करने के लिए विवरण/निर्देश प्रवेश परीक्षा के समय पुस्तिका/प्रश्न पत्र में दिए जाएंगे।",
            english:
              "Entrance Test will comprise of 100 questions (01 mark each) of 2 hours duration, unless otherwise mentioned and will consist of multiple-choice questions (questions with one correct answer). There will be no negative marking. The details/instructions for attempting the question paper will be given in the booklet/question paper at the time of Entrance Test.",
          },
        },
        {
          type: "paragraph",
          content: {
            hindi:
              "संयुक्त प्रवेश परीक्षा के लिए परीक्षा पैटर्न सभी कार्यक्रमों में सुसंगत होगा:",
            english:
              "The entrance examination pattern for the Combined Entrance Test will be consistent across all programmes:",
          },
        },
        {
          type: "list",
          content: [
            {
              hindi:
                "60% प्रश्न चुने गए पहले वरीयता वाले कार्यक्रम के पाठ्यक्रम पर आधारित होंगे।",
              english:
                "60% of the questions will be based on the syllabus of the first preference opted programme.",
            },
            {
              hindi:
                "20% प्रश्न सामान्य अध्ययन, करंट अफेयर्स, एप्टीट्यूड और रीजनिंग से कवर किए जाएंगे।",
              english:
                "20% of the questions will be covered from General studies, Current Affairs, Aptitude and Reasoning.",
            },
            {
              hindi:
                "20% प्रश्न भारतीय ज्ञान प्रणाली पर आधारित होंगे, विशेष रूप से रामायण और महाभारत के महाकाव्यों पर ध्यान केंद्रित करते हुए।",
              english:
                "20% of the questions will be based on the Indian Knowledge System, especially focusing on the epics of Ramayan and Mahabharat.",
            },
          ],
        },
        {
          type: "paragraph",
          content: {
            hindi:
              "अभ्यर्थी को संबंधित परीक्षा केंद्र पर संयुक्त प्रवेश परीक्षा शुरू होने से कम से कम आधा घंटा पहले रिपोर्ट करना होगा। प्रवेश परीक्षाएं प्रॉस्पेक्टस/विश्वविद्यालय की वेबसाइट पर उपलब्ध अधिसूचना में दिए गए कार्यक्रम के अनुसार आयोजित की जाएंगी। हालांकि, विश्वविद्यालय को प्रवेश परीक्षा के कार्यक्रम, परिणाम की घोषणा की तारीख बदलने का अधिकार है, ऐसे अपडेट के लिए, उम्मीदवारों से अनुरोध है कि वे अक्सर विश्वविद्यालय की वेबसाइट (https://www.mgug.ac.in) पर जाएं।",
            english:
              "The candidate will have to report at the concerned examination centre at least half an hour before the commencement of the Combined Entrance Test. The entrance tests will be held as per schedule given in the prospectus/notification available on the university website. However, the university have right to change the schedule of entrance test, date of declaration of the result, for such updates, candidates are requested to visit university website (https://www.mgug.ac.in) frequently.",
          },
        },
      ],
    },
    {
      title: {
        hindi: "📢 अनंतिम रूप से प्रवेशित अभ्यर्थियों की रिपोर्टिंग",
        english: "📢 Reporting of Provisionally Admitted Candidates",
      },
      blocks: [
        {
          type: "paragraph",
          content: {
            hindi:
              "जिन अभ्यर्थियों का अनंतिम रूप से प्रवेश हुआ है, उन्हें आवश्यक निर्देशों एवं जानकारी हेतु संबंधित संकाय/विभाग में रिपोर्ट करना अनिवार्य है।",
            english:
              "Candidates who have been provisionally admitted are required to report to their respective Faculty/Department for further instructions and information.",
          },
        },
      ],
    },
    {
      title: {
        hindi: "रिक्त सीट पर आंतरिक स्थानांतरण/प्रवेश के लिए नीति",
        english: "Policy for Internal Transfer/Admission to Vacant Seat",
      },
      blocks: [
        {
          type: "paragraph",
          content: {
            hindi:
              "यदि प्रवेश की अंतिम तिथि के बाद कोई सीट खाली रहती है, तो उस स्थिति में निम्नलिखित मानदंड/नियम लागू होंगे:",
            english:
              "If there is any seat vacant after the last date of admission, in that case the following criteria/rule will be applied:",
          },
        },
        {
          type: "list",
          content: [
            {
              hindi:
                "रिक्त सीटों के लिए अधिसूचना विश्वविद्यालय की वेबसाइट पर प्रकाशित की जाएगी।",
              english:
                "Notification for the vacant seats will be made and published on the university website.",
            },
            {
              hindi:
                "एमजीयूजी-संयुक्त प्रवेश परीक्षा में प्राप्त अंकों के आधार पर रिक्त सीटों के लिए एक मेरिट सूची तैयार की जाएगी।",
              english:
                "A merit list against vacant seats will be prepared on the basis of marks obtained in MGUG-combined entrance test.",
            },
            {
              hindi:
                "आंतरिक स्थानांतरण के लिए अधिसूचना जारी की जाएगी और यह अन्य कार्यक्रमों में प्रवेश के लिए आवश्यक पात्रता मानदंडों के अनुसार होगी।",
              english:
                "For internal transfer notification will be made and this will be accord with eligibility criteria required for taking admission in other programs.",
            },
          ],
        },
        {
          type: "important",
          content: {
            hindi:
              "यदि कोई उम्मीदवार संयुक्त प्रवेश परीक्षा के दौरान किसी भी अनुचित साधन का उपयोग करते हुए पाया जाता है, तो उसकी उम्मीदवारी तत्काल रद्द कर दी जाएगी। संयुक्त प्रवेश परीक्षा 2025-26 की उत्तर पुस्तिका के पुनर्मूल्यांकन/पुनः जांच का कोई प्रावधान नहीं होगा।",
            english:
              "If a candidate found involved in using any unfair means during the Combined Entrance Test, his/her candidature shall be cancelled immediately. There shall be no provision for re-evaluation/rechecking of the answer sheet of the Combined Entrance Test 2025–26.",
          },
        },
      ],
    },
  ],
};

export const iqacTitles: IQACTitles = {
  heading: {
    hindi: "आंतरिक गुणवत्ता निर्धारण प्रकोष्ठ",
    english: "Internal Quality Assurance Cell (IQAC)",
  },
  headers: {
    srNo: {
      hindi: "क्रमांक",
      english: "Sl. No",
    },
    nameDesignation: {
      hindi: "नाम, पदनाम एवं संस्था",
      english: "Name, Designation & Institution",
    },
    role: {
      hindi: "दायित्व",
      english: "Role",
    },
  },
};

export const iqacData: IQACMember[] = [
  {
    srNo: 1,
    name: { hindi: "डॉ. सुरिन्दर सिंह", english: "Dr. Surinder Singh" },
    designation: { hindi: "कुलपति", english: "Hon’ble Vice Chancellor" },
    role: { hindi: "अध्यक्ष", english: "Chairperson" },
  },
  {
    srNo: 2,
    name: { hindi: "डॉ. डी.एस. अजीथा", english: "Dr. D.S Ajeetha" },
    designation: {
      hindi: "अधिष्ठाता, नर्सिंग एवं पैरामेडिकल संकाय",
      english: "Dean, Nursing & Paramedical Faculty",
    },
    role: { hindi: "सदस्य", english: "Member" },
  },
  {
    srNo: 3,
    name: { hindi: "डॉ. अनुराग श्रीवास्तव", english: "Dr. Anurag Srivastava" },
    designation: {
      hindi: "प्रधानाचार्य, श्री गोरक्षनाथ मेडिकल कॉलेज",
      english: "Principal, Shri Gorakhnath Medical College",
    },
    role: { hindi: "सदस्य", english: "Member" },
  },
  {
    srNo: 4,
    name: { hindi: "डॉ. गिरिधर वेदान्तम", english: "Dr. Giridhar Vedantam" },
    designation: {
      hindi: "प्रधानाचार्य, जी.जी.आई.एम.एस.",
      english: "Principal, GGIMS",
    },
    role: { hindi: "सदस्य", english: "Member" },
  },
  {
    srNo: 5,
    name: { hindi: "डॉ. सुमित कुमार", english: "Dr. Sumit Kumar" },
    designation: {
      hindi: "सह आचार्य, जी.जी.आई.एम.एस.",
      english: "Associate Professor, GGIMS",
    },
    role: { hindi: "सदस्य", english: "Member" },
  },
  {
    srNo: 6,
    name: { hindi: "डॉ. विमल कुमार दूबे", english: "Dr. Vimal Kumar Dubey" },
    designation: {
      hindi: "विभागाध्यक्ष, कृषि विज्ञान विभाग",
      english: "Head, Department of Agricultural Science",
    },
    role: { hindi: "सदस्य", english: "Member" },
  },
  {
    srNo: 7,
    name: { hindi: "डॉ. अमित कुमार दूबे", english: "Dr. Amit Kumar Dubey" },
    designation: {
      hindi: "सहायक आचार्य, स्वास्थ्य विज्ञान संकाय",
      english: "Assistant Professor, Allied Health Sciences",
    },
    role: { hindi: "सदस्य", english: "Member" },
  },
  {
    srNo: 8,
    name: { hindi: "श्री प्रमथनाथ मिश्र", english: "Shri Pramathanath Mishra" },
    designation: {
      hindi: "सदस्य, महाराणा प्रताप शिक्षा परिषद",
      english: "Member, Maharana Pratap Education Council",
    },
    role: { hindi: "सदस्य", english: "Member" },
  },
  {
    srNo: 9,
    name: { hindi: "डॉ. प्रदीप कुमार राव", english: "Dr. Pradeep Kumar Rao" },
    designation: {
      hindi: "कुलसचिव एवं वित्त अधिकारी",
      english: "Registrar & Finance Officer",
    },
    role: { hindi: "सदस्य", english: "Member" },
  },
  {
    srNo: 10,
    name: { hindi: "श्री अमित कुमार सिंह", english: "Shri Amit Kumar Singh" },
    designation: {
      hindi: "परीक्षा नियंत्रक",
      english: "Controller of Examinations",
    },
    role: { hindi: "सदस्य", english: "Member" },
  },
  {
    srNo: 11,
    name: { hindi: "डॉ. राज किशोर सिंह", english: "Dr. Raj Kishore Singh" },
    designation: {
      hindi: "प्रोफेसर, बी.आर.डी. मेडिकल कॉलेज",
      english: "Professor, BRD Medical College",
    },
    role: { hindi: "बाह्य सदस्य", english: "External Member" },
  },
  {
    srNo: 12,
    name: { hindi: "ई. जे. पी. मसकरा", english: "J.P. Maskara" },
    designation: {
      hindi: "कैम्पस अपोलो हॉस्पिटल",
      english: "Campus Apollo Hospital",
    },
    role: { hindi: "बाह्य सदस्य", english: "External Member" },
  },
  {
    srNo: 13,
    name: { hindi: "श्री शिवम पाण्डेय", english: "Shri Shivam Pandey" },
    designation: {
      hindi: "छात्र प्रतिनिधि",
      english: "Student Representative",
    },
    role: { hindi: "छात्र प्रतिनिधि", english: "Student Representative" },
  },
  {
    srNo: 14,
    name: { hindi: "डॉ. रघुराम आचार", english: "Dr. Raghu Ram Achar" },
    designation: {
      hindi: "अधिष्ठाता, आईक्यूएसी, रैंकिंग एवं एक्रीडिटेशन",
      english: "Dean, IQAC, Ranking and Accreditation",
    },
    role: { hindi: "सचिव", english: "Secretary" },
  },
];
