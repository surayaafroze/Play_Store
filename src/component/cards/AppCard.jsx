
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload, FaStar } from 'react-icons/fa';

const AppCard = ({app}) => {

  const {downloads,ratingAvg,title,image,} =app
  return (
    <Link href={`/apps/${app.id}`}>
    <div className="card bg-base-100 w-96 shadow-sm">

    {/* <Image
    src={image}
    alt={title}
    width={300}
    height={300}
    >
    </Image> */}
<div className=' flex justify-center items-center p-4'>

<Image
className='rounded-2xl'
src={image}
alt={title}
width={200}
height={200}
>

</Image>
</div>

  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
   <div>
    <span className='flex p-4'><FaDownload></FaDownload>{downloads}</span>
    <span className='flex p-4'><FaStar></FaStar>{ratingAvg}</span>
   </div>
  </div>
  
                  
                  
             
</div>
                  </Link>
  );
};

export default AppCard;