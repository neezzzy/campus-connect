import React, { useState } from "react";

type Props = {};

const AvatarMenu = (props: Props) => {
  const [menuOpened, setMenuOpened] = useState(true);

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };
  return (
    <>
      <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
        <span className="sr-only">User Menu</span>


        <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
          <span className="font-semibold">Grace Simmons</span>
          <span className="text-sm text-gray-600">Student</span>
        </div>

        <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="user profile photo"
            className="h-full w-full object-cover"
          />
        </span>

        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="hidden sm:block h-6 w-6 text-gray-300"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>

        <div
          id="dropdown"
          className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
        >
          <ul className="py-1" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>

      </button>
    </>
  );
};

export default AvatarMenu;
