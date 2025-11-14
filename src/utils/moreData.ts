import type { JSX } from "react";
import type {
  GalleryContent,
  MagazinePage,
  MagazineTitles,
  MediaCoverageContent,
  VideoGalleryContent,
} from "./types";

export const arogyaPrabhaTitles: MagazineTitles = {
  heading: {
    hindi: "आरोग्य प्रभा",
    english: "Arogya Prabha",
  },
  headers: {
    title: {
      hindi: "पत्रिका का शीर्षक",
      english: "Magazine Title",
    },
    date: {
      hindi: "प्रकाशन तिथि",
      english: "Publication Date",
    },
    link: {
      hindi: "लिंक",
      english: "Link",
    },
  },
};

export const sevaPathTitles: MagazineTitles = {
  heading: {
    hindi: "सेवा पथ पत्रिका",
    english: "Seva Path Magazine",
  },
  headers: {
    title: {
      hindi: "पत्रिका का शीर्षक",
      english: "Magazine Title",
    },
    date: {
      hindi: "प्रकाशन तिथि",
      english: "Publication Date",
    },
    link: {
      hindi: "लिंक",
      english: "Link",
    },
  },
};

export const arogyaPathTitles: MagazineTitles = {
  heading: {
    hindi: "आरोग्य पथ",
    english: "Arogya Path",
  },
  headers: {
    title: {
      hindi: "पत्रिका का शीर्षक",
      english: "Magazine Title",
    },
    date: {
      hindi: "प्रकाशन तिथि",
      english: "Publication Date",
    },
    link: {
      hindi: "लिंक",
      english: "Link",
    },
  },
};

export const galleryContent: GalleryContent = {
  title: {
    english: "Campus Chronicles",
    hindi: "कैंपस का इतिहास",
  },
  subtitle: {
    english: "A glimpse into our moments and milestones.",
    hindi: "हमारे क्षणों और मील के पत्थर की एक झलक।",
  },
  noAlbums: (year: number) => ({
    english: `No albums found for ${year}.`,
    hindi: `${year} के लिए कोई एल्बम नहीं मिला।`,
  }),
};

export const videoGalleryContent: VideoGalleryContent = {
  title: {
    english: "Video Gallery",
    hindi: "वीडियो गैलरी",
  },
  subtitle: {
    english: "Watch moments from our journey, captured on video.",
    hindi: "हमारी यात्रा के क्षण देखें, वीडियो में कैद।",
  },
  noVideos: {
    english: "No videos found.",
    hindi: "कोई वीडियो नहीं मिला।",
  },
  readMore: {
    english: "Read More",
    hindi: "और पढ़ें",
  },
  readLess: {
    english: "Read Less",
    hindi: "कम पढ़ें",
  },
};

export const mediaCoverageContent: MediaCoverageContent = {
  title: {
    english: "Media Coverage",
    hindi: "मीडिया कवरेज",
  },
  subtitle: {
    english: "Our presence in the press and media.",
    hindi: "प्रेस और मीडिया में हमारी उपस्थिति।",
  },
  noCuttings: {
    english: "No media coverage found.",
    hindi: "कोई मीडिया कवरेज नहीं मिला।",
  },
};

export const magazinePage: MagazinePage = {
  title: {
    hindi: "विश्वविद्यालय पत्रिका",
    english: "Magazine for University",
  },
  desc: {
    hindi:
      "विश्वविद्यालय की पत्रिका देखें, जिसमें नवीनतम लेख, छात्र कथाएँ,रचनात्मक कार्य और परिसर की मुख्य झलकियाँ शामिल हैं।",
    english:
      "Explore the university magazine here, featuring the latest articles, student stories, creative works, and campus highlights.",
  },
};

export interface MagazineLink {
  title: {
    english: string;
    hindi: string;
  };
  href: string;
  icon: JSX.Element;
}


export const termsData = {
  pageTitle: {
    hindi: "नियम और शर्तें",
    english: "Terms & Conditions",
  },
  introNote: {
    hindi:
      "यह वेबसाइट महायोगी गोरखनाथ विश्वविद्यालय, गोरखपुर द्वारा विकसित और अनुरक्षित की गई है।",
    english:
      "This website is designed, developed, and maintained by Mahayogi Gorakhnath University, Gorakhpur.",
  },

  generalDisclaimer: {
    heading: {
      hindi: "सामान्य अस्वीकरण",
      english: "General Disclaimer",
    },
    paragraphs: [
      {
        hindi:
          "हालाँकि इस वेबसाइट पर सामग्री की सटीकता सुनिश्चित करने के लिए हर संभव प्रयास किया गया है, लेकिन इसे कानूनी घोषणा नहीं माना जाना चाहिए। किसी भी अस्पष्टता की स्थिति में, उपयोगकर्ताओं को संबंधित विभागों या स्रोतों से जानकारी की पुष्टि करने की सलाह दी जाती है।",
        english:
          "Though every effort has been made to ensure the accuracy of content on this website, it should not be construed as a statement of law. Users are advised to verify information with concerned departments or other sources.",
      },
      {
        hindi:
          "किसी भी परिस्थिति में, यह प्रदाता उपयोग, डेटा हानि, या किसी अप्रत्यक्ष या परिणामस्वरूप क्षति के लिए उत्तरदायी नहीं होगा। ये शर्तें भारतीय कानूनों द्वारा शासित हैं और किसी भी विवाद पर भारत के न्यायालयों का अधिकार क्षेत्र लागू होगा।",
        english:
          "Under no circumstances will this provider be liable for any loss, damage, or expense arising out of or in connection with the use of this website. These terms are governed by Indian laws, and any dispute shall fall under Indian court jurisdiction.",
      },
    ],
  },

  infoCollection: {
    heading: {
      hindi: "जानकारी का संग्रह और उपयोग",
      english: "Information Collection and Usage",
    },
    paragraphs: [
      {
        hindi:
          "हम वेबसाइट पर आने वाले उपयोगकर्ताओं की कोई व्यक्तिगत जानकारी जैसे नाम या पता एकत्र नहीं करते। यदि आप कोई व्यक्तिगत जानकारी प्रदान करते हैं, तो उसका उपयोग केवल आपकी जानकारी की मांग को पूरा करने के लिए किया जाता है।",
        english:
          "We collect no personal information like names or addresses when you visit our website. If you choose to provide it, it’s used only to fulfill your request for information.",
      },
      {
        hindi:
          "कुछ तकनीकी जानकारी स्वचालित रूप से संग्रहीत की जाती है ताकि आपकी यात्रा को बेहतर बनाया जा सके। इसमें आपका IP पता, ब्राउज़र का प्रकार, ऑपरेटिंग सिस्टम, और विज़िट की गई पेजों की जानकारी शामिल हो सकती है।",
        english:
          "Certain technical details are automatically collected to improve your browsing experience, including IP address, browser type, operating system, and pages visited.",
      },
    ],
  },

  cookies: {
    heading: {
      hindi: "कुकीज़ की जानकारी",
      english: "Cookies Information",
    },
    paragraphs: [
      {
        hindi:
          "हम केवल 'सेशन कुकीज़' का उपयोग करते हैं जो तकनीकी उद्देश्यों के लिए होते हैं और ब्राउज़र बंद होते ही हटा दिए जाते हैं। ये किसी भी उपयोगकर्ता की व्यक्तिगत जानकारी संग्रहीत नहीं करते।",
        english:
          "We use only non-persistent 'per-session cookies' for technical purposes, which do not collect personal data and are deleted once the browser is closed.",
      },
    ],
  },

  personalInfo: {
    heading: {
      hindi: "व्यक्तिगत जानकारी के प्रबंधन के संबंध में",
      english: "Handling of Personal Information",
    },
    paragraphs: [
      {
        hindi:
          "यदि आप हमसे संपर्क फ़ॉर्म या ईमेल के माध्यम से व्यक्तिगत जानकारी साझा करते हैं, तो इसका उपयोग केवल आपकी पूछताछ का उत्तर देने के लिए किया जाएगा। यह जानकारी किसी अन्य एजेंसी के साथ साझा नहीं की जाएगी जब तक कि कानून द्वारा आवश्यक न हो।",
        english:
          "If you provide personal information via email or contact forms, it will only be used to respond to your query and will not be shared except as required by law.",
      },
    ],
  },

  security: {
    heading: {
      hindi: "साइट सुरक्षा",
      english: "Site Security",
    },
    paragraphs: [
      {
        hindi:
          "यह वेबसाइट सुरक्षा के लिए नेटवर्क ट्रैफ़िक की निगरानी करती है ताकि अनधिकृत प्रयासों का पता लगाया जा सके। किसी भी प्रकार की अनधिकृत पहुंच या परिवर्तन भारतीय आईटी अधिनियम के अंतर्गत दंडनीय है।",
        english:
          "The site monitors network traffic for unauthorized attempts to upload or alter information. Any such attempts are strictly prohibited and punishable under the Indian IT Act.",
      },
    ],
  },

  copyright: {
    heading: {
      hindi: "कॉपीराइट नीति",
      english: "Copyright Policy",
    },
    paragraphs: [
      {
        hindi:
          "इस साइट की सामग्री कॉपीराइट द्वारा संरक्षित है जब तक अन्यथा उल्लेख न किया गया हो। सामग्री को डाउनलोड किया जा सकता है लेकिन इसका अन्य उपयोग विश्वविद्यालय की अनुमति से ही किया जा सकता है।",
        english:
          "All material on this site is copyright protected unless otherwise stated. Material may be downloaded for personal use, but other uses require prior approval from the University.",
      },
    ],
  },

  refund: {
    heading: {
      hindi: "शुल्क वापसी नीति",
      english: "Fee Refund Policy",
    },
    points: [
      {
        hindi:
          "एक ही पंजीकरण के खिलाफ कई भुगतान एक माह के भीतर सत्यापन के बाद लौटाए जाएंगे।",
        english:
          "Multiple payments against a single registration will be refunded within one month after verification.",
      },
      {
        hindi:
          "उप-कुलपति की स्वीकृति के बाद, सत्यापन के उपरांत शुल्क वापसी की जाएगी।",
        english:
          "Fee refunds will be processed upon approval of the Vice-Chancellor after verification.",
      },
    ],
  },

  hyperlink: {
    heading: {
      hindi: "हाइपरलिंक नीति",
      english: "Hyperlink Policy",
    },
    paragraphs: [
      {
        hindi:
          "किसी भी वेबसाइट से इस साइट पर लिंक देने से पहले पूर्व अनुमति आवश्यक है। लिंक की प्रकृति और भाषा के साथ अनुरोध भेजा जाना चाहिए।",
        english:
          "Prior permission is required before any website links to this site. The request should state the nature of the content and the exact hyperlink language.",
      },
    ],
  },
};


export const policyData = {
  pageTitle: {
    hindi: "गोपनीयता नीति",
    english: "Privacy Policy",
  },

  introNote: {
    hindi:
      "कृपया अधिक जानकारी के लिए इस पोर्टल की नीतियों को देखें। किसी भी प्रश्न के लिए हमसे संपर्क करें।",
    english:
      "Please refer to the following policies of this portal for more information. In case of further queries, feel free to contact us.",
  },

  informationCollection: {
    heading: {
      hindi: "जानकारी का संग्रह और उपयोग",
      english: "Information Collection and Use",
    },
    paragraphs: [
      {
        hindi:
          "हम आपकी व्यक्तिगत जानकारी जैसे नाम या पता एकत्र नहीं करते जब आप हमारी वेबसाइट पर आते हैं। यदि आप हमें ऐसी जानकारी देते हैं, तो उसका उपयोग केवल आपकी जानकारी की मांग को पूरा करने के लिए किया जाता है।",
        english:
          "We collect no personal information, like names or addresses, when you visit our website. If you choose to provide that information, it is only used to fulfil your request for information.",
      },
      {
        hindi:
          "हम कुछ तकनीकी जानकारी एकत्र करते हैं ताकि आपकी यात्रा निर्बाध हो सके। नीचे बताया गया है कि यह जानकारी कैसे एकत्र की जाती है।",
        english:
          "We do collect some technical information when you visit to make your visit seamless. The section below explains how we handle and collect technical information when you visit our website.",
      },
    ],
  },

  technicalInfo: {
    heading: {
      hindi: "स्वचालित रूप से एकत्र की गई तकनीकी जानकारी",
      english: "Information Collected and Stored Automatically",
    },
    paragraphs: [
      {
        hindi:
          "जब आप इस वेबसाइट को ब्राउज़ करते हैं, पढ़ते हैं, या जानकारी डाउनलोड करते हैं, तो हम स्वचालित रूप से कुछ तकनीकी जानकारी एकत्र करते हैं। यह जानकारी कभी भी आपकी पहचान नहीं करती।",
        english:
          "When you browse, read, or download information on this website, we automatically gather certain technical details about your visit. This information never identifies who you are.",
      },
      {
        hindi:
          "इस जानकारी का उपयोग केवल वेबसाइट को अधिक उपयोगी बनाने के लिए किया जाता है। इससे हमें विज़िटर्स की संख्या और उनके द्वारा उपयोग की जाने वाली तकनीक के बारे में जानकारी मिलती है।",
        english:
          "This information is only used to help us make the site more useful. It helps us understand the number of visitors and the technologies they use.",
      },
    ],
    list: [
      {
        hindi: "आपके सेवा प्रदाता का इंटरनेट डोमेन और IP पता।",
        english:
          "The Internet domain of your service provider and IP address.",
      },
      {
        hindi: "ब्राउज़र और ऑपरेटिंग सिस्टम का प्रकार।",
        english: "Type of browser and operating system used.",
      },
      {
        hindi: "वेबसाइट तक पहुंचने की तिथि और समय।",
        english: "Date and time you accessed our site.",
      },
      {
        hindi: "आपके द्वारा देखे गए पृष्ठ या URL।",
        english: "The pages/URLs you have visited.",
      },
      {
        hindi: "रेफरिंग वेबसाइट का पता (यदि लागू हो)।",
        english:
          "The address of the referring website if you reached us from another site.",
      },
    ],
  },

  cookies: {
    heading: {
      hindi: "कुकीज़ जानकारी",
      english: "Cookies Information",
    },
    paragraphs: [
      {
        hindi:
          "हम केवल 'सेशन कुकीज़' का उपयोग करते हैं जो वेबसाइट पर सुचारू नेविगेशन के लिए होते हैं और ब्राउज़र बंद होने पर हटा दिए जाते हैं। ये किसी उपयोगकर्ता की व्यक्तिगत जानकारी संग्रहीत नहीं करते।",
        english:
          "We only use non-persistent or per-session cookies for smooth navigation. These cookies do not collect personal information and are deleted when you close your browser.",
      },
    ],
  },

  personalInfo: {
    heading: {
      hindi: "व्यक्तिगत जानकारी",
      english: "Personal Information",
    },
    paragraphs: [
      {
        hindi:
          "यदि आप हमें संपर्क फ़ॉर्म या ईमेल के माध्यम से व्यक्तिगत जानकारी भेजते हैं, तो हम इसे केवल आपके प्रश्नों का उत्तर देने के लिए उपयोग करते हैं। यह जानकारी किसी अन्य एजेंसी के साथ साझा नहीं की जाएगी जब तक कि कानून द्वारा आवश्यक न हो।",
        english:
          "If you send us personal information via contact form or email, it will only be used to respond to your queries and not shared unless required by law.",
      },
      {
        hindi:
          "हम किसी भी प्रकार की प्रोफाइलिंग या वाणिज्यिक विपणन के लिए व्यक्तिगत जानकारी एकत्र नहीं करते।",
        english:
          "We never collect information or create individual profiles for commercial marketing purposes.",
      },
    ],
  },

  security: {
    heading: {
      hindi: "साइट सुरक्षा",
      english: "Site Security",
    },
    paragraphs: [
      {
        hindi:
          "साइट सुरक्षा के लिए नेटवर्क ट्रैफ़िक की निगरानी की जाती है ताकि अनधिकृत प्रयासों का पता लगाया जा सके। भारतीय आईटी अधिनियम के अंतर्गत ऐसे प्रयास दंडनीय हैं।",
        english:
          "For site security, network traffic is monitored to detect unauthorized attempts. Such attempts are punishable under the Indian IT Act.",
      },
    ],
  },

  copyright: {
    heading: {
      hindi: "कॉपीराइट नीति",
      english: "Copyright Policy",
    },
    paragraphs: [
      {
        hindi:
          "इस साइट की सामग्री कॉपीराइट द्वारा संरक्षित है। सामग्री को डाउनलोड किया जा सकता है लेकिन अन्य उपयोग के लिए विश्वविद्यालय की अनुमति आवश्यक है।",
        english:
          "The material on this site is copyright protected. It may be downloaded for personal use, but any other use requires university approval.",
      },
    ],
  },

  refund: {
    heading: {
      hindi: "शुल्क वापसी नीति",
      english: "Refund Policy",
    },
    points: [
      {
        hindi:
          "एक ही पंजीकरण के खिलाफ कई भुगतान एक महीने के भीतर सत्यापन के बाद वापस कर दिए जाएंगे।",
        english:
          "Multiple payments against a single registration will be refunded within one month after verification.",
      },
      {
        hindi:
          "उपकुलपति की स्वीकृति और सत्यापन के बाद शुल्क वापसी की जाएगी।",
        english:
          "With the Vice-Chancellor’s approval and verification, fee refunds will be processed.",
      },
    ],
  },

  hyperlink: {
    heading: {
      hindi: "हाइपरलिंक नीति",
      english: "Hyperlink Policy",
    },
    paragraphs: [
      {
        hindi:
          "किसी अन्य वेबसाइट से इस साइट पर लिंक देने से पहले पूर्व अनुमति आवश्यक है। लिंक की प्रकृति और भाषा के साथ अनुरोध भेजा जाना चाहिए।",
        english:
          "Prior permission is required before linking from any other website. Requests should state the nature of content and hyperlink language.",
      },
    ],
  },
};