import { Toaster } from "react-hot-toast";
import Search from "./components/Search.jsx";
import Header from "./components/Header.jsx";
import "./style/btns.css";
import "./style/input.css";
import {Routes, Route} from "react-router"; 
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
        <Header></Header>
        <div className="bg-zinc-800 sub-container rounded-b-md">
          <Toaster position="top-center" />
          <Search />
        </div>
          </>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
