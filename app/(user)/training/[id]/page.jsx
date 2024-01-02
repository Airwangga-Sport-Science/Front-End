"use client"

import React from 'react'
import Image from 'next/image'
import api from '@/utils/api';
import { useParams } from 'next/navigation';

export default function TrainingDetail() {
  const [article, setArticle] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const id = useParams().id;

  async function getArticle() {
    const response = await api.getArticle(id);

    setArticle(response);

  }

  React.useEffect(() => {
    getArticle();
    setIsLoading(false);
  }, []);

  return (
    <div className='flex flex-col 2xl:w-[1440px] mt-20 mx-6 2xl:mx-auto'>
      <div className="flex flex-row gap-4">
      <Image src={'/img/img-1-1000x600.jpg'} alt='' width={200} height={200} className=' w-1/2 h-auto rounded-lg'></Image>
      <div className="flex flex-col bg-white shadow-xl rounded-xl px-6 py-6 w-full gap-3">
        <h3 className='text-xl font-semibold'>{article?.title}</h3>
        <p className=' text-slate-500'>{article?.position_names}</p>
        <p>
          {article?.body}
        </p>
        <h4 className='text-lg font-semibold'>
          Training Instruction
        </h4>
        <ul className='list-decimal mx-4 gap-2'>
          {article?.steps?.split(',').map((step, index) => (
            <li key={index}>{step}</li>
          ))}
          
        </ul>
      </div>
      </div>
    </div>
  )
}
