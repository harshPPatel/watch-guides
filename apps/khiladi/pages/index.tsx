import { IContent, IData, KhiladiData } from '@watch-guides/data';
import { useEffect, useState } from 'react';
import { ContentList } from '../components/ContentList';
import Header from '../components/Header';
import { ReferenceLinks } from '../components/ReferenceLinks';
import { SearchBox } from '../components/SearchBox';
import KhiladiLogo from '../public/images/khiladi-logo.png';

export function Index(props: IData) {
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
    <div className="bg-gray-50 dark:bg-zinc-800">
      <Header
        title={props.title}
        description={props.description}
        shortLinks={props.shortLinks}
        logo={KhiladiLogo}
      />
      <div className="container px-5 mx-auto md:-mt-16 mt-8 md:pb-16 pb-8">
        <div className="flex items-center justify-end md:mb-20 mb-10">
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
