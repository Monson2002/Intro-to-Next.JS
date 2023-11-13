import React from 'react'
import Home from '@/Components/Home'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div className='flex justify-evenly items-stretch bg-blue-300 p-4'>
        <Home/>
        <div className='flex justify-evenly items-stretch mx-4'>
          <Link href={"/About"}>About</Link>
          <Link href={"/Contact"}>Contact</Link>
          <Link href={"/Projects"}>Project</Link>
          <Link href={"/Work"}>Work</Link>
        </div>
      </div>
    </>
  )
}

export default page