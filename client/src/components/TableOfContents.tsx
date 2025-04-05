import { Section } from "@/data/profile";
import { useState } from "react";

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="toc-container">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-sm">Contents</h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-wiki-blue text-xs hover:underline"
          aria-label={isCollapsed ? "Expand contents" : "Collapse contents"}
        >
          [{isCollapsed ? "show" : "hide"}]
        </button>
      </div>
      
      {!isCollapsed && (
        <nav aria-label="Table of contents">
          <ol className="list-none pl-1 text-sm">
            {sections.map((section, index) => (
              <li key={section.id} className="mb-1.5">
                <span className="inline-block w-5 text-right mr-1">{index + 1}.</span>
                <a 
                  href={`#${section.id}`} 
                  className="toc-link"
                  onClick={() => window.innerWidth < 768 && window.scrollTo({
                    top: document.getElementById(section.id)?.offsetTop || 0,
                    behavior: 'smooth'
                  })}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  );
}
