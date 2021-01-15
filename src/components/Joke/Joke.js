import React from 'react';

const Joke = ({ joke }) => {
    const { setup, punchline } = joke;

    return (
        <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
    );
}

export default Joke;