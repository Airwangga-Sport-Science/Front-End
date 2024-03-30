import React, { useState } from "react";
import PropTypes from "prop-types";
import CardRow from "./CardRow";
import api from "@/utils/api";
// components


export default function CardTable({ articles, openModalTraining,handleOpenModal, handleDataChange, handleOpenModalDelete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  async function handleDelete(id) {
    await api.deleteArticle(id);
    handleDataChange();
  }
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
            {currentArticles.map((article) => (
                <CardRow key={article.id} {...article} handleOpenModal={handleOpenModal} handleDelete={handleDelete} handleOpenModalDelete={handleOpenModalDelete} />
              ))}

            </tbody>
          </table>
        </div>
        <div className="flex justify-center my-4">
          <ul className="flex pl-0 rounded list-none flex-wrap gap-2">
            {Array.from({ length: Math.ceil(articles.length / itemsPerPage) }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`${
                    currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                  } hover:bg-blue-400 hover:text-white w-10 h-10 my-auto rounded-full`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

