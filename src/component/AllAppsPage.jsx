
import Link from "next/link";
import AppCard from "./cards/AppCard";


const AllAppsPage = async ({from}) => {
const res = await fetch('http://play-store-opal.vercel.app/data.json',{cache:'no-store'});
const apps =await res.json();
// console.log(apps)
console.log(from,'from')


  return (
    <div className='mt-10 max-w-7xl mx-auto'>
      <h2 className='text-3xl font-bold text-center'>{from==='homePage'?'Trending Apps':'All Apps'}</h2>
      <p className='text-[#627382] font-light text-center mt-2'>Explore All Trending Apps on the Market developed by us</p>
    
   
    <div className="grid grid-cols-3 gap-5 ">
      {apps.slice(0,from==='homePage'?9:apps.length).map(app=><AppCard app={app} key={app.id}></AppCard>)}
    </div>
  
    <div className="text-center  flex justify-center items-center mt-10 mb-15">
      <Link href={'/apps'} ><button className="btn btn-primary" >View All</button></Link>
    </div>
    
    </div>
  );
};

export default AllAppsPage;