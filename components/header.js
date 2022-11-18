import { CiFacebook, CiTwitter, CiLinkedin } from 'react-icons/ci';
import Link from 'next/Link';

export default function header() {
  return (
    <div className='bg-gray-50 '>
      <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
        <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
          <input type='text' className='mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-full text-s, shadow-sm placeholder-slate-500' placeholder='Search...'/>
        </div>
        <div className='shrink w-80 sm:order-2'>
          <Link href={"/"} className="font-bold uppercase text-3xl">Design</Link>
        </div>
        <div className='w-96 order-3 flex justify-center'>
          <div className='flex gap-6'>
            <Link href={"/"}><CiFacebook size={30}/></Link>
            <Link href={"/"}><CiTwitter size={30}/></Link>
            <Link href={"/"}><CiLinkedin size={30}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
}


