import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TrainingItem({ title, body, thumbnail, id, positions }) {
  return (
    <div className='flex gap-8 mx-6 my-4'>
      <Image src={'/img/img-1-1000x600.jpg'} alt='' width={200} height={200} className=' w-48 h-auto rounded-lg'></Image>
      <div className="flex flex-col bg-white shadow-xl rounded-xl px-6 py-6 justify-between w-full">
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className=' text-slate-500'>{positions}</p>
        <p>
          {body}
    
        </p>
        <Link className="bg-blue-400 text-white h-10 px-6 rounded-xl font-semibold text-sm flex align-middle w-fit mr-0 ml-auto" href={'/training/' + id + '/'}>
            <span className="my-auto">See Detail</span>
          </Link>
      </div>
    </div>
  )
}
