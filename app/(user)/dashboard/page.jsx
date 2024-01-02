"use client";
import React, { useState } from 'react'
import CardTable from '@/components/Cards/CardTable'
import CardStats from '@/components/Cards/CardStats'
import TrainingModal from '@/components/Popups/TrainingModal'

export default function Page() {

  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);


  return (
    <div className='flex flex-col '>
      <TrainingModal isOpen={isRecommendationModalOpen} closeModal={() => setIsRecommendationModalOpen(false)} />
      <div className="flex flex-row justify-between 2xl:w-[1440px] mx-auto mt-20 h-full">
        <div className="w-1/4 px-4">
        <CardStats />
        </div>
        <div className="w-1/4 px-4">
        <CardStats />
        </div>
        <div className="w-1/4 px-4">
        <CardStats />
        </div>
        <div className="w-1/4 px-4">
        <CardStats />
        </div>
      </div>
      <div className="h-2/3 px-4 py-8 2xl:w-[1440px] mx-auto">
        <CardTable openModalTraining={() => setIsRecommendationModalOpen(true)} />
      </div>
    </div>

  )
}
