import React, { useState } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Contact from "./Contact";
import Home from "./Home.js";
import { Route, Routes } from "react-router-dom";
import "./scss/header.scss";
function App() {
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <Header content={content} setContent={setContent} />
      <Routes>
        <Route path="/" element={<Home setContent={setContent} />}></Route>
        <Route
          path="/contact"
          element={<Contact setContent={setContent} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
