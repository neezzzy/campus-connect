import React from "react";

type Props = {
  buttonText: string;
  icon: JSX.Element;
  redDot: boolean;
};

const CustomButton = ({ buttonText, icon, redDot }: Props) => {
  return (
    <>
      <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
        <span className="sr-only">{buttonText}</span>

        {redDot ? (
          <>
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
          </>
        ) : null}

        <div className="h-6 w-6">{icon}</div>
      </button>
    </>
  );
};

export default CustomButton;
