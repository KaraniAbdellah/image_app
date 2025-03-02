import { useState } from "react";
import "../style/login.css";
import Github from "../assests/github.png";
import Google from "../assests/google.webp";
import { Link, useNavigate } from "react-router";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  async function handleSignup (e) {
    e.preventDefault();
    const email_value = document.querySelector("input.email");
    const password_value = document.querySelector("input.password");
    const full_name_value = document.querySelector("input.full_name");
    let check = true;
    // Input validation
    if (email_value.value === "") {
      email_value.classList.add("InvalidInput"); check = false;
    }
    if (password_value.value === "") {
      password_value.classList.add("InvalidInput"); check = false;
    }
    if (full_name_value.value === "") {
      full_name_value.classList.add("InvalidInput"); check = false;
    }

    // Check If The Email Already Exit
    if (check) {
      const email = {
        email: email_value.value,
      };
      const message = document.querySelector(".message");
      await axios.post("http://127.0.0.1:3001/CheckEmail", email).then((res) => {
        if (res.data.isExit) {
          message.classList.add("block");
          message.classList.remove("hidden");
        } else {
          // Add Use To Database
          const user = {
            email: email_value.value,
            password: password_value.value,
          }
          axios.post("http://127.0.0.1:3001/AddUser", user).then((res) => {
            document.cookie = `user_token=${res.data.token}`;
          });
          navigate('/login');
        }
      });
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-center hidden message text-red-700 font-semibold mb-3">This Email Already Exit</h1>
        <h2 className="text-center text-2xl font-bold">Signup</h2>
        <form className="mt-6 flex flex-col">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <div className="input-container">
              <input
                className="input w-full full_name"
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
                className="input w-full email"
                name="text"
                type="email"
                placeholder="Enter Your Email..."
                required
              />
            </div>
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-semibold">
              Password
            </label>
            <div className="input-container">
              <input
                className="input w-full password"
                name="text"
                type="password"
                placeholder="Enter Your Password..."
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <button onClick={(e) => handleSignup(e)}  className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text font-semibold">Signup</span>
            </button>
            <button className="button-30">
              <img className="w-[45px] h-[45px] mr-2" src={Google} alt="" />
              <span>Login with Google</span>
            </button>
            <button className="button-30">
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
