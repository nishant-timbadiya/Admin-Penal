import React, {useState} from 'react'
import DashHeader from './DashHeader';
import DashNav from './DashNav';
import Free from './Free';

function News() {

    const [isNavClosed, setIsNavClosed] = useState(false);

    const handleMenuClick = () => {
      setIsNavClosed((prevIsNavClosed) => !prevIsNavClosed);
    };

  return (
    <div className=''>
        <DashHeader handleMenuClick={handleMenuClick} />
      <Free />
      <div className="main-dashbord">
        <DashNav isNavClosed={isNavClosed} />
        <div className="w-full p-10 bg-white lg:z-30">
        <div className="grid lg:grid-cols-4 grid-cols-2 border rounded-md p-5 items-center shadow-lg bg-blue-100">
            <div className="col-span-3">
              <div class="mx-auto">
                <div class="mb-4">
                  <label
                    for="title"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="image"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Image:
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    class="mt-1 p-2 block w-full bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="text"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Text:
                  </label>
                  <textarea
                    name="text"
                    id="text"
                    rows="3"
                    class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></textarea>
                </div>

                <div class="mb-4">
                  <label
                    for="data"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Data:
                  </label>
                  <input
                    type="date"
                    name="data"
                    id="data"
                    class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-5">
                <button className="w-max bg-green-600 p-2 text-sm px-5 text-white rounded-full">
                  Add News
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
  )
}

export default News