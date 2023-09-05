import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow mt-4">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693815536/bowl-with-spoon-svgrepo-com_1_mvy5p5.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            Reciper
          </span>
        </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="https://github.com/pablosierra-dev" className="mr-4 hover:underline md:mr-6">Pablo Sierra</a>
            </li>
            <li>
              <a href="https://github.com/dayecharry" className="mr-4 hover:underline md:mr-6">Alvaro Cabrera</a>
            </li>
            <li>
              <a href="https://github.com/sarardguezhe" className="mr-4 hover:underline md:mr-6">Sara Rodríguez</a>
            </li>
            <li>
              <a href="https://github.com/JuanFelipeCB01" className="hover:underline">Juan Felipe</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      </div>
    </footer>
  );
}
