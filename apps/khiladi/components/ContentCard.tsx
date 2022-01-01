import {
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/outline';
import { IContent } from '@watch-guides/data';
import Image from 'next/image';
import Link from 'next/link';
import { ContentTypeTag } from './ContentTypeTag';
import { ImdbLogo } from './logos/ImdbLogo';
import { TmdbLogo } from './logos/TmdbLogo';

interface ContentCardProps {
  content: IContent;
}

export const ContentCard = (props: ContentCardProps) => {
  const getDBLink = (content: IContent) => {
    switch (content.type) {
      case 'Movie':
        return `https://www.themoviedb.org/movie/${content.db.id}`;
      case 'Series':
        // TODO: Change it with AnimeDB for anime series
        return `https://www.themoviedb.org/tv/${content.db.id}`;
      default:
        return '';
    }
  };

  return (
    <li>
      <div
        className="flex items-center shadow-xl border border-gray-200 max-w-4xl mx-auto mb-12 bg-white rounded-md overflow-hidden dark:bg-zinc-900 dark:text-white dark:border-zinc-700 hover:scale-[1.01] focus:scale-[1.01] transition-transform"
        tabIndex={0}
      >
        <div className="relative h-96 w-1/3">
          <Image
            src={props.content.posterUrl}
            layout="fill"
            alt={`Poster of ${props.content.title}`}
            objectFit="cover"
          />
        </div>
        <div className="pl-12 pr-8 px-8 w-2/3 ">
          <ContentTypeTag type={props.content.type} />

          <h2 className="text-4xl py-5 font-light">
            {props.content.title} ({props.content.year})
          </h2>

          <div className="flex items-center">
            <p className="flex items-center text-sm font-light mr-6">
              <span className="text-primary dark:text-rose-500 opacity-60 h-5 inline-block mr-1.5">
                <ClockIcon className="h-full" />
              </span>
              {props.content.length}
            </p>
            <p className="flex items-center text-sm font-light mr-6">
              <span className="text-primary dark:text-rose-500 opacity-60 h-5 inline-block mr-1.5">
                <CurrencyDollarIcon className="h-full" />
              </span>
              {props.content.revenue ? `$ ${props.content.revenue}` : 'N/A'}
            </p>
            <p className="flex items-center text-sm font-light">
              <span className="text-primary dark:text-rose-500 opacity-60 h-5 inline-block mr-1.5">
                <CalendarIcon className="h-full" />
              </span>
              {props.content.releaseDate}
            </p>
          </div>

          <p className="mt-5 mb-7 font-light text-gray-600 dark:text-white/70">
            {props.content.description.length > 300
              ? props.content.description.slice(0, 300) + '...'
              : props.content.description}
          </p>

          <p className="text-sm">
            <Link href={`https://www.imdb.com/title/${props.content.imdbID}/`}>
              <a
                target="_blank"
                rel="noreferrer"
                className="underline hover:opacity-60 focus:opacity-60 transition-opacity mr-6"
              >
                <span className="inline-block h-3 w-8 mr-2">
                  <ImdbLogo />
                </span>
                Check details on IMDB
              </a>
            </Link>
            <Link href={getDBLink(props.content)}>
              <a
                target="_blank"
                rel="noreferrer"
                className="underline hover:opacity-60 focus:opacity-60 transition-opacity"
              >
                <span className="inline-block h-3 w-8 mr-2">
                  <TmdbLogo />
                </span>
                Check details on {props.content.db.name}
              </a>
            </Link>
          </p>
        </div>
      </div>
    </li>
  );
};
