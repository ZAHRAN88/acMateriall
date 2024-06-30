
"use client"
import React, { useState } from 'react'


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
  return (
    <div>
      <input
          type="text"
          className='px-3 py-1 rounded-md focus:outline-none'
          placeholder="Search courses..."
          onKeyDown={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
        />
    </div>
  )
}

export  {SearchBar, }
