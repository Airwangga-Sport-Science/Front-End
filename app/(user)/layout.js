"use client"
import { Inter } from 'next/font/google'
import '../globals.css'
import IndexNavbar from "@/components/Navbars/IndexNavbar";
import "@/styles/globals.css";
import api from '@/utils/api';
import React from "react";
import { redirect } from 'next/navigation';


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


  if(initialized != false){
    if(authedUser){
      return (
        <html lang="en">
          <head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap"
            rel="stylesheet" />
          </head>
    
            <body className="antialiased bg-slate-100 font-poppins text-black ">
            <IndexNavbar user={authedUser}/>
              {children}
            </body>
        </html>
      )
    }
    else{
      redirect('/login')
    }
  }
  else{
    return (
      <html lang="en">
      <head>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap"
        rel="stylesheet" />
      </head>

        <body className="antialiased bg-slate-100 font-poppins text-black ">
        <IndexNavbar  />
          LOADING
        </body>
    </html>
    )
  }
}
