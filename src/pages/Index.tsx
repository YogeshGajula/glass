
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
