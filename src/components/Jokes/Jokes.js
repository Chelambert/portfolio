import React, { Component } from 'react';
import Joke from '../Joke/Joke';

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        this.fetchJoke();
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message));

    }

    fetchJoke = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message));
    }

    render() {
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke} />
                <button onClick={this.fetchJoke}>New Joke</button>
                <hr />
                <h3>Want ten new JOKES?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                { this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
            </div>
        )
    }
}

export default Jokes;
