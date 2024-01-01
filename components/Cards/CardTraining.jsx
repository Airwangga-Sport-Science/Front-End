import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardTraining({article}) {
  return (
    <div className="relative flex flex-row break-words gap-6 w-6/12 ">
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col bg-white mb-6 shadow-xl rounded-xl px-6 py-6 h-80 ">
          <div className="flex flex-row justify-between h-20">
            <h3 className=" font-semibold text-4xl ">
              Training Recommendation
            </h3>
            <div className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold text flex align-middle">
              <span className="my-auto">More..</span>
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-6">
            <Link href={'/training/' + article[0].id} className="flex-col text-center justify-center align-middle relative ">
              <Image
                src={"/img/img-1-1000x600.jpg"}
                width={200}
                height={600}
                className="h-48 w-80 rounded-xl filter brightness-75"
                alt=""
              />
              <h3 className="absolute text-left px-6 text-2xl font-semibold text-white bottom-4 ">
                {article[0].title}
              </h3>
            </Link>
            <Link href={'/training/' + article[1].id} className="flex-col text-center justify-center align-middle relative">
              <Image
                src={"/img/img-1-1000x600.jpg"}
                width={200}
                height={600}
                className="h-48 w-80 rounded-xl filter brightness-75"
                alt=""
              />
              <h3 className="absolute text-left px-6 text-2xl font-semibold text-white bottom-4">
                {article[1].title}
              </h3>
            </Link>
            <Link href={'/training/' + article[2].id} className="flex-col text-center justify-center align-middle relative">
              <Image
                src={"/img/img-1-1000x600.jpg"}
                width={200}
                height={600}
                className="h-48 w-80 rounded-xl filter brightness-75"
                alt=""
              />
              <h3 className="absolute text-left px-6 text-2xl font-semibold text-white bottom-4">
                {article[2].title}
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
