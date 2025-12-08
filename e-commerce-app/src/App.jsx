import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/navbar/Navbar";
import SingleProductPage from "./components/singleproducts/SingleProductPage";
import LoginPage from "./components/authentication/LoginPage";
import SignupPage from "./components/SignupPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <SingleProductPage /> */}
        {/* <LoginPage /> */}
        <SignupPage />
      </main>
    </div>
  );
}

export default App;
