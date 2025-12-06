import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/navbar/Navbar";
import SingleProductPage from "./components/singleproducts/SingleProductPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        <SingleProductPage />
      </main>
    </div>
  );
}

export default App;
