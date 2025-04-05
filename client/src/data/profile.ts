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
  introduction: "is a Danish technologist, entrepreneur, and pioneer across multiple fields including robotics, autonomous systems, IT leadership, and digital innovation. Over the course of his career, he has founded global communities, led major corporate IT operations, and developed groundbreaking technologies in emerging industries.",
  details: {
    nationality: "Danish",
    fields: "Robotics, Web Development, IT Leadership, Entrepreneurship",
    knownFor: "Founding global robotics community, Open source web innovations, Autonomous drone development"
  },
  sections: [
    {
      id: "web-entrepreneurship",
      title: "Web Development and Entrepreneurship",
      achievements: [
        {
          title: "Founder of Leading Open Source Web Agency (2005-2008)",
          description: "In 2005, Lyneborg founded BEE3, a Copenhagen-based web agency that became Denmark's leading specialist in open source content management systems (CMS). Operating without external investment, the bootstrapped company grew to 10 employees before closing during the economic recession of 2008. At a time when open source technologies were widely considered risky and non-professional options, BEE3 pioneered the use of TYPO3, a Danish-developed open source CMS."
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
          title: "Founder of the World's Largest Hobby Robotics Community (2008)",
          description: "In 2008, Lyneborg founded what became the world's largest online community for hobbyist robotic builders. He published tutorials on robot building that were translated into multiple languages and featured in books and major publications, inspiring hundreds of thousands worldwide."
        }
      ]
    },
    {
      id: "drone-innovation",
      title: "Drone Innovation and Autonomous Systems",
      achievements: [
        {
          title: "Early Developer of Fully Autonomous Drones (2011)",
          description: "In 2011, Lyneborg was an early pioneer of autonomous drone technology, building drones with internet-connected navigation via Google Maps. He also built custom FPV (First Person View) video goggles and direct video link systems for real-time drone piloting."
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
    }
  ],
  references: [
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
      title: "Open Source in Government: The Venstre Web Strategy",
      source: "Danish Digital Review",
      year: "2008"
    }
  ]
};
