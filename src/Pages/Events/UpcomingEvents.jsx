import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import EventOptions from './EventOptions';
import BookingModal from '../Booking/BookingModal';

const UpcomingEvents = ({ selectedDate, setSelectedDate }) => {
  const [events, setEvents] = useState([]);
  const [program, setProgram] = useState(null);
  useEffect(() => {
    fetch('ourEvents.json')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <section className="mt-10">
      <div>
        <h1 className="font-bold text-blue-700 text-center lg:text-3xl md:text-2xl">
          Our Upcoming Events{' '}
        </h1>
        <p className="font-bold text-center">
          Your chosen event is : {format(selectedDate, 'PP')}
        </p>
        <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
          {events.map((option) => (
            <EventOptions
              key={option._id}
              eventOption={option}
              setProgram={setProgram}
            ></EventOptions>
          ))}
        </div>
        {program && (
          <BookingModal
            program={program}
            selectedDate={selectedDate}
            setProgram={setProgram}
          />
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
