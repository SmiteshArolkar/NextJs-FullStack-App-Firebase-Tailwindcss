import { useState } from "react";
import { XIcon, UserCircleIcon } from "@heroicons/react/solid";
import firebase from "@/libs/firebaseClient";
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
  signInWithEmailPassword,
  signUpWithEmailPassword
} from "@/libs/firebaseClient";
import Loader from "./Loader";

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [error,setError] = useState("")

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickLogin = async (event) => {
    setError("")
    setIsLoading(true)
    event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = await signInWithEmailPassword(email,password)
  console.log(user)
  setIsLoading(false)
  if(user)
    {
      //Update User States
    }
    else
    {
      setError(" Invalid email / password ")
    }
  };

  const handleClickRegister = async (event) => {
    setError("")
    event.preventDefault();
    setIsLoading(true)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = await signUpWithEmailPassword(email,password)
    setIsLoading(false)
    console.log(user)
    if(user)
    {
      //Update User States
    }
    else 
    {
      setError(" Incorrect email / password ")
    }
  };

  const handleClickGoogle = async () => {
    setIsLoading(true);
    const user = await signInWithGoogle();
    console.log(user);
    setIsLoading("false");
  };
  const handleClickFaceBook = async () => {
    setIsLoading(true);
    const user = await signInWithFacebook();
    console.log(user);
    setIsLoading("false");
  };
  const handleClickTwitter = async () => {
    setIsLoading(true);
    const user = await signInWithTwitter();
    console.log(user);
    setIsLoading("false");
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="text-white bg-yellow-500 rounded-md px-4 py-2  hover:bg-yellow-600 hover:text-white"
      >
        <h>
          <i class="fa-solid fa-user mx-1 "></i> Account
        </h>
      </button>

      {isOpen  && (

        <div className="fixed z-10 inset-0 overflow-y-auto mx-auto sm:mx-2">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
            <div className="relative bg-white w-96 rounded-lg shadow-lg px-6 py-8 sm:mx-2">
              <button
                onClick={toggleModal}
                className="absolute top-0 right-0 p-2"
              >
                <XIcon className="h-6 w-6 text-gray-600" />
              </button>

              <h2 className="text-lg font-medium mb-4">Sign In / Sign Up</h2>
              {!isRegister ? (
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="border-gray-300 border rounded-md px-4 py-2 w-full text-black"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block font-medium text-gray-700 mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      required
                      className="text-black border-gray-300 border rounded-md px-4 py-2 w-full"
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      className="text-white bg-yellow-500 rounded-md px-4 py-2"
                      onClick={handleClickLogin}
                    >
                      Login
                    </button>

                    <button
                      type="button"
                      className="text-yellow-500 border border-yellow-500 rounded-md px-4 py-2"
                      onClick={() => {
                        setError("")
                        setIsRegister(true);
                      }}
                    >
                      Register
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block font-medium text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="border-gray-300 border rounded-md  text-black px-4 py-2 w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block font-medium text-gray-700 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="email"
                        placeholder="Enter your name"
                        required
                        className="border-gray-300 border rounded-md px-4   text-black py-2 w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phone"
                        name="email"
                        placeholder="Enter your Phone No"
                        required
                        className="border-gray-300 border rounded-md px-4 py-2   text-black w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block font-medium text-gray-700  mb-2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required   
                        className="border-gray-300 border rounded-md px-4 text-black py-2 w-full"
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <button
                        type="submit"
                        className="text-white bg-yellow-500 rounded-md px-4 py-2"
                        onClick={handleClickRegister}
                      >
                        Register
                      </button>

                      <button
                        type="button"
                        className="text-yellow-500 border border-yellow-500 rounded-md px-4 py-2"
                        onClick={() => {
                          setIsRegister(false);
                        }}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="my-5 mx-auto flex ">
                <button
                  className="bg-blue-600 border-2 text-center  hover:bg-blue-300 text-white font-bold px-5 py-4 rounded-full focus:outline-none focus:shadow-outline m-5"
                  onClick={handleClickGoogle}
                >
                  <i class="fa-brands fa-google fa-lg"></i>
                </button>
                <button
                  className="bg-blue-600 text-center m-5 border-2 px-5 py-4 hover:bg-blue-300 text-white font-bold  rounded-full focus:outline-none focus:shadow-outline "
                  onClick={handleClickFaceBook}
                >
                  <i class="fa-brands fa-facebook fa-lg"></i>
                </button>
                <button
                  className="bg-blue-600 text-center m-5 border-2 px-5 py-4 hover:bg-blue-300 text-white font-bold  rounded-full focus:outline-none focus:shadow-outline "
                  onClick={handleClickTwitter}
                >
                  <i class="fa-brands fa-twitter fa-lg "></i>
                </button>
              </div>
              { error && (
              <div className="text-black flex font-bold text-center flex-row border border-2 border-red-700 bg-red-300 p-4 ">
                <h1>{error}</h1>
                
              </div>

)}
{isLoading && (
  <div>
    <Loader/>
  </div>
)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
