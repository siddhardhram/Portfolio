import Hero from '../components/Hero';
import Skills from '../components/Skills';
import About from '../components/About';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div className="pb-20">
            <Hero />
            <Skills />
            <About />
            <Projects />
        </div>
    );
};

export default Home;
