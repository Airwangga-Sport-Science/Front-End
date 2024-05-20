"use client";
import UsersModal from '@/components/Popups/UsersModal';
import api from '@/utils/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaUsers } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
export default function Page() {

  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  const [authedUser, setAuthedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const accessToken = api.getAccessToken();
      if (accessToken) {
        const data = await api.getUserLoggedIn();
        setAuthedUser(data);
        console.log(data);
      }
    };

    const getUsers = async () => {
      const response = await api.getUsers();
      console.log(response);
      setUsers(response);
    };

    checkLoggedIn();
    getUsers();
  }, [isRecommendationModalOpen]);

  const handleOpenModal = async (id = null) => {
    setUserId(id);
    setIsRecommendationModalOpen(true);
  };

  const handleDataChange = async () => {
    const data = await api.getUserLoggedIn();
    setAuthedUser(data);
  };

  return (
    <div className='flex flex-col mx-auto mt-16 2xl:w-[1440px] 2xl:px-0 px-28'>
      <UsersModal isOpen={isRecommendationModalOpen} closeModal={() => setIsRecommendationModalOpen(false)} handleDataChange={handleDataChange} users={users} user_id={userId} setUsers={setUsers} setUserId={setUserId}/>
      <div className="flex justify-between">
        <h1 className='text-4xl font-bold mb-4'>Selamat Datang, {authedUser?.name}</h1>
        <button
          className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold flex items-center hover:bg-gray-200"
          onClick={() => handleOpenModal(authedUser?.id)}
        >
          <span className="my-auto">Update Profile</span>
        </button>
      </div>
      <div className='flex justify-between mt-8 gap-8'>
        <Link href="/dashboard/users" className='bg-blue-500 text-white w-1/2 h-64 px-6 rounded-xl font-semibold flex flex-col justify-between p-4 hover:bg-blue-600'>
          <h3 className=' text-4xl '>Dashboard User</h3>
          <FaUsers size={100} color="white" className='mr-0 ml-auto' />
        </Link>
        <Link href="/dashboard" className='bg-blue-500 text-white w-1/2 h-64 px-6 rounded-xl font-semibold flex flex-col justify-between p-4 hover:bg-blue-600'>
          <h3 className=' text-4xl '>Dashboard Training</h3>
          <FaClipboardList size={100} color="white" className='mr-0 ml-auto' />
        </Link>
      </div>

    </div>
  )
}
