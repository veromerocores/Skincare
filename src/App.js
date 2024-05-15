import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about.js';
import Yoga from './pages/yoga';
import Wisdom from './pages/wisdom';
import FroGa from "./pages/froga";
import NoPage from './pages/nopage';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/wisdom" element={<Wisdom />} />
          <Route path="/froga" element={<FroGa />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
