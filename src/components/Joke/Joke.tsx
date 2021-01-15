import React from 'react';
import { iJoke } from '../../utils/interfaces';

interface Props {
    joke: iJoke;
}

const Joke: React.FC<Props> = ({ joke }) => {
    const { setup, punchline } = joke;

    return (
        <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
    );
}

export default Joke;