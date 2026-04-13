import Image from 'next/image';
import React from 'react';

import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaAppStoreIos } from 'react-icons/fa';

import Banner from '@/component/Banner';
import Stat from '@/component/Stat';
import AllApps from './apps/page';
import AllAppsPage from '@/component/AllAppsPage';

const HomePage =async () => {
  
  return (
    <div>
  <Banner></Banner>
<Stat></Stat>

<main>
  <AllAppsPage from='homePage'></AllAppsPage>
</main>
</div>

  
  );
};

export default HomePage;