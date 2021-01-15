import React, { useEffect, useState } from 'react';
import './JokeRandom.css';
import Joke from '../Joke/Joke';
import { iJoke } from '../../utils/interfaces';

const JokeRandom: React.FC = () => {
    const [joke, setJoke] = useState({} as iJoke);

    useEffect(() => {
        getRandomJoke();
    }, []);

    const getRandomJoke = async () => {
        try {
            const resp = await fetch('https://official-joke-api.appspot.com/random_joke');
            const jokeObj: iJoke = await resp.json();
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

export default JokeRandom;
