import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';

const EventOptions = ({ eventOption, setProgram }) => {
  const { name, img, slots } = eventOption;
  //   const handleClick = () => {
  //     // Action 1: Show the modal
  //     document.getElementById('booking-modal').showModal();

  //     // Action 2: second action
  //     setProgram(eventOption);
  //   };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Site" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title py-2 text-1xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          {name}{' '}
        </h2>
        <p className="font-bold text-cyan-600">
          {slots.length > 0 ? (
            slots[0]
          ) : (
            <span className="text-red-600">We already Booked</span>
          )}{' '}
        </p>
        <p className="py-2 text-1xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          {slots.length}
          {slots.length > 1 ? ' events' : ' event'} available
        </p>
        <div className="card-actions">
          {/* <button
            disabled={slots.length < 1}
            className="btn bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
            // onClick={() => document.getElementById('booking-modal').showModal()}
            onClick={handleClick}
          >
            Book Now
          </button> */}

          <label
            onClick={() => setProgram(eventOption)}
            htmlFor="booking-modal"
            disabled={slots.length < 1}
            className="btn  bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default EventOptions;
