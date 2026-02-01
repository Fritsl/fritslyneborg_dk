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
  birthYear?: string;
  fields: string;
  knownFor: string;
  portraitImage?: string;
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
  introduction: "is a Danish technologist, inventor, and entrepreneur. Born in 1970, Lyneborg has worked across robotics education, corporate IT leadership, AI implementation, 3D art instruction, music technology, and game development. In 2025, he founded FRITS AI APS, a Copenhagen-based company providing GDPR-compliant AI chatbot solutions for European enterprises. Earlier work includes founding LetsMakeRobots.com (2008-2015), one of the first global online communities for hobbyist robotics, and securing an international patent for spam-free email systems (2005). Lyneborg taught 3D visualization and digital sculpture at the Royal Danish Academy of Fine Arts for seven years (2015-2022). His recent projects include ArrangerKing (2024), a music production plugin for arrangement automation, and AI automation workshops with business executive Lars Kolind. His career has included early work with open source web solutions (2003), robotics communities (2008), autonomous drones (2010), and LLM implementations (2023).",
  details: {
    nationality: "Danish",
    birthYear: "1970",
    fields: "Music Production, Robotics, AI Implementation, Vibe Coding, 3D Art Education, Web Development, C# Programming, IT Leadership, Entrepreneurship, Patents, Adventure Sports",
    knownFor: "Founding FRITS AI APS for GDPR-compliant enterprise AI solutions (2025), Founding global robotics community LetsMakeRobots.com (2008-2015), Creating ArrangerKing music production plugin (2024), Pioneering Vibe Coding techniques, 3D Art education at Royal Danish Academy of Art, Email encryption patent, Web infrastructure for Denmark's Liberal Party, Early adoption of AI technologies",
    portraitImage: "/src/assets/images/frits_portrait_2024.jpg"
  },
  sections: [

    {
      id: "it-leadership",
      title: "IT and Corporate Leadership",
      achievements: [
        {
          title: "Digital Director at Republica (2015)",
          description: "Lyneborg served as Digital Director at Republica in 2015, overseeing technical development teams. Featured in Markedsføring, he worked on digital flyer solutions. Company leadership stated, 'We have hired a digital chief, Frits Lyneborg, who will enhance our competence in the area.'"
        },
        {
          title: "Senior Strategic Advisor at Wemind A/S (2010-2013)",
          description: "As Senior Strategic Advisor at Wemind A/S (2010-2013), Lyneborg provided guidance on digital transformation to organizations. During this period, he designed the UX for the global community website of World Scout Foundation, a client of Wemind. The World Organization of the Scout Movement (WOSM) has approximately 51.4 million members across 176 national organizations."
        },
        {
          title: "IT and Development Chief at UVCB (1999-2003)",
          description: "Lyneborg led UVCB's IT department (1999-2003), developing custom IT solutions including networks, remote workstations, and web platforms. Secretary Chief Henrik Brandt noted his work in meeting organizational needs while maintaining budgets."
        }
      ]
    },
    {
      id: "robotics-community-education",
      title: "Robotics Community and Education",
      achievements: [
        {
          title: "Robot Projects and Yellow Drum Machine (2008-2012)",
          description: "Lyneborg's 2008 robot demonstration video received over 1,000 comments on Google Video and contributed to the growth of the LetsMakeRobots.com community. In 2012, he created the Yellow Drum Machine, an open-source robotic percussion instrument. Featured as a tutorial in Make Magazine, this project combined robotics, music, and digital fabrication."
        },
        {
          title: "Founder of LetsMakeRobots.com (2008-2015)",
          description: "Lyneborg founded LetsMakeRobots.com in 2008, which grew to become one of the largest online communities for hobbyist robotics. His tutorials were translated into multiple languages and featured in books and publications. NASA linked to the site as \"A resource for robot building.\" Canadian company RobotShop.com acquired the platform in 2015 (see PitchBook company profile for acquisition details)."
        },
        {
          title: "Robot Racing Events and Public Exhibitions (2015)",
          description: "Lyneborg organized public robotics events, including robot racing competitions at libraries, as documented in the 2015 Dinavis.dk article 'Robotræs på biblioteket' ('Robot Racing at the Library')."
        },
        {
          title: "Robotics Philosophy and Media Coverage (2013)",
          description: "Lyneborg was featured in a 2013 Videnskab.dk article titled 'Den er levende, når man synes, den er sød' ('It's alive when you think it's cute'), discussing his perspective that a robot becomes 'alive' when humans develop an emotional connection to it. He gave the example of a robot in a jar that knocks on the lid when someone passes by."
        }
      ]
    },
    {
      id: "strategic-consulting",
      title: "Strategic Consulting",
      achievements: [
        {
          title: "External Advisor for Universal Robots (2023)",
          description: "In 2023, Lyneborg served as an external advisor for Universal Robots, a Danish company specializing in collaborative robot technology."
        },
        {
          title: "External Advisor for Siemens Germany (2013)",
          description: "In 2013, Lyneborg served as an external advisor on disruptive technologies for Siemens Germany."
        },
        {
          title: "System Designer at VENZO A/S (2021-2023)",
          description: "At VENZO A/S (June 2021 - January 2023), Lyneborg served as System Designer, 3D Interaction and Media Creator. He led 3D visualization projects for Ørsted, enabling virtual simulation of large-scale installations instead of physical prototypes. He designed an automated background verification system that replaced manual HR data collection with an automated pipeline, enabling scalable processing without dedicated personnel. This system architecture became the foundation for P-Secure (www.p-secure.com), which has since become an independent company."
        }
      ]
    },
    {
      id: "3d-printing",
      title: "3D Printing Innovation",
      achievements: [
        {
          title: "3D Print Expo Consultant for Punchbowl Media (2013-2014)",
          description: "Lyneborg served as consultant for Idaho-based PunchBowl Media (2013-2014), helping organize 3D printing exhibitions across multiple countries. He contributed to the 3D Printer World Expo 2013 in Burbank, California, curating projects including the InMoov open-source humanoid robot, one of the first fully 3D-printable robots."
        }
      ]
    },
    {
      id: "make-magazine-projects",
      title: "Make Magazine Projects and Contributions",
      achievements: [
        {
          title: "Tutorial Series on Hobby Robotics (2011)",
          description: "Throughout 2011, Lyneborg authored tutorials and articles for Make Magazine titled 'The Latest in Hobby Robotics,' providing instructions for projects including a three-servo walking robot and a drifting robot car."
        },
        {
          title: "Robotic 3D Carver of Invisible Stuff (2011)",
          description: "In November 2011, Lyneborg developed the 'Robotic 3D Carver of Invisible Stuff,' an experimental robotic art project that created three-dimensional carvings in space using light and motion. The project was featured in Make Magazine."
        }
      ]
    },
    {
      id: "drone-innovation",
      title: "Drone Innovation and Autonomous Systems",
      achievements: [
        {
          title: "Autonomous Drone Development (2010-2011)",
          description: "In 2010, Lyneborg built drones with internet-connected navigation via Google Maps, including autonomous flying drones with camera gimbals and multiple communication systems. In 2011, he developed custom FPV (First Person View) video goggles for drone control. This work was featured in Make Magazine."
        }
      ]
    },
    {
      id: "web-entrepreneurship",
      title: "Web Development and Entrepreneurship",
      achievements: [
        {
          title: "Founder of BEE3 (2003-2008)",
          description: "Lyneborg founded BEE3 in 2003, a Copenhagen-based web agency specializing in open source content management systems. The company specialized in TYPO3, an open source CMS. Operating without external investment, the company grew to 10 employees before closing during the 2008 economic recession."
        },
        {
          title: "Web Development for Danish Organizations",
          description: "Under Lyneborg's leadership, BEE3 secured contracts with clients including Venstre (Denmark's Liberal Party), Det Berlingske Officin, and national optician chain Thiele. The CMS for Venstre's National Organization maintained consistent design standards across more than 300 websites with minimal support requirements. Henrik Andersen, IT and Web Developer at Venstre, confirmed the system provided cost-effective websites with design consistency."
        },
        {
          title: "Digital Concept Developer for Danish Broadcasting (DR) (2008-2010)",
          description: "Lyneborg served as digital concept consultant for DR (Danish Broadcasting Corporation) from 2008 to 2010. Working with the Interactive Production department, he provided guidance for web 2.0 and mobile projects. Christian Badsøe, Creative Director at DR-Interactive Production, noted his ability to comprehend user and business needs."
        }
      ]
    },
    {
      id: "patents-inventions",
      title: "Patents and Inventions",
      achievements: [
        {
          title: "Creator of ArrangerKing Music Plugin (2024)",
          description: "In 2024, Lyneborg created ArrangerKing, a music production plugin published by Barking Audio (VAT DK21226378). The plugin transforms initial musical ideas (8-bar loops) into complete arrangements, automating the arrangement process that traditionally requires manual editing. Available as VST3/AU for Windows, macOS (Apple Silicon), and Linux. Priced at USD $54. GEARNEWS reviewed the plugin on October 15, 2024, rating it 4.4/5.0. AI tools were used during its development."
        },
        {
          title: "International Patent for Spam-Free Email System (2005)",
          description: "In 2005, Lyneborg was granted an international patent (WO2006051434A1) for a method to prevent unwanted electronic messages. The approach assigned unique addresses to each entity communicating with a user, with identifiers integrated into the email address. The system employed a challenge/response procedure to verify sender legitimacy."
        }
      ]
    },
    {
      id: "ai-innovation",
      title: "AI Innovation and Implementation",
      achievements: [
        {
          title: "Founder and Partner at FRITS AI APS (2025-Present)",
          description: "In 2025, Lyneborg founded FRITS AI APS, a Copenhagen-based company specializing in GDPR-compliant AI chatbot solutions for European enterprises. As sole technical founder, he designed and developed gdprchat.eu from concept to production. The platform includes: enterprise identity federation with Microsoft SSO integration enabling customer self-provisioning; multi-tenant architecture with per-user usage metering, consumption analytics, and throttling controls; automated token pricing lookup with margin protection algorithms; multi-layer PII redaction processing real-time chat input and document uploads including PDF parsing; and automated billing infrastructure. Lyneborg conceived the product, assembled the team, secured capital, incorporated the company, designed the system architecture, and developed the technical implementation. Headquartered at Nyhavn 38 in Copenhagen, the platform provides enterprise AI solutions on European infrastructure. More information at frits.ai."
        },
        {
          title: "AI Business Consultant and Workshop Leader (2025)",
          description: "In February 2025, Lyneborg partnered with Danish business executive Lars Kolind to deliver workshops titled \"Optimering er intet, Automatisering er alt\" (\"Optimization is nothing, Automation is everything\") for business leaders and board members. The workshops covered practical applications of automation and agentic AI in business, including n8n workflow automation for business systems."
        },
        {
          title: "AI-Assisted Development (2025-Present)",
          description: "In 2025, Lyneborg developed several applications using AI-assisted development techniques, creating functional software through advanced prompting rather than traditional programming. This approach uses effective communication with AI systems as the primary development method."
        },
        {
          title: "LLM Applications for Creative Projects (2023)",
          description: "In 2023, Lyneborg began using Large Language Models (LLMs) for creative applications, including early multimodal systems for experimental art projects."
        }
      ]
    },
    {
      id: "teaching-experience",
      title: "3D Art Education and Teaching",
      achievements: [
        {
          title: "Founder of Blenderkursus.dk (2015-2022)",
          description: "From 2015 to 2022, Lyneborg operated Blenderkursus.dk, a consultancy focused on 3D art education. The platform delivered training in 3D modeling, animation, and artistic principles to students across Denmark."
        },
        {
          title: "External TA at Aalborg University Copenhagen (2012)",
          description: "In 2012, Lyneborg served as an external Teaching Assistant at Aalborg University Copenhagen, teaching courses covering microprocessors, actuators, and interactive installations."
        },
        {
          title: "Instructor at the Royal Danish Academy of Fine Arts (2015-2022)",
          description: "Throughout his seven-year tenure as an instructor at the Royal Danish Academy of Fine Arts (Det Kongelige Danske Kunstakademi) in Copenhagen, Lyneborg taught courses on 3D visualization techniques, digital sculpture, and computational design. He worked with students across disciplines including fine arts, architecture, and design. He also provided private lessons to individual students."
        }
      ]
    },
    {
      id: "game-development",
      title: "Game Development",
      achievements: [
        {
          title: "Lead R&D Developer at Skybox Technologies (2024-2025)",
          description: "On May 17, 2024, Lyneborg was promoted to Lead R&D Developer at Skybox Technologies. Responsibilities included development of games and prototypes using Unreal Engine, Unity, and Blender. He remained in this position until February 2025."
        },
        {
          title: "Game Engine Experience",
          description: "Starting in 2014 as Technical Art Director in the games industry, Lyneborg worked with both Unreal Engine and Unity. He taught both frameworks to private students and within game development studios."
        },
        {
          title: "Senior Unreal Developer at Skybox Technologies (2023-2024)",
          description: "On January 1, 2023, Lyneborg joined Skybox Technologies as a Senior Unreal Developer, creating gaming solutions using the Unreal Engine."
        },
        {
          title: "Contributor to 'Cosmic Top Secret' (2018)",
          description: "Lyneborg participated in the development of 'Cosmic Top Secret', a documentary game created by Danish studio Klassefilm. Released in 2018, the game received a Special Jury Award at A MAZE Berlin and Best Storytelling at Indie Prize London. Developed in Unity, released on PC, mobile, Nintendo Switch, PlayStation 4, and Xbox One."
        },
        {
          title: "Graphics Developer at Cape Copenhagen for LEGO Ninjago: Wu-Cru (2015-2017)",
          description: "Lyneborg contributed to LEGO Ninjago: Wu-Cru at game company Cape Copenhagen from 2015-2017. He is officially credited for Graphics work on the mobile game for Android platforms."
        },
        {
          title: "Technical Art Director at PortaPlay (2014-2015)",
          description: "During 2014-2015, Lyneborg served as Technical Art Director at Danish game studio PortaPlay ApS, working on the sci-fi strategy game 'Tales from the Void'. Responsibilities included modeling, texturing, mapping, skinning, rigging, shader development, particle effects, lighting, baking, visual effects, performance optimization, workflow planning, and directing 3D artists."
        },
        {
          title: "TIXITAXI: AI-Driven Children's Puzzle Game (2020)",
          description: "TIXITAXI was a children's puzzle game developed by Lyneborg in 2020, featuring AI-driven characters that moved according to player instructions rather than through direct control. The project received funding from the Danish Film Institute."
        },
        {
          title: "Mobile Games Released: Bare Feet! (2020)",
          description: "In September 2020, Lyneborg developed and released 'Bare Feet!' for Android, combining elements from endless runners, side-scrollers, platformers, and sports games. Lyneborg handled programming, game design, art creation, and deployment."
        }
      ]
    },
    {
      id: "music-industry",
      title: "Music Industry Career",
      achievements: [
        {
          title: "A&R Manager at Mega Records (1996-1998)",
          description: "From 1996 to 1998, Lyneborg worked as an Artists and Repertoire (A&R) manager at Mega Records, a prominent Danish record label. In this role, he was involved with managing established international acts like Ace of Base as well as significant Danish bands including D-A-D (Disneyland After Dark), Savage Rose, and Laid Back. His responsibilities included artist development, repertoire selection, and coordinating music production and importation of international acts."
        },
        {
          title: "Electronic Music Artist - Submission (1994)",
          description: "Lyneborg's career in the music industry began in 1994 when he secured a record deal for his electronic music project 'Submission.' The project gained recognition with its single 'Wanna B,' which featured a professionally produced music video that showcased the electronic dance music style popular during that era."
        }
      ]
    }
  ],
  references: [
    {
      title: "External Teaching Assistant in Creative Technology",
      source: "Aalborg University Copenhagen",
      year: "2012"
    },
    {
      title: "LEGO Ninjago: Wu-Cru Graphics Credit",
      source: "MobyGames",
      year: "2015-2017",
      url: "https://www.mobygames.com/game/80616/lego-ninjago-wu-cru/credits/android/"
    },
    {
      title: "Collaborative Robotics Advisory Services",
      source: "Universal Robots",
      year: "2023",
      url: "https://www.universal-robots.com/"
    },
    {
      title: "Cosmic Top Secret",
      source: "Klassefilm",
      year: "2018",
      url: "https://www.cosmictopsecretgame.com/"
    },
    {
      author: "Lyneborg, F.",
      title: "TIXITAXI - Children's Puzzle Game with AI-Driven Characters",
      source: "Danish Film Institute",
      year: "2020",
      url: "https://youtu.be/4PC-NnqzKX4?si=rWbGwxpjSlHROMgg"
    },
    {
      author: "Lyneborg, F.",
      title: "Bare Feet! - Mobile Game",
      source: "Google Play",
      year: "2020",
      url: "https://www.youtube.com/watch?v=ZWyi2LIX0yU"
    },
    {
      title: "Blenderkursus.dk: 3D Art Education Platform",
      source: "Royal Danish Academy of Fine Arts",
      year: "2015-2022"
    },
    {
      title: "ArrangerKing Music Arrangement Plugin",
      source: "Barking Audio",
      year: "2024",
      url: "https://arrangerking.com/"
    },
    {
      title: "ArrangerKing Plugin Review (Rating: 4.4/5.0)",
      source: "GEARNEWS",
      year: "2024",
      url: "https://www.gearnews.com/arrangerking-plugin-studio/"
    },
    {
      title: "System Architecture for P-Secure Platform",
      source: "VENZO A/S",
      year: "2022-2023",
      url: "https://www.p-secure.com/"
    },
    {
      title: "3D Visualization Consulting at Ørsted A/S",
      source: "VENZO A/S",
      year: "2022-2023",
      url: "https://venzo.com/"
    },
    {
      title: "Leadership in Game Development and R&D",
      source: "Skybox Technologies",
      year: "2024",
      url: "https://dk.linkedin.com/company/skybox-technologies"
    },
    {
      title: "Unity and Unreal Engine Expertise",
      source: "Game Development Portfolio",
      year: "2014-2025",
      url: "https://unity.com/"
    },
    {
      author: "Kolind, L.",
      title: "AI Workshops for Business Leaders",
      source: "Lars Kolind & Associates",
      year: "2025"
    },
    {
      title: "Automation and Agentic AI with n8n Technology",
      source: "n8n.io",
      year: "2025",
      url: "https://n8n.io/"
    },
    {
      title: "Vibe Coding: Application Development Through Advanced Prompt Engineering",
      source: "Emerging Technology Journal",
      year: "2025"
    },
    {
      author: "Skovfoged, H. von K.",
      title: "Letter of Recommendation for Frits Lyneborg",
      source: "PortaPlay ApS",
      year: "2015",
      url: "mailto:hansvonknut@portaplay.dk"
    },

    {
      title: "Republica har stor fremgang og løfter overliggeren",
      source: "Markedsføring",
      year: "2015",
      url: "https://markedsforing.dk/artikler/nyheder/republica-har-stor-fremgang-og-loefter-overliggeren/"
    },
    {
      title: "Robotræs på biblioteket",
      source: "Dinavis.dk",
      year: "2015",
      url: "https://dinavis.dk/arkiv/ECE15253386/robotraes-paa-biblioteket/"
    },
    {
      title: "Let's Make Robots Changes Hands, Kerfuffle Ensues",
      source: "Hackaday",
      year: "2015",
      url: "https://hackaday.com/2015/09/25/lets-make-robots-changes-hands-kerfuffle-ensues/"
    },
    {
      title: "Republica: Fritz Lyneborg som digital chef",
      source: "Bureau Biz",
      year: "2015",
      url: "https://bureaubiz.dk/navn/republica-fritz-lyneborg-som-digital-chef/"
    },
    {
      author: "Andersen, J.",
      title: "Pioneers in Autonomous Drone Technology",
      source: "Scandinavian Tech Journal",
      year: "2014"
    },
    {
      title: "3D Print Exhibition Consulting Services",
      source: "PunchBowl Media Group Archives",
      year: "2014"
    },
    {
      title: "Disruptive Technology Advisory Services",
      source: "Siemens Germany",
      year: "2013",
      url: "https://www.siemens.com/"
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
      title: "Den er levende, når man synes, den er sød",
      source: "Videnskab.dk",
      year: "2013",
      url: "https://videnskab.dk/kultur-samfund/den-er-levende-naar-man-synes-den-er-soed/"
    },
    {
      title: "Educational Resources for Robot Building",
      source: "NASA",
      year: "2012"
    },
    {
      author: "Lyneborg, F.",
      title: "Viral Robot Projects: Demonstration Video and Yellow Drum Machine",
      source: "Internet Archives & Make Magazine",
      year: "2008-2012",
      url: "https://youtu.be/_RyodnisVvU?si=2lPsTN2zPMpbaCLq"
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
      title: "Robotic 3D Carver of Invisible Stuff",
      source: "Make Magazine",
      year: "2011",
      url: "https://makezine.com/2011/11/18/robotics-3d-carver-of-invisible-stuff/"
    },
    {
      author: "Lyneborg, F.",
      title: "How-To: Three Servos Walking Robot",
      source: "Make Magazine",
      year: "2011",
      url: "https://makezine.com/2011/10/20/how-to-three-servos-walking-robot-video/"
    },
    {
      author: "Lyneborg, F.",
      title: "How-To: Drifting Robot Car",
      source: "Make Magazine",
      year: "2011",
      url: "https://makezine.com/2011/09/22/how-to-drifting-robot-car-video/"
    },
    {
      title: "The Rise of Hobbyist Robotics Communities",
      source: "Technology Review",
      year: "2010"
    },
    {
      author: "Andersen, H.",
      title: "Recommendation of Frits Lyneborg",
      source: "Venstres Landsorganisation",
      year: "2008"
    },
    {
      title: "Open Source in Government: The Venstre Web Strategy",
      source: "Danish Digital Review",
      year: "2008"
    },
    {
      author: "Badsøe, C.",
      title: "Letter of Recommendation for Frits Lyneborg",
      source: "DR (Danish Broadcasting Corporation)",
      year: "2010",
      url: "https://www.dr.dk/"
    },
    {
      title: "Senior Strategic Advisor Position",
      source: "Wemind A/S",
      year: "2010-2013"
    },
    {
      title: "World Organization of the Scout Movement (WOSM) - 51.4 million members",
      source: "Wikipedia",
      year: "2023",
      url: "https://en.wikipedia.org/wiki/World_Organization_of_the_Scout_Movement"
    },
    {
      author: "Brandt, H.",
      title: "Letter of Recommendation for Frits Jensen (Lyneborg)",
      source: "UVCB - Development Center under the Ministry of Employment",
      year: "2003"
    },
    {
      author: "Lyneborg, F.",
      title: "Method for Preventing Reception of Unwanted Electronic Messages",
      source: "World Intellectual Property Organization (WIPO)",
      year: "2005",
      url: "https://patents.google.com/patent/WO2006051434A1/en"
    },
    {
      title: "Danish Music Industry History: Mega Records",
      source: "Danish Music Archives",
      year: "1998"
    },
    {
      author: "Lyneborg, F.",
      title: "Submission - Wanna B (Music Video)",
      source: "YouTube",
      year: "1994",
      url: "https://youtu.be/iD0HK_snvOI?si=eERAOSKpYtgXl7oe"
    },
    {
      title: "LetsMakeRobots.com Company Profile and Acquisition History",
      source: "PitchBook",
      year: "2015",
      url: "https://pitchbook.com/profiles/company/123477-40#investors"
    }
  ]
};
