import { Reference } from "@/data/profile";

interface ReferencesProps {
  references: Reference[];
}

export default function References({ references }: ReferencesProps) {
  return (
    <section 
      id="references" 
      className="py-2 border-t border-wiki-border mt-3" 
      aria-labelledby="references-heading"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="References for Frits Lyneborg" />
      <meta itemProp="itemListOrder" content="Unordered" />
      <h2 id="references-heading" className="text-xl font-wiki-serif mb-2" itemProp="headline">References</h2>
      <ol className="list-decimal list-outside pl-5 text-sm grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
        {references.map((reference, index) => (
          <li 
            key={index} 
            className="mb-1" 
            itemScope 
            itemType="https://schema.org/CreativeWork"
            itemProp="itemListElement"
          >
            <meta itemProp="position" content={`${index + 1}`} />
            <cite>
              {reference.author && (
                <span itemProp="author">{reference.author}. </span>
              )}
              <span itemProp="name">"{reference.title}"</span>. 
              {reference.source && (
                <><i itemProp="publisher">{reference.source}</i>, </>
              )}
              <span itemProp="datePublished">{reference.year}</span>.
              {reference.url && (
                <a 
                  href={reference.url} 
                  className="text-wiki-blue ml-1 wiki-external"
                  target="_blank" 
                  rel="noopener noreferrer"
                  itemProp="url"
                >
                  Link
                </a>
              )}
            </cite>
          </li>
        ))}
      </ol>
    </section>
  );
}
