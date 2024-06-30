"use client";
import { updateResource ,deleteResource} from "@/app/lib/actions";
import { CircleX, Delete, DeleteIcon, Edit, Edit2Icon, Trash } from "lucide-react";
import { useActionState, useState } from "react";

interface Props {
  id: string;
  text: string;
  link: string;
}

const EditButton: React.FC<Props> = ({ id, text, link }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col">
        <div className="flex justify-between">
            <div className="flex items-center justify-start gap-4" title="Edit Resource" onClick={() => setIsEditing(true)}>
        <Edit2Icon size={15} className=" cursor-pointer" />
        <div onClick={
            ()=>{
                deleteResource(id);
            }
        } className=" cursor-pointer">
        <Trash size={15}  />

        </div>
        
      </div>
      {isEditing && 
        
        <div className=" cursor-pointer" onClick={()=>{
            setIsEditing(!isEditing)
        }}>
        <CircleX size={20}/>     
        </div>
        }
        </div>
      
      {isEditing &&
        <form
          className="flex my-4 w-full flex-col items-center justify-center gap-5"
          action={updateResource}
        >
          <input hidden type="text" name="id" value={id} />
          <input
            className="p-3 rounded-md"
            type="text"
            placeholder={text}
            name="text"
          />
          <input
            className="p-3 rounded-md"
            type="text"
            name="link"
            placeholder={link}
           
          />
          <button
            className="p-3 bg-yellow-300 rounded-md text-white"
            type="submit"
          >
            Update
          </button>
        </form>
      }
    </div>
  );
};

export default EditButton;
