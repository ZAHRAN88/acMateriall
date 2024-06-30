'use client'
import { PlusCircle } from 'lucide-react'
import React from 'react'
import ResourceModal from './ResourceModal';
interface Props {
    weekId: string;
 
}
const AddResourceBtn:React.FC<Props> = ({weekId}) => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='flex justify-between items-center'>

   
    <div onClick={()=>{
      setIsOpen(!isOpen)
    }}>
      <PlusCircle size={15} />
    </div>
    {isOpen && <ResourceModal id={weekId}  />}
    </div>
  )
}

export default AddResourceBtn
