import type { NextPage } from 'next';
import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SeaMapSection from '../components/SeaMapSection';
import TeamSection from '../components/TeamSection';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <SeaMapSection />
                <TeamSection />
                <ContactSection />
            </main>
            <Header theme='dark' />
        </>
    );
};

export default Home;
