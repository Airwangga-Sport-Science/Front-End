"use client";
import React, { useEffect, useState } from 'react'
import api from '@/utils/api';
import CardTableUser from '@/components/Cards/CardTableUser';
import UsersModal from '@/components/Popups/UsersModal';

export default function Page() {
  
  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  
  const [users, setUsers] = useState([]);
  const [tempArticles, setTempArticles] = useState([]);
  const [userId, setUserId] = useState(null);
  
  async function getUsers() {
    const response = await api.getUsers();
    console.log(response);
    setUsers(response);
  }
  
  async function handleOpenModal(id=null) {
    
    setUserId(id);
    setIsRecommendationModalOpen(true);
    
    
  };

  async function handleDataChange() {
    const response = await api.getUsers();
    setUsers(response);
  }
  

  useEffect(() => {
    getUsers();
  }, [isRecommendationModalOpen]);
  return (
    <div className='flex flex-col '>
      <UsersModal isOpen={isRecommendationModalOpen} closeModal={() => setIsRecommendationModalOpen(false)} handleDataChange={handleDataChange} users={users} user_id={userId} setUsers={setUsers}/>
      <div className="h-2/3 px-4 py-8 2xl:w-[1440px] mx-auto">
        <CardTableUser users={users} openModalTraining={() => setIsRecommendationModalOpen(true)} handleOpenModal={handleOpenModal} handleDataChange={handleDataChange} />
      </div>

    </div>

  )
}
