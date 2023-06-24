import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./app/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import AddPostForm from "./pages/AddPostForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="posts" element={<Posts />}></Route>
        <Route path="addpost" element={<AddPostForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
