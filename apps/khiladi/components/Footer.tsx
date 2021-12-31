import { BookOpenIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';
import KhiladiLogo from '../public/images/khiladi-logo.png';

export const Footer = () => (
  <footer className="bg-zinc-900 text-white mt-20 py-8">
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
            src={KhiladiLogo}
            alt="Khiladi Logo"
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
