import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './JokeRandom.css';
import Joke from '../Joke/Joke';

const JokeRandom = () => {
    const [joke, setJoke] = useState({});

    useEffect(() => {
        getRandomJoke();
    }, []);

    const getRandomJoke = async () => {
        try {
            const resp = await fetch('https://official-joke-api.appspot.com/random_joke');
            const jokeObj = await resp.json();
            setJoke(jokeObj);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="JokeRandom">
            <Joke joke={joke} />
            <button onClick={getRandomJoke}>New Joke</button>
        </div>
    )
};

JokeRandom.propTypes = {};

JokeRandom.defaultProps = {};

export default JokeRandom;
