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
