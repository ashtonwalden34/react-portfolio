import React from 'react';
import AppCard from '../appCard';
import WebAppData from "../../utils/webApps";

function projectsContainer() {
    const webApps = WebAppData

    return(
        <div>
            <h2>Check out some apps I've built</h2>
            {webApps.map(project => (
                <AppCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    appLink={project.appLink}
                    repository={project.repository}
                    technologiesUsed={project.technologies}
                    screenshot={project.screenshot}
                />
            ))}
        </div>
    )
}

export default projectsContainer;