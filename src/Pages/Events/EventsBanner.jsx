import { useState } from 'react';
import banner from '../../assets/images/banner.jpg';
import { DayPicker } from 'react-day-picker';

const EventsBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <section className=" ">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-80 rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsBanner;
