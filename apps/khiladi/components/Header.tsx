import { BookOpenIcon } from '@heroicons/react/outline';
import { IShortLinks } from '@watch-guides/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShareDialogue } from './ShareDialogue';

interface HeaderProps {
  title: string;
  description: string;
  shortLinks: IShortLinks;
  logo: StaticImageData;
}

export function Header(props: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-hero px-5 bg-[#000000DD] bg-cover bg-blend-overlay text-white md:h-[650px] pb-10 sm:[clip-path:polygon(0_0,100%_0,100%_75%,0%_100%)]">
      <div className="container mx-auto">
        <nav className="h-24 flex items-center">
          <Link href="/" passHref>
            <a className="flex items-center transition-opacity hover:opacity-60 focus:opacity-60">
              <BookOpenIcon className="h-5 w-5 mr-1.5" />
              WatchGuides
            </a>
          </Link>
          <a
            href="mailto:support@watchguides.info"
            className="ml-auto mr-5 text-sm font-thin transition-opacity hover:opacity-60 focus:opacity-60"
          >
            Submit Suggestion
          </a>

          {/* TODO: add common share the guide option? Dialogue with short link */}
          <a
            href=""
            className="text-xs font-thin py-1.5 px-4 bg-primary rounded-sm transition-colors hover:bg-primary/70 focus:bg-primary/70"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
          >
            Share the Guide
          </a>
        </nav>

        <ShareDialogue
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          franchiseTitle={props.title}
          shortLinks={props.shortLinks}
        />

        <div className="h-16 w-52 flex relative md:mt-12 mt-5">
          {/* TODO: Take the src and alt from props */}
          <Image
            src={props.logo}
            alt={`Logo of ${props.title}`}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <h1 className="font-light text-5xl my-8 ">{props.title}</h1>
        <p className="opacity-70 max-w-3xl leading-6">{props.description}</p>
      </div>
    </div>
  );
}

export default Header;
