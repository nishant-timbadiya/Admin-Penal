import React, { useState } from "react";
import DashHeader from "./DashHeader";
import DashNav from "./DashNav";
import Free from "./Free";

function Company() {
  const [isNavClosed, setIsNavClosed] = useState(false);

  const handleMenuClick = () => {
    setIsNavClosed((prevIsNavClosed) => !prevIsNavClosed);
  };

  return (
    <div>
      <DashHeader handleMenuClick={handleMenuClick} />
      <Free />
      <div className="main-dashbord">
        <DashNav isNavClosed={isNavClosed} />
        <div className="w-full p-10 bg-white lg:z-30">
          <div className="grid lg:grid-cols-4 grid-cols-2 border rounded-md p-5 items-center  bg-blue-100">
            <div class=" col-span-3">
              <div class="mb-4">
                <label
                  for="company-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company-name"
                  id="company-name"
                  class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="mb-4">
                <label
                  for="company-bio"
                  class="block text-sm font-medium text-gray-700"
                >
                  Company Bio
                </label>
                <textarea
                  name="company-bio"
                  id="company-bio"
                  rows="3"
                  class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>

              <div class="mb-4">
                <label
                  for="profile-image"
                  class="block text-sm font-medium text-gray-700"
                >
                  Profile Image
                </label>
                <input
                  type="file"
                  name="profile-image"
                  id="profile-image"
                  accept="image/*"
                  class="mt-1 p-2 block w-full bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="mb-4">
                <label
                  for="cover-image"
                  class="block text-sm font-medium text-gray-700"
                >
                  Cover Image
                </label>
                <input
                  type="file"
                  name="cover-image"
                  id="cover-image"
                  accept="image/*"
                  class="mt-1 p-2 block w-full bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="mb-4">
                <label
                  for="contact-number"
                  class="block text-sm font-medium text-gray-700"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contact-number"
                  id="contact-number"
                  class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="mb-4">
                <label
                  for="instagram-handle"
                  class="block text-sm font-medium text-gray-700"
                >
                  Instagram Handle
                </label>
                <input
                  type="text"
                  name="instagram-handle"
                  id="instagram-handle"
                  class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="mb-4">
                <label
                  for="location-link"
                  class="block text-sm font-medium text-gray-700"
                >
                  Location Link
                </label>
                <input
                  type="text"
                  name="location-link"
                  id="location-link"
                  class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="text-center">
              <div className="mb-5">
                <button className="w-max bg-green-600 p-2 text-sm px-5 text-white rounded-full">
                  Create Company
                </button>
              </div>
              <div className="">
                <button className="w-max bg-red-600 p-2 text-sm px-5 text-white rounded-full">
                  Clear Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
