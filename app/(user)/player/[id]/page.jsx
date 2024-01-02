"use client";
import React, { useEffect, useState } from 'react';
import { getPlayer } from '@/utils/data';
import { useParams } from 'next/navigation';
import RecommendationModal from '@/components/Popups/RecommendationModal';
import PlayerModal from '@/components/Popups/PlayerModal';
import CardProfile from '@/components/Cards/CardProfile';
import CardStatistic from '@/components/Cards/CardStatistic';
import CardTraining from '@/components/Cards/CardTraining';
import api from '@/utils/api';

export default function Index() {



  const [player, setPlayer] = useState(null);
  const [attribute, setAttribute] = useState(null);
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);

  async function fetchPlayer(){

    try {
      const fetchedPlayer = await api.getPlayer();
      const {player} = fetchedPlayer
      const {attribute} = fetchedPlayer
      const {article} = fetchedPlayer
      setPlayer(player);
      setAttribute(attribute);
      setArticle(article);
      setIsLoading(false);

    } catch (error) {
      console.error('Error fetching player data:', error);
      setIsLoading(false);
    }
  }


  
  useEffect(() => {
    fetchPlayer();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  function openRecommendationModal() {
    setIsRecommendationModalOpen(true);
  }

  function closeRecommendationModal() {
    setIsRecommendationModalOpen(false);
  }


  function openPlayerModal() {
    setIsPlayerModalOpen(true);
  }

  function closePlayerModal() {
    setIsPlayerModalOpen(false);
  }


  return (
    <div className="flex flex-col 2xl:w-[1440px] mx-auto mt-20">
      <RecommendationModal isOpen={isRecommendationModalOpen} closeModal={closeRecommendationModal} />
      <PlayerModal isOpen={isPlayerModalOpen} closeModal={closePlayerModal} />
      
      <div className="flex flex-row w-full md:gap-6 px-6">
        <CardProfile {...player} openPlayerModal={openPlayerModal} />
        <CardTraining article={article} />
      </div>
      <CardStatistic openRecommendationModal={openRecommendationModal} setAttribute={setAttribute} attribute={attribute} />
    </div>
  );
}