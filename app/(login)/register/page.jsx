"use client"
import React from "react";
import Link from "next/link";
import api from "@/utils/api";
import { redirect, useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");

  const router = useRouter();
  const [authedUser, setAuthedUser] = React.useState(null);

  async function handleRegister() {
    const response = await api.register({username, name, password, email, phone, birthdate});
    if (response) {
      onRegisterSuccess(response.token);
    }
  }

  async function onRegisterSuccess(token) {
    api.putAccessToken(token);
    router.push('/form')
  }

  async function checkLoggedIn() {
    const accessToken = api.getAccessToken();
    if (accessToken) {
      const data  = await api.getUserLoggedIn();
      setAuthedUser(data);
    }

    console.log("authedUser", authedUser);
  }

  React.useEffect(() => {
    checkLoggedIn();
  },[]);

  if (authedUser) {
    if (authedUser.role == 1) {
      redirect('/player')
    }
    else if (authedUser.role == 2) {
      redirect('/dashboard')
    }
  }
return (
    <>
      <div className="container my-auto mx-auto px-4 h-screen">
        <div className="flex content-center items-center justify-center h-full my-auto">
          <div className="w-full lg:w-4/12 px-4 ">
            <div className="relative flex flex-col min-w-0 break-words w-full pt-6 shadow-xl rounded-lg border-0 bg-white h-1/2">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-xl text-center mb-3 font-bold py-4">
                  Register 
                </div>
                <form>


                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-600 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mt-4"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-gray-600 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mt-4"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />



                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-600 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mt-4"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />

                 
                  <input
                    type="date"
                    className="border-0 px-3 py-3 placeholder-gray-600 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mt-4"
                    placeholder="Birthdate"
                    onChange={(e) => setBirthdate(e.target.value)}
                  />

                  <input
                    type="text"
                    className="border-0 px-3 py-3 mt-4 placeholder-gray-600 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-gray-600 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mt-4"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className="text-center mt-6">
                    <button
                      className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  </div>
                  
                  <hr className="my-3 border-b-1 border-blueGray-300" />
                  <Link
                    href={"/login"}
                    className="bg-slate-50 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full block ease-linear transition-all duration-150 text-center"
                  >
                    Login
                  </Link>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


