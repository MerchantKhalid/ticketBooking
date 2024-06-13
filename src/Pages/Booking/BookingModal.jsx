import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ program, setProgram, selectedDate }) => {
  const { name, slots } = program;
  const date = format(selectedDate, 'PP');

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      eventDate: date,
      slot,
      event: name,
      tourist: name,
      email,
      phone,
    };
    console.log(slot, name, email, phone, date);
    setProgram(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            X
          </label>
          <h3 className="text-1xl text-center mb-2 font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get Your Tour:{name}{' '}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}{' '}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full "
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full "
            />
            <input
              className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
              type="submit"
              value="Confirm Booking"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
