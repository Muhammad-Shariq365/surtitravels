import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

const GetAQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    tourTo: '',
    tripDuration: '',
    tourCategory: '',
    numberOfPersons: '',
    roomSharing: '',
    numberOfRooms: '',
    tentativeDate: '',
    additionalInfo: '',
  });

  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation
    for (const key in formData) {
      if (!formData[key]) {
        setError(`Please fill all fields. Missing: ${key.replace(/([A-Z])/g, ' $1')}`);
        return;
      }
    }
  
    // Prepare WhatsApp message
    const whatsappNumber = '+923352629979';
    const message = `*Form Data Submitted:*\n\n${Object.entries(formData)
      .map(([key, value]) => `*${key.replace(/([A-Z])/g, ' $1')}:* ${value}`)
      .join('\n')}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappURL, '_blank');
    alert('Form submitted successfully!');
  
    // Reset form
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      tourTo: '',
      tripDuration: '',
      tourCategory: '',
      numberOfPersons: '',
      roomSharing: '',
      numberOfRooms: '',
      tentativeDate: '',
      additionalInfo: '',
    });
  };

  return (
    <div
      className="flex items-center justify-center py-28 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.postimg.cc/XNRJHq3q/hero4.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      <div className="bg-white bg-opacity-80 shadow-lg rounded-lg px-6 pb-12 container w-full max-w-5xl mx-4">
        <h1 className="text-[clamp(2rem,5vw,3rem)] lg:text-5xl font-bold pt-10 pb-6 text-center text-gray-800 tracking-tight">
          GET QUOTE
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full placeholder-gray-700 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full pl-10 placeholder-gray-700 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">Phone Number</label>
            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full pl-10 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Tour Destination */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="tourTo">Tour To</label>
            <input
              type="text"
              id="tourTo"
              name="tourTo"
              value={formData.tourTo}
              onChange={handleChange}
              placeholder="Select Tour"
              className="w-full border border-gray-300 placeholder-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Trip Duration */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="tripDuration">Trip Duration</label>
            <input
              type="number"
              id="tripDuration"
              name="tripDuration"
              value={formData.tripDuration}
              onChange={handleChange}
              placeholder="No. of Days"
              className="w-full border border-gray-300 placeholder-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tour Category */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="tourCategory">Tour Category</label>
            <div className="relative">
              <select
                id="tourCategory"
                name="tourCategory"
                value={formData.tourCategory}
                onChange={handleChange}
                className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="Adventure">Adventure</option>
                <option value="Leisure">Leisure</option>
                <option value="Cultural">Cultural</option>
              </select>
              <FaChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Number of Persons */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="numberOfPersons">Number of Persons</label>
            <input
              type="number"
              id="numberOfPersons"
              name="numberOfPersons"
              value={formData.numberOfPersons}
              onChange={handleChange}
              placeholder="Number of Travelers"
              className="w-full border border-gray-300 placeholder-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Room Sharing */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="roomSharing">Room Sharing</label>
            <div className="relative">
              <select
                id="roomSharing"
                name="roomSharing"
                value={formData.roomSharing}
                onChange={handleChange}
                className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Sharing</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Triple">Triple</option>
              </select>
              <FaChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Number of Rooms */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="numberOfRooms">Number of Rooms</label>
            <input
              type="number"
              id="numberOfRooms"
              name="numberOfRooms"
              value={formData.numberOfRooms}
              onChange={handleChange}
              placeholder="Number of Rooms"
              className="w-full border border-gray-300 placeholder-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tentative Date */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="tentativeDate">Travel Date</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-gray-500" />
              <input
                type="date"
                id="tentativeDate"
                name="tentativeDate"
                value={formData.tentativeDate}
                onChange={handleChange}
                className="w-full pl-10 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1" htmlFor="additionalInfo">Additional Information</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Special requirements or notes"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Quote Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetAQuoteForm;