import { useState } from 'react';
import banner from '../../assets/images/banner.jpg';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const EventsBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section className="p-10 ">
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
            <p className="font-bold">
              Your chosen event is : {format(selectedDate, 'PP')}
            </p>
          </div>
        </div>
      </div>
    </section>

    // <header>
    //   <div className="hero">
    //     <div className="hero-content flex-col lg:flex-row-reverse">
    //       <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />

    //       {/* Calendar  */}
    //       <div>
    //         <DayPicker />
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default EventsBanner;
