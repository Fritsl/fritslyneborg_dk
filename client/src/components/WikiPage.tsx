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
      <meta itemProp="url" content="https://fritslyneborg.dk/" />
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
              <h3 className="text-lg font-semibold mb-4">Current Project</h3>

              {/* GDPRchat.eu (2025–present) */}
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
                      GDPRChat.eu
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-sm font-normal text-gray-500">(2025 – present)</span>
                  </h4>
                  <p className="text-sm leading-relaxed mb-2">
                    GDPRChat.eu is an AI chatbot platform operated by FRITS AI ApS, positioned as a European alternative to ChatGPT. It runs entirely on European infrastructure: <a href="https://mistral.ai" target="_blank" rel="noopener noreferrer" className="text-wiki-blue hover:underline">Mistral AI</a> (Paris) for language, <a href="https://blackforestlabs.ai" target="_blank" rel="noopener noreferrer" className="text-wiki-blue hover:underline">Black Forest Labs</a> (Freiburg) for FLUX image generation, and <a href="https://www.hetzner.com" target="_blank" rel="noopener noreferrer" className="text-wiki-blue hover:underline">Hetzner</a> (Germany) for hosting. No data leaves the EU.
                  </p>
                  <p className="text-sm leading-relaxed mb-2">
                    Lyneborg is the sole founder of GDPRChat.eu. He designed the system architecture, wrote the application code, and operates the platform through FRITS AI ApS.
                  </p>
                  <p className="text-sm leading-relaxed mb-2">
                    Features include a persona system that analyses a text sample to produce a reusable writing style, over 20 integrated tools (web search, Python execution, document creation, data visualization, interactive maps, Gantt charts, Mermaid diagrams), and a curated EU regulatory knowledge base covering the GDPR, EU AI Act, NIS2, DORA, and CSRD. Enterprise features include Microsoft Entra ID SSO, multi-tenant architecture, PII detection, and Stripe billing.
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    Available on the web, Android, and iOS.
                  </p>
                  <p className="text-sm leading-relaxed mb-3 text-gray-600">
                    GDPRChat.eu was developed during the EU's push for digital sovereignty, including the European Commission's EUR 200 billion AI investment plan and a declaration signed by all 27 member states on reducing strategic technology dependencies.
                  </p>
                  <a
                    href="https://gdprchat.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-wiki-blue hover:underline"
                    data-testid="link-visit-gdprchat"
                  >
                    Visit GDPRChat.eu
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
                      alt="GDPRChat.eu — European AI chatbot platform, an alternative to ChatGPT running 100% on EU infrastructure"
                      className="w-full h-auto"
                      data-testid="img-gdprchat"
                    />
                  </a>
                </div>
              </div>
            </section>

            {/* Earlier Projects */}
            <section className="my-4 border border-wiki-border p-3 rounded">
              <h3 className="text-base font-semibold mb-3">Earlier Projects</h3>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <div className="w-20 sm:w-24 shrink-0">
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
                  <h4 className="text-sm font-semibold mb-1 flex items-center gap-2">
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
                    <span className="text-xs font-normal text-gray-500">(2026, Beta)</span>
                  </h4>
                  <p className="text-sm leading-relaxed">
                    An agentic application platform for software discovery — apps presented as interactive video-like previews, with hovering triggering silent demos and full-screen interaction.
                  </p>
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
