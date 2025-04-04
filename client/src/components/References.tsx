import { Reference } from "@/data/profile";

interface ReferencesProps {
  references: Reference[];
}

export default function References({ references }: ReferencesProps) {
  return (
    <section className="py-4 border-t border-wiki-border mt-4">
      <h2 className="text-2xl font-wiki-serif mb-4">References</h2>
      <ol className="list-decimal list-outside pl-5 text-sm">
        {references.map((reference, index) => (
          <li key={index} className="mb-2">
            <cite>
              {reference.author && `${reference.author}. `}
              "{reference.title}". 
              {reference.source && <><i>{reference.source}</i>, </>}
              {reference.year}.
              {reference.url && (
                <a 
                  href={reference.url} 
                  className="text-wiki-blue ml-1 wiki-external"
                  target="_blank" 
                  rel="noopener noreferrer"
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
