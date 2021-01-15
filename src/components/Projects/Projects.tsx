import React from 'react';
import PROJECTS from '../../test-data/projects-data';
import Project from '../Project/Project';

const Projects: React.FC = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
    </div>
)

export default Projects;