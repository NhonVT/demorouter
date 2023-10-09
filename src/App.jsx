import { useState } from "react";
import "./App.css";
import Home from "./page/home";
import About from "./page/about";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </>
    );
}

export default App;
