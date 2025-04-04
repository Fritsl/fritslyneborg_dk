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
    fields: "Robotics, Autonomous Systems, IT Leadership",
    knownFor: "Founding global robotics community, Autonomous drone development"
  },
  sections: [
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
    }
  ]
};
