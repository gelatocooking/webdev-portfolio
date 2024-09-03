import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Home from "./components/Pages/Home";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import Blog from "./components/Pages/Blog";
import AboutMe from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="blog/post/:id" element={<BlogPost />} />
              <Route path="/o-mnie" element={<AboutMe />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/uslugi" element={<Services />} />
            </Routes>
          </main>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
