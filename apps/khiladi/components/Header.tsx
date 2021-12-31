import { BookOpenIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import KhiladiLogo from '../public/images/khiladi-logo.png';

interface HeaderProps {
  title: string;
  description: string;
}

export function Header(props: HeaderProps) {
  return (
    <div className="bg-hero bg-[#000000DD] bg-cover bg-blend-overlay text-white h-[650px] [clip-path:polygon(0_0,100%_0,100%_75%,0%_100%)]">
      <div className="container mx-auto">
        <nav className="h-24 flex items-center">
          <Link href="/" passHref>
            <a className="flex items-center">
              <BookOpenIcon className="h-5 w-5 mr-1.5 text-blue-800" />
              WatchGuides
            </a>
          </Link>
          <a
            href="mailto:watchguides@harshpatel.info"
            className="ml-auto mr-5 text-sm font-thin"
          >
            Submit Suggestion
          </a>

          {/* TODO: add common share the guide option? Dialogue with short link */}
          <a
            href=""
            className="text-xs font-thin py-1.5 px-4 bg-primary rounded-sm"
          >
            Share the Guide
          </a>
        </nav>

        <div className="h-16 w-52 flex relative mt-12">
          {/* TODO: Take the src and alt from props */}
          <Image
            src={KhiladiLogo}
            alt="Khiladi Logo"
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
