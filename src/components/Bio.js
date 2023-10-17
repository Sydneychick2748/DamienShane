import React from "react";

function Bio() {
  const bioContainerStyle = {
    display: "flex",
    background: "rgba(9, 10, 10, 0.7)" /* Charcoal with 70% opacity */,
    color: "white",
    fontWeight: "700",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(6, 3, 28, 0.2)",
    margin: "2em",
  };

  const contentContainerStyle = {
    display: "flex",
    flexDirection: "column", // Stack children vertically
    alignItems: "center", // Center horizontally
    padding: "30px",
    flex: 1, // Take up remaining space
  };

  const titleStyle = {
    fontSize: "60px",
    marginTop: "0",
    padding: "100px",
  };

  const textStyle = {
    fontSize: "25px",
    lineHeight: "1.5",
    marginTop: "20px", // Adjust the margin-top to add spacing between title and text
  };

  const bioImageStyle = {
    height: "100vh",
    flex: "0 0 auto",
    borderRadius: "2em",
  };

  return (
    <>
      <div style={bioContainerStyle}>
        <div style={bioImageStyle}>
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
        <div style={contentContainerStyle}>
          <h1 style={titleStyle}>The Beat Mastermind</h1>
          <p style={textStyle}>
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
