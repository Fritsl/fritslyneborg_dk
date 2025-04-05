import { Section } from "@/data/profile";
import droneDemoImage from "../assets/drone_demonstration.png";
import megaRecordsLogo from "../assets/mega_records_logo.jpg";
import humanoidRobotImage from "../assets/humanoid_robot_expo.jpg";
import fritsIdahoImage from "../assets/frits_idaho_2014.jpg";

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
  
  return (
    <section id={section.id} className="py-4 border-t border-wiki-border overflow-hidden">
      <h2 className="text-2xl font-wiki-serif mb-4">{section.title}</h2>
      
      {section.achievements.map((achievement, index) => (
        <div key={index} className="mb-6 overflow-hidden">
          <h3 className="text-xl font-wiki-serif mb-2">{achievement.title}</h3>
          <p className="text-base leading-relaxed">
            {achievement.description}
          </p>
          
          {/* Special content for the drone section */}
          {isDroneSection && (
            <>
              <figure className="wiki-figure mb-2">
                <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '300px' }}>
                  <img src={droneDemoImage} alt="Frits Lyneborg demonstrating autonomous drone technology in 2011" className="w-full" />
                  <figcaption className="mt-1 text-xs px-1">
                    Lyneborg demonstrating his autonomous drone with camera gimbal and custom FPV system in 2011.
                    <span className="block mt-0.5">Source: Make Magazine</span>
                  </figcaption>
                </div>
              </figure>
              <p className="text-sm italic mt-2">
                <a 
                  href="https://youtu.be/YWhO2vP2n9U?si=TtUGR--IVRuXJ4N-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wiki-blue wiki-external inline-flex items-center"
                >
                  Video documentation of autonomous drone demonstration (2011)
                </a>
              </p>
            </>
          )}
          
          {/* Special patent reference for the patents section */}
          {isPatentSection && (
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

          {/* Special reference for the robotics section */}
          {isRoboticsSection && (
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
          )}
          
          {/* Special content for the music section */}
          {isMusicSection && index === 1 && (
            <figure className="wiki-figure mb-2">
              <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '220px' }}>
                <img src={megaRecordsLogo} alt="Mega Records logo" className="w-full" />
                <figcaption className="mt-1 text-xs px-1">
                  Mega Records logo. The Danish record label represented major acts including Ace of Base and D-A-D.
                </figcaption>
              </div>
            </figure>
          )}
          
          {/* Special music video reference */}
          {isMusicSection && index === 0 && (
            <div className="mt-3">
              <p className="text-sm italic">
                <a 
                  href="https://youtu.be/iD0HK_snvOI?si=eERAOSKpYtgXl7oe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wiki-blue wiki-external inline-flex items-center"
                >
                  "Wanna B" music video by Submission (1994)
                </a>
              </p>
            </div>
          )}
          
          {/* Special content for the 3D printing section */}
          {is3DPrintingSection && (
            <>
              <figure className="wiki-figure mb-2">
                <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '300px' }}>
                  <img src={humanoidRobotImage} alt="Frits Lyneborg with an early humanoid robot at the 3D Printer World Expo 2013" className="w-full" />
                  <figcaption className="mt-1 text-xs px-1">
                    Lyneborg with an early humanoid robot at the InMoov booth, 3D Printer World Expo 2013 in Burbank, California.
                    <span className="block mt-0.5">Source: PunchBowl Media Group</span>
                  </figcaption>
                </div>
              </figure>
              
              <figure className="wiki-figure mb-2 pt-4">
                <div className="float-left mr-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '300px' }}>
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
