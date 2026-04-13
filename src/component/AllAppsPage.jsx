
import AppCard from "./cards/AppCard";


const AllAppsPage = async () => {
const res = await fetch('http://localhost:3000/data.json');
const apps =await res.json();
console.log(apps)


  return (
    <div className='mt-10 max-w-7xl mx-auto'>
      <h2 className='text-3xl font-bold text-center'>Trending Apps</h2>
      <p className='text-[#627382] font-light text-center mt-2'>Explore All Trending Apps on the Market developed by us</p>
    
    {loading?(div)}
    
    <div className="grid grid-cols-3 gap-5 ">
      {apps.map(app=><AppCard app={app} key={app.id}></AppCard>)}
    </div>
    </div>
  );
};

export default AllAppsPage;