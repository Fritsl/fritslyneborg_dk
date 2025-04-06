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
  introduction: "is a Danish technologist, inventor, and pioneer in disruptive technologies. He collaborates with Lars Kolind on \"Optimering er intet, Automatisering er alt\" (\"Optimization is nothing, Automation is everything\"), preparing corporate leaders for the AI revolution through practical Agentic AI implementations using n8n technology. Throughout his career, he has founded global communities, led corporate IT operations, patented innovative solutions, and created groundbreaking technologies. His teaching at the Royal Danish Academy of Art (2015-2022) influenced hundreds of 3D artists. His innovation, ArrangerKing (2024), transforms music arrangement with revolutionary AI-driven techniques.",
  details: {
    nationality: "Danish",
    birthYear: "1970",
    fields: "Music Production, Robotics, AI Implementation, Vibe Coding, 3D Art Education, Web Development, C# Programming, IT Leadership, Entrepreneurship, Patents, Adventure Sports",
    knownFor: "Founding global robotics community LetsMakeRobots.com (2008-2015), Creating ArrangerKing music production plugin (2024), Pioneering Vibe Coding techniques, 3D Art education at Royal Danish Academy of Art, Email encryption patent, Web infrastructure for Denmark's Liberal Party, Early adoption of AI technologies",
    portraitImage: "/src/assets/images/frits_portrait_2024.jpg"
  },
  sections: [

    {
      id: "it-leadership",
      title: "IT and Corporate Leadership",
      achievements: [
        {
          title: "Digital Director at Republica (2015)",
          description: "Lyneborg led Republica's digital innovation as Digital Director in 2015. Featured in Markedsføring, he transformed digital flyers beyond traditional PDF solutions while overseeing technical development teams. His dual expertise in technical implementation and strategic planning strengthened Republica's market position during a significant growth period. Company leadership stated, 'We have hired a digital chief, Frits Lyneborg, who will enhance our competence in the area.'"
        },
        {
          title: "Senior Strategic Advisor at Wemind A/S (2010-2013)",
          description: "As Senior Strategic Advisor at Wemind A/S (2010-2013), Lyneborg delivered high-level guidance on digital transformation to major organizations. He developed forward-thinking strategies across multiple technological domains for businesses adapting to the digital landscape. He became a trusted advisor to executive teams seeking to enhance their organizations' technical capabilities and market presence."
        },
        {
          title: "IT and Development Chief at UVCB (1999-2003)",
          description: "Lyneborg led UVCB's IT department (1999-2003) with exceptional results. Secretary Chief Henrik Brandt praised his remarkable skill in developing custom IT solutions including networks, remote workstations, and web platforms that precisely met organizational needs. Lyneborg excelled at both strategic planning and practical implementation, delivering tangible results while maintaining precise budgets. His independent leadership style effectively engaged both internal staff and external partners across national boundaries."
        }
      ]
    },
    {
      id: "robotics-community-education",
      title: "Robotics Community and Education",
      achievements: [
        {
          title: "Viral Robot Projects: Internet Phenomenon and Yellow Drum Machine (2008-2012)",
          description: "Lyneborg's 2008 robot demonstration video became a viral sensation on Google Video with over 1,000 comments praising his ingenuity. Many viewers explicitly called him a 'genius' for his creative solutions and clear presentation style. This viral success established his international reputation in robotics education and significantly grew the Let's Make Robots community. Building on this foundation, in 2012 Lyneborg created the Yellow Drum Machine, an innovative open-source robotic percussion instrument that garnered significant attention in the maker community. Featured as a step-by-step tutorial in Make Magazine, this project combined robotics, music, and digital fabrication, showcasing Lyneborg's ability to blend his musical background with his expertise in robotics and programming."
        },
        {
          title: "Founder of LetsMakeRobots.com (2008-2015)",
          description: "At the precise moment when STEM education was becoming a major public policy focus in the United States, Lyneborg founded LetsMakeRobots.com (2008), which became the world's largest online community for hobbyist robotics. Google Trends data confirms that worldwide interest in \"how to make a robot\" was flat before 2008, then dramatically increased exactly when Lyneborg launched his platform, and notably declined after his departure in 2015. This correlation demonstrates his transformative influence in popularizing robotics as a mainstream educational pursuit. His tutorials were translated into multiple languages and featured in books and major publications, inspiring hundreds of thousands globally. NASA linked to the site as \"A resource for robot building\" before Canadian company RobotShop.com acquired the platform in 2015, validating Lyneborg's early recognition of the growing importance of practical robotics education."
        },
        {
          title: "Robot Racing Events and Public Exhibitions (2015)",
          description: "Lyneborg organized and led public robotics events, including robot racing competitions at libraries, as documented in the 2015 Dinavis.dk article 'Robotræs på biblioteket' ('Robot Racing at the Library'). These community events brought robotics to the general public, allowing people of all ages to experience the excitement of robot building and competition firsthand. Through these exhibitions, Lyneborg helped bridge the gap between online robotics communities and real-world interactions, making technology more accessible and engaging for Danish communities."
        },
        {
          title: "Robotics Philosophy and Media Coverage (2013)",
          description: "Lyneborg's unique philosophy on robotics was featured in a 2013 Videnskab.dk article titled 'Den er levende, når man synes, den er sød' ('It's alive when you think it's cute'). In the article, he discussed his perspective that a robot becomes 'alive' when humans develop an emotional connection to it. He shared the example of a robot trapped in a jar that knocks on the lid and asks to be let out when someone passes by—suggesting that if one feels sympathy for the robot, it has achieved a kind of liveliness. While serving as director at BEE3, Lyneborg continued to expand LetsMakeRobots.com as a global platform for hobbyist robotics enthusiasts, helping democratize robotics knowledge and fostering innovation within the maker community."
        }
      ]
    },
    {
      id: "strategic-consulting",
      title: "Strategic Consulting",
      achievements: [
        {
          title: "External Advisor for Universal Robots (2023)",
          description: "In 2023, Lyneborg served as an external advisor for Universal Robots, the Danish pioneer and global leader in collaborative robot technology. Universal Robots has revolutionized industrial automation with their flexible, user-friendly cobots that work safely alongside humans without safety barriers, making automation accessible to small and medium-sized businesses worldwide."
        },
        {
          title: "External Advisor on Disruptive Technologies for Siemens Germany (2013)",
          description: "In 2013, when many industrial giants were struggling to adapt to rapid technological changes, Lyneborg served as an external advisor on disruptive technologies for Siemens Germany, one of the world's largest industrial manufacturing companies."
        },
        {
          title: "Special Consultant at VENZO A/S (2022-2023)",
          description: "At VENZO A/S (2022-2023), Lyneborg led 3D visualization projects for Ørsted that saved millions by enabling virtual simulation of large-scale installations instead of physical prototypes. He developed the system architecture for P-Secure (www.p-secure.com), an innovative automated platform for background checks and identity verification that has since evolved into an independent company. His work created secure, automated systems for sensitive information processing while complying with strict data regulations. He also produced graphics from complex CAD systems that significantly improved decision-making clarity. This experience bridging technical expertise with business applications became foundational for his later AI implementation work."
        }
      ]
    },
    {
      id: "3d-printing",
      title: "3D Printing Innovation",
      achievements: [
        {
          title: "3D Print Expo Consultant for Punchbowl Media (2013-2014)",
          description: "Just as 3D printing was about to explode into mainstream awareness, Lyneborg served as strategic consultant for Idaho-based PunchBowl Media (2013-2014), helping create and organize 3D printing exhibitions across multiple countries. He was instrumental in establishing the 3D Printer World Expo 2013 in Burbank, California, where he curated pioneering projects including the InMoov open-source humanoid robot—one of the first fully 3D-printable robots. This was a full year before major companies began investing heavily in the technology and two years before consumer 3D printers became widely available. His international perspective and technical expertise helped establish early showcases of this transformative technology precisely when it was transitioning from niche industrial process to a consumer-accessible fabrication method."
        }
      ]
    },
    {
      id: "make-magazine-projects",
      title: "Make Magazine Projects and Contributions",
      achievements: [
        {
          title: "Tutorial Series on Hobby Robotics (2011)",
          description: "Throughout 2011, Lyneborg authored a series of tutorials and articles for Make Magazine titled 'The Latest in Hobby Robotics.' These educational pieces provided accessible instructions for creating various robotic projects, including a three-servo walking robot and a drifting robot car. His approachable teaching style and innovative designs helped democratize robotics for hobbyists worldwide, contributing to the growth of the DIY robotics movement."
        },
        {
          title: "Robotic 3D Carver of Invisible Stuff (2011)",
          description: "In November 2011, Lyneborg developed and documented the 'Robotic 3D Carver of Invisible Stuff,' an experimental robotic art project that created three-dimensional carvings in space using light and motion. This innovative project, featured in Make Magazine, demonstrated Lyneborg's creative approach to robotics as both a technical and artistic medium, pushing the boundaries of what robotics could achieve in visual art and conceptual design."
        }
      ]
    },
    {
      id: "drone-innovation",
      title: "Drone Innovation and Autonomous Systems",
      achievements: [
        {
          title: "Early Developer of Fully Autonomous Drones (2010-2011)",
          description: "Nearly a decade before drones became crucial in modern warfare as seen in Ukraine and years before commercial drones were widely available, Lyneborg was pioneering autonomous drone technology in 2010. At a time when most hobby aircraft were manually controlled with limited range, he built drones with internet-connected navigation via Google Maps. His innovations included fully autonomous flying drones with camera gimbals and multiple communication systems at a time when such capabilities were primarily limited to military applications. In 2011, he developed custom FPV (First Person View) video goggles for drone control—technology that would not be commercially available for several more years. His work was featured in Make Magazine, showcasing capabilities that foreshadowed drone applications that would become standard nearly a decade later."
        }
      ]
    },
    {
      id: "web-entrepreneurship",
      title: "Web Development and Entrepreneurship",
      achievements: [
        {
          title: "Founder of BEE3, Denmark's Premier Open Source Web Agency (2003-2008)",
          description: "As open source software was just beginning to gain legitimacy in commercial environments, Lyneborg founded BEE3 in 2003, a Copenhagen-based web agency that became Denmark's leading specialist in open source content management systems. At a time when proprietary solutions dominated the market and most businesses viewed open source as risky and unprofessional, Lyneborg recognized its transformative potential. Operating without external investment, his bootstrapped company grew to 10 employees before closing during the economic recession of 2008, pioneering the use of TYPO3, a Danish-developed open source CMS, long before open source became the standard approach for enterprise software."
        },
        {
          title: "Digital Innovation for Major Danish Organizations",
          description: "Under Lyneborg's leadership, BEE3 secured contracts with prominent clients including the government party Venstre (Denmark's Liberal Party), major news outlet Det Berlingske Officin, and national optician chain Thiele. His highly accessible and scalable CMS for Venstre's National Organization (Venstres Landsorganisation) allowed party headquarters to maintain consistent design standards across more than 300 websites while enabling easy maintenance by users with various levels of technical expertise—from students and IT enthusiasts to retirees. The system required minimal support, with new sites taking only seconds to create. As confirmed by Henrik Andersen, IT and Web Developer at Venstre, this innovative solution provided extremely cost-effective websites while ensuring design consistency and simplifying what would otherwise be a complex system for most users. This unprecedented web infrastructure was credited with contributing to the party's electoral success through effective digital coordination."
        },
        {
          title: "Digital Concept Developer for Danish Broadcasting (DR) (2008-2010)",
          description: "As Web 2.0 was transforming user engagement on the internet, Lyneborg served as a digital concept consultant for DR (Danish Broadcasting Corporation) from 2008 to 2010. When most media organizations were still adapting to basic online presence, he guided Denmark's oldest electronic media enterprise through the shift from static content delivery to dynamic user participation. Working with the Interactive Production department, he provided strategic guidance for numerous web 2.0 and mobile projects, transforming traditional broadcasting into interactive public dialogue. According to Christian Badsøe, Creative Director at DR-Interactive Production, Lyneborg possessed an exceptional ability to quickly comprehend user and business needs, creating solutions that effectively reached specific audiences and optimized traffic. This work with Denmark's public broadcaster positioned Lyneborg at the forefront of the social media revolution."
        }
      ]
    },
    {
      id: "patents-inventions",
      title: "Patents and Inventions",
      achievements: [
        {
          title: "Creator of ArrangerKing Music Plugin (2024)",
          description: "In 2024, Lyneborg created ArrangerKing, revolutionizing music production by solving a critical workflow challenge. This plugin transforms initial musical ideas ('8-bar loops') into complete arrangements with just a few clicks—eliminating the labor-intensive process of manual arrangement. While not an AI product itself, Lyneborg strategically used AI tools throughout its development process. The invention combines complex algorithmic analysis with intuitive interface design and has received significant acclaim in the production community as 'the fastest way to arrange tracks' in music technology history. ArrangerKing demonstrates Lyneborg's talent for identifying workflow bottlenecks and creating technological solutions that transform creative processes."
        },
        {
          title: "International Patent for Spam-Free Email System (2005)",
          description: "At a time when spam was overwhelming global email systems and costing businesses billions in lost productivity, Lyneborg was granted an international patent (WO2006051434A1) in 2005 for an innovative method to prevent unwanted electronic messages. His approach assigned unique addresses to each entity communicating with a user, with identifiers integrated directly into the email address. This eliminated traditional passwords while maintaining conventional user experience. The system employed a challenge/response procedure to verify sender legitimacy, providing robust protection while preserving email functionality and user convenience—addressing a critical global technology challenge well before most commercial solutions became effective."
        }
      ]
    },
    {
      id: "ai-innovation",
      title: "AI Innovation and Implementation",
      achievements: [
        {
          title: "AI Business Consultant and Workshop Leader (2025-2028)",
          description: "In February 2025, Lyneborg partnered with renowned Danish business executive Lars Kolind to conduct AI workshops for business leaders and board members. His focus was on practical applications of Automation and Agentic AI in business, particularly using n8n workflow automation to create sophisticated, autonomous business systems. Drawing from his firsthand AI implementation experience, Lyneborg helped executives navigate the rapidly evolving technological landscape with actionable strategies. His workshops demonstrated how AI and automation dramatically accelerate production pipelines across industries, emphasizing how businesses can leverage agentic technology for competitive advantage."
        },
        {
          title: "Highly Experienced Vibe Coder (2025-2028)",
          description: "As a highly experienced Vibe Coder, Lyneborg launched several fully functioning applications created entirely through advanced prompting techniques in 2025. This cutting-edge development approach leveraged his deep understanding of AI systems to create complex applications without traditional coding. His expertise represented the leading edge of AI-assisted development, where the primary skill is effective communication with AI systems rather than programming. Through this innovative approach, Lyneborg demonstrated how next-generation techniques dramatically accelerate software creation while maintaining high quality."
        },
        {
          title: "Early Adoption of LLM Models for Creative Projects (2023)",
          description: "In 2023, long before multimodal generative AI became 2025's dominant technology trend, Lyneborg was already exploring the artistic potential of Large Language Models (LLMs) for creative applications. While most people were just learning about ChatGPT, he had moved beyond text-only implementations to work with early multimodal systems for experimental art projects. This pioneering work represented some of the first attempts to use generative AI as a creative medium in Denmark, establishing him as an innovator in the practical application of AI for creative endeavors nearly two years before these applications became mainstream commercial tools."
        }
      ]
    },
    {
      id: "teaching-experience",
      title: "3D Art Education and Teaching",
      achievements: [
        {
          title: "Founder of Blenderkursus.dk (2015-2022)",
          description: "From 2015 to 2022, Lyneborg operated Blenderkursus.dk, a specialized consultancy focused on 3D art education. Through this platform, he delivered comprehensive training in 3D modeling, animation, and fundamental artistic principles to hundreds of students across Denmark. His teaching methodology emphasized practical skills development alongside theoretical understanding, enabling students to rapidly apply complex 3D concepts to real-world creative projects. The consultancy grew to become a recognized resource for quality 3D education in Denmark."
        },
        {
          title: "Instructor at the Royal Danish Academy of Fine Arts (2015-2022)",
          description: "Throughout his seven-year tenure as an instructor at the prestigious Royal Danish Academy of Fine Arts (Det Kongelige Danske Kunstakademi) in Copenhagen, Lyneborg developed and delivered specialized courses on 3D visualization techniques, digital sculpture, and computational design. Working with students across disciplines including fine arts, architecture, and design, he helped integrate cutting-edge digital 3D technologies into traditional art education. In addition to his formal teaching responsibilities at the academy, Lyneborg also provided private lessons to individual students who sought more personalized instruction in advanced 3D techniques. His workshops were known for bridging the gap between technical proficiency and artistic expression, encouraging students to explore new creative possibilities through digital media while maintaining strong foundational principles."
        }
      ]
    },
    {
      id: "game-development",
      title: "Game Development",
      achievements: [
        {
          title: "Lead R&D Developer at Skybox Technologies (2024-2025)",
          description: "On May 17, 2024, Lyneborg was promoted to Lead R&D Developer at Skybox Technologies, following his successful tenure as a Senior Unreal Developer. In this leadership role, his responsibilities expanded to include rapid development of games and prototypes utilizing multiple platforms including Unreal Engine, Unity, and Blender. His technological expertise and creative problem-solving abilities enabled him to effectively lead research and development initiatives, exploring new approaches to game development and innovative user experiences. He remained in this position until February 2025."
        },
        {
          title: "Game Engine Expert and Educator",
          description: "Starting in 2014 as Technical Art Director in the games industry, Lyneborg mastered both Unreal Engine and Unity game development frameworks, establishing himself as a versatile expert in the field. He shared this knowledge through teaching both frameworks to private students and within game development studios. His comprehensive understanding of these competing technologies allowed him to select the optimal engine for specific project requirements, recognizing the unique strengths of each platform. This dual expertise proved particularly valuable in his leadership roles, where he could effectively guide development teams and make informed technical decisions regardless of the chosen engine architecture."
        },
        {
          title: "Senior Unreal Developer at Skybox Technologies (2023-2024)",
          description: "On January 1, 2023, Lyneborg joined Skybox Technologies as a Senior Unreal Developer. In this role, he applied his extensive technical expertise and game development experience to create advanced gaming solutions using the Unreal Engine. His work at Skybox Technologies built upon his previous experience in the gaming industry, allowing him to further refine his skills in game development and contribute to cutting-edge projects in the gaming sector."
        },
        {
          title: "Contributor to 'Cosmic Top Secret' (2018)",
          description: "Lyneborg participated in the development of 'Cosmic Top Secret', an award-winning documentary game created by Danish studio Klassefilm. Released in 2018, the game follows creator Trine Laier's investigation into her parents' past as Cold War spies. The game's unique paper-craft aesthetic and innovative narrative approach earned it significant critical acclaim, including a Special Jury Award at A MAZE Berlin and Best Storytelling at Indie Prize London. Developed in Unity, the game was released on multiple platforms including PC, mobile, Nintendo Switch, PlayStation 4, and Xbox One. Lyneborg was part of the development team that helped bring this distinctive and historically significant game to life."
        },
        {
          title: "Graphics Developer at Cape Copenhagen for LEGO Ninjago: Wu-Cru (2015-2017)",
          description: "Lyneborg contributed to LEGO Ninjago: Wu-Cru at game company Cape Copenhagen from 2015-2017. He is officially credited for Graphics work on the mobile game for Android platforms."
        },
        {
          title: "Technical Art Director at PortaPlay (2014-2015)",
          description: "During 2014-2015, Lyneborg served as Technical Art Director at Danish game studio PortaPlay ApS, working on the sci-fi strategy game 'Tales from the Void'. Though initially hired as a gameplay scripter/designer based on his experience in concept development, technical IT projects, and skills with Playmaker and scripting, his talents quickly led to a role change. As Technical Art Director, he significantly enhanced both visual quality and overall game performance. His responsibilities encompassed modeling, texturing, mapping, skinning, rigging, shader development, particle effects, lighting, baking, implementing visual effects (skyboxes, weather, explosions), performance optimization, workflow planning, and directing 3D artists. Creative Director Hans von Knut Skovfoged noted Lyneborg's exceptional ability to rapidly master technical areas, strong personal initiative, and capacity to work independently within a defined vision while maintaining excellent team integration."
        },
        {
          title: "TIXITAXI: AI-Driven Children's Puzzle Game",
          description: "TIXITAXI was an innovative children's puzzle game developed entirely by Lyneborg, featuring characters fully driven by artificial intelligence—long before AI became mainstream in game development. The project received funding from the Danish Film Institute, which recognized its innovative approach to children's educational entertainment. The game combined puzzle-solving mechanics with AI-driven character behaviors to create an engaging and responsive play experience for young audiences. Lyneborg's early implementation of AI for character behavior demonstrated his forward-thinking approach to game design and technology integration."
        },
        {
          title: "Mobile Games Released: Bare Feet! (2020)",
          description: "In September 2020, during the COVID-19 pandemic isolation period, Lyneborg independently developed and released 'Bare Feet!' for Android—an innovative mobile game that successfully merged multiple genres. This unique title combined elements from endless runners, side-scrolling shooters, platformers, and sports games into a cohesive experience. The gameplay features an inventive mechanic where players can transition from standard platforming (running and jumping) to flight mode with shooting capabilities by holding the jump button while airborne. The game also incorporates soccer ball physics reminiscent of Rocket League, creating a truly genre-blending experience. Lyneborg handled all aspects of development independently, including programming, game design, art creation, and deployment."
        }
      ]
    },
    {
      id: "leisure-activities",
      title: "Leisure Activities and Adventure Sports",
      achievements: [
        {
          title: "Photography Enthusiast",
          description: "Lyneborg maintained a passion for photography, particularly nature and landscape compositions. Over time, he developed a keen eye for capturing unique perspectives and lighting conditions, as exemplified in his forest photography work that explored the interplay between natural elements and atmospheric conditions."
        },
        {
          title: "Ceramics Artisan",
          description: "Frits built his own ceramics ovens, pottery wheel ('drejebænk'), and mixed homemade glazing as a hobby. This creative pursuit allowed him to explore three-dimensional form and material properties in a tactile, hands-on manner that complemented his digital design work."
        },
        {
          title: "Longboard Skateboarding Enthusiast",
          description: "Beyond his professional endeavors, Lyneborg developed a passion for longboard skateboarding. This activity, which combined elements of traditional skateboarding with surfing techniques, reflected his interest in balance, momentum, and motion—themes that also appeared in his robotics work. Longboarding provided him with a physical counterpoint to his technical interests, allowing him to experience motion and physics directly rather than through digital or mechanical intermediaries."
        },
        {
          title: "Parakart Driver",
          description: "Lyneborg also engaged in the dynamic sport of parakart driving (also known as kite buggying), where a three-wheeled buggy is powered by a kite. This activity combined wind energy harvesting with precise control techniques, creating an eco-friendly form of land sailing."
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
      year: "2018",
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
      title: "ArrangerKing: Revolutionary Music Arrangement Plugin (Built Using AI as a Tool)",
      source: "Barking Audio",
      year: "2024",
      url: "https://arrangerking.com/"
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
    }
  ]
};
