import type {
  AcademicCouncilMember,
  AcademicCouncilTitles,
  BoardOfStudiesData,
  EmpoweredBody,
  GoverningBody,
} from "./types";

export const academicCouncilTitles: AcademicCouncilTitles = {
  heading: {
    hindi: "विद्यापरिषद",
    english: "Academic Council",
  },
  headers: {
    srNo: {
      hindi: "क्रमांक",
      english: "Sl No",
    },
    name: {
      hindi: "नाम व पता",
      english: "Name & Address",
    },
    type: {
      hindi: "नामित/पदेन",
      english: "Nominated/Ex-Officio",
    },
    role: {
      hindi: "दायित्व",
      english: "Role",
    },
  },
};

export const academicCouncilData: AcademicCouncilMember[] = [
  {
    srNo: 1,
    name: {
      hindi: "डॉ. सुरिन्दर सिंह, कुलपति",
      english: "Dr. Surinder Singh, Vice Chancellor",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "अध्यक्ष",
      english: "Chairperson",
    },
  },
  {
    srNo: 2,
    name: {
      hindi: "डॉ. डी.एस. अजीथा, अधिष्ठाता, नर्सिंग एवं पैरामेडिकल",
      english: "Dr. D.S. Ajeetha, Dean, Nursing and Paramedical",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 3,
    name: {
      hindi:
        "डॉ. गिरिधर वेदान्तम, प्रधानाचार्य, गुरु गोरक्षनाथ इंस्टीट्यूट ऑफ मेडिकल साइंसेस, आयुर्वेद कॉलेज",
      english:
        "Dr. Giridhar Vedantam, Principal, Guru Gorakhnath Institute of Medical Sciences, Ayurveda College",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 4,
    name: {
      hindi: "डॉ. सुनील कुमार सिंह, अधिष्ठाता, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
      english: "Dr. Sunil Kumar Singh, Dean, Allied Health Sciences",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 5,
    name: {
      hindi:
        "डॉ. अनुराग श्रीवास्तव, प्रधानाचार्य, श्री गोरक्षनाथ मेडिकल कॉलेज हॉस्पिटल एण्ड रिसर्च सेंटर",
      english:
        "Dr. Anurag Srivastava, Principal, Shri Gorakhnath Medical College Hospital and Research Centre",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 6,
    name: {
      hindi: "डॉ. रघुराम आचार, अधिष्ठाता, आईक्यूएसी, रैंकिंग एवं एक्रीडिटेशन",
      english: "Dr. Raghu Ram Achar, Dean, IQAC, Ranking and Accreditation",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 7,
    name: {
      hindi: "डॉ. प्रशान्त सदाशिवमूर्ति, अधिष्ठाता, एकेडेमिक्स",
      english: "Dr. Prashant Sadashivmurthy, Dean Academics",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 8,
    name: {
      hindi: "डॉ. मधुसूदन पुरोहित, अधिष्ठाता, फार्मेसी संकाय",
      english: "Dr. Madhusudan Purohit, Dean, Faculty of Pharmacy",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 9,
    name: {
      hindi: "डॉ. विमल कुमार दूबे, अधिष्ठाता, कृषि विज्ञान संकाय",
      english: "Dr. Vimal Kumar Dubey, Dean, Faculty of Agricultural Sciences",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 10,
    name: {
      hindi: "श्री रोहित कुमार श्रीवास्तव, विभागाध्यक्ष, पैरामेडिकल",
      english: "Shri Rohit Kumar Srivastava, Head, Paramedical Department",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 11,
    name: {
      hindi: "डॉ. तरुन श्याम, विभागाध्यक्ष, प्रबंधन विभाग",
      english: "Dr. Tarun Shyam, Head, Department of Management",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 12,
    name: {
      hindi:
        "डॉ. दीपू मनोहर, सह आचार्य, रचना शरीर, गुरु गोरक्षनाथ आयुर्वेद कॉलेज",
      english:
        "Dr. Deepu Manohar, Associate Professor, Anatomy, Guru Gorakhnath Ayurveda College",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 13,
    name: {
      hindi:
        "श्रीमती रजीथा आर.एम., सह आचार्य, गुरु श्री गोरक्षनाथ कॉलेज ऑफ नर्सिंग",
      english:
        "Mrs. Rajitha R.M., Associate Professor, Guru Shri Gorakhnath College of Nursing",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 14,
    name: {
      hindi:
        "डॉ. अनुपमा ओझा, सहायक आचार्य, मेडिकल बायोकेमिस्ट्री, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
      english:
        "Dr. Anupama Ojha, Assistant Professor, Medical Biochemistry, Allied Health Sciences",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 15,
    name: {
      hindi: "डॉ. कुलदीप सिंह, सहायक आचार्य, कृषि विज्ञान संकाय",
      english:
        "Dr. Kuldeep Singh, Assistant Professor, Faculty of Agricultural Sciences",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 16,
    name: {
      hindi:
        "डॉ. दिनेश कुमार सिंह, आचार्य एवं पूर्व विभागाध्यक्ष, प्राणि विज्ञान विभाग, दी.द.उ. गोरखपुर विश्वविद्यालय",
      english:
        "Dr. Dinesh Kumar Singh, Professor & Former Head, Zoology Dept., D.D.U. Gorakhpur University",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 17,
    name: {
      hindi:
        "डॉ. वी. रामनाथन, सहायक आचार्य, रसायन शास्त्र विभाग, आईआईटी बी.एच.यू., वाराणसी",
      english:
        "Dr. V. Ramnathan, Assistant Professor, Chemistry Dept., IIT BHU, Varanasi",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 18,
    name: {
      hindi: "डॉ. प्रदीप कुमार राव, कुलसचिव",
      english: "Dr. Pradeep Kumar Rao, Registrar",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सचिव",
      english: "Secretary",
    },
  },
];

export const executiveCouncilTitles: AcademicCouncilTitles = {
  heading: {
    hindi: "कार्यपरिषद",
    english: "Executive Council",
  },
  headers: {
    srNo: {
      hindi: "क्रमांक",
      english: "Sr. No",
    },
    name: {
      hindi: "नाम व पता",
      english: "Name & Address",
    },
    type: {
      hindi: "नामित/पदेन",
      english: "Nominated/Ex-Officio",
    },
    role: {
      hindi: "दायित्व",
      english: "Role",
    },
  },
};

export const executiveCouncilData: AcademicCouncilMember[] = [
  {
    srNo: 1,
    name: {
      hindi: "डॉ. सुरिन्दर सिंह, कुलपति",
      english: "Dr. Surinder Singh, Vice Chancellor",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "अध्यक्ष",
      english: "Chairperson",
    },
  },
  {
    srNo: 2,
    name: {
      hindi: "महन्त योगी मिथलेशनाथ, धर्माचार्य",
      english: "Mahant Yogi Mithleshnath, Religious Teacher",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 3,
    name: {
      hindi: "श्री रामजन्म सिंह, पूर्व प्राचार्य, एम.पी. इंटर कॉलेज, गोरखपुर",
      english:
        "Shri Ramjanm Singh, Former Principal, M.P. Inter College, Gorakhpur",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 4,
    name: {
      hindi: "श्री प्रमथनाथ मिश्र, अधिवक्ता, गोरखपुर",
      english: "Shri Pramathanath Mishra, Advocate, Gorakhpur",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 5,
    name: {
      hindi: "डॉ. सी.एम. सिन्हा, एम.एस., कैंसर रोग विशेषज्ञ, गोरखपुर",
      english: "Dr. C.M. Sinha, M.S., Cancer Specialist, Gorakhpur",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 6,
    name: {
      hindi:
        "श्री प्रेम कुमार पाण्डेय, संयुक्त सचिव, उच्च शिक्षा विभाग, उ.प्र.\nप्रतिनिधि, प्रमुख सचिव, उच्च शिक्षा विभाग, उत्तर प्रदेश शासन",
      english:
        "Shri Prem Kumar Pandey, Joint Secretary, Higher Education Dept., U.P.\nRepresentative of Principal Secretary, Govt. of U.P.",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 7,
    name: {
      hindi:
        "प्रो. मिनी के.वी., आचार्य, गुरु गोरक्षनाथ इंस्टिट्यूट ऑफ मेडिकल साइंसेज, आयुर्वेद संकाय",
      english:
        "Prof. Mini K.V., Professor, Guru Gorakhnath Institute of Medical Sciences, Faculty of Ayurveda",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 8,
    name: {
      hindi:
        "डॉ. दीपू मनोहर, सह आचार्य, गुरु गोरक्षनाथ इंस्टिट्यूट ऑफ मेडिकल साइंसेज, आयुर्वेद संकाय",
      english:
        "Dr. Deepu Manohar, Associate Professor, Guru Gorakhnath Institute of Medical Sciences, Faculty of Ayurveda",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 9,
    name: {
      hindi:
        "डॉ. साध्वी नन्दन पाण्डेय, सहायक आचार्य, गुरु गोरक्षनाथ इंस्टिट्यूट ऑफ मेडिकल साइंसेज, आयुर्वेद संकाय",
      english:
        "Dr. Sadhvi Nandan Pandey, Assistant Professor, Guru Gorakhnath Institute of Medical Sciences, Faculty of Ayurveda",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 10,
    name: {
      hindi:
        "प्रो. शोभा गौड़, बी.एड. विभाग, दी.द.उ. गोरखपुर विश्वविद्यालय, गोरखपुर",
      english:
        "Prof. Shobha Gaud, B.Ed. Dept., D.D.U. Gorakhpur University, Gorakhpur",
    },
    type: {
      hindi: "नामित",
      english: "Nominated",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 11,
    name: {
      hindi: "डॉ. प्रदीप कुमार राव, कुलसचिव",
      english: "Dr. Pradeep Kumar Rao, Registrar",
    },
    type: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
    role: {
      hindi: "सचिव",
      english: "Secretary",
    },
  },
];

export const boardOfStudiesData: BoardOfStudiesData = {
  title: {
    hindi: "अध्ययन बोर्ड",
    english: "Board of Studies",
  },
  ayurveda: {
    heading: {
      hindi: "आयुर्वेद",
      english: "Ayurveda",
    },
    headers: {
      srNo: {
        hindi: "क्रम संख्या",
        english: "S. No.",
      },
      name: {
        hindi: "नाम",
        english: "Name",
      },
      designation: {
        hindi: "पदनाम एवं विभाग",
        english: "Designation & Department",
      },
      role: {
        hindi: "दायित्व",
        english: "Role",
      },
    },
    members: [
      {
        srNo: 1,
        name: {
          hindi: "प्रोफेसर डॉ. गिरिधर वेदांतम",
          english: "Prof. Dr. Giridhar Vedantam",
        },
        designation: {
          hindi: "प्राचार्य एवं प्रोफेसर, द्रव्यगुण",
          english: "Principal & Professor, Dravyaguna",
        },
        role: {
          hindi: "अध्यक्ष",
          english: "Chairperson",
        },
      },
      {
        srNo: 2,
        name: {
          hindi: "प्रोफेसर डॉ. मिनी के. वी",
          english: "Prof. Dr. Mini K. V",
        },
        designation: {
          hindi: "प्रोफेसर, रचना शरीर",
          english: "Professor, Rachana Sharir",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 3,
        name: {
          hindi: "प्रोफेसर डॉ. गोपीकृष्ण",
          english: "Prof. Dr. Gopikrishna",
        },
        designation: {
          hindi: "प्रोफेसर, रोग निदान",
          english: "Professor, Roga Nidana",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 4,
        name: {
          hindi: "प्रोफेसर डॉ. नवीना कोडलडी",
          english: "Prof. Dr. Naveena Kodaladi",
        },
        designation: {
          hindi: "प्रोफेसर, रसशास्त्र एवं भैषज्य कल्पना",
          english: "Professor, Rasashastra & B.K.",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 5,
        name: {
          hindi: "प्रोफेसर डॉ. शांतिभूषण हंडूर",
          english: "Prof. Dr. Shantibhushan Handur",
        },
        designation: {
          hindi: "प्रोफेसर, संहिता एवं सिद्धांत",
          english: "Professor, Samhita & Siddhanta",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 6,
        name: {
          hindi: "प्रोफेसर डॉ. रेशमी पुष्पन",
          english: "Prof. Dr. Reshmi Pushpan",
        },
        designation: {
          hindi: "प्रोफेसर, अगदतंत्र",
          english: "Professor, Agadatantra",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 7,
        name: {
          hindi: "प्रोफेसर डॉ. देवी आर. नायर",
          english: "Prof. Dr. Devi R. Nair",
        },
        designation: {
          hindi: "प्रोफेसर, क्रिया शरीर",
          english: "Professor, Kriya Sharir",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 8,
        name: {
          hindi: "प्रोफेसर डॉ. श्रीधर एस. लक्कुंडी",
          english: "Prof. Dr. Shridhar S. Lakkundi",
        },
        designation: {
          hindi: "प्रोफेसर, पंचकर्म",
          english: "Professor, Panchakarma",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 9,
        name: {
          hindi: "प्रोफेसर डॉ. विष्णुमाया",
          english: "Prof. Dr. Vishnumaya",
        },
        designation: {
          hindi: "प्रोफेसर, प्रसूति एवं स्त्रीरोग",
          english: "Professor, Prasuti & Striroga",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 10,
        name: {
          hindi: "डॉ. किरण कुमार रेड्डी",
          english: "Dr. Kiran Kumar Reddy",
        },
        designation: {
          hindi: "एसोसिएट प्रोफेसर, शल्यतंत्र",
          english: "Associate Professor, Shalyatantra",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 11,
        name: {
          hindi: "डॉ. रिनजिन जी. कृष्णा",
          english: "Dr. Rinjhin G. Krishna",
        },
        designation: {
          hindi: "एसोसिएट प्रोफेसर, कायाचिकित्सा",
          english: "Associate Professor, Kayachikitsa",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 12,
        name: {
          hindi: "डॉ. अश्वथी नारायणन",
          english: "Dr. Ashwathi Narayanan",
        },
        designation: {
          hindi: "सहायक प्रोफेसर, शालाक्य तंत्र",
          english: "Assistant Professor, Shalakya",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 13,
        name: {
          hindi: "डॉ. श्रीलक्ष्मी सी. एल",
          english: "Dr. Srilakshmi C. L",
        },
        designation: {
          hindi: "सहायक प्रोफेसर, कौमारभृत्य",
          english: "Assistant Professor, Kaumarbhritya",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 14,
        name: {
          hindi: "डॉ. वैसाख आर.",
          english: "Dr. Vaisakh R.",
        },
        designation: {
          hindi: "सहायक प्रोफेसर, स्वस्थवृत्त एवं योग",
          english: "Assistant Professor, Swasthavritta & Yoga",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 15,
        name: {
          hindi: "डॉ. जी. एस. तोमर",
          english: "Dr. G. S. Tomar",
        },
        designation: {
          hindi: "सेवानिवृत्त प्राचार्य एवं प्रोफेसर, कायाचिकित्सा",
          english:
            "Retired Principal & Professor, Kayachikitsa, Govt. Ayurveda College, Handia, U.P.",
        },
        role: {
          hindi: "बाहरी शैक्षणिक विशेषज्ञ",
          english: "External Academic Expert",
        },
      },
      {
        srNo: 16,
        name: {
          hindi: "डॉ. सुमित कुमार एम",
          english: "Dr. Sumit Kumar M",
        },
        designation: {
          hindi: "उप प्राचार्य एवं एसोसिएट प्रोफेसर, संहिता एवं सिद्धांत",
          english: "Vice Principal & Associate Professor, Samhita & Siddhanta",
        },
        role: {
          hindi: "सदस्य-सचिव",
          english: "Member Secretary",
        },
      },
    ],
  },
  medicalMicrobiology: {
    heading: {
      hindi: "मेडिकल माइक्रोबायोलॉजी विभाग - सम्बद्ध स्वास्थ्य विज्ञान संकाय",
      english: "Medical Microbiology - Faculty of Allied Health Sciences",
    },
    headers: {
      srNo: {
        hindi: "क्रमांक",
        english: "Sr. No.",
      },
      name: {
        hindi: "नाम",
        english: "Name",
      },
      designation: {
        hindi: "पदनाम एवं विभाग",
        english: "Designation & Department",
      },
      role: {
        hindi: "दायित्व",
        english: "Role",
      },
    },
    members: [
      {
        srNo: 1,
        name: {
          hindi: "प्रो. (डॉ.) सुनील कुमार सिंह",
          english: "Prof. (Dr.) Sunil Kumar Singh",
        },
        designation: {
          hindi: "प्रोफेसर एवं अधिष्ठाता, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
          english: "Professor & Dean, Faculty of Allied Health Sciences",
        },
        role: {
          hindi: "अध्यक्ष",
          english: "Chairperson",
        },
      },
      {
        srNo: 2,
        name: {
          hindi: "डॉ. गौरव राज",
          english: "Dr. Gaurav Raj",
        },
        designation: {
          hindi: "साइंटिस्ट डी, रीजनल मेडिकल रिसर्च सेंटर (ICMR), गोरखपुर",
          english:
            "Scientist D, Regional Medical Research Centre (ICMR), Gorakhpur",
        },
        role: {
          hindi: "विषय विशेषज्ञ",
          english: "Subject Expert",
        },
      },
      {
        srNo: 3,
        name: {
          hindi: "डॉ. पवन कुमार कनौजिया",
          english: "Dr. Pawan Kumar Kannaujia",
        },
        designation: {
          hindi: "सहायक आचार्य, बायोटेक्नोलॉजी विभाग",
          english: "Assistant Professor, Dept. of Biotechnology",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 4,
        name: {
          hindi: "डॉ. धीरेन्द्र कुमार सिंह",
          english: "Dr. Dhirendra Kumar Singh",
        },
        designation: {
          hindi: "सहायक आचार्य, मेडिकल माइक्रोबायोलॉजी",
          english: "Assistant Professor, Medical Microbiology",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
    ],
  },
  medicalBiochemistry: {
    heading: {
      hindi: "मेडिकल बायोकेमिस्ट्री - सम्बद्ध स्वास्थ्य विज्ञान संकाय",
      english: "Medical Biochemistry - Faculty of Allied Health Sciences",
    },
    headers: {
      srNo: {
        hindi: "क्रमांक",
        english: "Sr. No.",
      },
      name: {
        hindi: "नाम",
        english: "Name",
      },
      designation: {
        hindi: "पदनाम एवं विभाग",
        english: "Designation & Department",
      },
      role: {
        hindi: "दायित्व",
        english: "Role",
      },
    },
    members: [
      {
        srNo: 1,
        name: {
          hindi: "प्रो. (डॉ.) सुनील कुमार सिंह",
          english: "Prof. (Dr.) Sunil Kumar Singh",
        },
        designation: {
          hindi: "प्रोफेसर एवं अधिष्ठाता, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
          english: "Professor & Dean, Faculty of Allied Health Sciences",
        },
        role: {
          hindi: "अध्यक्ष",
          english: "Chairperson",
        },
      },
      {
        srNo: 2,
        name: {
          hindi: "डॉ. राज कुमार",
          english: "Dr. Raj Kumar",
        },
        designation: {
          hindi:
            "प्रोफेसर, मेडिकल बायोकेमिस्ट्री विभाग, बी.आर.डी. मेडिकल कॉलेज, गोरखपुर",
          english:
            "Professor, Medical Biochemistry, BRD Medical College, Gorakhpur",
        },
        role: {
          hindi: "विषय विशेषज्ञ",
          english: "Subject Expert",
        },
      },
      {
        srNo: 3,
        name: {
          hindi: "डॉ. अनुपमा ओझा",
          english: "Dr. Anupama Ojha",
        },
        designation: {
          hindi:
            "सहायक आचार्य एवं विभागाध्यक्ष, बायोकेमिस्ट्री विभाग, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
          english:
            "Assistant Professor & Head, Biochemistry Dept., Faculty of Allied Health Sciences",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 4,
        name: {
          hindi: "डॉ. प्रेरणा अदिति",
          english: "Dr. Prerna Aditi",
        },
        designation: {
          hindi:
            "सहायक आचार्य, बायोकेमिस्ट्री विभाग, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
          english:
            "Assistant Professor, Biochemistry Dept., Faculty of Allied Health Sciences",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 5,
        name: {
          hindi: "डॉ. किरन कुमार ए.",
          english: "Dr. Kiran Kumar A",
        },
        designation: {
          hindi:
            "सहायक आचार्य, बायोकेमिस्ट्री विभाग, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
          english:
            "Assistant Professor, Biochemistry Dept., Faculty of Allied Health Sciences",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
    ],
  },
  biotechnology: {
    heading: {
      hindi: "बायोटेक्नोलॉजी - सम्बद्ध स्वास्थ्य विज्ञान संकाय",
      english: "Biotechnology - Faculty of Allied Health Sciences",
    },
    headers: {
      srNo: {
        hindi: "क्रमांक",
        english: "Sr. No.",
      },
      name: {
        hindi: "नाम",
        english: "Name",
      },
      designation: {
        hindi: "पदनाम एवं विभाग",
        english: "Designation & Department",
      },
      role: {
        hindi: "दायित्व",
        english: "Role",
      },
    },
    members: [
      {
        srNo: 1,
        name: {
          hindi: "प्रो. (डॉ.) सुनील कुमार सिंह",
          english: "Prof. (Dr.) Sunil Kumar Singh",
        },
        designation: {
          hindi: "प्रोफेसर एवं अधिष्ठाता, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
          english: "Professor & Dean, Faculty of Allied Health Sciences",
        },
        role: {
          hindi: "अध्यक्ष",
          english: "Chairperson",
        },
      },
      {
        srNo: 2,
        name: {
          hindi: "डॉ. दिनेश यादव",
          english: "Dr. Dinesh Yadav",
        },
        designation: {
          hindi: "प्रोफेसर, बायोटेक्नोलॉजी विभाग, डीडीयू गोरखपुर विश्वविद्यालय",
          english:
            "Professor, Department of Biotechnology, DDU Gorakhpur University",
        },
        role: {
          hindi: "विषय विशेषज्ञ",
          english: "Subject Expert",
        },
      },
      {
        srNo: 3,
        name: {
          hindi: "डॉ. अमित कुमार दूबे",
          english: "Dr. Amit Kumar Dubey",
        },
        designation: {
          hindi:
            "सहायक प्रोफेसर, बायोटेक्नोलॉजी विभाग, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
          english:
            "Assistant Professor, Biotechnology Dept., Faculty of Allied Health Sciences",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 4,
        name: {
          hindi: "डॉ. पवन कुमार कनौजिया",
          english: "Dr. Pawan Kumar Kannoujia",
        },
        designation: {
          hindi:
            "सहायक प्रोफेसर, बायोटेक्नोलॉजी विभाग, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
          english:
            "Assistant Professor, Biotechnology Dept., Faculty of Allied Health Sciences",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 5,
        name: {
          hindi: "डॉ. अंकिता मिश्रा",
          english: "Dr. Ankita Mishra",
        },
        designation: {
          hindi:
            "सहायक प्रोफेसर, बायोटेक्नोलॉजी विभाग, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
          english:
            "Assistant Professor, Biotechnology Dept., Faculty of Allied Health Sciences",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 6,
        name: {
          hindi: "डॉ. अवेद्यनाथ सिंह",
          english: "Dr. Avedhyanath Singh",
        },
        designation: {
          hindi:
            "सहायक प्रोफेसर, बायोटेक्नोलॉजी विभाग, सम्बद्ध स्वास्थ्य विज्ञान संकाय",
          english:
            "Assistant Professor, Biotechnology Dept., Faculty of Allied Health Sciences",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
      {
        srNo: 7,
        name: {
          hindi: "डॉ. कीर्ति कुमार यादव",
          english: "Dr. Kirti Kumar Yadav",
        },
        designation: {
          hindi: "सहायक प्रोफेसर, बायोटेक्नोलॉजी",
          english: "Assistant Professor, Biotechnology",
        },
        role: {
          hindi: "सदस्य",
          english: "Member",
        },
      },
    ],
  },
};

export const empoweredBodyData: EmpoweredBody = {
  title: {
    hindi: "सशक्त निकाय",
    english: "Empowered Body",
  },
  description: {
    hindi:
      "गुरु श्री गोरखनाथ चित्सालय, प्रबंधन समिति, कुलपति और कुलसचिव मिलकर सशक्त निकाय का गठन करेंगे।",
    english:
      "Guru Shri Gorakhnath Chitisalaya, Management Committee, Vice-Chancellor, and Registrar shall constitute/form the Empowered Body.",
  },
  powers: {
    hindi: [
      "सशक्त निकाय को अधिनियम के प्रावधानों के अनुसार ऋण प्राप्त करने के उद्देश्य से विश्वविद्यालय की भूमि या अन्य संपत्तियों को किसी बैंक या अन्य वित्तीय संस्थानों के पास गिरवी रखने का अधिकार होगा।",
      "विश्वविद्यालय का सशक्त निकाय समय-समय पर विश्वविद्यालय के किसी अधिकारी, प्राधिकारी, शिक्षक या कर्मचारी की वित्तीय शक्तियों की सीमा निर्धारित करने का अधिकार रखेगा।",
      "सशक्त निकाय को उन सभी मामलों में निर्णय लेने का अधिकार होगा जो विशेष रूप से विश्वविद्यालय के किसी अधिकारी या प्राधिकारी को प्रदान नहीं किए गए हैं।",
    ],
    english: [
      "Empowered Body shall have power to mortgage the land or other assets of the University to any bank or other financial institutions for the purpose of availing loan as per the provisions of the Act.",
      "The Empowered Body of the University shall have power to determine the limits of the financial powers of any officer(s), authority, teacher, or employee of the university from time to time.",
      "The Empowered Body shall have power to take decisions in all such matters which have not been specifically conferred on any Officer or Authority of the University.",
    ],
  },
};

export const governingBodyData: GoverningBody = {
  title: {
    hindi: "प्रशासनिक निकाय",
    english: "Governing Body",
  },
  composition: {
    hindi: {
      description: "प्रशासनिक निकाय में निम्नलिखित शामिल होंगे:",
      members: [
        "कुलाधिपति - अध्यक्ष",
        "प्रो कुलाधिपति - सदस्य",
        "कुलपति - सदस्य",
        "प्रायोजक निकाय द्वारा प्रबंधन समिति से नामित दो सदस्य।",
        "प्रायोजक निकाय द्वारा नामित एक प्रख्यात शिक्षाविद।",
        "प्रायोजक निकाय द्वारा नामित उद्योग/कॉरपोरेट क्षेत्र से एक सदस्य।",
        "प्रायोजक निकाय द्वारा नामित एक कानूनी विशेषज्ञ।",
        "प्रायोजक निकाय द्वारा नामित एक वित्तीय विशेषज्ञ।",
        "कुलसचिव - पदेन सचिव।",
        "प्रायोजक निकाय को प्रशासनिक निकाय में अधिकतम छह अतिरिक्त व्यक्तियों को नामित करने का अधिकार होगा।",
      ],
      note: "बशर्ते कि प्रशासनिक निकाय के सदस्यों की संख्या नौ से कम और पंद्रह से अधिक नहीं होगी।",
    },
    english: {
      description: "The Governing Body shall consist of the following:",
      members: [
        "The Chancellor - Chairperson",
        "The Pro Chancellor - Member",
        "The Vice-Chancellor - Member",
        "Two members to be nominated by the Sponsoring Body from management committee.",
        "One eminent educationist to be nominated by the Sponsoring Body.",
        "One member from the Industry/Corporate Sector to be nominated by the Sponsoring Body.",
        "One Legal Expert to be nominated as member by the Sponsoring Body.",
        "One Financial Expert to be nominated as member by the Sponsoring Body.",
        "Registrar ex-officio Secretary.",
        "The Sponsoring Body shall have the power to nominate up to six additional persons as members of governing body.",
      ],
      note: "Provided that the number of members of the Governing Body shall not be less than nine and more than fifteen.",
    },
  },
  rules: {
    hindi: [
      {
        label: "ख",
        text: "नामित सदस्यों का कार्यकाल तीन वर्ष या अगले आदेश तक होगा।",
      },
      {
        label: "ग",
        text: "पदेन सदस्यों का कार्यकाल तब तक रहेगा जब तक वे उस पद पर रहते हैं जिसके आधार पर वे सदस्य हैं।",
      },
      {
        label: "घ",
        text: "प्रायोजक निकाय को लिखित कारणों के साथ प्रशासनिक निकाय के किसी भी सदस्य को हटाने का अधिकार होगा।",
      },
      {
        label: "ङ",
        text: "प्रशासनिक निकाय की बैठकें कुलाधिपति द्वारा उनकी पहल पर या प्रशासनिक निकाय के कम से कम चार सदस्यों द्वारा हस्ताक्षरित अनुरोध पर बुलाई जाएंगी।",
      },
      {
        label: "च",
        text: "प्रशासनिक निकाय की बैठकों में विचार किए गए सभी मुद्दों पर निर्णय उपस्थित सदस्यों के बहुमत से लिए जाएंगे।",
      },
      {
        label: "छ",
        text: "कुलाधिपति, यदि उपस्थित हों, तो प्रशासनिक निकाय की बैठकों की अध्यक्षता करेंगे। उनकी अनुपस्थिति में, कुलाधिपति प्रो कुलाधिपति या प्रशासनिक निकाय के किसी सदस्य को नामित कर सकते हैं।",
      },
      {
        label: "ज",
        text: "प्रत्येक बैठक की लिखित सूचना कुलसचिव द्वारा प्रत्येक सदस्य को बैठक की निर्धारित तारीख से कम से कम दो सप्ताह पहले भेजी जाएगी।",
        note: "बशर्ते कि अध्यक्ष किसी जरूरी मामले पर विचार करने के लिए प्रशासनिक निकाय की विशेष बैठक को कम समय की सूचना पर बुला सकते हैं।",
      },
      {
        label: "झ",
        text: "सूचना को हाथ से, ई-मेल द्वारा या कार्यालय में दर्ज प्रत्येक सदस्य के पते पर पंजीकृत डाक द्वारा भेजा जा सकता है।",
      },
      {
        label: "ञ",
        text: "एजेंडा कुलसचिव द्वारा बैठक से पहले सदस्यों को परिचालित किया जाएगा।",
      },
      {
        label: "ट",
        text: "एजेंडा में किसी आइटम को शामिल करने के लिए प्रस्ताव की सूचना बैठक से कम से कम दो सप्ताह पहले कुलसचिव तक पहुंचनी होगी। हालांकि, अध्यक्ष बिना उचित सूचना के किसी आइटम को शामिल करने की अनुमति दे सकते हैं।",
      },
      {
        label: "ठ",
        text: "प्रक्रिया के सभी प्रश्नों के संबंध में अध्यक्ष का निर्णय अंतिम होगा।",
      },
      {
        label: "ड",
        text: "प्रशासनिक निकाय की कार्यवाही के मिनट्स कुलसचिव द्वारा तैयार किए जाएंगे और अध्यक्ष के अनुमोदन के बाद प्रशासनिक निकाय के सभी सदस्यों को परिचालित किए जाएंगे। मिनट्स के साथ कोई संशोधन, यदि कोई हो, तो अगली बैठक में पुष्टि के लिए प्रस्तुत किया जाएगा। मिनट्स की पुष्टि और अध्यक्ष द्वारा हस्ताक्षर के बाद, इसे मिनट्स की पुस्तक में दर्ज किया जाएगा जो प्रशासनिक निकाय के सदस्यों द्वारा कार्यालय समय के दौरान निरीक्षण के लिए खुली रहेगी।",
      },
      {
        label: "ढ",
        text: "अधिनियम की धारा 24 के अनुसार सभी कार्य/शक्तियां प्रशासनिक निकाय के पास निहित हैं।",
      },
      {
        label: "ण",
        text: "प्रशासनिक निकाय, अधिनियम की धारा 24 की उप-धारा (3) के खंड (घ) के प्रावधानों के अनुसार, विश्वविद्यालय के अधिकारियों, शिक्षकों और कर्मचारियों के ऐसे अन्य पदों को सृजित कर सकता है जो उसे आवश्यक लगे।",
      },
    ],
    english: [
      {
        label: "b",
        text: "The term of nominated members shall be three years or till further orders.",
      },
      {
        label: "c",
        text: "The term of office of ex-officio members shall continue so long as they hold the office by virtue of which they are members.",
      },
      {
        label: "d",
        text: "The Sponsoring Body shall have power to remove any member of the Governing Body with reasons to be recorded in writing.",
      },
      {
        label: "e",
        text: "Meetings of the Governing Body shall be convened by the Chancellor either on his initiative or on a requisition signed by not less than four members of the Governing Body.",
      },
      {
        label: "f",
        text: "Decisions on all issues considered in the meetings of the Governing Body shall be taken by majority votes of the members present.",
      },
      {
        label: "g",
        text: "The Chancellor, if present, shall preside over the meetings of the Governing Body. In his absence, the Chancellor may nominate Pro Chancellor or a member of the Governing Body.",
      },
      {
        label: "h",
        text: "A written notice of every meeting shall be sent by the Registrar to every member at least two weeks before the scheduled date of the meeting.",
        note: "Provided that the Chairman may call a special meeting of the Governing Body at short notice to consider any urgent matter.",
      },
      {
        label: "j",
        text: "The notice may be delivered either by hand, e-mail or sent by registered post at the address of each member as recorded in the office.",
      },
      {
        label: "k",
        text: "Agenda shall be circulated by the Registrar to the members before the meeting.",
      },
      {
        label: "l",
        text: "Notices of motion for inclusion of any item on the agenda must reach the Registrar at least two weeks before the meeting. The Chairperson may, however, permit inclusion of any item for which due notice has not been received.",
      },
      {
        label: "m",
        text: "The ruling of the Chairperson in regard to all the questions of procedure shall be final.",
      },
      {
        label: "n",
        text: "The minutes of the proceedings of the Governing Body shall be drawn up by the Registrar and after the approval of the Chairman shall be circulated to all members of the Governing Body. The amendments, if any, with minutes shall be placed for confirmation at the next meeting of the Governing Body. After the minutes are confirmed and signed by the Chairman, the same shall be recorded in a book of minutes which shall be kept open for inspection during office hours by the members of the Governing Body.",
      },
      {
        label: "o",
        text: "As per section 24 of the Act, all the works/powers are enshrined with the Governing Body.",
      },
      {
        label: "p",
        text: "The Governing Body may, in accordance with the provisions of clause (d) to sub-section (3) of section 24 of the Act, create such other posts of officers, teachers, and employees of the University to perform such functions as it may deem necessary.",
      },
    ],
  },
};
