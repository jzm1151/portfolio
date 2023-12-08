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
          <div className='bg-gray-blue-950 h-80 translate-y-28 z-40'>
            <div className='grid ml-5 mr-5 my-14 md:grid-cols-2 md:mx-auto md:my-28 md:w-11/12 lg:w-9/12 lg:my-32 xl:w-8/12 xl:my-36'>
              <div className='col-span-2 md:col-span-1'>
                <h2 className='text-3xl font-bold text-gray-blue-600 mb-3 md:mb-5 md:text-4xl lg:text-5xl'>About Me</h2>
                <p className='text-xl text-gray-blue-200 mb-7 md:mb-10 md:text-2xl'>I started my journey in software unitentionally, while taking an intro to programming class while preparing to enter a Mechanical Engineering program, after that class I changed my major to Computer Science and never looked back. </p>
              </div>
            </div>
          </div>
          <div className='bg-gray-blue-950 h-96 skew-y-3'></div>
        </section>
      </main>
    </>
  )
}

export default HomePage