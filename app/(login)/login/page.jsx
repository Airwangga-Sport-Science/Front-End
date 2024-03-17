"use client"
import React from "react";
import Link from "next/link";
import { redirect, useRouter } from 'next/navigation';
import api from "../../../utils/api";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "../error";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const router = useRouter();
  const [isLoginError, setIsLoginError] = React.useState(false);
  const [authedUser, setAuthedUser] = React.useState(null);
  async function handleLogin(){
    try {
      const response = await api.login({username, password});
    
      if(response){
        onLoginSuccess(response);
      }
    } catch (error) {
      setIsLoginError(true);
    }
  }

  async function onLoginSuccess(token) {
    api.putAccessToken(token);

    const  data  = await api.getUserLoggedIn();
    setAuthedUser(data);

  }

  async function checkLoggedIn() {
    const accessToken = api.getAccessToken();
    if (accessToken) {
      const data  = await api.getUserLoggedIn();
      setAuthedUser(data);
    }

    console.log("authedUser", authedUser);
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
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
    <ErrorBoundary fallback={Error} >
      <div className="container my-auto mx-auto px-4 h-screen">
        <div className="flex content-center items-center justify-center h-full my-auto">
          <div className="w-full lg:w-4/12 px-4 ">
            <div className="relative flex flex-col min-w-0 break-words w-full pt-6 shadow-xl rounded-lg border-0 bg-white h-1/2">
              
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-xl text-center mb-3 font-bold py-4">
                  Login
                </div>
                <div className={`bg-red-100 my-6 border border-red-400 text-red-700 px-4 py-3 rounded relative ${isLoginError ? "block" : "hidden"}`}>
                  Invalid username or password
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="username"
                      id="username-label"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="password"
                      id="password-label"
                    >
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" className="absolute right-0 bottom-4 pr-3" onClick={handleShowPassword}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />  }
                    </button>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleLogin}
                    >
                      Sign In
                    </button>
                  </div>
                  <hr className="my-3 border-b-1 border-blueGray-300" />
                  <Link
                    href={"/register"}
                      className="bg-slate-50 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 text-center"
                      type="button"
                    >
                      Register
                    </Link>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </ErrorBoundary>
  );
}


