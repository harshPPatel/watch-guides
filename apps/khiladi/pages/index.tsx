import {
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import { IContent, IData, KhiladiData } from '@watch-guides/data';
import {} from '@watch-guides/data';
import Image from 'next/image';
import Link from 'next/link';
import { ContentTypeTag } from '../components/ContentTypeTag';

import Header from '../components/Header';
import { ImdbLogo } from '../components/logos/ImdbLogo';
import { TmdbLogo } from '../components/logos/TmdbLogo';

export function Index(props: IData) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  // console.log(props);

  // Keeping this unnecessary code for future reference for other complex watch guides
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
    <main className="bg-gray-50">
      <Header title={props.title} description={props.description} />
      <div className="container mx-auto -mt-16">
        <div className="flex items-center justify-end mb-20">
          <div className="relative flex items-center">
            {/* TODO: add search functionality */}
            <input
              type="search"
              name="search"
              id="search"
              className="px-5 py-2 border border-gray-300 rounded-md shadow-md peer"
              placeholder="Search..."
            />
            <label
              htmlFor="search"
              className="text-gray-400 absolute right-5 z-10 cursor-text peer-focus:text-accent-dark hidden peer-placeholder-shown:block"
            >
              <SearchIcon height={20} />
            </label>
          </div>
        </div>

        <div>
          <ul>
            {props.content.map((content: IContent) => (
              <li key={content.imdbID}>
                <div
                  className="flex items-center shadow-xl border-gray-200 max-w-4xl mx-auto mb-5 bg-white"
                  tabIndex={0}
                >
                  <div className="relative h-96 w-1/3">
                    <Image
                      src={content.posterUrl}
                      layout="fill"
                      alt={`Poster of ${content.title}`}
                      objectFit="cover"
                    />
                  </div>
                  <div className="pl-12 pr-8 px-8 w-2/3 ">
                    <ContentTypeTag type={content.type} />

                    <h2 className="text-4xl py-5 font-light">
                      {content.title} ({content.year})
                    </h2>

                    <div className="flex items-center">
                      <p className="flex items-center text-sm font-light mr-6">
                        <span className="text-primary opacity-60 h-5 inline-block mr-1.5">
                          <ClockIcon className="h-full" />
                        </span>
                        {content.length}
                      </p>
                      <p className="flex items-center text-sm font-light mr-6">
                        <span className="text-primary opacity-60 h-5 inline-block mr-1.5">
                          <CurrencyDollarIcon className="h-full" />
                        </span>
                        {content.revenue ? `$ ${content.revenue}` : 'N/A'}
                      </p>
                      <p className="flex items-center text-sm font-light">
                        <span className="text-primary opacity-60 h-5 inline-block mr-1.5">
                          <CalendarIcon className="h-full" />
                        </span>
                        {content.releaseDate}
                      </p>
                    </div>

                    <p className="mt-5 mb-7 font-light text-gray-600">
                      {content.description.length > 300
                        ? content.description.slice(0, 300) + '...'
                        : content.description}
                    </p>

                    <p className="text-sm">
                      <Link
                        href={`https://www.imdb.com/title/${content.imdbID}/`}
                      >
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
                      <Link href={getDBLink(content)}>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:opacity-60 focus:opacity-60 transition-opacity"
                        >
                          <span className="inline-block h-3 w-8 mr-2">
                            <TmdbLogo />
                          </span>
                          Check details on {content.db.name}
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="max-w-4xl mx-auto mt-20">
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
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: KhiladiData,
  };
}

export default Index;
