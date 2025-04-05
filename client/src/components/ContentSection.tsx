import { Section } from "@/data/profile";
import droneDemoImage from "../assets/drone_demonstration.png";

interface ContentSectionProps {
  section: Section;
}

export default function ContentSection({ section }: ContentSectionProps) {
  // Special treatment for sections with additional references
  const isDroneSection = section.id === "drone-innovation";
  const isPatentSection = section.id === "patents-inventions";
  
  return (
    <section id={section.id} className="py-4 border-t border-wiki-border">
      <h2 className="text-2xl font-wiki-serif mb-4">{section.title}</h2>
      
      {section.achievements.map((achievement, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-wiki-serif mb-2">{achievement.title}</h3>
          <p className="text-base leading-relaxed">
            {achievement.description}
          </p>
          
          {/* Special content for the drone section */}
          {isDroneSection && (
            <>
              <div className="mt-4 mb-4">
                <figure className="wiki-figure">
                  <div className="float-right ml-4 mb-2 border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '300px' }}>
                    <img src={droneDemoImage} alt="Frits Lyneborg demonstrating autonomous drone technology in 2011" className="w-full" />
                    <figcaption className="mt-1 text-xs px-1">
                      Lyneborg demonstrating his autonomous drone with camera gimbal and custom FPV system in 2011. 
                      <span className="block mt-1">Source: Make Magazine</span>
                    </figcaption>
                  </div>
                </figure>
              </div>
              <div className="mt-3">
                <p className="text-sm italic">
                  <a 
                    href="https://youtu.be/YWhO2vP2n9U?si=TtUGR--IVRuXJ4N-" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-wiki-blue wiki-external inline-flex items-center"
                  >
                    Video documentation of autonomous drone demonstration (2011)
                  </a>
                </p>
              </div>
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
        </div>
      ))}
    </section>
  );
}
