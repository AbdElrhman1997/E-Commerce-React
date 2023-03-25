import React from "react";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center my-8">
        <h2 className="text-2xl font-semibold mt-4">user.name</h2>
        <p className="text-gray-600 text-sm">user.email</p>
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2 my-8"></div>
    </div>
  );
};

export default Profile;
