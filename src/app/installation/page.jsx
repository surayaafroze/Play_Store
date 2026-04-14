'use client'

import { InstallAppProvider } from '@/component/installApps/InstallAppContext';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const Installations = () => {
  const  {installedApps,setInstalledApps} =useContext(InstallAppProvider)

const handelUninstall=(app)=>{
  const filterApp=installedApps.filter((iApp)=>iApp.id!= app.id)
  setInstalledApps(filterApp)
  toast.warning( `${app.title} is uninstalled`)
}

  return (
    <div >
    {installedApps.length===0?<h2 className=' text-6xl font-bold items-center flex justify-center max-h-[60vh]'>no installed apps found</h2>: installedApps.map((app,index)=> <div key={index} className='flex flex-col gap-10  mt-4 bg-base-200 '>
<div className='flex justify-around'>

  <Image
src={app.image}
alt={app.title}
width={200}
height={200}
>

</Image>
<button className='btn btn-primary' onClick={()=>handelUninstall (app)}>delete</button>
</div>
    </div>)}
    </div>
  );
};

export default Installations;