// MyCalendar.js
// myCalendar.js

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './MyCalendar.css'; // Import your custom styles

const events = [
  
  {
    title: 'Pb Avenue',
    start: '2023-10-01',
    end: '2023-10-01',
  },
  {
    title: 'Warehouse',
    start: '2023-06-02',
    end: '2023-06-02',
  },
  {
    title: 'Home @ Home',
    start: '2023-08-25',
    end: '2023-08-25',
  },
  {
    title: 'Pb Avenue',
    start: '2023-09-16',
    end: '2023-09-16',
  },
  {
    title: 'Pb Avenue',
    start: '2023-10-06',
    end: '2023-10-06',
  },
  {
    title: 'Ac Lounge',
    start: '2023-10-07',
    end: '2023-10-07',
  },
  {
    title: 'Fungal Fantasy',
    start: '2023-10-21',
    end: '2023-10-21',
  },
  {
    title: 'KO Underground',
    start: '2023-11-03',
    end: '2023-11-03',
  },
  {
    title: 'Pb Avenue',
    start: '2023-11-04',
    end: '2023-10-04',
  },
  {
    title: 'VYBZ NightClub',
    start: '2023-11-06',
    end: '2023-11-06',
  },
  {
    title: 'Pb Avenue',
    start: '2023-11-09',
    end: '2023-11-09',
  },
  {
    title: 'KO Underground',
    start: '2023-11-10',
    end: '2023-11-10',
  },
  {
    title: 'Club Nauti',
    start: '2023-11-24',
    end: '2023-11-24',
  },
  {
    title: 'Shipwrecks',
    start: '2023-11-25',
    end: '2023-11-25',
  },
  {
    title: 'AC Lounge',
    start: '2023-12-02',
    end: '2023-12-02',
  },{
    title: 'Winter Wonderland',
    start: '2023-12-16',
    end: '2023-12-16',
  },
  
  // Add more events as needed
];

function MyCalendar() {
  return (
    <div id="calendar-container">
      <h1 className="calendar-header">Event Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
}

export default MyCalendar;
