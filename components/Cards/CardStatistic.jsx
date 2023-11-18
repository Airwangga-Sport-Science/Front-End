import React from 'react';

export default function CardStatistic({ openRecommendationModal }) {
  let count = 1;

  const isOdd = (count) => count % 2 !== 0;
  const [isEdit, setIsEdit] = React.useState(false);

  return (
    <div className="bg-white mb-6 shadow-xl rounded-xl px-6 pt-6 pb-12 justify-between mx-6 h-fit">
      <div className="flex flex-row justify-between">
        <h3 className="text-4xl font-semibold">Player Statistic</h3>
        <div className="flex flex-row gap-2">
          <button
            className="bg-blue-400 text-white h-12 px-6 rounded-xl font-semibold text flex align-middle"
            onClick={openRecommendationModal}
          >
            <span className="my-auto">Recommendation</span>
          </button>
          <button className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold text flex align-middle" onClick={() => setIsEdit(!isEdit)}>
            <span className="my-auto"> { isEdit ? 'Cancel' : 'Edit' }</span>
          </button>
        </div>
      </div>

      <div className="flex flex-row flex-wrap mt-8 justify-between gap-4 h-fit">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className={`flex flex-row justify-between w-64 my-1 ${
              isOdd(index) ? 'bg-white' : 'bg-gray-200'
            } px-4 py-2 rounded-lg`}
          >
            <h5>Shooting</h5>
            {isEdit ? (
              <div className="flex gap-2">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <p>70</p>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            ) : (
              <p>70</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}