import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import FloatingCall from "./components/FloatingCall";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
       
        <Route path="/" element={<Hero />} />

        
        <Route path="/home" element={<Hero />} />

        
        <Route path="/about" element={<About />} />


        <Route path="/education" element={<Education />} />

        
        <Route path="/skills" element={<Skills />} />


        <Route path="/projects" element={<Project />} />

        
        <Route path="*" element={<div style={{padding:40}}>Page not found</div>} />
      </Routes>
      <FloatingCall/>
    </>
  );
}
