"use client";
import React, { useEffect, useState } from 'react'
import api from '@/utils/api';
import CardTableUser from '@/components/Cards/CardTableUser';
import UsersModal from '@/components/Popups/UsersModal';
import DeleteUserModal from '@/components/Popups/DeleteUserModal';

export default function Page() {
  
  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  
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

  function handleOpenModalDelete(id=null) {
    setUserId(id);
    setIsCloseModalOpen(true);
  }

  async function handleDataChange() {
    const response = await api.getUsers();
    setUsers(response);
  }
  

  useEffect(() => {
    getUsers();
  }, [isRecommendationModalOpen]);
  return (
    <div className='flex flex-col '>
      <UsersModal isOpen={isRecommendationModalOpen} closeModal={() => setIsRecommendationModalOpen(false)} handleDataChange={handleDataChange} users={users} user_id={userId} setUsers={setUsers} setUserId={setUserId}/>
      <DeleteUserModal isOpen={isCloseModalOpen} closeModal={() => setIsCloseModalOpen(false)} handleDataChange={handleDataChange}  id={userId} />
      <div className="h-2/3 2xl:px-4 px-20 py-8 2xl:w-[1440px] w-full mx-auto">
        <CardTableUser users={users} openModalTraining={() => setIsRecommendationModalOpen(true)} handleOpenModal={handleOpenModal} handleDataChange={handleDataChange} setUserId={setUserId} handleOpenModalDelete={handleOpenModalDelete}  />
      </div>

    </div>

  )
}
