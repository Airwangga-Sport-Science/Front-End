"use client"
import { Inter } from 'next/font/google'
import '../globals.css'
import IndexNavbar from "@/components/Navbars/IndexNavbar";
import "@/styles/globals.css";
import api from '@/utils/api';
import React, { Suspense } from "react";
import { redirect } from 'next/navigation';
import Loading from '../(home)/loading';


export default function RootLayout({ children }) {

  const [authedUser, setAuthedUser] = React.useState(null);
  const [initialized, setInitialized] = React.useState(false);

  async function checkLoggedIn() {
    const accessToken = api.getAccessToken();
    if (accessToken) {
      const data  = await api.getUserLoggedIn();
      setAuthedUser(data);
      setInitialized(true);
    }
  }

  React.useEffect(() => {
    checkLoggedIn();
  }, []); // Provide an empty dependency array

  async function handleLogOut(){
    api.putAccessToken(null);
    setAuthedUser(null);
  }
  

  return (
    <html lang="en">
      <head>
      <title>Airwangga Sport Center</title>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap"
        rel="stylesheet" />
      </head>

        <body className="antialiased bg-white pt-10 font-poppins text-black overflow-x-hidden min-h-screen">
        {
          initialized ? (
            <IndexNavbar user={authedUser} handleLogOut={handleLogOut}/>
          ) : (
            <IndexNavbar />
          )
        }
        
          
        <Suspense fallback={<Loading />}>{children}</Suspense>
        </body>
    </html>
  )
}
