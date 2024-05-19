import React, { useEffect } from 'react'
import BadgePositions from './BadgePositions'

export default function CardPositions({positions}) {
  
  const[positionsList,setPositionsList] = React.useState([]);

  useEffect(() => {
    
    let list = positions? [positions['name'], positions['pos2.name'], positions['pos3.name']] : [];
    setPositionsList(list);
  }, [positions]);

  const master_positions = [
    { id: 3, name: 'RB', description: 'Right Back' },
    { id: 4, name: 'LB', description: 'Left Back' },
    { id: 5, name: 'CB', description: 'Center Back' },
    { id: 1, name: 'RWB', description: 'Right Wing Back' },
    { id: 2, name: 'LWB', description: 'Left Wing Back' },
    { id: 6, name: 'CDM', description: 'Central Defensive Midfielder' },
    { id: 7, name: 'LM', description: 'Left Midfielder' },
    { id: 8, name: 'RM', description: 'Right Midfielder' },
    { id: 9, name: 'LW', description: 'Left Winger' },
    { id: 10, name: 'RW', description: 'Right Winger' },
    { id: 11, name: 'CF', description: 'Center Forward' },
    { id: 13, name: 'ST', description: 'Striker' }
  ];



  return (
    <div className="relative flex flex-row break-words gap-6 md:w-6/12 w-full ">
			<div className="flex flex-col justify-between w-full">
				<div className="bg-white mb-6 shadow-xl rounded-xl px-6 py-4 h-80 relative">
				<div className="flex flex-row">
        <div>
        <img
            src={"/img/football-pitch-green.png"}
            alt=""
            className="rounded-xl shadow-xl h-72 bg-cover mr-2"
          />
        <div className={"absolute top-[12%] left-[13%] flex flex-col align-middle justify-center "}>
          <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('LB') ? 'bg-red-500' : 'bg-slate-300')} id='LB'></div>
          <span className='bg-slate-300 rounded-lg px-2 mt-1'>LB</span>
        </div>
        <div className={"absolute top-[47%] left-[13%] flex flex-col align-middle justify-center "}>
  <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('CB') ? 'bg-red-500' : 'bg-slate-300')} id='CB'></div>
  <span className='bg-slate-300 rounded-lg px-2 mt-1'>CB</span>
</div>

        <div className={"absolute top-[75%] left-[13%] flex flex-col-reverse align-middle justify-center "}>
  <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('RB') ? 'bg-red-500' : 'bg-slate-300')} id='RB'></div>
  <span className='bg-slate-300 rounded-lg px-2 mb-1'>RB</span>
</div>

<div className={"absolute top-[12%] left-[21%] flex flex-col align-middle justify-center "}>
  <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('LWB') ? 'bg-red-500' : 'bg-slate-300')} id='LWB'></div>
  <span className='bg-slate-300 rounded-lg px-2 mt-1'>LWB</span>
</div>

<div className={"absolute top-[75%] left-[21%] flex flex-col-reverse align-middle justify-center "}>
  <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('RWB') ? 'bg-red-500' : 'bg-slate-300')} id='RWB'></div>
  <span className='bg-slate-300 rounded-lg px-2 mb-1'>RWB</span>
</div>

<div className={"absolute top-[47%] left-[25%] flex flex-col align-middle justify-center "}>
  <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('CDM') ? 'bg-red-500' : 'bg-slate-300')} id='CDM'></div>
  <span className='bg-slate-300 rounded-lg px-2 mt-1'>CDM</span>
</div>

<div className={"absolute top-[12%] left-[34%] flex flex-col align-middle justify-center "}>
  <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('LM') ? 'bg-red-500' : 'bg-slate-300')} id='LM'></div>
  <span className='bg-slate-300 rounded-lg px-2 mt-1'>LM</span>
</div>

<div className={"absolute top-[75%] left-[34%] flex flex-col-reverse align-middle justify-center "}>
  <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('RM') ? 'bg-red-500' : 'bg-slate-300')} id='RM'></div>
  <span className='bg-slate-300 rounded-lg px-2 mb-1'>RM</span>
</div>

<div className={"absolute top-[12%] left-[47%] flex flex-col align-middle justify-center "}>
  <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('LW') ? 'bg-red-500' : 'bg-slate-300')} id='LW'></div>
  <span className='bg-slate-300 rounded-lg px-2 mt-1'>LW</span>
</div>

<div className={"absolute top-[75%] left-[47%] flex flex-col-reverse align-middle justify-center "}>
  <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('RW') ? 'bg-red-500' : 'bg-slate-300')} id='RW'></div>
  <span className='bg-slate-300 rounded-lg px-2 mb-1'>RW</span>
</div>

<div className={"absolute top-[47%] left-[50%] flex flex-col align-middle justify-center "}>
  <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('CF') ? 'bg-red-500' : 'bg-slate-300')} id='CF'></div>
  <span className='bg-slate-300 rounded-lg px-2 mt-1'>CF</span>
</div>

<div className={"absolute top-[47%] left-[57%] flex flex-col align-middle justify-center "}>
  <div className={"w-5 h-5 rounded-full mx-auto " + (positionsList.includes('ST') ? 'bg-red-500' : 'bg-slate-300')} id='ST'></div>
  <span className='bg-slate-300 rounded-lg px-2 mt-1'>ST</span>
</div>


				</div>
        <div className="flex flex-col mx-2 gap-1.5 flex-wrap h-72">
              {master_positions.map(position => (
                <BadgePositions key={position.id} name={position.name} active={positionsList.includes(position.name)} description={position.description} index={master_positions.indexOf(position)}/>
              ))}
            </div>
        </div>
        
          
        </div>
        
			</div>
		</div>
  )
}
