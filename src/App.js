import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Bio from "../src/components/Bio";
import Music from "../src/components/Music";
import Videos from "../src/components/Videos";
import Contact from "../src/components/Contact";
import MyCalendar from "./components/MyCalendar";

import SlideShow from "../src/components/SlideShow";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <section id="bio">
        <Bio />
      </section>
      <SlideShow />
      <section id="music">
     <Music/>
      </section>
      <section id="videos">
        <Videos />
      </section>
      <MyCalendar />
      <section id="contact">
        <Contact />
      </section>
      
     
   
    <Footer/>
    </div>
  );
}

export default App;
