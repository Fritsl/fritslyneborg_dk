import { PersonData } from "@/data/profile";
import TableOfContents from "./TableOfContents";
import ContentSection from "./ContentSection";
import WikiSidebar from "./WikiSidebar";
import References from "./References";
import EmailLink from "./EmailLink";
import fritsImage from "@assets/FritsLyneborg_workshop.jpg";
import fritsPortrait from "@assets/PXL_20240528_100052148.PORTRAIT.jpg";
import gdprchatImage from "@assets/gdprchat-screenshot.png";
import bildoLogo from "@assets/bildo-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

interface WikiPageProps {
  person: PersonData;
}

export default function WikiPage({ person }: WikiPageProps) {
  // Using a fixed statement about AI generation instead of an edit date
  const pageInfoText = "This page is generated and maintained by AI based on publicly available information about Frits Lyneborg";

  return (
    <article className="bg-white text-wiki-heading font-wiki-sans" itemScope itemType="https://schema.org/Person">
      {/* Schema.org metadata */}
      <meta itemProp="name" content={person.name} />
      <meta itemProp="alternateName" content="Frits Lyneborg" />
      <meta itemProp="description" content={person.introduction.substring(0, 200) + '...'} />
      <meta itemProp="jobTitle" content={person.details.fields} />
      <meta itemProp="nationality" content={person.details.nationality} />
      <meta itemProp="knowsAbout" content={person.details.knownFor} />
      {person.details.birthYear && <meta itemProp="birthDate" content={person.details.birthYear} />}
      <meta itemProp="url" content={window.location.href} />
      <link itemProp="sameAs" href="https://www.linkedin.com/in/frits-lyneborg/" />
      
      {/* Additional structured data for skills and achievements */}
      <meta itemProp="hasOccupation" content={person.details.fields.split(',').join(', ')} />
      <meta itemProp="alumniOf" content="IT University of Copenhagen" />
      
      {/* Header */}
      <header className="border-b border-wiki-border pb-2 max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 mt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-wiki-serif" id="main-heading">{person.name}</h1>
          <div className="flex items-center gap-3">
            <EmailLink showText={false} hideTextOnMobile={true} />
            <a 
              href="https://www.linkedin.com/in/frits-lyneborg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-wiki-blue hover:text-blue-700 transition-colors"
              aria-label="View Frits Lyneborg's LinkedIn profile"
            >
              <FaLinkedin className="text-xl" />
              <span className="hidden sm:inline text-sm">LinkedIn Profile</span>
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">"Throughout my career, I've consistently identified transformative technologies before mainstream adoption—from open source web solutions in 2003, anti-spam systems in 2005, and robotics communities in 2008 to autonomous drones in 2010 and early LLM creative implementations in 2023. Today, AI and automation are the most disruptive technologies in the market, and they have my full focus."</p>
        
        <p className="text-xs text-gray-500 mt-2">This page is generated and maintained by AI based on publicly available information about Frits Lyneborg</p>
      </header>

      {/* Main content with sidebar layout */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row">
          {/* Main content */}
          <main className="flex-1 md:order-2 overflow-x-auto">
            {/* Introduction Section */}
            <section className="py-2" aria-labelledby="introduction-section">
              <h2 id="introduction-section" className="sr-only">Introduction</h2>
              <p className="text-base leading-relaxed" itemProp="description">
                <strong itemProp="givenName">{person.name}</strong> {person.introduction}
              </p>
            </section>

            {/* Featured Projects */}
            <section className="my-4 border border-wiki-border bg-wiki-light-gray p-4 rounded">
              <h3 className="text-lg font-semibold mb-4">Current Projects</h3>
              
              {/* Bildo.app (2026) */}
              <div className="flex flex-col md:flex-row gap-4 items-start mb-6 pb-6 border-b border-wiki-border">
                <div className="w-full md:w-1/4">
                  <a 
                    href="https://bildo.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:shadow-lg transition-shadow"
                  >
                    <img 
                      src={bildoLogo} 
                      alt="Bildo.app logo"
                      className="w-full h-auto rounded"
                      data-testid="img-bildo"
                    />
                  </a>
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                    <a 
                      href="https://bildo.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wiki-blue hover:underline inline-flex items-center gap-1"
                      data-testid="link-bildo"
                    >
                      Bildo.app
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-sm font-normal text-gray-500">(2026 - Beta)</span>
                  </h4>
                  <p className="text-sm leading-relaxed mb-3">
                    An innovative agentic application platform that reimagines software discovery. Apps are presented in a video-like format where hovering triggers silent demos—similar to YouTube's autoplay preview—but users can interact with fully functional applications, view them in fullscreen, and engage through comments. The platform demonstrates expertise in agentic AI systems, interactive web development, and user experience innovation.
                  </p>
                  <a 
                    href="https://bildo.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-wiki-blue hover:underline"
                    data-testid="link-visit-bildo"
                  >
                    Visit bildo.app
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* GDPRchat.eu (2025) */}
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-1">
                  <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                    <a 
                      href="https://gdprchat.eu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wiki-blue hover:underline inline-flex items-center gap-1"
                      data-testid="link-gdprchat"
                    >
                      gdprchat.eu
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-sm font-normal text-gray-500">(2025)</span>
                  </h4>
                  <p className="text-sm leading-relaxed mb-3">
                    Enterprise SaaS platform with Microsoft SSO integration, multi-tenant self-provisioning, per-user usage metering and throttling, automated token cost optimization, multi-layer PII redaction for real-time chat and document uploads, and automated billing infrastructure. Designed, developed, and deployed as sole technical founder.
                  </p>
                  <a 
                    href="https://gdprchat.eu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-wiki-blue hover:underline"
                    data-testid="link-visit-gdprchat"
                  >
                    Visit gdprchat.eu
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="w-full md:w-1/2">
                  <a 
                    href="https://gdprchat.eu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block border border-wiki-border hover:shadow-lg transition-shadow"
                  >
                    <img 
                      src={gdprchatImage} 
                      alt="GDPRchat.eu - A chatbot like ChatGPT, but is safe to use at work"
                      className="w-full h-auto"
                      data-testid="img-gdprchat"
                    />
                  </a>
                </div>
              </div>
            </section>

            {/* Mobile image and TOC side by side on small screens */}
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
              <figure className="sm:order-2" itemScope itemType="https://schema.org/ImageObject">
                <div className="border border-wiki-border">
                  <img 
                    src={fritsImage} 
                    alt="Frits Lyneborg giving a presentation" 
                    className="w-full"
                    loading="eager"
                    itemProp="contentUrl"
                  />
                </div>
                <figcaption className="text-xs mt-1 text-center text-gray-600" itemProp="caption">
                  Lyneborg presenting at a technology workshop
                </figcaption>
                <meta itemProp="name" content="Frits Lyneborg at a technology workshop" />
                <meta itemProp="description" content="Frits Lyneborg presenting at a technology workshop about innovation and robotics" />
              </figure>
              
              {/* Table of Contents (mobile) */}
              <section className="bg-wiki-light-gray border border-wiki-border rounded p-2 sm:order-1 no-print z-10 text-sm">
                <strong className="block mb-1">Contents</strong>
                <TableOfContents sections={person.sections} />
              </section>
            </div>

            {/* Content Sections */}
            {person.sections.map((section) => (
              <ContentSection key={section.id} section={section} />
            ))}

            {/* References */}
            <References references={person.references} />
          </main>

          {/* Sidebar with TOC - visible only on medium and larger screens */}
          <WikiSidebar person={person} />
        </div>
      </div>

      {/* Recent portrait */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 mt-4 mb-4 border-t border-wiki-border pt-4">
        <figure className="flex flex-col md:flex-row items-center gap-6" itemScope itemType="https://schema.org/ImageObject">
          <div className="border border-wiki-border bg-wiki-light-gray md:w-1/3" style={{ maxWidth: '350px' }}>
            <img 
              src={fritsPortrait} 
              alt="Recent portrait of Frits Lyneborg (2024)" 
              className="w-full"
              loading="lazy"
              itemProp="contentUrl"
            />
          </div>
          <figcaption className="text-sm md:w-2/3 text-center md:text-left text-gray-600" itemProp="caption">
            <p className="mb-1">Recent portrait of Frits Lyneborg (2024)</p>

          </figcaption>
          <meta itemProp="name" content="Frits Lyneborg portrait 2024" />
          <meta itemProp="description" content="Recent professional portrait photograph of Frits Lyneborg taken in 2024" />
        </figure>
      </div>

      {/* Footer */}
      <footer className="mt-4 border-t border-wiki-border py-2 text-xs text-gray-600 max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            {pageInfoText}
          </div>
          <div className="flex items-center gap-4">
            <EmailLink />
            <a 
              href="https://www.linkedin.com/in/frits-lyneborg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-wiki-blue hover:text-blue-700 transition-colors"
              aria-label="View Frits Lyneborg's LinkedIn profile"
            >
              <FaLinkedin className="text-sm" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
