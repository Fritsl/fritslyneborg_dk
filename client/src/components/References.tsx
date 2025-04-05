import { Reference } from "@/data/profile";

interface ReferencesProps {
  references: Reference[];
}

export default function References({ references }: ReferencesProps) {
  return (
    <section 
      id="references" 
      className="py-4 border-t border-wiki-border mt-4" 
      aria-labelledby="references-heading"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="References for Frits Lyneborg" />
      <meta itemProp="itemListOrder" content="Unordered" />
      <h2 id="references-heading" className="text-2xl font-wiki-serif mb-4" itemProp="headline">References</h2>
      <ol className="list-decimal list-outside pl-5 text-sm">
        {references.map((reference, index) => (
          <li 
            key={index} 
            className="mb-2" 
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
