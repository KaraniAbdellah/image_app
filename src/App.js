import { Toaster } from "react-hot-toast";
import Search from "./components/Search.jsx";

function App() {
  return (
    <div className="container">
      <Toaster position="top-center" />
      <Search />
    </div>
  );
}

export default App;
