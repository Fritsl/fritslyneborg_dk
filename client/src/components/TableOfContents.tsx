import { Section } from "@/data/profile";
import { useState } from "react";

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div 
      className="toc-container" 
      itemScope 
      itemType="https://schema.org/Table"
    >
      <meta itemProp="about" content="Frits Lyneborg career sections" />
      <div className="flex justify-between items-center mb-1">
        <h2 id="contents-heading" className="font-bold text-sm hidden md:block" itemProp="name">Contents</h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-wiki-blue text-xs hover:underline"
          aria-expanded={!isCollapsed}
          aria-controls="toc-nav"
          aria-label={isCollapsed ? "Expand contents" : "Collapse contents"}
        >
          [{isCollapsed ? "show" : "hide"}]
        </button>
      </div>
      
      {!isCollapsed && (
        <nav id="toc-nav" aria-labelledby="contents-heading" role="navigation">
          <ol 
            className="list-none pl-0 text-sm grid grid-cols-1 md:grid-cols-1 gap-0.5" 
            role="list"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ItemList"
          >
            {sections.map((section, index) => (
              <li 
                key={section.id} 
                className="my-0.5" 
                itemProp="item" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={`${index + 1}`} />
                <span className="inline-block w-4 text-right mr-1" aria-hidden="true">{index + 1}.</span>
                <a 
                  href={`#${section.id}`} 
                  className="toc-link"
                  itemProp="url"
                  onClick={() => window.innerWidth < 768 && window.scrollTo({
                    top: document.getElementById(section.id)?.offsetTop || 0,
                    behavior: 'smooth'
                  })}
                >
                  <span itemProp="name">{section.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  );
}
