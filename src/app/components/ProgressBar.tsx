'use client'
import React, { useEffect, useState } from 'react'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { Button } from '@mui/material';

import { CourseResources } from '../lib/constants';
import { courseResources } from '../lib/actions';
interface Props {
    courseId: string
  
    progress: number
}


const normalise = (value:number) => ((value - 0) * 100) / (100 - 0);
const ProgressBar:React.FC<Props> = async ({courseId,progress}) => {
  const borderRadius = {createTheme: {borderRadius: 10}}


  
  const resourcesCount = await courseResources(courseId)
  return (
    <div>
        <span className='font-medium text-black'>Your course progress </span>
      <LinearProgress sx={borderRadius} variant="determinate" color='success' value={normalise(progress)} />
      <span className='text-black'>
     
      </span>
      
      

    </div>
  )
}

export default ProgressBar
