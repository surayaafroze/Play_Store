'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import logo from '../assets/images/logo.png'
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
const pathName =usePathname()
const links = <>
<li><Link href='/' className={pathName=== '/'? 'text-blue-700 font-bold':''} >Home</Link> </li>
<li><Link href='/apps' className={pathName==='/apps'? 'text-blue-700 font-bold':''}>Apps</Link> </li>
<li><Link href='/installation' className={pathName==='/installation'?'text-blue-700 font-bold':''}>Instalation</Link> </li>

</>


  return (
    <div className='bg-base-100 shadow-sm'> 
    <div className="navbar  max-w-7xl mx-auto">
  <div className="navbar-start ">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
     
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>

    </div>
 <div className='flex gap-1 justify-center items-center'>
  <Image src={logo}width={50} height={50} alt='logo'></Image>
 <span className='text-[#632EE3] font-bold'>HERO.IO</span>
 </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
    {links}
    </ul>
  </div>
  <div className="navbar-end ">
    
    <a className="btn bg-[#632EE3] text-white font-bold"> <FaGithub ></FaGithub>Contribution</a>
  </div>
</div>
    </div>

  );
};

export default Navbar;