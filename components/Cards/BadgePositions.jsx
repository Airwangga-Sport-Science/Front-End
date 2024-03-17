import React from 'react'

export default function BadgePositions({name,active}) {

    function handleHover(name){
      document.getElementById(name).classList.add('border-blue-500');
      document.getElementById(name).classList.add('border-1');
    }
    function handleLeave(name){
      document.getElementById(name).classList.remove('border-blue-500');
      document.getElementById(name).classList.remove('border-1');
    }
  
    return (
      <div
        className={`flex flex-row justify-between my-1 bg-slate-200 px-3 py-1 rounded-lg w-24`}
        onMouseOver={handleHover.bind(this, name)}
        onMouseLeave={handleLeave.bind(this, name)}
      >
        <div className={active ? 'w-3 h-3 rounded-full  my-auto bg-red-500' : 'bg-black w-3 h-3 rounded-full  my-auto'}></div>
        <h5>{name}</h5>
      </div>
    );
  }
