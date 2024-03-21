"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaBasketball, FaDribbble, FaDumbbell, FaFacebook, FaFileContract, FaGithub, FaShoePrints, FaTwitter } from 'react-icons/fa6'


export default function Home() {
  return (
    <div>
    <section className="pt-20 bg-blueGray-200 -mt-24">
    <div className="container mb-40 mx-auto px-4">
      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <h3 className="text-5xl mb-8 font-semibold leading-normal text-blue-500">
          Scoutition AI
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          AI-based software to assist football players, especially young football players in Indonesia, in improving their performance quality, developed by <em>Airwangga Sport Techno Science Group</em> in collaboration with <em>Coach Ricky Nelson</em> and <em>Coach Timo Scheunemann</em>.</p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-12 text-blueGray-600">
          What are you waiting for? Start exploring and utilizing the features on Scoutition now!</p>
          <a href="/login" className="font-bold text-white bg-blue-500 active:bg-blue-600 uppercase px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mt-6 mr-1 mb-1 ease-linear transition-all duration-150" >
            Get Started
          </a>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative h-4/5 flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
            <img
              alt="..."
              src="/img/backdop.png"
              className=" h-96 object-cover align-middle rounded-lg"
            />
          
          </div>
        </div>
      </div>
    </div>
  </section>

<section className="relative py-20">
<div className="container mx-auto px-4">
  <div className="items-center flex flex-wrap">
    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img
        alt="..."
        className="max-w-full rounded-lg shadow-lg"
        src="/img/home-page-assets.jpg"
      />
    </div>
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
      <div className="md:pr-12">
        <div className="flex">
        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-200">
        <FaBasketball className='text-3xl' />
        </div>
        <h3 className="text-3xl font-semibold my-auto ml-4">About Us</h3>
        </div>
        <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, doloribus error sequi iure fugit, qui laboriosam obcaecati vero numquam inventore autem dolorum. Dolore ea voluptatum modi, soluta nulla illum culpa.
        </p>
        <ul className="list-none mt-6">
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                <FaShoePrints className='text-xl' />
                </span>
              </div>
              <div>
                <h4 className="text-blueGray-500">
                  Position Recommendation
                </h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                <FaFileContract className='text-xl' />
                </span>
              </div>
              <div>
                <h4 className="text-blueGray-500">
                  Stats Tracking
                </h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                <FaDumbbell className='text-xl' />
                </span>
              </div>
              <div>
                <h4 className="text-blueGray-500">
                  Training Catalogue
                </h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>
<section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our team</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, doloribus error sequi iure fugit, qui laboriosam obcaecati vero numquam inventore autem dolorum. Dolore ea voluptatum modi, soluta nulla illum culpa.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-1-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Rakyan Krisna</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Tech Lead (Scrum Master)
                    </p>
                    <div className="mt-6">
 
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-1-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Nabil Mustofa</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Software Engineer
                    </p>
                    <div className="mt-6">
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-1-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Aga</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Machine Learning Engineer
                    </p>
                    <div className="mt-6">

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="pt-20 mx-auto px-4 bg-blue-500">
        <div className="container mx-auto flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaTwitter className="text-lg mx-auto" />
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebook className="text-lg mx-auto" />
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaDribbble className="text-lg mx-auto text-black" />
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaGithub className="text-lg mx-auto" />
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center pb-6">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Airwangga Sport Techno Science Group{""}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  
                </a>
                .
              </div>
            </div>
          </div>
        </section>
</div>
    )
}
