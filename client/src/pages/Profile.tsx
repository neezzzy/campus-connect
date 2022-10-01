import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="">
      <div className="container mx-auto my-40">
        <div className="relative w-5/6 mx-auto bg-blue-400 shadow-xl md:w-4/6 lg:w-3/6 xl:w-2/6">
          <div className="flex justify-center">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt=""
              className="absolute w-32 h-32 mx-auto border-4 border-white rounded-full shadow-2xl -top-20"
            />
          </div>

          <div className="mt-16">
            <h1 className="text-3xl font-bold text-center text-gray-900">
              Grace Simmons
            </h1>
            <p className="text-sm font-medium text-center black-gray-400">
              Student at Placeholder Software
            </p>

            <div className="w-full">
              <div className="w-full mt-5">Insert info here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
