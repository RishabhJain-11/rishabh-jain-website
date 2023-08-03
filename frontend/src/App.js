import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import Articles from "./pages/Articles";
import Certifications from "./pages/Certifications";
import Links from "./pages/Links";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound"; // Import your custom 404 page component

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/links" element={<Links />} />
          <Route path="/projects" element={<Projects />} />

          {/* The catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
