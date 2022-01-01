import { BookOpenIcon } from '@heroicons/react/outline';
import Link from 'next/link';

interface FooterProps {
  logo: StaticImageData;
  franchiseTitle: string;
}

export const Footer = (props: FooterProps) => (
  <footer className="bg-zinc-900 text-white py-8">
    <div className="container mx-auto md:px-0 px-5">
      <nav className="h-24 flex items-center justify-between sm:flex-row flex-col ">
        <Link href="/" passHref>
          <a className="flex items-center transition-opacity hover:opacity-60 focus:opacity-60 sm:mb-0 mb-3">
            <BookOpenIcon className="h-5 w-5 mr-1.5" />
            WatchGuides
          </a>
        </Link>
        <div className="h-8 w-52 flex relative">
          <img src={props.logo.src} alt={`${props.franchiseTitle} logo`} />
        </div>
        <Link href="mailto:support@watchguides.info" passHref>
          <a className="underline transition-opacity hover:opacity-60 focus:opacity-60 sm:pt-0 pt-5">
            support@watchguides.info
          </a>
        </Link>
      </nav>
    </div>
  </footer>
);
