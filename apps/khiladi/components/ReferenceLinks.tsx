import { IReferenceLink } from '@watch-guides/data';
import Link from 'next/link';

interface ReferenceLinksProps {
  referenceLinks: IReferenceLink[];
}

export const ReferenceLinks = (props: ReferenceLinksProps) => {
  return (
    <div className="max-w-4xl mx-auto mt-20 dark:text-white">
      <h2 className="text-3xl mb-6">References</h2>
      <ul className="list-disc list-inside">
        {props.referenceLinks.map((link) => (
          <li key={`Reference Link - ${link.title}`} className="mb-1.5">
            <Link href={link.url} passHref>
              <a
                target="_blank"
                rel="noreferrer"
                className="underline transition-opacity hover:opacity-60 focus:opacity-60"
              >
                {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
