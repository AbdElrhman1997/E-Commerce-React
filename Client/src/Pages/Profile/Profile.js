import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import "./Profile.scss";
import MobileNav from "../../Components/MoblieNav/MobileNav";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.user));
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    window.location.pathname = "/";
  };
  return (
    <section className="profile min-h-screen bg-gray-100">
      <div className="container">
        <div
          class="flex items-center text-main hover:text-main-hover dark:text-white cursor-pointer pt-8 "
          onClick={() => {
            window.history.back();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
          <p className="text-2xl pl-2 leading-none dark:hover:text-gray-200">
            Back
          </p>
        </div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div class=" px-8 py-6 mx-4 text-left bg-white shadow-lg md:w-2/5 lg:w-1/3 sm:w-3/4 w-4/5">
            <div className="text-center">
              <span className="rounded-full bg-gray-100 p-3 inline-block">
                <span>
                  <FaUserAlt className="w-6 h-6" />
                </span>
              </span>
            </div>
            <h3 class="text-2xl font-bold text-center"> {user.userName}</h3>
            <div class="mt-4">
              <div class="mt-4">
                <dl className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm text-gray-500 font-bold">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-bold text-gray-500">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      +1 555-555-5555
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-bold text-gray-500">Bio</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce eget velit quam.
                    </dd>
                  </div>
                </dl>
              </div>

              <div class="flex">
                <button
                  class="w-full px-6 py-2 mt-8 text-white bg-main hover:bg-main-hover rounded-lg hover:bg-blue-900 font-bold"
                  onClick={logOut}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </section>
  );
};

export default Profile;
