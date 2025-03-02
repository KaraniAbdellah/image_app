import { useEffect, useState } from "react";
import "../style/login.css";
import Github from "../assests/github.png";
import Google from "../assests/google.webp";
import { Link } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";


export default function Login({setLogState}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUserLogin = (e) => {
    e.preventDefault();
    const email_value = document.querySelector("input.email");
    const password_value = document.querySelector("input.password");
    let check = true;
    // Input validation
    if (email_value.value === "") {
      email_value.classList.add("InvalidInput"); check = false;
    }
    if (password_value.value === "") {
      password_value.classList.add("InvalidInput"); check = false;
    }

    // Check If The Email Already Exit
    if (check) {
      const user = {
        email: email_value.value,
        password: password_value.value,
      };
      const message = document.querySelector(".message");
      axios.post("http://127.0.0.1:3001/CheckUser", user).then((res) => {
        if (!res.data.isExit) {
          message.classList.add("block");
          message.classList.remove("hidden");
        } else {
          // Generate A Token If Does Not Exit
          axios.get("http://127.0.0.1:3001/GenerateToken").then((res) => {
            document.cookie = `user_token=${res.data.token}`;
          });
          navigate('/loading');
          setTimeout(() => {
            setLogState("Log Out");
            navigate("/");
          }, 4000);
        }
      });
    }
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-center hidden message text-red-700 font-semibold mb-3">Email Or Password Incorrect</h1>
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form className="mt-6 flex flex-col">
        <div className="mb-4 w-full">
            <label className="block text-gray-700 font-semibold">
              Email
            </label>
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
            <button onClick={(e) => handleUserLogin(e)} className="button-82-pushable">
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
