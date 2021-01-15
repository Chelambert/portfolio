import React, { useState } from 'react';
import Joke from '../Joke/Joke';

const Jokes = () => {
    const [jokes, setJokes] = useState([]);

    const getRandomTenJokes = async () => {
        try {
            const resp = await fetch('https://official-joke-api.appspot.com/random_ten');
            const jokesArr = await resp.json();
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
