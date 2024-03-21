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
import { accordion } from '@nextui-org/theme';
import TableTrainingModal from '@/components/Popups/TableTrainingModal';
import CardStatsSelector from '@/components/Cards/CardStatsSelector';
import CardPositions from '@/components/Cards/CardPositions';

export default function Index() {



  const [player, setPlayer] = useState(null);
  const [attribute, setAttribute] = useState(null);
  const [activeAttribute, setActiveAttribute] = useState('');
  const [article, setArticle] = useState(null);
  const [positions, setPositions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
  const [isTableTrainingModalOpen, setIsTableTrainingModalOpen] = useState(false);

  async function fetchPlayer(){

    try {
      const fetchedPlayer = await api.getPlayer();
      const {player} = fetchedPlayer
      const {attribute} = fetchedPlayer

      setPlayer(player);
      setAttribute(attribute);
      setActiveAttribute(attribute[attribute.length-1]);
      setIsLoading(false);
      console.log(attribute[attribute.length-1],attribute.length-1);

    } catch (error) {
      console.error('Error fetching player data:', error);
      setIsLoading(false);
    }
  }


  async function handleUpdate(e){
    e.preventDefault();
    
  }
  useEffect(() => {
    fetchPlayer();
  }, []);

  useEffect(() => {
    setArticle(activeAttribute?.latest_articles);
    setPositions(activeAttribute?.positions);
  },[activeAttribute]);

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

  function openTableTrainingModal() {
    setIsTableTrainingModalOpen(true);
  }

  function closeTableTrainingModal() {
    setIsTableTrainingModalOpen(false);
  }

  return (
    <div className="flex flex-col 2xl:w-[1440px] mx-auto mt-12">
      <RecommendationModal isOpen={isRecommendationModalOpen} closeModal={closeRecommendationModal} />
      <PlayerModal isOpen={isPlayerModalOpen} closeModal={closePlayerModal} player={player} positions={positions} handleUpdate= {handleUpdate} setPlayer={setPlayer} />
      <TableTrainingModal isOpen={isTableTrainingModalOpen} closeModal={closeTableTrainingModal} activeAttribute={activeAttribute} positions={positions}/>
      
      <CardStatsSelector attribute={attribute} activeAttribute={activeAttribute} setActiveAttribute={setActiveAttribute} />
      <div className="flex md:flex-row flex-col  w-full md:gap-6 px-6">
        <CardProfile player={player} positions={positions} activeAttribute={activeAttribute} openPlayerModal={openPlayerModal}  />
        <CardPositions positions={positions} />
      </div>
      <CardStatistic activeAttribute={activeAttribute} positions={positions} />
      <CardTraining activeAttribute={activeAttribute} article={article} openTableTrainingModal={openTableTrainingModal}  />
    </div>
  );
}