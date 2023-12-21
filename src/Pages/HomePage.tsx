import HeaderNav from '../Components/Header/HeaderNav'
import GreetingSection from '../Components/Sections/GreetingSection'
import AboutSection from '../Components/Sections/AboutSection'
import ProjectsSection from '../Components/Sections/ProjectsSection/ProjectsSection'

function HomePage() {

  return (
    <>
      <HeaderNav />
      <main>
        <section className='grid ml-5 mr-5 mb-14 mt-32 md:grid-cols-2 md:mx-auto md:mb-28 md:mt-40 md:w-11/12 lg:w-9/12 lg:my-32 xl:w-8/12 xl:mb-36 xl:mt-52'>
          <GreetingSection position='col-span-2'/>
        </section>
        <AboutSection />
        <ProjectsSection />
      </main>
    </>
  )
}

export default HomePage