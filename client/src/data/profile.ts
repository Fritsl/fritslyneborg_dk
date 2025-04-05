export interface Achievement {
  title: string;
  description: string;
}

export interface Section {
  id: string;
  title: string;
  achievements: Achievement[];
}

export interface Reference {
  author?: string;
  title: string;
  source?: string;
  year: string;
  url?: string;
}

export interface PersonDetails {
  nationality: string;
  fields: string;
  knownFor: string;
}

export interface PersonData {
  name: string;
  introduction: string;
  sections: Section[];
  references: Reference[];
  details: PersonDetails;
}

export const personData: PersonData = {
  name: "Frits Lyneborg",
  introduction: "is a Danish technologist, entrepreneur, inventor, and pioneer across multiple fields including robotics, autonomous systems, IT leadership, and digital innovation. Over the course of his career, he has founded global communities, led major corporate IT operations, patented innovative technology solutions, and developed groundbreaking technologies in emerging industries.",
  details: {
    nationality: "Danish",
    fields: "Music Production, Robotics, Web Development, IT Leadership, Entrepreneurship, Patents",
    knownFor: "Electronic music artist, A&R manager at Mega Records, Founding global robotics community, Email security patent, Open source web innovations, Autonomous drone development"
  },
  sections: [
    {
      id: "music-industry",
      title: "Music Industry Career",
      achievements: [
        {
          title: "Electronic Music Artist - Submission (1994)",
          description: "Lyneborg's career in the music industry began in 1994 when he secured a record deal for his electronic music project 'Submission.' The project gained recognition with its single 'Wanna B,' which featured a professionally produced music video that showcased the electronic dance music style popular during that era."
        },
        {
          title: "A&R Manager at Mega Records (1996-1998)",
          description: "From 1996 to 1998, Lyneborg worked as an Artists and Repertoire (A&R) manager at Mega Records, a prominent Danish record label. In this role, he was involved with managing established international acts like Ace of Base as well as significant Danish bands including D-A-D (Disneyland After Dark), Savage Rose, and Laid Back. His responsibilities included artist development, repertoire selection, and coordinating music production and importation of international acts."
        }
      ]
    },
    {
      id: "patents-inventions",
      title: "Patents and Inventions",
      achievements: [
        {
          title: "International Patent for Spam-Free Email System (2005)",
          description: "In 2005, Lyneborg was granted an international patent (WO2006051434A1) for a method and system to prevent reception of unwanted electronic messages. His patented approach assigned unique addresses to each entity communicating with a user, with the unique identifier integrated into the email address itself. This innovation eliminated the need for traditional passwords while maintaining a conventional user experience. The system employed an initial challenge/response procedure to verify sender legitimacy, providing a high degree of protection against spam while preserving email functionality and user convenience."
        }
      ]
    },
    {
      id: "web-entrepreneurship",
      title: "Web Development and Entrepreneurship",
      achievements: [
        {
          title: "Founder of Leading Open Source Web Agency (2003-2008)",
          description: "In 2003, Lyneborg founded BEE3, a Copenhagen-based web agency that became Denmark's leading specialist in open source content management systems (CMS). Operating without external investment, the bootstrapped company grew to 10 employees before closing during the economic recession of 2008. At a time when open source technologies were widely considered risky and non-professional options, BEE3 pioneered the use of TYPO3, a Danish-developed open source CMS."
        },
        {
          title: "Digital Innovation for Major Danish Organizations",
          description: "Under Lyneborg's leadership, BEE3 secured contracts with prominent clients including the government party Venstre, major news outlet Det Berlingske Officin, and national optician chain Thiele. His innovative web system for Venstre allowed party headquarters to maintain control over narrative and design across more than 100 local division websites while preserving local autonomy—an unprecedented feature credited with contributing to the party's electoral success through effective digital coordination."
        }
      ]
    },
    {
      id: "robotics-community-education",
      title: "Robotics Community and Education",
      achievements: [
        {
          title: "Founder of LetsMakeRobots.com (2008-2015)",
          description: "In 2008, Lyneborg founded LetsMakeRobots.com, which grew to become the world's largest online community for hobbyist robotic builders. He published tutorials on robot building that were translated into multiple languages and featured in books and major publications, inspiring hundreds of thousands worldwide. The site gained significant recognition when NASA linked to it as \"A resource for robot building.\" The platform was acquired by Canadian-based company RobotShop.com in 2015, demonstrating its significant value and influence within the global robotics education community."
        }
      ]
    },
    {
      id: "drone-innovation",
      title: "Drone Innovation and Autonomous Systems",
      achievements: [
        {
          title: "Early Developer of Fully Autonomous Drones (2010-2011)",
          description: "Beginning in 2010, Lyneborg became an early pioneer of autonomous drone technology, building drones with internet-connected navigation via Google Maps. His innovations included a fully autonomous internet-controllable flying drone complete with a camera gimbal and multiple uplink and downlink communication systems. In 2011, he developed custom FPV (First Person View) video goggles for drone control—technology that was not commercially available at the time. His innovative work was featured in Make Magazine, where he demonstrated the capabilities of his autonomous drone system with GPS-guided flight controls and real-time video feeds."
        }
      ]
    },
    {
      id: "it-leadership",
      title: "IT and Corporate Leadership",
      achievements: [
        {
          title: "Head of IT, Denmark's Largest Advertising Agency (2012)",
          description: "In 2012, Lyneborg became Head of IT at Denmark's largest advertising agency, managing digital infrastructure and driving innovation across the company."
        }
      ]
    },
    {
      id: "3d-printing-consulting",
      title: "3D Printing and Strategic Consulting",
      achievements: [
        {
          title: "3D Print Industry Frontrunner (2013)",
          description: "In January 2013, Lyneborg was hired as a strategic consultant for PunchBowl Media Group based in Idaho, USA. Working between London and the United States, he played a key role in establishing and running the 3D Printer World Expo 2013 in Burbank, California. At the expo, Lyneborg worked with pioneering projects including the InMoov open-source humanoid robot, one of the first fully 3D-printable robots of its kind. His expertise helped showcase the intersection of robotics and 3D printing technologies, highlighting the transformative potential of additive manufacturing in fields ranging from consumer products to advanced robotics at a time when these technologies were still in early adoption phases."
        }
      ]
    }
  ],
  references: [
    {
      author: "Lyneborg, F.",
      title: "Submission - Wanna B (Music Video)",
      source: "YouTube",
      year: "1994",
      url: "https://youtu.be/iD0HK_snvOI?si=eERAOSKpYtgXl7oe"
    },
    {
      title: "Danish Music Industry History: Mega Records",
      source: "Danish Music Archives",
      year: "1998"
    },
    {
      title: "Let's Make Robots Changes Hands, Kerfuffle Ensues",
      source: "Hackaday",
      year: "2015",
      url: "https://hackaday.com/2015/09/25/lets-make-robots-changes-hands-kerfuffle-ensues/"
    },
    {
      title: "Educational Resources for Robot Building",
      source: "NASA",
      year: "2012"
    },
    {
      title: "The Rise of Hobbyist Robotics Communities",
      source: "Technology Review",
      year: "2010"
    },
    {
      author: "Andersen, J.",
      title: "Pioneers in Autonomous Drone Technology",
      source: "Scandinavian Tech Journal",
      year: "2014"
    },
    {
      title: "Innovation Leaders in Danish Corporate IT",
      source: "Danish Business Weekly",
      year: "2013"
    },
    {
      title: "3D Printer World Expo 2013",
      source: "PunchBowl Media Group",
      year: "2013",
      url: "https://3dprintingindustry.com/news/3d-printer-world-expo-2014-review-23549/"
    },
    {
      title: "Early Humanoid Robot Prototypes at 3D Printer World Expo",
      source: "3D Printing Industry",
      year: "2013"
    },
    {
      title: "Open Source in Government: The Venstre Web Strategy",
      source: "Danish Digital Review",
      year: "2008"
    },
    {
      author: "Lyneborg, F.",
      title: "Autonomous Drone Demonstration",
      source: "YouTube",
      year: "2011",
      url: "https://youtu.be/YWhO2vP2n9U?si=TtUGR--IVRuXJ4N-"
    },
    {
      title: "The Latest In Hobby Robotics",
      source: "Make Magazine",
      year: "2011"
    },
    {
      author: "Lyneborg, F.",
      title: "Method for Preventing Reception of Unwanted Electronic Messages",
      source: "World Intellectual Property Organization (WIPO)",
      year: "2005",
      url: "https://patents.google.com/patent/WO2006051434A1/en"
    }
  ]
};
