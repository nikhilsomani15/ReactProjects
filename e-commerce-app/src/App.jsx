import { useState } from "react";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./components/routes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <main>
        <AllRoutes />
      </main>
    </div>
  );
}

export default App;
