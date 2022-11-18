import Image from 'next/image';
import Link from 'next/Link';
import Author from './_child/author';

const section2 = () => {
  return (
    <div className='container mx-auto md:px-20 py-10'>
      <div className='flex justify-center text-6xl md:text-4xl sm:text-2xl font-bold text-gray-800 pb-5'>
        Latest Posts
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        { Post() }
        { Post() }
        { Post() }
        { Post() }
        { Post() }
        { Post() }
        { Post() }
        { Post() }
      </div>

    </div>
  )
}

function Post(){
  return(
    <div>
      <Link href={'/'}>
        <Image src={'/images/background.jpg'}
          width={400}
          height={450}/>
          </Link>
        <div>
          <Link href={'/'} className='text-orange-600'>Work and Travel</Link>
          <Link href={'/'} className='text-gray-800 px-3'>-July 3 2022</Link>
        </div>
      <Link href={'/'} className='text-2xl font-bold text-gray-800'>The pros and cons of working from home in 2022</Link>
      <div className='text-gray-700 py-3'>
          Apart from the obvious convenience of not being in bumper to bumper traffic or dealing with the public transportation, allowing your employees to work from home may actually help them get more work done. Let us take a look at some of the most compelling reasons...
          </div>
        <div><Author/></div>
    </div>
  )
}

export default section2
