import React from 'react';
import DrNavbar from './DrNavbar';

const DrProfile = () => {
  return (
    <div>
   <DrNavbar />
      <div className=" fixed top-16 left-1/2 max-w-sm mx-auto my-10 p-10 bg-white rounded-lg shadow-lg">
        <img
          className="w-full h-64 object-cover object-center"
          src="https://via.placeholder.com/400x300"
          alt="Doctor's Profile"
        />
      <div className="mt-6">
        <h2 className="text-2xl font-medium text-center text-indigo-600">Dr. John Doe</h2>
        <p className="text-gray-600 text-center mt-2">Orthopedic Surgeon</p>
        <p className="text-gray-600 text-center mt-2">Organization: ABC Hospital</p>
        <p className="text-gray-600 text-center mt-2">Phone: (123) 456-7890</p>
        <div className="mt-6 text-center">
          <p className="text-gray-600 inline-block bg-gray-200 rounded-full px-3 py-1 mr-2">Years of Experience: 10</p>
          <p className="text-gray-600 mt-2 inline-block bg-gray-200 rounded-full px-3 py-1">Specialties: Hip and Knee Surgery</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DrProfile;
