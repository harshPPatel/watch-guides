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
import { ContentCard } from '../components/ContentCard';
import { ContentTypeTag } from '../components/ContentTypeTag';

import Header from '../components/Header';
import { ImdbLogo } from '../components/logos/ImdbLogo';
import { TmdbLogo } from '../components/logos/TmdbLogo';
import { ReferenceLinks } from '../components/ReferenceLinks';

export function Index(props: IData) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  // console.log(props);

  // Keeping this unnecessary code for future reference for other complex watch guides

  return (
    <div className="bg-gray-50">
      <Header title={props.title} description={props.description} />
      <div className="container mx-auto -mt-16">
        <div className="flex items-center justify-end mb-20">
          <div className="relative flex items-center">
            {/* TODO: add search functionality & move to separate component */}
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
              <ContentCard content={content} key={content.imdbID} />
            ))}
          </ul>

          <ReferenceLinks referenceLinks={props.referenceLinks} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: KhiladiData,
  };
}

export default Index;
