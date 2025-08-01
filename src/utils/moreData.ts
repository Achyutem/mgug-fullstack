import type {
  GalleryContent,
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
