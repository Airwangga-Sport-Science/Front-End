import React, { useState } from "react";

const TableDropdown = ({handleOpenModal, id}) => {
  // dropdown props
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div>
      <button
        id="dropdownDividerButton"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        <span className="">Action</span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownDivider"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
        >
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownDividerButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 "
                onClick={() => {
                  handleOpenModal(id)
                  toggleDropdown()
                }}
              >
                Update
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 "
              >
                Delete
              </a>
            </li>
          </ul>

        </div>
      )}
    </div>
  );
};

export default TableDropdown;
