"use client";
import React, { useEffect, useState } from 'react'
import CardTable from '@/components/Cards/CardTable'
import CardStats from '@/components/Cards/CardStats'
import TrainingModal from '@/components/Popups/TrainingModal'
import api from '@/utils/api';

export default function Page() {
  // scroll vertical a bit on load
 


  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [tempArticles, setTempArticles] = useState([]);
  const [articleId, setArticleId] = useState(null);
  async function getArticles() {
    const response = await api.getArticles();
    console.log(response);
    setArticles(response);
    setTempArticles(response);
  }
  
  async function handleOpenModal(id) {
    setArticleId(id);
    setIsRecommendationModalOpen(true);
    
    
  };

  async function handleDataChange() {
    const response = await api.getArticles();
    setArticles(response);
  }
  

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div className='flex flex-col '>
      <TrainingModal isOpen={isRecommendationModalOpen} closeModal={() => setIsRecommendationModalOpen(false)} handleDataChange={handleDataChange} id={articleId}/>
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
        <CardTable articles={articles} openModalTraining={() => setIsRecommendationModalOpen(true)} handleOpenModal={handleOpenModal} />
      </div>
    </div>

  )
}
