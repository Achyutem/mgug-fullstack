import type {
  CertificationDiplomaContent,
  FeeStructureTitles,
  FeeStructureMember,
  UnderGraduateContent,
  ProgramsContent,
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
      hindi: "13,05,825 प्रति वर्ष",
      english: "13,05,825 per year",
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
    hindi:
      "महायोगी गोरखनाथ विश्वविद्यालय गोरखपुर, विभिन्न विषयों में विविध प्रकार के कार्यक्रम प्रदान करता है।",
    english:
      "Mahayogi Gorakhnath University Gorakhpur, offers a diverse range of programs across various disciplines.",
  },
  faculties: [
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
        hindi: "श्री गोरक्षनाथ मेडिकल कॉलेज हॉस्पिटल और रिसर्च सेंटर",
        english:
          "Shri Gorakshnath Medical College Hospital and Research Centre",
      },
      programs: [
        {
          name: { hindi: "एमबीबीएस", english: "MBBS" },
          duration: { hindi: "5.5 वर्ष", english: "5.5 years" },
          fees: { hindi: "-", english: "-" },
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
  ],
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
