import React from "react";
import { BiCaretDown, BiCheck } from "react-icons/bi";
import useComponentVisible from "../hooks/useComponentVisible";

type Props = {
  query: string;
  onQueryChange: (a: string) => void;
  sortBy: string;
  onSortByChange: (a: string) => void;
  orderBy: string;
  onOrderByChange: (a: string) => void;
};

type DropDownProps = {
  toggle: boolean;
  sortBy: string;
  onSortByChange: (a: string) => void;
  orderBy: string;
  onOrderByChange: (a: string) => void;
};

const DropDown = ({
  toggle,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}: DropDownProps) => {
  if (!toggle) {
    return null;
  }
  return (
    <div
      className="origin-top-right absolute right-0 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          onClick={() => onSortByChange("companyName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Company Name {sortBy === "companyName" && <BiCheck />}
        </div>
        <div
          onClick={() => onSortByChange("size")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Group Size {sortBy === "size" && <BiCheck />}
        </div>
        <div
          onClick={() => onSortByChange("location")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Location {sortBy === "location" && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("asc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem"
        >
          Asc {orderBy === "asc" && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("desc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Desc {orderBy === "desc" && <BiCheck />}
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({
  query,
  onQueryChange,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}: Props) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  return (
    <div className="m-5 w-50">
      <div className="align-self-end">
        <div className="mt-1 relative rounded-md shadow-sm justify-self-end ">
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(event) => {
              onQueryChange(event.target.value);
            }}
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <div ref={ref}>
              <button
                type="button"
                onClick={() => {
                  setIsComponentVisible(!isComponentVisible);
                }}
                className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Sort By <BiCaretDown className="ml-2" />
              </button>
              <DropDown
                toggle={isComponentVisible}
                sortBy={sortBy}
                onSortByChange={(mySort) => onSortByChange(mySort)}
                orderBy={orderBy}
                onOrderByChange={(myOrder) => onOrderByChange(myOrder)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
