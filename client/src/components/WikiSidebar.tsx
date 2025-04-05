import { PersonData } from "@/data/profile";
import TableOfContents from "./TableOfContents";
import fritsImage from "@assets/FritsLyneborg_workshop.jpg";

interface WikiSidebarProps {
  person: PersonData;
}

export default function WikiSidebar({ person }: WikiSidebarProps) {
  return (
    <aside className="md:w-64 md:mr-8 md:order-1 hidden md:block no-print">
      <div className="sticky top-4 max-h-screen overflow-y-auto pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {/* Table of Contents */}
        <div className="bg-wiki-light-gray p-4 border border-wiki-border rounded mb-6">
          <TableOfContents sections={person.sections} />
        </div>

        {/* Wikipedia-style info box */}
        <div className="bg-wiki-light-gray border border-wiki-border rounded overflow-hidden">
          <div className="bg-gray-200 px-4 py-2 font-bold text-center text-sm">{person.name}</div>
          
          {/* Profile image */}
          <div className="p-4 pb-2">
            <figure className="mb-2">
              <img 
                src={fritsImage} 
                alt="Frits Lyneborg giving a presentation" 
                className="w-full border border-wiki-border"
              />
              <figcaption className="text-xs mt-1 text-center text-gray-600">
                Lyneborg presenting at a technology workshop
              </figcaption>
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
      </div>
    </aside>
  );
}
