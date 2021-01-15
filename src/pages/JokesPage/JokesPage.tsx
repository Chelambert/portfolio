import React from 'react';
import PropTypes from 'prop-types';
import './JokesPage.css';
import Jokes from '../../components/Jokes/Jokes';
import JokeRandom from '../../components/JokeRandom/JokeRandom';

const JokesPage = () => {

    return (
        <div className="JokesPage">
            <JokeRandom />
            <Jokes />
        </div>
    )
};

JokesPage.propTypes = {};

JokesPage.defaultProps = {};

export default JokesPage;
