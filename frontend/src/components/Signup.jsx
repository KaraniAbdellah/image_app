import { useState } from "react";
import "../style/login.css";
import Github from "../assests/github.png";
import Google from "../assests/google.webp";
import { Link } from "react-router";

export default function Login() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold">Signup</h2>
        <form className="mt-6 flex flex-col">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <div className="input-container">
              <input
                className="input w-full"
                name="text"
                type="text"
                placeholder="Enter Your Full Name..."
              />
            </div>
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-semibold">Email</label>
            <div className="input-container">
              <input
                className="input w-full"
                name="text"
                type="text"
                placeholder="Enter Your Email..."
              />
            </div>
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-semibold">
              Password
            </label>
            <div className="input-container">
              <input
                className="input w-full"
                name="text"
                type="text"
                placeholder="Enter Your Password..."
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <button className="button-82-pushable" role="button">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text font-semibold">Signup</span>
            </button>
            <button className="button-30" role="button">
              <img className="w-[45px] h-[45px] mr-2" src={Google} alt="" />
              <span>Login with Google</span>
            </button>
            <button className="button-30" role="button">
              <img className="w-[30px] h-[30px] mr-5" src={Github} alt="" />
              Login with GitHub
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already Have An Account?
          <Link to="/login">
            <span className="text-blue-500"> Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
