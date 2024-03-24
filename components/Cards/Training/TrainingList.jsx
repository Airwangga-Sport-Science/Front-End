import React, { useState } from 'react';
import TrainingItem from './TrainingItem';

export default function TrainingList({ articles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change this number to adjust items per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentArticles.map((article) => (
        <TrainingItem key={article.id} {...article} />
      ))}
      {/* Pagination */}
      <div className="flex justify-center mt-4 mb-8">
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
  );
}
