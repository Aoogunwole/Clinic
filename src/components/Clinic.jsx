import React from 'react';
import mancli from '../assets/mancli.svg'
import womancli from '../assets/womancli.svg'

const Clinic = () => {
  return (
    <div className="bg-gray pb-10">
      {/* Header */}
      <div className="w-[40%] font-semibold bg-[#2f1b57] text-secondary px-6 py-3 text-lg ">
        Our Services
      </div>

      {/* Clinic Cards Section */}
      <div className=" flex flex-col items-center">
      <div className="bg-blue-100 w-full max-w-6xl mt-6 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Men Clinic */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-indigo-900 mb-4">Men Clinic</h2>
          <img 
            src={mancli}
            alt="Men Clinic"
            className="w-[300px] h-64 object-cover rounded"
          />
          <a href="/men-clinic"><button className="mt-4 bg-[#140320]/50 text-white py-4 px-8 rounded shadow-md">Button</button></a>
        </div>

        {/* Women Clinic */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-indigo-900 mb-4">Women Clinic</h2>
          <img 
            src={womancli}
            alt="Women Clinic"
            className="w-[300px] h-64 object-cover rounded"
          />
          <a href="/women-clinic"><button className="mt-4 bg-[#140320]/50 text-white py-4 px-8 rounded shadow-md">Button</button></a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Clinic;
