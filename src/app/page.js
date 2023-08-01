export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-black via-black via-black to-violet-700'>
      <div className='flex flex-col sm:flex-row'>
      <h3 className='text-white mt-5 sm:ml-40 text-2xl font-Poppins font-bold hidden sm:block'> The Bengal Studio</h3>
        <h3 className='text-white mt-5 sm:ml-40 text-2xl font-Poppins font-bold block sm:hidden'>Metav</h3>
       
        <div className='sm:ml-auto mt-5 flex lg:ml-96 sm-flex '>
          <h4 className='text-white relative ml-96text-1xl font-Poppins'>Home</h4>
          <h4 className='text-white relative ml-10 text-1xl font-Poppins'>Blog</h4>
          <h4 className='text-white relative ml-10 text-1xl font-Poppins'>Career</h4>
          <h4 className='text-white relative ml-10 text-1xl font-Poppins'>About us</h4>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row sm:relative sm:ml-40 mt-10 sm:mt-10'>
        <img src="./a.png" className='lg:h-80 lg:w-2/5  sm:w-24 sm:h-20' />
        <img src="./b.png" style={{mixBlend:'multiply'}} className='h-80 w-full sm:w-2/5 sm:ml-10 sm:top-10' />
      </div>
      <div className='relative mt-10 sm:mt-20 flex justify-center'>
        <img src="./c.png" style={{mixBlend:'multiply'}} className='h-1/4 w-full sm:w-3/4' />
      </div>
      <div className='relative mt-10 sm:mt-16 flex justify-center'>
        <img src="./d.png" style={{mixBlend:'multiply'}} className='h-3/4 w-full sm:w-3/4' />
      </div>
      <div className='flex justify-center relative mt-10 sm:mt-8'>
        <img src="./e.png" style={{mixBlend:'multiply'}} className='h-3/4 w-full sm:w-2/4' />
      </div>
      <div className='flex justify-center relative mt-10 sm:mt-0'>
        <img src="./f.png" style={{mixBlend:'multiply'}} className='h-3/4 w-full sm:w-2/4' />
      </div>
      <div className='flex mt-10'>
        <img src="./g.png" style={{mixBlend:'multiply'}} className='h-56 w-full' />
      </div>
    </div>
  )
}