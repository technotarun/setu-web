import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Solutions from '../components/Solutions';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Solutions />
        </div>
    );
};

export default Home;