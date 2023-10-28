import React from "react";
import Link from "next/link";
import Image from "next/image";
// components


export default function Navbar() {
  return (
    <>
      <nav className="top-0 z-50 w-screen absolute flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow font-poppins">
        <div className="container px-4 mx-auto flex flex-row items-center justify-between md:w-[1440px]">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <p
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
              >
                Notus Next JS
              </p>
            </Link>
            <Link href="/player/85139014">
              <p
                className=" text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
              >
                Dashboard
              </p>
            </Link>
            <Link href="/training">
              <p
                className=" text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
              >
                Training
              </p>
            </Link>
          </div>
          {/* <div className="flex flex-row gap-2">
          <Link href="/player/85139014">
              <p
                className=" text-sm leading-relaxed inline-block py-2 whitespace-nowrap font-bold"
              >
                Mbappe
              </p>
            </Link>
          <Image src={"/img/team-3-800x800.jpg"} alt="" width={24} height={24} className="rounded-full h-10 w-10"></Image>
          
          </div> */}
          <div >
          <Link href="/login" className="bg-blue-400 text-white h-10 px-6 rounded-xl font-semibold text-sm flex align-middle w-fit mr-0 ml-auto shadow-md">
              <p
                className=" text-sm leading-relaxed inline-block py-2 whitespace-nowrap font-bold"
              >
                Login
              </p>
            </Link>
          </div>
          </div>  
      </nav>
    </>
  );
}
