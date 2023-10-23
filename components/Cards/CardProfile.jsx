import React from "react";

// Define the props
const CardProfile = ({ name, age }) => {
  return (
    <div className="flex flex-row gap-6 w-6/12">
      {/* User Image */}
      <img
        src="/img/team-1-800x800.jpg"
        alt=""
        className="w-64 h-80 rounded-xl shadow-xl"
      />

      {/* User Details */}
      <div className="flex flex-col w-full">
        <div className="flex flex-col bg-white mb-6 shadow-xl rounded-xl px-6 pt-6 pb-12 h-80 justify-between">
          <div className="flex flex-row justify-between h-20">
            <div className="flex flex-col">
              <h3 className="font-semibold text-3xl">{name}</h3>
              <h4 className="text-xl text-gray-500">Manchester City</h4>
            </div>
            <div className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold flex items-center">
              <span className="my-auto">Update</span>
            </div>
          </div>

          {/* User Stats */}
          <div className="grid grid-cols-3 grid-rows-2 justify-between gap-y-6 mt-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex-col text-center justify-center items-center"
              >
                <h5 className="text-lg font-semibold">Age</h5>
                <p className="text-base">12 Years</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
