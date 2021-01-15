import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
import Bio from '../../components/Bio/Bio';
import Projects from '../../components/Projects/Projects';
import Socials from '../../components/Socials/Socials';

const HomePage = () => {

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

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
