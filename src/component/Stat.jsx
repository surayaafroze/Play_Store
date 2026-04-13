import React from 'react';

const Stat = () => {
  return (
    <div className='p-9 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>
         <h2 className='text-4xl text-center'>Trusted by Millions, Built for You</h2>
    <div className="flex ">
  <div className="stat place-items-center text-white">
    <div className="stat-title  text-white">Downloads</div>
    <div className="stat-value">29.6M</div>
    <div className="stat-desc  text-white">21% more than last month</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title  text-white">Users</div>
    <div className="stat-value   text-white">906K</div>
    <div className="stat-desc  text-white">46% more than last month</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title  text-white">New Registers</div>
    <div className="stat-value  text-white">132+</div>
    <div className="stat-desc  text-white">31 more will Launch</div>
  </div>
</div>
    </div>
  );
};

export default Stat;