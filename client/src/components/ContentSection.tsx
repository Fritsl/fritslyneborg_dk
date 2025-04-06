import { Section } from "@/data/profile";
import megaRecordsLogo from "../assets/mega_records_logo.jpg";
import humanoidRobotImage from "../assets/humanoid_robot_expo.jpg";
import fritsIdahoImage from "../assets/frits_idaho_2014.jpg";
import longboardImage from "../assets/images/longboard_new.jpg";
import parakartImage from "../assets/images/parakart_new.png";
import ceramicsWorksImage from "../assets/images/ceramics_works.png";
import forestPhotoImage from "../assets/images/forest_photo.jpg";
import talesFromVoidImage from "../assets/images/tales_from_void.svg";
import arrangerKingPackshot from "../assets/images/Packshot.png";
import aiArtImage1 from "../assets/images/ai_art_1.png";
import aiArtImage2 from "../assets/images/ai_art_2.png";
import aiArtImage3 from "../assets/images/ai_art_3.png";
import aiArtImage4 from "../assets/images/ai_art_4.png";
import blenderLogo from "../assets/images/blender_logo.png";
import royalAcademyLogo from "../assets/images/royal_academy_logo.png";
import bareFeetGameImage from "../assets/images/bare_feet_game.png";
import unityLogo from "../assets/images/unity_logo.png";
import unrealLogo from "../assets/images/unreal_logo.png";
import drLogo from "../assets/images/dr_logo.png";
import letsMakeRobotsCollage from "../assets/images/letsmakerobots_collage.png";
import googleTrendsImage from "../assets/images/howtomakearobot.jpg";
import republicaImage from "../assets/images/frits_republica_digital_chef.png";
import venstreLogo from "../assets/images/venstre_logo.png";
import berlingskelogo from "../assets/images/berlingske_logo.jpg";
import thieleLogo from "../assets/images/thiele_logo.png";
import n8nLogo from "../assets/images/n8n_logo.png";
import optimeringSloganImage from "../assets/images/optimering_er_intet.png";

interface ContentSectionProps {
  section: Section;
}

export default function ContentSection({ section }: ContentSectionProps) {
  // Special treatment for sections with additional references
  const isDroneSection = section.id === "drone-innovation";
  const isPatentSection = section.id === "patents-inventions";
  const isRoboticsSection = section.id === "robotics-community-education";
  const isMusicSection = section.id === "music-industry";
  const is3DPrintingSection = section.id === "3d-printing-consulting";
  const isMakeMagazineSection = section.id === "make-magazine-projects";
  const isLeisureSection = section.id === "leisure-activities";
  const isGameDevSection = section.id === "game-development";
  const isAISection = section.id === "ai-innovation";
  const isTeachingSection = section.id === "teaching-experience";
  const isWebEntrepreneurshipSection = section.id === "web-entrepreneurship";
  const isITLeadershipSection = section.id === "it-leadership";
  
  return (
    <section 
      id={section.id} 
      className="py-2 border-t border-wiki-border overflow-hidden"
      aria-labelledby={`heading-${section.id}`}
      itemScope 
      itemType="https://schema.org/CreativeWork"
    >
      <meta itemProp="about" content={`${section.title} achievements of Frits Lyneborg`} />
      <h2 id={`heading-${section.id}`} className="text-xl font-wiki-serif mb-2" itemProp="name">{section.title}</h2>
      
      {section.achievements.map((achievement, index) => (
        <div 
          key={index} 
          className="mb-4 overflow-hidden" 
          itemScope 
          itemType="https://schema.org/Thing"
          itemProp="hasPart"
        >
          <meta itemProp="identifier" content={`achievement-${section.id}-${index}`} />
          <meta itemProp="description" content={achievement.description} />
          <h3 
            id={`achievement-${section.id}-${index}`} 
            className="text-lg font-wiki-serif mb-1" 
            itemProp="name"
          >
            {achievement.title}
          </h3>

          {/* Special content for IT Leadership section - Republica Digital Chief */}
          {isITLeadershipSection && achievement.title.includes("Digital Director at Republica") && (
            <>
              <figure className="wiki-figure mb-3">
                <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset wiki-mobile-float-reset" style={{ maxWidth: '300px' }}>
                  <a 
                    href="https://bureaubiz.dk/navn/republica-fritz-lyneborg-som-digital-chef/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src={republicaImage} 
                      alt="News article about Frits Lyneborg's appointment as Digital Chief at Republica in 2009" 
                      className="w-full" 
                      itemProp="image"
                      loading="lazy"
                    />
                  </a>
                  <figcaption className="mt-1 text-xs px-1">
                    <a 
                      href="https://bureaubiz.dk/navn/republica-fritz-lyneborg-som-digital-chef/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wiki-blue wiki-external"
                    >
                      Media coverage of Lyneborg's appointment as Digital Chief at Republica (April 1, 2009)
                    </a>
                    <span className="block mt-0.5">Source: BureauBiz.dk</span>
                  </figcaption>
                </div>
              </figure>
              <div className="mt-3 mb-3">
                <p className="text-sm italic">
                  <a
                    href="https://markedsforing.dk/artikler/nyheder/republica-har-stor-fremgang-og-loefter-overliggeren/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-wiki-blue wiki-external inline-flex items-center"
                  >
                    Markedsføring: "Republica har stor fremgang og løfter overliggeren" (2015)
                  </a>
                </p>
              </div>
            </>
          )}
          
          {/* Venstre, Berlingske and Thiele logos for Digital Innovation achievement */}
          {isWebEntrepreneurshipSection && achievement.title.includes("Digital Innovation for Major Danish Organizations") && (
            <>
              <div className="flex flex-wrap">
                <figure className="wiki-figure mb-3">
                  <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '120px' }}>
                    <img src={venstreLogo} alt="Venstre (Liberal Party of Denmark) logo" className="w-full" />
                    <figcaption className="mt-1 text-xs px-1">
                      Venstre logo. Lyneborg's web agency BEE3 created and managed over 300 websites for Denmark's Liberal Party.
                    </figcaption>
                  </div>
                </figure>
                <figure className="wiki-figure mb-3">
                  <div className="float-left mr-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '120px' }}>
                    <img src={berlingskelogo} alt="Berlingske Tidende (BT) logo" className="w-full" />
                    <figcaption className="mt-1 text-xs px-1">
                      Berlingske Tidende logo. Det Berlingske Officin was a major client of Lyneborg's web agency BEE3.
                    </figcaption>
                  </div>
                </figure>
                <figure className="wiki-figure mb-3">
                  <div className="ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '120px' }}>
                    <img src={thieleLogo} alt="Thiele optician chain logo" className="w-full" />
                    <figcaption className="mt-1 text-xs px-1">
                      Thiele logo. The national optician chain was among the prominent clients of Lyneborg's web agency BEE3.
                    </figcaption>
                  </div>
                </figure>
              </div>
            </>
          )}
          
          {/* Special content for DR consulting position */}
          {isWebEntrepreneurshipSection && achievement.title.includes("Digital Concept Developer for Danish Broadcasting (DR)") && (
            <>
              <figure className="wiki-figure mb-3">
                <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '180px' }}>
                  <img src={drLogo} alt="DR (Danish Broadcasting Corporation) logo" className="w-full" />
                  <figcaption className="mt-1 text-xs px-1">
                    DR (Danish Broadcasting Corporation) logo. Lyneborg worked as a digital concept consultant for Denmark's public broadcaster from 2008 to 2010.
                  </figcaption>
                </div>
              </figure>
              <div className="mt-3 mb-3">
                <p className="text-sm italic">
                  <a
                    href="#references"
                    className="text-wiki-blue wiki-internal inline-flex items-center"
                  >
                    Letter of Recommendation from Christian Badsøe, Creative Director at DR-Interactive Production (2010)
                  </a>
                </p>
              </div>
            </>
          )}
          
          <p className="text-base leading-relaxed">
            {achievement.description}
          </p>
          
          {/* Special content for the drone section */}
          {isDroneSection && (
            <>
              <div className="mt-4 mb-6">
                <figure className="wiki-figure">
                  <div className="mb-2 border border-wiki-border p-2 bg-wiki-light-gray" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <a 
                      href="https://youtu.be/YWhO2vP2n9U?si=TtUGR--IVRuXJ4N-" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img 
                        src="https://img.youtube.com/vi/YWhO2vP2n9U/0.jpg" 
                        alt="Video thumbnail: Autonomous drone demonstration by Frits Lyneborg (2011)" 
                        className="w-full"
                        itemProp="image"
                        loading="lazy"
                        width="800"
                        height="450"
                      />
                    </a>
                    <figcaption className="mt-1 text-sm px-1">
                      <a 
                        href="https://youtu.be/YWhO2vP2n9U?si=TtUGR--IVRuXJ4N-" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-wiki-blue wiki-external font-semibold"
                      >
                        Video documentation of autonomous drone demonstration (2011)
                      </a>
                      <span className="block mt-1">
                        Lyneborg demonstrating his autonomous drone with camera gimbal and custom FPV system in 2011.
                        <span className="block mt-0.5">Source: Make Magazine</span>
                      </span>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </>
          )}
          
          {/* Special patent reference for the patents section */}
          {isPatentSection && index === 1 && (
            <div className="mt-3">
              <p className="text-sm italic">
                <a 
                  href="https://patents.google.com/patent/WO2006051434A1/en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wiki-blue wiki-external inline-flex items-center"
                >
                  Patent WO2006051434A1: Method for Preventing Reception of Unwanted Electronic Messages
                </a>
              </p>
            </div>
          )}

          {/* ArrangerKing reference and image */}
          {isPatentSection && index === 0 && (
            <figure className="wiki-figure mb-2">
              <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '250px' }}>
                <a 
                  href="https://arrangerking.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={arrangerKingPackshot} 
                    alt="ArrangerKing - music arrangement software packshot" 
                    className="w-full" 
                    itemProp="image"
                    loading="lazy"
                  />
                </a>
                <figcaption className="mt-1 text-xs px-1">
                  ArrangerKing (2024) - Lyneborg's revolutionary music arrangement plugin that transforms musical ideas into complete arrangements with just a few clicks.
                  <span className="block mt-0.5">Source: Barking Audio</span>
                </figcaption>
              </div>
              <div className="mt-3">
                <p className="text-sm italic">
                  <a 
                    href="https://arrangerking.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-wiki-blue wiki-external inline-flex items-center"
                  >
                    ArrangerKing: Revolutionary Music Arrangement Technology (Official Site)
                  </a>
                </p>
              </div>
            </figure>
          )}

          {/* Special content for the robotics section - viral robot demonstration */}
          {isRoboticsSection && achievement.title.includes("Viral Robot Demonstration") && (
            <div className="mt-2 mb-4">
              <figure className="wiki-figure">
                <div className="mb-1 border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '300px' }}>
                  <a 
                    href="https://youtu.be/_RyodnisVvU?si=2lPsTN2zPMpbaCLq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src="https://img.youtube.com/vi/_RyodnisVvU/0.jpg" 
                      alt="Frits Lyneborg's viral robot demonstration video (2008)" 
                      className="w-full"
                    />
                  </a>
                  <figcaption className="mt-1 text-xs px-1">
                    <a 
                      href="https://youtu.be/_RyodnisVvU?si=2lPsTN2zPMpbaCLq" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wiki-blue wiki-external"
                    >
                      Viral robot demonstration video (2008)
                    </a>
                    <span className="block mt-1">
                      Lyneborg's world-famous robot demonstration that went viral on Google Video before being uploaded to YouTube, with over 1,000 people calling him a genius in the comments.
                    </span>
                  </figcaption>
                </div>
              </figure>
            </div>
          )}

          {/* Special reference for the robotics section - LMR */}
          {isRoboticsSection && achievement.title.includes("Founder of LetsMakeRobots") && (
            <>
              <div className="mt-4 mb-6">
                <figure className="wiki-figure">
                  <div className="mb-2 border border-wiki-border p-2 bg-wiki-light-gray" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <img 
                      src={letsMakeRobotsCollage} 
                      alt="Collage of robot projects inspired by Frits Lyneborg's LetsMakeRobots community" 
                      className="w-full"
                      itemProp="image"
                      loading="lazy"
                      width="700"
                      height="400"
                    />
                    <figcaption className="mt-1 text-sm px-1">
                      <span className="font-semibold">A small fraction of the hundreds of thousands of robot building projects inspired by Frits Lyneborg</span>
                      <span className="block mt-1">
                        This collage represents just a tiny sample of the massive global community of robot builders that emerged from LetsMakeRobots.com between 2008-2015.
                        <span className="block mt-0.5">Source: LetsMakeRobots.com archives</span>
                      </span>
                    </figcaption>
                  </div>
                </figure>
                
                <figure className="wiki-figure mt-4">
                  <div className="mb-2 border border-wiki-border p-2 bg-wiki-light-gray" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <img 
                      src={googleTrendsImage} 
                      alt="Google Trends data showing worldwide interest in 'how to make a robot' during Frits Lyneborg's active period with LetsMakeRobots" 
                      className="w-full"
                      itemProp="image"
                      loading="lazy"
                    />
                    <figcaption className="mt-1 text-sm px-1">
                      <span className="font-semibold">Global transformation in robot building interest (2004-present)</span>
                      <span className="block mt-1">
                        Google Trends data shows worldwide interest in "how to make a robot" was stable before 2008, then dramatically increased exactly when Lyneborg launched LetsMakeRobots.com. This sharp rise continued throughout his active period (red box: 2008-2015), followed by an immediate decline after he left the platform. This correlation suggests his direct influence on the global maker movement, transforming robotics from a niche interest to a mainstream educational pursuit.
                        <span className="block mt-0.5">Source: Google Trends</span>
                      </span>
                    </figcaption>
                  </div>
                </figure>
              </div>
              <div className="mt-3">
                <p className="text-sm italic">
                  <a 
                    href="https://hackaday.com/2015/09/25/lets-make-robots-changes-hands-kerfuffle-ensues/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-wiki-blue wiki-external inline-flex items-center"
                  >
                    Hackaday: Let's Make Robots Changes Hands, Kerfuffle Ensues (2015)
                  </a>
                </p>
              </div>
            </>
          )}
          
          {/* Special content for the music section */}
          {isMusicSection && index === 0 && (
            <figure className="wiki-figure mb-2">
              <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '220px' }}>
                <img src={megaRecordsLogo} alt="Mega Records logo" className="w-full" />
                <figcaption className="mt-1 text-xs px-1">
                  Mega Records logo. The Danish record label represented major acts including Ace of Base and D-A-D.
                </figcaption>
              </div>
            </figure>
          )}
          
          {/* Special music video reference */}
          {isMusicSection && index === 1 && (
            <div className="mt-2 mb-4">
              <figure className="wiki-figure">
                <div className="mb-1 border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '300px' }}>
                  <a 
                    href="https://youtu.be/iD0HK_snvOI?si=eERAOSKpYtgXl7oe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src="https://img.youtube.com/vi/iD0HK_snvOI/0.jpg" 
                      alt="Video thumbnail: 'Wanna B' music video by Submission (1994)" 
                      className="w-full"
                    />
                  </a>
                  <figcaption className="mt-1 text-xs px-1">
                    <a 
                      href="https://youtu.be/iD0HK_snvOI?si=eERAOSKpYtgXl7oe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wiki-blue wiki-external"
                    >
                      "Wanna B" music video by Submission (1994)
                    </a>
                  </figcaption>
                </div>
              </figure>
            </div>
          )}
          
          {/* Special content for the Make Magazine projects section */}
          {isMakeMagazineSection && (
            <>
              {index === 0 && (
                <div className="mt-2 mb-4">
                  <p className="text-sm italic mt-2">
                    <a 
                      href="https://makezine.com/projects/yellow-drum-machine/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wiki-blue wiki-external inline-flex items-center"
                    >
                      Make Magazine: Yellow Drum Machine (2012)
                    </a>
                  </p>
                </div>
              )}
              {index === 1 && (
                <div className="mt-2 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <p className="text-sm italic">
                      <a 
                        href="https://makezine.com/2011/10/20/how-to-three-servos-walking-robot-video/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-wiki-blue wiki-external inline-flex items-center"
                      >
                        Make Magazine: How-To: Three Servos Walking Robot (2011)
                      </a>
                    </p>
                    <p className="text-sm italic">
                      <a 
                        href="https://makezine.com/2011/09/22/how-to-drifting-robot-car-video/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-wiki-blue wiki-external inline-flex items-center"
                      >
                        Make Magazine: How-To: Drifting Robot Car (2011)
                      </a>
                    </p>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="mt-2 mb-4">
                  <p className="text-sm italic mt-2">
                    <a 
                      href="https://makezine.com/2011/11/18/robotics-3d-carver-of-invisible-stuff/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wiki-blue wiki-external inline-flex items-center"
                    >
                      Make Magazine: Robotic 3D Carver of Invisible Stuff (2011)
                    </a>
                  </p>
                </div>
              )}
            </>
          )}
          
          {/* Special content for the game engine expert section */}
          {isGameDevSection && index === 1 && (
            <div className="mt-3 mb-4">
              <div className="flex flex-wrap items-center gap-6 mt-2">
                <figure className="wiki-figure mb-2">
                  <div className="border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '180px' }}>
                    <img src={unityLogo} alt="Unity Game Engine Logo" className="w-full" />
                    <figcaption className="mt-1 text-xs px-1">
                      Unity game engine - one of the frameworks Lyneborg has mastered and taught throughout his career.
                    </figcaption>
                  </div>
                </figure>
                <figure className="wiki-figure mb-2">
                  <div className="border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '180px' }}>
                    <img src={unrealLogo} alt="Unreal Engine Logo" className="w-full" />
                    <figcaption className="mt-1 text-xs px-1">
                      Unreal Engine - Lyneborg has expertise in both major game development frameworks.
                    </figcaption>
                  </div>
                </figure>
              </div>
            </div>
          )}
          
          {/* Special content for the game development section */}
          {isGameDevSection && index === 2 && (
            <figure className="wiki-figure mb-2">
              <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '250px' }}>
                <img src={talesFromVoidImage} alt="Tales from the Void - a sci-fi strategy game" className="w-full" />
                <figcaption className="mt-1 text-xs px-1">
                  "Tales from the Void" - the sci-fi strategy game Lyneborg worked on as Technical Art Director at PortaPlay in 2014-2015.
                  <span className="block mt-0.5">Conceptual representation</span>
                </figcaption>
              </div>
            </figure>
          )}
          
          {/* Special content for TIXITAXI game */}
          {isGameDevSection && index === 3 && (
            <div className="mt-2 mb-4">
              <figure className="wiki-figure">
                <div className="mb-1 border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '300px' }}>
                  <a 
                    href="https://youtu.be/4PC-NnqzKX4?si=rWbGwxpjSlHROMgg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src="https://img.youtube.com/vi/4PC-NnqzKX4/0.jpg" 
                      alt="TIXITAXI - Children's puzzle game with AI-driven characters" 
                      className="w-full"
                    />
                  </a>
                  <figcaption className="mt-1 text-xs px-1">
                    <a 
                      href="https://youtu.be/4PC-NnqzKX4?si=rWbGwxpjSlHROMgg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wiki-blue wiki-external"
                    >
                      "TIXITAXI" - Game trailer video
                    </a>
                    <span className="block mt-1">
                      An innovative children's puzzle game with all characters fully driven by AI, created by Lyneborg with funding from the Danish Film Institute.
                      <span className="block mt-0.5">Source: Frits Lyneborg</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            </div>
          )}
          
          {/* Special content for Bare Feet mobile game */}
          {isGameDevSection && index === 4 && (
            <div className="mt-2 mb-4">
              <figure className="wiki-figure">
                <div className="mb-1 border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '300px' }}>
                  <a 
                    href="https://www.youtube.com/watch?v=ZWyi2LIX0yU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src={bareFeetGameImage} 
                      alt="Bare Feet! - a mobile game combining runner and shooter genres" 
                      className="w-full"
                    />
                  </a>
                  <figcaption className="mt-1 text-xs px-1">
                    <a 
                      href="https://www.youtube.com/watch?v=ZWyi2LIX0yU" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wiki-blue wiki-external"
                    >
                      "Bare Feet!" - Gameplay video (2020)
                    </a>
                    <span className="block mt-1">
                      Lyneborg's independently developed mobile game that uniquely combines runner, shooter, platformer, and sports game elements.
                      <span className="block mt-0.5">Source: Frits Lyneborg</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            </div>
          )}
          
          {/* Special content for the leisure activities section */}
          {isLeisureSection && (
            <>
              {index === 0 && (
                <figure className="wiki-figure mb-2">
                  <div className="mb-4 border border-wiki-border p-2 bg-wiki-light-gray" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <img src={forestPhotoImage} alt="Forest photograph by Frits Lyneborg showing sunlight through autumn trees" className="w-full" />
                    <figcaption className="mt-1 text-sm px-1">
                      <span className="font-semibold">"Forest Light" - Photograph by Frits Lyneborg</span>
                      <span className="block mt-1">
                        This image captures the interplay between light, foliage, and perspective in a Danish forest setting, demonstrating Lyneborg's eye for natural composition and atmospheric conditions.
                        <span className="block mt-0.5">Source: Personal portfolio</span>
                      </span>
                    </figcaption>
                  </div>
                </figure>
              )}
              
              {index === 1 && (
                <figure className="wiki-figure mb-2">
                  <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '320px' }}>
                    <img src={ceramicsWorksImage} alt="A collection of Frits Lyneborg's ceramic works including bowls and cups" className="w-full" />
                    <figcaption className="mt-1 text-xs px-1">
                      Some of Frits's ceramic works. Lyneborg crafts pieces using self-built ovens and homemade glazing techniques.
                      <span className="block mt-0.5">Source: Personal collection</span>
                    </figcaption>
                  </div>
                </figure>
              )}
              
              {index === 2 && (
                <figure className="wiki-figure mb-2">
                  <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '320px' }}>
                    <img src={longboardImage} alt="Downhill longboarder speeding down a mountain road" className="w-full" />
                    <figcaption className="mt-1 text-xs px-1">
                      Downhill longboarding is a high-speed discipline where riders descend steep mountain roads. Lyneborg has been an active participant in the longboarding community.
                      <span className="block mt-0.5">Source: Action sports photography</span>
                    </figcaption>
                  </div>
                </figure>
              )}
              
              {index === 3 && (
                <figure className="wiki-figure mb-2">
                  <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '300px' }}>
                    <img src={parakartImage} alt="Parakarts (kite buggies) with colorful kites at a beach event" className="w-full" />
                    <figcaption className="mt-1 text-xs px-1">
                      Parakarts (kite buggies) at a beach event with numerous colorful kites in the sky. Lyneborg has been an active participant in this wind-powered sport.
                      <span className="block mt-0.5">Source: Actual parakart event photo</span>
                    </figcaption>
                  </div>
                </figure>
              )}
            </>
          )}
          
          {/* Special content for the AI Innovation section - Lars Kolind Collaboration */}
          {isAISection && index === 0 && (
            <>
              <div className="mt-4 mb-6">
                <figure className="wiki-figure">
                  <div className="mb-2 border border-wiki-border p-2 bg-wiki-light-gray" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <img 
                      src={optimeringSloganImage} 
                      alt="Optimering er intet, Automatisering er alt - The focal point of Lyneborg's current collaboration with Lars Kolind" 
                      className="w-full"
                    />
                    <figcaption className="mt-1 text-sm px-1">
                      <span className="font-semibold">The focal point of Lyneborg's current collaboration with Lars Kolind: "Optimering er intet, Automatisering er alt" (2025)</span>
                      <span className="block mt-1">
                        This slogan ("Optimization is nothing, Automation is everything") encapsulates the core message of their roadshow and workshop series designed to prepare business leaders for the AI revolution, emphasizing how automation technologies fundamentally transform business rather than merely optimizing existing processes.
                      </span>
                    </figcaption>
                  </div>
                </figure>
              </div>
              
              <figure className="wiki-figure mb-3">
                <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '220px' }}>
                  <img src={n8nLogo} alt="n8n logo - Automation and workflow platform" className="w-full" />
                  <figcaption className="mt-1 text-xs px-1">
                    n8n logo. Lyneborg incorporates this powerful workflow automation platform in his consultancy work with Lars Kolind, focusing on Agentic AI solutions for business.
                    <span className="block mt-0.5">Source: n8n.io</span>
                  </figcaption>
                </div>
              </figure>
              <div className="mt-3 mb-3">
                <p className="text-sm italic">
                  <a
                    href="https://n8n.io/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-wiki-blue wiki-external inline-flex items-center"
                  >
                    n8n.io: Fair-code licensed workflow automation platform used in Lyneborg's Agentic AI implementations
                  </a>
                </p>
              </div>
            </>
          )}

          {/* Special content for the AI Innovation section - AI Art Gallery */}
          {isAISection && index === 1 && (
            <>
              <div className="mt-4 mb-6 clear-both">
                <h4 className="text-lg font-wiki-serif mb-3">Early AI Art Gallery (2023)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <figure className="wiki-figure mb-2">
                    <div className="border border-wiki-border p-1 bg-wiki-light-gray">
                      <img src={aiArtImage1} alt="AI-generated abstract artwork titled 'UFO Wind Love Machine' featuring a windmill-like structure with ethereal lighting, created by Frits Lyneborg using early LLM models (2023)" className="w-full h-auto" />
                      <figcaption className="mt-1 text-xs px-1">
                        "UFO Wind Love Machine" - Created using early LLM art generation (2023)
                        <span className="block mt-0.5">Source: Personal archives</span>
                      </figcaption>
                    </div>
                  </figure>
                  
                  <figure className="wiki-figure mb-2">
                    <div className="border border-wiki-border p-1 bg-wiki-light-gray">
                      <img src={aiArtImage2} alt="AI-generated blue abstract sculpture created by Frits Lyneborg using early LLM models (2023)" className="w-full h-auto" />
                      <figcaption className="mt-1 text-xs px-1">
                        "Blue Flow" - Digital sculpture generated through LLM technology (2023)
                        <span className="block mt-0.5">Source: Personal archives</span>
                      </figcaption>
                    </div>
                  </figure>
                  
                  <figure className="wiki-figure mb-2">
                    <div className="border border-wiki-border p-1 bg-wiki-light-gray">
                      <img src={aiArtImage3} alt="AI-generated abstract landscape by Frits Lyneborg using early LLM models (2023)" className="w-full h-auto" />
                      <figcaption className="mt-1 text-xs px-1">
                        "Amber Topology" - Experimental landscape created with AI (2023)
                        <span className="block mt-0.5">Source: Personal archives</span>
                      </figcaption>
                    </div>
                  </figure>
                  
                  <figure className="wiki-figure mb-2">
                    <div className="border border-wiki-border p-1 bg-wiki-light-gray">
                      <img src={aiArtImage4} alt="AI-generated abstract organic form by Frits Lyneborg using early LLM models (2023)" className="w-full h-auto" />
                      <figcaption className="mt-1 text-xs px-1">
                        "Feathered Construct" - Abstract organic form generated through AI prompting (2023)
                        <span className="block mt-0.5">Source: Personal archives</span>
                      </figcaption>
                    </div>
                  </figure>
                </div>
                <p className="text-sm italic mt-4">
                  These pieces represent some of Lyneborg's earliest explorations with Large Language Models (LLMs) for generative art creation in 2023, at a time when most people were unfamiliar with LLM technology and its creative applications. The artworks demonstrate both the technical capability to effectively prompt these systems and the artistic vision to create cohesive works through the emerging medium.
                </p>
              </div>
            </>
          )}
          
          {/* Special content for the teaching section */}
          {isTeachingSection && (
            <>
              {index === 0 && (
                <figure className="wiki-figure mb-2">
                  <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '250px' }}>
                    <img src={blenderLogo} alt="Blender 3D Software Logo" className="w-full" />
                    <figcaption className="mt-1 text-xs px-1">
                      The Blender 3D software logo. Lyneborg specialized in teaching this powerful open-source 3D creation suite through his Blenderkursus.dk consultancy.
                      <span className="block mt-0.5">Source: Blender Foundation</span>
                    </figcaption>
                  </div>
                </figure>
              )}
              
              {index === 1 && (
                <figure className="wiki-figure mb-2">
                  <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '250px' }}>
                    <img src={royalAcademyLogo} alt="Royal Danish Academy of Fine Arts Logo" className="w-full" />
                    <figcaption className="mt-1 text-xs px-1">
                      The official seal of the Royal Danish Academy of Fine Arts (Det Kongelige Danske Kunstakademi), where Lyneborg taught 3D visualization techniques to students from 2015-2022.
                      <span className="block mt-0.5">Source: Royal Danish Academy of Fine Arts</span>
                    </figcaption>
                  </div>
                </figure>
              )}
            </>
          )}
          
          {/* Special content for the 3D printing section */}
          {is3DPrintingSection && index === 1 && (
            <>
              <figure className="wiki-figure mb-2">
                <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '300px' }}>
                  <img src={humanoidRobotImage} alt="Frits Lyneborg with an early humanoid robot at the 3D Printer World Expo 2013" className="w-full" />
                  <figcaption className="mt-1 text-xs px-1">
                    Lyneborg with an early humanoid robot at the InMoov booth, 3D Printer World Expo 2013 in Burbank, California.
                    <span className="block mt-0.5">Source: PunchBowl Media Group</span>
                  </figcaption>
                </div>
              </figure>
              
              <figure className="wiki-figure mb-2 pt-4">
                <div className="float-left mr-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '300px' }}>
                  <img src={fritsIdahoImage} alt="Frits Lyneborg in Idaho, USA while working on 3D print expos in 2014" className="w-full" />
                  <figcaption className="mt-1 text-xs px-1">
                    Lyneborg in Idaho, USA during his work as a consultant for PunchBowl Media Group (2014).
                    <span className="block mt-0.5">Source: Personal archives</span>
                  </figcaption>
                </div>
              </figure>
              
              <p className="text-sm italic clear-left mt-2">
                <a 
                  href="https://3dprintingindustry.com/news/3d-printer-world-expo-2014-review-23549/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wiki-blue wiki-external inline-flex items-center"
                >
                  3D Printer World Expo (Industry Coverage)
                </a>
              </p>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
