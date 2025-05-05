import React from 'react'
import man from '../assets/man.svg'
import woman from '../assets/woman.svg'
import mancli from '../assets/Mancli.svg'
import womancli from '../assets/womancli.svg'

const Header = () => {
  return (
    <div>
      <div className="bg-gray px-4 md:px-0 md:pl-2 md:pr-4 py-12 rounded-lg">
        <div className="relative grid md:grid-cols-2 items-stretch">
          {/* Left Section */}
          <div className="flex flex-col justify-between h-full z-10 relative md:-mr-16 pr-4">
            <div className="lg:translate-x-28">
              <h2 className="text-2xl md:text-3xl font-segoe font-bold text-[#1f2937] mb-4">
                Lorem ipsum non pretium integer amet ultrices tortor egestas ullamcorper.
              </h2>
              <p className="text-[#140320]/50 font-work text-[18px] mb-8 leading-relaxed">
                Lorem ipsum non pretium integer amet ultrices tortor egestas ullamcorper. Lorem ipsum non pretium integer amet ultrices tortor egestas ullamcorper.
              </p>
              <div className="flex gap-4 mb-6">
                <button className="bg-tertiary hover:bg-[#db2777] text-white font-semibold py-2 md:py-4 px-6 md:px-10 rounded-lg shadow">
                  Button
                </button>
                <button className="bg-secondary hover:bg-[#93c5fd] text-[#1f2937] font-semibold py-2 md:py-4 px-6 md:px-10 rounded-lg shadow">
                  Button
                </button>
              </div>
            </div>
            <img
              src={woman}
              alt="Facial treatment"
              className="rounded-lg object-cover w-full max-h-[300px] md:max-h-[250px] mt-4 hidden md:block"
            />
          </div>

          {/* Right Section: Large Image on MD+ */}
          <div className="w-full h-full pl-4 hidden md:block">
            <img
              src={man}
              alt="Face mask"
              className="rounded-lg object-cover w-full h-full max-h-[600px]"
            />
          </div>
        </div>

        {/* Small Screen Images Side by Side */}
        <div className="flex justify-center items-center gap-4 mt-6 md:hidden">
          <img
            src={mancli}
            alt="Small screen image 1"
            className="w-1/2 rounded-lg object-cover"
          />
          <img
            src={womancli}
            alt="Small screen image 2"
            className="w-1/2 rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
