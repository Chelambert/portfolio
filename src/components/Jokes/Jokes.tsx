import React, { useState } from 'react';
import Joke from '../Joke/Joke';
import { iJoke } from '../../utils/interfaces';

const Jokes: React.FC = () => {
    const [jokes, setJokes] = useState([] as iJoke[]);

    const getRandomTenJokes = async () => {
        try {
            const resp = await fetch('https://official-joke-api.appspot.com/random_ten');
            const jokesArr: iJoke[] = await resp.json();
            setJokes(jokesArr);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h3>Want ten new jokes?</h3>
            <button onClick={getRandomTenJokes}>Fetch New Jokes</button>
            {
                jokes && jokes.map(joke => <Joke key={joke.id} joke={joke} />)
            }
        </div>
    );
}

export default Jokes;
