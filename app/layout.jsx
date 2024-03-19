"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import IndexNavbar from "@/components/Navbars/IndexNavbar";
import "@/styles/globals.css";
import api from '@/utils/api';
import React, { Suspense } from "react";
import { redirect } from 'next/navigation';
import Loading from './loading';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>Scoutition AI</title>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap"
        rel="stylesheet" />
      </head>

        <body className="antialiased bg-white pt-10 font-poppins text-black overflow-x-hidden min-h-screen">
        <IndexNavbar/>
          
        <Suspense fallback={<Loading />}>{children}</Suspense>
        </body>
    </html>
  )
}
