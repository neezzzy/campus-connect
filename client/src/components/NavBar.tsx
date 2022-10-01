import * as React from "react";
import { Link } from "react-router-dom";
import AvatarMenu from "./AvatarMenu";
import CustomButton from "./CustomButton";
import { FaBell, FaDoorClosed } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-grey-darkest">
          <Link
            className="no-underline text-grey-darkest hover:text-black"
            to="/"
          >
            Campus Connect
          </Link>
        </h1>
      </div>

      <div className="flex flex-shrink-0 items-center ml-auto">
        <AvatarMenu />
        <div className="border-l pl-3 ml-3 space-x-1">
          <CustomButton
            buttonText="Notifications"
            icon={<FaBell size={"24px"} />}
            redDot={true}
          />
          <CustomButton
            buttonText="Log out"
            icon={<FaDoorClosed size={"24px"} />}
            redDot={false}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
