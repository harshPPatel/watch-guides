import { IContent } from '@watch-guides/data';
import { ContentCard } from './ContentCard';

interface ContentListProps {
  contents: IContent[];
}

export const ContentList = (props: ContentListProps) => {
  if (props.contents.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-light">🚫 Not found 🚫</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.contents.map((content: IContent) => (
        <ContentCard content={content} key={content.imdbID} />
      ))}
    </ul>
  );
};
