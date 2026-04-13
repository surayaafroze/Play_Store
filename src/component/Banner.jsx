import Image from 'next/image';
import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import bannerImg from '../assets/images/hero.png'
const Banner = () => {
  return (
    <div className='text-center mt-10'>
      <h1 className="text-5xl font-bold">We Build <br/>
 <span className='text-[#632EE3]'>Productive</span> Apps</h1>
  <p className="py-6 text-[#627382]">
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/> Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

      <div className='text-center flex flex-col justify-center items-center space-y-6 '>
       <div className='flex justify-between gap-4'>
        <button className="btn btn-primary"><IoLogoGooglePlaystore></IoLogoGooglePlaystore> Google Play</button>
        <button className="btn btn-primary"><FaAppStoreIos></FaAppStoreIos> App Store</button>
       </div>
       <Image
    src={bannerImg}
    width={600}
    height={600}
    alt='Banner'
    >

    </Image>
   
     </div>
    </div>
  );
};

export default Banner;