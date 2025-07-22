import type {
  AboutUsContent,
  FivePledgesContent,
  InspirationAbodeContent,
  InspirationPageContent,
  InstitutionsContent,
  LeadershipContent,
  MilestonesContent,
  OurIdealsContent,
  Principles,
  ProgressPathContent,
  ProposedProgramsContent,
  ShikshaParishadCharterContent,
  SpecialtyContent,
  UniversityLogoContent,
  VisionMissionContent,
} from "./types";

export const aboutUsData: AboutUsContent = {
  heading: {
    hindi: "हमारे बारे में",
    english: "About Us",
  },
  paragraphs: [
    {
      hindi:
        "नाथपंथ के प्रवर्तक महायोगी गोरखनाथ का भारत की संत परंपरा में पूज्यनीय स्थान है। भारत की आध्यात्मिक परंपरा में क्रिया योग का ज्ञान जन-जन तक पहुँचाने का श्रेय महायोगी गुरु गोरखनाथ और नाथ योगियों को जाता है। एक युग-प्रवर्तक संत माने जाने वाले महायोगी गोरखनाथ भारत में सामाजिक परिवर्तन के अग्रदूत थे, जिन्होंने मानव शरीर, मन, मस्तिष्क और आत्मा के शुद्धिकरण के साथ-साथ स्वास्थ्य और उपासना का एक अनूठा सूत्र प्रस्तुत किया। गुरु श्री गोरखनाथ द्वारा प्रवर्तित नाथपंथ निष्काम कर्मयोग का मार्गदर्शन करता है, जो लोगों के कल्याण के लिए समर्पित सेवा को एक आध्यात्मिक साधना के रूप में देखता है।",
      english:
        "Mahayogi Gorakhnath, the Pravartak of the Nathpanth, holds a revered place in the saint tradition of India. In the spiritual tradition of India, the credit for spreading the knowledge of Kriya Yoga to the people goes to Mahayogi Guru Gorakhnath and the Nath Yogis. Considered a Yug-Pravartak saint, Mahayogi Gorakhnath was the forerunner of social change in India, offering a unique formula of health and worship alongside purification of the human body, mind, brain, and soul. The Nathpanth, promoted by Guru Shri Gorakhnath, guides Nishkam Karmayoga, viewing service dedicated to people’s welfare as a spiritual practice.",
    },
    {
      hindi:
        "श्री गोरखनाथ मंदिर महायोगी श्री गोरखनाथ जी की तपस्या स्थली है। यह व्यापक रूप से माना जाता है कि श्री गोरखनाथ मंदिर और श्री गोरक्षपीठ के महंत गुरु श्री गोरखनाथ जी के प्रतिनिधि हैं। इस युग-प्रवर्तक महायोगी के समय से ही मंदिर की परोपकारी भूमिका का विस्तार हो रहा है। आधुनिक युग में, ब्रह्मलीन महंत दिग्विजयनाथ जी महाराज ने इस सेवा में शिक्षा और चिकित्सा को एकीकृत किया। 1932 में महाराणा प्रताप शिक्षा परिषद की स्थापना इस वैचारिक आंदोलन की शुरुआत थी। ब्रह्मलीन महंत दिग्विजयनाथ जी महाराज ने प्राथमिक से लेकर उच्च शिक्षा तक के शिक्षण संस्थानों की स्थापना की और गोरखपुर विश्वविद्यालय की स्थापना का मार्ग प्रशस्त किया।",
      english:
        "Shri Gorakhnath Temple is the place of penance of Mahayogi Shri Gorakhnath Ji. It is widely believed that the Mahant of Shri Gorakhnath Temple and Shri Gorakshapeeth is the representative of Guru Shri Gorakhnath Ji. Since the time of this Yug-Pravartak Mahayogi, the temple’s philanthropic role has been expanding. In the modern era, Brahmaleen Mahant Digvijainath Ji Maharaj integrated education and medicine into this service. The establishment of Maharana Pratap Shiksha Parishad in 1932 marked the beginning of this ideological movement. Brahmaleen Mahant Digvijainath Ji Maharaj founded educational institutions from primary to higher education and paved the way for the establishment of Gorakhpur University.",
    },
    {
      hindi:
        "इसी विरासत को आगे बढ़ाते हुए, ब्रह्मलीन महंत अवेद्यनाथ जी महाराज ने गुरु श्री गोरक्षनाथ चिकित्सालय समिति की स्थापना के माध्यम से एलोपैथिक चिकित्सा में महत्वपूर्ण योगदान की नींव रखी। दिग्विजयनाथ आयुर्वेदिक कॉलेज और दिग्विजयनाथ आयुर्वेदिक चिकित्सालय के बाद गुरु श्री गोरक्षनाथ चिकित्सालय की स्थापना पूर्वी उत्तर प्रदेश में स्वास्थ्य सेवा में एक महत्वपूर्ण मील का पत्थर थी।",
      english:
        "Continuing this legacy, Brahmaleen Mahant Avedyanath Ji Maharaj laid the foundation for significant contributions to allopathic medicine through the establishment of the Guru Shri Gorakshnath Chikitsalaya Samiti. The founding of Guru Shri Gorakshnath Chikitsalaya, following the Digvijainath Ayurvedic College and Digvijainath Ayurvedic Chikitsalaya, was a key milestone in healthcare service in Eastern Uttar Pradesh.",
    },
    {
      hindi:
        "महायोगी श्री गोरखनाथ की समाज सेवा और दलितों के उत्थान की विरासत महायोगी गोरखनाथ विश्वविद्यालय, गोरखपुर की स्थापना के माध्यम से निरंतर बढ़ रही है। यह क्रांतिकारी शैक्षणिक प्रयास योग, आयुर्वेद, चिकित्सा शिक्षा, मानविकी, भौतिक विज्ञान, तकनीकी शिक्षा, कौशल विकास और व्यावसायिक पाठ्यक्रमों को एकीकृत करता है, जिसका उद्देश्य इस ऐतिहासिक रूप से पिछड़े क्षेत्र में शिक्षा और स्वास्थ्य सेवा के बुनियादी ढांचे में क्रांति लाना है।",
      english:
        "Mahayogi Shri Gorakhnath’s legacy of social service and upliftment of the downtrodden continues to grow through the establishment of Mahayogi Gorakhnath University, Gorakhpur. This revolutionary academic endeavor merges yoga, Ayurveda, medical education, humanities, physical sciences, technical education, skill development, and vocational courses, aiming to revolutionize education and healthcare infrastructure in this historically underserved region.",
    },
  ],
  visionHeading: {
    hindi: "महायोगी गोरखनाथ विश्वविद्यालय का दृष्टिकोण और लक्ष्य",
    english: "Vision and Aim of Mahayogi Gorakhnath University",
  },
  visionPoints: [
    {
      hindi:
        "मानविकी, भौतिक विज्ञान, प्रौद्योगिकी, चिकित्सा क्षेत्र, स्वास्थ्य सेवा, कृषि और कौशल विकास में उच्चतम मानकों को बनाए रखते हुए, अत्याधुनिक प्रौद्योगिकी, सुविधाओं और बुनियादी ढांचे के साथ एक विश्व स्तरीय आधुनिक संस्थान विकसित करना।",
      english:
        "Develop a world-class modern institution with state-of-the-art technology, facilities, and infrastructure, maintaining the highest standards in education across humanities, physical sciences, technology, medical fields, healthcare, agriculture, and skill development.",
    },
    {
      hindi:
        "पारंपरिक से लेकर आधुनिक तक - चिकित्सा की सभी विधाओं में संस्थानों की स्थापना करना, जो स्थानीय संसाधनों और जरूरतों पर केंद्रित अनुसंधान, विकास, तकनीकी शिक्षा और व्यावसायिक कौशल में लगे हों।",
      english:
        "Establish institutions spanning all genres of medicine — from conventional to modern — engaged in research, development, technical education, and vocational skills, focused on local resources and needs.",
    },
    {
      hindi:
        "शिक्षा और स्वास्थ्य से संबंधित सैद्धांतिक और व्यावहारिक ज्ञान की प्राचीन और आधुनिक दोनों धाराओं में अध्ययन और अनुसंधान को प्रोत्साहित करना।",
      english:
        "Encourage study and research in both ancient and modern streams of theoretical and practical knowledge related to education and health.",
    },
    {
      hindi:
        "एक ही परिसर में एलोपैथी, योग, आयुर्वेद आदि के लिए स्वास्थ्य संस्थानों और अस्पतालों का निर्माण करना, जो शिक्षण, अनुसंधान और स्थानीय समुदाय के लिए सस्ती उन्नत स्वास्थ्य सेवाओं को जोड़ते हों।",
      english:
        "Build healthcare institutions and hospitals for allopathy, yoga, Ayurveda, etc., within a single campus, combining teaching, research, and affordable advanced healthcare services for the local community.",
    },
    {
      hindi:
        "एलोपैथी और इसकी संबंधित धाराओं जैसी आधुनिक चिकित्सा के अनुसंधान, प्रशिक्षण और प्रसार को बढ़ावा देना।",
      english:
        "Promote research, training, and propagation of modern medicine such as allopathy and its related streams.",
    },
    {
      hindi:
        "नर्सिंग, फार्मेसी, पैरामेडिकल और अन्य स्वास्थ्य सेवा से संबंधित क्षेत्रों में शिक्षण, प्रशिक्षण और अनुसंधान कार्यक्रम विकसित करना।",
      english:
        "Develop teaching, training, and research programs in nursing, pharmacy, paramedical, and other healthcare-related fields.",
    },
    {
      hindi:
        "स्थानीय आबादी के लिए स्वास्थ्य सेवाओं और रोजगार के अवसरों में सुधार के उद्देश्य से विशेष पाठ्यक्रम लागू करना।",
      english:
        "Implement specialized curricula aimed at improving health services and employment opportunities for the local population.",
    },
    {
      hindi:
        "चिकित्सा अध्ययन की अत्यधिक विशिष्ट शाखाओं से संबंधित पाठ्यक्रम तैयार करना और इन क्षेत्रों में आगे के अनुसंधान और विकास को प्रोत्साहित करना।",
      english:
        "Prepare curricula related to highly specialized branches of medical studies and encourage further research and development in these areas.",
    },
    {
      hindi:
        "क्षेत्र के दूरदराज के ग्रामीण क्षेत्रों में समाज कल्याण और स्वास्थ्य कार्यक्रमों से जुड़े संस्थानों की स्थापना करना।",
      english:
        "Establish institutions connected to social welfare and health programs in remote rural areas of the region.",
    },
  ],
};

export const inspirationPageData: InspirationPageContent = {
  pageTitle: {
    hindi: "हमारी प्रेरणा के स्रोत",
    english: "Our Source of Inspiration",
  },
  inspirations: [
    {
      name: {
        hindi: "महंत दिग्विजयनाथ जी महाराज",
        english: "Mahant Digvijainath Ji Maharaj",
      },
      image: "/mahantDigvijainath.jpg",
      paragraphs: [
        {
          hindi:
            "महाराणा प्रताप शिक्षा परिषद् के संस्थापक, युगपुरुष गोरक्षपीठाधीश्वर ब्रह्मलीन महंत दिग्विजयनाथ जी महाराज ने 1932 में इस दूरदर्शी संगठन की आधारशिला रखी। भारत के स्वतंत्रता आंदोलन के एक महान व्यक्तित्व और आध्यात्मिक तथा शैक्षिक नेतृत्व के प्रतीक, वे राष्ट्र के भविष्य को आकार देने में युवाओं की शक्ति में गहरा विश्वास रखते थे।",
          english:
            "The founding father of Maharana Pratap Shiksha Parishad, Yugpurush Gorakshpeethadheeswar Brahmleen Mahant Digvijainath Ji Maharaj, laid the foundation stone of this visionary organization in 1932. A towering figure in India’s independence movement and a beacon of spiritual and educational leadership, he believed deeply in the power of youth to shape the future of the nation.",
        },
        {
          hindi:
            "इस दृष्टिकोण को साकार करने के लिए, पूज्य महाराज जी ने एक भारत-केंद्रित शिक्षा प्रणाली का समर्थन किया, जो भारतीय मूल्यों, विरासत और आत्मनिर्भरता में निहित थी। उन्होंने प्राथमिक विद्यालयों से लेकर उच्च शिक्षा तक के प्रोटोटाइप संस्थानों की स्थापना की, जो इस बात के मॉडल के रूप में काम करते थे कि भारतीय शिक्षा वास्तव में क्या बन सकती है।",
          english:
            "To realize this vision, Poojya Maharaj Ji championed a Bharat-centric education system, one that was rooted in Indian values, heritage, and self-reliance. He established prototype institutions ranging from primary schools to higher education that served as models for what Indian education could truly become.",
        },
        {
          hindi:
            "महंत दिग्विजयनाथ जी ने स्वतंत्र भारत के शुरुआती विश्वविद्यालयों में से एक - गोरखपुर विश्वविद्यालय (अब दीन दयाल उपाध्याय गोरखपुर विश्वविद्यालय) की स्थापना में भी महत्वपूर्ण भूमिका निभाई।",
          english:
            "Mahant Digvijainath Ji also played a pivotal role in the establishment of one of independent India’s earliest universities – Gorakhpur University (now Deen Dayal Upadhyaya Gorakhpur University).",
        },
        {
          hindi:
            "उनके नेतृत्व में, महाराणा प्रताप शिक्षा परिषद् एक 'त्रिवेणी' - शिक्षा, स्वास्थ्य और प्रौद्योगिकी का संगम - के रूप में विकसित हुई, जो समाज की समग्र, उद्देश्य-संचालित तरीके से सेवा कर रही है।",
          english:
            "Under his leadership, Maharana Pratap Shiksha Parishad grew into a 'Triveni' – a confluence of Education, Health, and Technology, serving society in a holistic, purpose-driven manner.",
        },
      ],
    },
    {
      name: {
        hindi: "राष्ट्र संत महंत अवेद्यनाथ जी महाराज",
        english: "Rashtra Sant Mahant Avedyanath Ji Maharaj",
      },
      image: "/mahantAvedyanath.jpg",
      paragraphs: [
        {
          hindi:
            "महाराणा प्रताप शिक्षा परिषद् के गतिशील कर्णधार, राष्ट्र संत गोरक्षपीठाधीश्वर ब्रह्मलीन महंत अवेद्यनाथ जी महाराज ने अपने गुरुदेव द्वारा शुरू किए गए सपने को विस्तारित और संस्थागत बनाया। अद्वितीय भक्ति के साथ, उन्होंने सेवा की मशाल को आगे बढ़ाया और इसे कल्याण, ज्ञान और लोक-हित के एक प्रज्वलित महायज्ञ में बदल दिया।",
          english:
            "The dynamic helmsman of Maharana Pratap Shiksha Parishad, Rashtra Sant Gorakshpeethadheeswar Brahmleen Mahant Avedyanath Ji Maharaj, expanded and institutionalized the dream initiated by his Gurudev. With unmatched devotion, he carried the torch of service and transformed it into a blazing Mahayajna of welfare, knowledge, and public good.",
        },
        {
          hindi:
            "परम पूज्य महाराज जी ने शिक्षा, प्रशिक्षण, चिकित्सा और प्रौद्योगिकी के क्षेत्र में संस्थानों का एक विस्तृत नेटवर्क स्थापित किया, जो ग्रामीण और शहरी दोनों आबादी तक पहुँचा, विशेष रूप से पूर्वी उत्तर प्रदेश में।",
          english:
            "Param Poojya Maharaj Ji established a wide network of institutions across Education, Training, Medicine, and Technology, reaching both rural and urban populations, especially in Eastern Uttar Pradesh.",
        },
        {
          hindi:
            "उनके 'सेवा से साधना' के दर्शन ने स्कूलों, कॉलेजों, पॉलिटेक्निक, शिक्षक प्रशिक्षण संस्थानों और नर्सिंग कॉलेजों की स्थापना को प्रेरित किया। ये संस्थान केवल सीखने के केंद्र नहीं थे, बल्कि परिवर्तन के मंदिर थे, जहाँ मस्तिष्कों को जागृत किया जाता था और जीवन को उन्नत किया जाता था।",
          english:
            "His philosophy of “सेवा से साधना” (Sadhna through Service) inspired the creation of schools, colleges, polytechnics, teacher training institutes, and nursing colleges. These institutions weren't merely centers of learning but temples of transformation, where minds were awakened and lives uplifted.",
        },
        {
          hindi:
            "उनके प्रयासों से आयुर्वेदिक और एलोपैथिक अस्पतालों की स्थापना भी हुई, जो आम लोगों के स्वास्थ्य और कल्याण की देखभाल करते थे - इस प्रकार समग्र राष्ट्रीय सेवा के दृष्टिकोण को और विस्तारित किया।",
          english:
            "His efforts also led to the establishment of Ayurvedic and Allopathic hospitals, catering to the health and wellness of the common people – further extending the vision of holistic national service.",
        },
        {
          hindi:
            "ये सभी प्रयास शिक्षा, स्वास्थ्य और सांस्कृतिक पुनरुत्थान के माध्यम से राष्ट्र की सेवा करने के महान दृष्टिकोण में गहराई से निहित थे, जो निस्वार्थ सेवा और आध्यात्मिक अनुशासन के शाश्वत मूल्यों को दर्शाते हैं।",
          english:
            "All these endeavors were deeply rooted in the noble vision of serving the nation through education, health, and cultural revival, reflecting the eternal values of selfless service and spiritual discipline.",
        },
      ],
    },
  ],
};

export const leadershipData: LeadershipContent = {
  pageTitle: {
    hindi: "एक प्रेरणादायक नेतृत्व",
    english: "An Inspirational Leadership",
  },
  leaderName: {
    hindi: "पूज्य महंत योगी आदित्यनाथ जी महाराज",
    english: "Poojya Mahant Yogi Adityanath Ji Maharaj",
  },
  image: "/yogiJi.webp",
  paragraphs: [
    {
      hindi:
        "एक आध्यात्मिक प्रकाशपुंज, दूरदर्शी राजनेता और परिवर्तनकारी नेता, पूज्य महंत योगी आदित्यनाथ जी महाराज, महायोगी गोरखनाथ विश्वविद्यालय, गोरखपुर के संस्थापक कुलाधिपति हैं। उनका नेतृत्व धार्मिक समर्पण, राजनीतिक उत्कृष्टता और मानवीय सेवा का संगम है।",
      english:
        "A spiritual luminary, visionary statesman, and transformative leader, Poojya Mahant Yogi Adityanath Ji Maharaj is the Founder Chancellor of Mahayogi Gorakhnath University, Gorakhpur. His leadership is a confluence of religious dedication, political excellence, and humanitarian service.",
    },
    {
      hindi:
        "गोरक्षपीठ के पीठाधीश्वर और उत्तर प्रदेश के माननीय मुख्यमंत्री के रूप में, पूज्य महाराज जी ने महाराणा प्रताप शिक्षा परिषद् के दायरे और कद को बढ़ाया है, इसे उत्कृष्टता, नैतिकता और नवाचार के लोकाचार द्वारा संचालित शिक्षा, स्वास्थ्य सेवा और लोक कल्याण में नए आयामों में प्रेरित किया है।",
      english:
        "As the Peethadheeswar of Gorakshpeeth and the Hon’ble Chief Minister of Uttar Pradesh, Poojya Maharaj Ji has elevated the scope and stature of Maharana Pratap Shiksha Parishad, propelling it into new dimensions across education, healthcare, and public welfare driven by an ethos of excellence, ethics, and innovation.",
    },
    {
      hindi:
        "वैज्ञानिक स्वभाव वाले एक विचारक और प्रकृति के गहरे प्रेमी, योगी आदित्यनाथ जी महाराज अपने मौलिक विचारों और दूरदर्शी सुधारों के लिए जाने जाते हैं। संस्थागत अनुशासन, उद्देश्यपूर्ण सेवा और राष्ट्र-निर्माण पर उनके जोर ने महाराणा प्रताप शिक्षा परिषद् के तहत संस्थानों को अपने-अपने क्षेत्रों में आदर्श बना दिया है।",
      english:
        "A thinker with a scientific temperament and a deep lover of nature, Yogi Adityanath Ji Maharaj is known for his original ideas and visionary reforms. His emphasis on institutional discipline, purposeful service, and nation-building has made the institutions under Maharana Pratap Shiksha Parishad role models in their respective fields.",
    },
    {
      hindi:
        "महायोगी गोरखनाथ विश्वविद्यालय, गोरखपुर की संकल्पना, दृष्टि और साकार रूप, पूज्य महाराज जी की अटूट प्रतिबद्धता और दीर्घकालिक योजना का प्रमाण है। यह केवल एक विश्वविद्यालय नहीं है, बल्कि भारतीय मूल्यों में निहित एक वैश्विक स्तर पर बेंचमार्क किए गए संस्थान के निर्माण के एक महान इरादे से पैदा हुआ उनका स्वप्निल प्रोजेक्ट है।",
      english:
        "The very conception, vision, and realization of Mahayogi Gorakhnath University, Gorakhpur are a testament to the unwavering commitment and long-term planning of Poojya Maharaj Ji. It is not just a university, but his dream project born from a noble intention to build a globally benchmarked institution rooted in Bharatiya values.",
    },
    {
      hindi:
        "2005 में शुरुआती प्रयासों से लेकर 2013 तक दिखाई देने वाले जमीनी स्तर पर परिवर्तन तक, भूमि अधिग्रहण, बुनियादी ढांचे की योजना बनाने से लेकर शीर्ष स्तरीय निर्माण और प्रौद्योगिकी भागीदारों को शामिल करने तक का हर कदम उनके उद्देश्य की स्पष्टता और लौह इच्छाशक्ति से प्रेरित था।",
      english:
        "From the early efforts in 2005 to ground-level transformation visible by 2013, every step from acquiring land, planning infrastructure, to engaging top-tier construction and technology partners was driven by his clarity of purpose and iron will.",
    },
    {
      hindi:
        "आज, महायोगी गोरखनाथ विश्वविद्यालय एक अति-आधुनिक, बहु-विषयक केंद्र के रूप में खड़ा है, जिसे गोरखपुर के 'ज्ञान शहर' के रूप में उदय की रीढ़ बनने की कल्पना की गई है। अत्याधुनिक शैक्षिक और चिकित्सा सुविधाओं के साथ, इसे न केवल शिक्षित करने के लिए बल्कि प्रेरित करने के लिए भी डिज़ाइन किया गया है।",
      english:
        "Today, Mahayogi Gorakhnath University stands as an ultra-modern, multidisciplinary hub, envisioned to become a backbone of Gorakhpur's rise as a 'Knowledge City'. With state-of-the-art educational and medical facilities, it is designed not only to educate but to inspire.",
    },
    {
      hindi:
        "यह एक ऐसे नेता की आकांक्षा को दर्शाता है जो परंपरा को प्रौद्योगिकी के साथ, आध्यात्मिकता को विज्ञान के साथ, और सेवा को विद्वता के साथ मिलाता है।",
      english:
        "It reflects the aspiration of a leader who merges tradition with technology, spirituality with science, and service with scholarship.",
    },
  ],
};

export const ourIdealsData: OurIdealsContent = {
  pageTitle: {
    hindi: "हमारे आदर्श",
    english: "Our Ideals",
  },
  ideals: [
    {
      name: {
        hindi: "मर्यादा पुरुषोत्तम भगवान श्री राम",
        english: "Maryada Purushottam Lord Sri Ram",
      },
      image: "/maryadaPurushottam.jpg",
      quote: {
        hindi: "जननी जन्मभूमिश्च स्वर्गादपि गरीयसी",
        english: "‘Janani Janma Bhumishcha Swargadapi Gariyasi’",
      },
      paragraphs: [
        {
          hindi:
            "हमारे आदर्श, राष्ट्रनायक मर्यादा पुरुषोत्तम भगवान श्री राम, भारतीय संस्कृति और मूल्यों के प्रतीक हैं, जो साहस, करुणा और अटूट धार्मिकता का मूर्त रूप हैं। धर्म के ध्वजवाहक के रूप में, वे आत्म-अनुशासन, न्याय और कर्तव्य-बद्ध नेतृत्व के अंतिम प्रतीक के रूप में खड़े थे। उनका जीवन सत्य और सदाचार के मार्ग पर चलने की आकांक्षा रखने वाले सभी लोगों के लिए एक मार्गदर्शक प्रकाश है।",
          english:
            "Our ideal, Rastranayak Maryada Purushottam Lord Sri Ram, is an epitome of Indian culture and values, an embodiment of courage, compassion, and unwavering righteousness. As the torchbearer of Dharma, he stood as the ultimate symbol of self-discipline, justice, and duty-bound leadership. His life is a guiding light for all who aspire to walk the path of truth and virtue.",
        },
        {
          hindi:
            "भगवान श्री राम का यह सदा-प्रेरणादायक उद्घोष उनकी मातृभूमि और धार्मिकता के प्रति उनकी सर्वोच्च भक्ति को दर्शाता है। उन्होंने सिंहासन पर वनवास, आराम पर कर्तव्य और सुविधा पर सम्मान को चुना, जिससे नैतिक स्पष्टता और बलिदान के साथ नेतृत्व करने का एक शाश्वत उदाहरण स्थापित हुआ।",
          english:
            "This ever-inspiring exclamation by Lord Sri Ram reflects his supreme devotion to his motherland and righteousness. He chose exile over throne, duty over comfort, and honor over convenience, setting an eternal example of what it means to lead with moral clarity and sacrifice.",
        },
        {
          hindi:
            "भगवान राम का शासन - राम राज्य - न्यायपूर्ण शासन के लिए एक मानदंड बन गया है, जहाँ सत्य, निष्पक्षता और करुणा का बोलबाला था। उन्होंने दुनिया को सिखाया कि शक्ति को हमेशा जिम्मेदारी से निर्देशित किया जाना चाहिए, और निर्णय हमेशा धर्म के अनुरूप होने चाहिए। उनका जीवन हमें याद दिलाता है कि शक्ति धन या हथियारों में नहीं, बल्कि चरित्र, साहस और दृढ़ विश्वास में है।",
          english:
            "Lord Ram's reign — Ram Rajya — has become a benchmark for just governance, where truth, fairness, and compassion prevailed. He taught the world that power must always be guided by responsibility, and decisions must always align with Dharma. His life reminds us that strength is not in wealth or weapons, but in character, courage, and conviction.",
        },
        {
          hindi:
            "एक ऐसी दुनिया में जहाँ प्रलोभन अक्सर निर्णय को धूमिल कर देते हैं, भगवान राम का जीवन हमें स्वार्थ से ऊपर उठने, सत्य को बनाए रखने और गरिमा, करुणा और जिम्मेदारी के साथ जीने का आग्रह करता है। वे केवल एक ऐतिहासिक व्यक्ति नहीं हैं; वे एक कालातीत आदर्श हैं - आध्यात्मिक शक्ति, एकता और नैतिक समृद्धि की ओर प्रयासरत समाज के लिए एक जीवित विवेक।",
          english:
            "In a world where temptations often cloud judgment, Lord Ram's life urges us to rise above self-interest, uphold truth, and live with dignity, compassion, and responsibility. He is not just a historical figure; he is a timeless ideal — a living conscience for a society striving toward spiritual strength, unity, and ethical prosperity.",
        },
      ],
    },
    {
      name: {
        hindi: "महाराणा प्रताप जी",
        english: "Maharana Pratap Ji",
      },
      image: "/maharanaPratap.jpg",
      quote: {
        hindi: "जो हठि राखे धर्म को तिहि राखै करतार",
        english: "‘Jo hathi rakhe dharm ko tihi rakhe Kartar’",
      },
      paragraphs: [
        {
          hindi:
            "महाराणा प्रताप जी मध्यकालीन भारत के अद्वितीय योद्धाओं में से एक थे। वीर शिरोमणि महाराणा प्रताप ने संप्रभुता, स्वाभिमान, धर्म और मातृभूमि के लिए सब कुछ बलिदान कर दिया।",
          english:
            "Maharana Pratap Ji was one of the unparalleled warriors of medieval Bharat. Veer Shiromani Maharana Pratap sacrificed everything for sovereignty, self-pride, religion, and motherland.",
        },
        {
          hindi:
            "उनका वीरता का सदा-गूंजने वाला उद्घोष अनगिनत पीढ़ियों को प्रेरित करता है और महाराणा प्रताप शिक्षा परिषद् की शैक्षिक भावना का मार्गदर्शन करता है।",
          english:
            "His ever-reverberating exclamation of valour inspires countless generations and guides the educational spirit of Maharana Pratap Shiksha Parishad.",
        },
        {
          hindi:
            "परिषद् यह सुनिश्चित करती है कि हमारे संस्थानों में पढ़ने वाले युवा अपने चुने हुए विषयों - विज्ञान, कला और उससे आगे - में अद्यतन, व्यवस्थित और रोजगार-उन्मुख ज्ञान प्राप्त करें।",
          english:
            "The Parishad ensures that youngsters studying in our institutions obtain up-to-date, systematic, and employment-oriented knowledge in their chosen disciplines — science, arts, and beyond.",
        },
        {
          hindi:
            "हम छात्रों को आत्मनिर्भर, रोजगार योग्य और आत्मविश्वासी व्यक्ति बनाने के लिए आधुनिक शिक्षण सहायक सामग्री और विधियों का उपयोग करते हैं।",
          english:
            "We use modern teaching aids and methods to make students self-reliant, employable, and confident individuals.",
        },
        {
          hindi:
            "साथ ही, यह हमारा मिशन है कि हम उनमें उच्च नैतिक और नैतिक मूल्य पैदा करें ताकि वे ईमानदारी, समर्पण और भक्ति के साथ समाज की सेवा कर सकें।",
          english:
            "At the same time, it is our mission to instill in them high moral and ethical values so they can serve society with integrity, dedication, and devotion.",
        },
      ],
    },
  ],
};

export const universityLogoData: UniversityLogoContent = {
  pageTitle: {
    hindi: "विश्वविद्यालय का प्रतीक चिन्ह",
    english: "University Logo",
  },
  image: "/largelogo.jpg",
  paragraphs: [
    {
      hindi:
        "महायोगी गोरखनाथ विश्वविद्यालय, गोरखपुर के प्रतीक चिन्ह के केंद्र में महायोगी गुरु श्री गोरखनाथ जी का चित्र रखा गया है। महायोगी गोरखनाथ जी महाराज भारत में समाज सुधार के अग्रदूतों में से एक हैं। अपने दूरदर्शी, अथक कार्य और प्रयास से, उन्होंने हमारे सनातन समाज में अस्पृश्यता और अन्य अपमानजनक, विभाजनकारी प्रथाओं जैसे रिवाजों के खिलाफ जनता को प्रबुद्ध, शिक्षित और जागृत किया।",
      english:
        "Image of Mahayogi Guru Shri Gorakhnath ji is placed at the centre of the logo of Mahayogi Gorakhnath University, Gorakhpur. Mahayogi Gorakhnath ji Maharaj is one of the pioneers of social reform in India. By his visionary, untiring work and effort, he enlightened, educated, and awakened the masses against customs like untouchability and other demeaning, divisive practices in our Sanatan society.",
    },
    {
      hindi:
        "इसके बजाय, उन्होंने नैतिक और आचारिक क्रिया, ईमानदारी, सत्यनिष्ठा, चरित्र और अच्छे आचरण पर जोर दिया। महायोगी गोरखनाथ, जिन्होंने अपना पूरा जीवन तपस्या के लिए समर्पित कर दिया, भारतीय संस्कृति की त्याग और समाज सुधार की गौरवशाली विरासत के प्रतीक हैं।",
      english:
        "Instead, he emphasized moral and ethical action, honesty, integrity, character, and good conduct. Mahayogi Gorakhnath, who devoted his entire life to asceticism, is a symbol of Indian culture’s glorious legacy of renunciation and social reform.",
    },
    {
      hindi:
        "महायोगी गोरखनाथ भारत की कालातीत आध्यात्मिक ज्ञान और योग परंपरा का प्रतीक हैं। गुरु श्री गोरखनाथ विश्व के आध्यात्मिक इतिहास में सबसे लंबे निरंतर गुरु-शिष्य वंशों में से एक में एक चमकदार कड़ी भी हैं।",
      english:
        "Mahayogi Gorakhnath embodies the timeless spiritual wisdom and yoga tradition of India. Guru Shri Gorakhnath is also a luminous link in one of the longest continuous Guru-Disciple lineages in the world’s spiritual history.",
    },
    {
      hindi:
        "उनकी छवि ज्ञान और ब्रह्मांडीय ऊर्जा के प्रकाश को विकीर्ण करती है, जो भारतीय ज्ञान परंपरा के शाश्वत ज्ञान का प्रतिनिधित्व करती है। लोगो में पवित्र श्लोक 'स्वस्ति पन्थामनुचरेम्' शामिल है, जो महायोगी गोरखनाथ विश्वविद्यालय की दृष्टि, मिशन और पथ को व्यक्त करता है।",
      english:
        'His image radiates the light of knowledge and cosmic energy, representing the eternal wisdom of the Bharatiya Gyan Parampara. The logo includes the sacred verse "स्वस्ति पन्थामनुचरेम्", expressing the vision, mission, and path of Mahayogi Gorakhnath University.',
    },
    {
      hindi: "यह श्लोक ऋग्वेद के पांचवें मंडल से है:",
      english: "This verse is from the fifth Mandala of the Rigveda:",
    },
    {
      hindi:
        "स्वस्ति पन्थामनुचरेम् सूर्याचन्द्रमसाविव।\nपुनर्ददताघ्नता जानता संगमे यजि॥",
      english:
        "“Swasti panthamanucharem suryachandramasaviva.\nPunardadataghnata janata sangame yaji.”",
      isQuote: true,
    },
    {
      hindi:
        "अनुवाद: जैसे सूर्य और चंद्रमा अविचल सही मार्ग का अनुसरण करते हैं, वैसे ही हमें भी धर्मी मार्ग पर चलना चाहिए और गुणी, बुद्धिमान, शांतिपूर्ण और परोपकारी व्यक्तियों की संगति करनी चाहिए।",
      english:
        "Translation: Just as the sun and moon follow the unwavering right path, we too should walk the righteous path and seek the company of virtuous, wise, peaceful, and beneficent individuals.",
    },
    {
      hindi:
        "महायोगी गोरखनाथ विश्वविद्यालय का स्वीकृत प्रतीक चिन्ह संस्थान की आध्यात्मिक जड़ों, शैक्षिक दर्शन और इसके विस्तार, विकास और उत्थान की दृष्टि को दर्शाता है।",
      english:
        "The approved logo of Mahayogi Gorakhnath University reflects the institution’s spiritual roots, educational philosophy, and its vision for expansion, evolution, and upliftment.",
    },
  ],
};

export const visionMissionData: VisionMissionContent = {
  pageTitle: {
    hindi: "दृष्टिकोण और मिशन",
    english: "Vision & Mission",
  },
  logoImage: "/largelogo.jpg",
  sections: [
    {
      heading: {
        hindi: "उद्देश्य",
        english: "The Purpose",
      },
      paragraphs: [
        {
          hindi:
            "आधुनिक प्रारूप में भारतीय ज्ञान परंपराओं को पुनर्जीवित और पुनर्स्थापित करना और अत्याधुनिक सुविधाओं से सुसज्जित एक बहु-विषयक उत्कृष्टता केंद्र विकसित करना, जहाँ हमारे युवा चिकित्सा और भौतिक विज्ञान, प्रौद्योगिकी और मानविकी की विभिन्न धाराओं का संतुलित व्यापक समग्र ज्ञान प्राप्त कर सकें।",
          english:
            "Reviving and re-establishing the Indian knowledge traditions in modern format and to develop a multi-disciplinary centre of excellence equipped with ultra-modern state of the art facilities, where our youth can have access to a balanced comprehensive holistic knowledge of various streams of Medical & Physical Sciences, Technology and Humanities.",
        },
        {
          hindi:
            "यहाँ एक ही परिसर के भीतर, मानव स्वास्थ्य देखभाल के लिए एक अद्वितीय, अपनी तरह का, समग्र मानक दृष्टिकोण स्थापित और विकसित किया जा रहा है - यानी, लगभग सभी स्वास्थ्य देखभाल की पैथियों और विषयों जैसे योग, आयुर्वेद, एलोपैथी, प्राकृतिक चिकित्सा, होम्योपैथी और यूनानी आदि की अत्याधुनिक चिकित्सा प्रौद्योगिकियों, सुविधाओं और सेवाओं (निदान, उपचार और कल्याण) से सुसज्जित एक उन्नत चिकित्सा केंद्र उपलब्ध कराना।",
          english:
            "Here within one campus, a unique one of its kind, holistic standard approach to the human health care is being established and developed — i.e., making available an advanced medical centre equipped with cutting-edge medical technologies, facilities and services (diagnosis, treatment & wellness) of almost all the pathies and disciplines of the health care viz. Yoga, Ayurveda, Allopathy, Naturopathy, Homeopathy, and Unani etc.",
        },
      ],
    },
    {
      heading: {
        hindi: "दृष्टिकोण",
        english: "The Vision",
      },
      paragraphs: [
        {
          hindi:
            "भारतीय संस्कृति के लोकाचार और मूल्यों में पूरी तरह से रंगे हुए भारतीयकृत नागरिकों की भावी पीढ़ी को प्रशिक्षित, शिक्षित और तैयार करना, जो 'राष्ट्र प्रथम' के आदर्श वाक्य के साथ राष्ट्र के प्रति देशभक्त, समर्पित और समर्पित हों।",
          english:
            "To train, educate and groom future generation of Indianised citizens fully imbued in the ethos and values of Indian culture who are patriotic, devoted and dedicated to the cause of nation, with the motto ‘Nation First’.",
        },
        {
          hindi:
            "इस आदर्श वाक्य को ध्यान में रखते हुए, उन्हें जीवन के भारतीय संस्कृति-केंद्रित दर्शन से परिचित कराना और उन्हें लोगों की सेवा के लिए समर्पण और भक्ति की मानसिकता के साथ शाश्वत भारतीय ज्ञान परंपरा से अवगत कराना। उन्हें एक ऐसी कार्य संस्कृति में शिक्षित और प्रशिक्षित किया जाता है जो उन्हें सामाजिक और राष्ट्रीय जीवन के विभिन्न क्षेत्रों में लोक सेवा की ओर ले जाती है।",
          english:
            "Keeping this motto in perspective, introducing them to the Indian culture-centric philosophy of life and making them aware of eternal Indian knowledge tradition with a mindset of dedication and devotion to serve the people. They are educated and trained in a work culture which leads them to public service in various fields of social and national life.",
        },
        {
          hindi:
            "स्वास्थ्य और अन्य लोक सेवा-उन्मुख परियोजनाओं के माध्यम से हमारा उद्देश्य लोक कल्याण के क्षेत्र में अपना योगदान सुनिश्चित करना है, प्रकृति और हमारे प्राकृतिक संसाधनों का पोषण, पोषण और संरक्षण करके लोगों और मानवता की सेवा करना है। हम दूसरों को - विशेष रूप से शिक्षा और स्वास्थ्य क्षेत्रों में जुड़े और सक्रिय लोगों को - सामाजिक और राष्ट्रीय सेवा के यज्ञ में भाग लेने और योगदान करने के लिए प्रेरित और प्रेरित करते हैं।",
          english:
            "Our aim through health and other public service-oriented projects is to ascertain our contribution in the field of public welfare, serving the people and humanity by nursing, nurturing, and conserving nature and our natural resources. We inspire and motivate others — especially those associated and active in the education and health sectors — to participate and contribute in the Yajna of social and national service.",
        },
        {
          hindi:
            "इसके अलावा, हमारे लिए, आधुनिक शिक्षा प्रणाली भावी पीढ़ियों को भारत-केंद्रित शिक्षा प्रदान करने के हमारे लक्ष्य को पूरा करने के लिए एक उपयोगी और सहायक उपकरण है। चिकित्सा संस्थानों सहित हमारे सभी संस्थान, वास्तव में लोगों की अनगिनत तरीकों से सेवा करने के हमारे सु-प्रतिष्ठित मिशन को प्राप्त करने के लिए वाहन हैं।",
          english:
            "Furthermore, for us, the modern education system is a useful and helpful tool to accomplish our goal of imparting Bharat-centric education to future generations. All our institutions, including medical institutions, are in fact vehicles to achieve our well-enshrined mission of serving the people in myriad ways.",
        },
      ],
    },
    {
      heading: {
        hindi: "लक्ष्य",
        english: "The Aim",
      },
      paragraphs: [
        {
          hindi:
            "हमारा उद्देश्य कल के सक्षम, जिम्मेदार और कुशल नागरिकों को विकसित करने में मदद करना है जो भारतीय मूल्य प्रणालियों में रंगे हुए हों - जो उनमें चरित्र, नैतिकता, दृढ़ विश्वास और उच्चतम क्रम की अखंडता पैदा करते हैं - किसी भी भूमिका में राष्ट्र की सेवा के लिए हमेशा तैयार रहते हैं जिसे वे चुनते हैं या उन्हें सौंपा जाता है।",
          english:
            "Our aim is to help develop competent, responsible, and efficient citizens of tomorrow imbued in Indian value systems — which inculcate in them character, morality, courage of conviction, and the highest order of integrity — ever ready to serve the nation in any role they choose or are assigned.",
        },
        {
          hindi:
            "इसके अलावा, भौतिक और आध्यात्मिक जीवन के एक समन्वित दृष्टिकोण के साथ कुशल, सशक्त और सक्षम नागरिकों को तैयार करना, जो अर्जित ज्ञान का उपयोग खुद को सशक्त और विकसित करने और लोगों की सेवा करने के लिए करते हैं।",
          english:
            "Moreover, to prepare skilled, forceful, and capable citizens with a syncretic view of material and spiritual life, who use acquired knowledge to empower and evolve themselves and serve the people.",
        },
        {
          hindi: "ऐसे नागरिकों को तैयार करना जिनका जीवन मंत्र है:",
          english: "Preparing such citizens whose life mantra is:",
        },
      ],
      quote: {
        sanskrit:
          "न त्वहम् कामये राज्यम् न स्वर्गम् न पुनर्भवम्।\nकामये दुःखतप्तानाम् प्राणिनामार्तिनाशनम्।।",
        translation: {
          hindi:
            "मैं राज्य की कामना नहीं करता, मैं स्वर्ग या मोक्ष नहीं चाहता। मेरी इच्छा है कि मैं लोगों के दुखों को दूर करने में मदद करूं।",
          english:
            "I do not wish for a kingdom, I do not want heaven or salvation. It is my wish to help in alleviating the suffering of people.",
        },
      },
    },
  ],
};

export const inspirationAbodeData: InspirationAbodeContent = {
  pageTitle: {
    hindi: "हमारी प्रेरणा का धाम: श्री गोरखनाथ मंदिर",
    english: "An Abode of our Inspiration: Shri Gorakhnath Temple",
  },
  paragraphs: [
    {
      hindi:
        "श्री गोरक्षपीठ एक सिद्धपीठ है। यह एक योगपीठ है। यह भगवान शिव के अवतार महायोगी गुरु श्री गोरखनाथ की तपस्थली है। यह पीठ साधना और सिद्धि को निरंतरता प्रदान करती है और नाथ पंथ की सर्वोच्च पीठ है। महायोगी गुरु श्री गोरखनाथ के प्रतिनिधि के रूप में, गोरक्षपीठाधीश्वर नाथ पंथ की परंपराओं को निरंतरता प्रदान करते हैं, इसलिए इस पीठ का नाथ पंथ में एक विशिष्ट और महत्वपूर्ण स्थान है। यद्यपि देश के सामाजिक-धार्मिक-राजनीतिक इतिहास के वृत्तांतों में इस पीठ का नाम धार्मिक-आध्यात्मिक-सामाजिक पुनर्जागरण में इसके योगदान के लिए उल्लेखित है, लेकिन भारतीय स्वतंत्रता आंदोलन में नाथपंथी योगियों और योगेश्वरों द्वारा निभाई गई महत्वपूर्ण भूमिका और संन्यासी आंदोलन में उनकी भागीदारी का उल्लेख किए बिना, भारतीय स्वतंत्रता आंदोलन का इतिहास पूरा नहीं होगा। आज भी गोरक्षपीठ सनातन संस्कृति के उन धार्मिक-आध्यात्मिक केंद्रों और गुरुकुलों का प्रतिनिधित्व करता है जो भारत के सामाजिक-धार्मिक-आध्यात्मिक आंदोलनों के केंद्र और संरक्षक हुआ करते थे। यह पीठ प्राचीन भारतीय मठों का आधुनिक संस्करण है। आज गोरक्षपीठ सबसे महत्वपूर्ण धार्मिक और योग केंद्रों में से एक होने के साथ-साथ सामाजिक जन जागरूकता का एक प्रमुख केंद्र भी है। यह पीठ गो-सेवा, जन-सेवा, शिक्षा और स्वास्थ्य सेवाओं का केंद्र है।",
      english:
        "Shri Gorakshpeeth is a Siddhpeeth. This is a Yogapeeth. This is Tapsthali of Mahayogi Guru Shri Gorakhnath the incarnation of Lord Shiva. This Peeth provides continuity to Sadhana and Siddhi and is the highest Peeth of Nath Panth. As the representative of Mahayogi Guru Shri Gorakhnath, Gorakshpeethadheeswars provide continuity to the Nath Panth traditions, therefore this Peeth has a distinguished and important position in the Nath Panth. Though in the annals of social-religious-political history of the country the name of this Peeth is mentioned for its contribution towards religious-spiritual-social renaissance but without mentioning the vital role played by Nathpanthi Yogis and Yogeshwars in the Indian freedom movement and their participation in the Sanyasi movement, the history of the Indian freedom movement won't be complete. Even today Gorakshpeeth represents those religious-spiritual centers and Gurukulas of Sanatan Sanskriti which used to be Centers & Mentors of Bharat's socio-religious-spiritual movements. This Peeth is modem version of ancient Bharatiya Mathas, Today Gorakshpeeth alongwith being one of the most important religious & Yoga centres is also a prime centre of social mass awareness. This Peeth is center of Go-seva, Jan-seva, Education & Health services.",
    },
    {
      hindi:
        "श्री गोरखनाथ मंदिर नाथपंथ का सर्वोच्च धाम है। सनातन धर्म में समय-समय पर दर्शन, आध्यात्मिकता और साधना आदि के विभिन्न क्षेत्रों में विकसित और विकसित हुए विभिन्न संप्रदायों/पंथों में नाथपंथ का प्रमुख स्थान है। भारत में शायद ही कोई राज्य, क्षेत्र या जिला ऐसा हो, जो नाथ सिद्धों और योगियों के पवित्र चरणों से न छुआ हो। मंदिरों, मठों, आश्रमों, दलीचों, खोहों, गुफाओं और टीलों जैसे नाथपंथ के तीर्थस्थलों की उपस्थिति जीवंत प्रमाण है जो स्पष्ट रूप से साबित करती है कि नाथ पंथ आर्यवर्त में दूर-दूर तक कुटियों से लेकर महलों तक फैला एक गौरवशाली, क्रांतिकारी पंथ रहा है। नाथपंथ जाति, पंथ, नस्ल, क्षेत्र और धर्म के बावजूद पूरी मानवता के आध्यात्मिक और यौगिक ज्ञानोदय में लगा हुआ है। नाथपंथ भारत की वर्तमान राजनीतिक सीमा के पार और उससे आगे, आज के देशों जैसे तिब्बत, मंगोलिया, म्यांमार, नेपाल, अफगानिस्तान, पाकिस्तान, बांग्लादेश, श्रीलंका, भूटान और एशिया के कई अन्य देशों में योग और भारतीय संस्कृति के ध्वजवाहक के रूप में फैला हुआ था और अपने तरीके से लोक कल्याण में लगा हुआ था।",
      english:
        "Shri Gorakhnath temple is the highest abode of Nathpanth. Nathpanth have prominent place among various Sects/Panths which developed and evolved from time to time in Sanatan Dharma in various fields of Philosophy, Spirituality and Sadhna etc. There is hardly any state, region or district in the Bharat which is not treaded and touched by the pious feet of Nath Siddhas & Yogis. The presence of Nathpanth shrines like Temples, Mathas, Ashrams, Daleechas, Khohas, Guphas and Teelas are live evidences which distinctly prove that Nath Panth has been a glorious, revolutionary Panth spread from Kutees to Palaces far and wide across the Aryavarta. Nathpanth has been engaged in the spiritual and Yogic enlightenment of the entire humanity irrespective of caste, creed, race, region and religion. Nathpanth had been spread across and beyond the present political boundary of Bharat, in today's countries like Tibet, Mongolia, Myanmar, Nepal, Afghanistan, Pakistan, Bangladesh, Sri Lanka, Bhutan and many other countries of Asia as a flag bearer of Yoga and Indian culture and have been engaged in public welfare in its own way.",
    },
    {
      hindi:
        "स्वतंत्र भारत के बाद श्री गोरखनाथ मंदिर/पीठ हिंदू धर्म और दर्शन के सबसे प्रमुख और विशिष्ट केंद्रों में से एक बन गया। 'महाराणा प्रताप शिक्षा परिषद्' के संस्थापक युगपुरुष गोरक्षपीठाधीश्वर ब्रह्मलीन महंत दिग्विजयनाथ जी महाराज, भारतीय स्वतंत्रता आंदोलन में चौरी चौरा के अमर सिपाही विद्रोह के साक्षी रहे हैं, जो ब्रिटिश सरकार के खिलाफ लोगों के विद्रोह का प्रतीक है। इसके बाद, महंत दिग्विजयनाथ जी महाराज की पहचान गोरखपुर से हो गई और वे इसके पर्याय बन गए। 'राष्ट्रवाद और विकास' और 'अध्यात्मवाद और भौतिकवाद' के एकीकृत, समग्र दृष्टिकोण के साथ उन्होंने देश के मठों और मंदिरों को आध्यात्मिक जीवन का मार्ग दिखाया। साथ ही उन्होंने पीड़ित आम लोगों का मार्गदर्शन किया और उन्हें अपने सांसारिक कर्तव्यों के प्रति समर्पित और प्रतिबद्ध होने के लिए प्रेरित किया। युगपुरुष महंत दिग्विजयनाथ जी महाराज ने एक ओर गोरखनाथ मंदिर को आध्यात्मिकता आधारित सामाजिक क्रांति और पिछड़ों और दलितों के उत्थान का केंद्र और उत्प्रेरक बनाया और दूसरी ओर 1932 ई. में उन्होंने महाराणा प्रताप शिक्षा परिषद् की स्थापना करके पूर्वी उत्तर प्रदेश विशेषकर गोरखपुर में एक प्रकार की शैक्षिक क्रांति की शुरुआत की। युगपुरुष गोरक्षपीठाधीश्वर ब्रह्मलीन महंत दिग्विजयनाथ जी महाराज ने 'अखिल भारतीय अवधूत भेष बारह पंथ योगी महासभा' का आयोजन करके देश भर में बिखरे हुए नाथपंथ योगियों की सामाजिक-राष्ट्रीय भूमिका को एकीकृत, संगठित और परिभाषित किया। वास्तव में, यह उनका स्मारकीय ऐतिहासिक कार्य था। उसी समय, हिंदू महासभा के छत्र के नीचे, उन्होंने अंग्रेजीकृत/पश्चिमीकृत भारतीय राजनीति में भारतीय मूल्यों और संस्कृति को लाने की कोशिश की। नतीजतन, विभिन्न आध्यात्मिक और दार्शनिक विचारधाराओं पर आधारित तत्कालीन प्रचलित कई संप्रदायों और विचारों की बाधाओं को तोड़कर गोरखनाथ मंदिर एक एकीकृत और समग्र हिंदू राष्ट्रवाद का केंद्र बन गया और अभी भी हिंदू समाज के एकीकरण की अपनी भूमिका को अतिरिक्त प्रेरणा, उत्साह और महिमा के साथ जारी रखे हुए है। गोरक्षपीठाधीश्वर ब्रह्मलीन महंत अवेद्यनाथ जी महाराज ने इस स्मारकीय कार्य को सामाजिक एकीकरण के लिए साधुओं, संतों, महात्माओं और पीठाधीश्वरों को, जो ज्यादातर और विशेष रूप से अपनी आत्म-मुक्ति के लिए साधना में लगे हुए थे, राष्ट्र के सामाजिक-राजनीतिक क्षेत्र में सक्रिय, अग्रणी और मार्गदर्शक भूमिका निभाने के लिए उकसाकर और नेतृत्व करके जारी रखा। नतीजतन, बड़ी संख्या में साधु-संत थे जो विभिन्न राजनीतिक और सामाजिक संगठनों में शामिल हुए और अब अपनी आध्यात्मिक साधना के अलावा विभिन्न भूमिकाओं में समाज और राष्ट्र के लिए सक्रिय रूप से, लगन से, अथक रूप से काम कर रहे हैं और योगदान दे रहे हैं। हम सभी उनके प्रचलित अप्रासंगिक, अमानवीय परंपराओं, अंधविश्वासों, जातिवाद और अस्पृश्यता आदि के खिलाफ उनके निरंतर, अथक संघर्ष के साक्षी हैं, जो हमारे समाज को असंख्य दोष रेखाओं पर विभाजित करते हैं। उन्होंने देश के लगभग सभी मठ-मंदिरों को 'सामाजिक समरसता' के आंदोलन से जोड़ा जो राष्ट्रीय अखंडता और एकता के प्रति उनके सबसे बड़े योगदानों में से एक है। सामाजिक एकीकरण और एकता का उनका यह एक महत्वपूर्ण योगदान हमारे देश के इतिहास के वृत्तांतों में सबसे उज्ज्वल सुनहरे अध्यायों में से एक है। श्री रामजन्म भूमि आंदोलन को प्रदान किया गया उनका सक्षम और शानदार फलदायी नेतृत्व राष्ट्रीय अखंडता, भारत के सांस्कृतिक पुनर्जागरण और हमारी खोई हुई भूली हुई अस्मिता और महिमा की पुनः स्थापना की दिशा में शानदार प्रयासों में से एक है। श्री रामजन्म भूमि आंदोलन राष्ट्रीय एकता, अखंडता, लोगों की भागीदारी और सांस्कृतिक अभियान में एक निर्णायक क्षण है। गोरखनाथ मंदिर इस ऐतिहासिक जन आंदोलन में सबसे आगे और केंद्र में रहा है।",
      english:
        "In post independent Bharat Shri Gorakhnath Temple/Peeth become one of the most prominent and distinguished centres of Hindu religion and philosophy. Founder of 'Maharana Pratap Shiksha Parishad' Yugpurush Gorakshpeethadheeswar Brahmleen Mahant Digvijainath ji Maharaj, has been witness to the immortalised Sepoy Mutiny of Chauri Chaura in the Indian freedom movement, a symbol of peoples' uprising against British government. Subsequently, Mahant Digvijainath ji Maharaj got identified and become synonymous with the Gorakhpur. With the integrated, composite view of 'Nationalism & Development and 'Spiritualism & Materialism' he showed the path of spiritual life to the Mathas & Mandirs of the country. Simultaneously he guided the suffering common people and inspired them to be dedicated and committed towards their worldly duties. Yugpurush Mahant Digvijainath ji Maharaj on the one hand made Gorakhnath temple a hub and catalyst of spiritualism based social revolution and upliftment of backwards and downtrodden and on the other hand in 1932 AD he initiated a sort of educational revolution in eastern Uttar Pradesh especially in Gorakhpur by founding Maharana Pratap Shiksha Parishad. Yugpurush Gorakshpeethadheeswar Brahmleen Mahant Digvijainath ji Maharaj by organising 'Akhil Bharatiya Avdhoot Bhesh Barah Panth Yogi Mahasabha' integrated, organised and defined the Socio-National role of Nathpanth Yogis scattered all over the country. In fact, this was his monumental historical work. At the same time, under the umbrella of Hindu Mahasabha, he tried to bring in Indian values and culture in the anglicised/westemnised Indian politics. Consequently, by breaking barriers of the then prevailing numerous sects and thoughts based on different spiritual and philosophical ideologies the Gorakhnath Temple become epicentre of an integrated and composite Hindu nationalism and is still continuing its role of integration of Hindu society with added impetus, fervour and glory Gorakshpeethadheeswar Brahmleen Mahant Avedyanath ji Maharaj continued this monumental work of social integration by instigating and leading the Sadhus, Saints, Mahatmas and Peethadheeswars who had been mostly and exclusively engaged in the Sadhana for their own self-salvation to join in and play active, leading and guiding role in the Socio-political field of the nation for social integration and wellbeing of the nation. Consequently, there were large number of Sadhu-Saints who joined the different political and social organisations and now are engaged and working actively, passionately, tirelessly. and contributing to the society and nation in various roles in addition to their own spiritual Sadhana. We all are witness to his incessant, ceaseless, fight against the prevalent irrelevant, inhuman traditions, superstitions, casteism and untouchability etc. which divides our society on umpteen fault lines. He associated almost all the Math-Mandirs of the country with the movement of Samajik Samrasta' which is his one of the greatest contribution towards the national infegrity and unity. His this one significant contribution of social integration and unity is one of the brightest golden chapter in the annals of history of our country. His able and brilliant fruitful leadership provided to Shri Ramjanm Bhoomi Movement is one of the brilliant efforts towards the national integrity, cultural renaissance of Bharat and re establishment of our lost forgotten Asmita and glory. Shri Ramjanm Bhoomi movement is a defining moment in the national unity, integrity, people's participation and cultural campaign. The Gorakhnath Temple has been at the forefront and centre of this historical mass movement.",
    },
  ],
};

export const fivePledgesData: FivePledgesContent = {
  pageTitle: {
    hindi: "पांच प्रतिज्ञाएं",
    english: "The Five Pledges",
  },
  pledges: [
    {
      hindi: "प्राचीन भारतीय ज्ञान परंपराओं का आधुनिक दृष्टिकोण",
      english: "The modern perspective of Ancient Indian knowledge traditions",
    },
    {
      hindi: "आज की आवश्यकताओं के अनुसार भारत का भविष्य का मार्ग",
      english: "Future course of Bharat as per today's requirements",
    },
    {
      hindi: "राष्ट्र और लोक कल्याण की सेवा में समर्पण और भक्ति",
      english:
        "Dedication and devotion in the service of the nation and public welfare",
    },
    {
      hindi:
        "मिशन में दृढ़ विश्वास और कर्मयोग में स्पष्ट, बिना शर्त, अटूट आस्था",
      english:
        "Strong belief in the mission & unambiguous, unconditional, unwavering faith in Karmayog",
    },
    {
      hindi:
        "उपलब्धि में निरंतरता और प्रत्येक कल को आज से बेहतर बनाने के लिए निरंतर प्रयास।",
      english:
        "Continuity in accomplishment and sustained efforts to make each tomorrow better than today.",
    },
  ],
};

export const milestonesData: MilestonesContent = {
  pageTitle: {
    hindi: "विश्वविद्यालय की यात्रा के मील के पत्थर",
    english: "Milestones on the Course of Journey of the University",
  },
  milestones: [
    {
      hindi: "राष्ट्र की आराधना",
      english: "Adoration of the nation",
    },
    {
      hindi: "लोक कल्याण",
      english: "Public Welfare",
    },
    {
      hindi: "योग-आध्यात्मिक साधना",
      english: "Yoga-Spiritual Practices",
    },
    {
      hindi: "शिक्षा",
      english: "Education",
    },
    {
      hindi: "स्वास्थ्य",
      english: "Health",
    },
  ],
};

export const specialtyData: SpecialtyContent = {
  pageTitle: {
    hindi: "महायोगी गोरखनाथ विश्वविद्यालय गोरखपुर की विशेषता",
    english: "Specialty of The Mahayogi Gorakhnath University Gorakhpur",
  },
  specialties: [
    {
      hindi:
        "आज के विश्व के परिप्रेक्ष्य में भारतीय ज्ञान परंपराओं का प्रतिनिधि।",
      english:
        "Representative of the Indian knowledge traditions vis a vis today's world.",
    },
    {
      hindi:
        "यह एक स्वस्थ वैश्विक प्रतिस्पर्धा में अपनी मौलिकता, विशिष्ट और अद्वितीय चरित्र के लिए जाना जाएगा।",
      english:
        "It would be known for its originality, distinguished and unique character in a healthy global competition.",
    },
    {
      hindi:
        "मानविकी, भौतिक विज्ञान और प्रौद्योगिकी के विषयों में अद्यतन ज्ञान प्रदान करने वाला एक प्रमुख उत्कृष्टता केंद्र।",
      english:
        "A prominent centre of excellence imparting up-to-date knowledge in the disciplines of humanities, physical sciences and technology.",
    },
    {
      hindi:
        "निदान और उपचार की सभी चिकित्सा प्रणालियों - प्राच्य और पाश्चात्य - की विशेषज्ञताओं को एकीकृत और शामिल करके एक अद्वितीय समग्र और व्यापक चिकित्सा मॉडल का विकास।",
      english:
        "Development of a unique composite and comprehensive medical model by integrating and incorporating the specialities of all the medical systems oriental as well as occidental of diagnosis and treatment.",
    },
    {
      hindi:
        "एक ही परिसर में अधिकतम संख्या में धाराओं और विषयों का ज्ञान उपलब्ध कराने की सफल योजना और निष्पादन। और इस प्रणाली का उपयोग हमारे छात्रों को एक रचनात्मक, सफल, खुश और संतुष्ट इंसान के रूप में विकसित होने में मदद करने के लिए करना।",
      english:
        "Successful planning and execution of making available knowledge of maximum number of streams and disciplines within one campus. And making use of this system in helping our students to evolve into a constructive, successful, happy and contented human being.",
    },
  ],
};

export const principles: Principles = {
  pageTitle: {
    hindi: "कार्यप्रणाली की मूल अवधारणाएँ",
    english: "Basic Concepts of the Functioning",
  },
  concepts: [
    {
      hindi: "आध्यात्मिकता",
      english: "Spirituality",
    },
    {
      hindi: "जिम्मेदारी का भाव",
      english: "Sense of Responsibility",
    },
    {
      hindi: "सामूहिकता",
      english: "Collectivity",
    },
    {
      hindi: "सुनियोजित दिनचर्या",
      english: "Well Planned Routine",
    },
    {
      hindi: "अनामता",
      english: "Anonymity",
    },
    {
      hindi: "कठिन परिश्रम",
      english: "Hard Work",
    },
    {
      hindi: "आत्मानुशासन",
      english: "Self-discipline",
    },
  ],
};

export const institutionsData: InstitutionsContent = {
  pageTitle: {
    hindi:
      "श्री गोरक्षपीठ, गोरखनाथ मंदिर के तत्वावधान में 'महाराणा प्रताप शिक्षा परिषद्' के संस्थानों की सूची",
    english:
      "List of Institutions of 'Maharana Pratap Shiksha Parishad' under the auspices of Shri Gorakshpeeth, Goraknath Temple",
  },
  institutions: [
    {
      name: {
        english:
          "1. Mahayogi Gorakhnath University, Balapar Road, Sonbarsa, Gorakhpur.",
        hindi:
          "१. महायोगी गोरखनाथ विश्वविद्यालय, बालापार रोड, सोनबरसा, गोरखपुर।",
      },
      link: "https://mgug.ac.in",
    },
    {
      name: {
        english: "2. Digvijaianath Post Graduate College, Gorakhpur.",
        hindi: "२. दिग्विजयनाथ स्नातकोत्तर महाविद्यालय, गोरखपुर।",
      },
      link: "http://dnpgcollege.edu.in/",
    },
    {
      name: {
        english:
          "3. Maharana Pratap Post Graduate College, Jungle Dhusad, Gorakhpur.",
        hindi:
          "३. महाराणा प्रताप स्नातकोत्तर महाविद्यालय, जंगल धूसड़, गोरखपुर।",
      },
      link: "http://www.mpm.edu.in/",
    },
    {
      name: {
        english:
          "4. Maharana Pratap Mahila Post Graduate College, Ramduttpur, Gorakhpur.",
        hindi:
          "४. महाराणा प्रताप महिला स्नातकोत्तर महाविद्यालय, रामदत्तपुर, गोरखपुर।",
      },
      link: "http://mpmpgc.in/",
    },
    {
      name: {
        english:
          "5. Shri Gorakshnath Sanskrit Vidyapeeth, Gorakhnath Mandir, Gorakhpur.",
        hindi: "५. श्री गोरक्षनाथ संस्कृत विद्यापीठ, गोरखनाथ मंदिर, गोरखपुर।",
      },
      link: "http://sgsvidyapeeth.org/",
    },
    {
      name: {
        english:
          "6. Digvijaianath L.T. Prashikshan (B.Ed. & M.Ed.) Mahavidyalaya, Gorakhpur.",
        hindi:
          "६. दिग्विजयनाथ एल.टी. प्रशिक्षण (बी.एड. और एम.एड.) महाविद्यालय, गोरखपुर।",
      },
      link: "http://dnlttcollege.edu.in/",
    },
    {
      name: {
        english:
          "7. Gorakshpeethadheeshwar Mahant Avedyanath Mahavidyalaya, Chowk Bazaar, Maharajganj.",
        hindi:
          "७. गोरक्षपीठाधीश्वर महंत अवेद्यनाथ महाविद्यालय, चौक बाजार, महराजगंज।",
      },
      link: "http://gmamahavidyalaya.org/",
    },
    {
      name: {
        english: "8. Maharana Pratap Inter College, Gorakhpur.",
        hindi: "८. महाराणा प्रताप इंटर कॉलेज, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "9. Maharana Pratap Krikshak Inter College, Jungle Dhusad, Gorakhpur.",
        hindi: "९. महाराणा प्रताप कृषक इंटर कॉलेज, जंगल धूसड़, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "10. Maharana Pratap Balika Inter College, Civil Lines, Gorakhpur.",
        hindi: "१०. महाराणा प्रताप बालिका इंटर कॉलेज, सिविल लाइंस, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "11. Shri Gorakshnath Sanskrit Higher Secondary School, Gorakhnath Mandir, Gorakhpur",
        hindi:
          "११. श्री गोरक्षनाथ संस्कृत उच्चतर माध्यमिक विद्यालय, गोरखनाथ मंदिर, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english: "12. Maharana Pratap Polytechnic, Gorakhpur.",
        hindi: "१२. महाराणा प्रताप पॉलिटेक्निक, गोरखपुर।",
      },
      link: "https://mppolytechnic.ac.in/",
    },
    {
      name: {
        english:
          "13. Maharana Pratap Senior Secondary School, Mangla Devi Mandir, Betiahata. Gorakhpur.",
        hindi:
          "१३. महाराणा प्रताप सीनियर सेकेंडरी स्कूल, मंगला देवी मंदिर, बेतियाहाता, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "14. Maharana Pratap Kanya Inter College, Ramduttpur, Gorakhpur.",
        hindi: "१४. महाराणा प्रताप कन्या इंटर कॉलेज, रामदत्तपुर, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english: "15. Digvijaianath Inter College, Chowk Bazaar, Maharajganj",
        hindi: "१५. दिग्विजयनाथ इंटर कॉलेज, चौक बाजार, महराजगंज।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "16. Digvijaianath Inter College, Chowk Mafi, Peppeganj Gorakhpur.",
        hindi: "१६. दिग्विजयनाथ इंटर कॉलेज, चौक माफी, पेप्पेगंज, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "17. Guru Gorakhnath Vidyapeeth, Bharohia, Peppeganj, Gorakhpur.",
        hindi: "१७. गुरु गोरखनाथ विद्यापीठ, भर्रोहिया, पेप्पेगंज, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "18. Adi Shakti Maa Pateshwari Public School, Bhawaniapur, Tulasipur, Balrampur.",
        hindi:
          "१८. आदि शक्ति माँ पाटेश्वरी पब्लिक स्कूल, भवानीपुर, तुलसीपुर, बलरामपुर।",
      },
      link: "http://asmpateshwarips.in/",
    },
    {
      name: {
        english:
          "19. Adi Shakti Maa Pateshwari Vidyapeeth, Nandmahari, Tulasipur, Balrampur",
        hindi:
          "१९. आदि शक्ति माँ पाटेश्वरी विद्यापीठ, नंदमहरी, तुलसीपुर, बलरामपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "20. Guru Gorakshnath Sanskrit Higher Secondary School, Maidagin, Varanasi.",
        hindi:
          "२०. गुरु गोरक्षनाथ संस्कृत उच्चतर माध्यमिक विद्यालय, मैदागिन, वाराणसी।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "21. Guru Shri Gorakshanath School of Nursing, Gorakhnath, Gorakhpur.",
        hindi: "२१. गुरु श्री गोरक्षनाथ स्कूल ऑफ नर्सिंग, गोरखनाथ, गोरखपुर।",
      },
      link: "https://gsgsn.in",
    },
    {
      name: {
        english:
          "22. Maharana Pratap Children Academy, Civil Lines, Gorakhpur.",
        hindi: "२२. महाराणा प्रताप चिल्ड्रेन एकेडमी, सिविल लाइंस, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english: "23. Digvijainath Girls School, Chowk Bazar, Maharajganj.",
        hindi: "२३. दिग्विजयनाथ गर्ल्स स्कूल, चौक बाजार, महराजगंज।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "24. Digvijainath Shishu Shiksha Vihar, Chowk Bazar, Maharajganj.",
        hindi: "२४. दिग्विजयनाथ शिशु शिक्षा विहार, चौक बाजार, महराजगंज।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "25. Maharana Pratap Shishu Shiksha Bihar, Laldiggi, Gorakhpur.",
        hindi: "२५. महाराणा प्रताप शिशु शिक्षा बिहार, लालडिग्गी, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english: "26. Hindu Vidyapeeth, Jungle Tinconia No. 1, Gorakhpur.",
        hindi: "२६. हिंदू विद्यापीठ, जंगल तिनकोनिया नंबर १, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english: "27. Pratap Ashram, Golghar, Gorakhpur.",
        hindi: "२७. प्रताप आश्रम, गोलघर, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "28. Maharana Pratap Meerabai Women Hostel, Civil Lines, Gorakhpur.",
        hindi:
          "२८. महाराणा प्रताप मीराबाई महिला छात्रावास, सिविल लाइंस, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english: "29. Digvijainath Women Hostel, Civil Lines, Gorakhpur.",
        hindi: "२९. दिग्विजयनाथ महिला छात्रावास, सिविल लाइंस, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "30. Shri Gorakshanath Sanskrit Hostel, Shri Gorakhnath Mandir, Gorakhpur.",
        hindi:
          "३०. श्री गोरक्षनाथ संस्कृत छात्रावास, श्री गोरखनाथ मंदिर, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "31. Yogiraj Baba Gambhirnath Sewashram (Hostel), Jungle Dhusad, Gorakhpur.",
        hindi:
          "३१. योगीराज बाबा गंभीरनाथ सेवाश्रम (छात्रावास), जंगल धूसड़, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "32. Maharana Pratap Polytechnic Hostel, Gorakhnath, Gorakhpur.",
        hindi: "३२. महाराणा प्रताप पॉलिटेक्निक छात्रावास, गोरखनाथ, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "33. Adishakti Maa Pateshwari Mahila Hostel, Sonbarsa, Gorakhpur.",
        hindi: "३३. आदिशक्ति माँ पाटेश्वरी महिला छात्रावास, सोनबरसा, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "34. Adishakti Maa Pateshwari Vanvasi Tharu Hostel, Tulsipur, Balrampur.",
        hindi:
          "३४. आदिशक्ति माँ पाटेश्वरी वनवासी थारू छात्रावास, तुलसीपुर, बलरामपुर।",
      },
      link: "#",
    },
    {
      name: {
        english: "35. Guru Shree Gorakshanath Hospital, Gorakhnath, Gorakhpur.",
        hindi: "३५. गुरु श्री गोरक्षनाथ अस्पताल, गोरखनाथ, गोरखपुर।",
      },
      link: "http://www.gurugorakhnathchikitsalay.com/",
    },
    {
      name: {
        english:
          "36. Mahant Digvijainath Ayurveda Hospital, Gorakhnath, Gorakhpur.",
        hindi: "३६. महंत दिग्विजयनाथ आयुर्वेद अस्पताल, गोरखनाथ, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "37. Shri Maa Pateshwari Sevashram Hospital, Devipatan Mandir, Tulsipur, Balrampur.",
        hindi:
          "३७. श्री माँ पाटेश्वरी सेवाश्रम अस्पताल, देवीपाटन मंदिर, तुलसीपुर, बलरामपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "38. Brahmalin Gorakshpeethadheeshwar Mahant Avadyanath Free First Aid Centre, Civil Lines, Gorakhpur.",
        hindi:
          "३८. ब्रह्मलीन गोरक्षपीठाधीश्वर महंत अवेद्यनाथ निःशुल्क प्राथमिक चिकित्सा केंद्र, सिविल लाइंस, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "39. Brahmalin Gorakshpeethadheeshwar Mahant Avadyanath Free First Aid Centre, Jungle Dhusad, Gorakhpur.",
        hindi:
          "३९. ब्रह्मलीन गोरक्षपीठाधीश्वर महंत अवेद्यनाथ निःशुल्क प्राथमिक चिकित्सा केंद्र, जंगल धूसड़, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "40. Brahmalin Gorakshpeethadheeshwar Mahant Avadyanath Free First Aid Centre, Chowk Bazar, Maharajganj.",
        hindi:
          "४०. ब्रह्मलीन गोरक्षपीठाधीश्वर महंत अवेद्यनाथ निःशुल्क प्राथमिक चिकित्सा केंद्र, चौक बाजार, महराजगंज।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "41. Mahayogi Guru Shri Gorakshanath Yoga Sansthan, Gorakhnath, Gorakhpur",
        hindi: "४१. महायोगी गुरु श्री गोरक्षनाथ योग संस्थान, गोरखनाथ, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "42. Guru Shri Gorakshanath Modern Gymnasium, Gorakhnath, Gorakhpur.",
        hindi: "४२. गुरु श्री गोरक्षनाथ आधुनिक व्यायामशाला, गोरखनाथ, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "43. Mahayogi Guru Shri Gorakshanath Gau Sewa Kendra, Gorakhnath Mandir, Gorakhpur.",
        hindi:
          "४३. महायोगी गुरु श्री गोरक्षनाथ गौ सेवा केंद्र, गोरखनाथ मंदिर, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "44. Guru Shri Gorakshanath Seva Sansthan,Gorakhnath, Gorakhpur.",
        hindi: "४४. गुरु श्री गोरक्षनाथ सेवा संस्थान, गोरखनाथ, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english: "45. Maharana Pratap Tailoring College, Gorakhpur",
        hindi: "४५. महाराणा प्रताप सिलाई कॉलेज, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "46. Yogiraj Baba Gambhirnath Free Tailoring-Embroidery Training Centre, Jungle Dhusad, Gorakhpur.",
        hindi:
          "४६. योगीराज बाबा गंभीरनाथ निःशुल्क सिलाई-कढ़ाई प्रशिक्षण केंद्र, जंगल धूसड़, गोरखपुर।",
      },
      link: "#",
    },
    {
      name: {
        english:
          "47. Mahayogi Gorakhnath Krishi Vigyan Kendra, Chowk Mafi, Pipiganj, Gorakhpur.",
        hindi:
          "४७. महायोगी गोरखनाथ कृषि विज्ञान केंद्र, चौक माफी, पिपिगंज, गोरखपुर।",
      },
      link: "#",
    },
  ],
};

export const shikshaParishadData: ShikshaParishadCharterContent = {
  pageTitle: {
    hindi: "महाराणा प्रताप शिक्षा परिषद्",
    english: "The Maharana Pratap Shiksha Parishad",
  },
  subtitle: {
    hindi:
      "गोरक्षपीठाधीश्वर परमपूज्य महंत योगी आदित्यनाथ जी महाराज, माननीय मुख्यमंत्री, उत्तर प्रदेश द्वारा महाराणा प्रताप शिक्षा परिषद् के लिए इक्कीस सूत्रीय चार्टर",
    english:
      "Twenty One point charter for the Maharana Pratap Shiksha Parishad by Gorakshpeethadheeshwar Parampoojya Mahant Yogi Adityanath Ji Maharaj, Hon'ble Chief Minister, Uttar Pradesh.",
  },
  charterPoints: [
    {
      hindi:
        "श्री गोरक्षपीठ द्वारा स्थापित और शासित महाराणा प्रताप शिक्षा परिषद् के संस्थानों की एक अनूठी और विशिष्ट पहचान होनी चाहिए।",
      english:
        "1. The institutions established and governed by Maharana Pratap Shiksha Parishad founded by Shri Gorakshpeeth should have unique and distinguished identity.",
    },
    {
      hindi:
        "कुलपति/संस्थानों के प्रमुख/प्रधानाचार्य/निदेशक प्रभारी स्वयं को आदर्श के रूप में प्रस्तुत करें।",
      english:
        "2. Vice Chancellor/head of institutions/principals/directors in-charges should present themselves as role models.",
    },
    {
      hindi:
        "संस्थानों के सभी अधिकारियों/सदस्यों को अपने संस्थानों को अपनी प्राथमिकताओं में रखना चाहिए, जिस तरह से वे अपने बारे में सोचते हैं और आत्म-विकास और सुधार के लिए लगातार काम करते हैं, उसी तरह उन्हें अपने संस्थानों के प्रति भी वही दृष्टिकोण और अपनेपन की भावना रखनी चाहिए। संस्थान को उनके जीवन का एक अभिन्न अंग बनना चाहिए।",
      english:
        "3. All the officers/members of the institutions should keep their institutions in their priorities, just as the way they think about themselves and continuously work for self-evolution and improvement, likewise they ought to have the same attitude and a sense of belongingness towards their institutions. The institution should become an integral part of their lives.",
    },
    {
      hindi:
        "संस्थानों के प्रमुख की कार्यप्रणाली पारदर्शी, निष्पक्ष और पक्षपातरहित होनी चाहिए।",
      english:
        "4. The modus operandi of the head of institutions should be transparent, unbiased and impartial.",
    },
    {
      hindi:
        "अनुशासन किसी भी संस्थान की रीढ़ की हड्डी बल्कि आत्मा है और यह ऊपर से नीचे तक समान रूप से महत्वपूर्ण और लागू है। केवल एक आत्म-अनुशासित संस्थान का प्रमुख ही अपने साथ काम करने वाले डॉक्टरों, शिक्षकों, कर्मचारियों और प्रशासनिक कर्मचारियों को अनुशासन और नैतिकता के मूल्यों को पारित और आत्मसात करने में सक्षम होगा। इसलिए, संस्थानों की दिन-प्रतिदिन की गतिविधियों में आत्म-अनुशासन और नैतिकता की एक परिसर और कार्य संस्कृति को विकसित, आत्मसात और शामिल करने की आवश्यकता है।",
      english:
        "5. Discipline is the backbone rather soul of any institution and is equally important and applicable right from the top to bottom line. Only a self-disciplined head of institution shall be able to pass on and inculcate the values of discipline and morality to the doctors, teachers, employees and administrative staff working with them. Therefore, a campus & work culture of self-discipline and morality needs to be developed, inculcated and incorporated in the day to day activities of the institutions.",
    },
    {
      hindi:
        "समय की पाबंदी आत्म-अनुशासन के पालन में पहली और सबसे महत्वपूर्ण शर्त है। इसलिए, संस्थान में समय पर होना और काम के घंटों के दौरान उपलब्ध रहना अनुशासित तरीके से धार्मिक रूप से मनाया जाना चाहिए।",
      english:
        "6. Punctuality is the first and foremost condition in the observation of self-discipline. Hence, being on time at the institution and being available throughout working hours should be observed ritually and religiously in a disciplined manner.",
    },
    {
      hindi:
        "कामकाज के सभी क्षेत्रों में टीम भावना के साथ काम करने से आने वाली सामूहिकता को हमारे सभी संस्थानों में विकसित किया जाना चाहिए।",
      english:
        "7. Collectivism that comes from working with the team spirit in all the spheres of working should be developed in all our institutions.",
    },
    {
      hindi:
        "प्रत्येक शैक्षणिक सत्र की शुरुआत में, एक विस्तृत शैक्षणिक योजना और कैलेंडर तैयार किया जाना चाहिए और पूरे सत्र में अक्षरशः लागू किया जाना चाहिए और उसका पालन किया जाना चाहिए।",
      english:
        "8. At the beginning of each academic session, a detailed academic plan and calendar should be prepared and ought to be implemented and followed in letter and spirit throughout the session.",
    },
    {
      hindi:
        "विभिन्न क्षेत्रों की महान हस्तियों और प्रतीकों की वर्षगाँठ को छुट्टी घोषित करने के बजाय सांस्कृतिक कार्यक्रमों का आयोजन करके, छात्रों को उनके प्रेरणादायक और प्रेरक जीवन की कहानी और राष्ट्र और समाज के प्रति उनके योगदान के बारे में शिक्षित और प्रबुद्ध करके मनाया जाना चाहिए।",
      english:
        "9. The anniversaries of great personalities and icons of various fields should be celebrated by organising cultural programmes, educating and enlightening students about their inspirational and motivational life story and their contribution towards the nation and society instead of declaring holiday.",
    },
    {
      hindi:
        "त्योहारी छुट्टियों की पूर्व संध्या पर, छात्रों को उस त्योहार को मनाने के महत्व और त्योहार में निहित संदेश के बारे में जागरूक किया जाना चाहिए।",
      english:
        "10. On the eve of festive holidays, students should be made aware of the importance of celebrating that festival and the message inherent in the festival.",
    },
    {
      hindi:
        "पुस्तकालयों और प्रयोगशालाओं को नियमित रूप से आधुनिक, अद्यतन और उन्नत किया जाना चाहिए।",
      english:
        "11. The libraries and laboratories should be modernised, updated and upgraded Regularly.",
    },
    {
      hindi:
        "शिक्षण में आधुनिक और नवीनतम प्रौद्योगिकी और उपकरणों का उपयोग करें।",
      english: "12. Use Modern and latest technology and tools in teaching.",
    },
    {
      hindi:
        "शिक्षण में नवीन विचारों और नई विधियों को सुधारने और लागू करने के लिए निरंतर और निरंतर प्रयास होना चाहिए।",
      english:
        "13. There should be continuous and sustained effort to improvise and implement innovative ideas and new methods in teaching.",
    },
    {
      hindi:
        "छात्रों का समग्र व्यक्तित्व विकास महाराणा प्रताप शिक्षा परिषद् के शैक्षणिक संस्थानों के मुख्य लक्ष्यों में से एक है। इस मिशन को ध्यान में रखते हुए और वांछित लक्ष्य को प्राप्त करने के लिए एक समग्र अनुकूल परिसर संस्कृति को तैयार, विकसित और लागू करने की आवश्यकता है।",
      english:
        "14. Holistic personality development of the students is one of the main goals of the educational institutions of Maharana Pratap Shiksha Parishad. Keeping this mission in mind and to achieve the desired goal a holistic conducive campus culture needs to be devised, developed and implemented.",
    },
    {
      hindi:
        "स्वच्छता पूजा के समान है। शैक्षणिक और स्वास्थ्य संस्थान मूल रूप से सेवा केंद्र हैं। ये संस्थान पूजा स्थलों की तरह हैं, इसलिए उन्हें अपने घर, आश्रम या मंदिर की तरह साफ और स्वच्छ रखा जाना चाहिए। इसके अलावा, परिसर के भीतर और आसपास के पेड़, पौधे और वनस्पति आदि ऑक्सीजन के प्राकृतिक स्रोत हैं, जो हमारे जीवन के लिए सबसे आवश्यक और महत्वपूर्ण तत्व हैं, इसलिए हमारे संस्थानों को परिसर में और उसके आसपास हरियाली सुनिश्चित करने के लिए हमेशा एक अच्छी वनस्पति आवरण रखने और बनाए रखने का प्रयास करना चाहिए। एक हरा और साफ सुथरा परिसर काम करने के लिए एक स्वस्थ, स्फूर्तिदायक और आकर्षक माहौल प्रदान करता है और एक अच्छे कार्य स्थल के लिए एक बहुत ही आवश्यक आवश्यकता है।",
      english:
        "15. Cleanliness is akin to worship. Educational and health institutions are basically service centres. These institutions are like places of worship, therefore they should be kept clean and hygienic, just like one's own home, house, Ashram or Temple. Moreover, the trees, plants and vegetation etc. within and around the campus are natural sources of oxygen, the most essential and vital ingredients for our life, therefore our institutions should always strive to keep and maintain a good vegetation cover to ensure greenery in and around the campus. A green and clean salubrious campus provides a healthy, invigorating and inviting ambience to work and is a very essential requirement for a good working place.",
    },
    {
      hindi:
        "शिक्षा, प्रशिक्षण और स्वास्थ्य सेवाएं प्रदान करने में लगे हमारे संस्थान विभिन्न राष्ट्रीय कार्यक्रमों, सामाजिक और सामुदायिक मुद्दों के बारे में जन जागरूकता अभियान आयोजित करने के अलावा संस्थान के आस-पास के आवासीय क्षेत्रों/कॉलोनियों/गांवों आदि में रहने वाले लोगों के स्वास्थ्य, स्वच्छता, अनौपचारिक शिक्षा और स्वच्छता आदि के लिए भी जिम्मेदार हैं। हमारे संस्थानों के छात्रों को ऐसी सामाजिक-सांस्कृतिक-सूचनात्मक और शिक्षाप्रद सामुदायिक गतिविधियों में सक्रिय भूमिका निभानी चाहिए।",
      english:
        "16. Our institutions engaged in providing education, training and health services are also responsible for health, hygiene, informal education and sanitation etc. of the people living in the adjoining residential areas/colonies/villages etc. of the institution in addition to organizing public awareness drives regarding various national programmes, social and community issues. Students of our institutions should play an active role in such socio-cultural-informative and educative community activities.",
    },
    {
      hindi:
        "प्रार्थना सभा (राष्ट्रगान, राष्ट्रगीत, सरस्वती वंदना, सर्वशक्तिमान से प्रार्थना आदि) शिक्षा और प्रशिक्षण के क्षेत्र में लगे संस्थानों की मार्गदर्शक और सदा प्रेरणादायक गतिविधि है। इसलिए इस गतिविधि का अभ्यास हर दिन पूरी भक्ति और समर्पण के साथ धार्मिक रूप से किया जाना चाहिए।",
      english:
        "17. Prayer assembly (National anthem, national song, Saraswati Vandana, Prayer to almighty etc.) is the guiding and ever inspiring activity of the institutions engaged in the field of education and training. Therefore this activity should be practiced every day ritually and religiously with utmost devotion and dedication.",
    },
    {
      hindi:
        "देशभक्ति, अपनी संस्कृति के प्रति प्रेम, स्नेह और गर्व, अपने समाज, परंपराओं, नैतिकता और सदाचार के प्रति श्रद्धा को हमारे शैक्षणिक संस्थानों में जीवन मूल्यों के रूप में आवश्यक रूप से पढ़ाया जाना चाहिए।",
      english:
        "18. Patriotism, love, affection and pride in one's own culture, reverence for one's own society, traditions, ethics and morality should necessarily be taught as life values in our educational institutions.",
    },
    {
      hindi:
        "संस्थान के प्रमुखों को आगामी शैक्षणिक सत्र के लिए अपने संस्थानों की सभी औपचारिक और अनौपचारिक गतिविधियों के संबंध में गर्मी की छुट्टियों के दौरान योजना बनानी और तैयारी करनी चाहिए। बुनियादी ढांचे से संबंधित सभी विकास और रखरखाव कार्य केवल गर्मी की छुट्टियों के दौरान ही किए जाने चाहिए।",
      english:
        "19. The heads of the institution should plan and prepare during the summer vacation w.r.t. all the formal and informal activities of their institutions for the upcoming academic session. All the development and maintenance work related to infrastructure should be carried out during summer vacation only.",
    },
    {
      hindi:
        "संस्थान के प्रमुखों को शैक्षणिक सत्र के अंत से पहले शिक्षकों और कर्मचारियों के साथ एक बैठक करनी चाहिए ताकि सत्र की समीक्षा की जा सके और सकारात्मक और नकारात्मक दोनों तरह की प्रतिक्रिया प्राप्त हो सके। मूल्यांकन, विश्लेषण करें और देखें कि क्या सत्र की शुरुआत में तैयार की गई वार्षिक योजना को संतोषजनक ढंग से लागू और पूरा किया गया है और यदि कोई कमी पाई जाती है, तो कारण और समस्या क्षेत्रों की पहचान करें, उन्हें संबोधित करें और उन्हें अगले सत्र की वार्षिक योजना में शामिल करें और उस संबंध में उचित कार्रवाई करें।",
      english:
        "20. Institution heads should have a meeting with teachers and staff before the end of the academic session to review the session and get feedback positive as well as negative if any. Evaluate, analyse and see if the annual plan prepared at the start of the session has been implemented and accomplished satisfactorily and if any gap is found, identify the cause and problem areas, address them and incorporate the same in the annual plan of the following session and take appropriate action in that regard.",
    },
    {
      hindi:
        "संस्थानों के अधिकारियों और सदस्यों को पिछले दिन की तुलना में अगले दिन कुछ नया पूरा करना चाहिए, पिछले दिन की तुलना में हर दिन कुछ नया सीखना और करना चाहिए, ताकि संस्थान पिछले दिन की तुलना में हर दिन कुछ नया कमाए।",
      english:
        "21. The officers and members of the institutions should accomplish something new in the following day than the day before, learn and do something new every day than the preceding day, so that institution earns something new every day than the day before.",
    },
  ],
};

export const progressPathData: ProgressPathContent = {
  pageTitle: {
    hindi: "विश्वविद्यालय की यात्रा का प्रगति पथ",
    english: "Progress Path of the Journey of the University",
  },
  points: [
    {
      hindi:
        "यह विश्वविद्यालय नर्सिंग के पाठ्यक्रमों जैसे ए.एन.एम., जी.एन.एम., बी.एससी. नर्सिंग, पोस्ट बेसिक बी.एससी. नर्सिंग, एम.एससी. नर्सिंग, और बी.ए.एम.एस. के साथ शुरू किया जा रहा है।",
      english:
        "This university is being launched with the courses in nursing viz., A.N.M., G.N.M., B.Sc. Nursing, Post Basic B.Sc. Nursing, M.Sc. Nursing, and B.A.M.S.",
    },
    {
      hindi:
        "पहले चरण में आयुर्वेद, योग और नर्सिंग के डिग्री/डिप्लोमा पाठ्यक्रम शुरू किए जाएंगे।",
      english:
        "In the first phase degree/diploma courses of Ayurveda, Yoga and Nursing shall be started.",
    },
    {
      hindi:
        "दूसरे चरण में फार्मेसी, पैरामेडिकल, विशेष अध्ययन और अनुसंधान एवं विकास संस्थानों के पाठ्यक्रम शुरू किए जाएंगे।",
      english:
        "In the second phase courses in Pharmacy, Paramedical, specialised studies and institutions of research & development shall be started.",
    },
    {
      hindi:
        "तीसरे चरण में, एक उत्कृष्ट उच्च विशिष्ट आधुनिक नैदानिक केंद्र, परामर्श, उपचार और अनुसंधान संस्थान स्थापित किया जाएगा और इसे क्रियान्वित किया जाएगा। साथ ही, चिकित्सा विज्ञान में स्नातक, स्नातकोत्तर और उच्च विशिष्ट पाठ्यक्रम भी कार्य करना शुरू कर देंगे।",
      english:
        "In the third phase, an excellent institution of highly specialised modern diagnostic centre, Consultation, Treatment and Research shall be established and made operationalised. Simultaneously Graduate, Post graduate and higher specialised courses in Medical sciences should start functioning.",
    },
    {
      hindi:
        "चौथे चरण में, मानविकी, भौतिक विज्ञान और प्रौद्योगिकी में उच्च शिक्षा पाठ्यक्रमों के विशेष पाठ्यक्रम शुरू किए जाएंगे।",
      english:
        "In the fourth phase, specialized curriculums of higher education courses in Humanities, Physical Sciences and Technology shall be rolled out.",
    },
    {
      hindi:
        "पांचवें और अंतिम चरण में, इस क्षेत्र के दूरदराज के ग्रामीण क्षेत्रों में विशेष स्वास्थ्य केंद्रों की एक श्रृंखला स्थापित की जाएगी।",
      english:
        "In the fifth and final phase, a chain of specialised health centres shall be established in the remote rural areas of this region.",
    },
    {
      hindi:
        "हर साल पूर्वी उत्तर प्रदेश, नेपाल के तराई क्षेत्र और बिहार के पश्चिमी हिस्से के अधिकांश क्षेत्र बाढ़ से बुरी तरह प्रभावित होते हैं और बाद में जलभराव के कारण इन क्षेत्रों को कई स्वास्थ्य संबंधी चुनौतियों और बीमारियों का सामना करना पड़ता है। इंसेफेलाइटिस ऐसी ही एक बीमारी का उदाहरण है। इसलिए, इन मौसमी वायरस/वेक्टर जनित बीमारियों और महामारियों से निपटने और उनसे छुटकारा पाने के लिए समर्पित अनुसंधान, निदान, उपचार और सावधानियां इस विश्वविद्यालय के प्रमुख लक्ष्यों और फोकस क्षेत्रों में से एक है।",
      english:
        "Every year most of the areas of Eastern UP, Terai region of Nepal and western part of Bihar are badly affected by floods and subsequently due to the water logging, these regions face many health related challenges and diseases. Encephalitis is an example of one of such diseases. Therefore, dedicated research, diagnosis, treatment and precautions to deal with and get rid of these seasonal virus/vector borne diseases and epidemics is one of the major goal and focus area of this university.",
    },
    {
      hindi:
        "इस विश्वविद्यालय का जलग्रहण क्षेत्र मुख्य रूप से कृषि प्रधान ग्रामीण क्षेत्र है। इस क्षेत्र में रोजगार के अवसर बहुत कम हैं। कृषि आधारित उद्योग एक बड़ी चिंता का विषय है। इसलिए, कृषि को एक रोजगार योग्य और व्यवहार्य विकल्प बनाने के लिए, इस विश्वविद्यालय को उत्पादन बढ़ाने और स्थानीय उत्पादों के संरक्षण और विपणन के लिए प्रासंगिक पाठ्यक्रम चलाने और प्रासंगिक शोध करने चाहिए ताकि क्षेत्र के किसानों की आय में वृद्धि हो सके जिसके परिणामस्वरूप उनके द्वारा सामना की जाने वाली असंख्य समस्याओं को कम किया जा सकेगा। इसके अलावा उन्हें स्वयं सहायता सहकारी समूहों, लघु उद्योगों की स्थापना में आवश्यक विशेषज्ञता और जानकारी उपलब्ध कराकर प्रोत्साहित और सहायता करना और क्षेत्र में रोजगार के अवसर पैदा करने के लिए जागरूकता को बढ़ावा देना और तकनीकी कौशल प्रदान करना।",
      english:
        "Catchment area of this university is mainly agriculture dominated rural area. Employment opportunities in this area are very few. Agriculture based industry is a matter of great concern. Therefore, to make agriculture an employable and viable option, this university should be running courses and doing relevant research to increase the production and the preservation and marketing of the local products to increase the income of farmers of the region which would result in mitigating and alleviating the myriad problems faced by them. Moreover to encourage and assist them by making available necessary expertise and know-how in setting up self-help cooperative groups, small scale industries and also promote awareness and provide technical skills to generate employment avenues in the region.",
    },
    {
      hindi:
        "स्थानीय स्तर पर रोजगार को बढ़ावा देने के लिए, विश्वविद्यालय इस संबंध में प्रयोगात्मक कार्यक्रम बनाएगा और चलाएगा। साथ ही, कृषि से संबंधित विशेष कौशल प्रशिक्षण और परीक्षण भी आयोजित किए जाएंगे।",
      english:
        "To promote employment at the local level, the university shall create and run experimental programmes in this regard. Also, the agriculture related specialised skills training and tests shall be conducted.",
    },
    {
      hindi:
        "महाराणा प्रताप शिक्षा परिषद् द्वारा शासित महायोगी गोरखनाथ कृषि विज्ञान केंद्र, चौकमाफी (भारत सरकार के सहयोग से स्थापित) कृषि उत्पादकता बढ़ाने, कृषि लागत कम करने, लाभप्रदता में सुधार करने और कृषि क्षेत्र में प्रौद्योगिकी के उपयोग को प्रोत्साहित करने के तरीके और साधन खोजने के लिए काम कर रहा है। उपरोक्त इच्छित लक्ष्यों को प्राप्त करने के लिए प्रासंगिक अनुसंधान और प्रयोग किए जा रहे हैं।",
      english:
        "Maharana Pratap Shiksha Parishad governed Mahayogi Gorakshnath Krishi Vigyan Kendra, Chowkmafi (established in collaboration with Government of India) is working to find the ways and means to increase the agricultural productivity, reduce agricultural costs, improve profitability and encourage the use of technology in the agriculture sector. To achieve the above intended goals relevant research and experiments are being conducted.",
    },
    {
      hindi:
        "किसानों को निरंतर और नियमित आधार पर शिक्षित, सूचित और प्रशिक्षित करने के लिए प्रासंगिक कार्यक्रम आयोजित किए जाएंगे।",
      english:
        "Relevant programmes shall be conducted to educate, inform and train the farmers continuously on a regular basis.",
    },
    {
      hindi:
        'महिलाओं को कृषि आधारित उपभोक्ता उत्पाद बनाने में सक्षम बनाने की दृष्टि से विधिवत प्रशिक्षित, शिक्षित और सूचित किया जाएगा जो उन्हें आत्मनिर्भर बनाएगा। "हर घर - एक उत्पाद" के आदर्श वाक्य के साथ नियमित आधार पर उनकी आर्थिक स्वतंत्रता के लिए महिला समूहों को शिक्षित और प्रशिक्षित करने के लिए कार्यक्रम आयोजित किए जाएंगे।',
      english:
        'Women shall be duly trained, educated and informed with a view to enable them of making agro-based consumer products which shall make them self-reliant. Programmes to educate and train women groups for their economic independence will be conducted on the regular basis with the moto of "Har Ghar - Ek Utpaad" ("Each House - One Product").',
    },
    {
      hindi:
        "हमारा प्रयास चिकित्सा और कृषि क्षेत्रों में काम कर रहे स्थानीय छोटे और मध्यम स्तर के उद्योगों को प्रासंगिक नई प्रौद्योगिकियों/वैज्ञानिक तरीकों को उपलब्ध कराने में मदद करना भी होगा।",
      english:
        "Our endeavour shall also be to help make available relevant new technologies/scientific methods to the local small and medium scale industries working in medical and agricultural fields.",
    },
    {
      hindi:
        "बहुत जल्द महायोगी गोरखनाथ विश्वविद्यालय गोरखपुर पूर्वी उत्तर प्रदेश के बहु-विषयक उच्च शिक्षा के क्षेत्र में सबसे विशिष्ट और परिष्कृत संस्थानों में से एक बनने जा रहा है। 'संस्कार युक्त शिक्षा' के आदर्श वाक्य के माध्यम से, यह विश्वविद्यालय लोगों को वैश्विक मानकों के बराबर अपनी पसंद के क्षेत्रों में आत्मनिर्भर और कुशल बनने और वैज्ञानिक सोच और आध्यात्मिक हृदय वाले एक उपयोगी और सक्षम इंसान बनने में सहायक होगा।",
      english:
        "Very soon Mahayogi Gorakhnath University Gorakhpur is going to be Eastern UP's one of the most specialised and sophisticated institution in the field of multidisciplinary centre of higher education. Through the motto of 'Education with Ethos', this University shall be instrumental in enabling the people to become self-reliant and skilled in their fields of choice at par with the global standards and an useful and able human being having a scientific bent of mind and a spiritual heart.",
    },
  ],
};

export const proposedProgramsData: ProposedProgramsContent = {
  pageTitle: {
    hindi:
      "महायोगी गोरखनाथ विश्वविद्यालय गोरखपुर के प्रस्तावित कार्यक्रम/परियोजनाएं",
    english:
      "Proposed programs/projects of Mahayogi Gorakhnath University Gorakhpur",
  },
  intro: {
    hindi:
      "महायोगी गोरखनाथ विश्वविद्यालय गोरखपुर की प्रायोजक संस्था और इससे संबद्ध विभिन्न क्षेत्रों में कार्यरत विभिन्न अन्य संस्थान, शिक्षा, स्वास्थ्य, कृषि और रोजगार आदि के संबंध में स्थानीय आवश्यकताओं को ध्यान में रखते हुए कार्य करते हैं। विश्वविद्यालय स्थानीय आवश्यकताओं को ध्यान में रखते हुए निम्नलिखित मुख्य परियोजनाओं और कार्यक्रमों को संचालित करने का प्रस्ताव करता है:",
    english:
      "The sponsoring body of Mahayogi Gorakhnath University Gorakhpur and its affiliated various other institutions working in various fields, function keeping in view the local needs in respect of education, health, agriculture, and employment etc. The University proposes to conduct the following main projects and programs keeping in view the local requirements:",
  },
  points: [
    {
      hindi:
        "पूर्वी उत्तर प्रदेश और नेपाल के तराई क्षेत्र तथा पश्चिमी बिहार बाढ़ प्रवण और जलभराव वाले क्षेत्र हैं। जलभराव और बाढ़ के कारण, इन क्षेत्रों को बहुत सारी स्वास्थ्य संबंधी समस्याओं और चुनौतियों का सामना करना पड़ता है। इंसेफेलाइटिस इसका एक उदाहरण है। उपरोक्त के आलोक में, विश्वविद्यालय का मुख्य प्रयास और उद्देश्य ऐसे वेक्टर जनित रोगों और अन्य बीमारियों से संबंधित निदान, उपचार और अनुसंधान होगा जो सामान्य रूप से इस क्षेत्र को प्रभावित करते हैं।",
      english:
        "Terrain regions of eastern U.P.& Nepal and western Bihar are flood-prone and water logging areas. Due to waterlogging and inundation, these regions face a lot of health-related problems and challenges. Encephalitis is one such example. In the light of above, one of the main effort and aim of the university will be diagnosis, treatment and research, related to such vector-borne diseases and other diseases which normally affects this region.",
    },
    {
      hindi:
        "यह क्षेत्र मुख्य रूप से एक कृषि प्रधान क्षेत्र है, आज भी इस क्षेत्र में बहुत कम रोजगार के अवसर उपलब्ध हैं। इसलिए, कृषि को एक रोजगार-उन्मुख क्षेत्र बनाने के लिए, विश्वविद्यालय स्थानीय कृषि उपज पर आधारित लघु-स्तरीय/कुटीर उद्योगों का एक नेटवर्क स्थापित करने में स्थानीय लोगों का मार्गदर्शन और प्रशिक्षण करने में मदद करने के लिए अनुसंधान करेगा और प्रशिक्षण कार्यक्रम शुरू करेगा। साथ ही, विश्वविद्यालय आवश्यकता-आधारित कार्यशालाएं आयोजित करेगा, प्रशिक्षण कार्यक्रम शुरू करेगा, जागरूकता अभियान आयोजित करेगा और परिणाम-उन्मुख योजना को लागू और पूरा किया जाएगा।",
      english:
        "This area is primarily an agricultural region, even today very few employment opportunities are available in the region. Hence, to make agriculture an employment-oriented sector, university will undertake research and launch training programs to help guide and train local people in establishing a network of small-scale/cottage industries based on local agricultural produce. Simultaneously, university will conduct need-based workshops, launch training programs, organize awareness drives and result-oriented planning will be implemented and accomplished.",
    },
    {
      hindi:
        "रोजगार सृजित करने के लिए, विश्वविद्यालय नई परियोजनाएं शुरू करेगा और बाद में विभिन्न प्रशिक्षण कार्यक्रमों और कौशल विकास के माध्यम से अपेक्षित कौशल प्रदान करने के लिए नए पाठ्यक्रम बनाएगा।",
      english:
        "To create employment, university will undertake new projects and subsequently create new syllabi for providing requisite skills through various training programs and skill development.",
    },
    {
      hindi:
        "किसानों, महिलाओं की सहायता करने और स्थानीय उद्योगों के लिए कुशल मानव संसाधन उपलब्ध कराने में मदद करने के लिए महायोगी गोरखनाथ विश्वविद्यालय गोरखपुर द्वारा निम्नलिखित योजनाओं/प्रशिक्षण कार्यक्रमों को शुरू करने का प्रस्ताव है:",
      english:
        "The following schemes/training programs are proposed to be undertaken by Mahayogi Gorakhnath University Gorakhpur to help support farmers, women and make available skilled human resource for local industries:",
    },
    {
      hindi:
        "प्रायोजक संस्था अपनी सहयोगी संस्था महायोगी गोरखनाथ कृषि विज्ञान केंद्र चौकमाफी (भारत सरकार द्वारा प्रायोजित एक संस्था) के सहयोग से कृषि उपज बढ़ाने और खेती की लागत को कम करने के लिए विभिन्न प्रकार के प्रशिक्षण प्रदान करने और नई अनुसंधान परियोजनाएं शुरू करने का प्रयास करेगी ताकि किसानों के लाभ को बढ़ाया जा सके और खेती और अन्य कृषि कार्यों में प्रौद्योगिकी के उपयोग को बढ़ावा दिया जा सके।",
      english:
        "The sponsoring body in collaboration with its associate institution Mahayogi Gorakhnath Krishi Vigyan Kendra Chowkmafi (A Government of India sponsored body) will try to impart various types of training and undertake new research projects to increase the agricultural produce and to reduce the farming cost so as to increase the profit of the farmers and promote the use of technology in farming and other agricultural works.",
    },
    {
      hindi:
        "किसानों को प्रशिक्षित, सूचित और शिक्षित करने के लिए, विधिवत तैयार किए गए प्रशिक्षण कार्यक्रम नियमित रूप से आयोजित किए जाएंगे।",
      english:
        "To train, inform and educate the farmers, duly devised training programs will be conducted regularly.",
    },
    {
      hindi:
        "महिलाओं को आत्मनिर्भर बनाने के लिए उन्हें कृषि आधारित उत्पाद तैयार करने के लिए सु-शोधित कौशल के साथ विधिवत प्रशिक्षित किया जाएगा। उनके द्वारा तैयार किए गए उत्पादों के विपणन में भी उनकी सहायता की जाएगी।",
      english:
        "To make the women self-reliant they will be duly trained with well-researched skills to prepare agriculture-based products. They will also be assisted in marketing of products prepared by them.",
    },
    {
      hindi:
        "साथ ही हमारा यह भी प्रयास होगा कि स्थानीय लघु उद्योगों की स्थापना के लिए स्वास्थ्य और कृषि से संबंधित तकनीकी जानकारी उपलब्ध कराने में सुविधा हो।",
      english:
        "At the same time our endeavor will also be to facilitate and make available health and agriculture-related technical know-how to establish local small-scale industries.",
    },
  ],
};
