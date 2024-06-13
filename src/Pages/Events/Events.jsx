import React, { useState } from 'react';
import EventsBanner from './EventsBanner';
import UpcomingEvents from './UpcomingEvents';

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="p-10">
      <EventsBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <UpcomingEvents
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default Events;
