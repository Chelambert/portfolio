import React from 'react';
import './JokesPage.css';
import Jokes from '../../components/Jokes/Jokes';
import JokeRandom from '../../components/JokeRandom/JokeRandom';

const JokesPage: React.FC = () => {

    return (
        <div className="JokesPage">
            <JokeRandom />
            <Jokes />
        </div>
    )
};

export default JokesPage;
