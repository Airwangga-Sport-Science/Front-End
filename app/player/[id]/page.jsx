"use client"
import CardProfile from "@/components/Cards/CardProfile";
import CardStatistic from "@/components/Cards/CardStatistic";
import CardTraining from "@/components/Cards/CardTraining";
import { getPlayer } from "@/utils/data";
import { useParams } from "next/navigation";

import { useEffect, useState } from 'react';

export default function Index() {
  const params = useParams()
  const { id } = params

  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const fetchedPlayer = await getPlayer(id);
        setPlayer(fetchedPlayer);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching player data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col 2xl:w-[1440px] mx-auto mt-20">
      <div className="flex flex-row w-full md:gap-6 px-6">
        <CardProfile {...player} />
        <CardTraining />
      </div>
      <CardStatistic />
    </div>
  );
}