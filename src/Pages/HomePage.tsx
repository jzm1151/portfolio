import HeaderNav from '../Components/Header/HeaderNav'
import GreetingSection from '../Components/Sections/GreetingSection'
import AboutSection from '../Components/Sections/AboutSection'
import ProjectsSection from '../Components/Sections/ProjectsSection/ProjectsSection'

function HomePage() {

  return (
    <>
      <HeaderNav />
      <main>
        <GreetingSection position='col-span-2'/>
        <AboutSection />
        <ProjectsSection />
      </main>
    </>
  )
}

export default HomePage