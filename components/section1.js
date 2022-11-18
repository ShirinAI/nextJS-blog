import React from 'react';
import Image from 'next/image';
import Link from 'next/Link';
import Author from './_child/author';


const section1 = () => {
 
  return (
    <div className='py-16'>
      <div className='container mx-auto md:px-20'>
        <div className='font-bold text-5xl pb-12 text-center'>Trending</div>
        <div>{Slide()}</div>
        </div>
    </div>
  );
}

// <div className=""></div>

function Slide() {
  return (
    <div className='grid md:grid-cols-2 gap-7'>
      <div className=''>
        <Link href={'/'}>
        <Image src={'/images/background.jpg'}
          width={600}
          height={600}/>
          </Link>
      </div>
      <div className='flex flex-col justify-center gap-6'>
        <div className="cat">
        <Link href={'/'} className='text-orange-600'>Work and Travel</Link>
        <Link href={'/'} className='text-gray-800 px-3'>-July 3 2022</Link>
        </div>
         <div>
            <Link href={'/'} className='text-6xl md:text-4xl sm:text-2xl font-bold text-gray-800'>The pros and cons of working from home in 2022</Link>
          </div>
          <div className='text-gray-700 py-3'>
          Apart from the obvious convenience of not being in bumper to bumper traffic or dealing with the public transportation, allowing your employees to work from home may actually help them get more work done. Let us take a look at some of the most compelling reasons for letting your employees work from home: 
          </div>
        <div><Author/></div>
      </div>
    </div>

  );
}

export default section1;