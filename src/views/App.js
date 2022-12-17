import './App.scss';
import Home from './home/Home';
import React from "react";
import Portfolio from './portforlio/Portforlio';
import About from './about/About';
import Contact from './contact/Contact';
import { Helmet } from "react-helmet";
import {
  Routes,
  Route,
} from "react-router-dom";
import Static from './Static/Static';
function App() {

  return (
    <>
    <Helmet>
      <meta property="og:title" content="Phạm Nguyễn Hoàng Quân" />
      <meta property="og:description" content="My Portfolio" />
      <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg" />
      <meta property="og:image:type" content="image/jpg"></meta>
  </Helmet>
    <Routes>
    <Route path="/" element={<Static />}>
    <Route index element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    </Route>
  </Routes>
  </>

  );
}

export default App;

