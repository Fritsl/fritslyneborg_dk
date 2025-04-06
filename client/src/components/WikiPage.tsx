import { PersonData } from "@/data/profile";
import TableOfContents from "./TableOfContents";
import ContentSection from "./ContentSection";
import WikiSidebar from "./WikiSidebar";
import References from "./References";
import fritsImage from "@assets/FritsLyneborg_workshop.jpg";
import fritsPortrait from "@assets/PXL_20240528_100052148.PORTRAIT.jpg";
import { FaLinkedin } from "react-icons/fa";

interface WikiPageProps {
  person: PersonData;
}

export default function WikiPage({ person }: WikiPageProps) {
  const today = new Date();
  const lastEditedDate = today.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

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
      <header className="border-b border-wiki-border pb-2 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-wiki-serif" id="main-heading">{person.name}</h1>
          <a 
            href="https://www.linkedin.com/in/frits-lyneborg/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-wiki-blue hover:text-blue-700 transition-colors"
            aria-label="View Frits Lyneborg's LinkedIn profile"
          >
            <FaLinkedin className="text-2xl" />
            <span className="hidden sm:inline text-sm">LinkedIn Profile</span>
          </a>
        </div>
        <p className="text-sm text-gray-600 mt-1">My career centers on disruptive technologies—innovations that transform industries and create new markets. This focus naturally spans multiple fields, explaining the breadth of my work. As a front-runner in technological disruption, my current concentration on AI and automation represents a natural progression, as these are today's most transformative innovations. This Wikipedia-style format offers a comprehensive overview of this journey.</p>
      </header>

      {/* Main content with sidebar layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Main content */}
          <main className="flex-1 md:order-2 overflow-x-auto">
            {/* Introduction Section */}
            <section className="py-4" aria-labelledby="introduction-section">
              <h2 id="introduction-section" className="sr-only">Introduction</h2>
              <p className="text-base leading-relaxed" itemProp="description">
                <strong itemProp="givenName">{person.name}</strong> {person.introduction}
              </p>
            </section>

            {/* Mobile image - visible only on small screens */}
            <div className="md:hidden my-4">
              <figure className="mb-2" itemScope itemType="https://schema.org/ImageObject">
                <img 
                  src={fritsImage} 
                  alt="Frits Lyneborg giving a presentation" 
                  className="w-full border border-wiki-border"
                  loading="eager"
                  itemProp="contentUrl"
                />
                <figcaption className="text-xs mt-1 text-center text-gray-600" itemProp="caption">
                  Lyneborg presenting at a technology workshop
                </figcaption>
                <meta itemProp="name" content="Frits Lyneborg at a technology workshop" />
                <meta itemProp="description" content="Frits Lyneborg presenting at a technology workshop about innovation and robotics" />
              </figure>
            </div>

            {/* Table of Contents (mobile) - visible only on small screens */}
            <section className="md:hidden bg-wiki-light-gray p-4 border border-wiki-border rounded my-4 no-print sticky top-0 z-10 shadow-sm">
              <TableOfContents sections={person.sections} />
            </section>

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8 border-t border-wiki-border pt-6">
        <figure className="flex flex-col items-center" itemScope itemType="https://schema.org/ImageObject">
          <div className="border border-wiki-border p-1 bg-wiki-light-gray" style={{ maxWidth: '400px' }}>
            <img 
              src={fritsPortrait} 
              alt="Recent portrait of Frits Lyneborg (2024)" 
              className="w-full"
              loading="lazy"
              itemProp="contentUrl"
            />
          </div>
          <figcaption className="text-sm mt-2 text-center text-gray-600" itemProp="caption">
            Recent portrait of Frits Lyneborg (2024)
          </figcaption>
          <meta itemProp="name" content="Frits Lyneborg portrait 2024" />
          <meta itemProp="description" content="Recent professional portrait photograph of Frits Lyneborg taken in 2024" />
        </figure>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t border-wiki-border py-4 text-sm text-gray-600 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            This page was last edited on {lastEditedDate}
          </div>
          <div>
            <a 
              href="https://www.linkedin.com/in/frits-lyneborg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-wiki-blue hover:text-blue-700 transition-colors"
              aria-label="View Frits Lyneborg's LinkedIn profile"
            >
              <FaLinkedin className="text-lg" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
