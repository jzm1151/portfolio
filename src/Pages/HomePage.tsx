import HeaderNav from '../Components/Header/HeaderNav'
import GreetingSection from '../Components/Sections/GreetingSection'
import SkillLogo from '../UI/Logos/SkillLogo'

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
                  <SkillLogo logoText='Laravel' logoHeight={40} logoWidth={42} logoViewBox='0 0 50 52' logoPathElement={<path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z" fill="#FF2D20" fill-rule="evenodd"/>} />
                  <SkillLogo logoText='Alpine.js' logoHeight={40} logoWidth={42} logoViewBox='0 0 128 128' logoPathElement={<><path fill="#77c1d2" fill-rule="evenodd" d="M98.444 35.562 126 62.997 98.444 90.432 70.889 62.997z" clip-rule="evenodd"/><path fill="#2d3441" fill-rule="evenodd" d="m29.556 35.562 57.126 56.876H31.571L2 62.997z" clip-rule="evenodd"/></>} />
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