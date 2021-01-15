import React from 'react';
import { iSocial } from '../../utils/interfaces'

interface Props {
    social: iSocial;
}

const Social: React.FC<Props> = ({ social }) => {
    const { image, link } = social;

    return (
        <span>
            <a href={link}>
                <img src={image} alt='social' style={{ width: 35, height: 35, margin: 10 }} />
            </a>
        </span>
    )
}

export default Social;