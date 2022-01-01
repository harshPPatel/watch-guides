import { SearchIcon } from '@heroicons/react/outline';

interface SearchBoxProps {
  onInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className="relative flex items-center">
      <input
        type="search"
        name="search"
        id="search"
        className="px-5 py-2 border border-gray-300 rounded-md shadow-md peer dark:bg-zinc-900 dark:border-zinc-800 dark:placeholder:text-gray-600 dark:text-zinc-400"
        placeholder="Search..."
        onInput={props.onInputHandler}
      />
      <label
        htmlFor="search"
        className="text-gray-400 absolute right-5 z-10 cursor-text peer-focus:text-accent-dark hidden peer-placeholder-shown:block dark:text-gray-600"
      >
        <SearchIcon height={20} />
      </label>
    </div>
  );
};
