// const AllAppsPage = async () => {
// const res = await fetch(`http://localhost:3000/data.json/${id}`);
// const apps =await res.json();
// return apps}


import InstalToggelButton from "@/component/InstalToggelButton";
import PieCharts from "@/component/PieCharts";
import Image from "next/image";


import { HashLoader } from "react-spinners";

const AppsDetailsPage =async ({params}) => {
  const {id} =await params;
const res = await fetch(`http://play-store-opal.vercel.app/data.json`,{cache:'no-store'});
const apps =await res.json();

  const app =apps.find((app)=>app.id==id)
  console.log(apps)

    // const {installedApps,setInstalledApps} =useContext(InstallAppProvider)

  if(!app){
 return(
   <div className="flex justify-center items-center h-screen">
 <HashLoader></HashLoader>
   
    </div>
 ) ;
  }
  
  return (
    <div >
    <div className="text-center flex justify-center items-center gap-10 ">
       <Image
     className="rounded-2xl"
     src={app.image}
     alt={app.title}
     width={300}
     height={300}
     ></Image>
      <PieCharts></PieCharts>
    </div>
      <div className="text-center mt-6">
      <InstalToggelButton app={app}></InstalToggelButton>
      </div>
    </div>
  );
};

export default AppsDetailsPage;