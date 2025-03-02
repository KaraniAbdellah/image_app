import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Search from "./components/Search.jsx";
import Header from "./components/Header.jsx";
import "./style/btns.css";
import "./style/input.css";
import {Routes, Route} from "react-router"; 
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Loading from "./components/Loading.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  const [logSatate, setLogState] = useState('Login');
  useEffect(() => {
    const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("user_token="))
    ?.split("=")[1];
    if (token !== undefined) setLogState("Log Out");
  });
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
        <Header logSatate={logSatate} setLogState={setLogState}></Header>
        <div className="bg-zinc-800 sub-container">
          <Toaster position="top-center" />
          <Search logSatate={logSatate} setLogState={setLogState}/>
        </div>
          </>
        }></Route>
        <Route path="/login" element={<Login setLogState={setLogState}></Login>}></Route>
        <Route path="/loading" element={<Loading></Loading>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
