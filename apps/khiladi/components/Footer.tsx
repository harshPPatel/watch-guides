import { BookOpenIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  logo: StaticImageData;
  franchiseTitle: string;
}

export const Footer = (props: FooterProps) => (
  <footer className="bg-zinc-900 text-white py-8">
    <div className="container mx-auto ">
      <nav className="h-24 flex items-center justify-between">
        <Link href="/" passHref>
          <a className="flex items-center transition-opacity hover:opacity-60 focus:opacity-60">
            <BookOpenIcon className="h-5 w-5 mr-1.5" />
            WatchGuides
          </a>
        </Link>
        <div className="h-8 w-52 flex relative">
          {/* TODO: Take the src and alt from props */}
          <Image
            src={props.logo}
            alt={`${props.franchiseTitle} logo`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Link href="mailto:support@watchguides.info" passHref>
          <a className="underline transition-opacity hover:opacity-60 focus:opacity-60">
            support@watchguides.info
          </a>
        </Link>
      </nav>
    </div>
  </footer>
);
