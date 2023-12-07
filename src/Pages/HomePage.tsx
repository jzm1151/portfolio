import HeaderNav from '../Components/Header/HeaderNav'
import GreetingSection from '../Components/Sections/GreetingSection'

function HomePage() {

  return (
    <>
      <HeaderNav />
      <main className='grid ml-5 mr-5 my-14 md:grid-cols-2 md:mx-auto md:my-28 md:w-11/12 lg:w-9/12 lg:my-32 xl:w-8/12 xl:my-36'>
        <GreetingSection position='col-span-2'/>
      </main>
    </>
  )
}

export default HomePage