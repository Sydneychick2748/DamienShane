import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from "../src/components/Footer";
import Bio from "../src/components/Bio";
import Music from "../src/components/Music";
import Videos from "../src/components/Videos";
import SlideShow from "../src/components/SlideShow";
import './App.css';

function App() {
  return (
  <>
   <Navbar />
 
   
     <Bio />
     <SlideShow />
     <Music/>
     <Videos/>

     <Footer />
  
  
   </>
  );


  }



export default App;
