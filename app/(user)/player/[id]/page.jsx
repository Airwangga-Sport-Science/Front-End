"use client";
import React, { useEffect, useState } from 'react';
import { getPlayer } from '@/utils/data';
import { useParams } from 'next/navigation';
import RecommendationModal from '@/components/Popups/RecommendationModal';
import PlayerModal from '@/components/Popups/PlayerModal';
import CardProfile from '@/components/Cards/CardProfile';
import CardStatistic from '@/components/Cards/CardStatistic';
import CardTraining from '@/components/Cards/CardTraining';

export default function Index() {
  const params = useParams();
  const { id } = params;

  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPlayer = await getPlayer(id);
        setPlayer(fetchedPlayer);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching player data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
        <CardTraining />
      </div>
      <CardStatistic openRecommendationModal={openRecommendationModal} />
    </div>
  );
}