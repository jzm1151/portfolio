import HeaderNav from '../Components/Header/HeaderNav';
import GreetingSection from '../Components/Sections/GreetingSection';
import AboutSection from '../Components/Sections/AboutSection';
import ProjectsSection from '../Components/Sections/ProjectsSection/ProjectsSection';
import ContactSection from '../Components/Sections/ContactSection/ContactSection';
import Footer from '../Components/Footer/Footer';

function HomePage() {
    return (
        <>
            <HeaderNav />
            <main>
                <GreetingSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;
