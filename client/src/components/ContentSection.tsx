import React, { useState } from "react";
import { Section } from "@/data/profile";
import ImagePreviewModal from "./ImagePreviewModal";
import googleTrendsImage from "@assets/howtomakearobot.jpg";
import n8nLogo from "@assets/n8nlogo.png";
import arrangerKingPackshot from "@assets/Packshot.png";
import blenderLogo from "@assets/blender-seeklogo.png";
import unityLogo from "@assets/Unity-logo.png";
import unrealLogo from "@assets/Unreal_Engine_Logo.svg.png";
import aiArtImage1 from "@assets/billede_1743878729353.png";
import aiArtImage2 from "@assets/billede_1743879836567.png";
import aiArtImage3 from "@assets/billede_1743880834153.png";
import aiArtImage4 from "@assets/billede_1743946916059.png";
import optimeringSloganImage from "@assets/billede_1743875595792.png";

interface ContentSectionProps {
  section: Section;
}

export default function ContentSection({ section }: ContentSectionProps) {
  // State for image preview modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    src: '',
    alt: '',
    title: '',
    caption: '',
    source: ''
  });

  const openImageModal = (image: typeof selectedImage) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

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
    <>
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

            <p className="text-base leading-relaxed">
              {achievement.description}
            </p>
            
            {/* Special content for n8n workflow automation */}
            {isAISection && achievement.title.includes("Workflow Automation") && (
              <>
                <figure className="wiki-figure mb-3">
                  <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '180px' }}>
                    <img 
                      src={n8nLogo} 
                      alt="n8n workflow automation platform logo" 
                      className="w-full cursor-pointer wiki-hover-gray"
                      onClick={() => openImageModal({
                        src: n8nLogo,
                        alt: "n8n workflow automation platform logo",
                        title: "n8n Workflow Automation Platform",
                        caption: "n8n is an open-source workflow automation platform where Frits Lyneborg created advanced AI-driven workflows.",
                        source: "n8n.io"
                      })}
                    />
                    <figcaption className="mt-1 text-xs px-1">
                      n8n logo. Lyneborg built multiple AI-driven automation solutions using this platform. Click to enlarge.
                    </figcaption>
                  </div>
                </figure>
              </>
            )}

            {/* Special content for Optimization quote */}
            {isAISection && achievement.title.includes("Collaboration with Lars Kolind") && (
              <>
                <figure className="wiki-figure mb-3 mt-3">
                  <div className="mx-auto mb-1 border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '600px' }}>
                    <img 
                      src={optimeringSloganImage} 
                      alt="Optimization is nothing, automation is everything" 
                      className="w-full cursor-pointer wiki-hover-gray"
                      onClick={() => openImageModal({
                        src: optimeringSloganImage,
                        alt: "Optimization is nothing, automation is everything",
                        title: "Lyneborg's Automation Philosophy",
                        caption: "Frits Lyneborg and Lars Kolind's influential mantra: 'Optimering er intet, Automatisering er alt' (Optimization is nothing, Automation is everything).",
                        source: "Lyneborg & Kolind"
                      })}
                    />
                    <figcaption className="mt-1 text-xs px-1 text-center">
                      "Optimering er intet, Automatisering er alt" (Optimization is nothing, Automation is everything) - Frits Lyneborg and Lars Kolind's influential mantra. Click to enlarge.
                    </figcaption>
                  </div>
                </figure>
              </>
            )}
            
            {/* Special content for Patents section - ArrangerKing */}
            {isPatentSection && achievement.title.includes("Music Arrangement Technology") && (
              <>
                <figure className="wiki-figure mb-2">
                  <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '250px' }}>
                    <img 
                      src={arrangerKingPackshot} 
                      alt="ArrangerKing - music arrangement software packshot" 
                      className="w-full cursor-pointer wiki-hover-gray" 
                      itemProp="image"
                      loading="lazy"
                      onClick={() => openImageModal({
                        src: arrangerKingPackshot,
                        alt: "ArrangerKing - music arrangement software packshot",
                        title: "ArrangerKing Music Arrangement Software",
                        caption: "ArrangerKing (2024) - Lyneborg's revolutionary music arrangement plugin that transforms musical ideas into complete arrangements with just a few clicks.",
                        source: "Barking Audio"
                      })}
                    />
                    <figcaption className="mt-1 text-xs px-1">
                      ArrangerKing (2024) - Lyneborg's revolutionary music arrangement plugin. Click to enlarge.
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
              </>
            )}
            
            {/* Special content for Make Magazine section - Google Trends */}
            {isMakeMagazineSection && achievement.title.includes("How to Make a Robot") && (
              <>
                <figure className="wiki-figure mb-4 mt-4">
                  <div className="float-right ml-4 mb-1 border border-wiki-border p-1 bg-wiki-light-gray wiki-mobile-float-reset" style={{ maxWidth: '450px' }}>
                    <img 
                      src={googleTrendsImage} 
                      alt="Google Trends graph showing spike in 'how to make a robot' searches after Frits Lyneborg's Make Magazine feature" 
                      className="w-full cursor-pointer wiki-hover-gray"
                      onClick={() => openImageModal({
                        src: googleTrendsImage,
                        alt: "Google Trends graph showing spike in 'how to make a robot' searches",
                        title: "Impact on 'How to Make a Robot' Google Searches",
                        caption: "Google Trends data showing the significant spike in worldwide searches for 'how to make a robot' following Lyneborg's Make Magazine feature in 2008.",
                        source: "Google Trends"
                      })}
                    />
                    <figcaption className="mt-1 text-xs px-1">
                      Google Trends data showing the spike in "how to make a robot" searches after Lyneborg's Make Magazine feature (2008). Click to enlarge.
                    </figcaption>
                  </div>
                </figure>
                <div className="mt-3 mb-3">
                  <p className="text-sm italic">
                    <a 
                      href="https://makezine.com/article/maker-news/how-to-make-a-robot/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wiki-blue wiki-external inline-flex items-center"
                    >
                      Make Magazine: "How to Make a Robot" - Original Article (2008)
                    </a>
                  </p>
                </div>
              </>
            )}
            
            {/* Special content for AI Innovation section - AI Art */}
            {isAISection && achievement.title.includes("AI-Generated Art") && (
              <>
                <div className="mt-4 mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* AI Artwork 1 */}
                    <figure className="wiki-figure">
                      <div className="border border-wiki-border p-1 bg-wiki-light-gray">
                        <img 
                          src={aiArtImage1}
                          alt="AI-generated artwork by Frits Lyneborg - abstract cityscape" 
                          className="w-full cursor-pointer wiki-hover-gray"
                          onClick={() => openImageModal({
                            src: aiArtImage1,
                            alt: "AI-generated artwork by Frits Lyneborg - abstract cityscape",
                            title: "AI-Generated Abstract Cityscape",
                            caption: "AI-generated artwork created by Frits Lyneborg using custom AI models and prompting techniques.",
                            source: "Frits Lyneborg"
                          })}
                        />
                        <figcaption className="mt-1 text-xs px-1">
                          AI-generated abstract cityscape (2022). Click to enlarge.
                        </figcaption>
                      </div>
                    </figure>
                    
                    {/* AI Artwork 2 */}
                    <figure className="wiki-figure">
                      <div className="border border-wiki-border p-1 bg-wiki-light-gray">
                        <img 
                          src={aiArtImage2} 
                          alt="AI-generated artwork by Frits Lyneborg - futuristic landscape" 
                          className="w-full cursor-pointer wiki-hover-gray"
                          onClick={() => openImageModal({
                            src: aiArtImage2,
                            alt: "AI-generated artwork by Frits Lyneborg - futuristic landscape",
                            title: "AI-Generated Futuristic Landscape",
                            caption: "AI-generated artwork created by Frits Lyneborg using custom AI models and prompting techniques.",
                            source: "Frits Lyneborg"
                          })}
                        />
                        <figcaption className="mt-1 text-xs px-1">
                          AI-generated futuristic landscape (2022). Click to enlarge.
                        </figcaption>
                      </div>
                    </figure>
                    
                    {/* AI Artwork 3 */}
                    <figure className="wiki-figure">
                      <div className="border border-wiki-border p-1 bg-wiki-light-gray">
                        <img 
                          src={aiArtImage3} 
                          alt="AI-generated artwork by Frits Lyneborg - abstract pattern" 
                          className="w-full cursor-pointer wiki-hover-gray"
                          onClick={() => openImageModal({
                            src: aiArtImage3,
                            alt: "AI-generated artwork by Frits Lyneborg - abstract pattern",
                            title: "AI-Generated Abstract Pattern",
                            caption: "AI-generated artwork created by Frits Lyneborg using custom AI models and prompting techniques.",
                            source: "Frits Lyneborg"
                          })}
                        />
                        <figcaption className="mt-1 text-xs px-1">
                          AI-generated abstract pattern (2023). Click to enlarge.
                        </figcaption>
                      </div>
                    </figure>
                    
                    {/* AI Artwork 4 */}
                    <figure className="wiki-figure">
                      <div className="border border-wiki-border p-1 bg-wiki-light-gray">
                        <img 
                          src={aiArtImage4} 
                          alt="AI-generated artwork by Frits Lyneborg - surreal composition" 
                          className="w-full cursor-pointer wiki-hover-gray"
                          onClick={() => openImageModal({
                            src: aiArtImage4,
                            alt: "AI-generated artwork by Frits Lyneborg - surreal composition",
                            title: "AI-Generated Surreal Composition",
                            caption: "AI-generated artwork created by Frits Lyneborg using custom AI models and prompting techniques.",
                            source: "Frits Lyneborg"
                          })}
                        />
                        <figcaption className="mt-1 text-xs px-1">
                          AI-generated surreal composition (2023). Click to enlarge.
                        </figcaption>
                      </div>
                    </figure>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </section>
      
      <ImagePreviewModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        image={selectedImage}
      />
    </>
  );
}