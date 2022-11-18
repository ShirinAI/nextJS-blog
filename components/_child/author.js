import React from 'react'
import Image from 'next/image'
import Link from 'next/image'

const author = () => {
  return (
    <div className='author flex py-5'>
    <div>
      <Image src={'/images/profilepic.jpg'} className='rounded-full' width={60} height={60}/>
    </div>
     <div className='flex flex-col justify-center px-4'>
      <div>Sherri Ase</div>
      <div className='text-gray-500'>Founder</div>
    </div>
    </div>
  )
}

export default author