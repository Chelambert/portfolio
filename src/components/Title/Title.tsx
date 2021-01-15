import React, { useState, useEffect } from 'react';
import './Title.css';

const TITLES = [
    'a software developer.',
    'an art lover.',
    'an enthusiastic learner.',
    'an adventure seeker.',
];

const Title: React.FC = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        let fade = setInterval(() => {
            setTitleIndex((titleIndex + 1) % TITLES.length);
            setFadeIn( true );
            fade = setTimeout(() => setFadeIn(false), 2000);
        }, 4000);
        return () => {
            clearTimeout(fade);
        }
    }, [titleIndex]);

    return (
        <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {TITLES[titleIndex]}</p>
    )
}

// class Title extends Component {
//     state = { titleIndex: 0, fadeIn: true };

//     componentDidMount() {
//         this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);

//         this.animateTitles();
//     }

//     componentWillUnmount() {
//         clearInterval(this.titleInterval);
//         clearTimeout(this.timeout);
//     }

//     animateTitles = () => {
//         this.titleInterval = setInterval(() => {
//             const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

//             this.setState({ titleIndex, fadeIn: true });

//             this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
//         }, 4000);
//     }

//     render() {
//         const { fadeIn, titleIndex } = this.state;

//         const title = TITLES[titleIndex];

//         return (
//             <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
//         )
//     }
// }

export default Title;