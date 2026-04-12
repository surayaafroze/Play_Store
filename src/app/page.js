import React from 'react';

const HomePage =async () => {
  const res =await fetch('https://jsonplaceholder.typicode.com/users');
  const data=await res.json()
  console.log(data)
  return (
    <div>
      
    </div>
  );
};

export default HomePage;