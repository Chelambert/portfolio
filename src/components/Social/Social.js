import React from 'react';

const Social = props => {
    const { image, link } = props.social;

    return (
        <span>
            <a href={link}>
                <img src={image} alt='social' style={{ width: 35, height: 35, margin: 10 }} />
            </a>
        </span>
    )
}

export default Social;