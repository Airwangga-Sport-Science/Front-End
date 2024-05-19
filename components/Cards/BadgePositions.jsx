import React from 'react'

export default function BadgePositions({name, active, description, index}) {
    function handleHover(){
      const badgeElement = document.getElementById(name);
      badgeElement.classList.add('border-2');
      badgeElement.classList.add('border-red-500');
      const tooltipElement = document.getElementById(name+'-tooltip');
      tooltipElement.classList.add('block');
      tooltipElement.classList.remove('hidden');
    }
    function handleLeave(){
      const badgeElement = document.getElementById(name);
      badgeElement.classList.remove('border-2');
      badgeElement.classList.remove('border-red-500');
      const tooltipElement = document.getElementById(name+'-tooltip');
      tooltipElement.classList.remove('block');
      tooltipElement.classList.add('hidden');
    }
  
    return (
      <div>
        <div
          id={name+'-badge'}
          className={`flex flex-row justify-between my-1 bg-slate-200 px-3 py-1 rounded-lg w-24 relative`}
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
        >
          <div className={active ? 'w-3 h-3 rounded-full my-auto bg-red-500' : 'bg-black w-3 h-3 rounded-full my-auto'}></div>
          <h5 id={name+'-text'}>{name}</h5>
          <div id={name+'-tooltip'} className={`absolute hidden bg-slate-200 text-sm text-black w-[12.5rem] z-10 py-2 px-3 rounded shadow-lg transition-opacity duration-300 ease-in-out ${description ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={index < 6 ? { left: '-0.1rem', top: '-0.1rem' }: { right: '-0.1rem', top: '-0.1rem' }}>
            <div className="flex gap-2">
              <div className={active ? 'w-3 h-3 rounded-full my-auto bg-red-500' : 'bg-black w-3 h-3 rounded-full my-auto'}></div>
              <h5>{description}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
