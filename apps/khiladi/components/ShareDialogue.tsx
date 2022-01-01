import { Dialog } from '@headlessui/react';
import { ClipboardCopyIcon } from '@heroicons/react/outline';
import { IShortLinks } from '@watch-guides/data';
import { useRef } from 'react';
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

interface ShareDialogueInterface {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  franchiseTitle: string;
  shortLinks: IShortLinks;
}

export const ShareDialogue = (props: ShareDialogueInterface) => {
  const shortLinkRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (shortLinkRef.current) {
      const url = shortLinkRef.current.value;

      shortLinkRef.current.select();
      shortLinkRef.current.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(url);

      shortLinkRef.current.classList.add('bg-green-200', 'text-green-900');
      shortLinkRef.current.value = 'Copied to your clipboard!';
      setTimeout(() => {
        shortLinkRef.current.value = url;
        shortLinkRef.current.classList.remove('bg-green-200', 'text-green-900');
      }, 1500);
    }
  };
  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
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
                value={props.shortLinks.default}
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
                url={props.shortLinks.social}
                quote={`WatchGuide for ${props.franchiseTitle}`}
                className="hover:opacity-60 focus:opacity-60 transition-opacity"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={props.shortLinks.social}
                title={`WatchGuide for ${props.franchiseTitle}`}
                className="ml-4 hover:opacity-60 focus:opacity-60 transition-opacity"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <TelegramShareButton
                url={props.shortLinks.social}
                title={`WatchGuide for ${props.franchiseTitle}`}
                className="ml-4 hover:opacity-60 focus:opacity-60 transition-opacity"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>

              <WhatsappShareButton
                url={props.shortLinks.social}
                title={`WatchGuide for ${props.franchiseTitle}`}
                separator=":: "
                className="ml-4 hover:opacity-60 focus:opacity-60 transition-opacity"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <RedditShareButton
                url={props.shortLinks.social}
                title={`WatchGuide for ${props.franchiseTitle}`}
                className="ml-4 hover:opacity-60 focus:opacity-60 transition-opacity"
              >
                <RedditIcon size={32} round />
              </RedditShareButton>
            </p>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
