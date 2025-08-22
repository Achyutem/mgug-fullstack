import type {
  AcademicCalendarContent,
  AmbulanceContent,
  CafeteriaContent,
  DifferentlyAbledContent,
  ExaminationManualContent,
  FeePolicyContent,
  GuestHouseContent,
  HospitalContent,
  HostelContent,
  LaboratoryContent,
  LibraryContent,
  MagazineTitles,
  NccContent,
  SportsContent,
  StudentZone,
  WellnessPageContent,
} from "./types";

export const admissionNoticeTitles: MagazineTitles = {
  heading: {
    hindi: "प्रवेश सूचनाएं",
    english: "Admission Notices",
  },
  headers: {
    title: {
      hindi: "सूचना शीर्षक",
      english: "Notice Title",
    },
    date: {
      hindi: "प्रकाशन तिथि",
      english: "Date Published",
    },
    link: {
      hindi: "लिंक",
      english: "Link",
    },
  },
};

export const eventsTitles: MagazineTitles = {
  heading: {
    hindi: "आयोजन",
    english: "Events",
  },
  headers: {
    title: {
      hindi: "आयोजन का नाम",
      english: "Event Name",
    },
    date: {
      hindi: "आयोजन तिथि",
      english: "Event Date",
    },
    link: {
      hindi: "लिंक",
      english: "Link",
    },
  },
};

export const examinationManualData: ExaminationManualContent = {
  pageTitle: {
    hindi: "परीक्षा नियमावली",
    english: "Examination Manual",
  },
  sections: [
    {
      heading: {
        hindi: "परीक्षक के लिए नीति",
        english: "Policy for EXAMINER",
      },
      points: [
        {
          hindi:
            "एक कॉलेजिएट कार्यक्रम के लिए एक परीक्षक को नर्सिंग कॉलेज में संबंधित विषय में मास्टर डिग्री और कॉलेजिएट कार्यक्रम में न्यूनतम 03 साल के शिक्षण अनुभव के साथ लेक्चरर या उससे ऊपर होना चाहिए। नर्सिंग फाउंडेशन कोर्स के लिए परीक्षक होने के लिए किसी भी विशेषज्ञता के साथ मास्टर डिग्री वाले संकाय पर विचार किया जाएगा।",
          english:
            "An examiner for a collegiate programme should be a lecturer or above in a college of nursing with Master Degree in concerned subject and minimum of 03 years of teaching experience in collegiate programme. To be an examiner for nursing foundations course faculty having Master Degree with any speciality will be considered.",
        },
        {
          hindi:
            "B.Sc.(N) कार्यक्रम के लिए एक परीक्षक केवल M.Sc (N) योग्य संकाय होगा।",
          english:
            "An examiner for B.Sc.(N) program shall be only M.Sc (N) qualified faculty.",
        },
        {
          hindi:
            "एक आंतरिक और एक बाहरी परीक्षक को संयुक्त रूप से यूजी पाठ्यक्रमों के लिए प्रत्येक छात्र के लिए व्यावहारिक परीक्षा आयोजित करनी चाहिए। पीजी कोर्स के लिए एक विश्वविद्यालय से आंतरिक और एक विश्वविद्यालय के बाहर से बाहरी (अन्य विश्वविद्यालय)।",
          english:
            "One internal and one external examiner should jointly conduct practical examination for each student for UG courses. For PG Course one internal from the university and one external from outside the university (other University).",
        },
        {
          hindi:
            "अंतिम वर्ष के अंक तब तक रोके जाएंगे जब तक कि उम्मीदवार प्रैक्टिकल के लिए आवश्यक उपस्थिति पूरी नहीं कर लेता।",
          english:
            "Final year marks shall be withheld till the candidate completes required attendance for practicals.",
        },
        {
          hindi:
            "शोध प्रबंध के लिए आंतरिक परीक्षक गाइड होना चाहिए और बाहरी परीक्षक नर्सिंग संकाय/नर्सिंग विशेषज्ञ होना चाहिए जो उसी नैदानिक विशेषज्ञता में पीएचडी/एम.फिल/एम.एससी (एन) के साथ नर्सिंग के स्नातकोत्तर छात्रों के लिए अनुसंधान परियोजनाओं का मार्गदर्शन करने का न्यूनतम 03 वर्ष का अनुभव रखता हो।",
          english:
            "For Dissertation internal examiner should be the guide and the external examiner should be nursing faculty/ nursing expert in the same clinical speciality holding Ph.D./ M.Phil./ M.Sc (N) with a minimum 03 years experience in guiding the research projects for Post Graduate students of Nursing.",
        },
      ],
    },
    {
      heading: {
        hindi: "पेपर सेटर्स के लिए नीति",
        english: "Policy for PAPER SETTERS",
      },
      points: [
        {
          hindi:
            "प्रश्न पत्र सेट करने वालों को प्रश्नों के साथ उत्तर कुंजी जमा करनी होगी।",
          english:
            "The question paper setters need to submit the answer keys along with the questions.",
        },
        {
          hindi:
            "प्रश्न पत्रों के दो सेट एक ही समय में तैयार करने की आवश्यकता है।",
          english:
            "The two sets of question papers need to prepare at the time.",
        },
        {
          hindi: "प्रश्न पत्रों को जल्द से जल्द जमा करने की आवश्यकता है।",
          english:
            "The question papers need to be submitted as soon as possible.",
        },
        {
          hindi: "गोपनीयता बनाए रखने की आवश्यकता है।",
          english: "Need to maintain confidentiality.",
        },
        {
          hindi:
            "पेपर सेटर्स को प्रश्न पत्रों की प्रति अपने पास नहीं रखनी चाहिए।",
          english:
            "The paper setters should not withheld the copy of question papers.",
        },
      ],
    },
    {
      heading: {
        hindi: "निरीक्षकों के लिए नीति",
        english: "Policy for INVIGILATORS",
      },
      intro: {
        hindi:
          "निरीक्षण एक परीक्षा के संचालन के दौरान किए जाने वाले सबसे महत्वपूर्ण कार्यों में से एक है। निष्पक्ष निरीक्षण न केवल अनुचित साधनों के उपयोग की जांच करने में मदद करता है बल्कि उम्मीदवारों के मनोबल को भी बनाए रखता है। निरीक्षकों के लिए दिशानिर्देशों का एक सेट नीचे दिया गया है:",
        english:
          "Invigilation is one of the most important tasks required to be performed during the conduct of an examination. Impartial invigilation helps not only to check the use of unfair means but also to keep the morale of the candidates. A set of guidelines for the invigilators are given below:",
      },
      points: [
        {
          hindi:
            "परीक्षा शुरू होने से एक घंटे पहले मुख्य अधीक्षक को रिपोर्ट करें।",
          english:
            "Report to the chief superintendent one hour before the commencement of the examination.",
        },
        {
          hindi:
            "परीक्षा शुरू होने से एक घंटे पहले उम्मीदवारों को परीक्षा हॉल में प्रवेश करने की अनुमति दें।",
          english:
            "Permit the candidates to enter the Examination Hall one hour before the commencement of the examination.",
        },
        {
          hindi: "उत्तर पुस्तिकाओं को इकट्ठा करें, गिनें और दोषपूर्ण को बदलें।",
          english:
            "Collect the answer books, count and replace defective ones.",
        },
        {
          hindi:
            "गोपनीय कक्ष से परीक्षा कक्ष तक पैकेट में प्रश्न पत्र ले जाएं।",
          english:
            "Carry question papers in packets from confidential room to exam room.",
        },
        {
          hindi: "सुनिश्चित करें कि ओएमआर शीट पर कोई आवारा निशान या मोड़ न हो।",
          english: "Ensure no stray marks or folds on OMR sheets.",
        },
        {
          hindi:
            "उम्मीदवारों को सीटें खोजने में मदद करें, और अनधिकृत वस्तुओं को इकट्ठा करें।",
          english:
            "Help candidates locate seats, and collect unauthorized items.",
        },
        {
          hindi:
            "प्रवेश पत्र और आईडी की जांच करें, उपलब्ध न होने पर मार्गदर्शन करें।",
          english: "Check Admit card and ID, guide if not available.",
        },
        {
          hindi: "पहचान सत्यापित करें और उपस्थिति लें।",
          english: "Verify identity and take attendance.",
        },
        {
          hindi: "परीक्षा हॉल में केवल अधिकृत कर्मियों को ही अनुमति है।",
          english: "Only authorized personnel allowed in exam hall.",
        },
        {
          hindi:
            "उत्तर पुस्तिका 30 मिनट पहले वितरित करें, छात्रों द्वारा भरे गए विवरणों को सत्यापित करें।",
          english:
            "Distribute answer book 30 mins before, verify details filled by students.",
        },
        {
          hindi: "उत्तर पुस्तिकाओं के भाग I और भाग III पर हस्ताक्षर करें।",
          english: "Sign Part I and Part III of answer books.",
        },
        {
          hindi: "शुरू होने पर प्रश्न पत्र वितरित करें।",
          english: "Distribute question papers at start time.",
        },
        {
          hindi: "प्रत्येक घंटे के पूरा होने की घोषणा करें।",
          english: "Announce each hour completed.",
        },
        {
          hindi: "अंतिम 5 मिनट की घोषणा करें, अंतिम घंटी पर लिखना बंद करें।",
          english: "Announce last 5 mins, stop writing at end bell.",
        },
        {
          hindi:
            "सुनिश्चित करें कि उम्मीदवार अप्रयुक्त पृष्ठों को 'X' से चिह्नित करें।",
          english: "Ensure candidates mark unused pages with 'X'.",
        },
        {
          hindi:
            "उत्तर पुस्तिकाओं को रजिस्टर नंबरों के अनुसार इकट्ठा और व्यवस्थित करें।",
          english: "Collect and arrange answer books by register numbers.",
        },
        {
          hindi: "प्रवेश के लिए प्रवेश पत्र और आईडी कार्ड अनिवार्य हैं।",
          english: "Admit card and ID card are mandatory for entry.",
        },
        {
          hindi:
            "बैठने की योजना का सख्ती से पालन करें, 30 मिनट के बाद कोई देर से प्रवेश नहीं।",
          english:
            "Follow seating plan strictly, no late entries after 30 mins.",
        },
        {
          hindi:
            "मुख्य अधीक्षक आवश्यकतानुसार डुप्लिकेट प्रवेश पत्र जारी कर सकते हैं।",
          english:
            "Chief superintendent may issue duplicate Admit cards as needed.",
        },
        {
          hindi: "कोई भी उम्मीदवार अंत से 30 मिनट पहले नहीं जा सकता है।",
          english: "No candidate may leave before 30 mins to end.",
        },
        {
          hindi: "सतर्कता बनाए रखें, ध्यान भंग करने से बचें।",
          english: "Maintain alertness, avoid distractions.",
        },
        {
          hindi: "सख्त चुप्पी बनाए रखें, उधार लेने की अनुमति नहीं है।",
          english: "Maintain strict silence, no borrowing allowed.",
        },
        {
          hindi:
            "कोई स्पष्टीकरण नहीं दिया जाना है - मुख्य अधीक्षक से संपर्क करें।",
          english:
            "No clarifications to be provided—refer to Chief Superintendent.",
        },
        {
          hindi:
            "उपकरणों का उपयोग केवल तभी करने की अनुमति है जब प्रश्न पत्र अनुमति देता है।",
          english: "Use of tools allowed only if question paper permits.",
        },
        {
          hindi: "हॉल में कोई मोबाइल या इलेक्ट्रॉनिक उपकरण नहीं।",
          english: "No mobiles or electronic devices in hall.",
        },
        {
          hindi: "अनुचित साधनों को रोकें; उल्लंघन की तुरंत रिपोर्ट करें।",
          english: "Prevent unfair means; report violations immediately.",
        },
        {
          hindi:
            "उत्तर पुस्तिका के भाग I से परे किसी भी पहचान चिह्न की अनुमति नहीं है।",
          english:
            "No identification marks allowed beyond Part I of answer book.",
        },
        {
          hindi: "केवल अधिकृत व्यक्तियों को ही प्रवेश की अनुमति है।",
          english: "Only authorized persons allowed entry.",
        },
        {
          hindi: "पीने का पानी उपलब्ध होना चाहिए।",
          english: "Drinking water must be available.",
        },
        {
          hindi: "रफ कार्य केवल उत्तर पुस्तिका के अंतिम पृष्ठ पर।",
          english: "Rough work only on answer booklet’s last page.",
        },
        {
          hindi: "किसी भी जलपान की अनुमति नहीं है।",
          english: "No refreshments allowed.",
        },
        {
          hindi:
            "निरीक्षकों को रजिस्टर नंबरों को सही नहीं करना चाहिए; छात्रों से सही करने और प्रतिहस्ताक्षर करने के लिए कहें।",
          english:
            "Invigilators must not correct register numbers; ask students to correct and countersign.",
        },
      ],
    },
  ],
};

export const academicCalendarData: AcademicCalendarContent = {
  pageTitle: {
    hindi: "शैक्षणिक कैलेंडर",
    english: "Academic Calendar",
  },
  tableHeaders: {
    session: {
      hindi: "शैक्षणिक सत्र",
      english: "Academic Session",
    },
    link: {
      hindi: "लिंक",
      english: "Link",
    },
  },
  linkText: {
    hindi: "देखें",
    english: "View",
  },
  items: [
    {
      year: "2024-2025",
      link: "https://mgug.ac.in/academics/Academic_Calendar_24-25.pdf",
    },
    {
      year: "2025-2026",
      link: "https://mgug.ac.in/academics/Academic_Calendar_25-26.pdf",
    },
  ],
};

export const hostelData: HostelContent = {
  pageTitle: {
    hindi: "छात्रावास",
    english: "Hostel",
  },
  image: "/hostel_image.webp", // Replace with your actual image path
  introParagraphs: [
    {
      hindi:
        "महायोगी गोरखनाथ विश्वविद्यालय गोरखपुर में लड़के और लड़कियों के लिए दो छात्रावास हैं। लड़कियों के छात्रावास का नाम माँ पाटेश्वरी सेवाश्रम है, जिसमें 169 कमरे और 361 छात्रों की क्षमता है, और लड़कों के छात्रावास का नाम महंत गोपालननाथ सेवाश्रम है, जिसमें 255 कमरे और 510 छात्रों की क्षमता है।",
      english:
        "Mahayogi Gorakhnath University Gorakhpur has two hostels, for girls and boys. The girls hostel name is Maa Pateshwari Sevashram, which has 169 rooms and a 361-student capacity with full facilities, and the boys hostel name is Mahaant Gopalanath Sevashram, which has 255 rooms and a 510-student capacity with full facilities.",
    },
    {
      hindi:
        "दोनों छात्रावास आवश्यक आधुनिक और अद्यतन सुविधाओं और सेवाओं से सुसज्जित हैं। छात्रावास के कमरे पूरी तरह से सुसज्जित हैं और वाई-फाई और अन्य आवश्यक बिजली फिटिंग से सुसज्जित हैं। प्रत्येक छात्रावास में अनुशासन और सुरक्षा सुनिश्चित करने के लिए एक वार्डन और अधीक्षक हैं।",
      english:
        "Both the hostels are well equipped with the necessary modern and up-to-date facilities and services. The hostel rooms are fully furnished and are well equipped with Wi-Fi and other necessary electrical fittings. Every hostel has a warden and superintendent to ensure discipline and security in the hostel.",
    },
    {
      hindi:
        "प्रथम वर्ष के छात्रों को उपलब्धता के आधार पर डबल या ट्रिपल शेयरिंग बेडरूम आवंटित किए जाते हैं। वरिष्ठ छात्रों को उनकी उम्र के आधार पर सिंगल या डबल शेयरिंग रूम आवंटित किए जाते हैं।",
      english:
        "First-year students are allotted double or triple sharing bedrooms depending on availability. Senior students are assigned single or double sharing rooms based on their age.",
    },
  ],
  facilitiesHeading: {
    hindi: "छात्रावासों में उपलब्ध सुविधाएं",
    english: "Facilities Available in Hostels",
  },
  facilitiesList: [
    {
      hindi: "24×7 गर्म और ठंडे पानी की आपूर्ति",
      english: "24×7 hot and cold water supply",
    },
    {
      hindi: "24×7 निर्बाध बिजली की आपूर्ति",
      english: "24×7 uninterrupted power supply",
    },
    {
      hindi: "वाई-फाई के माध्यम से इंटरनेट कनेक्टिविटी",
      english: "Internet connectivity through Wi-Fi",
    },
    {
      hindi: "खेल सुविधाएं और व्यायामशाला",
      english: "Sports facilities and gymnasium",
    },
    {
      hindi: "टेलीविजन रूम, स्टडी रूम, कैफेटेरिया, मनोरंजन कक्ष, आदि।",
      english:
        "Television rooms, study rooms, cafeteria, entertainment rooms, etc.",
    },
  ],
  tableHeaders: {
    particulars: { hindi: "विवरण", english: "Particulars" },
    rooms: { hindi: "कमरों की संख्या", english: "No. of Rooms" },
    capacity: {
      hindi: "छात्रों की बैठने की क्षमता",
      english: "Students Seating Capacity",
    },
  },
  girlsHostel: {
    heading: {
      hindi: "लड़कियों का छात्रावास",
      english: "Girls Hostel",
    },
    tableData: [
      {
        particulars: { hindi: "सिंगल सीटर", english: "Single Seater" },
        rooms: "37",
        capacity: "37",
      },
      {
        particulars: { hindi: "डबल सीटर", english: "Double Seater" },
        rooms: "72",
        capacity: "144",
      },
      {
        particulars: { hindi: "ट्रिपल सीटर", english: "Triple Seater" },
        rooms: "60",
        capacity: "180",
      },
      {
        particulars: { hindi: "कुल क्षमता", english: "Total Capacity" },
        rooms: "169",
        capacity: "361",
      },
    ],
  },
  boysHostel: {
    heading: {
      hindi: "लड़कों का छात्रावास",
      english: "Boys Hostel",
    },
    tableData: [
      {
        particulars: { hindi: "सिंगल सीटर", english: "Single Seater" },
        rooms: "50",
        capacity: "50",
      },
      {
        particulars: { hindi: "डबल सीटर", english: "Double Seater" },
        rooms: "155",
        capacity: "310",
      },
      {
        particulars: { hindi: "ट्रिपल सीटर", english: "Triple Seater" },
        rooms: "50",
        capacity: "150",
      },
      {
        particulars: { hindi: "कुल क्षमता", english: "Total Capacity" },
        rooms: "255",
        capacity: "510",
      },
    ],
  },
};

export const laboratoryData: LaboratoryContent = {
  pageTitle: {
    hindi: "प्रयोगशालाएँ और अन्य संबंधित सुविधाएँ",
    english: "Laboratories and other related facilities",
  },
  intro: {
    hindi: "", // You can add an introductory sentence here if needed
    english: "", // You can add an introductory sentence here if needed
  },
  labs: [
    {
      hindi: "बेसिक लैब",
      english: "Basic Lab",
    },
    {
      hindi: "ऑडियो-विजुअल एड्स से सुसज्जित शिक्षण/प्रशिक्षण लैब",
      english: "Teaching/training Lab equipped with Audio-Visual Aids",
    },
    {
      hindi: "माँ-बच्चे स्वास्थ्य नर्सिंग देखभाल सुविधा",
      english: "Mother-Child Health Nursing Care Facility",
    },
    {
      hindi: "पोषण लैब",
      english: "Nutrition Lab",
    },
    {
      hindi: "प्रीक्लिनिकल लैब",
      english: "Preclinical Lab",
    },
  ],
};

export const libraryData: LibraryContent = {
  pageTitle: {
    hindi: "पुस्तकालय",
    english: "Library",
  },
  heading: {
    hindi: "केंद्रीय पुस्तकालय",
    english: "Central Library",
  },
  introParagraphs: [
    {
      hindi:
        "महायोगी गोरखनाथ विश्वविद्यालय गोरखपुर के केंद्रीय पुस्तकालय में आपका स्वागत है, जो महायोगी शिवावतारी गुरु गोरखनाथ की पवित्र भूमि में स्थित है।",
      english:
        "You are welcome to the Central Library of Mahayogi Gorakhnath University Gorakhpur situated in the holy land of Mahayogi Shivavatari Guru Gorakhnath.",
    },
    {
      hindi:
        "पुस्तकालय वाई-फाई से सुसज्जित है और 24x7 खुला रहता है। केंद्रीय पुस्तकालय में सभी विषयों पर विश्वविद्यालय-स्तरीय पाठ्यक्रम-संबंधित और संदर्भ पुस्तकें उपलब्ध हैं। लगभग सभी विषयों/अनुशासनों पर हिंदी और अंग्रेजी भाषा में राष्ट्रीय और अंतर्राष्ट्रीय शोध पत्रिकाएं और पत्रिकाएं सब्सक्राइब की जाती हैं। हिंदी और अंग्रेजी भाषा के महत्वपूर्ण स्थानीय और राष्ट्रीय दैनिक समाचार पत्र सब्सक्राइब किए जाते हैं। इसके अलावा, विभिन्न विषयों पर सामान्य पुस्तकों का एक समृद्ध संग्रह भी केंद्रीय पुस्तकालय में उपलब्ध है।",
      english:
        "The library is equipped with Wi-Fi and remains open 24x7. In the central library university-level course-related and reference books on all the subjects are available. National and international research journals and magazines in Hindi and English language are subscribed on almost all the subjects/disciplines. Hindi and English language important local and national dailies are subscribed. In addition to this, a rich collection of general books on various topics and subjects are also available in the central library.",
    },
    {
      hindi:
        "पुस्तकालय के सभी उपयोगकर्ताओं के लिए उचित और आरामदायक बैठने और पढ़ने की व्यवस्था है।",
      english:
        "Arrangement for proper and comfortable sitting and reading for all the users of the library is in place.",
    },
    {
      hindi:
        "यहां यह उल्लेखनीय है कि पुस्तकालय का कामकाज पूरी तरह से कम्प्यूटरीकृत है। विश्वविद्यालय दुनिया भर से शोध-संबंधित संदर्भ पुस्तकों, पत्रिकाओं और पत्रिकाओं के संग्रह में लगातार काम कर रहा है और एक विश्व स्तरीय बहु-विषयक समृद्ध आधुनिक पुस्तकालय विकसित और स्थापित करने में लगा हुआ है।",
      english:
        "Here it is noteworthy that the functioning of the library is fully computerized. University is continuously working and engaged in the collection of research-related reference books, journals and magazines from around the world to develop and establish a world-class multi-disciplinary rich modern library.",
    },
    {
      hindi:
        "एक पुस्तकालय बुद्धि और स्वयं के शुद्धिकरण के लिए एक मंदिर है। यहां पूरी दुनिया हमारी आंखों के सामने है। हम एक पुस्तकालय में बैठकर ही अतीत और वर्तमान की पूरी दुनिया और सभ्यताओं का भ्रमण कर सकते हैं। एक प्राचीन, शांतिपूर्ण और शांत वातावरण में अध्ययन करना और ज्ञान प्राप्त करना संभव है।",
      english:
        "A library is a temple for the purification of intellect and self. Here the entire world is before our eyes. We can tour the entire world and civilizations of the past and present just sitting in a library. It is possible to study and acquire knowledge in a pristine, peaceful, and serene ambience.",
    },
    {
      hindi:
        "इसलिए इस परिसर को स्वस्थ, स्वच्छ और सुंदर बनाए रखने के लिए हम सभी का जो ज्ञान सीखने और अर्जित करने में लगे हुए हैं, एक गंभीर, अनिवार्य और नैतिक कर्तव्य है। पुस्तकालय का उपयोग करते समय हमें पुस्तकालय को उत्तरोत्तर समृद्ध बनाने में अपना सहयोग सुनिश्चित करने का प्रयास करना चाहिए। कोई भी पुस्तकालय किसी देश और सभ्यता की एक मजबूत नींव प्रदान करता है। वास्तव में किसी राष्ट्र या सभ्यता के पुस्तकालय उसके विकास और प्रगति का आकलन करने के प्रमुख मापदंडों में से एक हैं।",
      english:
        "Therefore to keep this campus salubrious, clean and beautiful it is an earnest, imperative and moral duty of all of us who are engaged in learning and earning knowledge. While using the library we should strive and ascertain our cooperation in making the library progressively rich. Any library provides a firm foundation of a country and civilization. In fact libraries of a nation or civilization is one of the major yardsticks to assess its development and progress.",
    },
  ],
  servicesHeading: {
    hindi: "मुख्य सेवाएं:",
    english: "Main Services:",
  },
  services: [
    {
      heading: {
        hindi: "फोटोकॉपी/ज़ेरॉक्स:",
        english: "Photocopy/Xerox:",
      },
      description: {
        hindi:
          "पुस्तकालय छात्रों, शिक्षकों, शोधार्थियों, कर्मचारियों और अन्य वॉक-इन उपयोगकर्ताओं को फोटोकॉपी/ज़ेरॉक्स सुविधा/सेवा प्रदान करता है।",
        english:
          "Library provides photocopy/Xerox facility/service to the students, teachers, research Scholars, staff, and other walk-in users.",
      },
    },
    {
      heading: {
        hindi: "पुस्तकालय पुस्तकों का निर्गम:",
        english: "Issuing of Library Books:",
      },
      description: {
        hindi:
          "पुस्तकालय के सभी उपयोगकर्ताओं को विभिन्न पाठ्यक्रमों के लिए निर्धारित अवधि के लिए पुस्तकें जारी की जाती हैं। नियत तारीख के बाद पुस्तकें लौटाने पर, निर्धारित विलंब शुल्क लिया जाएगा।",
        english:
          "Books are issued to all the users of the library for prescribed durations for different courses. Returning the books after the due date, prescribed late charges will be charged.",
      },
    },
  ],
};

export const nccData: NccContent = {
  pageTitle: {
    hindi: "राष्ट्रीय कैडेट कोर (NCC)",
    english: "National Cadet Corps (NCC)",
  },
  mainHeading: {
    hindi: "महायोगी गोरखनाथ विश्वविद्यालय में एनसीसी",
    english: "NCC at Mahayogi Gorakhnath University (MGUG)",
  },
  introduction: {
    heading: {
      hindi: "एनसीसी का परिचय",
      english: "Introduction to NCC",
    },
    paragraphs: [
      {
        hindi:
          "राष्ट्रीय कैडेट कोर (एनसीसी) भारत का प्रमुख युवा विकास आंदोलन है, जिसे 1948 के राष्ट्रीय कैडेट कोर अधिनियम के तहत स्थापित किया गया था। इसकी जड़ें 1917 में भारतीय रक्षा अधिनियम के तहत 'यूनिवर्सिटी कोर' के गठन से जुड़ी हैं, जिसे जरूरत के समय देश की रक्षा प्रणाली को मजबूत करने के लिए बनाया गया था।",
        english:
          "The National Cadet Corps (NCC) is India's premier youth development movement, established under the National Cadet Corps Act of 1948. Its roots trace back to the formation of the “University Corps” in 1917 under the Indian Defence Act, created to strengthen the nation’s defense system during times of need.",
      },
      {
        hindi:
          "आज, एनसीसी देश का सबसे बड़ा वर्दीधारी युवा संगठन है, जो तीनों सेनाओं: थल सेना, नौसेना और वायु सेना के तहत काम करता है, जिसका मुख्यालय नई दिल्ली में है। यह एक स्वैच्छिक संगठन है, जो स्कूल, कॉलेज और विश्वविद्यालय के छात्रों के लिए खुला है, जिसका उद्देश्य देशभक्ति, अनुशासन, एकता और निस्वार्थ सेवा की भावना को बढ़ावा देना है।",
        english:
          "Today, the NCC stands as the largest uniformed youth organization in the country, operating under the Tri-Services: Army, Navy, and Air Force, with its headquarters in New Delhi. It is a voluntary organization, open to school, college, and university students, with the aim of fostering a spirit of patriotism, discipline, unity, and selfless service.",
      },
    ],
  },
  nccAtMgug: {
    heading: {
      hindi: "महायोगी गोरखनाथ विश्वविद्यालय (एमजीयूजी) में एनसीसी",
      english: "NCC at Mahayogi Gorakhnath University (MGUG)",
    },
    intro: {
      hindi:
        "जुलाई 2023 में 102 यूपी बटालियन एनसीसी, गोरखपुर के तहत स्थापित, महायोगी गोरखनाथ विश्वविद्यालय (एमजीयूजी) की एनसीसी इकाई संरचित सैन्य और नेतृत्व प्रशिक्षण के माध्यम से छात्रों को जिम्मेदार, सेवा-उन्मुख नागरिक बनाने के लिए प्रतिबद्ध है।",
      english:
        "Established in July 2023 under the 102 UP Battalion NCC, Gorakhpur, the NCC Unit at Mahayogi Gorakhnath University (MGUG) is committed to molding students into responsible, service-oriented citizens through structured military and leadership training.",
    },
    details: [
      {
        heading: { hindi: "संबद्ध बटालियन:", english: "Affiliated Battalion:" },
        description: {
          hindi: "102 यूपी बटालियन एनसीसी, गोरखपुर",
          english: "102 UP Battalion NCC, Gorakhpur",
        },
      },
      {
        heading: {
          hindi: "स्वीकृत कैडेट संख्या:",
          english: "Sanctioned Cadet Strength:",
        },
        description: { hindi: "106 कैडेट", english: "106 Cadets" },
      },
      {
        heading: {
          hindi: "प्रस्तावित प्रमाण पत्र:",
          english: "Certificates Offered:",
        },
        description: {
          hindi:
            "सीनियर डिवीजन/सीनियर विंग (एसडी/एसडब्ल्यू) के लिए 'बी' और 'सी' प्रमाण पत्र",
          english:
            "‘B’ and ‘C’ Certificates for Senior Division/Senior Wing (SD/SW)",
        },
      },
    ],
    trainingTypes: {
      heading: {
        hindi: "प्रस्तावित प्रशिक्षण के प्रकार",
        english: "Types of Training Offered",
      },
      list: [
        {
          hindi: "परेड ड्रिल और शारीरिक फिटनेस",
          english: "Parade Drills and Physical Fitness",
        },
        {
          hindi: "शूटिंग और मानचित्र पठन",
          english: "Shooting and Map Reading",
        },
        {
          hindi: "प्राथमिक चिकित्सा और आपदा प्रबंधन",
          english: "First Aid and Disaster Management",
        },
        {
          hindi: "पर्वतारोहण, ट्रेकिंग, सेलिंग, स्कूबा डाइविंग, और ग्लाइडिंग",
          english:
            "Mountaineering, Trekking, Sailing, Scuba Diving, and Gliding",
        },
      ],
    },
    leadership: {
      heading: {
        hindi: "नेतृत्व और प्रशासन",
        english: "Leadership and Administration",
      },
      ano: {
        heading: {
          hindi: "एसोसिएट एनसीसी अधिकारी (एएनओ):",
          english: "Associate NCC Officer (ANO):",
        },
        description: {
          hindi:
            "डॉ. संदीप कुमार श्रीवास्तव, रक्षा मंत्रालय द्वारा लेफ्टिनेंट के रूप में कमीशन किए गए।",
          english:
            "Dr. Sandeep Kumar Srivastava, commissioned as Lieutenant by the Ministry of Defence.",
        },
      },
    },
  },
  achievements: {
    heading: {
      hindi: "उपलब्धियां और भागीदारी",
      english: "Achievements and Participation",
    },
    camp2023: {
      heading: {
        hindi: "वार्षिक प्रशिक्षण शिविर (2023-24):",
        english: "Annual Training Camp (2023–24):",
      },
      description: {
        hindi: "एमजीयूजी कैडेटों द्वारा 35 स्वर्ण पदक जीते गए।",
        english: "35 Gold Medals won by MGUG cadets.",
      },
    },
    rdcSelections: {
      heading: {
        hindi: "गणतंत्र दिवस शिविर (आरडीसी) चयन:",
        english: "Republic Day Camp (RDC) Selections:",
      },
      list: [
        {
          hindi: "सीनियर अंडर ऑफिसर सागर जायसवाल",
          english: "Senior Under Officer Sagar Jaiswal",
        },
        { hindi: "सार्जेंट खुशी गुप्ता", english: "Sergeant Khushi Gupta" },
        { hindi: "आशुतोष मणि त्रिपाठी", english: "Ashutosh Mani Tripathi" },
        { hindi: "कृष्णा त्रिपाठी", english: "Krishna Tripathi" },
      ],
    },
    allIndiaCamps: {
      heading: {
        hindi: "अखिल भारतीय शिविर और साहसिक कार्यक्रम:",
        english: "All India Camps and Adventure Events:",
      },
      description: {
        hindi:
          "सार्जेंट आदित्य विश्वकर्मा, कॉर्पोरल अभिषेक चौरसिया, और कैडेट अनुभव ने अखिल भारतीय ट्रेकिंग शिविर में भाग लिया।",
        english:
          "Sergeant Aditya Vishwakarma, Corporal Abhishek Chaurasia, and Cadet Anubhav participated in the All India Trekking Camp.",
      },
    },
    specialHonors: {
      heading: { hindi: "विशेष सम्मान:", english: "Special Honors:" },
      description: {
        hindi:
          "2025 में, एमजीयूजी एक डेयरडेविल बाइकर्स टीम बनाने वाला पहला विश्वविद्यालय बन गया, जिसे गणतंत्र दिवस परेड के दौरान असाधारण प्रदर्शन के लिए एनसीसी मुख्यालय से मान्यता मिली।",
        english:
          "In 2025, MGUG became the first university to form a Daredevil Bikers Team, receiving recognition from NCC Headquarters for exceptional performance during the Republic Day Parade.",
      },
    },
  },
  vision: {
    heading: {
      hindi: "आगे की दृष्टि",
      english: "Vision Ahead",
    },
    paragraphs: [
      {
        hindi:
          "महायोगी गोरखनाथ विश्वविद्यालय अपनी एनसीसी इकाई के दायरे और प्रभाव का विस्तार करने के लिए प्रतिबद्ध है। तीसरे शैक्षणिक सत्र में 106 कैडेटों की पूरी स्वीकृत संख्या तक पहुंचने की उम्मीद के साथ, विश्वविद्यालय का लक्ष्य है:",
        english:
          "Mahayogi Gorakhnath University is committed to expanding the scope and impact of its NCC unit. With the full sanctioned strength of 106 cadets expected to be reached in the third academic session, the university aims to:",
      },
    ],
  },
};

export const cafeteriaData: CafeteriaContent = {
  pageTitle: {
    hindi: "कैंटीन",
    english: "Canteen",
  },
  image: "/cafeteria.webp", // Replace with your actual image path
  paragraphs: [
    {
      hindi:
        "विश्वविद्यालय परिसर में, एक वातानुकूलित कैंटीन की सुविधा उपलब्ध है जिसमें उपयुक्त फिक्स्चर से सुसज्जित एक अति-आधुनिक रसोई है। छात्रों को पौष्टिक, स्वच्छ और स्वास्थ्यप्रद नाश्ता और भोजन परोसा जाता है।",
      english:
        "In the university campus, an air-conditioned canteen facility is available which has an ultra-modern kitchen equipped with appropriate fixtures. Students are served nutritious, hygienic, and wholesome snacks and meals.",
    },
    {
      hindi:
        "कैफेटेरिया सिर्फ भोजन करने की जगह नहीं है, बल्कि यह छात्रों के लिए आराम करने, मेलजोल बढ़ाने और विचारों का आदान-प्रदान करने का एक जीवंत केंद्र भी है। आरामदायक बैठने की व्यवस्था और सुखद माहौल इसे व्याख्यानों के बीच या दिन के अंत में आराम करने के लिए एक आदर्श स्थान बनाता है।",
      english:
        "The cafeteria is not just a place to eat, but also a vibrant hub for students to relax, socialize, and exchange ideas. The comfortable seating arrangement and pleasant ambiance make it a perfect spot to unwind between lectures or at the end of the day.",
    },
    {
      hindi:
        "हमारा मेनू विविध स्वादों को पूरा करने के लिए सावधानीपूर्वक तैयार किया गया है, जिसमें पारंपरिक भारतीय व्यंजनों से लेकर विभिन्न प्रकार के हल्के नाश्ते और ताज़ा पेय पदार्थ शामिल हैं। हम केवल ताज़ी और उच्च-गुणवत्ता वाली सामग्री का उपयोग करने पर जोर देते हैं ताकि यह सुनिश्चित हो सके कि परोसा गया हर भोजन स्वादिष्ट और स्वास्थ्यकर दोनों हो।",
      english:
        "Our menu is carefully curated to cater to diverse tastes, offering everything from traditional Indian meals to a variety of light snacks and refreshing beverages. We insist on using only the freshest, high-quality ingredients to ensure that every meal served is both delicious and wholesome.",
    },
    {
      hindi:
        "स्वच्छता और खाद्य सुरक्षा हमारे लिए सर्वोपरि है। हमारी रसोई और भोजन क्षेत्र को उच्चतम मानकों पर बनाए रखा जाता है, जिससे हमारे छात्रों के लिए एक सुरक्षित और सुखद भोजन अनुभव सुनिश्चित होता है।",
      english:
        "Hygiene and food safety are paramount to us. Our kitchen and dining areas are maintained to the highest standards, ensuring a safe and pleasant dining experience for our students.",
    },
  ],
};

export const guestHouseData: GuestHouseContent = {
  pageTitle: {
    hindi: "अतिथि गृह",
    english: "Guest House",
  },
  image: "/guest_house.webp", // Replace with your actual image path
  introParagraphs: [
    {
      hindi:
        "विश्वविद्यालय में देश और विदेश से नियमित रूप से बड़ी संख्या में वैज्ञानिक/विद्वान/अतिथि आते हैं। उनके प्रवास/रहने को आरामदायक और सुखद सुनिश्चित करने के लिए, विश्वविद्यालय के अतिथि गृह में सुसज्जित एसी/गैर-एसी सिंगल/डबल बेडरूम और पारिवारिक अपार्टमेंट हैं। इसके अलावा वीवीआईपी और वीआईपी सुइट्स भी विश्वविद्यालय के अतिथि गृह में उपलब्ध हैं। विश्वविद्यालय परिसर में, अतिथि गृह सबसे महत्वपूर्ण घटकों में से एक है, क्योंकि यह एक विश्वविद्यालय और कॉर्पोरेट जीवन में बहुत महत्वपूर्ण भूमिका निभाता है।",
      english:
        "University receives a large number of scientists/scholars/guests regularly from the country and abroad. To ensure their stay/living comfortable and happy, the university has well-furnished AC/non-AC single/double bedrooms and family apartments in the guest house. Moreover VVIP and VIP suits are also available in the university guest house. In the university campus, the guest house is one of the most vital/important components, as it plays a very vital role in a university and corporate life.",
    },
  ],
  facilitiesHeading: {
    hindi: "सुविधाएं",
    english: "Facilities",
  },
  facilitiesList: [
    {
      heading: { hindi: "फर्नीचर:", english: "Furniture:" },
      description: {
        hindi: "अतिथि गृह के सभी कमरे और अपार्टमेंट अच्छी तरह से सुसज्जित हैं।",
        english:
          "All the rooms and apartments of the guest house are well furnished.",
      },
    },
    {
      heading: { hindi: "रसोई:", english: "Kitchen:" },
      description: {
        hindi:
          "प्रत्येक अपार्टमेंट की अपनी रसोई है। हालांकि, अतिथि गृह के हर मंजिल पर एक आम रसोई है। सभी रसोई में अपेक्षित बिजली की फिटिंग और बर्तन हैं।",
        english:
          "Each apartment has its own kitchen. However, every floor of the guest house has one common kitchen. All the kitchens have requisite electrical fittings and utensils.",
      },
    },
    {
      heading: { hindi: "पानी की आपूर्ति:", english: "Water Supply:" },
      description: {
        hindi:
          "प्रत्येक कमरे में पीने के साथ-साथ अन्य उद्देश्यों के लिए आवश्यक पानी की सुविधा प्रदान की जाती है।",
        english:
          "Each room is provided with necessary water facilities for drinking as well as for other purposes.",
      },
    },
    {
      heading: { hindi: "सॉकेट:", english: "Socket:" },
      description: {
        hindi:
          "अतिथि गृह में लगे सभी प्लग टाइप F (शुको प्लग) सॉकेट के लिए हैं।",
        english:
          "All the plugs fitted in the guest house are for type F (Schuko plug) sockets.",
      },
    },
    {
      heading: { hindi: "धुलाई और सुखाने:", english: "Washing and Drying:" },
      description: {
        hindi:
          "अतिथि गृह में एक आम वॉशिंग मशीन है और इसमें टम्बल ड्राइंग की सुविधा है।",
        english:
          "The guest house has a common washing machine and has a Tumble drying facility.",
      },
    },
    {
      heading: { hindi: "संचार सेवाएं:", english: "Communication services:" },
      description: {
        hindi:
          "सभी अपार्टमेंट में एक टेलीविजन, एक टेलीफोन और एक इंटरनेट कनेक्शन (LAN) लगा हुआ है। अतिथि गृह में वाई-फाई सेवा भी उपलब्ध है। इसके अलावा, अतिथि गृह में एक सुसज्जित बहुउद्देश्यीय हॉल, एक बैठक/सम्मेलन हॉल, और एक संलग्न रसोई और भोजन कक्ष है।",
        english:
          "All the apartments are fitted with a Television, a Telephone and an Internet connection (LAN). Wi-Fi service is also available in the guest house. Moreover, the guest house has a well-furnished multi-purpose hall, a meeting/conference hall, and an attached kitchen and dining hall.",
      },
    },
    {
      heading: {
        hindi: "शुल्क और भुगतान के तरीके:",
        english: "Charges and modes of payment:",
      },
      description: {
        hindi:
          "भुगतान नकद/क्रेडिट कार्ड का उपयोग करके/ऑनलाइन मोड में किया जा सकता है।",
        english: "Payments can be made in cash/using credit cards/online mode.",
      },
    },
  ],
  rulesHeading: {
    hindi: "नियम और विनियम/नियम और शर्तें:",
    english: "Rules and Regulations/Terms and conditions:",
  },
  rulesList: [
    {
      heading: { hindi: "सामान्य नियम:", english: "General Rules:" },
      description: {
        hindi:
          "कृपया अतिथि गृह के नियमों और विनियमों का पालन करें, जिसकी एक मुद्रित प्रति चार्ज समझौते और विश्वविद्यालय के अन्य नियमों और विनियमों के साथ प्रदान की जाएगी। कृपया अतिथि गृह में रहने वाले अन्य मेहमानों के प्रति उचित सम्मान और शिष्टाचार दिखाएं और भवन और उसके सामान पर उचित ध्यान दें।",
        english:
          "Please follow the rules and regulations of the guest house, a printed copy of which will be provided along with the charge agreement and other rules & regulations of the university. Please show due respect and courtesy towards other guests staying in the guest house and pay due attention to the building and its outfits.",
      },
    },
    {
      heading: { hindi: "किरायेदारी:", english: "Tenancy:" },
      description: {
        hindi:
          "हमारे अतिथि गृह में अपार्टमेंट न्यूनतम एक दिन और अधिकतम एक सप्ताह की अवधि के लिए किराए पर लिए जा सकते हैं। यदि आवश्यक हो, तो इस अवधि से परे आगे की व्यवस्था के लिए हमसे संपर्क करने में संकोच न करें।",
        english:
          "Apartments in our guest house can be taken on rent for a minimum period of one day and a maximum period of one week. Please don’t hesitate in contacting us for further arrangements beyond this period, if required.",
      },
    },
    {
      heading: { hindi: "चाबियाँ:", english: "Keys:" },
      description: {
        hindi:
          "कृपया आपको दी गई चाबियों का ध्यान रखें क्योंकि चाबियों के खो जाने से सुरक्षा खतरे में पड़ सकती है और समस्याएं पैदा हो सकती हैं और इसमें वित्तीय लागत भी शामिल हो सकती है। कृपया अतिथि गृह छोड़ने से पहले कार्यालय में चाबियों की वापसी सुनिश्चित करें।",
        english:
          "Please take care of keys given to you since the loss of keys may jeopardize security and may create problems and involve financial costs too. Please ensure the return of keys to the office before you leave the guest house.",
      },
    },
  ],
};

export const hospitalData: HospitalContent = {
  pageTitle: {
    hindi: "अस्पताल की सुविधाएं",
    english: "Hospital Facilities",
  },
  image: "/hospital.webp", // Replace with your actual image path
  introParagraphs: [
    {
      hindi:
        "विश्वविद्यालय परिसर में चिकित्सा सुविधा/सेवा उपलब्ध है। विश्वविद्यालय अस्पताल में विशेषज्ञ डॉक्टरों की टीम उपलब्ध है। अस्पताल में प्राथमिक उपचार से लेकर गंभीर चिकित्सा स्थितियों तक के निदान और उपचार के लिए, डॉक्टरों की एक विशेषज्ञ/विशेषज्ञ टीम चौबीसों घंटे मरीजों की देखभाल के लिए उपलब्ध है। छात्रों को परामर्श सेवाएं निःशुल्क उपलब्ध हैं और उनका इलाज मामूली शुल्क पर किया जाता है।",
      english:
        "Medical facility/service is available in the university campus. In the university hospital specialist team of doctors are available. In the hospital for diagnosis and treatment from first aid to serious medical conditions, an expert/specialized team of doctors is available to attend the patients round the clock. Consultancy services to the students are available free of cost and they are treated charging nominal fees.",
    },
  ],
  facilitiesHeading: {
    hindi: "उपलब्ध चिकित्सा सुविधाएं:",
    english: "Available medical facilities:",
  },
  facilitiesList: [
    {
      heading: {
        hindi: "प्राथमिक स्वास्थ्य देखभाल",
        english: "Primary Health Care",
      },
      description: {
        hindi: "प्राथमिक निदान और उपचार।",
        english: "Primary diagnosis & treatment.",
      },
    },
    {
      heading: {
        hindi: "चिकित्सा आपातकालीन देखभाल",
        english: "Medical Emergency care",
      },
      description: { hindi: "प्राथमिक उपचार।", english: "First Aid." },
    },
    {
      heading: { hindi: "फार्मेसी", english: "Pharmacy" },
      description: {
        hindi:
          "सभी आवश्यक दवाएं उपलब्ध हैं। कर्मचारियों और छात्रों को निर्धारित दवाएं निःशुल्क दी जाती हैं।",
        english:
          "All essential medicines are available. The medicines prescribed to staff and students are given free of cost.",
      },
    },
    {
      heading: { hindi: "फिजियोथेरेपी", english: "Physiotherapy" },
      description: {
        hindi: "सुसज्जित फिजियोथेरेपी केंद्र उपलब्ध है।",
        english: "Well-equipped physiotherapy center is available.",
      },
    },
    {
      heading: { hindi: "इन-पेशेंट वार्ड", english: "In-patient ward" },
      description: {
        hindi: "ऑक्सीजन सहायता के साथ दस बिस्तरों वाली इनडोर सुविधा उपलब्ध है।",
        english: "Ten bed indoor facility with oxygen support is available.",
      },
    },
    {
      heading: {
        hindi: "ऑक्सीजन सहायता के साथ एम्बुलेंस",
        english: "Ambulance with Oxygen support",
      },
      description: { hindi: "उपलब्ध है।", english: "is available." },
    },
  ],
  timingsHeading: {
    hindi: "अस्पताल का समय:",
    english: "Timings of Hospital:",
  },
  timingsList: [
    {
      heading: { hindi: "ओपीडी:", english: "OPD:" },
      description: {
        hindi: "सुबह 08:00 बजे से शाम 04:00 बजे तक।",
        english: "Morning 08:00 AM to 04:00 PM.",
      },
    },
    {
      heading: { hindi: "आपातकालीन:", english: "Emergency:" },
      description: {
        hindi: "24×7 चौबीसों घंटे।",
        english: "24×7 round the clock.",
      },
    },
  ],
};

export const ambulanceData: AmbulanceContent = {
  pageTitle: {
    hindi: "एम्बुलेंस सुविधा",
    english: "Ambulance Facility",
  },
  image: "/ambulance.webp",
  paragraphs: [
    {
      hindi:
        "महायोगी गोरखनाथ विश्वविद्यालय गोरखपुर में एम्बुलेंस सुविधा 24×7 चौबीसों घंटे उपलब्ध है। संबंधित विभागाध्यक्ष/छात्रावास वार्डन द्वारा अनुशंसित चिकित्सा आपातकाल के मामले में या मामले की गंभीरता के आधार पर एक छात्र रोगी इस सुविधा का लाभ उठा सकता है।",
      english:
        "In Mahayogi Gorakhnath University Gorakhpur Ambulance facility is available 24×7 round the clock. In case of a medical emergency recommended by the concerned Head of Department/Hostel Warden or depending on the seriousness of the case a student patient may avail the benefit of this facility.",
    },
  ],
};

export const differentlyAbledData: DifferentlyAbledContent = {
  pageTitle: {
    hindi: "दिव्यांगजनों के लिए सुविधाएं (बाधा रहित वातावरण)",
    english: "Facilities for differently-abled (barrier-free environment)",
  },
  image: "/differently_abled.webp",
  paragraphs: [
    {
      hindi:
        "महायोगी गोरखनाथ विश्वविद्यालय, गोरखपुर (एमजीयूजी) दिव्यांगजन छात्रों, कर्मचारियों, रोगियों और आगंतुकों के लिए एक समावेशी और सुलभ वातावरण प्रदान करने के लिए प्रतिबद्ध है।",
      english:
        "Mahayogi Gorakhnath University, Gorakhpur (MGUG) is committed to providing an inclusive and accessible environment for differently-abled (Divyangjan) students, staff, patients, and visitors.",
    },
    {
      hindi:
        "विश्वविद्यालय ने आसान गतिशीलता सुनिश्चित करने के लिए रैंप, लिफ्ट और सुलभ शौचालयों के साथ एक बाधा रहित परिसर डिजाइन अपनाया है। व्हीलचेयर और हेल्प डेस्क पर सहायता जैसी सहायक सुविधाएं उपलब्ध हैं।",
      english:
        "The university has adopted a barrier-free campus design with ramps, elevators, and accessible restrooms to ensure easy mobility. Assistive facilities such as wheelchairs and support at help desks are available.",
    },
  ],
};

export const sportsData: SportsContent = {
  pageTitle: {
    hindi: "खेल और शारीरिक शिक्षा",
    english: "Sports & Physical Education",
  },
  image: "/sports.webp", // Replace with your actual image path
  paragraphs: [
    {
      hindi:
        "महायोगी गोरखनाथ विश्वविद्यालय, गोरखपुर (एमजीयूजी) छात्रों के समग्र विकास पर विशेष जोर देता है, जिसमें खेल और शारीरिक शिक्षा परिसर जीवन के अभिन्न अंग हैं। विश्वविद्यालय टीम वर्क, अनुशासन, शारीरिक फिटनेस और स्वस्थ प्रतिस्पर्धा की भावना को बढ़ावा देने के लिए विभिन्न प्रकार के खेलों और एथलेटिक गतिविधियों में भागीदारी को सक्रिय रूप से प्रोत्साहित करता है।",
      english:
        "Mahayogi Gorakhnath University, Gorakhpur (MGUG) places strong emphasis on the holistic development of students, with sports and physical education being integral components of campus life. The university actively promotes participation in a wide range of sports and athletic activities to foster teamwork, discipline, physical fitness, and a spirit of healthy competition.",
    },
    {
      hindi:
        "एमजीयूजी वर्तमान में 14,000 की बैठने की क्षमता वाला एक मल्टी-स्पोर्ट स्टेडियम विकसित कर रहा है, जिसमें क्रिकेट, फुटबॉल, वॉलीबॉल, कबड्डी और एथलेटिक्स जैसे ट्रैक एंड फील्ड, लंबी कूद, ऊंची कूद, भाला फेंक, शॉट पुट और रिले दौड़ सहित विभिन्न प्रकार के खेल आयोजन आयोजित किए जाएंगे। यह स्टेडियम अंतर-विश्वविद्यालय टूर्नामेंट और बड़े पैमाने पर खेल आयोजनों के लिए एक प्रमुख केंद्र के रूप में काम करेगा।",
      english:
        "MGUG is currently developing a multi-sport stadium with a seating capacity of 14,000, which will accommodate a variety of sporting events including cricket, football, volleyball, kabaddi, and athletics such as track and field, long jump, high jump, javelin throw, shot put, and relay races. This stadium will serve as a major hub for inter-university tournaments and large-scale sporting events.",
    },
    {
      hindi:
        "आगामी स्टेडियम के अलावा, विश्वविद्यालय वॉलीबॉल, कबड्डी, एथलेटिक्स, बैडमिंटन, टेबल टेनिस, कैरम और शतरंज जैसे इनडोर खेलों के लिए अच्छी तरह से बनाए गए खेल सुविधाओं से सुसज्जित है। एमजीयूजी में एक सुसज्जित फिटनेस सेंटर और व्यायामशाला भी है, जो छात्रों और कर्मचारियों के बीच शक्ति प्रशिक्षण, हृदय स्वास्थ्य और समग्र कल्याण को बढ़ावा देता है। एमजीयूजी छात्रों को सर्वांगीण व्यक्तियों के पोषण के प्रति अपनी प्रतिबद्धता के हिस्से के रूप में नियमित अभ्यास, अंतर-कॉलेजिएट प्रतियोगिताओं और विश्वविद्यालय-स्तरीय चैंपियनशिप में शामिल होने के लिए प्रोत्साहित करता है।",
      english:
        "In addition to the upcoming stadium, the university is equipped with well-maintained sports facilities for indoor games such as volleyball, kabaddi, athletics, badminton, table tennis, carrom, and chess. MGUG also houses a well-equipped fitness centre and gymnasium, promoting strength training, cardiovascular health, and overall wellness among students and staff. MGUG encourages students to engage in regular practice, intercollegiate competitions, and university-level championships as part of its commitment to nurturing well-rounded individuals.",
    },
  ],
};

export const wellnessData: WellnessPageContent = {
  pageTitle: {
    hindi: "परामर्श और शिकायत सहायता",
    english: "Counselling & Grievance Support",
  },
  pageSubtitle: {
    hindi: "मानसिक कल्याण के लिए सहायक संसाधन और प्रचार सामग्री तक पहुँचें।",
    english:
      "Access helpful resources and promotional materials for mental well-being.",
  },
  flyers: [
    {
      title: {
        hindi:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
        english:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
      },
      link: "https://telemanas.mohfw.gov.in/promotional_material/english/G20_flyer1.png",
      description: {
        hindi:
          "G20 पहल के हिस्से के रूप में मानसिक स्वास्थ्य जागरूकता के संबंध में आधिकारिक प्रचार सामग्री।",
        english:
          "Official promotional material regarding mental health awareness, part of the G20 initiative.",
      },
    },
    {
      title: {
        hindi:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
        english:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
      },
      link: "https://telemanas.mohfw.gov.in/promotional_material/english/G20_flyer2.png",
      description: {
        hindi:
          "G20 पहल के हिस्से के रूप में मानसिक स्वास्थ्य जागरूकता के संबंध में आधिकारिक प्रचार सामग्री।",
        english:
          "Official promotional material regarding mental health awareness, part of the G20 initiative.",
      },
    },
    {
      title: {
        hindi:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
        english:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
      },
      link: "https://telemanas.mohfw.gov.in/promotional_material/english/G20_flyer3.png",
      description: {
        hindi:
          "G20 पहल के हिस्से के रूप में मानसिक स्वास्थ्य जागरूकता के संबंध में आधिकारिक प्रचार सामग्री।",
        english:
          "Official promotional material regarding mental health awareness, part of the G20 initiative.",
      },
    },
    {
      title: {
        hindi:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
        english:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
      },
      link: "https://telemanas.mohfw.gov.in/promotional_material/english/G20_flyer4.png",
      description: {
        hindi:
          "G20 पहल के हिस्से के रूप में मानसिक स्वास्थ्य जागरूकता के संबंध में आधिकारिक प्रचार सामग्री।",
        english:
          "Official promotional material regarding mental health awareness, part of the G20 initiative.",
      },
    },
    {
      title: {
        hindi:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
        english:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
      },
      link: "https://telemanas.mohfw.gov.in/promotional_material/english/G20_flyer5.png",
      description: {
        hindi:
          "G20 पहल के हिस्से के रूप में मानसिक स्वास्थ्य जागरूकता के संबंध में आधिकारिक प्रचार सामग्री।",
        english:
          "Official promotional material regarding mental health awareness, part of the G20 initiative.",
      },
    },
    {
      title: {
        hindi:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
        english:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
      },
      link: "https://telemanas.mohfw.gov.in/promotional_material/english/G20_flyer6.png",
      description: {
        hindi:
          "G20 पहल के हिस्से के रूप में मानसिक स्वास्थ्य जागरूकता के संबंध में आधिकारिक प्रचार सामग्री।",
        english:
          "Official promotional material regarding mental health awareness, part of the G20 initiative.",
      },
    },
    {
      title: {
        hindi:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
        english:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
      },
      link: "https://telemanas.mohfw.gov.in/promotional_material/english/Banner1.png",
      description: {
        hindi:
          "G20 पहल के हिस्से के रूप में मानसिक स्वास्थ्य जागरूकता के संबंध में आधिकारिक प्रचार सामग्री।",
        english:
          "Official promotional material regarding mental health awareness, part of the G20 initiative.",
      },
    },
    {
      title: {
        hindi:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
        english:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
      },
      link: "https://telemanas.mohfw.gov.in/promotional_material/english/Banner2.png",
      description: {
        hindi:
          "G20 पहल के हिस्से के रूप में मानसिक स्वास्थ्य जागरूकता के संबंध में आधिकारिक प्रचार सामग्री।",
        english:
          "Official promotional material regarding mental health awareness, part of the G20 initiative.",
      },
    },
    {
      title: {
        hindi:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
        english:
          "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
      },
      link: "https://telemanas.mohfw.gov.in/promotional_material/english/who_can_call.png",
      description: {
        hindi:
          "G20 पहल के हिस्से के रूप में मानसिक स्वास्थ्य जागरूकता के संबंध में आधिकारिक प्रचार सामग्री।",
        english:
          "Official promotional material regarding mental health awareness, part of the G20 initiative.",
      },
    },
  ],
};

export const feePolicyData: FeePolicyContent = {
  pageTitle: {
    hindi: "शुल्क भुगतान और वापसी नीति",
    english: "Fee Payment and Refund Policy",
  },
  sections: [
    {
      title: {
        hindi: "1. प्रवेश शुल्क भुगतान",
        english: "1. Admission Fee Payment",
      },
      mainParagraph: {
        hindi:
          "छात्रों को प्रवेश शुल्क सेमेस्टर या वार्षिक आधार पर देना अनिवार्य है।",
        english:
          "Students must pay the admission fee semester-wise or annually, as applicable.",
      },
      subsections: [
        {
          title: { hindi: "सेमेस्टर प्रणाली:", english: "Semester System:" },
          points: [
            {
              hindi: "✅ प्रवेश के समय सेमेस्टर शुल्क जमा करना अनिवार्य है।",
              english: "✅ Semester fee must be paid at admission time.",
            },
            {
              hindi:
                "✅ आगामी सेमेस्टर का शुल्क विश्वविद्यालय की समय-सीमा अनुसार देना होगा।",
              english:
                "✅ Next semester’s fee must be paid as per notified timeline.",
            },
            {
              hindi:
                "✅ परीक्षा शुल्क ऑनलाइन परीक्षा फॉर्म भरते समय देना होगा।",
              english: "✅ Exam fee due at exam form submission.",
            },
          ],
        },
        {
          title: { hindi: "वार्षिक प्रणाली:", english: "Annual System:" },
          points: [
            {
              hindi: "✅ प्रथम वर्ष का शुल्क प्रवेश के समय देना होगा।",
              english: "✅ First year fee at admission.",
            },
            {
              hindi:
                "✅ आगामी वर्षों का शुल्क विश्वविद्यालय की अधिसूचना अनुसार देना होगा।",
              english: "✅ Future years’ fee as per university timeline.",
            },
            {
              hindi: "✅ परीक्षा शुल्क परीक्षा फॉर्म भरते समय देना होगा।",
              english: "✅ Exam fee due at exam form submission.",
            },
          ],
        },
      ],
      note: {
        hindi: "🔸 नोट: किस्तों में भुगतान की सुविधा नहीं है।",
        english: "🔸 Note: No installment facility.",
      },
    },
    {
      title: {
        hindi: "2. प्रवेश रद्दीकरण और शुल्क वापसी",
        english: "2. Admission Cancellation & Fee Refund",
      },
      mainParagraph: {
        hindi:
          "सामान्यतः प्रवेश रद्द नहीं किया जाता, परंतु विशेष मामलों में कुलपति द्वारा अनुमति दी जा सकती है।",
        english:
          "Generally not allowed. Vice-Chancellor may permit in exceptional cases.",
      },
      points: [
        {
          hindi: "- 7 दिनों के भीतर: ₹5,000/- कटौती के बाद वापसी।",
          english: "- Within 7 days: ₹5,000/- deduction.",
        },
        {
          hindi: "- 7 दिन के बाद: कोई वापसी नहीं।",
          english: "- After 7 days: No refund.",
        },
        {
          hindi:
            "- प्रवेश अंतिम तिथि से 7 दिन पूर्व की गई प्रविष्टियों पर: वापसी लागू नहीं।",
          english: "- Within 7 days of deadline: No refund.",
        },
      ],
    },
    {
      title: {
        hindi: "3. छात्रावास आवंटन और शुल्क भुगतान",
        english: "3. Hostel Allotment & Fee Payment",
      },
      mainParagraph: {
        hindi:
          "छात्रावास का आवंटन प्रवेश/काउंसलिंग के दौरान ऑफलाइन किया जाता है। नवप्रवेशित छात्रों को आवंटन के समय एकमुश्त शुल्क देना होगा।",
        english:
          "Offline allotment during admission/counseling. One-time hostel fee at allotment for freshers.",
      },
      subsections: [
        {
          title: {
            hindi: "🛏️ छात्रावास शुल्क संरचना:",
            english: "🛏️ Hostel Fee Structure:",
          },
          points: [
            {
              hindi: "- छात्राओं के लिए: ₹65,000/- प्रति वर्ष (भोजन सहित)",
              english: "- Girls’ Hostel: ₹65,000/year (includes food)",
            },
            {
              hindi: "- छात्रों के लिए: ₹75,000/- प्रति वर्ष (भोजन सहित)",
              english: "- Boys’ Hostel: ₹75,000/year (includes food)",
            },
          ],
        },
        {
          title: {
            hindi: "🏠 अतिरिक्त दिशा-निर्देश:",
            english: "🏠 Additional Guidelines:",
          },
          points: [
            {
              hindi:
                "- पूर्ववत रह रहे छात्रों को हर वर्ष जुलाई में शुल्क देना होगा।",
              english: "- Existing students must pay hostel fee each July.",
            },
            {
              hindi: "- छात्रावास आवंटन हर वर्ष नवीनीकरण होगा।",
              english: "- Hostel renewed annually.",
            },
            {
              hindi: "- 10% कक्ष अंतरराष्ट्रीय छात्रों के लिए आरक्षित।",
              english: "- 10% reserved for international students.",
            },
            {
              hindi: "- मूलभूत सुविधाएं उपलब्ध कराई जाती हैं।",
              english: "- Basic amenities provided.",
            },
          ],
        },
      ],
    },
    {
      title: {
        hindi: "4. छात्रावास रद्दीकरण और शुल्क वापसी",
        english: "4. Hostel Cancellation & Refund",
      },
      mainParagraph: {
        hindi: "शैक्षणिक वर्ष में रद्दीकरण की अनुमति नहीं है।",
        english: "Cancellation not allowed during academic year.",
      },
      points: [
        {
          hindi: "- 7 दिनों के भीतर: ₹5,000/- कटौती के बाद वापसी।",
          english: "- Within 7 days: Refund after ₹5,000/- deduction.",
        },
        {
          hindi: "- 7 दिन के बाद: कोई वापसी नहीं।",
          english: "- After 7 days: No refund.",
        },
      ],
      note: {
        hindi: "📌 नोट: छात्रावास अधिकार नहीं, बल्कि एक विशेष सुविधा है।",
        english: "📌 Note: Hostel is a privilege, not a right.",
      },
    },
  ],
};

export const studentZone: StudentZone = {
  title: {
    english: "Student Zone",
    hindi: "छात्र क्षेत्र",
  },
  heading: {
    english:
      "Your one-stop destination for all academic resources, support services, and campus information.",
    hindi:
      "सभी शैक्षणिक संसाधनों, सहायता सेवाओं और परिसर की जानकारी के लिए आपका वन-स्टॉप गंतव्य।",
  },
};
