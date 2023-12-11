import HeaderNav from '../Components/Header/HeaderNav'
import GreetingSection from '../Components/Sections/GreetingSection'

function HomePage() {

  return (
    <>
      <HeaderNav />
      <main>
        <section className='grid ml-5 mr-5 my-14 md:grid-cols-2 md:mx-auto md:my-28 md:w-11/12 lg:w-9/12 lg:my-32 xl:w-8/12 xl:my-36'>
          <GreetingSection position='col-span-2'/>
        </section>
        <section className='relative'>
          <div className='bg-gray-blue-950 h-80 w-full -skew-y-3 absolute top-0'></div>
          <div className='bg-gray-blue-950 translate-y-28 z-40'>
            <div className='grid ml-5 mr-5 my-14 gap-10 md:grid-cols-2 md:mx-auto md:my-28 md:w-11/12 lg:w-9/12 lg:my-32 xl:w-8/12 xl:my-36'>
              <div className='col-span-2 md:col-span-1 self-center'>
                <h2 className='text-3xl font-bold text-gray-blue-600 mb-3 md:mb-5 md:text-4xl lg:text-5xl' id='about'>About Me</h2>
                <p className='text-xl text-gray-blue-200 mb-7 md:mb-10 md:text-2xl'>I started my journey in software unitentionally, while taking an intro to programming class while preparing to enter a Mechanical Engineering program, after that class I changed my major to Computer Science and never looked back.</p>
              </div>
              <div className='col-span-2 md:col-span-1 self-center'>
                <h2 className='text-3xl font-bold text-gray-blue-600 mb-3 md:mb-5 md:text-4xl lg:text-5xl'>Skills</h2>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='w-full h-20 bg-gray-blue-900 backdrop-blur-3xl rounded text-xl text-gray-blue-200 bold md:text-2xl'>Testing</div>
                  <div className='w-full h-20 bg-gray-blue-900 backdrop-blur-3xl rounded text-xl text-gray-blue-200 bold md:text-2xl'>Testing</div>
                  <div className='w-full h-20 bg-gray-blue-900 backdrop-blur-3xl rounded text-xl text-gray-blue-200 bold md:text-2xl'>Testing</div>
                  <div className='w-full h-20 bg-gray-blue-900 backdrop-blur-3xl rounded text-xl text-gray-blue-200 bold md:text-2xl'>Testing</div>
                  <div className='w-full h-20 bg-gray-blue-900 backdrop-blur-3xl rounded text-xl text-gray-blue-200 bold md:text-2xl'>Testing</div>
                  <div className='w-full h-20 bg-gray-blue-900 backdrop-blur-3xl rounded text-xl text-gray-blue-200 bold md:text-2xl'>Testing</div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-blue-950 skew-y-3 relative -z-10 h-40 md:h-52 md:-translate-y-28 lg:h-72 lg:-translate-y-48 2xl:-translate-y-52'></div>
        </section>
      </main>
    </>
  )
}

export default HomePage