import React, { createContext, useState } from 'react';



export const InstallAppProvider =createContext()
const InstallAppContext = ({children}) => {
  const [installedApps,setInstalledApps] =useState([])

const data={
 installedApps,
 setInstalledApps,
}

  return <InstallAppProvider.Provider value={data}>{children}</InstallAppProvider.Provider>
};

export default InstallAppContext;