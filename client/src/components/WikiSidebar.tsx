import { PersonData } from "@/data/profile";
import TableOfContents from "./TableOfContents";
import fritsImage from "@assets/FritsLyneborg_workshop.jpg";
import siemensLogo from "@assets/siemens_logo.png";
import n8nLogo from "@assets/n8nlogo.png";
import thielelogo from "@assets/thielelogo.png";
import btLogo from "@assets/BTlogo.jpg";
import urLogo from "@assets/ur_logo.svg";
import legoLogo from "@assets/lego_logo.svg";

interface WikiSidebarProps {
  person: PersonData;
}

export default function WikiSidebar({ person }: WikiSidebarProps) {
  return (
    <aside className="md:w-64 md:mr-8 md:order-1 hidden md:block no-print" aria-label="Sidebar information">
      <div className="sticky top-4 max-h-screen overflow-y-auto pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {/* Table of Contents */}
        <div className="bg-wiki-light-gray p-4 border border-wiki-border rounded mb-6" role="navigation" aria-label="Table of contents">
          <TableOfContents sections={person.sections} />
        </div>

        {/* Wikipedia-style info box */}
        <div className="bg-wiki-light-gray border border-wiki-border rounded overflow-hidden" role="complementary" aria-label="Personal information">
          <div className="bg-gray-200 px-4 py-2 font-bold text-center text-sm">{person.name}</div>
          
          {/* Profile image */}
          <div className="p-4 pb-2">
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
          
          <div className="p-4 pt-0">
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <th className="align-top text-left pr-2 pb-2">Nationality:</th>
                  <td className="pb-2">{person.details.nationality}</td>
                </tr>
                {person.details.birthYear && (
                  <tr>
                    <th className="align-top text-left pr-2 pb-2">Born:</th>
                    <td className="pb-2">{person.details.birthYear}</td>
                  </tr>
                )}
                <tr>
                  <th className="align-top text-left pr-2 pb-2">Fields:</th>
                  <td className="pb-2">{person.details.fields}</td>
                </tr>
                <tr>
                  <th className="align-top text-left pr-2 pb-2">Known for:</th>
                  <td className="pb-2">{person.details.knownFor}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Organizations section */}
        <div className="bg-wiki-light-gray border border-wiki-border rounded overflow-hidden mt-6" role="complementary" aria-label="Organizations">
          <div className="bg-gray-200 px-4 py-2 font-bold text-center text-sm">Notable Organizations</div>
          <div className="p-4 flex flex-wrap justify-center items-center gap-4">
            <a href="https://www.universal-robots.com/" target="_blank" rel="noopener noreferrer" className="inline-block" title="Universal Robots - External Advisor (2023)">
              <img 
                src={urLogo} 
                alt="Universal Robots Logo" 
                className="h-8 object-contain"
                loading="lazy"
              />
            </a>
            <a href="https://www.siemens.com/" target="_blank" rel="noopener noreferrer" className="inline-block" title="Siemens Germany - External Advisor (2013)">
              <img 
                src={siemensLogo} 
                alt="Siemens Logo" 
                className="h-8 object-contain"
                loading="lazy"
              />
            </a>
            <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer" className="inline-block" title="n8n - Workflow Automation Technology">
              <img 
                src={n8nLogo} 
                alt="n8n Logo" 
                className="h-8 object-contain"
                loading="lazy"
              />
            </a>
            <a href="https://www.thiele.dk/" target="_blank" rel="noopener noreferrer" className="inline-block" title="Thiele - Former Client">
              <img 
                src={thielelogo} 
                alt="Thiele Logo" 
                className="h-8 object-contain"
                loading="lazy"
              />
            </a>
            <a href="https://www.bt.dk/" target="_blank" rel="noopener noreferrer" className="inline-block" title="Berlingske Tidende - Former Client">
              <img 
                src={btLogo} 
                alt="Berlingske Tidende Logo" 
                className="h-8 object-contain"
                loading="lazy"
              />
            </a>
            <a href="https://www.lego.com/" target="_blank" rel="noopener noreferrer" className="inline-block" title="LEGO - Graphics for LEGO Ninjago: Wu-Cru (2015-2017)">
              <img 
                src={legoLogo} 
                alt="LEGO Logo" 
                className="h-8 object-contain"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
