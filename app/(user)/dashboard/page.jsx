"use client";
import React, { useEffect, useState } from 'react'
import CardTable from '@/components/Cards/CardTable'
import TrainingModal from '@/components/Popups/TrainingModal'
import DeleteArticleModal from '@/components/Popups/DeleteArticleModal'
import api from '../../../utils/api';

export default function Page() {

  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);



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
  function handleSearch(e) {
    const searchQuery = e.target.value.toLowerCase();
    if (searchQuery === "") {
      setArticles(tempArticles);
    } else {
      setArticles(tempArticles.filter(article => 
        article.title.toLowerCase().includes(searchQuery) || 
        article.body.toLowerCase().includes(searchQuery)
      ));
    }
  }


  async function handleDataChange() {
    console.log("handleDataChange");
    const response = await api.getArticles();
    setArticles(response);
  }
  
  function handleOpenModalDelete(id=null) {
    setArticleId(id);
    setIsCloseModalOpen(true);
  }
  useEffect(() => {
    getArticles();
  }, [isRecommendationModalOpen]);

  return (
    <div className='flex flex-col '>
      <TrainingModal isOpen={isRecommendationModalOpen} closeModal={() => setIsRecommendationModalOpen(false)} handleDataChange={handleDataChange} id={articleId} setArticleId={setArticleId}/>
      <DeleteArticleModal isOpen={isCloseModalOpen} closeModal={() => setIsCloseModalOpen(false)} handleDataChange={handleDataChange}  id={articleId} />
      <div className="h-2/3 2xl:px-4 px-20 py-8 2xl:w-[1440px] w-full  mx-auto">
        <div className="flex md:flex-row flex-col gap-3 justify-end my-4">

          <input type="text" name="" id="" className="p-3 text-slate-500 rounded-xl border-0 shadow-md" placeholder="Search Catologue" onChange={handleSearch}/>
        </div>
        <CardTable articles={articles} openModalTraining={() => setIsRecommendationModalOpen(true)} handleOpenModal={handleOpenModal} handleDataChange={handleDataChange} handleOpenModalDelete={handleOpenModalDelete} />
      </div>
    </div>

  )
}
