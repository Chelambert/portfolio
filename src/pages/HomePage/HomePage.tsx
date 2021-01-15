import React from 'react';
import './HomePage.css';
import Bio from '../../components/Bio/Bio';
import Projects from '../../components/Projects/Projects';
import Socials from '../../components/Socials/Socials';

const HomePage: React.FC = () => {

    return (
        <div className="HomePage">
            <Bio />
            <hr />
            <Projects />
            <hr />
            <Socials />
        </div>
    )
};

export default HomePage;
