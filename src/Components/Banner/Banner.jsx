import React from 'react';
import heropng from '../../assets/hero.png';

const Banner = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 items-center gap-6 px-6">
        
        <div className="text-center py-10">
          <h1 className="font-bold text-5xl md:text-6xl leading-tight">
            We Build <br />
            <span className="text-purple-500">Productive</span> Apps
          </h1>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.
            <br />
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>

          <div className="flex gap-6 mt-8 justify-center">
            <button className="px-6 py-3 border border-gray-300 rounded-md">
              Google Play
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-md">
              App Store
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={heropng} alt="Hero App" className="w-[300px] md:w-[500px] lg:w-[650px]" />
        </div>
      </div>

      {/* 🔥 STATS SECTION */}
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            
            {/* Stat 1 */}
            <div>
              <h3 className="text-4xl font-bold">29.6M</h3>
              <p className="mt-2 text-purple-100">
                Total Active Users
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <h3 className="text-4xl font-bold">906K</h3>
              <p className="mt-2 text-purple-100">
                Happy Reviews
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <h3 className="text-4xl font-bold">132+</h3>
              <p className="mt-2 text-purple-100">
                Partner Apps
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
