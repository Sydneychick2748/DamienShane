import React from "react";

import "./Videos.css";



function Videos() {
    return (
        <div className="video-container">
      <h1 className="video-title">Hit Play </h1>
      <div className="video-content">
        <video className="video-player" controls>
          <source src="/videos/PBAve17SEP23.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    );
  }
  
  export default Videos;
  