import { SearchIcon } from '@heroicons/react/outline';

interface SearchBoxProps {
  onInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className="relative flex items-center">
      {/* TODO: add search functionality & move to separate component */}
      <input
        type="search"
        name="search"
        id="search"
        className="px-5 py-2 border border-gray-300 rounded-md shadow-md peer"
        placeholder="Search..."
        onInput={props.onInputHandler}
      />
      <label
        htmlFor="search"
        className="text-gray-400 absolute right-5 z-10 cursor-text peer-focus:text-accent-dark hidden peer-placeholder-shown:block"
      >
        <SearchIcon height={20} />
      </label>
    </div>
  );
};
