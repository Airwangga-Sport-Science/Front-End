import React from "react";


const CardProfile = ({ activeAttribute, player,positions, openPlayerModal }) => {
  function calculateAge(birthDateString) {

    const birthDate = new Date(birthDateString);
  
    const currentDate = new Date();
  
    let age = currentDate.getFullYear() - birthDate.getFullYear();
  
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
  
    return age;
  }

  console.log(positions, player,activeAttribute)
  return (
    <div className="flex flex-row gap-6 w-6/12">
      {/* User Image */}
      <img
        src={player.thumbnail}
        alt=""
        className="w-64 h-80 rounded-xl shadow-xl"
      />

      {/* User Details */}
      <div className="flex flex-col w-full">
        <div className="flex flex-col bg-white mb-6 shadow-xl rounded-xl px-6 pt-6 pb-12 h-80 justify-between">
          <div className="flex flex-row justify-between h-20">
            <div className="flex flex-col">
              <h3 className="font-semibold text-3xl">{player.name}</h3>
              <h4 className="text-xl text-gray-500">{player.player_alike}</h4>
            </div>
            <button className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold flex items-center" onClick={openPlayerModal}>
              <span className="my-auto">Update</span>
            </button>
          </div>

          {/* User Stats */}
          <div className="grid grid-cols-3 grid-rows-2 justify-between gap-y-6 mt-6">
            <div className="flex flex-col">
              <h4 className="text-sm text-center text-gray-500">Height</h4>
              <h3 className="text-2xl text-center  font-semibold">{activeAttribute.height}</h3>
              
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm text-center text-gray-500">Weight</h4>
              <h3 className="text-2xl text-center font-semibold">{activeAttribute.weight}</h3>
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm text-center text-gray-500">age</h4>
              <h3 className="text-2xl text-center font-semibold">{calculateAge(player.birth_date)}</h3>
            </div>
            <div className="flex flex-col col-span-3">
              <h4 className="text-sm text-center text-gray-500">Position</h4>
              {positions != undefined ? (
                <h3 className="text-2xl text-center font-semibold">{positions?.name}, {positions['pos2.name']}, {positions['pos3.name']}</h3>
              ) : (
                <h3 className="text-2xl text-center font-semibold">-</h3>
              )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
