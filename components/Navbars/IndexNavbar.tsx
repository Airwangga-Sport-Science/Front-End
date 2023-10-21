import React from "react";
import Link from "next/link";
// components


export default function Navbar() {
  return (
    <>
      <nav className="top-0 z-50 w-screen absolute flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow font-poppins">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between md:w-[1440px]">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <p
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
              >
                Home
              </p>
            </Link>
            <Link href="/player/85139014">
              <p
                className=" text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
              >
                Dashboard
              </p>
            </Link>
          </div>
          </div>  
      </nav>
    </>
  );
}
