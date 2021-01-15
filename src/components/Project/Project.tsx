import React from 'react';
import { iProject } from '../../utils/interfaces'

interface Props {
    project: iProject;
}

const Project: React.FC<Props> = ({ project }) => {
    const { title, image, description, link } = project;

    return (
        <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{ width: 200, height: 120 }} />
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )
}

export default Project;