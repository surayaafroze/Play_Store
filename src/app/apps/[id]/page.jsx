// const AllAppsPage = async () => {
// const res = await fetch(`http://localhost:3000/data.json/${id}`);
// const apps =await res.json();
// return apps}

const AppsDetailsPage =async ({params}) => {
  const {id} =await params;
const res = await fetch(`http://localhost:3000/data.json`);
const apps =await res.json();

  const app =apps.find((app)=>app.id==id)
  console.log(apps)
  return (
    <div>
      heollo everyone
    </div>
  );
};

export default AppsDetailsPage;