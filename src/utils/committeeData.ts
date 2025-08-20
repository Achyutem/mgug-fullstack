import type {
  AntiRaggingMember,
  CommitteeMember,
  CommitteeTitles,
  InternalCommitteeMember,
  InternalCommitteeTitles,
  ItCommitteeMember,
  Ombudsperson,
  SGRCCommitteeMember,
  SGRCCommitteeTitles,
} from "./types";

export const financeCommitteeTitles: CommitteeTitles = {
  heading: {
    hindi: "वित्त समिति",
    english: "Finance Committee",
  },
  headers: {
    srNo: {
      hindi: "क्रमांक",
      english: "Sr. No",
    },
    nameDesignation: {
      hindi: "नाम और पदनाम",
      english: "Name & Designation",
    },
    role: {
      hindi: "दायित्व",
      english: "Role",
    },
    status: {
      hindi: "नामित/पदेन",
      english: "Nominated/Ex-Officio",
    },
  },
};

export const financeCommitteeData: CommitteeMember[] = [
  {
    srNo: 1,
    name: {
      hindi: "डॉ. सुरिंदर सिंह",
      english: "Dr. Surinder Singh",
    },
    designation: {
      hindi: "कुलपति",
      english: "Vice Chancellor",
    },
    role: {
      hindi: "अध्यक्ष",
      english: "Chairperson",
    },
    status: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
  },
  {
    srNo: 2,
    name: {
      hindi: "डॉ. शैलेंद्र प्रताप सिंह",
      english: "Dr. Shailendra Pratap Singh",
    },
    designation: {
      hindi: "सदस्य, महाराणा प्रताप शिक्षा परिषद",
      english: "Member, Maharana Pratap Shiksha Parishad",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    status: {
      hindi: "नामित",
      english: "Nominated",
    },
  },
  {
    srNo: 3,
    name: {
      hindi: "श्री प्रमथ नाथ मिश्र",
      english: "Shri Pramath Nath Mishra",
    },
    designation: {
      hindi: "वरिष्ठ अधिवक्ता",
      english: "Senior Advocate",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    status: {
      hindi: "नामित",
      english: "Nominated",
    },
  },
  {
    srNo: 4,
    name: {
      hindi: "डॉ. डी.एस. अजीथा",
      english: "Dr. D.S. Ajitha",
    },
    designation: {
      hindi: "डीन, नर्सिंग संकाय",
      english: "Dean, Faculty of Nursing",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    status: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
  },
  {
    srNo: 5,
    name: {
      hindi: "डॉ. प्रदीप कुमार राव",
      english: "Dr. Pradeep Kumar Rao",
    },
    designation: {
      hindi: "कुलसचिव",
      english: "Registrar",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    status: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
  },
  {
    srNo: 6,
    name: {
      hindi: "श्री अनिल सिंह",
      english: "Shri Anil Singh",
    },
    designation: {
      hindi: "सी.ई.ओ.",
      english: "CEO",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    status: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
  },
  {
    srNo: 7,
    name: {
      hindi: "डॉ. प्रदीप कुमार राव",
      english: "Dr. Pradeep Kumar Rao",
    },
    designation: {
      hindi: "वित्त अधिकारी",
      english: "Finance Officer",
    },
    role: {
      hindi: "सचिव",
      english: "Secretary",
    },
    status: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
  },
];

export const sgrcCommitteeTitles: SGRCCommitteeTitles = {
  heading: {
    hindi: "छात्र शिकायत निवारण समिति",
    english: "Student's Grievance Redressal Committee",
  },
  headers: {
    srNo: {
      hindi: "क्रमांक",
      english: "S. No.",
    },
    name: {
      hindi: "नाम",
      english: "Name",
    },
    designation: {
      hindi: "पदनाम",
      english: "Designation",
    },
    role: {
      hindi: "दायित्व",
      english: "Role",
    },
  },
};

export const sgrcCommitteeData: SGRCCommitteeMember[] = [
  {
    srNo: 1,
    name: {
      hindi: "डॉ. डी एस अजीथा",
      english: "Dr. D S Ajitha",
    },
    designation: {
      hindi: "प्राचार्य, गुरु श्री गोरक्षनाथ कॉलेज ऑफ नर्सिंग",
      english: "Principal, Guru Shree Gorakshnath College of Nursing",
    },
    role: {
      hindi: "अध्यक्ष (महिला)",
      english: "Chairperson (Female)",
    },
  },
  {
    srNo: 2,
    name: {
      hindi: "डॉ. मिनी के. वी.",
      english: "Dr. Mini Kim",
    },
    designation: {
      hindi: "आचार्य, शारीरिक शिक्षा विभाग, आयुर्वेदिक कॉलेज",
      english: "Professor, English",
    },
    role: {
      hindi: "सदस्य (अन्य पिछड़ा वर्ग-महिला)",
      english: "Member (OBC-Female)",
    },
  },
  {
    srNo: 3,
    name: {
      hindi: "प्रो. डी. जेनी",
      english: "Prof. D. Jenny",
    },
    designation: {
      hindi: "आचार्य, गुरु श्री गोरक्षनाथ कॉलेज ऑफ नर्सिंग",
      english: "Professor, Guru Shree Gorakshnath College of Nursing",
    },
    role: {
      hindi: "सदस्य (अन्य पिछड़ा वर्ग-महिला)",
      english: "Member (OBC-Female)",
    },
  },
  {
    srNo: 4,
    name: {
      hindi: "प्रो. डॉ. गोपी कृष्ण एस.",
      english: "Prof. Dr. Gopi Krishna S.",
    },
    designation: {
      hindi: "आचार्य, आयुर्वेदिक कॉलेज",
      english: "Professor, Ayurvedic College",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 5,
    name: {
      hindi: "डॉ. विमल कुमार दुबे",
      english: "Dr. Vimal Kumar Dubey",
    },
    designation: {
      hindi: "डीन, कृषि विज्ञान",
      english: "Dean, Agricultural Sciences",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 6,
    name: {
      hindi: "श्री शिवम पांडे",
      english: "Shri Shivam Pandey",
    },
    designation: {
      hindi: "छात्र, बी.एससी (जैव प्रौद्योगिकी)",
      english: "Student, B.Sc (Biotechnology)",
    },
    role: {
      hindi: "छात्र सदस्य",
      english: "Student Member",
    },
  },
];

export const ombudspersonData: Ombudsperson = {
  post: {
    hindi: "लोकपाल",
    english: "Ombuds Person",
  },
  name: {
    hindi: "प्रो. वी. के. सिंह",
    english: "Prof. V. K. Singh",
  },
  designation: {
    hindi: "पूर्व कुलपति, दीनदयाल उपाध्याय गोरखपुर विश्वविद्यालय",
    english: "Former Vice-Chancellor, DDU Gorakhpur University",
  },
  contact: {
    phone: "+91-7905468594",
    email: "singhvijaikrishna9@gmail.com",
  },
};

export const AntiRaggingcommittee: AntiRaggingMember[] = [
  {
    no: 1,
    name: { hindi: "डॉ. विमल कुमार दुबे", english: "Dr. Vimal Kumar Dubey" },
    designation: {
      hindi: "मुख्य प्रॉक्टर, अध्यक्ष",
      english: "Chief Proctor, Chair Person",
    },
    phone: "9999764424",
  },
  {
    no: 2,
    name: { hindi: "प्रो. सुनील कुमार", english: "Prof. Sunil Kumar" },
    designation: {
      hindi: "डीन, संबद्ध स्वास्थ्य विज्ञान संकाय, समन्वयक",
      english: "Dean, Faculty of Allied Health Sciences, Co-ordinator",
    },
    phone: "7007638374",
  },
  {
    no: 3,
    name: { hindi: "डॉ. डी.एस. अजीथा", english: "Dr. D.S. Ajitha" },
    designation: { hindi: "प्राचार्य, सदस्य", english: "Principal, Member" },
    phone: "8840477265",
  },
  {
    no: 4,
    name: { hindi: "डॉ. मंजुनाथ एनएस", english: "Dr. Manjunath NS" },
    designation: {
      hindi: "प्राचार्य, जीजीआईएमएस, सदस्य",
      english: "Principal, GGIMS, Member",
    },
    phone: "9886728745",
  },
  {
    no: 5,
    name: { hindi: "श्री रोहित कुमार", english: "Shri Rohit Kumar" },
    designation: {
      hindi: "प्राचार्य, महंत अवैद्यनाथ पैरामेडिकल कॉलेज, सदस्य",
      english: "Principal, Mahant Avaidyanath Paramedical College, Member",
    },
    phone: "7394086797",
  },
  {
    no: 6,
    name: { hindi: "श्री आशीष चौधरी", english: "Shri Ashish Chaudhary" },
    designation: {
      hindi: "छात्र, बीएएमएस, छात्र प्रतिनिधि",
      english: "Student, BAMS, Student Representative",
    },
    phone: "8933854299",
  },
];

export const AntiRaggingsquad: AntiRaggingMember[] = [
  {
    no: 1,
    name: { hindi: "डॉ. शशिकांत सिंह", english: "Dr. Shashikant Singh" },
    designation: {
      hindi: "प्राचार्य, फार्मास्युटिकल साइंसेज संकाय, अध्यक्ष",
      english: "Principal, Faculty of Pharmaceutical Sciences, Chairperson",
    },
    phone: "7007546991",
  },
  {
    no: 2,
    name: { hindi: "डॉ. रेशमी पुष्पन", english: "Dr. Reshmi Pushpan" },
    designation: {
      hindi: "प्रोफेसर, अगद तंत्र, जीजीआईएमएस",
      english: "Professor, Agad Tantra, GGIMS",
    },
    phone: "8289933175",
  },
  {
    no: 3,
    name: { hindi: "डॉ. दीपू मनोहर", english: "Dr. Deepu Manohar" },
    designation: {
      hindi: "सहायक प्रोफेसर, रचना शारीर, जीजीआईएमएस",
      english: "Assistant Prof., Rachana Sharir, GGIMS",
    },
    phone: "7068152117",
  },
  {
    no: 4,
    name: {
      hindi: "डॉ. अखिलेश कुमार दुबे",
      english: "Dr. Akhilesh Kumar Dubey",
    },
    designation: {
      hindi: "सहायक प्रोफेसर, संबद्ध स्वास्थ्य विज्ञान, समन्वयक",
      english: "Assistant Prof., Allied Health Sciences, Coordinator",
    },
    phone: "9451520116",
  },
  {
    no: 5,
    name: { hindi: "डॉ. विकास कुमार यादव", english: "Dr. Vikas Kumar Yadav" },
    designation: {
      hindi: "सहायक प्रोफेसर, कृषि विभाग, सदस्य",
      english: "Assistant Prof., Agriculture Dept., Member",
    },
    phone: "9565919002",
  },
  {
    no: 6,
    name: { hindi: "सुश्री प्रज्ञा पांडे", english: "Ms. Pragya Pandey" },
    designation: {
      hindi: "अधीक्षक, माँ पाटेश्वरी सेवा श्रम हॉस्टल, सदस्य",
      english: "Superintendent, Maa Pateshwari Sevashram Hostel, Member",
    },
    phone: "6202190347",
  },
  {
    no: 7,
    name: { hindi: "सुश्री रिंकी सिंह", english: "Ms. Rinki Singh" },
    designation: {
      hindi: "ट्यूटर, जीएसजी नर्सिंग कॉलेज, सदस्य",
      english: "Tutor, GSG College of Nursing, Member",
    },
    phone: "8957120500",
  },
  {
    no: 8,
    name: { hindi: "सुश्री श्वेता अल्बर्ट", english: "Ms. Shweta Albert" },
    designation: {
      hindi: "ट्यूटर, जीएसजी नर्सिंग कॉलेज, सदस्य",
      english: "Tutor, GSG College of Nursing, Member",
    },
    phone: "8687894954",
  },
  {
    no: 9,
    name: {
      hindi: "श्री शुभम कुमार मौर्या",
      english: "Mr. Shubham Kumar Maurya",
    },
    designation: {
      hindi: "ट्यूटर, एमएपी कॉलेज, सदस्य",
      english: "Tutor, MAP College, Member",
    },
    phone: "8477077041",
  },
];

export const ItCommitteeMembers: ItCommitteeMember[] = [
  {
    image: "/admin/it-team/prashanthMurthy.jpg",
    name: {
      hindi: "डॉ. प्रशांत एस.",
      english: "Dr. Prashanth S.",
    },
    designation: {
      hindi: "डीन एकेडमिक्स",
      english: "Dean Academics",
    },
  },
  {
    image: "/sample.webp",
    name: { hindi: "अविनाश कमल मिश्रा", english: "Avinash Kamal Mishra" },
    designation: { hindi: "ई.आर.पी डेवलपर", english: "ERP Developer" },
  },
  {
    image: "/admin/it-team/kamalNayan.jpg",
    name: { hindi: "कमल नयन श्रीवास्तव", english: "Kamal Nayan Srivastava" },
    designation: {
      hindi: "आईटी अधिकारी",
      english: "IT Officer",
    },
  },
  {
    image: "/admin/it-team/anandMishra.jpg",
    name: { hindi: "आनंद मिश्रा", english: "Anand Mishra" },
    designation: { hindi: "सिस्टम व्यवस्थापक", english: "System Admin" },
  },
  {
    image: "/admin/it-team/sharadanandPandey.jpg",
    name: { hindi: "शरदनंद पांडे", english: "Sharadanand Pandey" },
    designation: { hindi: "ग्राफिक डिज़ाइनर", english: "Graphic Designer" },
  },
  {
    image: "/sample.webp",
    name: { hindi: "सनी कुमार", english: "Sunny Kumar" },
    designation: { hindi: "नेटवर्क व्यवस्थापक", english: "Network Admin" },
  },
  {
    image: "/sample.webp",
    name: { hindi: "ओमकार यादव", english: "Omkar Yadav" },
    designation: { hindi: "वेब डेवलपर", english: "Web Developer" },
  },
  {
    image: "/sample.webp",
    name: { hindi: "रवि यादव", english: "Ravi Yadav" },
    designation: { hindi: "सामग्री निर्माता", english: "Content Creator" },
  },
  {
    image: "/sample.webp",
    name: { hindi: "अंकित कुमार सिंह", english: "Ankit Kumar Singh" },
    designation: { hindi: "जूनियर डेवलपर", english: "Junior Developer" },
  },
  {
    image: "/sample.webp",
    name: { hindi: "अच्युतम दुबे", english: "Achyutem Dubey" },
    designation: { hindi: "वेब डेवलपर", english: "Web Developer" },
  },
];

export const antiRaggingContent = {
  hindi: {
    heading: "रैगिंग विरोधी नीति",
    whatIsRagging: "रैगिंग क्या है?",
    raggingDefinition:
      "कोई भी अव्यवस्थित आचरण... जो किसी नए या जूनियर छात्र के शारीरिक या मनोवैज्ञानिक कल्याण को प्रतिकूल रूप से प्रभावित करता हो।",
    reportInstruction:
      "रैगिंग का अनुभव करने या देखने वाले छात्रों को तुरंत किसी समिति सदस्य को इसकी सूचना देनी चाहिए। डीन ऑफ स्टूडेंट्स वेलफेयर तीन दिनों के भीतर जांच शुरू करने के लिए बैठक बुलाएंगे।",
    punishments: {
      verbal: "मौखिक रैगिंग: 1 वर्ष का कारावास या जुर्माना",
      severeVerbal: "गंभीर मौखिक रैगिंग: 7 वर्ष का कारावास और जुर्माना",
      physical: "शारीरिक रैगिंग: 7 वर्ष का कारावास और जुर्माना",
      sexual: "यौन रैगिंग: 7 वर्ष का कठोर कारावास और जुर्माना",
    },
    helpline: {
      title: "राष्ट्रीय रैगिंग विरोधी हेल्पलाइन",
      tollFree: "टोल-फ्री: 1800-180-5522",
      email: "helpline@antiragging.in",
      website: "www.antiragging.in",
    },
    reportButton: "रिपोर्ट करने के लिए क्लिक करें!",
    committeeHeading: "रैगिंग विरोधी समिति",
    squadHeading: "रैगिंग विरोधी दस्ता",
  },
  english: {
    heading: "Anti-Ragging Policy",
    whatIsRagging: "What is Ragging?",
    raggingDefinition:
      "Any disorderly conduct... embarrassment, and adversely affect the physical or psychological well-being of a fresher or junior student.",
    reportInstruction:
      "Students who experience or witness ragging must report it immediately to any committee member. The Dean of Students' Welfare will convene a meeting within 3 days to initiate investigation.",
    punishments: {
      verbal: "Verbal Ragging: 1 year imprisonment or fine",
      severeVerbal: "Severe Verbal Ragging: 7 years imprisonment with fine",
      physical: "Physical Ragging: 7 years imprisonment with fine",
      sexual: "Sexual Ragging: 7 years rigorous imprisonment with fine",
    },
    helpline: {
      title: "National Anti-Ragging Helpline",
      tollFree: "Toll-Free: 1800-180-5522",
      email: "helpline@antiragging.in",
      website: "www.antiragging.in",
    },
    reportButton: "Click to Report!",
    committeeHeading: "Anti-Ragging Committee",
    squadHeading: "Anti-Ragging Squad",
  },
};

export const itCommitteeTitles = {
  heading: {
    hindi: "आईटी टीम",
    english: "IT Team",
  },
};

export const examinationCommitteeContent = {
  hindi: {
    heading: "परीक्षा समिति",
    rules: {
      a: {
        description:
          "विश्वविद्यालय में परीक्षा संबंधी मामलों की देखरेख के लिए एक परीक्षा समिति होगी। इसमें निम्नलिखित शामिल होंगे:",
        committeeMembers: [
          {
            name: { hindi: "उपकुलपति", english: "Vice-Chancellor" },
            designation: { hindi: "अध्यक्ष", english: "Chairperson" },
          },
          {
            name: {
              hindi: "प्रोफेसर (नामित)",
              english: "Professor (Nominated)",
            },
            designation: { hindi: "सदस्य", english: "Member" },
          },
          {
            name: {
              hindi: "सहयोगी प्रोफेसर (नामित)",
              english: "Associate Professor (Nominated)",
            },
            designation: { hindi: "सदस्य", english: "Member" },
          },
          {
            name: {
              hindi: "सहायक प्रोफेसर (नामित)",
              english: "Assistant Professor (Nominated)",
            },
            designation: { hindi: "सदस्य", english: "Member" },
          },
          {
            name: { hindi: "सभी डीन", english: "All Deans" },
            designation: { hindi: "सदस्य", english: "Members" },
          },
          {
            name: { hindi: "कुलसचिव", english: "Registrar" },
            designation: { hindi: "सदस्य", english: "Member" },
          },
          {
            name: {
              hindi: "परीक्षा नियंत्रक",
              english: "Controller of Examinations",
            },
            designation: {
              hindi: "पदेन सचिव",
              english: "Ex-officio Secretary",
            },
          },
          {
            name: {
              hindi: "दो छात्र प्रतिनिधि",
              english: "Two Student Representatives",
            },
            designation: {
              hindi: "नामित, गोपनीय बैठकों में अनुमति नहीं",
              english: "Nominated by VC, not allowed in confidential meetings",
            },
          },
        ],
      },
      b: "परीक्षा समिति की बैठक वर्ष में कम से कम दो बार होगी। हालांकि, उपकुलपति के निर्देश पर परीक्षा नियंत्रक द्वारा परीक्षा संबंधी मामलों के हित में इसे किसी भी समय बुलाया जा सकता है।",
      c: "परीक्षा समिति शैक्षणिक परिषद को डिग्री, डिप्लोमा, सम्मान और उपाधियों के प्रदान या अनुदान के संबंध में सिफारिशें करेगी।",
      d: "परीक्षाओं के सुचारू संचालन के लिए, विश्वविद्यालय का सारा बुनियादी ढांचा और कर्मचारी परीक्षा समिति के प्रशासनिक और अनुशासनात्मक नियंत्रण के अधीन माने जाएंगे और तदनुसार उपयोग किए जाएंगे।",
      e: "समिति, अपनी उप-समिति की सिफारिशों पर, किसी परीक्षार्थी को दुराचार, कदाचार, या अनुचित साधनों के उपयोग के लिए दोषी पाए जाने पर परीक्षा में शामिल होने से रोक सकती है।",
      f: "समिति, उप-समिति की सिफारिशों के आधार पर, शैक्षणिक अनुचितता के लिए दोषी पाए गए परीक्षक/संकाय/कर्मचारी के खिलाफ अनुशासनात्मक कार्रवाई या निषेध प्रस्तावित कर सकती है।",
      g: "परीक्षा समिति परीक्षा नीतियों को तैयार करेगी।",
      h: {
        description: "विश्वविद्यालय निम्नलिखित बोर्डों का भी गठन कर सकता है:",
        boards: [
          {
            name: {
              hindi: "छात्र कल्याण बोर्ड",
              english: "Board of Student Welfare",
            },
          },
          {
            name: { hindi: "समन्वय बोर्ड", english: "Board of Co-ordination" },
          },
          {
            name: {
              hindi: "महिला सलाहकार बोर्ड",
              english: "Women Advisory Board",
            },
          },
          {
            name: {
              hindi: "स्वास्थ्य, निवास और अनुशासन बोर्ड",
              english: "Board of Health, Residence and Discipline",
            },
          },
          {
            name: {
              hindi: "सामाजिक कार्य बोर्ड",
              english: "Board of Social Works",
            },
          },
          {
            name: {
              hindi: "विश्वविद्यालय एथलेटिक संघ",
              english: "University Athletic Association",
            },
          },
          {
            name: {
              hindi: "अतिरिक्त पाठ्यचर्या गतिविधियों का बोर्ड",
              english: "Board of Extramural Activities",
            },
          },
          {
            name: {
              hindi: "यौन उत्पीड़न समिति",
              english: "Sexual Harassment Committee",
            },
          },
          {
            name: {
              hindi: "रैगिंग विरोधी समिति",
              english: "Anti Ragging Committee",
            },
          },
          {
            name: {
              hindi: "आंतरिक गुणवत्ता आश्वासन सेल (आईक्यूएसी)",
              english: "Internal Quality Assurance Cell (IQAC)",
            },
          },
        ],
      },
      i: "उपरोक्त बोर्डों की शक्तियां, कार्य और संरचना अध्यादेशों में निर्धारित की जाएंगी।",
      j: "विश्वविद्यालय परिषद, बोर्ड, समितियों और सेलों के गठन, भूमिकाओं और शक्तियों के लिए समय-समय पर अध्यादेश बना सकता है।",
      k: "अन्य सभी मामले विश्वविद्यालय अधिनियम या निर्धारित के अनुसार शासित होंगे।",
    },
  },
  english: {
    heading: "Examination Committee",
    rules: {
      a: {
        description:
          "There shall be an Examination Committee in the University for looking after the affairs related to the examinations. It shall consist of the following:",
        committeeMembers: [
          {
            name: { hindi: "उपकुलपति", english: "Vice-Chancellor" },
            designation: { hindi: "अध्यक्ष", english: "Chairperson" },
          },
          {
            name: {
              hindi: "प्रोफेसर (नामित)",
              english: "Professor (Nominated)",
            },
            designation: { hindi: "सदस्य", english: "Member" },
          },
          {
            name: {
              hindi: "सहयोगी प्रोफेसर (नामित)",
              english: "Associate Professor (Nominated)",
            },
            designation: { hindi: "सदस्य", english: "Member" },
          },
          {
            name: {
              hindi: "सहायक प्रोफेसर (नामित)",
              english: "Assistant Professor (Nominated)",
            },
            designation: { hindi: "सदस्य", english: "Member" },
          },
          {
            name: { hindi: "सभी डीन", english: "All Deans" },
            designation: { hindi: "सदस्य", english: "Members" },
          },
          {
            name: { hindi: "कुलसचिव", english: "Registrar" },
            designation: { hindi: "सदस्य", english: "Member" },
          },
          {
            name: {
              hindi: "परीक्षा नियंत्रक",
              english: "Controller of Examinations",
            },
            designation: {
              hindi: "पदेन सचिव",
              english: "Ex-officio Secretary",
            },
          },
          {
            name: {
              hindi: "दो छात्र प्रतिनिधि",
              english: "Two Student Representatives",
            },
            designation: {
              hindi: "नामित, गोपनीय बैठकों में अनुमति नहीं",
              english: "Nominated by VC, not allowed in confidential meetings",
            },
          },
        ],
      },
      b: "The Examination Committee shall meet at least twice a year. However, it may be convened anytime by the Controller of Examinations as per the Vice-Chancellor’s direction in the interest of examination-related affairs.",
      c: "The Examination Committee shall make recommendations to the Academic Council regarding conferment or grant of degrees, diplomas, honors, and titles.",
      d: "For smooth conduct of examinations, all infrastructure and staff of the University shall be deemed under the administrative and disciplinary control of the Examination Committee and utilized accordingly.",
      e: "The Committee may, on recommendations of its sub-committee, debar an examinee from appearing in examinations if found guilty of misbehavior, misconduct, or using unfair means.",
      f: "The Committee may, based on sub-committee recommendations, propose disciplinary action or debar an examiner/faculty/staff if found guilty of academic impropriety.",
      g: "The Examination Committee shall formulate examination policies.",
      h: {
        description: "The University may also constitute the following Boards:",
        boards: [
          {
            name: {
              hindi: "छात्र कल्याण बोर्ड",
              english: "Board of Student Welfare",
            },
          },
          {
            name: { hindi: "समन्वय बोर्ड", english: "Board of Co-ordination" },
          },
          {
            name: {
              hindi: "महिला सलाहकार बोर्ड",
              english: "Women Advisory Board",
            },
          },
          {
            name: {
              hindi: "स्वास्थ्य, निवास और अनुशासन बोर्ड",
              english: "Board of Health, Residence and Discipline",
            },
          },
          {
            name: {
              hindi: "सामाजिक कार्य बोर्ड",
              english: "Board of Social Works",
            },
          },
          {
            name: {
              hindi: "विश्वविद्यालय एथलेटिक संघ",
              english: "University Athletic Association",
            },
          },
          {
            name: {
              hindi: "अतिरिक्त पाठ्यचर्या गतिविधियों का बोर्ड",
              english: "Board of Extramural Activities",
            },
          },
          {
            name: {
              hindi: "यौन उत्पीड़न समिति",
              english: "Sexual Harassment Committee",
            },
          },
          {
            name: {
              hindi: "रैगिंग विरोधी समिति",
              english: "Anti Ragging Committee",
            },
          },
          {
            name: {
              hindi: "आंतरिक गुणवत्ता आश्वासन सेल (आईक्यूएसी)",
              english: "Internal Quality Assurance Cell (IQAC)",
            },
          },
        ],
      },
      i: "The powers, functions, and constitution of the Boards mentioned above shall be as laid down in the Ordinances.",
      j: "The University may frame Ordinances from time to time for the constitution, roles, and powers of the Council, Boards, Committees, and Cells.",
      k: "All other matters shall be governed as per the University Act or as prescribed.",
    },
  },
};

export const internalComplaintsCommitteeData: InternalCommitteeMember[] = [
  {
    srNo: 1,
    name: {
      hindi: "डॉ. डी. एस. अजीथा, अधिष्ठाता, नर्सिंग एवं पैरामेडिकल संकाय",
      english: "Dr. D. S. Ajitha, Dean, Faculty of Nursing & Paramedical",
    },
    role: {
      hindi: "पीठासीन अधिकारी",
      english: "Presiding Officer",
    },
    contactNo: "8840477265",
    emailId: "ds.ajitha@mgug.ac.in",
  },
  {
    srNo: 2,
    name: {
      hindi: "डॉ. मिनी के वी, आचार्य, जी. जी. आई. एम. एस. (आयुर्वेद)",
      english: "Dr. Mini K V, Professor, GGIMS (Ayurveda College)",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    contactNo: "9557580429",
    emailId: "mini.kv@mgug.ac.in",
  },
  {
    srNo: 3,
    name: {
      hindi: "डॉ. शशिकान्त सिंह, प्राचार्य, फैकल्टी ऑफ फार्मास्युटिकल साइंसेस",
      english:
        "Dr. Shashikant Singh, Principal, Faculty of Pharmaceutical Sciences",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    contactNo: "9873095300",
    emailId: "shashikant.singh@mgug.ac.in",
  },
  {
    srNo: 4,
    name: {
      hindi: "श्रीमती शीलम बाजपेई, डाइरेक्टर, समाधान अभियान, गोरखपुर",
      english: "Mrs. Sheelam Bajpai, Director, Samadhan Abhiyan, Gorakhpur",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    contactNo: "9868127766",
    emailId: "sheelam.bajpai27@gmail.com",
  },
  {
    srNo: 5,
    name: {
      hindi: "डॉ. विमल कुमार दूबे, सह आचार्य, कृषि संकाय",
      english:
        "Dr. Vimal Kumar Dubey, Associate Professor, Faculty of Agriculture",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    contactNo: "9999764424",
    emailId: "vimal.dubey@mgug.ac.in",
  },
  {
    srNo: 6,
    name: {
      hindi:
        "डॉ. अनुपमा ओझा, सहायक आचार्य, बायोकेमेस्ट्री विभाग, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
      english:
        "Dr. Anupama Ojha, Assistant Professor, Dept. of Biochemistry, Allied Health Sciences",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    contactNo: "9718320226",
    emailId: "anupama.ojha@mgug.ac.in",
  },
  {
    srNo: 7,
    name: {
      hindi:
        "सुश्री सुप्रिया गुप्ता, प्रवक्ता, महंत अवेद्यनाथ पैरामेडिकल कॉलेज",
      english:
        "Ms. Supriya Gupta, Lecturer, Mahant Avedyanath Paramedical College",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    contactNo: "8400739619",
    emailId: "supriya.gupta@mgug.ac.in",
  },
  {
    srNo: 8,
    name: {
      hindi: "श्री श्रीकान्त, उप कुलसचिव (प्रशासन)",
      english: "Shri Shrikant, Deputy Registrar (Administration)",
    },
    role: {
      hindi: "सदस्य-सचिव",
      english: "Member-Secretary",
    },
    contactNo: "9415266014",
    emailId: "shrikant@mgug.ac.in",
  },
];

export const internalComplaintsCommitteeTitles: InternalCommitteeTitles = {
  heading: {
    hindi: "आंतरिक शिकायत समिति",
    english: "Internal Complaints Committee",
  },
  headers: {
    srNo: { hindi: "क्रम संख्या", english: "Sl. No." },
    name: { hindi: "नाम", english: "Name" },
    role: { hindi: "दायित्व", english: "Role" },
    contactNo: { hindi: "सम्पर्क नं०", english: "Contact No." },
    emailId: { hindi: "ईमेल आईडी", english: "Email ID" },
  },
};

export const ResearchCommitteeData = {
  title: {
    hindi: "अनुसंधान समिति",
    english: "Research Committee",
  },
  ayurveda: {
    heading: { hindi: "आयुर्वेद", english: "Ayurveda" },
    headers: {
      srNo: { hindi: "क्रम सं.", english: "S. No." },
      name: { hindi: "नाम", english: "Name" },
      designation: {
        hindi: "पदनाम और संबद्धता",
        english: "Designation & Affiliation",
      },
      role: { hindi: "दायित्व", english: "Role" },
    },
    members: [
      {
        srNo: 1,
        name: { hindi: "डॉ. मिनी के. वी.", english: "Dr. Mini K. V." },
        designation: {
          hindi: "प्रोफेसर और प्रमुख, रचना शरीर",
          english: "Professor & HoD, Rachana Sharir",
        },
        role: { hindi: "अध्यक्ष", english: "Chairperson" },
      },
      {
        srNo: 2,
        name: { hindi: "डॉ. गोपी कृष्ण एस", english: "Dr. Gopi Krishna S." },
        designation: {
          hindi: "प्रोफेसर, रोग निदान",
          english: "Professor, Roga Nidana",
        },
        role: { hindi: "सदस्य", english: "Member" },
      },
      {
        srNo: 3,
        name: { hindi: "डॉ. रेशमी पुष्पन", english: "Dr. Reshmi Pushpan" },
        designation: {
          hindi: "प्रोफेसर, अगदतंत्र",
          english: "Professor, Agada Tantra",
        },
        role: { hindi: "सदस्य", english: "Member" },
      },
      {
        srNo: 4,
        name: { hindi: "डॉ. नवीन कोडलाडी", english: "Dr. Naveena Kodladie" },
        designation: {
          hindi: "प्रोफेसर, रसशास्त्र एवं भैषज्य कल्पना",
          english: "Professor, RSBK",
        },
        role: { hindi: "सदस्य", english: "Member" },
      },
      {
        srNo: 5,
        name: { hindi: "डॉ. विनम्र शर्मा", english: "Dr. Vinamra Sharma" },
        designation: {
          hindi: "एसोसिएट प्रोफेसर, रसशास्त्र एवं भैषज्य कल्पना",
          english: "Associate Professor, RSBK",
        },
        role: { hindi: "सदस्य एवं समन्वयक", english: "Member & Coordinator" },
      },
    ],
  },
  alliedHealth: {
    heading: {
      hindi: "सम्बद्ध स्वास्थ्य विज्ञान संकाय समिति",
      english: "Faculty of Allied Health Sciences Committee",
    },
    headers: {
      srNo: { hindi: "क्रम सं.", english: "S. No." },
      name: { hindi: "नाम", english: "Name" },
      designation: {
        hindi: "पदनाम और संबद्धता",
        english: "Designation & Affiliation",
      },
      role: { hindi: "दायित्व", english: "Role" },
    },
    members: [
      {
        srNo: 1,
        name: { hindi: "डॉ. सुनील कुमार", english: "Dr. Sunil Kumar" },
        designation: {
          hindi: "प्रोफेसर एवं डीन, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
          english: "Professor & Dean, Allied Health Sciences",
        },
        role: { hindi: "अध्यक्ष", english: "Chairperson" },
      },
      {
        srNo: 2,
        name: { hindi: "डॉ. राजीव सिंह", english: "Dr. Rajeev Singh" },
        designation: {
          hindi: "वैज्ञानिक डी, RMRC-ICMR, बीआरडी मेडिकल कॉलेज, गोरखपुर",
          english: "Scientist-D, RMRC-ICMR, BRD Medical College, Gorakhpur",
        },
        role: { hindi: "सदस्य", english: "Member" },
      },
      {
        srNo: 3,
        name: { hindi: "डॉ. राज कुमार", english: "Dr. Raj Kumar" },
        designation: {
          hindi: "प्रोफेसर, बायोकेमिस्ट्री विभाग, बीआरडी मेडिकल कॉलेज, गोरखपुर",
          english:
            "Professor, Biochemistry Dept., BRD Medical College, Gorakhpur",
        },
        role: { hindi: "सदस्य", english: "Member" },
      },
      {
        srNo: 4,
        name: { hindi: "डॉ. अमरेश कुमार", english: "Dr. Amresh Kumar" },
        designation: {
          hindi:
            "एसोसिएट प्रोफेसर, माइक्रोबायोलॉजी, बीआरडी मेडिकल कॉलेज, गोरखपुर",
          english:
            "Associate Professor, Microbiology, BRD Medical College, Gorakhpur",
        },
        role: { hindi: "सदस्य", english: "Member" },
      },
      {
        srNo: 5,
        name: { hindi: "डॉ. शैलेंद्र कुमार", english: "Dr. Shailendra Kumar" },
        designation: {
          hindi:
            "प्रोफेसर, माइक्रोबायोलॉजी, डॉ. आरएमएल अवध विश्वविद्यालय, अयोध्या",
          english: "Professor, Microbiology, Dr. RML Avadh University, Ayodhya",
        },
        role: { hindi: "सदस्य", english: "Member" },
      },
      {
        srNo: 6,
        name: {
          hindi: "डॉ. पवन कुमार कन्नौजिया",
          english: "Dr. Pawan Kumar Kannaujia",
        },
        designation: {
          hindi: "सहायक प्रोफेसर, बायोटेक्नोलॉजी",
          english: "Assistant Professor, Biotechnology",
        },
        role: { hindi: "समन्वयक", english: "Coordinator" },
      },
    ],
  },
  pharma: {
    heading: {
      hindi: "औषधि विज्ञान समिति",
      english: "Pharmaceutical Sciences Committee",
    },
    headers: {
      srNo: { hindi: "क्रम सं.", english: "S. No." },
      name: { hindi: "नाम", english: "Name" },
      designation: {
        hindi: "पदनाम और संबद्धता",
        english: "Designation & Affiliation",
      },
      role: { hindi: "दायित्व", english: "Role" },
    },
    members: [
      {
        srNo: 1,
        name: { hindi: "डॉ. जी. एन. सिंह", english: "Dr. G. N. Singh" },
        designation: {
          hindi: "पूर्व औषधि नियंत्रक, भारत",
          english: "Former Drug Controller General of India",
        },
        role: { hindi: "अध्यक्ष", english: "Chairperson" },
      },
      {
        srNo: 2,
        name: {
          hindi: "प्रो. सुशांत कुमार श्रीवास्तव",
          english: "Prof. Sushant Kumar Srivastava",
        },
        designation: {
          hindi:
            "प्रोफेसर, फार्मास्युटिकल इंजीनियरिंग व प्रौद्योगिकी विभाग, आईआईटी बीएचयू, वाराणसी",
          english:
            "Professor, Dept. of Pharmaceutical Engineering & Technology, IIT-BHU, Varanasi",
        },
        role: { hindi: "सदस्य", english: "Member" },
      },
      {
        srNo: 3,
        name: {
          hindi: "डॉ. राहुल कुमार मिश्रा",
          english: "Dr. Rahul Kumar Mishra",
        },
        designation: {
          hindi: "प्राचार्य, ताहिरा इंस्टीट्यूट ऑफ मेडिकल साइंसेज, गोरखपुर",
          english: "Principal, Tahira Institute of Medical Sciences, Gorakhpur",
        },
        role: { hindi: "सदस्य", english: "Member" },
      },
      {
        srNo: 4,
        name: {
          hindi: "डॉ. उमेश कुमार सिंह",
          english: "Dr. Umesh Kumar Singh",
        },
        designation: {
          hindi: "निदेशक, फार्मेसी संस्थान, एचआरआईटी, गाजियाबाद",
          english: "Director, Institute of Pharmacy, HRIT, Ghaziabad",
        },
        role: { hindi: "सदस्य", english: "Member" },
      },
      {
        srNo: 5,
        name: {
          hindi: "डॉ. पवन कुमार गौतम",
          english: "Dr. Pawan Kumar Gautam",
        },
        designation: {
          hindi:
            "प्राचार्य, राजकीय फार्मेसी कॉलेज, बीआरडी मेडिकल कॉलेज, गोरखपुर",
          english:
            "Principal, Govt. Pharmacy College, BRD Medical College, Gorakhpur",
        },
        role: { hindi: "सदस्य", english: "Member" },
      },
      {
        srNo: 6,
        name: { hindi: "डॉ. शशिकांत सिंह", english: "Dr. Shashikant Singh" },
        designation: {
          hindi: "प्राचार्य, फार्मास्युटिकल साइंसेज संकाय, गोरखपुर",
          english: "Principal, Faculty of Pharmaceutical Sciences, Gorakhpur",
        },
        role: { hindi: "समन्वयक", english: "Coordinator" },
      },
    ],
  },
};
