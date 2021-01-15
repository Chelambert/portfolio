import React, { Component } from 'react';
import profile from '../../assets/profile_cropped.jpg';
import Title from '../Title/Title';

class Bio extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Chelsea.</p>
                <Title />
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in West Palm Beach, and code every day.</p>
                            <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                            <p>Besides coding, I also love art and food!</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>

                        </div>
                    ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read more</button>
                            </div>
                        )
                }
            </div>
        )
    }
}


export default Bio;