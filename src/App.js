import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import ThingsToRead from "./components/ThingsToRead";
import Css480 from "./components/Css480";
import Taekwondo from "./components/Taekwondo";

import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/css480" element={<Css480 />} />
                <Route path="/read" element={<ThingsToRead />} />
                <Route path="/taekwondo" element={<Taekwondo />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}
