import { Section } from "@/data/profile";

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <>
      <div className="font-bold mb-2">Contents</div>
      <ol className="list-decimal list-inside">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="toc-link">{section.title}</a>
          </li>
        ))}
      </ol>
    </>
  );
}
