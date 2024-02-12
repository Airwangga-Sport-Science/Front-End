import React from "react";
import PropTypes from "prop-types";
import CardRow from "./CardRow";
// components

// import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ articles, openModalTraining,handleOpenModal }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" 
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg "
                }
              >
                Training Tables
              </h3>
            </div>
            <button className="bg-blue-700 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={openModalTraining}> 
              Create Training
            </button>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left col-span-1" 
                  }
                >
                  Training Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left col-span-1"
                  }
                >
                  Position
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left w-1/2" 
                  }
                >
                  Short Desc
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Action
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " 
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <CardRow key={article.id} {...article} handleOpenModal={handleOpenModal}/>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

