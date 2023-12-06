import HeaderNav from '../Components/Header/HeaderNav'
import GreetingSection from '../Components/Sections/GreetingSection'

function HomePage() {

  return (
    <>
      <HeaderNav />
      <main className='grid'>
        <GreetingSection />
      </main>
    </>
  )
}

export default HomePage