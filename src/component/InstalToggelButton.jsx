'use client'
import React, { useContext } from 'react';
import { InstallAppProvider } from './installApps/InstallAppContext';
import { toast } from 'react-toastify';

const InstalToggelButton = ({app}) => {
 const {installedApps,setInstalledApps} =useContext(InstallAppProvider)
 console.log(installedApps)
 
  const handelerClick = () =>{
setInstalledApps([...installedApps,app])
toast.success(`${app.title} is installe`)
  }
  return (
    <div>
      <button onClick={handelerClick} className='btn btn-primary'>
        Install Now
      </button>
    </div>
  );
};

export default InstalToggelButton;