import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about.js';
import Planner from './pages/planner';
import Search from './pages/search';
import Questionnaire from "./pages/questionnaire";
import NoPage from './pages/nopage';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/search" element={<Search />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
