type MegaMenuHeader = {
  type: "header";
  label: Title;
  href?: never;
  subSections?: MegaMenuSection[];
};

export interface MegaMenuProps {
  items: MegaMenuSection[];
  isOpen: boolean;
  onClose: () => void;
}

type MegaMenuLink = {
  type: "link";
  label: Title;
  href: string;
  subSections?: MegaMenuSection[];
};

export type MegaMenuSection = MegaMenuHeader | MegaMenuLink;

export type MegaMenus = {
  Students: MegaMenuSection[];
  Admissions: MegaMenuSection[];
  Administration: MegaMenuSection[];
  More: MegaMenuSection[];
};

export interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface StatsCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface AnimatedTextProp {
  text: string;
  speed?: number;
  delay?: number;
  loopInterval?: number;
  className?: string;
}

export interface CommitteeMember {
  srNo: number;
  name: {
    hindi: string;
    english: string;
  };
  designation: {
    hindi: string;
    english: string;
  };
  role: {
    hindi: string;
    english: string;
  };
  status: {
    hindi: string;
    english: string;
  };
}

export interface Title {
  hindi: string;
  english: string;
}

export interface CommitteeTitles {
  heading: Title;
  headers: {
    srNo: Title;
    nameDesignation: Title;
    role: Title;
    status: Title;
  };
}

export interface SGRCCommitteeTitles {
  heading: Title;
  headers: {
    srNo: Title;
    name: Title;
    designation: Title;
    role: Title;
  };
}

export interface SGRCCommitteeMember {
  srNo: number;
  name: Title;
  designation: Title;
  role: Title;
}

export interface Ombudsperson {
  name: Title;
  designation: Title;
  contact: {
    phone: string;
    email: string;
  };
}

export interface AcademicCouncilMember {
  srNo: number;
  name: {
    hindi: string;
    english: string;
  };
  type: {
    hindi: string;
    english: string;
  };
  role: {
    hindi: string;
    english: string;
  };
}

export interface AcademicCouncilTitles {
  heading: Title;
  headers: {
    srNo: Title;
    name: Title;
    type: Title;
    role: Title;
  };
}

export interface BoardMember {
  srNo: number;
  name: Title;
  designation: Title;
  role: Title;
}

export interface BoardSection {
  heading: Title;
  headers: {
    srNo: Title;
    name: Title;
    designation: Title;
    role: Title;
  };
  members: BoardMember[];
}

export interface BoardOfStudiesData {
  title: Title;
  ayurveda: BoardSection;
  medicalMicrobiology: BoardSection;
  medicalBiochemistry: BoardSection;
  biotechnology: BoardSection;
}

export interface EmpoweredBody {
  title: Title;
  description: {
    hindi: string;
    english: string;
  };
  powers: {
    hindi: string[];
    english: string[];
  };
}

export interface HomeDataType {
  aboutMain: {
    hindi: {
      heading: string;
      description: string;
      studentsLabel: string;
      facultyLabel: string;
      programsLabel: string;
      placementRateLabel: string;
    };
    english: {
      heading: string;
      description: string;
      studentsLabel: string;
      facultyLabel: string;
      programsLabel: string;
      placementRateLabel: string;
    };
  };
  academic: {
    hindi: {
      heading: string;
      description: string;
      medicalSurgeryTitle: string;
      medicalSurgeryDescription: string;
      managementCommerceTitle: string;
      managementCommerceDescription: string;
      alliedHealthTitle: string;
      alliedHealthDescription: string;
      nursingBiomedicalTitle: string;
      nursingBiomedicalDescription: string;
    };
    english: {
      heading: string;
      description: string;
      medicalSurgeryTitle: string;
      medicalSurgeryDescription: string;
      managementCommerceTitle: string;
      managementCommerceDescription: string;
      alliedHealthTitle: string;
      alliedHealthDescription: string;
      nursingBiomedicalTitle: string;
      nursingBiomedicalDescription: string;
    };
  };
  admission: {
    hindi: {
      heading: string;
      description: string;
      applyButton: string;
      brochureButton: string;
    };
    english: {
      heading: string;
      description: string;
      applyButton: string;
      brochureButton: string;
    };
  };
  contact: {
    hindi: {
      heading: string;
      description: string;
      addressLabel: string;
      address: string;
      phoneLabel: string;
      phone: string;
      emailLabel: string;
      email: string;
    };
    english: {
      heading: string;
      description: string;
      addressLabel: string;
      address: string;
      phoneLabel: string;
      phone: string;
      emailLabel: string;
      email: string;
    };
  };
  main: {
    hindi: {
      badge: string;
      universityName1: string;
      universityName2: string;
      animatedText1: string;
      animatedText2: string;
      description: string;
      exploreButton: string;
      virtualTourButton: string;
    };
    english: {
      badge: string;
      universityName1: string;
      universityName2: string;
      animatedText1: string;
      animatedText2: string;
      description: string;
      exploreButton: string;
      virtualTourButton: string;
    };
  };
  whyMGUG: {
    hindi: {
      heading: string;
      description: string;
      academicExcellenceTitle: string;
      academicExcellenceDescription: string;
      researchExcellenceTitle: string;
      researchExcellenceDescription: string;
      modernInfrastructureTitle: string;
      modernInfrastructureDescription: string;
      globalPartnershipsTitle: string;
      globalPartnershipsDescription: string;
      industryFocusedTitle: string;
      industryFocusedDescription: string;
      digitalLearningTitle: string;
      digitalLearningDescription: string;
    };
    english: {
      heading: string;
      description: string;
      academicExcellenceTitle: string;
      academicExcellenceDescription: string;
      researchExcellenceTitle: string;
      researchExcellenceDescription: string;
      modernInfrastructureTitle: string;
      modernInfrastructureDescription: string;
      globalPartnershipsTitle: string;
      globalPartnershipsDescription: string;
      industryFocusedTitle: string;
      industryFocusedDescription: string;
      digitalLearningTitle: string;
      digitalLearningDescription: string;
    };
  };
}

export interface AntiRaggingMember {
  no: number;
  name: Title;
  designation: Title;
  phone: string;
}

export interface ItCommitteeMember {
  image: string;
  name: Title;
  designation: Title;
}

export interface GoverningBody {
  title: Title;
  composition: {
    hindi: {
      description: string;
      members: string[];
      note: string;
    };
    english: {
      description: string;
      members: string[];
      note: string;
    };
  };
  rules: {
    hindi: {
      label: string;
      text: string;
      note?: string;
    }[];
    english: {
      label: string;
      text: string;
      note?: string;
    }[];
  };
}

interface Socials {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
}

interface Person {
  hindi: {
    name: string;
    designation: string;
    university: string;
  };
  english: {
    name: string;
    designation: string;
    university: string;
  };
  image: string;
  email: string;
  website?: string;
  profilePdf?: string;
  socials?: Socials;
}

export interface Administration {
  chancellor: Person;
  proChancellor: Person;
  viceChancellor: Person;
  registrar: Person;
  financeOfficer: Person;
  controllerOfExamination: Person;
  chiefProctor: Person;
  chiefVigilanceOfficer: Person;
  ombudsPerson: Person;
}
