import { useState } from "react";
import "../style/login.css";
import Github from "../assests/github.png";
import Google from "../assests/google.webp";
import { Link } from "react-router";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form className="mt-6 flex flex-col">
        <div className="mb-4 w-full">
            <label className="block text-gray-700 font-semibold">
              Email
            </label>
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
            <button className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text font-semibold">Login</span>
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?
          <Link to="/signup">
            <span className="text-blue-500"> Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
