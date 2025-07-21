import type {
  AcademicCalendarContent,
  ExaminationManualContent,
  MagazineTitles,
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
