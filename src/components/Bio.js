import React from "react";
import "./Bio.css";

function Bio() {
  

  return (
    <>
      <div className ="bioContainerStyle">
        <div className="bioImageStyle">
          <img 
            src="/images/bioPic.jpg"
            alt="Damien Shane"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="contentContainerStyle">
          <h1 className="titleStyle">The Beat Mastermind</h1>
          <p className="textStyle">
            EDM, Electro Techno, Dance <br />
            Damien Shane, not only a DJ but also a skilled producer, invites you
            to embark on an immersive musical journey through his electrifying
            livestream channel. Damien brings a unique blend of energy and
            emotion to his sets. Whether it's high-octane tracks or soulful
            tunes, his mixes resonate with a diverse audience. Beyond the
            virtual realm, Damien's talent extends to live events, including the
            highly anticipated PB Avenue & AC Lounge, where his performances
            ignited the dance floor. When he's not orchestrating mixes, Damien
            delves into the realm of music production, crafting original tracks
            that showcase his creativity and depth as an artist. Explore the
            sonic landscapes of Damien Shane, where each live stream is an
            invitation to experience music in its purest form. Join the journey
            and let the melodies speak to your soul!
          </p>
        </div>
      </div>
    </>
  );
}

export default Bio;
