import React, { useState, useEffect } from 'react';

function Appointments() {
  const [activeTab, setActiveTab] = useState('calendar');
  const [timeslots, setTimeslots] = useState([]);

  useEffect(() => {
    if (activeTab === 'timeslots') {
      fetchTimeslots();
    }
  }, [activeTab]);

  const fetchTimeslots = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/timeslots');
      const data = await response.json();
      setTimeslots(data.timeslots);
    } catch (error) {
      console.error('Error fetching timeslots:', error);
    }
  };

  const renderContent = () => {
    if (activeTab === 'calendar') {
      return (
        <div>
          <h2>Calendar</h2>
          <p>Select a date for your appointment.</p>
          {/* Calendar component can be integrated here */}
        </div>
      );
    } else if (activeTab === 'timeslots') {
      return (
        <div>
          <h2>Available Timeslots</h2>
          <p>Choose an available timeslot for your appointment.</p>
          <ul>
            {timeslots.map((timeslot) => (
              <li key={timeslot.id}>{timeslot.time}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Appointments Page</h1>
      <p>Schedule your lab test appointments with ease.</p>
      <div>
        <button onClick={() => setActiveTab('calendar')}>Calendar</button>
        <button onClick={() => setActiveTab('timeslots')}>Available Timeslots</button>
      </div>
      {renderContent()}
    </div>
  );
}

export default Appointments;