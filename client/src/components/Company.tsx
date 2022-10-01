import React from "react";
import { Link } from "react-router-dom";

type Props = {
  companyName: string;
  location: string;
  size: string;
  projectName: string;
  projectDescription: string;
  logo: string;
};

const Company = ({
  location,
  size,
  companyName,
  projectDescription,
  projectName,
  logo,
}: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md px-5 m-5">
      <div className="md:flex">
        <div className="md:shrink-0 flex-4 px-5">
          <img
            className="h-48 w-full object-scale-down md:h-full md:w-48 p-5"
            src={logo}
            alt="brand image"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-medium text-gray-900 title-font mb-2">
            {companyName}
          </h1>
          <h3 className="text-xl font-medium text-gray-900 title-font mb-2">
            {projectName}
          </h3>
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700">
              {location}
            </span>
            <span className="mt-1 text-gray-500 text-sm">{size} people</span>
          </div>
          <p className="leading-relaxed">{projectDescription}</p>
          <Link
            to={`/companies/${companyName}`}
            className="text-blue-500 inline-flex items-center mt-4"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Company;
