// bio.js

import React from 'react';



function Bio() {
  const bioContainerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const titleStyle = {
    fontSize: '24px',
    marginTop: '0',
  };

  const textStyle = {
    fontSize: '18px',
    marginBottom: '10px',
  };

  return (
    <div style={bioContainerStyle}>
      <h1 style={titleStyle}> Damien Shane: The Beat Mastermind</h1>
      <p style={textStyle}>
        
         EDM, Electro Techno, Dance <br />
         Damien Shane, not only a DJ but also a skilled producer, invites you to embark on an immersive musical journey through his electrifying livestream channel.

Damien brings a unique blend of energy and emotion to his sets. Whether it's high-octane tracks or soulful tunes, his mixes resonate with a diverse audience.

Beyond the virtual realm, Damien's talent extends to live events, including the highly anticipated PB Avenue & AC Lounge, where his performances ignited the dance floor.

When he's not orchestrating mixes, Damien delves into the realm of music production, crafting original tracks that showcase his creativity and depth as an artist.

Explore the sonic landscapes of Damien Shane, where each live stream is an invitation to experience music in its purest form. Join the journey and let the melodies speak to your soul!


      
      </p>

     
      
      
      
    </div>
  );
}




export default Bio;
