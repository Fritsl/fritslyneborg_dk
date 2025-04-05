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
  introduction: "is a Danish technologist, entrepreneur, inventor, educator, and pioneer across multiple fields including robotics, autonomous systems, IT leadership, music technology, and digital innovation. Currently, he collaborates with renowned Danish business executive Lars Kolind on the project \"Optimering er intet, Automatisering er alt\" (\"Optimization is nothing, Automation is everything\"), a roadshow and workshop series designed to prepare Danish and European business leaders and board members of large corporations for the imminent asymmetry in companies' deep usage and understanding of AI technology. Over the course of his career, he has founded global communities, led major corporate IT operations, patented innovative technology solutions, and developed groundbreaking technologies in emerging industries. As an educator, he taught 3D art principles to hundreds of students at the Royal Danish Academy of Art in Copenhagen among other institutions through his consultancy Blenderkursus.dk (2015-2022). His latest innovation, ArrangerKing (2024), represents a revolutionary approach to music arrangement that has been widely acclaimed by the production community.",
  details: {
    nationality: "Danish",
    fields: "Music Production, Robotics, 3D Art Education, Web Development, IT Leadership, Entrepreneurship, Patents, Adventure Sports",
    knownFor: "Creator of ArrangerKing music plugin, 3D Art Educator at Royal Danish Academy of Art, Electronic music artist, A&R manager at Mega Records, Founding global robotics community, Email security patent, Open source web innovations, Autonomous drone development, Longboarding and parakart enthusiast"
  },
  sections: [

    {
      id: "it-leadership",
      title: "IT and Corporate Leadership",
      achievements: [
        {
          title: "Digital Director at Republica (2015)",
          description: "In 2015, Lyneborg was appointed as Digital Director (Digital Chef) at Republica, a prominent Danish digital agency. As reported in Markedsføring, one of his first tasks was to develop innovative digital flyers, moving beyond the existing PDF-based solutions that were common at the time. According to company leadership, 'We have hired a digital chief, Frits Lyneborg, who will enhance our competence in the area.' In this role, he led the company's digital innovation strategies and technical development teams, helping clients navigate the growing digital marketing landscape. His expertise in both technical implementation and strategic digital planning strengthened Republica's position in the competitive Danish marketing sector during a period of significant growth for the company."
        },
        {
          title: "Senior Strategic Advisor at Wemind A/S (2010-2013)",
          description: "From 2010 to 2013, Lyneborg served as Senior Strategic Advisor (Senior Strategisk Rådgiver) at Wemind A/S, a Danish consultancy firm. In this role, he provided high-level strategic guidance on digital transformation and technology implementation to various client organizations. His work at Wemind allowed him to leverage his extensive experience across multiple technological domains to develop forward-thinking strategies for businesses navigating the rapidly evolving digital landscape. During this period, he established himself as a trusted advisor to executive leadership teams seeking to enhance their organizations' technical capabilities and digital presence."
        },
        {
          title: "IT and Development Chief at UVCB (1999-2003)",
          description: "From 1999 to 2003, Lyneborg served as IT and Development Chief (IT/Udviklingschef) at UVCB, a self-governing institution under the Danish Ministry of Employment. In this leadership role, he independently managed the organization's entire IT department with exceptional results. According to a recommendation from Secretary Chief Henrik Brandt, Lyneborg demonstrated remarkable skill in adapting IT solutions to the organization's specific needs, including the development of local networks, home workstations, and a web platform that thoroughly met the Center's requirements. He was praised for his ability to both create strategic development plans and effectively implement them, consistently delivering tangible and practical results. Lyneborg showed extraordinary responsibility in both development and operational aspects of his work, consistently presenting accurate IT department budgets and maintaining them with precision. His independent work style and ability to involve both internal staff and external contacts in Denmark and abroad were highlighted as key strengths in his leadership approach."
        }
      ]
    },
    {
      id: "robotics-community-education",
      title: "Robotics Community and Education",
      achievements: [
        {
          title: "Viral Robot Demonstration: Internet Phenomenon (2008)",
          description: "In 2008, Lyneborg's innovative robot demonstration video became a viral sensation on Google Video (a precursor to YouTube's dominance). The video, which showcased his pioneering approach to accessible robotics, attracted over 1,000 comments from viewers who praised his ingenuity, with many explicitly calling him a 'genius' for his creative solutions and clear presentation style. This early viral success helped establish his reputation internationally as a robotics educator and innovator, demonstrating his ability to communicate complex technical concepts in an engaging and accessible manner. The reception to this video played a significant role in growing the Let's Make Robots community and cemented Lyneborg's status as a thought leader in DIY robotics."
        },
        {
          title: "Founder of LetsMakeRobots.com (2008-2015)",
          description: "In 2008, Lyneborg founded LetsMakeRobots.com, which grew to become the world's largest online community for hobbyist robotic builders. He published tutorials on robot building that were translated into multiple languages and featured in books and major publications, inspiring hundreds of thousands worldwide. The site gained significant recognition when NASA linked to it as \"A resource for robot building.\" The platform was acquired by Canadian-based company RobotShop.com in 2015, demonstrating its significant value and influence within the global robotics education community."
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
      id: "3d-printing-consulting",
      title: "3D Printing and Strategic Consulting",
      achievements: [
        {
          title: "Special Consultant at VENZO A/S (2022-2023)",
          description: "In February 2022, Lyneborg joined VENZO A/S as a Special Consultant focusing on IT architecture and 3D modeling. While assigned to Ørsted A/S, Denmark's largest energy company, he developed advanced 3D visualizations that enabled Ørsted to simulate large-scale installations virtually rather than constructing physical prototypes, resulting in multimillion-kroner savings. His responsibilities included facilitating workshops where he effectively translated technical discussions and concepts into detailed 3D models. Notably, Lyneborg created the system architecture for P-Secure (www.p-secure.com), a sophisticated platform for automated background checks, identity verification, and CV validation. P-Secure has since become an independent, successful company no longer affiliated with Lyneborg. The system architecture represents a significant innovation in automated verification systems, utilizing advanced algorithms to process and validate personal and professional information with high efficiency and security standards. This work demonstrated his capabilities in developing secure, automated systems for sensitive information processing in compliance with stringent data protection regulations. Additionally, Lyneborg created original graphics and adapted complex materials from extensive CAD systems, which significantly improved decision-making processes and brought greater clarity to projects. His work at VENZO demonstrated his ability to bridge technical expertise with practical business applications, a skill that would later inform his approach to AI implementation."
        },
        {
          title: "3D Print Expo Consultant for Punchbowl Media (2013-2014)",
          description: "In January 2013, Lyneborg was hired as a strategic consultant for PunchBowl Media Group based in Idaho, USA, specifically to help create and organize 3D printing exhibitions. Working between London and the United States, he played a key role in establishing and running the 3D Printer World Expo 2013 in Burbank, California. His consulting work was focused entirely on developing these expo events, where he helped curate and showcase pioneering projects including the InMoov open-source humanoid robot, one of the first fully 3D-printable robots of its kind. Throughout 2014, Lyneborg continued his consulting relationship with Punchbowl Media, developing strategies for future 3D printing expos and industry events. His international perspective and technical expertise were instrumental in establishing these early showcases of 3D printing technology at a time when the industry was still in its formative stages. This consulting role was entirely separate from his later work with VENZO A/S."
        }
      ]
    },
    {
      id: "make-magazine-projects",
      title: "Make Magazine Projects and Contributions",
      achievements: [
        {
          title: "Yellow Drum Machine (2012)",
          description: "Lyneborg created the Yellow Drum Machine, an innovative open-source robotic percussion instrument that garnered significant attention in the maker community. The project, which combined robotics, music, and digital fabrication, was featured as a step-by-step tutorial in Make Magazine, showcasing Lyneborg's ability to blend his musical background with his expertise in robotics and programming."
        },
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
          description: "Beginning in 2010, Lyneborg became an early pioneer of autonomous drone technology, building drones with internet-connected navigation via Google Maps. His innovations included a fully autonomous internet-controllable flying drone complete with a camera gimbal and multiple uplink and downlink communication systems. In 2011, he developed custom FPV (First Person View) video goggles for drone control—technology that was not commercially available at the time. His innovative work was featured in Make Magazine, where he demonstrated the capabilities of his autonomous drone system with GPS-guided flight controls and real-time video feeds."
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
          description: "Under Lyneborg's leadership, BEE3 secured contracts with prominent clients including the government party Venstre (Denmark's Liberal Party), major news outlet Det Berlingske Officin, and national optician chain Thiele. His highly accessible and scalable CMS for Venstre's National Organization (Venstres Landsorganisation) allowed party headquarters to maintain consistent design standards across more than 300 websites while enabling easy maintenance by users with various levels of technical expertise—from students and IT enthusiasts to retirees. The system required minimal support, with new sites taking only seconds to create. As confirmed by Henrik Andersen, IT and Web Developer at Venstre, this innovative solution provided extremely cost-effective websites while ensuring design consistency and simplifying what would otherwise be a complex system for most users. This unprecedented web infrastructure was credited with contributing to the party's electoral success through effective digital coordination."
        },
        {
          title: "Digital Concept Developer for Danish Broadcasting (DR) (2008-2010)",
          description: "From 2008 to 2010, Lyneborg served as a digital concept consultant for DR (Danish Broadcasting Corporation), Denmark's oldest and largest electronic media enterprise. Working with the Interactive Production department, he provided strategic guidance and innovative solutions for numerous web 2.0 and mobile projects. His contributions focused on transforming abstract ideas into clear concepts with well-defined goals and methodologies, significantly elevating DR's digital initiatives. According to Christian Badsøe, Creative Director at DR-Interactive Production, Lyneborg possessed an exceptional ability to quickly comprehend user and business needs, creating original concepts and concrete solutions across all digital platforms. Badsøe particularly noted Lyneborg's rare talent for distilling complex ideas into targeted solutions that effectively reached specific audiences and optimized traffic. This consulting relationship with Denmark's public service broadcaster further strengthened Lyneborg's reputation as a leading digital strategist in the Danish media landscape."
        }
      ]
    },
    {
      id: "patents-inventions",
      title: "Patents and Inventions",
      achievements: [
        {
          title: "Creator of ArrangerKing Music Plugin (2024)",
          description: "In 2024, Lyneborg created ArrangerKing, an innovative music arrangement plugin that revolutionized the way producers and composers complete their tracks. This breakthrough technology was designed to solve a common challenge in music production where creators often lose inspiration during the arrangement phase. Notably, while ArrangerKing itself is not an AI product, Lyneborg strategically utilized AI tools throughout its development process, exemplifying his forward-thinking approach to leveraging new technologies. ArrangerKing allows musicians to transform initial musical ideas (typically '8-bar loops') into complete arrangements with just a few clicks rather than the traditional labor-intensive process of manually moving parts around in a digital audio workstation. The invention represents a significant technological advancement in music production software, combining complex algorithmic analysis with intuitive user interface design. The plugin received significant acclaim in the production community for its unprecedented approach to arrangement workflow, being described as 'the fastest way to arrange tracks' in music technology history. This invention demonstrates Lyneborg's unique ability to identify workflow challenges and develop technological solutions that transform creative processes."
        },
        {
          title: "International Patent for Spam-Free Email System (2005)",
          description: "In 2005, Lyneborg was granted an international patent (WO2006051434A1) for a method and system to prevent reception of unwanted electronic messages. His patented approach assigned unique addresses to each entity communicating with a user, with the unique identifier integrated into the email address itself. This innovation eliminated the need for traditional passwords while maintaining a conventional user experience. The system employed an initial challenge/response procedure to verify sender legitimacy, providing a high degree of protection against spam while preserving email functionality and user convenience."
        }
      ]
    },
    {
      id: "ai-innovation",
      title: "AI Innovation and Implementation",
      achievements: [
        {
          title: "AI Business Consultant and Workshop Leader (2025-Present)",
          description: "From February 1, 2025, Lyneborg began conducting AI workshops for business leaders and board members in collaboration with renowned Danish business executive Lars Kolind as a partner. These workshops evolved from his pioneering AI implementation work, where he had witnessed firsthand the transformative potential of artificial intelligence in creative and technical production. Now focusing on practical applications of AI in business contexts, Lyneborg helps executives navigate the rapidly evolving technological landscape, translating his hands-on experience into actionable strategies. His workshops demonstrate how AI can dramatically accelerate production pipelines and creative processes across various industries."
        },
        {
          title: "Early Adoption of LLM Models for Creative Projects (2023)",
          description: "In 2023, Lyneborg was among the early adopters of Large Language Models (LLMs) for creative applications. He began exploring the artistic potential of these AI systems, creating experimental art projects that leveraged the capabilities of early LLM models. This pioneering work represented some of the first attempts to use generative AI as a creative medium in Denmark. His experimentation with these emerging technologies established him as an innovator in the practical application of AI for creative endeavors, well before such applications became mainstream."
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
          description: "Starting in 2014 as Technical Art Director in the games industry Lyneborg has mastered both Unreal Engine and Unity game development frameworks, establishing himself as a versatile expert in the field. He has shared this knowledge through teaching both frameworks to private students and within game development studios. His comprehensive understanding of these competing technologies has allowed him to select the optimal engine for specific project requirements, recognizing the unique strengths of each platform. This dual expertise has proven particularly valuable in his leadership roles, where he could effectively guide development teams and make informed technical decisions regardless of the chosen engine architecture."
        },
        {
          title: "Senior Unreal Developer at Skybox Technologies (2023-2024)",
          description: "On January 1, 2023, Lyneborg joined Skybox Technologies as a Senior Unreal Developer. In this role, he applied his extensive technical expertise and game development experience to create advanced gaming solutions using the Unreal Engine. His work at Skybox Technologies built upon his previous experience in the gaming industry, allowing him to further refine his skills in game development and contribute to cutting-edge projects in the gaming sector."
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
          title: "Longboard Skateboarding Enthusiast",
          description: "Beyond his professional endeavors, Lyneborg is an avid longboard skateboarder. This activity, which combines elements of traditional skateboarding with surfing techniques, reflects his interest in balance, momentum, and motion—themes that also appear in his robotics work. Longboarding provides him with a physical counterpoint to his technical interests, allowing him to experience motion and physics directly rather than through digital or mechanical intermediaries."
        },
        {
          title: "Parakart Driver",
          description: "Lyneborg also engages in the dynamic sport of parakart driving (also known as kite buggying), where a three-wheeled buggy is powered by a kite. This activity combines wind energy harvesting with precise control techniques, creating an eco-friendly form of land sailing. His interest in this adventure sport connects to his broader fascination with alternative energy applications and autonomous motion systems, themes that have defined much of his professional work with drones and robotics."
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
      title: "Viral Robot Demonstration Video",
      source: "Internet Archives (originally Google Video)",
      year: "2008",
      url: "https://youtu.be/_RyodnisVvU?si=2lPsTN2zPMpbaCLq"
    },
    {
      author: "Lyneborg, F.",
      title: "Yellow Drum Machine",
      source: "Make Magazine",
      year: "2012",
      url: "https://makezine.com/projects/yellow-drum-machine/"
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
