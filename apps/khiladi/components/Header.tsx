import { Dialog } from '@headlessui/react';
import {
  BookOpenIcon,
  ClipboardCopyIcon,
  XCircleIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import KhiladiLogo from '../public/images/khiladi-logo.png';

interface HeaderProps {
  title: string;
  description: string;
}

export function Header(props: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const shortLinkRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (shortLinkRef.current) {
      const url = shortLinkRef.current.value;

      shortLinkRef.current.select();
      shortLinkRef.current.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(url);

      shortLinkRef.current.classList.add('bg-green-50', 'text-green-900');
      shortLinkRef.current.value = 'Copied to your clipboard!';
      setTimeout(() => {
        shortLinkRef.current.value = url;
        shortLinkRef.current.classList.remove('bg-green-50', 'text-green-900');
      }, 1500);
    }
  };

  return (
    <div className="bg-hero bg-[#000000DD] bg-cover bg-blend-overlay text-white h-[650px] [clip-path:polygon(0_0,100%_0,100%_75%,0%_100%)]">
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

        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <div className="relative bg-white rounded max-w-lg mx-auto ">
              <div className="px-10 py-6">
                <Dialog.Title className="text-2xl mb-3">
                  Share this guide to your friends!
                </Dialog.Title>
                <Dialog.Description className="text-gray-500">
                  Our watch guides can help your family and friends to get full
                  experience of different franchises, so let&#39;s help them by
                  sharing this guide with this short link!
                </Dialog.Description>

                <div className="flex items-center mt-4 rounded-md">
                  <input
                    type="text"
                    name="share-link"
                    id="share-link"
                    disabled
                    value={'https://bit.ly/3zgJlOM'}
                    className="px-3 w-full bg-gray-100 rounded-sm h-12 cursor-text rounded-l-md"
                    ref={shortLinkRef}
                  />
                  <button
                    className="h-12 px-4 bg-primary hover:opacity-70 focus:opacity-70 text-white rounded-r-md"
                    onClick={handleOnClick}
                  >
                    <ClipboardCopyIcon className="h-5" />
                  </button>
                </div>
              </div>
              <div className="bg-gray-100 px-10 py-6">
                <h3 className="uppercase font-bold tracking-wide text-gray-600 mb-2">
                  Share to Social Media
                </h3>

                <p>
                  <FacebookShareButton
                    url="https://bit.ly/3eGRQti"
                    quote="WatchGuide for Khiladi Franchise"
                    className="hover:opacity-60 focus:opacity-60 transition-opacity"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <TwitterShareButton
                    url="https://bit.ly/3eGRQti"
                    title="WatchGuide for Khiladi Franchise"
                    className="ml-4 hover:opacity-60 focus:opacity-60 transition-opacity"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>

                  <TelegramShareButton
                    url="https://bit.ly/3eGRQti"
                    title="WatchGuide for Khiladi Franchise"
                    className="ml-4 hover:opacity-60 focus:opacity-60 transition-opacity"
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>

                  <WhatsappShareButton
                    url="https://bit.ly/3eGRQti"
                    title="WatchGuide for Khiladi Franchise"
                    separator=":: "
                    className="ml-4 hover:opacity-60 focus:opacity-60 transition-opacity"
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>

                  <RedditShareButton
                    url="https://bit.ly/3eGRQti"
                    title="WatchGuide for Khiladi Franchise"
                    className="ml-4 hover:opacity-60 focus:opacity-60 transition-opacity"
                  >
                    <RedditIcon size={32} round />
                  </RedditShareButton>
                </p>
              </div>
            </div>
          </div>
        </Dialog>

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
