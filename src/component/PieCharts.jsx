'use client'
import React from 'react';

import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const PieCharts = () => {

  const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
 
  { name: 'Group D', value: 200, fill: '#FF8042' },
];
  return (
    <div>
       <PieChart style={{ width: '100%', maxWidth: '400px', maxHeight: '70vh', aspectRatio: 1,margin:'auto' }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
    <Tooltip></Tooltip>
    </PieChart>
   
    </div>
  );
};

export default PieCharts;