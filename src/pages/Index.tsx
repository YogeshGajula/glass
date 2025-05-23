
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Header />
      
      {/* Hero section with its own particle background */}
      <Hero />
      
      {/* All other sections get the particle background */}
      <div className="relative">
        <ParticleBackground isDarkMode={isDarkMode} />
        <div className="relative z-10">
          <About />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
