'use client'

import InstallAppContext from '@/component/installApps/InstallAppContext';
import React from 'react';

const Providers = ({children}) => {
  return <InstallAppContext>{children}</InstallAppContext>
  
};

export default Providers;