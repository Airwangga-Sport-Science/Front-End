import React from 'react'
import Image from 'next/image'

export default function TrainingDetail() {
  return (
    <div className='flex flex-col 2xl:w-[1440px] mt-20 mx-6 2xl:mx-auto'>
      <div className="flex flex-row gap-4">
      <Image src={'/img/img-1-1000x600.jpg'} alt='' width={200} height={200} className=' w-1/2 h-auto rounded-lg'></Image>
      <div className="flex flex-col bg-white shadow-xl rounded-xl px-6 py-6 w-full gap-3">
        <h3 className='text-xl font-semibold'>Running 10 M</h3>
        <p className=' text-slate-500'>RW,CAM</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam facere magni doloremque beatae dolorum perferendis? Ullam inventore rerum, voluptatum dolores consectetur cupiditate nemo, quasi illo necessitatibus reiciendis quo nihil. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error at pariatur incidunt maiores nemo porro dolorum labore alias, numquam reiciendis ea, sunt voluptatibus. Voluptatum nihil doloribus tempore officia voluptas eius!
        </p>
        <h4 className='text-lg font-semibold'>
          Training Instruction
        </h4>
        <ul className='list-decimal mx-4 gap-2'>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, vitae dignissimos quas odit ea nemo soluta quidem porro iste nisi non facere fuga reiciendis placeat ipsam debitis aut cupiditate repudiandae!</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, vitae dignissimos quas odit ea nemo soluta quidem porro iste nisi non facere fuga reiciendis placeat ipsam debitis aut cupiditate repudiandae!</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, vitae dignissimos quas odit ea nemo soluta quidem porro iste nisi non facere fuga reiciendis placeat ipsam debitis aut cupiditate repudiandae!</li>
        </ul>
      </div>
      </div>
    </div>
  )
}
