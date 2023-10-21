import React from "react";

export default function CardStatistic() {
  let count: number = 1;

  const isOdd = (number: number): boolean => number % 2 !== 0;

  return (
    <div className="bg-white mb-6 shadow-xl rounded-xl px-6 pt-6 pb-12 justify-between mx-6 h-fit">
      <div className="flex flex-row justify-between">
        <h3 className="text-4xl font-semibold">Player Statistic</h3>
        <div className="flex flex-row gap-2">
          <div className="bg-blue-400 text-white h-12 px-6 rounded-xl font-semibold text flex align-middle">
            <span className="my-auto">Recommendation</span>
          </div>
          <div className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold text flex align-middle">
            <span className="my-auto">Update</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap mt-8 justify-between gap-4 h-fit">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className={`flex flex-row justify-between w-64 my-1 ${
              isOdd(index) ? "bg-white" : "bg-gray-200"
            } px-4 py-2 rounded-lg`}
          >
            <h5>Shooting</h5>
            <h5>70</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
