import "./App.css"
import React, {useState, useContext} from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";


function App() {
  const [gameState, setGameState] = useState("menu");
  
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="Quiz"  element={<Quiz />} />
        <Route path="Results"  element={<Results />} />
      </Routes>
    </BrowserRouter>
    );
  }
  
export default App;
