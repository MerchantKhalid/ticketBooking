import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';

const EventOptions = ({ eventOption }) => {
  const { name, img, slots } = eventOption;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Site" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name} </h2>
        <p>
          {slots.length > 0 ? (
            slots[0]
          ) : (
            <span className="text-red-600">We already Booked</span>
          )}{' '}
        </p>
        <p>
          {slots.length}
          {slots.length > 1 ? ' events' : ' event'} available
        </p>
        <div className="card-actions">
          <button
            className="btn bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => document.getElementById('booking-modal').showModal()}
          >
            Book Now
          </button>

          {/* <PrimaryButton
            onClick={() => document.getElementById('booking-modal').showModal()}
          >
            {' '}
            Book Now
          </PrimaryButton> */}
        </div>
      </div>
    </div>
  );
};

export default EventOptions;
