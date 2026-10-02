import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import ExperienceEducation from '../components/ExperienceEducation';
import Skills from '../components/Skills';
import About from '../components/About';

const Home = () => {
  return (
    <div className="pt-4 pb-20">
      <Hero />
      <Projects />
      <Achievements />
      <ExperienceEducation />
      <Skills />
      <About />
    </div>
  );
};

export default Home;
