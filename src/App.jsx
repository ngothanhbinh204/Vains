// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Technology from "@/pages/Technology";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";

import { HeaderThemeProvider } from "./context/HeaderThemeContext"; // đường dẫn đúng
function App() {
  return (
    <HeaderThemeProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/pricing" element={<Pricing></Pricing>}></Route>
          <Route path="/technology" element={<Technology></Technology>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </MainLayout>
    </HeaderThemeProvider>
  );
}

export default App;
