import Link from "next/link"


const Homepage = async () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
      <h1 className='text-white text-4xl font-bold mb-6'>AC Material</h1>
      <p className='text-white mb-4'>To go straight to the PDFs, check the links below</p>
      <div className='flex gap-4 mb-6'>
        <Link href='/courses/5'>
        <button className='bg-white py-2 px-4 rounded-md shadow-lg font-semibold text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out'>1st Semester</button>
        </Link>
        <button className='bg-white py-2 px-4 rounded-md shadow-lg font-semibold text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out'>2nd Semester</button>
      </div>
      <div className='text-center flex flex-col items-center w-[60%] h-[clamp(120px,300px,100%)]'>
        <h2 className='text-white font-semibold mb-2'>Notes</h2>
        <p className='italic w-full h-full bg-white text-slate-400 p-5 rounded-lg'>
          No notes for now
        </p>
      </div>  
    </div>
  )
}

export default Homepage
