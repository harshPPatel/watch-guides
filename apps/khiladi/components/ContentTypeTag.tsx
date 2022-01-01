import { TContentType } from '@watch-guides/data';

interface ContentTypeTagProps {
  type: TContentType;
}

export const ContentTypeTag = (props: ContentTypeTagProps) => {
  return (
    <div className="inline-block px-2 py-0.5 md:text-sm text-xs rounded-sm bg-amber-200/60 text-amber-700 dark:bg-amber-200/90 dark:text-amber-800">
      {props.type}
    </div>
  );
};
