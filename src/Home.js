import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Codeblock from './components/Codeblock';
import PreviewImage from './components/PreviewImage';

const Home = () => {
  const { logout, user } = useAuth0();

  const [form, setForm] = React.useState({
    title: 'Site Name',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, doloribus dolorem nisi accu`,
    image: 'https://via.placeholder.com/1200x630?text=Your+Image+Here',
  });

  const onChange = (e) => {
    // Stop if Title is More than 160 Characters
    if (e.target.name === 'title' && e.target.value.length > 60) {
      return;
    }
    // Stop if Description is More than 160 Characters
    if (e.target.name === 'description' && e.target.value.length > 160) {
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-auto max-w-3-xl px-4 mt-12">
      <div className="flex justify-between">
        <div className="bg-yellow-100 text-yellow-800 flex items-center justify-center px-4 rounded-sm">
          <h2 className="text-xl font-bold">Welcome {user.name}!</h2>
        </div>
        <div className="w-auto rounded-md shadow">
          <button
            onClick={() => logout()}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
      <div className="grid grid-cols-2 gap-6">
        <form>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="flex flex-col space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    autoComplete="off"
                    onChange={onChange}
                    type="text"
                    name="title"
                    id="title"
                    className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="description"
                    onChange={onChange}
                    id="description"
                    className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <button
                    type="button"
                    className="w-auto px-8 py-2 flex items-center  divide-x divide-gray-800 border border-gray-300 text-sm rounded-md text-gray-700 bg-white hover:bg-gray-100"
                  >
                    <span className="pr-2">Upload File</span>
                    <div className="pl-2">
                      <svg
                        class="w-4 h-4 "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokelineCap="round"
                          strokeLineJoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div>
          {/* Add Preview Image Component Here */}
          <PreviewImage form={form} />
        </div>
      </div>
      {/* Add Code Block Component Here */}
      <Codeblock form={form} />
    </div>
  );
};

export default Home;
