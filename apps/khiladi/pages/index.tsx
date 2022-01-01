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
import { useEffect, useState } from 'react';
import { ContentCard } from '../components/ContentCard';
import { ContentList } from '../components/ContentList';
import { ContentTypeTag } from '../components/ContentTypeTag';

import Header from '../components/Header';
import { ImdbLogo } from '../components/logos/ImdbLogo';
import { TmdbLogo } from '../components/logos/TmdbLogo';
import { ReferenceLinks } from '../components/ReferenceLinks';
import { SearchBox } from '../components/SearchBox';

export function Index(props: IData) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  // console.log(props);

  // Keeping this unnecessary code for future reference for other complex watch guides

  const [searchResults, setSearchResults] = useState<IContent[]>([]);

  useEffect(() => {
    setSearchResults(props.content);
  }, [props.content]);

  const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const results = props.content.filter((content) =>
      content.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="bg-gray-50">
      <Header title={props.title} description={props.description} />
      <div className="container mx-auto -mt-16">
        <div className="flex items-center justify-end mb-20">
          <SearchBox onInputHandler={handleOnInput} />
        </div>

        <ContentList contents={searchResults} />

        <ReferenceLinks referenceLinks={props.referenceLinks} />
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
