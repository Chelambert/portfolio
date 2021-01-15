import React, { useState, MouseEvent } from 'react';
import profile from '../../assets/profile_cropped.jpg';
import Title from '../Title/Title';

const Bio: React.FC = () => {
    const [displayBio, setDisplayBio] = useState(false);

    const toggleDisplayBio = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setDisplayBio(!displayBio);
    }

    return (
        <div>
            <img src={profile} alt='profile' className='profile' />
            <h1>Hello!</h1>
            <p>My name is Chelsea.</p>
            <Title />
            <p>I'm always looking forward to working on meaningful projects.</p>
            {
                displayBio ? (
                    <div>
                        <p>I live in West Palm Beach, and code every day.</p>
                        <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                        <p>Besides coding, I also love art and food!</p>
                        <button onClick={toggleDisplayBio}>Show less</button>

                    </div>
                ) : (
                        <div>
                            <button onClick={toggleDisplayBio}>Read more</button>
                        </div>
                    )
            }
        </div>
    );
}

export default Bio;